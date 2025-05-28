import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight, ShoppingBag, Gift, Users, ExternalLink, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Rewards = () => {
  const navigate = useNavigate();
  
  const cashbackPartners = [
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=300&h=200",
      cashbackRate: "Up to 7%",
      description: "Shop for electronics, fashion, books, and more with exclusive cashback offers."
    },
    {
      name: "Flipkart",
      logo: "https://images.unsplash.com/photo-1622570869098-fd030ca0512c?auto=format&fit=crop&q=80&w=300&h=200",
      cashbackRate: "Up to 5%",
      description: "Enjoy special discounts and cashback on your favorite brands and products."
    },
    {
      name: "Myntra",
      logo: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&fit=crop&q=80&w=300&h=200",
      cashbackRate: "Up to 8%",
      description: "Shop for fashion and accessories while earning rewards on every purchase."
    },
    {
      name: "Tata CLiQ",
      logo: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=300&h=200",
      cashbackRate: "Up to 6%",
      description: "Premium shopping with verified brands and cashback benefits."
    }
  ];

  const giftCards = [
    {
      name: "Amazon Gift Card",
      value: "₹500 - ₹10,000",
      discount: "2% off",
      image: "https://images.unsplash.com/photo-1577512422359-3a4cd90f490c?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      name: "Flipkart Gift Card",
      value: "₹1,000 - ₹5,000",
      discount: "3% off",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      name: "Swiggy Gift Card",
      value: "₹500 - ₹2,000",
      discount: "5% off",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
      name: "Zomato Gift Card",
      value: "₹500 - ₹3,000",
      discount: "4% off",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=300&h=200"
    }
  ];

  const bulkBuyingCategories = [
    {
      name: "Groceries & Essentials",
      discount: "15-25% off retail",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300&h=200",
      description: "Premium quality groceries at wholesale prices through collective buying power."
    },
    {
      name: "Electronics & Gadgets",
      discount: "10-20% off retail",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=300&h=200",
      description: "Latest electronics sourced directly from manufacturers at discounted rates."
    },
    {
      name: "Home & Kitchen Appliances",
      discount: "12-22% off retail",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=300&h=200",
      description: "Quality home essentials negotiated at bulk prices for Bharat Rewards members."
    },
    {
      name: "Health & Wellness Products",
      discount: "15-30% off retail",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300&h=200",
      description: "Premium health products at substantial discounts through group purchasing."
    }
  ];

  const handleJoinNowClick = () => {
    navigate("/login");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 glow-text animate-pulse-glow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Unlock Exclusive Rewards
                </span>
                <br />
                <span className="text-foreground">with Bharat Rewards</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Earn cashback, access premium gift cards, and join our powerful bulk buying groups
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleJoinNowClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-background glow-button animate-bounce-glow hover:shadow-neon-lg"
                >
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cashback Section */}
        <section className="py-16 bg-background relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(56,189,248,0.05)_50%,transparent_51%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex flex-col md:flex-row md:items-center justify-between mb-12"
                variants={itemVariants}
              >
                <div>
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-4 flex items-center glow-text"
                    whileHover={{ scale: 1.02 }}
                  >
                    <BadgePercent className="mr-3 h-8 w-8 text-primary animate-pulse" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Cashback Rewards
                    </span>
                  </motion.h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Shop through our partner links and earn cashback on every purchase. The more you shop, the more you earn!
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="mt-4 md:mt-0 bg-gradient-to-r from-primary to-secondary text-background glow-button">
                    <Link to="/dashboard/cashback">View All Partners</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
              >
                {cashbackPartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="overflow-hidden glass-card border-primary/20 hover:shadow-neon transition-all duration-300 neon-border">
                      <div className="aspect-video relative">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-4">
                          <h3 className="text-primary text-xl font-bold glow-text">{partner.name}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-lg font-bold text-secondary mb-2 glow-text">{partner.cashbackRate}</p>
                        <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="w-full flex items-center justify-center bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary glow-button">
                            Shop Now
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gift Cards Section */}
        <section className="py-16 bg-gradient-to-r from-background to-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Gift className="mr-3 h-8 w-8 text-red-500" />
                    Gift Cards
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl">
                    Purchase digital gift cards at special member prices. Perfect for gifts or personal use.
                  </p>
                </div>
                <Button asChild className="mt-4 md:mt-0 bg-[#38b6ff] hover:bg-[#38b6ff]/90">
                  <Link to="/dashboard/gift-cards">Explore Gift Cards</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {giftCards.map((card) => (
                  <Card key={card.name} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <img 
                        src={card.image} 
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-xl font-bold">{card.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-600">{card.value}</p>
                        <p className="text-red-500 font-bold">{card.discount}</p>
                      </div>
                      <Button className="w-full flex items-center justify-center">
                        Buy Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Buying Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 flex items-center">
                      <Users className="mr-3 h-8 w-8 text-blue-600" />
                      Bharat Power+
                    </h2>
                    <p className="text-lg mb-4">
                      Our unique bulk buying program that gives you access to premium products at wholesale prices.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                          <span className="text-blue-600 font-bold text-sm">1</span>
                        </div>
                        <p>We negotiate on behalf of all members collectively</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                          <span className="text-blue-600 font-bold text-sm">2</span>
                        </div>
                        <p>Get bulk discounts on higher quality products</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3">
                          <span className="text-blue-600 font-bold text-sm">3</span>
                        </div>
                        <p>We charge as low as 10% margin, passing maximum savings to you</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/dashboard/bulk-buying">
                        Join Bulk Buying Groups
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bulkBuyingCategories.map((category) => (
                  <Card key={category.name} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-4">
                        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                        <p className="text-green-600 font-bold mb-2">{category.discount}</p>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/dashboard/bulk-buying">
                            Explore Category
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 glow-text animate-pulse-glow"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Ready to Start Saving?
                </span>
              </motion.h2>
              <motion.p 
                className="text-lg mb-8 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Join thousands of members who are already enjoying exclusive rewards and discounts.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary text-background glow-button animate-bounce-glow"
                  >
                    <Link to="/pricing">
                      View Membership Options
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 neon-border"
                  >
                    <Link to="/about">
                      Learn More About Us
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Rewards;
