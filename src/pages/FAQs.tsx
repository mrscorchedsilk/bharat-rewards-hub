
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "How does Bharat Rewards cashback work?",
      answer: "When you shop through our partner links, we earn a commission from the retailer. We share a significant portion of this commission with you as cashback. Your cashback is tracked automatically and credited to your account within 30-60 days after purchase confirmation."
    },
    {
      question: "Is there a minimum cashback amount for withdrawal?",
      answer: "Yes, the minimum withdrawal amount is ₹100. Once you reach this threshold, you can withdraw your cashback to your bank account, UPI, or use it to purchase gift cards at discounted rates."
    },
    {
      question: "How do I participate in giveaways?",
      answer: "Giveaways are available to all members. Simply visit the giveaways section in your dashboard and click 'Enter' on any active giveaway. Premium and Elite members get additional entries, increasing their chances of winning."
    },
    {
      question: "What are bulk buying groups?",
      answer: "Bulk buying groups allow members to pool their purchasing power to get wholesale prices on premium products. We negotiate directly with suppliers and manufacturers to offer products at 10-30% below retail prices."
    },
    {
      question: "Can I cancel my premium membership anytime?",
      answer: "Yes, you can cancel your membership at any time. Your benefits will continue until the end of your current billing period. You can also downgrade to a free account and still keep your earned cashback."
    },
    {
      question: "How long does it take to receive cashback?",
      answer: "Cashback typically appears as 'pending' in your account immediately after purchase. It becomes available for withdrawal after the retailer's return period (usually 30-60 days) to ensure the purchase is final."
    },
    {
      question: "Do you charge any fees for withdrawals?",
      answer: "We don't charge any fees for UPI withdrawals. Bank transfers may have a small processing fee depending on your bank. Gift card redemptions are always free and often come with additional discounts."
    },
    {
      question: "What if I don't see my cashback credited?",
      answer: "If your cashback doesn't appear within 24 hours, please contact our support team with your order details. We'll track it down and ensure it's credited to your account. Our support team responds within 24 hours."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
                  Frequently Asked
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                  Questions
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Get answers to common questions about Bharat Rewards
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(56,189,248,0.05)_50%,transparent_51%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="space-y-4" variants={containerVariants}>
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass-card border-primary/20 hover:shadow-neon transition-all duration-300 neon-border overflow-hidden">
                      <motion.button
                        className="w-full p-6 text-left flex items-center justify-between"
                        onClick={() => toggleFAQ(index)}
                        whileHover={{ backgroundColor: "rgba(56, 189, 248, 0.05)" }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="p-2 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-neon flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <HelpCircle className="h-5 w-5 text-background" />
                          </motion.div>
                          <h3 className="text-lg font-semibold glow-text">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                              {faq.question}
                            </span>
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: openFAQ === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {openFAQ === index ? (
                            <ChevronUp className="h-5 w-5 text-primary" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary" />
                          )}
                        </motion.div>
                      </motion.button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFAQ === index ? "auto" : 0,
                          opacity: openFAQ === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <CardContent className="px-6 pb-6 pt-0">
                          <div className="pl-14">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CardContent>
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gradient-to-r from-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="glass-card p-8 neon-border text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h2 
                  className="text-3xl font-bold mb-4 glow-text"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Still Have Questions?
                  </span>
                </motion.h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our support team is here to help you get the most out of Bharat Rewards
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <motion.div 
                      className="text-2xl font-bold glow-text mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        24/7
                      </span>
                    </motion.div>
                    <p className="text-muted-foreground">Support Available</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <motion.div 
                      className="text-2xl font-bold glow-text mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                        &lt; 2 hrs
                      </span>
                    </motion.div>
                    <p className="text-muted-foreground">Average Response Time</p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <motion.div 
                      className="text-2xl font-bold glow-text mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                        99%
                      </span>
                    </motion.div>
                    <p className="text-muted-foreground">Customer Satisfaction</p>
                  </motion.div>
                </div>
                
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
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-background glow-button animate-bounce-glow"
                    >
                      Contact Support
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
                        Learn More About Us
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQs;
