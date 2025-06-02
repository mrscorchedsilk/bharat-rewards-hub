
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from "@/context/AuthContext";
import About from '@/pages/About';
import Cashback from '@/pages/Cashback';
import Dashboard from '@/pages/Dashboard';
import DashboardHome from '@/pages/DashboardHome';
import FAQs from '@/pages/FAQs';
import Giveaways from '@/pages/Giveaways';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Pricing from '@/pages/Pricing';
import Profile from '@/pages/Profile';
import Rewards from '@/pages/Rewards';
import SignUp from '@/pages/SignUp';
import TransactionHistory from '@/pages/TransactionHistory';
import VerifyEmail from '@/pages/VerifyEmail';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
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
