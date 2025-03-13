
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

import { AuthProvider } from "@/context/AuthContext";
import Index from '@/pages/Index';
import Rewards from '@/pages/Rewards';
import Pricing from '@/pages/Pricing';
import About from '@/pages/About';
import FAQs from '@/pages/FAQs';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import DashboardHome from '@/pages/DashboardHome';
import Cashback from '@/pages/Cashback';
import Giveaways from '@/pages/Giveaways';
import Profile from '@/pages/Profile';
import TransactionHistory from '@/pages/TransactionHistory';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-white text-gray-900">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<DashboardHome />} />
                  <Route path="cashback" element={<Cashback />} />
                  <Route path="giveaways" element={<Giveaways />} />
                  <Route path="store" element={<div>Bharat Essentials Store Coming Soon</div>} />
                  <Route path="gift-cards" element={<div>Gift Cards Coming Soon</div>} />
                  <Route path="bulk-buying" element={<div>Bulk Buying Groups Coming Soon</div>} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="transactions" element={<TransactionHistory />} />
                </Route>
              </Routes>
              <Toaster />
            </div>
          </Router>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
