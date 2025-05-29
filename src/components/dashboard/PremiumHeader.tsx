
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

const PremiumHeader = () => {
  return (
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
  );
};

export default PremiumHeader;
