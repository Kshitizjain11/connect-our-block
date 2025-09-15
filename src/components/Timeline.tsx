import { MapPin, Users, Trophy, BarChart3 } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      title: "Report Issues",
      description: "Quickly report civic issues in your community with photos and location data.",
      icon: MapPin,
      sectionId: "report-section"
    },
    {
      id: 2,
      title: "Community",
      description: "Connect with neighbors and engage in local discussions about community improvements.",
      icon: Users,
      sectionId: "community-section"
    },
    {
      id: 3,
      title: "Leaderboard",
      description: "Track your civic engagement and see how you rank among active community members.",
      icon: Trophy,
      sectionId: "leaderboard-section"
    },
    {
      id: 4,
      title: "Analytics",
      description: "View detailed insights and progress on community improvements and issue resolution.",
      icon: BarChart3,
      sectionId: "analytics-section"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">How CivicFix Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow these simple steps to make a real impact in your community through civic engagement.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
        
        {timelineItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Content */}
            <div
              className={`w-5/12 ${
                index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
              }`}
            >
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className="group cursor-pointer text-left w-full"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </button>
            </div>
            
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-lg group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;