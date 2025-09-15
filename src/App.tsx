import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrashCleanupEntry from "./components/TrashCleanupEntry";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Community from "./pages/Community";
import Leaderboard from "./pages/Leaderboard";
import Updates from "./pages/Updates";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showEntry, setShowEntry] = useState(true);

  const handleEntryComplete = () => {
    setShowEntry(false);
  };

  if (showEntry) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <TrashCleanupEntry onComplete={handleEntryComplete} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/community" element={<Community />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/analytics" element={<Analytics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
