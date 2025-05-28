
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Users, Target, Award, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We believe in empowering Indians with better shopping experiences and maximum savings."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a strong community of savvy shoppers who help each other save money."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Partnering only with trusted brands and ensuring the highest quality standards."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction and savings are at the heart of everything we do."
    }
  ];

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
                  About Bharat Rewards
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Empowering millions of Indians to save more while shopping for what they love
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(56,189,248,0.05)_50%,transparent_51%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={itemVariants}>
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-6 glow-text"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Our Story
                    </span>
                  </motion.h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Bharat Rewards was born from a simple idea: every Indian deserves access to better deals and exclusive savings when shopping online.
                    </p>
                    <p>
                      Founded by a team of passionate entrepreneurs who understood the challenges of finding genuine deals in the crowded e-commerce space, we set out to create a platform that truly puts the customer first.
                    </p>
                    <p>
                      Today, we're proud to serve thousands of members across India, helping them save money while shopping from their favorite brands.
                    </p>
                  </div>
                </div>
                <motion.div 
                  className="glass-card p-8 neon-border"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="space-y-6">
                    <div className="text-center">
                      <motion.div 
                        className="text-4xl font-bold glow-text mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                          10,000+
                        </span>
                      </motion.div>
                      <p className="text-muted-foreground">Happy Members</p>
                    </div>
                    <div className="text-center">
                      <motion.div 
                        className="text-4xl font-bold glow-text mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                          ₹50L+
                        </span>
                      </motion.div>
                      <p className="text-muted-foreground">Total Savings Generated</p>
                    </div>
                    <div className="text-center">
                      <motion.div 
                        className="text-4xl font-bold glow-text mb-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                          100+
                        </span>
                      </motion.div>
                      <p className="text-muted-foreground">Partner Brands</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-r from-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-center mb-12" variants={itemVariants}>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4 glow-text"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Our Values
                  </span>
                </motion.h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
              >
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass-card border-primary/20 hover:shadow-neon transition-all duration-300 neon-border h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className="p-3 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-neon"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <value.icon className="h-6 w-6 text-background" />
                          </motion.div>
                          <CardTitle className="glow-text">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                              {value.title}
                            </span>
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
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
                  Ready to Start Saving?
                </span>
              </motion.h2>
              <motion.p 
                className="text-lg mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Join thousands of smart shoppers who are already saving with Bharat Rewards
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
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-background glow-button animate-bounce-glow"
                  >
                    <Link to="/pricing">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
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
                    <Link to="/rewards">
                      Explore Rewards
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

export default About;
