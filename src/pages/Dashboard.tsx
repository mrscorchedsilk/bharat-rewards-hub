
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import WalletCard from "@/components/WalletCard";
import { useAuth } from "@/context/AuthContext";
import { ChevronRight, Gift, ShoppingBag, IndianRupee, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for recent transactions
const recentTransactions = [
  {
    id: "1",
    title: "Amazon Purchase",
    date: "Today",
    amount: 45.00,
    type: "cashback",
  },
  {
    id: "2",
    title: "Flipkart Order",
    date: "Yesterday",
    amount: 28.50,
    type: "cashback",
  },
  {
    id: "3",
    title: "Gift Card Redemption",
    date: "3 days ago",
    amount: -100.00,
    type: "redemption",
  },
  {
    id: "4",
    title: "UPI Withdrawal",
    date: "Last week",
    amount: -500.00,
    type: "withdrawal",
  },
];

// Sample top deals
const topDeals = [
  {
    id: "1",
    name: "Amazon",
    cashback: "Up to 7%",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    name: "Flipkart",
    cashback: "Up to 5%",
    image: "https://images.unsplash.com/photo-1622570869098-fd030ca0512c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "3",
    name: "Myntra",
    cashback: "Up to 8%",
    image: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "4",
    name: "Tata CLiQ",
    cashback: "Up to 6%",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Fade in elements on load
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    fadeInElements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bharat-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 pt-8">
          {isAuthenticated ? (
            <>
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                  Your Dashboard
                </h1>
                <p className="text-gray-600 fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                  Manage your rewards, cashback, and shopping in one place
                </p>
              </header>
              
              <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
                <TabsList className="fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="rewards">Rewards</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                      <WalletCard />
                    </div>
                    
                    <div className="fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
                          <CardDescription>Your latest transactions</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {recentTransactions.slice(0, 3).map((transaction) => (
                            <div key={transaction.id} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                              <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                                  transaction.type === 'cashback' 
                                    ? 'bg-green-100' 
                                    : transaction.type === 'redemption'
                                    ? 'bg-gold-100'
                                    : 'bg-gray-100'
                                }`}>
                                  {transaction.type === 'cashback' && <IndianRupee className="h-4 w-4 text-green-600" />}
                                  {transaction.type === 'redemption' && <Gift className="h-4 w-4 text-gold-600" />}
                                  {transaction.type === 'withdrawal' && <ArrowRight className="h-4 w-4 text-gray-600" />}
                                </div>
                                <div>
                                  <p className="text-sm font-medium">{transaction.title}</p>
                                  <p className="text-xs text-gray-500 flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {transaction.date}
                                  </p>
                                </div>
                              </div>
                              <span className={`text-sm font-semibold ${
                                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toFixed(2)}
                              </span>
                            </div>
                          ))}
                          
                          <Button 
                            variant="ghost" 
                            className="w-full text-bharat-600 hover:text-bharat-700 hover:bg-bharat-50 flex justify-center items-center"
                            onClick={() => setActiveTab("transactions")}
                          >
                            View all transactions
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-bold flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2 text-bharat-600" />
                            Top Cashback Offers
                          </CardTitle>
                          <CardDescription>Earn maximum rewards with these partners</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {topDeals.map((deal) => (
                              <div 
                                key={deal.id}
                                className="group relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-bharat-200"
                              >
                                <div className="aspect-square relative overflow-hidden">
                                  <img 
                                    src={deal.image} 
                                    alt={deal.name} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-2">
                                    <p className="text-white text-xs font-medium">{deal.name}</p>
                                    <p className="text-white text-xs opacity-90">{deal.cashback}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="w-full mt-4 text-bharat-600 border-bharat-200 hover:bg-bharat-50 hover:text-bharat-700 hover:border-bharat-300"
                          >
                            Explore All Offers
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-bold flex items-center">
                            <Gift className="h-5 w-5 mr-2 text-gold-500" />
                            Featured Rewards
                          </CardTitle>
                          <CardDescription>Popular ways to use your rewards</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 gap-3">
                            <Link to="/gift-cards" className="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-bharat-200 hover:shadow-sm transition-all duration-300">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center mr-3">
                                  <Gift className="h-5 w-5 text-gold-600" />
                                </div>
                                <div>
                                  <p className="font-medium group-hover:text-bharat-600 transition-colors">Gift Cards</p>
                                  <p className="text-xs text-gray-500">Over 100 brands available</p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-bharat-600 transition-colors" />
                            </Link>
                            
                            <Link to="/products" className="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-bharat-200 hover:shadow-sm transition-all duration-300">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-bharat-100 flex items-center justify-center mr-3">
                                  <ShoppingBag className="h-5 w-5 text-bharat-600" />
                                </div>
                                <div>
                                  <p className="font-medium group-hover:text-bharat-600 transition-colors">Shop Products</p>
                                  <p className="text-xs text-gray-500">Exclusive deals for members</p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-bharat-600 transition-colors" />
                            </Link>
                            
                            <div className="group flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-bharat-200 hover:shadow-sm transition-all duration-300 cursor-pointer">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                  <IndianRupee className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                  <p className="font-medium group-hover:text-bharat-600 transition-colors">UPI Withdrawals</p>
                                  <p className="text-xs text-gray-500">Instant transfer to your account</p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-bharat-600 transition-colors" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions">
                  <Card className="fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                    <CardHeader>
                      <CardTitle>Transaction History</CardTitle>
                      <CardDescription>A record of all your reward transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-5">
                        {recentTransactions.map((transaction) => (
                          <div key={transaction.id} className="flex justify-between items-center p-3 border-b border-gray-100 last:border-0">
                            <div className="flex items-center">
                              <div className={`w-10 h-10 rounded-full mr-4 flex items-center justify-center ${
                                transaction.type === 'cashback' 
                                  ? 'bg-green-100' 
                                  : transaction.type === 'redemption'
                                  ? 'bg-gold-100'
                                  : 'bg-gray-100'
                              }`}>
                                {transaction.type === 'cashback' && <IndianRupee className="h-5 w-5 text-green-600" />}
                                {transaction.type === 'redemption' && <Gift className="h-5 w-5 text-gold-600" />}
                                {transaction.type === 'withdrawal' && <ArrowRight className="h-5 w-5 text-gray-600" />}
                              </div>
                              <div>
                                <p className="font-medium">{transaction.title}</p>
                                <p className="text-sm text-gray-500 flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {transaction.date}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`text-lg font-semibold ${
                                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toFixed(2)}
                              </span>
                              <p className="text-xs text-gray-500">
                                {transaction.type === 'cashback' && 'Cashback Earned'}
                                {transaction.type === 'redemption' && 'Reward Redeemed'}
                                {transaction.type === 'withdrawal' && 'Funds Withdrawn'}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rewards">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
                    <Card className="md:col-span-2">
                      <CardHeader>
                        <CardTitle>Your Reward Journey</CardTitle>
                        <CardDescription>Track your progress and upcoming milestones</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-bharat-100 to-bharat-50 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                              <p className="font-medium">Current Tier: Silver</p>
                              <p className="text-sm text-bharat-600">125 / 500 points to Gold</p>
                            </div>
                            <div className="w-full bg-white rounded-full h-2.5">
                              <div className="bg-bharat-600 h-2.5 rounded-full w-1/4"></div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-medium">Upcoming Rewards</h4>
                            
                            <div className="grid grid-cols-1 gap-3">
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center mr-3">
                                    <Gift className="h-5 w-5 text-gold-600" />
                                  </div>
                                  <div>
                                    <p className="font-medium">₹100 Gift Card</p>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                      <div className="bg-gold-500 h-1.5 rounded-full w-3/4"></div>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-sm">75 / 100 points</span>
                              </div>
                              
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 rounded-full bg-bharat-100 flex items-center justify-center mr-3">
                                    <IndianRupee className="h-5 w-5 text-bharat-600" />
                                  </div>
                                  <div>
                                    <p className="font-medium">Free UPI Withdrawal</p>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                      <div className="bg-bharat-500 h-1.5 rounded-full w-1/2"></div>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-sm">10 / 20 days</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Reward Tips</CardTitle>
                        <CardDescription>How to maximize your earnings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <h4 className="font-medium flex items-center text-green-800 mb-1">
                              <TrendingUp className="h-4 w-4 mr-1" />
                              Shop during promotions
                            </h4>
                            <p className="text-sm text-green-700">
                              Special events offer up to 5x regular cashback rates.
                            </p>
                          </div>
                          
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <h4 className="font-medium flex items-center text-blue-800 mb-1">
                              <Gift className="h-4 w-4 mr-1" />
                              Refer friends
                            </h4>
                            <p className="text-sm text-blue-700">
                              Earn ₹100 for each friend who joins and completes their first purchase.
                            </p>
                          </div>
                          
                          <div className="p-3 bg-amber-50 rounded-lg">
                            <h4 className="font-medium flex items-center text-amber-800 mb-1">
                              <ShoppingBag className="h-4 w-4 mr-1" />
                              Use featured partners
                            </h4>
                            <p className="text-sm text-amber-700">
                              Featured partners offer higher cashback rates than regular stores.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="max-w-md mx-auto mt-12">
              <AuthModal />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
