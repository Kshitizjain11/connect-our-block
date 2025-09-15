import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, MessageCircle, Plus, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const Community = () => {
  const [groups] = useState([
    {
      id: 1,
      name: "Downtown Neighborhood Watch",
      members: 45,
      description: "Keeping our downtown area safe and clean",
      category: "Safety",
      recent: "2 hours ago"
    },
    {
      id: 2,
      name: "Green Parks Initiative",
      members: 23,
      description: "Working together to improve our local parks",
      category: "Environment",
      recent: "5 hours ago"
    },
    {
      id: 3,
      name: "Street Maintenance Team",
      members: 67,
      description: "Reporting and tracking road repairs",
      category: "Infrastructure",
      recent: "1 day ago"
    }
  ]);

  const [selectedGroup, setSelectedGroup] = useState<typeof groups[0] | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "John D.", message: "The pothole on Main St has been fixed!", time: "10:30 AM" },
    { id: 2, user: "Sarah M.", message: "Great news! Thanks for reporting it.", time: "10:45 AM" },
    { id: 3, user: "Mike L.", message: "I noticed the streetlight on Oak Ave is out.", time: "11:15 AM" }
  ]);

  const { toast } = useToast();

  const handleJoinGroup = (groupId: number) => {
    toast({
      title: "Joined group",
      description: "You've successfully joined the community group!",
    });
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
      toast({
        title: "Message sent",
        description: "Your message has been posted to the group.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Community Groups</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with your neighbors, join local groups, and collaborate on community improvements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-foreground">Available Groups</h2>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Group
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <Card key={group.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                    <Badge variant="secondary">{group.category}</Badge>
                  </div>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{group.members} members</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{group.recent}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleJoinGroup(group.id)}
                    >
                      Join Group
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedGroup(group)}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle>{group.name}</DialogTitle>
                          <DialogDescription>
                            Real-time chat with {group.members} community members
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="flex flex-col h-96">
                          <div className="flex-1 overflow-y-auto p-4 border rounded-lg mb-4 space-y-3 bg-muted/20">
                            {messages.map((msg) => (
                              <div key={msg.id} className="flex flex-col space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium text-sm">{msg.user}</span>
                                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                                </div>
                                <p className="text-sm bg-background p-2 rounded">{msg.message}</p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            <Input
                              value={newMessage}
                              onChange={(e) => setNewMessage(e.target.value)}
                              placeholder="Type your message..."
                              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                              className="flex-1"
                            />
                            <Button onClick={handleSendMessage}>
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;