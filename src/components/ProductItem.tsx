
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, ShoppingCart, Star } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

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
      className="glass-card rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg"
      style={{ willChange: 'transform' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
          style={{ willChange: 'transform' }}
        />
        {discount > 0 && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-500 text-white hover:bg-red-600">
              {discount}% OFF
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className="bg-green-500 text-white hover:bg-green-600">
            {product.cashback}% Cashback
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-gold-500 text-gold-500 mr-1" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <IndianRupee className="h-4 w-4" />
            <span className="text-lg font-bold">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-bharat-600 hover:bg-bharat-700 text-white transition-all duration-200"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
