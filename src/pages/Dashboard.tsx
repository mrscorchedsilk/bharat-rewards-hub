
import { useState, useEffect } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import WalletCard from "@/components/WalletCard";
import ThemeToggle from "@/components/ThemeToggle";
import { 
  Gift, 
  ShoppingBag, 
  Percent, 
  Users, 
  Trophy, 
  Clock,
  Menu,
  X,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bharat-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 md:px-6 pt-8">
            <div className="max-w-md mx-auto mt-12">
              <AuthModal />
            </div>
          </div>
        </main>
      </div>
    );
  }

  const menuItems = [
    {
      title: "Current Giveaways",
      icon: <Trophy className="w-5 h-5" />,
      path: "/dashboard/giveaways/current"
    },
    {
      title: "Past Giveaways",
      icon: <Clock className="w-5 h-5" />,
      path: "/dashboard/giveaways/past"
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
    }
  ];

  // Get the current active menu item for mobile tabs
  const getCurrentTabValue = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "home";
    if (path.includes("giveaways/current")) return "giveaways";
    if (path.includes("cashback")) return "cashback";
    if (path.includes("store")) return "store";
    if (path.includes("gift-cards")) return "gift-cards";
    if (path.includes("bulk-buying")) return "bulk-buying";
    return "home";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside 
          className={`fixed lg:relative z-10 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out bg-sidebar dark:bg-sidebar-background text-sidebar-foreground 
          ${isCollapsed ? "w-20" : "w-64 lg:w-72"} h-[calc(100vh-4rem)] overflow-y-auto flex flex-col border-r border-border`}
        >
          <div className="p-4 flex justify-between items-center">
            {!isCollapsed && (
              <h2 className="text-xl font-bold text-bharat-600 dark:text-bharat-400">Dashboard</h2>
            )}
            <div className="flex items-center">
              {!isMobile && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="text-muted-foreground hover:text-foreground"
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
          </div>
          
          <Separator />
          
          <nav className="flex-1 py-4 pr-2">
            <div className="mb-2 px-2">
              <Link
                to="/dashboard"
                className={`flex items-center py-3 px-4 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group ${
                  location.pathname === "/dashboard" ? "bg-sidebar-accent text-primary font-medium" : ""
                }`}
              >
                <Home className={`${isCollapsed ? "w-6 h-6 mx-auto" : "w-5 h-5 mr-3"}`} />
                {!isCollapsed && <span>Home</span>}
                {!isCollapsed && <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </Link>
            </div>
            
            <ul className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group ${
                      location.pathname === item.path ? "bg-sidebar-accent text-primary font-medium" : ""
                    }`}
                  >
                    <span className={`${isCollapsed ? "mx-auto" : "mr-3"}`}>
                      {item.icon}
                    </span>
                    {!isCollapsed && <span>{item.title}</span>}
                    {!isCollapsed && <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={`p-4 ${isCollapsed ? 'hidden' : 'block'}`}>
            <WalletCard />
          </div>
          
          <div className="p-4 flex justify-center">
            <ThemeToggle />
          </div>
        </aside>

        {/* Mobile sidebar toggle */}
        {isMobile && !sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed z-20 bottom-4 left-4 bg-bharat-600 dark:bg-bharat-500 text-white rounded-full p-3 shadow-lg transition-all hover:bg-bharat-700 dark:hover:bg-bharat-600"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}

        {/* Mobile tabs */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 z-20 bg-background border-t border-border py-1 px-2">
            <Tabs value={getCurrentTabValue()} className="w-full">
              <TabsList className="w-full bg-muted">
                <TabsTrigger value="home" asChild className="flex-1">
                  <Link to="/dashboard" className="flex flex-col items-center py-1">
                    <Home className="h-5 w-5" />
                    <span className="text-xs mt-1">Home</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="giveaways" asChild className="flex-1">
                  <Link to="/dashboard/giveaways/current" className="flex flex-col items-center py-1">
                    <Trophy className="h-5 w-5" />
                    <span className="text-xs mt-1">Giveaways</span>
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
              </TabsList>
            </Tabs>
          </div>
        )}
        
        {/* Main content */}
        <main className={`flex-1 p-4 md:p-6 lg:p-8 ${isMobile && sidebarOpen ? "opacity-25" : "opacity-100"} transition-opacity
          ${isMobile ? "pb-20" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
