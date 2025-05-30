
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Zap, Trophy } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const PerformanceAnalytics = () => {
  const { user } = useAuth();

  const brightGradients = [
    "from-cyan-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-green-400 via-emerald-500 to-teal-600"
  ];

  const glowColors = [
    "shadow-cyan-500/50",
    "shadow-orange-500/50", 
    "shadow-emerald-500/50"
  ];

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

  const stats = [
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
  ];

  return (
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
        {stats.map((stat, index) => (
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
  );
};

export default PerformanceAnalytics;
