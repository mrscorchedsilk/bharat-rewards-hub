
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, CalendarDays, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const CurrentGiveaways = () => {
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

  // Sample giveaway data
  const giveaways = [
    {
      id: 1,
      title: "iPhone 15 Pro Max Giveaway",
      description: "Win the latest iPhone with ProMotion display and A17 Pro chip",
      endDate: "June 30, 2023",
      participants: 1243,
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=300&h=200",
      featured: true
    },
    {
      id: 2,
      title: "MacBook Air M2 Giveaway",
      description: "Ultra-thin, super fast, and perfect for work and play",
      endDate: "July 15, 2023",
      participants: 987,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300&h=200",
      featured: false
    },
    {
      id: 3,
      title: "PlayStation 5 Giveaway",
      description: "Next-gen gaming with lightning-fast loading and stunning graphics",
      endDate: "July 7, 2023",
      participants: 1876,
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=300&h=200",
      featured: true
    },
    {
      id: 4,
      title: "iPad Pro 12.9-inch Giveaway",
      description: "The ultimate iPad experience with M2 chip and Liquid Retina XDR display",
      endDate: "July 22, 2023",
      participants: 651,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=300&h=200",
      featured: false
    }
  ];

  return (
    <div>
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
            Current Giveaways
          </span>
        </motion.h1>
        <p className="text-muted-foreground">
          Participate in our ongoing giveaways for a chance to win amazing prizes
        </p>
      </motion.header>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {giveaways.map((giveaway) => (
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
              
              <div className="aspect-video w-full relative">
                <img 
                  src={giveaway.image} 
                  alt={giveaway.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-4">
                  <motion.div 
                    className="text-lg font-bold glow-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Active
                    </span>
                  </motion.div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <CardTitle className="glow-text">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      {giveaway.title}
                    </span>
                  </CardTitle>
                </motion.div>
                <CardDescription className="text-muted-foreground">
                  {giveaway.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4 text-primary" />
                    Ends on: <span className="text-primary font-medium ml-1">{giveaway.endDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4 text-secondary" />
                    <span className="text-secondary font-medium">{giveaway.participants.toLocaleString()}</span> participants
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
    </div>
  );
};

export default CurrentGiveaways;
