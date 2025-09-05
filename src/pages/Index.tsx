import CivicHero from "@/components/CivicHero";
import OnboardingFlow from "@/components/OnboardingFlow";
import QuickReporting from "@/components/QuickReporting";
import GamificationDashboard from "@/components/GamificationDashboard";
import CommunityFeatures from "@/components/CommunityFeatures";
import EngagementHooks from "@/components/EngagementHooks";
import VisualDesignShowcase from "@/components/VisualDesignShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Optimized Structure */}
      <header>
        <CivicHero />
      </header>
      
      <main>
        <OnboardingFlow />
        <QuickReporting />
        <GamificationDashboard />
        <CommunityFeatures />
        <EngagementHooks />
        <VisualDesignShowcase />
      </main>
      
      <footer className="bg-gradient-civic text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your City? 🏙️</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens making their neighborhoods better, one report at a time.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-white/80">Active Citizens</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12.5K</div>
              <p className="text-white/80">Issues Resolved</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">89%</div>
              <p className="text-white/80">Success Rate</p>
            </div>
          </div>
          
          <p className="text-sm text-white/60">
            Built with ❤️ for civic engagement • Made by citizens, for citizens
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;