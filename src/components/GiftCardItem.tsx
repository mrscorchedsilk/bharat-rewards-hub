
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

export interface GiftCardProps {
  id: string;
  name: string;
  provider: string;
  image: string;
  discount: number;
  price: number;
  description: string;
}

const GiftCardItem = ({ giftCard }: { giftCard: GiftCardProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isAuthenticated } = useAuth();

  const handlePurchase = () => {
    if (isAuthenticated) {
      toast.info(`Purchase flow for ${giftCard.name} will be implemented in the next update`);
    } else {
      toast.error("Please login to purchase gift cards");
    }
  };

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={giftCard.image} 
          alt={giftCard.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-bharat-700 hover:bg-white/80">
            {giftCard.discount}% OFF
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{giftCard.name}</h3>
            <p className="text-sm text-muted-foreground">{giftCard.provider}</p>
          </div>
          <div className="flex items-center text-lg font-bold">
            <IndianRupee className="h-4 w-4" />
            {giftCard.price}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{giftCard.description}</p>
        
        <Button 
          onClick={handlePurchase}
          className="w-full bg-bharat-600 hover:bg-bharat-700 text-white transition-all duration-300"
        >
          Purchase Now
        </Button>
      </div>
    </div>
  );
};

export default GiftCardItem;
