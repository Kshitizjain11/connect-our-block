import CivicHero from "@/components/CivicHero";
import Timeline from "@/components/Timeline";
import QuickReporting from "@/components/QuickReporting";
import OnboardingFlow from "@/components/OnboardingFlow";
import GamificationDashboard from "@/components/GamificationDashboard";
import CommunityFeatures from "@/components/CommunityFeatures";
import EngagementHooks from "@/components/EngagementHooks";
import VisualDesignShowcase from "@/components/VisualDesignShowcase";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/SectionDivider";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Navbar />
      
      {/* Hero Section */}
      <CivicHero />
      
      {/* Timeline Section */}
      <Timeline />
      
      <main className="container mx-auto px-4 space-y-16">
        {/* Report Issues Section */}
        <section id="report-section" className="scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Report Issues</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quickly report civic issues in your community with our streamlined reporting system.
            </p>
          </div>
          <QuickReporting />
        </section>

        <SectionDivider />

        {/* Community Section */}
        <section id="community-section" className="scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with neighbors and engage in local discussions about community improvements.
            </p>
          </div>
          <CommunityFeatures />
        </section>

        <SectionDivider />

        {/* Leaderboard Section */}
        <section id="leaderboard-section" className="scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leaderboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Track your civic engagement and see how you rank among active community members.
            </p>
          </div>
          <GamificationDashboard />
        </section>

        <SectionDivider />

        {/* Analytics Section */}
        <section id="analytics-section" className="scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Analytics</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View detailed insights and progress on community improvements and issue resolution.
            </p>
          </div>
          <VisualDesignShowcase />
        </section>

        <SectionDivider />

        {/* Additional Features */}
        <OnboardingFlow />
        
        <SectionDivider />
        
        <EngagementHooks />
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 mt-20 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">2,500+</h3>
              <p className="text-muted-foreground">Issues Reported</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground">Resolution Rate</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">1,200+</h3>
              <p className="text-muted-foreground">Active Citizens</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Empowering communities through technology and civic engagement
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;