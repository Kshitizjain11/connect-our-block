import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, TrendingUp, CheckCircle, Clock, Users, MapPin, AlertCircle } from "lucide-react";

const CommunityFeatures = () => {
  const communityPosts = [
    {
      id: 1,
      user: "Priya S.",
      avatar: "PS",
      time: "2 hours ago",
      location: "Koramangala, Ward 68",
      issue: "Broken streetlight at Bus Stop #47",
      description: "This light has been out for 3 days. Makes the area unsafe for evening commuters.",
      image: "📸",
      likes: 23,
      comments: 7,
      boosts: 12,
      status: "in-progress",
      statusText: "Acknowledged by BBMP",
      priority: "high"
    },
    {
      id: 2,
      user: "Rajesh K.",
      avatar: "RK",
      time: "4 hours ago",
      location: "Indiranagar, Ward 42",
      issue: "Pothole causing traffic issues",
      description: "Large pothole near Metro station entrance. Vehicles are struggling to navigate.",
      image: "📸",
      likes: 45,
      comments: 12,
      boosts: 28,
      status: "resolved",
      statusText: "Fixed! Great work team 🎉",
      priority: "urgent"
    },
    {
      id: 3,
      user: "Anita M.",
      avatar: "AM",
      time: "6 hours ago",
      location: "Jayanagar, Ward 154",
      issue: "Garbage not collected for 4 days",
      description: "Overflowing bins attracting stray animals. Need immediate attention.",
      image: "📸",
      likes: 31,
      comments: 9,
      boosts: 19,
      status: "new",
      statusText: "Needs more visibility",
      priority: "medium"
    }
  ];

  const statusColors = {
    "new": "bg-gray-100 text-gray-700",
    "in-progress": "bg-primary-light text-primary",
    "resolved": "bg-success-light text-success"
  };

  const priorityEmojis = {
    "urgent": "🚨",
    "high": "⚠️",
    "medium": "📋"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 via-background to-accent/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary-light rounded-full px-6 py-2 mb-6">
            <Users className="h-5 w-5 mr-2 text-secondary" />
            <span className="text-secondary font-medium">Community & Trust Building</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Neighborhood,
            <span className="bg-gradient-community bg-clip-text text-transparent"> Your Voice</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what's happening around you, collaborate with neighbors, 
            and celebrate wins together in your civic community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Community Feed */}
          <div className="lg:col-span-2">
            <Card className="civic-card p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">🏘️ Community Feed</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">📍 Near Me</Button>
                  <Button variant="outline" size="sm">🔥 Trending</Button>
                </div>
              </div>

              <div className="space-y-6">
                {communityPosts.map((post) => (
                  <div key={post.id} className="border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-civic text-white font-bold">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{post.user}</span>
                          <span className="text-sm text-muted-foreground">• {post.time}</span>
                          <span className="text-xs">{priorityEmojis[post.priority]}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {post.location}
                        </div>
                        
                        <h4 className="font-bold mb-2">{post.issue}</h4>
                        <p className="text-muted-foreground mb-4">{post.description}</p>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg px-4 py-2 text-2xl">
                            {post.image}
                          </div>
                          <Badge className={`${statusColors[post.status]} border-none`}>
                            {post.status === 'resolved' && <CheckCircle className="h-3 w-3 mr-1" />}
                            {post.status === 'in-progress' && <Clock className="h-3 w-3 mr-1" />}
                            {post.status === 'new' && <AlertCircle className="h-3 w-3 mr-1" />}
                            {post.statusText}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm">
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                            {post.likes}
                          </button>
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </button>
                          <button className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                            <TrendingUp className="h-4 w-4" />
                            Boost ({post.boosts})
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Success Wall */}
            <Card className="civic-card p-6">
              <h3 className="text-xl font-bold mb-4">✨ Recent Wins</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-success text-white rounded-full p-2">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Streetlight Fixed!</p>
                    <p className="text-xs text-muted-foreground">MG Road • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-success text-white rounded-full p-2">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Pothole Repaired</p>
                    <p className="text-xs text-muted-foreground">Brigade Road • 4 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-success text-white rounded-full p-2">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Garbage Collected</p>
                    <p className="text-xs text-muted-foreground">Jayanagar • 6 hours ago</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ward Statistics */}
            <Card className="civic-card p-6">
              <h3 className="text-xl font-bold mb-4">📊 Ward 68 Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Issues</span>
                  <span className="font-bold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Resolved This Week</span>
                  <span className="font-bold text-success">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Rate</span>
                  <span className="font-bold text-primary">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Citizens</span>
                  <span className="font-bold text-secondary">1,247</span>
                </div>
              </div>
            </Card>

            {/* Community Challenge */}
            <Card className="civic-card p-6 bg-gradient-community text-white">
              <h3 className="text-xl font-bold mb-2">🏆 Weekly Challenge</h3>
              <p className="text-sm mb-4 text-white/90">
                Help us reach 100 reports this week!
              </p>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">73/100</div>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Join Challenge
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Collaboration Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="civic-card p-6 text-center">
            <div className="bg-gradient-civic text-white rounded-2xl p-4 mx-auto mb-4 w-fit">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Boost Issues</h3>
            <p className="text-muted-foreground mb-4">
              Help urgent issues get priority by boosting them with your neighbors
            </p>
            <Button variant="outline">Learn More</Button>
          </Card>

          <Card className="civic-card p-6 text-center">
            <div className="bg-gradient-success text-white rounded-2xl p-4 mx-auto mb-4 w-fit">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Collaborate</h3>
            <p className="text-muted-foreground mb-4">
              Comment, share experiences, and work together on solutions
            </p>
            <Button variant="outline">Join Discussion</Button>
          </Card>

          <Card className="civic-card p-6 text-center">
            <div className="bg-gradient-achievement text-white rounded-2xl p-4 mx-auto mb-4 w-fit">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Celebrate Wins</h3>
            <p className="text-muted-foreground mb-4">
              Share before/after photos and celebrate community achievements
            </p>
            <Button variant="outline">Share Success</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;