import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Camera, Users, Trophy, Shield, Heart } from "lucide-react";

const OnboardingFlow = () => {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "📍 Find Your Ward",
      description: "We'll locate your area to connect you with the right local authorities",
      emoji: "🏠",
      color: "bg-gradient-civic"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "📸 Snap & Report",
      description: "Take a photo, add location, submit in under 20 seconds",
      emoji: "⚡",
      color: "bg-gradient-community"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "🤝 Join Community",
      description: "Connect with neighbors who care about your area",
      emoji: "💪",
      color: "bg-gradient-success"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "🏆 Earn Rewards",
      description: "Get points, badges, and recognition for making a difference",
      emoji: "🌟",
      color: "bg-gradient-achievement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-light rounded-full px-6 py-2 mb-6">
            <Heart className="h-5 w-5 mr-2 text-primary" />
            <span className="text-primary font-medium">Simple & Trustworthy Onboarding</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in 
            <span className="bg-gradient-civic bg-clip-text text-transparent"> 60 Seconds</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of citizens making their neighborhoods better. 
            Our friendly onboarding makes you feel at home instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="civic-card p-6 text-center group">
              <div className={`${step.color} text-white rounded-2xl p-4 mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              <div className="text-4xl mb-3">{step.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              <div className="mt-4 text-xs bg-accent rounded-full px-3 py-1 inline-block">
                Step {index + 1}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Building Elements */}
        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8">🛡️ Built for Trust & Safety</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-success-light rounded-2xl p-6 mb-4">
                <Shield className="h-12 w-12 mx-auto text-success" />
              </div>
              <h4 className="font-bold mb-2">Government Verified</h4>
              <p className="text-sm text-muted-foreground">Official partnership with local authorities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-light rounded-2xl p-6 mb-4">
                <Users className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h4 className="font-bold mb-2">50K+ Active Citizens</h4>
              <p className="text-sm text-muted-foreground">Join a thriving community of changemakers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-light rounded-2xl p-6 mb-4">
                <Trophy className="h-12 w-12 mx-auto text-secondary" />
              </div>
              <h4 className="font-bold mb-2">Award Winning</h4>
              <p className="text-sm text-muted-foreground">Recognized for civic innovation excellence</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-civic px-8 py-4">
            Start Your Civic Journey 🚀
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No spam, no complex forms. Just simple civic engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnboardingFlow;