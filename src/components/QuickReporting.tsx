import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, MapPin, Send, Mic, Wifi, Clock, CheckCircle } from "lucide-react";

const QuickReporting = () => {
  const reportingSteps = [
    { icon: <Camera className="h-6 w-6" />, action: "Tap to Photo", time: "2s", color: "text-primary" },
    { icon: <MapPin className="h-6 w-6" />, action: "Auto-location", time: "1s", color: "text-success" },
    { icon: <Send className="h-6 w-6" />, action: "One-tap Submit", time: "1s", color: "text-secondary" }
  ];

  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice-to-Text",
      description: "Speak in Hindi, Tamil, or English",
      gradient: "bg-gradient-civic"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Offline First",
      description: "Report without internet, sync later",
      gradient: "bg-gradient-success"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Smart Categories",
      description: "AI suggests issue type automatically",
      gradient: "bg-gradient-community"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-success-light rounded-full px-6 py-2 mb-6">
            <Camera className="h-5 w-5 mr-2 text-success" />
            <span className="text-success font-medium">Lightning Fast Reporting</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Report Issues in Under
            <span className="bg-gradient-success bg-clip-text text-transparent"> 20 Seconds</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fastest way to make your voice heard. No forms, no hassle.
            Just snap, tap, and make a difference.
          </p>
        </div>

        {/* Mock Phone Interface */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-4 w-80 shadow-2xl">
              <div className="bg-background rounded-2xl p-6 min-h-96">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-2">🔍 Spotted an Issue?</h3>
                  <p className="text-sm text-muted-foreground">Let's fix it together!</p>
                </div>
                
                {/* Camera Interface */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-48 flex items-center justify-center mb-4 relative overflow-hidden">
                  <Camera className="h-12 w-12 text-gray-400" />
                  <div className="absolute top-2 right-2 bg-red-500 rounded-full w-3 h-3 animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    📍 Auto-detected location
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <Button variant="outline" size="sm" className="text-xs">🕳️ Pothole</Button>
                  <Button variant="outline" size="sm" className="text-xs">💡 Streetlight</Button>
                  <Button variant="outline" size="sm" className="text-xs">🗑️ Garbage</Button>
                </div>
                
                <Button className="w-full btn-civic">
                  Submit Report ⚡
                </Button>
                
                <div className="text-center mt-3">
                  <span className="text-xs text-muted-foreground">🎯 +50 points earned</span>
                </div>
              </div>
            </div>
            
            {/* Floating Success Indicator */}
            <div className="absolute -top-4 -right-4 bg-success text-white rounded-full p-3 shadow-lg animate-bounce-subtle">
              <CheckCircle className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
          {reportingSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`${step.color} bg-current/10 rounded-xl p-3`}>
                {step.icon}
              </div>
              <div>
                <div className="font-semibold">{step.action}</div>
                <div className="text-sm text-muted-foreground">~{step.time}</div>
              </div>
              {index < reportingSteps.length - 1 && (
                <div className="hidden md:block text-2xl text-muted-foreground">→</div>
              )}
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="civic-card p-6 text-center">
              <div className={`${feature.gradient} text-white rounded-2xl p-4 mx-auto mb-4 w-fit`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Success Stories Ticker */}
        <div className="bg-gradient-success rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">✨ Recent Successes</h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div>
              <div className="text-3xl font-bold">2.3K</div>
              <div className="text-sm opacity-90">Issues reported today</div>
            </div>
            <div>
              <div className="text-3xl font-bold">89%</div>
              <div className="text-sm opacity-90">Resolved this month</div>
            </div>
            <div>
              <div className="text-3xl font-bold">&lt; 6h</div>
              <div className="text-sm opacity-90">Average response time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickReporting;