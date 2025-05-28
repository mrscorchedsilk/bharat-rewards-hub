
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
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-primary/8 via-secondary/4 to-accent/6 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-tr from-secondary/8 via-accent/4 to-primary/6 rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1], 
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Everything You Need in One Rewards Platform
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
                className="glass-card rounded-xl p-6 transition-all duration-200 border border-primary/20"
                whileHover={{ 
                  y: -2, 
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                style={{
                  willChange: 'transform'
                }}
              >
                {/* Subtle hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-xl`} />
                
                <motion.div 
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-5 relative`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="h-6 w-6" />
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
