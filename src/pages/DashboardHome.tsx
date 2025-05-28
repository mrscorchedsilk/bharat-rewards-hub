
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import WalletCard from "@/components/WalletCard";
import { Trophy, Gift, ShoppingBag, Percent, Users, ArrowRight, Sparkles, Star, Crown, Zap, TrendingUp, Award } from "lucide-react";
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
      y: -8,
      rotateX: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const diamondVariants = {
    float: {
      y: [-8, 8, -8],
      rotate: [45, 135, 45],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 20px rgba(56, 189, 248, 0.3)",
        "0 0 40px rgba(56, 189, 248, 0.6)",
        "0 0 20px rgba(56, 189, 248, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const premiumGradients = [
    "from-blue-600 via-purple-600 to-blue-800",
    "from-amber-500 via-orange-600 to-red-600",
    "from-emerald-500 via-teal-600 to-cyan-600",
    "from-violet-600 via-purple-600 to-indigo-700",
    "from-pink-500 via-rose-600 to-orange-600",
    "from-indigo-600 via-blue-600 to-cyan-700"
  ];

  return (
    <div className="space-y-8 relative min-h-screen">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/20 via-accent/15 to-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Diamond Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 bg-gradient-to-br ${premiumGradients[i % premiumGradients.length]} opacity-30`}
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${10 + (i * 12)}%`,
              transform: "rotate(45deg)"
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [45, 135, 225, 315, 45],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
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
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Crown className="h-12 w-12 text-amber-400 drop-shadow-2xl" />
            <motion.div
              className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow">
            Elite Dashboard
          </span>
          <motion.div
            className="absolute -top-2 -right-8 w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600"
            style={{ transform: "rotate(45deg)" }}
            animate={{
              rotate: [45, 405],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.h1>
        <motion.p 
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Command your rewards empire with precision and style
        </motion.p>
      </motion.header>

      {/* Premium Summary Cards */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-3" variants={itemVariants}>
          <motion.div
            className="glass-card p-8 rounded-2xl border border-primary/30 relative overflow-hidden"
            variants={glowVariants}
            animate="glow"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
            
            <motion.h2 
              className="text-2xl font-bold mb-6 flex items-center"
              whileHover={{ x: 5 }}
            >
              <Sparkles className="mr-3 h-7 w-7 text-amber-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Rewards Analytics
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Total Cashback Earned",
                  value: `₹${user?.walletBalance.toFixed(2)}`,
                  icon: TrendingUp,
                  gradient: "from-emerald-400 to-emerald-600",
                  bg: "from-emerald-500/10 to-emerald-600/5"
                },
                {
                  title: "Reward Points",
                  value: `${user?.cashbackPoints} points`,
                  icon: Zap,
                  gradient: "from-amber-400 to-amber-600",
                  bg: "from-amber-500/10 to-amber-600/5"
                },
                {
                  title: "Active Giveaways",
                  value: "3 entries",
                  icon: Trophy,
                  gradient: "from-purple-400 to-purple-600",
                  bg: "from-purple-500/10 to-purple-600/5"
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${stat.bg} border border-white/10 overflow-hidden`}
                  variants={premiumCardVariants}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br opacity-60"
                    style={{ background: `linear-gradient(to bottom right, ${stat.gradient.split(' ')[0].slice(5)}, ${stat.gradient.split(' ')[2]})` }}
                    variants={diamondVariants}
                    animate="float"
                    style={{ transform: "rotate(45deg)" }}
                    transition={{ delay: index * 0.5 }}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className={`h-8 w-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`} />
                  </motion.div>
                  
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
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

      {/* Premium Feature Grid */}
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
            gradient: premiumGradients[0],
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
            gradient: premiumGradients[1],
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
            gradient: premiumGradients[2],
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
            gradient: premiumGradients[3],
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
            gradient: premiumGradients[4],
            items: [
              { name: "Premium Kitchenware", time: "23 members", status: "Active" },
              { name: "Smart Home Tech", time: "47 members", status: "Popular" }
            ],
            link: "/dashboard/bulk-buying"
          },
          {
            title: "Member Rewards",
            description: "Loyalty program benefits",
            icon: Award,
            gradient: premiumGradients[5],
            items: [
              { name: "VIP Status Upgrade", time: "Available", status: "Elite" },
              { name: "Bonus Multipliers", time: "2x Active", status: "Premium" }
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
              className="glass-card rounded-2xl border border-primary/20 p-6 h-full relative overflow-hidden"
              variants={premiumCardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.05 }}
            >
              {/* Premium Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Floating Diamond */}
              <motion.div
                className={`absolute top-3 right-3 w-3 h-3 bg-gradient-to-br ${feature.gradient} opacity-40`}
                variants={diamondVariants}
                animate="float"
                style={{ transform: "rotate(45deg)" }}
                transition={{ delay: index * 0.2 }}
              />

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`mr-3 h-6 w-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg`}
                      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent font-bold`}>
                    {feature.title}
                  </span>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <motion.div 
                    key={itemIndex}
                    className="glass-card p-4 rounded-lg border border-white/5 relative overflow-hidden group/item"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`} />
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                      <motion.span 
                        className={`text-xs bg-gradient-to-r ${feature.gradient} text-white px-3 py-1 rounded-full font-medium shadow-lg`}
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
                    className={`w-full mt-4 border-2 bg-gradient-to-r ${feature.gradient} border-transparent text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/button`}
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
