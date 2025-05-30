
import { motion } from "framer-motion";

const BackgroundEffects = () => {
  const brightGradients = [
    "from-cyan-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-green-400 via-emerald-500 to-teal-600",
    "from-purple-400 via-pink-500 to-rose-500",
    "from-indigo-400 via-blue-500 to-cyan-500",
    "from-amber-400 via-yellow-500 to-orange-500"
  ];

  return (
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
  );
};

export default BackgroundEffects;
