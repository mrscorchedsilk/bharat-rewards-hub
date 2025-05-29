
import { ArrowRight, Gift, ShoppingBag, IndianRupee } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Shop Through Our Links",
      description: "Use our affiliate links when shopping online to automatically earn cashback on your purchases.",
      icon: ShoppingBag,
      color: "bg-bharat-100 text-bharat-600",
      number: "1",
      delay: "0",
    },
    {
      title: "Collect Your Rewards",
      description: "Your cashback accumulates in your Bharat Rewards wallet, ready for you to use whenever you want.",
      icon: IndianRupee,
      color: "bg-gold-100 text-gold-600",
      number: "2",
      delay: "100",
    },
    {
      title: "Redeem Your Way",
      description: "Withdraw cash to your UPI, purchase gift cards, or shop for exclusive products with your rewards.",
      icon: Gift,
      color: "bg-green-100 text-green-600",
      number: "3",
      delay: "200",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
            How Bharat Rewards Works
          </h2>
          <p className="text-lg text-blue-300 glow-text">
            Earning and redeeming rewards is simple and straightforward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative text-center"
              style={{ 
                animationDelay: `${step.delay}ms`,
              }}
            >
              <div className="relative inline-block">
                <div className={`w-20 h-20 ${step.color} rounded-full mx-auto flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-bharat-600 text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              {index < 2 && (
                <div className="hidden md:block absolute top-10 left-full w-24 h-4 transform -translate-x-12">
                  <ArrowRight className="w-6 h-6 text-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <hr className="border-dashed border-gray-300" />
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-blue-300 glow-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
