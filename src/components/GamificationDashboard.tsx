import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Flame, Users, Target, Award, TrendingUp } from "lucide-react";

const GamificationDashboard = () => {
  const achievements = [
    { name: "Pothole Hunter", icon: "🕳️", progress: 85, total: 10, color: "bg-gradient-civic" },
    { name: "Streetlight Guardian", icon: "💡", progress: 60, total: 5, color: "bg-gradient-community" },
    { name: "Clean Streets Hero", icon: "🧹", progress: 100, total: 15, color: "bg-gradient-success" },
    { name: "Community Leader", icon: "👑", progress: 45, total: 20, color: "bg-gradient-achievement" }
  ];

  const leaderboard = [
    { rank: 1, name: "Priya Sharma", points: 2847, badge: "🥇", level: "Civic Champion" },
    { rank: 2, name: "Rajesh Kumar", points: 2654, badge: "🥈", level: "Street Guardian" },
    { rank: 3, name: "Anita Singh", points: 2398, badge: "🥉", level: "Area Advocate" },
    { rank: 4, name: "Mohammed Ali", points: 2156, badge: "🏆", level: "Issue Hunter" },
    { rank: 5, name: "You", points: 1987, badge: "⭐", level: "Rising Star", highlight: true }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-achievement/10 rounded-full px-6 py-2 mb-6">
            <Trophy className="h-5 w-5 mr-2 text-achievement" />
            <span className="text-achievement font-medium">Gamification & Rewards</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Civic Duty into
            <span className="bg-gradient-achievement bg-clip-text text-transparent"> Epic Achievements</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every report earns points, unlocks badges, and builds your civic reputation.
            Compete with neighbors, celebrate wins together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* User Stats Card */}
          <Card className="civic-card p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Your Civic Impact 🌟</h3>
                <p className="text-muted-foreground">Level 12 • Rising Star</p>
              </div>
              <div className="streak-counter">
                <Flame className="h-6 w-6 mr-2" />
                7 Day Streak!
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="impact-number text-2xl">47</div>
                <p className="text-sm text-muted-foreground font-medium">Issues Reported</p>
              </div>
              <div className="text-center">
                <div className="impact-number text-2xl">89%</div>
                <p className="text-sm text-muted-foreground font-medium">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="impact-number text-2xl">1,987</div>
                <p className="text-sm text-muted-foreground font-medium">Total Points</p>
              </div>
              <div className="text-center">
                <div className="impact-number text-2xl">23</div>
                <p className="text-sm text-muted-foreground font-medium">Badges Earned</p>
              </div>
            </div>

            {/* Progress to Next Level */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Progress to Civic Champion</span>
                <span className="text-sm text-muted-foreground">213/500 XP</span>
              </div>
              <Progress value={42} className="progress-glow" />
            </div>

            {/* Achievement Progress */}
            <div className="space-y-4">
              <h4 className="font-bold">🏆 Achievement Progress</h4>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`${achievement.color} text-white rounded-lg p-2 text-xl`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{achievement.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {Math.floor(achievement.progress * achievement.total / 100)}/{achievement.total}
                      </span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Leaderboard */}
          <Card className="civic-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-achievement text-white rounded-xl p-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ward Leaderboard</h3>
                <p className="text-sm text-muted-foreground">This month's champions</p>
              </div>
            </div>

            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank} 
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    user.highlight ? 'bg-gradient-achievement text-white' : 'bg-accent/50'
                  }`}
                >
                  <div className="text-2xl">{user.badge}</div>
                  <div className="flex-1">
                    <div className="font-semibold">{user.name}</div>
                    <div className={`text-xs ${user.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {user.level}
                    </div>
                  </div>
                  <div className={`text-right ${user.highlight ? 'text-white' : ''}`}>
                    <div className="font-bold">{user.points.toLocaleString()}</div>
                    <div className={`text-xs ${user.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                      points
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full mt-6 btn-community">
              View Full Rankings 🏆
            </Button>
          </Card>
        </div>

        {/* Community Challenges */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="civic-card p-8">
            <div className="text-center">
              <div className="bg-gradient-success text-white rounded-2xl p-6 mx-auto mb-4 w-fit">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Clean Ward Challenge 🧹</h3>
              <p className="text-muted-foreground mb-6">
                Join 847 neighbors in making our ward the cleanest this month!
              </p>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Ward Progress</span>
                  <span className="text-sm text-muted-foreground">734/1000 reports</span>
                </div>
                <Progress value={73} className="progress-glow" />
              </div>

              <div className="text-center mb-6">
                <div className="impact-number text-3xl">26%</div>
                <p className="text-sm text-muted-foreground">Improvement this month</p>
              </div>

              <Button className="btn-success w-full">
                Join Challenge 🚀
              </Button>
            </div>
          </Card>

          <Card className="civic-card p-8">
            <div className="text-center">
              <div className="bg-gradient-community text-white rounded-2xl p-6 mx-auto mb-4 w-fit">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Monthly Recognition 🌟</h3>
              <p className="text-muted-foreground mb-6">
                Top contributors get featured in local news and civic ceremonies!
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="badge-base badge-gold">
                  🥇 Civic Champion Badge
                </div>
                <div className="badge-base badge-silver">
                  📰 Local News Feature
                </div>
                <div className="badge-base badge-bronze">
                  🏛️ City Hall Recognition
                </div>
              </div>

              <Button className="btn-community w-full">
                Learn More 📜
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GamificationDashboard;