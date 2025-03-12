
import { useAuth } from "@/context/AuthContext";
import { IndianRupee, ArrowUpCircle, Gift, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const WalletCard = () => {
  const { user } = useAuth();

  const handleWithdraw = () => {
    toast.info("Withdrawal feature will be available in the next update");
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Your Wallet</h3>
            <p className="text-sm text-gray-500">Manage your rewards and cashback</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-bharat-100 flex items-center justify-center">
            <IndianRupee className="h-6 w-6 text-bharat-600" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-bharat-600 to-bharat-800 rounded-xl p-5 text-white mb-6">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-bharat-100">Available Balance</p>
            <p className="text-xs bg-white/20 px-2 py-1 rounded-full">Withdrawable</p>
          </div>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">₹{user?.walletBalance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <Button 
              size="sm" 
              onClick={handleWithdraw}
              className="bg-white/90 hover:bg-white text-bharat-700 text-sm"
            >
              <ArrowUpCircle className="mr-1 h-4 w-4" />
              Withdraw to UPI
            </Button>
            <p className="text-xs text-bharat-100 flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              Updated just now
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium">Cashback Points</p>
            <p className="text-sm font-bold text-bharat-600">{user?.cashbackPoints} points</p>
          </div>
          <div className="mb-1">
            <Progress value={user?.cashbackPoints ?? 0} max={100} className="h-2" />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <p>0 points</p>
            <p>100 points for ₹100 cashback</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold mb-2">Quick Actions</h4>
          
          <button className="w-full flex items-center justify-between p-3 bg-bharat-50 hover:bg-bharat-100 rounded-lg transition-colors">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-bharat-100 flex items-center justify-center mr-3">
                <ArrowUpCircle className="h-4 w-4 text-bharat-600" />
              </div>
              <span className="text-sm font-medium">Withdraw Funds</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
          
          <button className="w-full flex items-center justify-between p-3 bg-gold-50 hover:bg-gold-100 rounded-lg transition-colors">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center mr-3">
                <Gift className="h-4 w-4 text-gold-600" />
              </div>
              <span className="text-sm font-medium">Redeem Gift Cards</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
