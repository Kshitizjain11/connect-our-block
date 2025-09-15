import { Trophy, Medal, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";

const Leaderboard = () => {
  const leaderboardData = [
    {
      id: 1,
      name: "Sarah Johnson",
      points: 2450,
      reports: 45,
      resolved: 42,
      badge: "Community Champion",
      rank: 1,
      trend: "up"
    },
    {
      id: 2,
      name: "Mike Chen",
      points: 2200,
      reports: 38,
      resolved: 35,
      badge: "Issue Tracker",
      rank: 2,
      trend: "up"
    },
    {
      id: 3,
      name: "Emily Davis",
      points: 1980,
      reports: 41,
      resolved: 37,
      badge: "Problem Solver",
      rank: 3,
      trend: "down"
    },
    {
      id: 4,
      name: "David Wilson",
      points: 1750,
      reports: 32,
      resolved: 28,
      badge: "Active Reporter",
      rank: 4,
      trend: "up"
    },
    {
      id: 5,
      name: "Lisa Brown",
      points: 1620,
      reports: 29,
      resolved: 26,
      badge: "Civic Helper",
      rank: 5,
      trend: "same"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <Star className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />;
      default:
        return <div className="w-4 h-4 bg-muted-foreground rounded-full" />;
    }
  };

  const getBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 2:
        return "bg-gray-100 text-gray-800 border-gray-200";
      case 3:
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Community Leaderboard</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognize the most active community members who are making a difference through civic engagement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {leaderboardData.slice(0, 3).map((user) => (
              <Card key={user.id} className={`text-center ${user.rank === 1 ? 'ring-2 ring-yellow-400' : ''}`}>
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {getRankIcon(user.rank)}
                  </div>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <Avatar>
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </CardTitle>
                  <CardDescription className="font-medium">{user.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-primary">{user.points}</div>
                    <Badge className={getBadgeColor(user.rank)}>{user.badge}</Badge>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">{user.reports}</div>
                        <div className="text-muted-foreground">Reports</div>
                      </div>
                      <div>
                        <div className="font-medium">{user.resolved}</div>
                        <div className="text-muted-foreground">Resolved</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>Full Rankings</CardTitle>
              <CardDescription>Complete leaderboard with all community members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboardData.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-muted-foreground w-8">
                          #{user.rank}
                        </span>
                        {getRankIcon(user.rank)}
                      </div>
                      
                      <Avatar>
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <Badge variant="outline" className="text-xs">
                          {user.badge}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="font-bold text-lg">{user.points}</div>
                        <div className="text-xs text-muted-foreground">Points</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-medium">{user.reports}</div>
                        <div className="text-xs text-muted-foreground">Reports</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-medium">{user.resolved}</div>
                        <div className="text-xs text-muted-foreground">Resolved</div>
                      </div>
                      
                      <div className="flex items-center">
                        {getTrendIcon(user.trend)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;