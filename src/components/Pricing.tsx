
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingCard = ({ 
  title, 
  price, 
  duration, 
  cashback, 
  features, 
  index,
  isPopular = false 
}: { 
  title: string;
  price: string;
  duration: string;
  cashback: string;
  features: string[];
  index: number;
  isPopular?: boolean;
}) => {
  const gradients = [
    "from-blue-400 to-blue-600",
    "from-purple-400 to-purple-600", 
    "from-amber-400 to-amber-600"
  ];

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <span className={`bg-gradient-to-r ${gradients[index]} text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg`}>
            Most Popular
          </span>
        </motion.div>
      )}

      <motion.div
        className={`flex flex-col p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-200 relative overflow-hidden ${
          isPopular ? 'border-2 border-primary/30' : ''
        }`}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        style={{
          willChange: 'transform'
        }}
      >
        {/* Subtle hover background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-3 transition-opacity duration-300`} />

        <div className="relative z-10">
          <motion.h3 
            className={`text-2xl font-bold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <div className="mt-4 mb-8">
            <motion.p 
              className="text-4xl font-bold"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              ₹{price}
            </motion.p>
            <p className="text-gray-500">{duration}</p>
          </div>
          
          <div className="flex-1">
            <motion.p 
              className={`text-lg font-semibold bg-gradient-to-r ${gradients[index]} bg-clip-text text-transparent mb-4`}
            >
              {cashback} Cashback
            </motion.p>
            
            <ul className="space-y-3">
              {features.map((feature, featureIndex) => (
                <motion.li 
                  key={featureIndex} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (featureIndex * 0.05), duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                  </motion.div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.1 }}
          >
            <Button 
              asChild
              className={`mt-8 w-full bg-gradient-to-r ${gradients[index]} transition-all duration-200 relative overflow-hidden group/button`}
            >
              <Link to="/dashboard">
                <span className="relative z-10">Get Started</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-40 w-48 h-48 bg-gradient-to-br from-primary/10 via-secondary/6 to-accent/4 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-56 h-56 bg-gradient-to-tr from-accent/10 via-primary/6 to-secondary/4 rounded-full blur-2xl"
          animate={{ 
            scale: [1.1, 1, 1.1], 
            opacity: [0.3, 0.5, 0.3]
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
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Choose Your Rewards Package
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Select the perfect plan for your shopping needs
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Bronze Package"
            price="100"
            duration="10 Days"
            cashback="5%"
            features={[
              "Basic Cashback Rewards",
              "Access to Exclusive Deals",
              "Member-only Events",
              "24/7 Support"
            ]}
            index={0}
          />
          
          <PricingCard
            title="Silver Package"
            price="250"
            duration="1 Month"
            cashback="10%"
            features={[
              "Enhanced Cashback Rewards",
              "Priority Support",
              "Early Access to Sales",
              "Exclusive Brand Partnerships"
            ]}
            index={1}
            isPopular={true}
          />
          
          <PricingCard
            title="Gold Package"
            price="500"
            duration="3 Months"
            cashback="50%"
            features={[
              "Maximum Cashback Benefits",
              "VIP Customer Support",
              "First Access to New Products",
              "Special Member Events"
            ]}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
