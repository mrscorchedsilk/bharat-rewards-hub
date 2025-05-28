
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ShoppingCart, Star } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ProductProps {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  cashback: number;
  description: string;
}

const ProductItem = ({ product }: { product: ProductProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isAuthenticated } = useAuth();
  const isMobile = useIsMobile();

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (isAuthenticated) {
      toast.success(`${product.name} added to cart`);
    } else {
      toast.error("Please login to add items to cart");
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
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform
            ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <Badge className="bg-red-500 text-white hover:bg-red-600 text-xs sm:text-sm font-medium shadow-sm">
              {discount}% OFF
            </Badge>
          </div>
        )}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <Badge className="bg-green-500 text-white hover:bg-green-600 text-xs sm:text-sm font-medium shadow-sm">
            {product.cashback}% Cashback
          </Badge>
        </div>
      </div>
      
      <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-base sm:text-lg text-foreground truncate">{product.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">{product.brand}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-gold-500 text-gold-500" />
            <span className="text-xs sm:text-sm font-medium text-foreground">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-3 w-3 sm:h-4 sm:w-4 text-foreground" />
            <span className="text-base sm:text-lg font-bold text-foreground">{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through ml-1 sm:ml-2">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className={`w-full bg-bharat-600 hover:bg-bharat-700 text-white font-medium
            transition-all duration-200 ease-out shadow-sm hover:shadow-md
            ${isMobile ? 'h-11 text-sm' : 'h-10 text-sm'}
            active:scale-98 focus:ring-2 focus:ring-bharat-500 focus:ring-offset-2`}
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
