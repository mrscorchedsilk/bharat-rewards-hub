
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
    glow: string;
    items: Array<{ name: string; time: string; status: string }>;
    link: string;
  };
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
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

  return (
    <motion.div
      className={`glass-card rounded-3xl border-2 border-white/30 dark:border-slate-700/30 p-6 h-full relative overflow-hidden bg-gradient-to-br from-white/90 via-slate-50/50 to-white/80 dark:from-slate-900/90 dark:via-slate-800/50 dark:to-slate-900/80 shadow-lg ${feature.glow} hover:shadow-2xl group`}
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
  );
};

export default FeatureCard;
