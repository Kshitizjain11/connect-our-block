import CivicHero from "@/components/CivicHero";
import OnboardingFlow from "@/components/OnboardingFlow";
import QuickReporting from "@/components/QuickReporting";
import GamificationDashboard from "@/components/GamificationDashboard";
import CommunityFeatures from "@/components/CommunityFeatures";
import EngagementHooks from "@/components/EngagementHooks";
import VisualDesignShowcase from "@/components/VisualDesignShowcase";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* SEO Optimized Structure */}
      <header id="hero">
        <CivicHero />
      </header>
      
      <main className="bg-gradient-to-b from-background to-muted/30">
        <SectionDivider />
        
        <section id="report">
          <QuickReporting />
        </section>
        
        <SectionDivider />
        
        <section id="onboarding">
          <OnboardingFlow />
        </section>
        
        <SectionDivider />
        
        <section id="leaderboard">
          <GamificationDashboard />
        </section>
        
        <SectionDivider />
        
        <section id="community">
          <CommunityFeatures />
        </section>
        
        <SectionDivider />
        
        <section id="updates">
          <EngagementHooks />
        </section>
        
        <SectionDivider />
        
        <section id="analytics">
          <VisualDesignShowcase />
        </section>
      </main>
      
      <footer className="bg-gradient-civic text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Community? 🏙️</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of citizens making their neighborhoods better, one report at a time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 bg-white/20 rounded-2xl py-6">50K+</div>
              <p className="text-white/80 text-lg">Active Citizens</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 bg-white/20 rounded-2xl py-6">12.5K</div>
              <p className="text-white/80 text-lg">Issues Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4 bg-white/20 rounded-2xl py-6">89%</div>
              <p className="text-white/80 text-lg">Success Rate</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">
              Built with ❤️ for civic engagement • Made by citizens, for citizens
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;