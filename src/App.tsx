
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from '@/pages/Index';
import Dashboard from '@/pages/Dashboard';
import DashboardHome from '@/pages/DashboardHome';
import CurrentGiveaways from '@/pages/CurrentGiveaways';
import PastGiveaways from '@/pages/PastGiveaways';
import Cashback from '@/pages/Cashback';
import NotFound from '@/pages/NotFound';

import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <AuthProvider>
            <Router>
              <div className="min-h-screen bg-background text-foreground">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="giveaways/current" element={<CurrentGiveaways />} />
                    <Route path="giveaways/past" element={<PastGiveaways />} />
                    <Route path="cashback" element={<Cashback />} />
                    <Route path="store" element={<div>Bharat Essentials Store Coming Soon</div>} />
                    <Route path="gift-cards" element={<div>Gift Cards Coming Soon</div>} />
                    <Route path="bulk-buying" element={<div>Bulk Buying Groups Coming Soon</div>} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Toaster />
            </Router>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
