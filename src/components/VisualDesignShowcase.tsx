import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Smartphone, Users, Heart, Zap, Shield } from "lucide-react";

const VisualDesignShowcase = () => {
  const designPrinciples = [
    {
      title: "Civic Blue & Community Orange",
      description: "Trustworthy government blue paired with warm community orange",
      colors: ["bg-primary", "bg-secondary", "bg-success", "bg-achievement"],
      emotion: "Trust + Warmth"
    },
    {
      title: "Friendly Gradients",
      description: "Modern gradients that avoid boring government gray",
      gradients: ["bg-gradient-civic", "bg-gradient-community", "bg-gradient-success", "bg-gradient-achievement"],
      emotion: "Modern + Approachable"
    }
  ];

  const accessibilityFeatures = [
    { icon: "👁️", title: "High Contrast Mode", description: "WCAG AAA compliant colors" },
    { icon: "🗣️", title: "Text-to-Speech", description: "Voice feedback for all actions" },
    { icon: "🌐", title: "Multi-language", description: "Hindi, Tamil, English support" },
    { icon: "📱", title: "Large Touch Targets", description: "44px minimum for easy tapping" }
  ];

  const mascotPersonalities = [
    {
      name: "Civic Sam",
      emoji: "🦸‍♂️",
      personality: "Helpful neighborhood hero",
      role: "Guides new users through onboarding",
      color: "bg-gradient-civic"
    },
    {
      name: "Progress Pip",
      emoji: "📊",
      personality: "Enthusiastic progress tracker",
      role: "Celebrates achievements and milestones",
      color: "bg-gradient-success"
    },
    {
      name: "Community Cat",
      emoji: "🐱",
      personality: "Friendly community connector",
      role: "Encourages collaboration and sharing",
      color: "bg-gradient-community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-civic text-white rounded-full px-6 py-2 mb-6">
            <Palette className="h-5 w-5 mr-2" />
            <span className="font-medium">Visual Design & Style Guide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Design That
            <span className="bg-gradient-achievement bg-clip-text text-transparent"> Delights & Engages</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive visual language that makes civic engagement 
            feel approachable, trustworthy, and genuinely enjoyable.
          </p>
        </div>

        {/* Color System */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">🎨 Color Psychology</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {designPrinciples.map((principle, index) => (
              <Card key={index} className="civic-card p-8">
                <h4 className="text-xl font-bold mb-4">{principle.title}</h4>
                <p className="text-muted-foreground mb-6">{principle.description}</p>
                
                {principle.colors && (
                  <div className="flex gap-4 mb-4">
                    {principle.colors.map((color, i) => (
                      <div key={i} className={`${color} w-16 h-16 rounded-2xl shadow-md`}></div>
                    ))}
                  </div>
                )}
                
                {principle.gradients && (
                  <div className="flex gap-4 mb-4">
                    {principle.gradients.map((gradient, i) => (
                      <div key={i} className={`${gradient} w-16 h-16 rounded-2xl shadow-md`}></div>
                    ))}
                  </div>
                )}
                
                <Badge className="bg-accent text-accent-foreground">
                  Evokes: {principle.emotion}
                </Badge>
              </Card>
            ))}
          </div>

          {/* Live Color Demo */}
          <Card className="civic-card p-8 text-center">
            <h4 className="text-2xl font-bold mb-6">🌈 See Our Colors in Action</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="btn-civic">Report Issue</Button>
              <Button className="btn-community">Join Community</Button>
              <Button className="bg-gradient-success text-white hover:scale-105 transition-transform">
                Success Action
              </Button>
              <Button className="bg-gradient-achievement text-white hover:scale-105 transition-transform">
                Achievement
              </Button>
            </div>
          </Card>
        </div>

        {/* Mascot & Personality */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">🤖 Friendly Mascots</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mascotPersonalities.map((mascot, index) => (
              <Card key={index} className="civic-card p-6 text-center group hover:shadow-raised transition-all duration-300">
                <div className={`${mascot.color} text-white rounded-2xl p-6 mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-4xl">{mascot.emoji}</div>
                </div>
                <h4 className="text-xl font-bold mb-2">{mascot.name}</h4>
                <p className="text-muted-foreground mb-3">{mascot.personality}</p>
                <p className="text-sm bg-accent rounded-lg px-3 py-2">{mascot.role}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Typography & Iconography */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="civic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-civic text-white rounded-xl p-3">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Typography & Readability</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-3xl font-bold mb-2">Bold Headlines</h4>
                <p className="text-muted-foreground">Clear hierarchy for easy scanning</p>
              </div>
              
              <div>
                <h5 className="text-xl font-semibold mb-2">Medium Subheadings</h5>
                <p className="text-muted-foreground">Supporting information that guides</p>
              </div>
              
              <div>
                <p className="text-base mb-2">Readable body text with proper contrast</p>
                <p className="text-sm text-muted-foreground">
                  Secondary text for additional context and details
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/30 rounded-xl">
              <p className="text-sm font-medium">📖 Reading Experience:</p>
              <p className="text-sm text-muted-foreground">
                Optimized for quick scanning • Regional font support • 
                High contrast ratios for accessibility
              </p>
            </div>
          </Card>

          <Card className="civic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-success text-white rounded-xl p-3">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Micro-Interactions</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-white rounded-lg p-3 hover:scale-110 transition-transform cursor-pointer">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Hover Effects</p>
                  <p className="text-sm text-muted-foreground">Gentle scale and glow</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="animate-bounce-subtle bg-secondary text-white rounded-lg p-3">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Subtle Animations</p>
                  <p className="text-sm text-muted-foreground">Draw attention without distraction</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-success text-white rounded-lg p-3 shadow-civic">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Contextual Shadows</p>
                  <p className="text-sm text-muted-foreground">Depth that guides interaction</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Accessibility Features */}
        <Card className="civic-card p-8">
          <h3 className="text-3xl font-bold text-center mb-8">♿ Inclusive Design Features</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-accent/30 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Badge className="bg-gradient-success text-white border-none px-6 py-3 text-lg">
              ✅ WCAG 2.1 AAA Compliant
            </Badge>
            <p className="text-sm text-muted-foreground mt-4">
              Designed for everyone, excluding no one from civic participation
            </p>
          </div>
        </Card>

        {/* Design System Summary */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">🎯 Design Philosophy</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every visual element serves a purpose: building trust, encouraging action, 
            and making civic engagement feel as natural and rewarding as social media.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-gradient-civic text-white border-none px-4 py-2">
              Trustworthy Yet Friendly
            </Badge>
            <Badge className="bg-gradient-community text-white border-none px-4 py-2">
              Inclusive & Accessible
            </Badge>
            <Badge className="bg-gradient-success text-white border-none px-4 py-2">
              Gamified & Engaging
            </Badge>
            <Badge className="bg-gradient-achievement text-white border-none px-4 py-2">
              Modern & Delightful
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualDesignShowcase;