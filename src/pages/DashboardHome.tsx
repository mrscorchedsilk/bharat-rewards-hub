import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/card";
import WalletCard from "@/components/WalletCard";
import { Trophy, Gift, ShoppingBag, Percent, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your rewards, cashback, and exclusive offers in one place
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Your Rewards Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#38b6ff]/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Cashback Earned</p>
                <p className="text-2xl font-bold text-[#38b6ff]">₹{user?.walletBalance.toFixed(2)}</p>
              </div>
              <div className="bg-gold-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Reward Points</p>
                <p className="text-2xl font-bold text-gold-600">{user?.cashbackPoints} points</p>
              </div>
              <div className="bg-[#38b6ff]/5 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Giveaway Entries</p>
                <p className="text-2xl font-bold text-[#38b6ff]">3 active</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <WalletCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-md transition-shadow fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-gold-500" />
              Current Giveaways
            </CardTitle>
            <CardDescription>Participate and win amazing prizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-gold-50 p-3 rounded-lg">
                <p className="font-medium text-sm">iPhone 15 Pro Max</p>
                <p className="text-xs text-gray-500">Ends in 5 days</p>
              </div>
              <div className="bg-gold-50 p-3 rounded-lg">
                <p className="font-medium text-sm">MacBook Air M2</p>
                <p className="text-xs text-gray-500">Ends in 12 days</p>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-2">
                <Link to="/dashboard/giveaways/current">
                  View All Giveaways
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Percent className="mr-2 h-5 w-5 text-green-500" />
              Latest Cashback Offers
            </CardTitle>
            <CardDescription>Earn as you shop from our partners</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-sm">Amazon - 7% Cashback</p>
                <p className="text-xs text-gray-500">Valid until June 30th</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-medium text-sm">Flipkart - 5% Cashback</p>
                <p className="text-xs text-gray-500">Valid until July 15th</p>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-2">
                <Link to="/dashboard/cashback">
                  Browse All Offers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Gift className="mr-2 h-5 w-5 text-bharat-500" />
              Popular Gift Cards
            </CardTitle>
            <CardDescription>Redeem your points for gift cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-bharat-50 p-3 rounded-lg">
                <p className="font-medium text-sm">Amazon Gift Card</p>
                <p className="text-xs text-gray-500">From ₹500</p>
              </div>
              <div className="bg-bharat-50 p-3 rounded-lg">
                <p className="font-medium text-sm">Netflix Subscription</p>
                <p className="text-xs text-gray-500">From ₹199</p>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-2">
                <Link to="/dashboard/gift-cards">
                  View All Gift Cards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in-element" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.5s ease' }}>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-bharat-600" />
              Bharat Essentials Store
            </CardTitle>
            <CardDescription>Exclusive products for members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4 overflow-x-auto pb-2 pt-1">
              <div className="min-w-[150px] w-[150px] rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24 bg-gray-100"></div>
                <div className="p-2">
                  <p className="text-sm font-medium truncate">Organic Honey</p>
                  <p className="text-xs text-gray-500">₹299</p>
                </div>
              </div>
              <div className="min-w-[150px] w-[150px] rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24 bg-gray-100"></div>
                <div className="p-2">
                  <p className="text-sm font-medium truncate">Spice Pack</p>
                  <p className="text-xs text-gray-500">₹199</p>
                </div>
              </div>
              <div className="min-w-[150px] w-[150px] rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24 bg-gray-100"></div>
                <div className="p-2">
                  <p className="text-sm font-medium truncate">Handmade Soap</p>
                  <p className="text-xs text-gray-500">₹149</p>
                </div>
              </div>
            </div>
            <Button asChild variant="outline" size="sm" className="w-full mt-4">
              <Link to="/dashboard/store">
                Visit Store
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-indigo-500" />
              Bulk Buying Groups
            </CardTitle>
            <CardDescription>Join groups to get bulk discounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-indigo-50 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">Premium Kitchenware</p>
                  <p className="text-xs text-gray-500">23 members joined</p>
                </div>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">Smart Home Devices</p>
                  <p className="text-xs text-gray-500">47 members joined</p>
                </div>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Active</span>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full mt-2">
                <Link to="/dashboard/bulk-buying">
                  Browse All Groups
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
