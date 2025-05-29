
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import WalletCard from "@/components/WalletCard";
import { Trophy, Gift, ShoppingBag, Percent, Users, ArrowRight, Sparkles, Star, Crown, Zap, TrendingUp, Award, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const premiumCardVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -12,
      rotateX: 3,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const brightGradients = [
    "from-cyan-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-green-400 via-emerald-500 to-teal-600",
    "from-purple-400 via-pink-500 to-rose-500",
    "from-indigo-400 via-blue-500 to-cyan-500",
    "from-amber-400 via-yellow-500 to-orange-500"
  ];

  const glowColors = [
    "shadow-cyan-500/50",
    "shadow-orange-500/50", 
    "shadow-emerald-500/50",
    "shadow-pink-500/50",
    "shadow-blue-500/50",
    "shadow-yellow-500/50"
  ];

  return (
    <div className="space-y-8 relative min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/30 via-teal-500/20 to-cyan-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3], 
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Gems */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-br ${brightGradients[i % brightGradients.length]} opacity-60 rounded-full`}
            style={{
              top: `${15 + (i * 8)}%`,
              left: `${8 + (i * 9)}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 6 + (i * 0.4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Premium Header */}
      <motion.header 
        className="mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex items-center justify-center mb-6"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Crown className="h-16 w-16 text-yellow-400 drop-shadow-2xl" />
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400/30 blur-2xl"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg">
            Elite Rewards Hub
          </span>
          <motion.div
            className="absolute -top-4 -right-12 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.h1>
        <motion.p 
          className="text-xl text-center max-w-2xl mx-auto bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your premium gateway to exclusive rewards and luxury experiences
        </motion.p>
      </motion.header>

      {/* Enhanced Summary Cards */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-3" variants={itemVariants}>
          <motion.div
            className="glass-card p-8 rounded-3xl border-2 border-gradient-to-r from-cyan-200/50 to-purple-200/50 relative overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/30 dark:from-slate-900/80 dark:via-blue-950/50 dark:to-purple-950/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-400/20 via-blue-500/15 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/15 via-pink-500/10 to-transparent rounded-tr-full" />
            
            <motion.h2 
              className="text-3xl font-bold mb-8 flex items-center"
              whileHover={{ x: 5 }}
            >
              <Sparkles className="mr-3 h-8 w-8 text-yellow-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600">
                Performance Analytics
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Total Cashback Earned",
                  value: `₹${user?.walletBalance.toFixed(2)}`,
                  icon: TrendingUp,
                  gradient: brightGradients[0],
                  glow: glowColors[0]
                },
                {
                  title: "Reward Points",
                  value: `${user?.cashbackPoints} points`,
                  icon: Zap,
                  gradient: brightGradients[1],
                  glow: glowColors[1]
                },
                {
                  title: "Active Giveaways",
                  value: "3 entries",
                  icon: Trophy,
                  gradient: brightGradients[2],
                  glow: glowColors[2]
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br from-white/90 to-slate-50/80 dark:from-slate-800/90 dark:to-slate-900/80 border border-white/50 dark:border-slate-700/50 overflow-hidden shadow-lg ${stat.glow} hover:shadow-2xl`}
                  variants={premiumCardVariants}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br opacity-80 rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.gradient.split(' ')[0].slice(5)}, ${stat.gradient.split(' ')[4]})`
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className={`h-10 w-10 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`} />
                  </motion.div>
                  
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{stat.title}</p>
                  <motion.p 
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="lg:col-span-1" variants={itemVariants}>
          <WalletCard />
        </motion.div>
      </motion.div>

      {/* Enhanced Feature Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "Elite Giveaways",
            description: "Exclusive premium contests",
            icon: Trophy,
            gradient: brightGradients[0],
            glow: glowColors[0],
            items: [
              { name: "iPhone 15 Pro Max", time: "5 days left", status: "VIP" },
              { name: "MacBook Air M2", time: "12 days left", status: "Premium" }
            ],
            link: "/dashboard/giveaways/current"
          },
          {
            title: "Platinum Cashback",
            description: "Maximum earning opportunities",
            icon: Percent,
            gradient: brightGradients[1],
            glow: glowColors[1],
            items: [
              { name: "Amazon - 7% Cashback", time: "June 30th", status: "Hot" },
              { name: "Flipkart - 5% Cashback", time: "July 15th", status: "New" }
            ],
            link: "/dashboard/cashback"
          },
          {
            title: "Luxury Gift Cards",
            description: "Premium redemption options",
            icon: Gift,
            gradient: brightGradients[2],
            glow: glowColors[2],
            items: [
              { name: "Amazon Gift Card", time: "From ₹500", status: "Popular" },
              { name: "Netflix Premium", time: "From ₹199", status: "Trending" }
            ],
            link: "/dashboard/gift-cards"
          },
          {
            title: "Bharat Essentials",
            description: "Curated premium products",
            icon: ShoppingBag,
            gradient: brightGradients[3],
            glow: glowColors[3],
            items: [
              { name: "Organic Honey", time: "₹299", status: "Organic" },
              { name: "Premium Spices", time: "₹199", status: "Artisan" }
            ],
            link: "/dashboard/store"
          },
          {
            title: "VIP Bulk Groups",
            description: "Exclusive member benefits",
            icon: Users,
            gradient: brightGradients[4],
            glow: glowColors[4],
            items: [
              { name: "Premium Kitchenware", time: "23 members", status: "Active" },
              { name: "Smart Home Tech", time: "47 members", status: "Popular" }
            ],
            link: "/dashboard/bulk-buying"
          },
          {
            title: "Diamond Rewards",
            description: "Ultimate loyalty benefits",
            icon: Gem,
            gradient: brightGradients[5],
            glow: glowColors[5],
            items: [
              { name: "VIP Status Upgrade", time: "Available", status: "Elite" },
              { name: "5x Bonus Multipliers", time: "Active", status: "Diamond" }
            ],
            link: "/dashboard"
          }
        ].map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group"
          >
            <motion.div
              className={`glass-card rounded-3xl border-2 border-white/30 dark:border-slate-700/30 p-6 h-full relative overflow-hidden bg-gradient-to-br from-white/90 via-slate-50/50 to-white/80 dark:from-slate-900/90 dark:via-slate-800/50 dark:to-slate-900/80 shadow-lg ${feature.glow} hover:shadow-2xl`}
              variants={premiumCardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.05 }}
            >
              {/* Enhanced Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
              
              {/* Floating Gems */}
              <motion.div
                className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-br ${feature.gradient} opacity-60 rounded-full`}
                animate={{
                  y: [-10, 10, -10],
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
              />

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <motion.div
                    className="relative mr-3"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`h-7 w-7 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.gradient} opacity-30 blur-lg`}
                      animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent font-bold`}>
                    {feature.title}
                  </span>
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex}
                    className="glass-card p-4 rounded-xl border border-white/20 dark:border-slate-700/20 relative overflow-hidden group/item bg-gradient-to-r from-white/50 to-slate-50/30 dark:from-slate-800/50 dark:to-slate-900/30"
                    whileHover={{ x: 8, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300`} />
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="font-medium text-sm text-slate-800 dark:text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{item.time}</p>
                      </div>
                      <motion.span 
                        className={`text-xs bg-gradient-to-r ${feature.gradient} text-white px-3 py-1.5 rounded-full font-medium shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.status}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm" 
                    className={`w-full mt-4 border-2 bg-gradient-to-r ${feature.gradient} border-transparent text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/button font-semibold`}
                  >
                    <Link to={feature.link}>
                      <motion.div
                        className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700"
                        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, -10% 100%)" }}
                      />
                      <span className="relative z-10 flex items-center">
                        Explore Premium
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DashboardHome;
