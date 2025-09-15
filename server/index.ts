import 'dotenv/config';
import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient, ObjectId } from "mongodb";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// File uploads (photos)
const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  },
});
const upload = multer({ storage });

// MongoDB setup
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const mongoDbName = process.env.MONGODB_DB || "connect-our-block";
const mongoClient = new MongoClient(mongoUri);
let issuesCollection: import("mongodb").Collection;
let isMongoConnected = false;

async function ensureMongoConnection() {
  if (!isMongoConnected) {
    await mongoClient.connect();
    isMongoConnected = true;
    const db = mongoClient.db(mongoDbName);
    issuesCollection = db.collection("issues");
    await issuesCollection.createIndex({ userId: 1, dateCreated: -1 });
    await issuesCollection.createIndex({ status: 1, dateCreated: -1 });
  }
}

// Nodemailer setup (prototype)
const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
const smtpUser = process.env.SMTP_USER || "";
const smtpPass = process.env.SMTP_PASS || "";
const notifyEmail = process.env.NOTIFY_EMAIL || smtpUser;

const mailer = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
});

// API routes
app.get("/api/health", async (_req, res) => {
  try {
    await ensureMongoConnection();
    await issuesCollection.estimatedDocumentCount();
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false });
  }
});

// Create issue
app.post("/api/issues", upload.single("photo"), async (req, res) => {
  const { title, description, location, userId = "demo-user-1", userName = "Demo User" } = req.body;

  if (!title && !description) {
    return res.status(400).json({ error: "title or description is required" });
  }

  const photoPath = req.file ? `uploads/${path.basename(req.file.path)}` : null;
  const dateCreated = new Date();
  const status = "Pending";

  try {
    await ensureMongoConnection();
    const doc = {
      userId,
      userName,
      title: title || description?.slice(0, 40) || "Issue",
      description: description || title || "",
      photoPath,
      location: location || "",
      status,
      dateCreated,
    } as const;
    const result = await issuesCollection.insertOne(doc);
    const id = result.insertedId.toString();

    if (notifyEmail) {
      const subject = `New civic issue reported by ${userName}: ${title || "Untitled"}`;
      const text = `A new issue was reported.\n\nTitle: ${title || "Untitled"}\nDescription: ${description || ""}\nLocation: ${location || ""}\nStatus: ${status}\nDate: ${dateCreated.toISOString()}\nID: ${id}`;
      mailer
        .sendMail({ from: smtpUser || "no-reply@example.com", to: notifyEmail, subject, text })
        .catch(() => {});
    }

    res.status(201).json({ id, userId, userName, title: doc.title, description: doc.description, photoPath, location: doc.location, status, dateCreated: dateCreated.toISOString() });
  } catch (err) {
    res.status(500).json({ error: "Failed to save issue" });
  }
});

// List issues (optionally by userId)
app.get("/api/issues", async (req, res) => {
  const { userId } = req.query as { userId?: string };
  try {
    await ensureMongoConnection();
    const query: Record<string, unknown> = {};
    if (userId) query.userId = userId;
    const docs = await issuesCollection
      .find(query)
      .sort({ dateCreated: -1 })
      .toArray();
    const rows = docs.map((d: any) => ({
      id: d._id.toString(),
      userId: d.userId,
      userName: d.userName,
      title: d.title,
      description: d.description,
      photoPath: d.photoPath ?? null,
      location: d.location ?? "",
      status: d.status,
      dateCreated: new Date(d.dateCreated).toISOString(),
    }));
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to list issues" });
  }
});

// Get single issue
app.get("/api/issues/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ensureMongoConnection();
    const doc = await issuesCollection.findOne({ _id: new ObjectId(id) });
    if (!doc) return res.status(404).json({ error: "Not found" });
    res.json({
      id: doc._id.toString(),
      userId: doc.userId,
      userName: doc.userName,
      title: doc.title,
      description: doc.description,
      photoPath: doc.photoPath ?? null,
      location: doc.location ?? "",
      status: doc.status,
      dateCreated: new Date(doc.dateCreated).toISOString(),
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch issue" });
  }
});

// Update status (admin/manual)
app.patch("/api/issues/:id/status", express.json(), async (req, res) => {
  const { id } = req.params;
  const { status } = req.body as { status?: string };
  if (!status) return res.status(400).json({ error: "status required" });
  try {
    await ensureMongoConnection();
    const result = await issuesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );
    if (result.matchedCount === 0) return res.status(404).json({ error: "Not found" });
    res.json({ id, status });
  } catch (err) {
    res.status(500).json({ error: "Failed to update status" });
  }
});

// Serve uploaded files
app.use("/uploads", express.static(uploadsDir));

// Simulate automatic status progression for prototype
setInterval(async () => {
  try {
    await ensureMongoConnection();
    const now = new Date();
    const oneMinuteAgo = new Date(now.getTime() - 60_000);
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60_000);

    await issuesCollection.updateMany(
      { status: 'Pending', dateCreated: { $lte: oneMinuteAgo } },
      { $set: { status: 'Sent to Authority' } }
    );

    await issuesCollection.updateMany(
      { status: 'Sent to Authority', dateCreated: { $lte: fiveMinutesAgo } },
      { $set: { status: 'Resolved' } }
    );
  } catch {
    // ignore background update errors
  }
}, 30_000);

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});


