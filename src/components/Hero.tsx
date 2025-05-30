
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#38b6ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#38b6ff]/10 text-[#38b6ff] slide-up">
                  Introducing Bharat Rewards - 35,000+ Members joined already!
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance fade-in-delay-1 text-foreground">
                India's Fastest Growing <span className="text-[#38b6ff]">Rewards Club</span>
              </h1>
              
              <p className="text-lg text-blue-300 glow-text fade-in-delay-2">
                Join Bharat Rewards and earn cashback on every purchase. Redeem your points for gift cards, products, or cash transfers directly to your UPI.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-3">
              <Button 
                asChild
                size="lg" 
                className="bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-white shadow-button transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              >
                <Link to="/dashboard">
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-[#38b6ff]/20 bg-white hover:bg-[#38b6ff]/5 text-[#38b6ff] transition-all duration-300"
              >
                <Link to="/gift-cards">
                  Explore Gift Cards
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 fade-in-delay-3">
              <div className="text-sm text-blue-300 glow-text">
                <span className="font-semibold text-blue-200 glow-text">35,000+</span> members already joined
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-card">
              <div className="absolute inset-0 bg-gradient-to-br from-bharat-500/50 to-bharat-700/50 mix-blend-overlay"></div>
              
              <div className="glass-panel p-6 md:p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-bharat-800">Your Rewards Dashboard</h3>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="bg-bharat-50 rounded-lg p-3">
                        <p className="text-xs text-blue-400 glow-text font-medium">Available Balance</p>
                        <p className="text-xl font-bold text-bharat-900">₹4,250</p>
                      </div>
                      <div className="bg-gold-50 rounded-lg p-3">
                        <p className="text-xs text-blue-400 glow-text font-medium">Cashback Points</p>
                        <p className="text-xl font-bold text-gold-800">128</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">₹</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 glow-text">Cashback</p>
                      <p className="text-sm font-semibold text-foreground">Up to 10%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm flex flex-col justify-between h-full">
                    <div className="w-12 h-12 rounded-full bg-bharat-100 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-bharat-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">UPI</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 glow-text">Withdraw</p>
                      <p className="text-sm font-semibold text-foreground">Instant to UPI</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-800">Recent Rewards</h4>
                    <span className="text-xs text-bharat-600">View All</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { title: "Amazon Purchase", amount: "₹45.00", date: "Today" },
                      { title: "Flipkart Order", amount: "₹28.50", date: "Yesterday" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="text-xs text-blue-300 glow-text">{item.date}</p>
                        </div>
                        <p className="text-sm font-semibold text-green-600">+{item.amount}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bharat-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
