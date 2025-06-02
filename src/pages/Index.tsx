import { AuthPopup } from '@/components/AuthPopup';
import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const Index = () => {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Pricing />
        <HowItWorks />
        <CTASection />
        <Footer />
      </main>

      {/* Auth Popup */}
      <AuthPopup
        isOpen={isAuthPopupOpen}
        onClose={() => setIsAuthPopupOpen(false)}
      />
    </div>
  );
};

export default Index;
