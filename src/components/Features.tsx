
import { 
  Gift, 
  ShoppingBag, 
  IndianRupee, 
  CreditCard, 
  Zap, 
  ShieldCheck 
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Cashback Rewards",
    description: "Earn up to 10% cashback on purchases through our affiliate partners.",
    icon: IndianRupee,
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    title: "Gift Cards",
    description: "Redeem points for gift cards from your favorite brands and retailers.",
    icon: Gift,
    color: "bg-purple-50 text-purple-600",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "UPI Withdrawals",
    description: "Transfer your earned cashback directly to your UPI account.",
    icon: CreditCard,
    color: "bg-green-50 text-green-600",
    gradient: "from-green-400 to-green-600",
  },
  {
    title: "Exclusive Products",
    description: "Shop for everyday essentials and specialty items at members-only prices.",
    icon: ShoppingBag,
    color: "bg-amber-50 text-amber-600",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    title: "Instant Processing",
    description: "Experience lightning-fast transactions and immediate reward crediting.",
    icon: Zap,
    color: "bg-red-50 text-red-600",
    gradient: "from-red-400 to-red-600",
  },
  {
    title: "Secure Platform",
    description: "Your data and transactions are protected with state-of-the-art security.",
    icon: ShieldCheck,
    color: "bg-teal-50 text-teal-600",
    gradient: "from-teal-400 to-teal-600",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-secondary/10 via-accent/5 to-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1], 
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-balance relative"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Everything You Need in One Rewards Platform
            </span>
            <motion.div
              className="absolute -top-2 -right-4 w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-600"
              style={{ transform: "rotate(45deg)" }}
              animate={{
                rotate: [45, 405],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bharat Rewards combines cashback, gift cards, and exclusive shopping in one seamless experience.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-card hover:translate-y-[-5px] relative overflow-hidden border border-primary/20"
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(56, 189, 248, 0.4), 0 0 60px rgba(56, 189, 248, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Premium Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Floating Diamond */}
                <motion.div
                  className={`absolute top-3 right-3 w-3 h-3 bg-gradient-to-br ${feature.gradient} opacity-40`}
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [45, 135, 45],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                  style={{ transform: "rotate(45deg)" }}
                />

                <motion.div 
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-5 relative`}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-6 w-6" />
                  <motion.div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg`}
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
                
                <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 relative z-10">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
