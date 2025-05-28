
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Users, Gift, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Giveaways = () => {
  const [activeTab, setActiveTab] = useState("current");

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

  const currentGiveaways = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      description: "Latest iPhone with ProMotion display and A17 Pro chip",
      endDate: "5 days",
      participants: 1243,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=300&h=200",
      featured: true
    },
    {
      id: 2,
      title: "MacBook Air M2",
      description: "Ultra-thin, super fast, perfect for work and play",
      endDate: "12 days",
      participants: 987,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=200",
      featured: false
    },
    {
      id: 3,
      title: "PlayStation 5",
      description: "Next-gen gaming with lightning-fast loading",
      endDate: "8 days",
      participants: 1876,
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=300&h=200",
      featured: true
    }
  ];

  const pastWinners = [
    {
      id: 1,
      title: "MacBook Air M2",
      winner: "Rajesh K.",
      endDate: "December 2023",
      participants: 1234,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 2,
      title: "iPhone 14 Pro",
      winner: "Priya S.",
      endDate: "November 2023",
      participants: 2156,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ];

  return (
    <div className="space-y-6">
      <motion.header 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-3xl font-bold mb-2 flex items-center glow-text"
          whileHover={{ scale: 1.02 }}
        >
          <Trophy className="mr-3 h-8 w-8 text-gold-500 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Bharat Giveaways
          </span>
        </motion.h1>
        <p className="text-muted-foreground">Participate in exciting giveaways and check past winners</p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="glass-card border-primary/20">
            <TabsTrigger 
              value="current" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-background"
            >
              <Gift className="mr-2 h-4 w-4" />
              Current Giveaways
            </TabsTrigger>
            <TabsTrigger 
              value="past"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-background"
            >
              <Crown className="mr-2 h-4 w-4" />
              Past Winners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentGiveaways.map((giveaway) => (
                <motion.div
                  key={giveaway.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden glass-card border-primary/20 hover:shadow-neon transition-all duration-300 neon-border relative">
                    {giveaway.featured && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-gold-400 to-gold-600 text-background px-3 py-1 rounded-full text-xs font-medium z-10 shadow-neon">
                        <Star className="inline mr-1 h-3 w-3" />
                        Featured
                      </div>
                    )}
                    
                    <div className="aspect-video relative">
                      <img 
                        src={giveaway.image} 
                        alt={giveaway.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-4">
                        <motion.h3 
                          className="text-primary text-xl font-bold glow-text"
                          whileHover={{ scale: 1.05 }}
                        >
                          {giveaway.title}
                        </motion.h3>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardDescription className="text-muted-foreground">
                        {giveaway.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex justify-between mb-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4 text-primary" />
                          Ends in: <span className="text-primary font-medium ml-1">{giveaway.endDate}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="mr-1 h-4 w-4 text-secondary" />
                          <span className="text-secondary font-medium">{giveaway.participants.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary text-background glow-button">
                          Enter Giveaway
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="past">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {pastWinners.map((winner) => (
                <motion.div
                  key={winner.id}
                  variants={itemVariants}
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card border-primary/20 hover:shadow-neon transition-all duration-300 neon-border">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={winner.image} 
                          alt={winner.title}
                          className="h-full w-full object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <motion.div 
                            className="flex items-center gap-3 mb-2"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="p-2 rounded-full bg-gradient-to-tr from-gold-400 to-gold-600 shadow-neon">
                              <Crown className="h-5 w-5 text-background" />
                            </div>
                            <CardTitle className="glow-text">
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
                                {winner.title}
                              </span>
                            </CardTitle>
                          </motion.div>
                          <CardDescription className="text-muted-foreground">
                            Ended {winner.endDate}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <div className="space-y-3">
                            <motion.div 
                              className="flex items-center gap-2"
                              whileHover={{ scale: 1.02 }}
                            >
                              <span className="text-sm text-muted-foreground">Winner:</span>
                              <span className="font-medium text-primary glow-text">{winner.winner}</span>
                            </motion.div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-secondary" />
                              <span className="text-sm text-muted-foreground">
                                Total Participants: <span className="text-secondary font-medium">{winner.participants.toLocaleString()}</span>
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Giveaways;
