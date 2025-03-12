
import { 
  Gift, 
  ShoppingBag, 
  IndianRupee, 
  CreditCard, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    title: "Cashback Rewards",
    description: "Earn up to 10% cashback on purchases through our affiliate partners.",
    icon: IndianRupee,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Gift Cards",
    description: "Redeem points for gift cards from your favorite brands and retailers.",
    icon: Gift,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "UPI Withdrawals",
    description: "Transfer your earned cashback directly to your UPI account.",
    icon: CreditCard,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Exclusive Products",
    description: "Shop for everyday essentials and specialty items at members-only prices.",
    icon: ShoppingBag,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Instant Processing",
    description: "Experience lightning-fast transactions and immediate reward crediting.",
    icon: Zap,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Secure Platform",
    description: "Your data and transactions are protected with state-of-the-art security.",
    icon: ShieldCheck,
    color: "bg-teal-50 text-teal-600",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-bharat-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Everything You Need in One Rewards Platform
          </h2>
          <p className="text-lg text-gray-600">
            Bharat Rewards combines cashback, gift cards, and exclusive shopping in one seamless experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-card hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
