
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 glow-text animate-pulse-glow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Choose Your Plan
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Unlock maximum savings with our flexible membership plans
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-background relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(56,189,248,0.05)_50%,transparent_51%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
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
                          <p className="text-muted-foreground text-sm">{plan.period}</p>
                        </div>
                        
                        <CardDescription className="text-center text-muted-foreground">
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
                              <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Features Comparison */}
        <section className="py-16 bg-gradient-to-r from-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 glow-text"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Why Choose Premium?
                </span>
              </motion.h2>
              <p className="text-lg text-muted-foreground">
                See how much more you can save with our premium memberships
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-8 neon-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold glow-text mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      5x More
                    </span>
                  </motion.div>
                  <p className="text-muted-foreground">Cashback earnings compared to free plan</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold glow-text mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                      ₹10,000+
                    </span>
                  </motion.div>
                  <p className="text-muted-foreground">Average annual savings for premium members</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-3xl font-bold glow-text mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                      24/7
                    </span>
                  </motion.div>
                  <p className="text-muted-foreground">Priority customer support</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 glow-text animate-pulse-glow"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ready to Maximize Your Savings?
                </span>
              </motion.h2>
              <motion.p 
                className="text-lg mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Join thousands of members who are saving more every month
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => handleGetStarted("Premium")}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-background glow-button animate-bounce-glow"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 neon-border"
                  >
                    <Link to="/about">
                      Learn More
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
