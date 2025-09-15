import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Issue = {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  photoPath?: string | null;
  location?: string;
  status: string;
  dateCreated: string;
};

const MyIssues = () => {
  const queryClient = useQueryClient();
  const userId = "demo-user-1"; // prototype auth
  const isAdmin = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("admin") === "1";

  const issuesQuery = useQuery<Issue[]>({
    queryKey: ["issues", userId],
    queryFn: async () => {
      const res = await fetch(`/api/issues?userId=${encodeURIComponent(userId)}`);
      if (!res.ok) throw new Error("Failed to load issues");
      return res.json();
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const res = await fetch(`/api/issues/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["issues", userId] }),
  });

  const nextStatus = (current: string) => {
    if (current === "Pending") return "Sent to Authority";
    if (current === "Sent to Authority") return "Resolved";
    return "Resolved";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">My Issues</h1>
          <p className="text-muted-foreground">Reports you have submitted and their status.</p>
        </div>

        {issuesQuery.isLoading && <p>Loading...</p>}
        {issuesQuery.error && <p className="text-destructive">Failed to load issues.</p>}

        <div className="grid gap-4 md:grid-cols-2">
          {issuesQuery.data?.map((issue) => (
            <Card key={issue.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-semibold">{issue.title || "Issue"}</CardTitle>
                <Badge>{issue.status}</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {issue.photoPath && (
                  <img
                    src={`/${issue.photoPath}`}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                    }}
                    alt="Issue photo"
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <p className="text-sm text-foreground whitespace-pre-wrap">{issue.description}</p>
                {issue.location && (
                  <p className="text-xs text-muted-foreground">Location: {issue.location}</p>
                )}
                <p className="text-xs text-muted-foreground">Created: {new Date(issue.dateCreated).toLocaleString()}</p>

                {isAdmin && issue.status !== "Resolved" && (
                  <div className="pt-2">
                    <Button
                      size="sm"
                      onClick={() => updateStatus.mutate({ id: issue.id, status: nextStatus(issue.status) })}
                      disabled={updateStatus.isPending}
                    >
                      Mark as {nextStatus(issue.status)}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyIssues;


