
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import WalletCard from "@/components/WalletCard";
import { Trophy, Gift, ShoppingBag, Percent, Users, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useAuth();

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

  const diamondVariants = {
    float: {
      y: [-5, 5, -5],
      rotate: [45, 90, 45],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
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
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="mr-3 h-8 w-8 text-gold-500" />
          </motion.div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Welcome to Your Dashboard
          </span>
        </motion.h1>
        <p className="text-muted-foreground">
          Manage your rewards, cashback, and exclusive offers in one place
        </p>
      </motion.header>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="lg:col-span-2"
          variants={itemVariants}
        >
          <Card className="p-6 glass-card border-primary/20 neon-border">
            <motion.h2 
              className="text-xl font-bold mb-4 glow-text"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Your Rewards Summary
              </span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div 
                className="glass-card p-4 rounded-lg neon-border relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-primary to-secondary opacity-60"
                  variants={diamondVariants}
                  animate="float"
                  style={{ transform: "rotate(45deg)" }}
                />
                <p className="text-sm text-muted-foreground">Total Cashback Earned</p>
                <motion.p 
                  className="text-2xl font-bold text-primary glow-text"
                  whileHover={{ scale: 1.05 }}
                >
                  ₹{user?.walletBalance.toFixed(2)}
                </motion.p>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-lg neon-border relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-gold-400 to-gold-600 opacity-60"
                  variants={diamondVariants}
                  animate="float"
                  style={{ transform: "rotate(45deg)" }}
                  transition={{ delay: 0.5 }}
                />
                <p className="text-sm text-muted-foreground">Reward Points</p>
                <motion.p 
                  className="text-2xl font-bold text-gold-600 glow-text"
                  whileHover={{ scale: 1.05 }}
                >
                  {user?.cashbackPoints} points
                </motion.p>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-lg neon-border relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-secondary to-accent opacity-60"
                  variants={diamondVariants}
                  animate="float"
                  style={{ transform: "rotate(45deg)" }}
                  transition={{ delay: 1 }}
                />
                <p className="text-sm text-muted-foreground">Giveaway Entries</p>
                <motion.p 
                  className="text-2xl font-bold text-primary glow-text"
                  whileHover={{ scale: 1.05 }}
                >
                  3 active
                </motion.p>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="lg:col-span-1"
          variants={itemVariants}
        >
          <WalletCard />
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="glass-card border-primary/20 neon-border hover:shadow-neon transition-all duration-300 relative overflow-hidden">
            <motion.div
              className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-gold-400 to-gold-600 opacity-40"
              variants={diamondVariants}
              animate="float"
              style={{ transform: "rotate(45deg)" }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Trophy className="mr-2 h-5 w-5 text-gold-500" />
                </motion.div>
                <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Current Giveaways
                </span>
              </CardTitle>
              <CardDescription>Participate and win amazing prizes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <motion.div 
                  className="glass-card p-3 rounded-lg neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <p className="font-medium text-sm">iPhone 15 Pro Max</p>
                  <p className="text-xs text-muted-foreground">Ends in 5 days</p>
                </motion.div>
                <motion.div 
                  className="glass-card p-3 rounded-lg neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <p className="font-medium text-sm">MacBook Air M2</p>
                  <p className="text-xs text-muted-foreground">Ends in 12 days</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild variant="outline" size="sm" className="w-full mt-2 neon-border bg-gradient-to-r from-primary/10 to-secondary/10">
                    <Link to="/dashboard/giveaways/current">
                      View All Giveaways
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="glass-card border-primary/20 neon-border hover:shadow-neon transition-all duration-300 relative overflow-hidden">
            <motion.div
              className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 opacity-40"
              variants={diamondVariants}
              animate="float"
              style={{ transform: "rotate(45deg)" }}
              transition={{ delay: 0.3 }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Percent className="mr-2 h-5 w-5 text-green-500" />
                </motion.div>
                <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Latest Cashback Offers
                </span>
              </CardTitle>
              <CardDescription>Earn as you shop from our partners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <motion.div 
                  className="glass-card p-3 rounded-lg neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <p className="font-medium text-sm">Amazon - 7% Cashback</p>
                  <p className="text-xs text-muted-foreground">Valid until June 30th</p>
                </motion.div>
                <motion.div 
                  className="glass-card p-3 rounded-lg neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <p className="font-medium text-sm">Flipkart - 5% Cashback</p>
                  <p className="text-xs text-muted-foreground">Valid until July 15th</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild variant="outline" size="sm" className="w-full mt-2 neon-border bg-gradient-to-r from-primary/10 to-secondary/10">
                    <Link to="/dashboard/cashback">
                      Browse All Offers
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="glass-card border-primary/20 neon-border hover:shadow-neon transition-all duration-300 relative overflow-hidden">
            <motion.div
              className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-primary to-secondary opacity-40"
              variants={diamondVariants}
              animate="float"
              style={{ transform: "rotate(45deg)" }}
              transition={{ delay: 0.6 }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Gift className="mr-2 h-5 w-5 text-primary" />
                </motion.div>
                <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Popular Gift Cards
                </span>
              </CardTitle>
              <CardDescription>Redeem your points for gift cards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <motion.div 
                  className="glass-card p-3 rounded-lg neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <p className="font-medium text-sm">Amazon Gift Card</p>
                  <p className="text-xs text-muted-foreground">From ₹500</p>
                </motion.div>
                <motion.div 
                  className="glass-card p-3 rounded-lg neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <p className="font-medium text-sm">Netflix Subscription</p>
                  <p className="text-xs text-muted-foreground">From ₹199</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild variant="outline" size="sm" className="w-full mt-2 neon-border bg-gradient-to-r from-primary/10 to-secondary/10">
                    <Link to="/dashboard/gift-cards">
                      View All Gift Cards
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="glass-card border-primary/20 neon-border hover:shadow-neon transition-all duration-300 relative overflow-hidden">
            <motion.div
              className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-accent to-primary opacity-40"
              variants={diamondVariants}
              animate="float"
              style={{ transform: "rotate(45deg)" }}
              transition={{ delay: 0.9 }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
                </motion.div>
                <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Bharat Essentials Store
                </span>
              </CardTitle>
              <CardDescription>Exclusive products for members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 overflow-x-auto pb-2 pt-1">
                {[
                  { name: "Organic Honey", price: "₹299" },
                  { name: "Spice Pack", price: "₹199" },
                  { name: "Handmade Soap", price: "₹149" }
                ].map((product, index) => (
                  <motion.div 
                    key={index}
                    className="min-w-[150px] w-[150px] rounded-lg overflow-hidden glass-card neon-border"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-24 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-primary to-secondary"
                        variants={diamondVariants}
                        animate="float"
                        style={{ transform: "rotate(45deg)" }}
                        transition={{ delay: index * 0.2 }}
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-sm font-medium truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild variant="outline" size="sm" className="w-full mt-4 neon-border bg-gradient-to-r from-primary/10 to-secondary/10">
                  <Link to="/dashboard/store">
                    Visit Store
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="glass-card border-primary/20 neon-border hover:shadow-neon transition-all duration-300 relative overflow-hidden">
            <motion.div
              className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-40"
              variants={diamondVariants}
              animate="float"
              style={{ transform: "rotate(45deg)" }}
              transition={{ delay: 1.2 }}
            />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="mr-2 h-5 w-5 text-indigo-500" />
                </motion.div>
                <span className="glow-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Bulk Buying Groups
                </span>
              </CardTitle>
              <CardDescription>Join groups to get bulk discounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <motion.div 
                  className="glass-card p-3 rounded-lg flex justify-between items-center neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div>
                    <p className="font-medium text-sm">Premium Kitchenware</p>
                    <p className="text-xs text-muted-foreground">23 members joined</p>
                  </div>
                  <motion.span 
                    className="text-xs bg-gradient-to-r from-indigo-500 to-indigo-600 text-background px-2 py-1 rounded-full shadow-neon"
                    whileHover={{ scale: 1.1 }}
                  >
                    Active
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="glass-card p-3 rounded-lg flex justify-between items-center neon-border"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div>
                    <p className="font-medium text-sm">Smart Home Devices</p>
                    <p className="text-xs text-muted-foreground">47 members joined</p>
                  </div>
                  <motion.span 
                    className="text-xs bg-gradient-to-r from-indigo-500 to-indigo-600 text-background px-2 py-1 rounded-full shadow-neon"
                    whileHover={{ scale: 1.1 }}
                  >
                    Active
                  </motion.span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild variant="outline" size="sm" className="w-full mt-2 neon-border bg-gradient-to-r from-primary/10 to-secondary/10">
                    <Link to="/dashboard/bulk-buying">
                      Browse All Groups
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
