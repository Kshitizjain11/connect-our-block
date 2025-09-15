import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Plus, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Updates = () => {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      title: "Main Street Pothole Repairs Completed",
      content: "The pothole repairs on Main Street between 1st and 3rd Avenue have been completed. Traffic should flow normally starting tomorrow morning.",
      author: "City Maintenance Team",
      date: "2024-01-15",
      category: "Infrastructure",
      priority: "High"
    },
    {
      id: 2,
      title: "New Park Benches Installed",
      content: "Five new benches have been installed in Central Park based on community feedback. Thank you to everyone who participated in the location survey.",
      author: "Parks Department",
      date: "2024-01-12",
      category: "Parks",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Street Light Maintenance Schedule",
      content: "Regular maintenance will be performed on street lights in the downtown area next week. Some temporary outages may occur between 2-4 AM.",
      author: "Utilities Department",
      date: "2024-01-10",
      category: "Utilities",
      priority: "Low"
    }
  ]);

  const [newUpdate, setNewUpdate] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    priority: "Medium"
  });

  const { toast } = useToast();

  const handleAddUpdate = () => {
    if (!newUpdate.title.trim() || !newUpdate.content.trim() || !newUpdate.author.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const update = {
      id: updates.length + 1,
      ...newUpdate,
      date: new Date().toISOString().split('T')[0]
    };

    setUpdates([update, ...updates]);
    setNewUpdate({
      title: "",
      content: "",
      author: "",
      category: "",
      priority: "Medium"
    });

    toast({
      title: "Update added",
      description: "The community update has been posted successfully!",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Infrastructure": "bg-blue-100 text-blue-800 border-blue-200",
      "Parks": "bg-emerald-100 text-emerald-800 border-emerald-200",
      "Utilities": "bg-purple-100 text-purple-800 border-purple-200",
      "Safety": "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Community Updates</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest developments and improvements in your community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-foreground">Latest Updates</h2>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Update
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Update</DialogTitle>
                  <DialogDescription>
                    Share important information with the community.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={newUpdate.title}
                      onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
                      placeholder="Enter update title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      value={newUpdate.author}
                      onChange={(e) => setNewUpdate({ ...newUpdate, author: e.target.value })}
                      placeholder="Your name or department"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={newUpdate.category}
                        onChange={(e) => setNewUpdate({ ...newUpdate, category: e.target.value })}
                        placeholder="e.g. Infrastructure"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <select
                        id="priority"
                        value={newUpdate.priority}
                        onChange={(e) => setNewUpdate({ ...newUpdate, priority: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={newUpdate.content}
                      onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
                      placeholder="Write your update content here..."
                      rows={4}
                    />
                  </div>

                  <Button onClick={handleAddUpdate} className="w-full">
                    Post Update
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-6">
            {updates.map((update) => (
              <Card key={update.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{update.title}</CardTitle>
                    <div className="flex space-x-2">
                      {update.category && (
                        <Badge className={getCategoryColor(update.category)}>
                          {update.category}
                        </Badge>
                      )}
                      <Badge className={getPriorityColor(update.priority)}>
                        {update.priority}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{update.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(update.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>
                        {Math.floor(Math.random() * 24) + 1} hours ago
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{update.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {updates.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">No updates yet</h3>
              <p className="text-muted-foreground">Be the first to share a community update!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Updates;