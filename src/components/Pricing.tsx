
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price, duration, cashback, features }: { 
  title: string;
  price: string;
  duration: string;
  cashback: string;
  features: string[];
}) => (
  <div className="flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="mt-4 mb-8">
      <p className="text-4xl font-bold">₹{price}</p>
      <p className="text-gray-500">{duration}</p>
    </div>
    <div className="flex-1">
      <p className="text-lg font-semibold text-[#38b6ff] mb-4">{cashback} Cashback</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <Button 
      asChild
      className="mt-8 bg-[#38b6ff] hover:bg-[#38b6ff]/90"
    >
      <Link to="/dashboard">Get Started</Link>
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Rewards Package
          </h2>
          <p className="text-lg text-gray-600">
            Select the perfect plan for your shopping needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Bronze Package"
            price="100"
            duration="10 Days"
            cashback="5%"
            features={[
              "Basic Cashback Rewards",
              "Access to Exclusive Deals",
              "Member-only Events",
              "24/7 Support"
            ]}
          />
          
          <PricingCard
            title="Silver Package"
            price="250"
            duration="1 Month"
            cashback="10%"
            features={[
              "Enhanced Cashback Rewards",
              "Priority Support",
              "Early Access to Sales",
              "Exclusive Brand Partnerships"
            ]}
          />
          
          <PricingCard
            title="Gold Package"
            price="500"
            duration="3 Months"
            cashback="50%"
            features={[
              "Maximum Cashback Benefits",
              "VIP Customer Support",
              "First Access to New Products",
              "Special Member Events"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
