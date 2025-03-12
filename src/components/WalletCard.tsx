
import { useAuth } from "@/context/AuthContext";
import { IndianRupee, ArrowUpCircle, Gift } from "lucide-react";
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
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Your Wallet</h3>
            <p className="text-xs text-muted-foreground">Manage rewards</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-bharat-100 dark:bg-bharat-900/50 flex items-center justify-center">
            <IndianRupee className="h-5 w-5 text-bharat-600 dark:text-bharat-400" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-bharat-600 to-bharat-800 dark:from-bharat-700 dark:to-bharat-900 rounded-lg p-4 text-white mb-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-xs font-medium text-bharat-100 dark:text-bharat-200">Available Balance</p>
          </div>
          <div className="flex items-baseline mb-2">
            <span className="text-xl font-bold">₹{user?.walletBalance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <Button 
              size="sm" 
              onClick={handleWithdraw}
              className="bg-white/90 hover:bg-white text-bharat-700 text-xs h-8 px-2 dark:bg-white/80 dark:text-bharat-800"
            >
              <ArrowUpCircle className="mr-1 h-3 w-3" />
              Withdraw
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-medium">Cashback Points</p>
            <p className="text-xs font-bold text-bharat-600 dark:text-bharat-400">{user?.cashbackPoints} points</p>
          </div>
          <div className="mb-1">
            <Progress value={user?.cashbackPoints ?? 0} max={100} className="h-2" />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <p>0</p>
            <p>100 pts for ₹100</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center justify-center text-xs"
          onClick={() => toast.info("Gift card redemption coming soon")}
        >
          <Gift className="mr-1 h-3 w-3 text-gold-500" />
          Redeem Gift Cards
        </Button>
      </div>
    </div>
  );
};

export default WalletCard;
