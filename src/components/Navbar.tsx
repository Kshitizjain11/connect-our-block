import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Users, Trophy, MessageSquare, BarChart3, Bell } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: MapPin, href: "/" },
    { name: "Report Issue", icon: MapPin, href: "/report" },
    { name: "Community", icon: Users, href: "/community" },
    { name: "Leaderboard", icon: Trophy, href: "/leaderboard" },
    { name: "Updates", icon: MessageSquare, href: "/updates" },
    { name: "Analytics", icon: BarChart3, href: "/analytics" },
  ];


  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-civic rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">CivicFix</span>
              <span className="text-xs text-muted-foreground">Report • Engage • Improve</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-primary hover:bg-accent"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </Button>
            <Button size="sm" className="bg-gradient-civic hover:opacity-90 text-white rounded-lg">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Button className="w-full bg-gradient-civic hover:opacity-90 text-white rounded-lg">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;