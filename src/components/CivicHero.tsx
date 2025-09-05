import { Button } from "@/components/ui/button";
import { Camera, MapPin, Users, Award, Zap } from "lucide-react";

const CivicHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-civic opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-subtle">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <Camera className="h-8 w-8 text-white" />
        </div>
      </div>
      
      <div className="absolute top-32 right-20 animate-bounce-subtle delay-150">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <MapPin className="h-8 w-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-bounce-subtle delay-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <Users className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Award className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Gamified Civic Engagement</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fix Your City,
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Earn Rewards
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Report civic issues in under 20 seconds. Build your neighborhood score. 
            <br />
            Join the movement that's making cities work better, together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button size="lg" className="btn-civic px-8 py-4 text-lg font-semibold">
            <Zap className="mr-2 h-5 w-5" />
            Start Reporting Issues
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
            See Community Impact
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up delay-150">
          <div className="text-center">
            <div className="impact-number">12.5K</div>
            <p className="text-white/80 font-medium">Issues Resolved</p>
          </div>
          <div className="text-center">
            <div className="impact-number">89%</div>
            <p className="text-white/80 font-medium">Resolution Rate</p>
          </div>
          <div className="text-center">
            <div className="impact-number">24h</div>
            <p className="text-white/80 font-medium">Avg Response</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V120H1200V0C1200,0,1100,60,600,60S0,0,0,0Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
};

export default CivicHero;