
import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with basic rewards",
      icon: Star,
      popular: false,
      features: [
        "Basic cashback offers",
        "Access to select giveaways",
        "Standard customer support",
        "Monthly newsletters",
        "Basic member benefits"
      ]
    },
    {
      name: "Premium",
      price: "₹299",
      period: "per month",
      description: "Enhanced rewards and exclusive access",
      icon: Crown,
      popular: true,
      features: [
        "Premium cashback rates (up to 12%)",
        "Access to all giveaways",
        "Priority customer support",
        "Exclusive member-only deals",
        "Early access to new partners",
        "Bulk buying group access",
        "Gift card discounts"
      ]
    },
    {
      name: "Elite",
      price: "₹599",
      period: "per month",
      description: "Maximum rewards and VIP treatment",
      icon: Zap,
      popular: false,
      features: [
        "Maximum cashback rates (up to 15%)",
        "VIP giveaway entries (5x chances)",
        "Dedicated account manager",
        "Exclusive elite-only events",
        "Custom bulk buying requests",
        "Premium gift card rates",
        "Personal shopping assistance",
        "Annual rewards bonus"
      ]
    }
  ];

  const handleGetStarted = (planName: string) => {
    navigate("/login");
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-40 w-48 h-48 bg-gradient-to-br from-primary/10 via-secondary/6 to-accent/4 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-56 h-56 bg-gradient-to-tr from-accent/10 via-primary/6 to-secondary/4 rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1], 
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Choose Your Plan
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-300 glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Unlock maximum savings with our flexible membership plans
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Card className={`glass-card border-primary/20 hover:shadow-neon transition-all duration-300 neon-border h-full relative overflow-hidden ${
                  plan.popular ? "ring-2 ring-primary/50 shadow-neon-lg" : ""
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-background text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={plan.popular ? "pt-12" : "pt-6"}>
                    <div className="flex items-center justify-center mb-4">
                      <motion.div 
                        className="p-4 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-neon"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <plan.icon className="h-8 w-8 text-background" />
                      </motion.div>
                    </div>
                    
                    <CardTitle className="text-center glow-text">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-2xl">
                        {plan.name}
                      </span>
                    </CardTitle>
                    
                    <div className="text-center">
                      <motion.div 
                        className="text-4xl font-bold glow-text mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                          {plan.price}
                        </span>
                      </motion.div>
                      <p className="text-blue-300 glow-text text-sm">{plan.period}</p>
                    </div>
                    
                    <CardDescription className="text-center text-blue-300 glow-text">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                            <Check className="h-3 w-3 text-background" />
                          </div>
                          <span className="text-sm text-blue-300 glow-text">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button 
                        onClick={() => handleGetStarted(plan.name)}
                        className={`w-full ${
                          plan.popular 
                            ? "bg-gradient-to-r from-primary to-secondary text-background glow-button animate-bounce-glow" 
                            : "bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary glow-button"
                        }`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
