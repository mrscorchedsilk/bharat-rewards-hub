
import { motion } from "framer-motion";
import { Trophy, Gift, ShoppingBag, Percent, Users, Gem } from "lucide-react";
import WalletCard from "@/components/WalletCard";
import BackgroundEffects from "@/components/dashboard/BackgroundEffects";
import PremiumHeader from "@/components/dashboard/PremiumHeader";
import PerformanceAnalytics from "@/components/dashboard/PerformanceAnalytics";
import FeatureCard from "@/components/dashboard/FeatureCard";

const DashboardHome = () => {
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

  const features = [
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
  ];

  return (
    <div className="space-y-8 relative min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-blue-950/20 dark:to-purple-950/20">
      <BackgroundEffects />
      
      <PremiumHeader />

      {/* Enhanced Summary Cards */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-3" variants={itemVariants}>
          <PerformanceAnalytics />
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
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group"
          >
            <FeatureCard feature={feature} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DashboardHome;
