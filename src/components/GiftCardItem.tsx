
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  const handlePurchase = () => {
    if (isAuthenticated) {
      toast.info(`Purchase flow for ${giftCard.name} will be implemented in the next update`);
    } else {
      toast.error("Please login to purchase gift cards");
    }
  };

  return (
    <div 
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ease-out
        ${isMobile 
          ? 'active:scale-95 active:shadow-md' 
          : 'hover:scale-102 hover:shadow-lg hover:-translate-y-1'
        } will-change-transform`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={() => isMobile && setIsHovered(true)}
      onTouchEnd={() => isMobile && setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={giftCard.image} 
          alt={giftCard.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform
            ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <Badge className="bg-white/90 text-bharat-700 hover:bg-white/95 text-xs sm:text-sm font-medium shadow-sm">
            {giftCard.discount}% OFF
          </Badge>
        </div>
      </div>
      
      <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-base sm:text-lg text-foreground truncate">{giftCard.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{giftCard.provider}</p>
          </div>
          <div className="flex items-center text-base sm:text-lg font-bold text-primary shrink-0">
            <IndianRupee className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="ml-0.5">{giftCard.price}</span>
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {giftCard.description}
        </p>
        
        <Button 
          onClick={handlePurchase}
          className={`w-full bg-bharat-600 hover:bg-bharat-700 text-white font-medium
            transition-all duration-200 ease-out shadow-sm hover:shadow-md
            ${isMobile ? 'h-11 text-sm' : 'h-10 text-sm'}
            active:scale-98 focus:ring-2 focus:ring-bharat-500 focus:ring-offset-2`}
        >
          Purchase Now
        </Button>
      </div>
    </div>
  );
};

export default GiftCardItem;
