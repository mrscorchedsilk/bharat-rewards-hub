
import { useState, useEffect } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { 
  Gift, 
  ShoppingBag, 
  Percent, 
  Users, 
  Menu,
  X,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Home,
  History,
  UserCog,
  LogOut,
  Award,
  Coins,
  Trophy,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
        setIsCollapsed(true);
      } else {
        setSidebarOpen(true);
        setIsCollapsed(false);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div 
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary shadow-neon"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }

  const menuItems = [
    {
      title: "Home",
      icon: <Home className="w-5 h-5" />,
      path: "/dashboard"
    },
    {
      title: "Cashback",
      icon: <Percent className="w-5 h-5" />,
      path: "/dashboard/cashback"
    },
    {
      title: "Bharat Essentials Store",
      icon: <ShoppingBag className="w-5 h-5" />,
      path: "/dashboard/store"
    },
    {
      title: "Gift Cards",
      icon: <Gift className="w-5 h-5" />,
      path: "/dashboard/gift-cards"
    },
    {
      title: "Bulk Buying Groups",
      icon: <Users className="w-5 h-5" />,
      path: "/dashboard/bulk-buying"
    },
    {
      title: "Bharat Giveaways",
      icon: <Gift className="w-5 h-5" />,
      path: "/dashboard/giveaways"
    }
  ];

  // Get the current active menu item for mobile tabs
  const getCurrentTabValue = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "home";
    if (path.includes("giveaways")) return "giveaways";
    if (path.includes("cashback")) return "cashback";
    if (path.includes("store")) return "store";
    if (path.includes("gift-cards")) return "gift-cards";
    if (path.includes("bulk-buying")) return "bulk-buying";
    return "home";
  };

  // Diamond component variants
  const diamondVariants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 45,
      opacity: 0.6,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 225,
      opacity: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingDiamondVariants = {
    float: {
      y: [-10, 10, -10],
      rotate: [45, 90, 45],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background decorative diamonds */}
      <motion.div 
        className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-br from-primary to-secondary opacity-20"
        variants={floatingDiamondVariants}
        animate="float"
        style={{ transform: "rotate(45deg)" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-br from-secondary to-accent opacity-30"
        variants={floatingDiamondVariants}
        animate="float"
        style={{ transform: "rotate(45deg)" }}
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-8 h-8 bg-gradient-to-br from-accent to-primary opacity-15"
        variants={floatingDiamondVariants}
        animate="float"
        style={{ transform: "rotate(45deg)" }}
        transition={{ delay: 2 }}
      />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <motion.aside 
          className={`fixed lg:relative z-10 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out glass-card border-primary/20
          ${isCollapsed ? "w-20" : "w-64 lg:w-72"} h-screen overflow-y-auto flex flex-col border-r`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 flex justify-between items-center">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/dashboard" className="flex items-center space-x-2">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-neon"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-background font-bold text-lg">BR</span>
                  </motion.div>
                  <motion.span 
                    className="font-bold text-xl glow-text"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Bharat Rewards
                    </span>
                  </motion.span>
                </Link>
              </motion.div>
            )}
            {!isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-muted-foreground hover:text-primary neon-border"
              >
                {isCollapsed ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
              </Button>
            )}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
          
          <Separator className="border-primary/20" />
          
          <nav className="flex-1 py-4 pr-2">
            <ul className="space-y-2 px-2">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.div
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group relative ${
                        location.pathname === item.path ? "bg-primary/10 text-primary font-medium shadow-neon" : ""
                      }`}
                    >
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute left-1 top-1/2 w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"
                          layoutId="activeIndicator"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <span className={`${isCollapsed ? "mx-auto" : "mr-3"}`}>
                        {item.icon}
                      </span>
                      {!isCollapsed && <span>{item.title}</span>}
                      {!isCollapsed && <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Rewards Summary Section */}
          <motion.div 
            className={`px-4 py-3 ${isCollapsed ? 'items-center' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Separator className="mb-3 border-primary/20" />
            
            {!isCollapsed ? (
              <>
                <motion.h3 
                  className="text-sm font-semibold mb-3 glow-text"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Your Rewards Summary
                  </span>
                </motion.h3>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <motion.div 
                    className="glass-card p-2 rounded-lg neon-border"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-primary mr-2" />
                      <div>
                        <p className="text-xs text-muted-foreground">Total Cashback</p>
                        <p className="text-sm font-bold text-primary">₹{user?.walletBalance.toFixed(2)}</p>
                      </div>
                      <motion.div
                        className="ml-auto w-3 h-3 bg-gradient-to-br from-primary to-secondary"
                        variants={diamondVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="glass-card p-2 rounded-lg neon-border"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <Coins className="h-4 w-4 text-gold-600 mr-2" />
                      <div>
                        <p className="text-xs text-muted-foreground">Reward Points</p>
                        <p className="text-sm font-bold text-gold-600">{user?.cashbackPoints} pts</p>
                      </div>
                      <motion.div
                        className="ml-auto w-3 h-3 bg-gradient-to-br from-gold-400 to-gold-600"
                        variants={diamondVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      />
                    </div>
                  </motion.div>
                  <motion.div 
                    className="glass-card p-2 rounded-lg neon-border"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-primary mr-2" />
                      <div>
                        <p className="text-xs text-muted-foreground">Giveaway Entries</p>
                        <p className="text-sm font-bold text-primary">3 active</p>
                      </div>
                      <motion.div
                        className="ml-auto w-3 h-3 bg-gradient-to-br from-secondary to-accent"
                        variants={diamondVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      />
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-4 mb-3">
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Award className="h-5 w-5 text-primary" />
                  <p className="text-xs font-semibold mt-1">₹{user?.walletBalance.toFixed(2)}</p>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Coins className="h-5 w-5 text-gold-600" />
                  <p className="text-xs font-semibold mt-1">{user?.cashbackPoints}</p>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Trophy className="h-5 w-5 text-primary" />
                  <p className="text-xs font-semibold mt-1">3</p>
                </motion.div>
              </div>
            )}
            
            <Separator className="mb-3 border-primary/20" />
          </motion.div>

          {/* User Profile Section */}
          <motion.div 
            className="mt-auto p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {!isCollapsed ? (
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-neon"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className="text-background font-medium">
                    {user?.email ? user.email.charAt(0).toUpperCase() : "U"}
                  </span>
                </motion.div>
                <div className="flex-1">
                  <p className="text-sm font-medium truncate">{user?.name || user?.email}</p>
                  <p className="text-xs text-muted-foreground">Rewards Member</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 neon-border">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 glass-card border-primary/20">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/profile" className="cursor-pointer">
                        <UserCog className="mr-2 h-4 w-4" />
                        <span>Profile Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/transactions" className="cursor-pointer">
                        <History className="mr-2 h-4 w-4" />
                        <span>Transaction History</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={logout}
                      className="text-red-500 focus:text-red-500 cursor-pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary shadow-neon">
                        <span className="text-background font-medium">
                          {user?.email ? user.email.charAt(0).toUpperCase() : "U"}
                        </span>
                      </Button>
                    </motion.div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 glass-card border-primary/20">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/profile" className="cursor-pointer">
                        <UserCog className="mr-2 h-4 w-4" />
                        <span>Profile Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/transactions" className="cursor-pointer">
                        <History className="mr-2 h-4 w-4" />
                        <span>Transaction History</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={logout}
                      className="text-red-500 focus:text-red-500 cursor-pointer"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </motion.div>
        </motion.aside>

        {/* Mobile menu toggle button */}
        {isMobile && !sidebarOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-10 glass-card neon-border"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </motion.div>
        )}

        {/* Mobile tabs */}
        {isMobile && (
          <motion.div 
            className="fixed bottom-0 left-0 right-0 z-20 glass-card border-t border-primary/20 py-1 px-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Tabs value={getCurrentTabValue()} className="w-full">
              <TabsList className="w-full glass-card">
                <TabsTrigger value="home" asChild className="flex-1">
                  <Link to="/dashboard" className="flex flex-col items-center py-1">
                    <Home className="h-5 w-5" />
                    <span className="text-xs mt-1">Home</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="cashback" asChild className="flex-1">
                  <Link to="/dashboard/cashback" className="flex flex-col items-center py-1">
                    <Percent className="h-5 w-5" />
                    <span className="text-xs mt-1">Cashback</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="store" asChild className="flex-1">
                  <Link to="/dashboard/store" className="flex flex-col items-center py-1">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="text-xs mt-1">Store</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="giveaways" asChild className="flex-1">
                  <Link to="/dashboard/giveaways" className="flex flex-col items-center py-1">
                    <Gift className="h-5 w-5" />
                    <span className="text-xs mt-1">Giveaways</span>
                  </Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        )}
        
        {/* Main content */}
        <motion.main 
          className={`flex-1 p-4 md:p-6 lg:p-8 ${isMobile && sidebarOpen ? "opacity-25" : "opacity-100"} transition-opacity
          ${isMobile ? "pb-20" : ""} overflow-y-auto h-screen relative`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Decorative diamonds in main content */}
          <motion.div 
            className="absolute top-10 right-10 w-4 h-4 bg-gradient-to-br from-primary to-secondary opacity-30"
            variants={floatingDiamondVariants}
            animate="float"
            style={{ transform: "rotate(45deg)" }}
            transition={{ delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-6 h-6 bg-gradient-to-br from-accent to-primary opacity-20"
            variants={floatingDiamondVariants}
            animate="float"
            style={{ transform: "rotate(45deg)" }}
            transition={{ delay: 1.5 }}
          />
          
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default Dashboard;
