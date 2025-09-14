import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, BarChart3, Newspaper, Gift, Star, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EngagementHooks = () => {
  const { toast } = useToast();

  const showNotification = (notification: any) => {
    toast({
      title: notification.title,
      description: notification.subtitle,
      duration: 5000,
    });
  };

  const showSuccessNotification = () => {
    toast({
      title: "Your report helped fix a streetlight today ✨",
      description: "MG Road • Just now",
      duration: 5000,
    });
  };

  const showProgressNotification = () => {
    toast({
      title: "You've improved your neighborhood's cleanliness score!",
      description: "Ward 68 • Just now", 
      duration: 5000,
    });
  };

  const showAchievementNotification = () => {
    toast({
      title: "Streak Achievement Unlocked! 🔥",
      description: "7 days of civic engagement",
      duration: 5000,
    });
  };
  const notifications = [
    {
      type: "success",
      title: "Your report helped fix a streetlight today ✨",
      subtitle: "MG Road • 2 hours ago",
      icon: "💡",
      color: "text-success",
      bg: "bg-success-light"
    },
    {
      type: "progress",
      title: "You've improved your neighborhood's cleanliness score!",
      subtitle: "Ward 68 • 4 hours ago",
      icon: "🧹",
      color: "text-primary",
      bg: "bg-primary-light"
    },
    {
      type: "achievement",
      title: "Streak Achievement Unlocked! 🔥",
      subtitle: "7 days of civic engagement",
      icon: "🏆",
      color: "text-achievement",
      bg: "bg-achievement/10"
    },
    {
      type: "community",
      title: "Your area improved by 15% this month! 📈",
      subtitle: "Thanks to you and 234 neighbors",
      icon: "🌟",
      color: "text-secondary",
      bg: "bg-secondary-light"
    }
  ];

  const monthlyHighlights = [
    { metric: "Issues Fixed", value: "127", change: "+23%", icon: "✅" },
    { metric: "Response Time", value: "4.2h", change: "-18%", icon: "⚡" },
    { metric: "Civic Score", value: "8.7/10", change: "+0.9", icon: "📊" },
    { metric: "Active Citizens", value: "1.2K", change: "+156", icon: "👥" }
  ];

  const dailyEngagement = [
    {
      title: "Today's Civic Pulse 📊",
      description: "See how your neighborhood is performing today",
      cta: "View Dashboard",
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "bg-gradient-civic"
    },
    {
      title: "Local News & Updates 📰",
      description: "Water supply maintenance scheduled for Sunday",
      cta: "Read More",
      icon: <Newspaper className="h-6 w-6" />,
      gradient: "bg-gradient-community"
    },
    {
      title: "Weekly Rewards Ready! 🎁",
      description: "Claim your civic contributions reward",
      cta: "Claim Reward",
      icon: <Gift className="h-6 w-6" />,
      gradient: "bg-gradient-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-warning/10 rounded-full px-6 py-2 mb-6">
            <Bell className="h-5 w-5 mr-2 text-yellow-600" />
            <span className="text-yellow-600 font-medium">Engagement & Retention</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Connected,
            <span className="bg-gradient-civic bg-clip-text text-transparent"> Stay Engaged</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart notifications, progress tracking, and daily engagement 
            that make civic participation a delightful habit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Notification Examples */}
          <Card className="civic-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-civic text-white rounded-xl p-3">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Smart Notifications 🔔</h3>
                <p className="text-sm text-muted-foreground">Motivating, not spammy</p>
              </div>
            </div>

            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl border border-border hover:shadow-soft transition-all duration-300 cursor-pointer"
                  onClick={() => showNotification(notification)}
                >
                  <div className={`${notification.bg} rounded-lg p-2 text-xl`}>
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.subtitle}</p>
                  </div>
                  <div className={`${notification.color} text-xs font-medium`}>
                    Click to test
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-semibold">Notification Intelligence</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI learns your preferences • No spam guaranteed • Opt-out anytime
              </p>
            </div>
          </Card>

          {/* Personal Impact Dashboard */}
          <Card className="civic-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-success text-white rounded-xl p-3">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Your Impact Dashboard 📊</h3>
                <p className="text-sm text-muted-foreground">Track your civic contributions</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-center p-6 bg-gradient-success text-white rounded-2xl mb-4">
                <div className="text-4xl font-bold mb-2">47</div>
                <p className="text-white/90">Issues You've Fixed</p>
                <p className="text-xs text-white/70 mt-2">
                  That's 12% of your ward's total progress! 🎉
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {monthlyHighlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-accent/30 rounded-xl">
                  <div className="text-2xl mb-1">{highlight.icon}</div>
                  <div className="font-bold">{highlight.value}</div>
                  <div className="text-xs text-muted-foreground">{highlight.metric}</div>
                  <div className="text-xs text-success font-medium mt-1">
                    {highlight.change}
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="w-full mt-6 btn-civic" 
              onClick={showSuccessNotification}
            >
              View Full Report 📋
            </Button>
          </Card>
        </div>

        {/* Daily Engagement Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Keep Users Coming Back 📅
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dailyEngagement.map((feature, index) => (
              <Card key={index} className="civic-card p-6 text-center group">
                <div className={`${feature.gradient} text-white rounded-2xl p-4 mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    if (index === 0) showProgressNotification();
                    else if (index === 1) showSuccessNotification();
                    else showAchievementNotification();
                  }}
                >
                  {feature.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Micro-Content */}
        <Card className="civic-card p-8 bg-gradient-to-br from-accent/30 to-background">
          <div className="text-center mb-8">
            <div className="bg-gradient-achievement text-white rounded-2xl p-6 mx-auto mb-4 w-fit">
              <Zap className="h-12 w-12" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Educational Micro-Content 🧠</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Daily bite-sized civic education that builds awareness and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-light rounded-lg p-2 text-2xl">
                    ♻️
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Did you know?</h4>
                    <p className="text-sm text-muted-foreground">
                      Your city recycled 2,847 tons of waste this week thanks to citizen reports! 
                      That's equivalent to saving 47 trees. 🌳
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="bg-success-light rounded-lg p-2 text-2xl">
                    💡
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Quick Tip</h4>
                    <p className="text-sm text-muted-foreground">
                      Report streetlight issues during evening hours (6-8 PM) 
                      for 2x faster response rates! ⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary-light rounded-lg p-2 text-2xl">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Community Win</h4>
                    <p className="text-sm text-muted-foreground">
                      Ward 68 achieved 95% streetlight functionality this month! 
                      Thanks to reports from citizens like you. 🎉
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="bg-achievement/10 rounded-lg p-2 text-2xl">
                    📊
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Impact Stats</h4>
                    <p className="text-sm text-muted-foreground">
                      Citizen-reported issues get resolved 3x faster than 
                      traditional complaint systems. Your voice matters! 📢
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-gradient-civic text-white border-none px-6 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              New content every day
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EngagementHooks;