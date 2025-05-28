
import React from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(56,189,248,0.05)_50%,transparent_51%)]"></div>
      
      <motion.div 
        className="text-center max-w-2xl mx-auto px-4 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-8xl md:text-9xl font-bold glow-text animate-pulse-glow mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              404
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 glow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Oops! Page Not Found
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, we'll help you find your way back to the rewards!
          </motion.p>
        </motion.div>

        <motion.div 
          className="glass-card p-8 neon-border mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              className="p-3 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-neon"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Search className="h-6 w-6 text-background" />
            </motion.div>
            <motion.h2 
              className="text-xl font-bold glow-text"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                What were you looking for?
              </span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/rewards" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <strong className="text-primary">Rewards & Cashback</strong>
                <br />
                Discover amazing offers and earn cashback
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/dashboard" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <strong className="text-primary">Your Dashboard</strong>
                <br />
                Check your earnings and account
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/pricing" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <strong className="text-primary">Membership Plans</strong>
                <br />
                Upgrade for better rewards
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/about" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <strong className="text-primary">About Us</strong>
                <br />
                Learn more about Bharat Rewards
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
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
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-sm text-muted-foreground">
            Need help? Contact our support team and we'll get you back on track!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
