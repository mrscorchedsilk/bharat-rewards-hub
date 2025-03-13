
import { useState, useEffect } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bharat-600"></div>
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside 
          className={`fixed lg:relative z-10 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out bg-white text-gray-800
          ${isCollapsed ? "w-20" : "w-64 lg:w-72"} h-screen overflow-y-auto flex flex-col border-r border-gray-200`}
        >
          <div className="p-4 flex justify-between items-center">
            {!isCollapsed && (
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#38b6ff] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BR</span>
                </div>
                <span className="font-bold text-xl text-[#38b6ff]">Bharat Rewards</span>
              </Link>
            )}
            {!isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-gray-500 hover:text-gray-700"
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
          
          <Separator />
          
          <nav className="flex-1 py-4 pr-2">
            <ul className="space-y-2 px-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors group ${
                      location.pathname === item.path ? "bg-gray-100 text-primary font-medium" : ""
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
        </aside>

        {/* Mobile sidebar toggle */}
        {isMobile && !sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed z-20 bottom-4 left-4 bg-[#38b6ff] text-white rounded-full p-3 shadow-lg transition-all hover:bg-[#38b6ff]/90"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}

        {/* Mobile tabs */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-200 py-1 px-2">
            <Tabs value={getCurrentTabValue()} className="w-full">
              <TabsList className="w-full bg-gray-50">
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
