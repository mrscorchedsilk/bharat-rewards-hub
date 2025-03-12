
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Percent, Info, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Cashback = () => {
  // Sample cashback offers
  const cashbackOffers = [
    {
      id: 1,
      store: "Amazon",
      category: "E-commerce",
      cashbackRate: "Up to 7%",
      description: "Earn cashback on all Amazon purchases including electronics, fashion, and more.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 2,
      store: "Flipkart",
      category: "E-commerce",
      cashbackRate: "Up to 5%",
      description: "Shop for electronics, fashion, home essentials, and more to earn cashback.",
      featured: true,
      logo: "https://images.unsplash.com/photo-1622570869098-fd030ca0512c?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 3,
      store: "Myntra",
      category: "Fashion",
      cashbackRate: "Up to 8%",
      description: "Shop for clothing, accessories, and footwear from top brands and earn rewards.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 4,
      store: "BigBasket",
      category: "Groceries",
      cashbackRate: "4%",
      description: "Order groceries, fresh produce, and household essentials with cashback benefits.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 5,
      store: "Tata CLiQ",
      category: "E-commerce",
      cashbackRate: "Up to 6%",
      description: "Premium shopping destination for fashion, electronics, and home decor.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      id: 6,
      store: "Nykaa",
      category: "Beauty",
      cashbackRate: "Up to 10%",
      description: "Buy beauty products, cosmetics, and personal care items with great rewards.",
      featured: false,
      logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Percent className="mr-2 h-6 w-6 text-green-500" />
          Cashback Offers
        </h1>
        <p className="text-gray-600">
          Shop through these affiliate links to earn cashback points
        </p>
      </header>

      <div className="bg-green-50 p-4 rounded-lg mb-8">
        <div className="flex items-start">
          <Info className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-800 mb-1">How cashback works</h3>
            <p className="text-sm text-green-700">
              Click on the "Shop Now" button to visit the retailer's website. Your visits will be tracked 
              automatically, and cashback will be credited to your account within 30-60 days after a confirmed 
              purchase. Cashback rates may vary based on product categories and ongoing promotions.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Star className="mr-2 h-5 w-5 text-gold-500" />
        Featured Partners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {cashbackOffers.filter(offer => offer.featured).map((offer) => (
          <Card key={offer.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 relative">
              <img 
                src={offer.logo} 
                alt={offer.store}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-bold">{offer.store}</h3>
                <p className="text-white opacity-90">{offer.category}</p>
              </div>
              <div className="absolute top-2 right-2 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-bold text-green-600">{offer.cashbackRate}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm max-w-xs">{offer.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Button className="w-full flex items-center justify-center">
                Shop Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">All Cashback Offers</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cashbackOffers.filter(offer => !offer.featured).map((offer) => (
          <Card key={offer.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video relative">
              <img 
                src={offer.logo} 
                alt={offer.store}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">{offer.store}</h3>
                <p className="text-white text-sm opacity-90">{offer.category}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-bold text-green-600">{offer.cashbackRate}</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm max-w-xs">{offer.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Button className="w-full flex items-center justify-center">
                Shop Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cashback;
