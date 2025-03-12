
import { useState, useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import WalletCard from "@/components/WalletCard";
import { 
  Gift, 
  ShoppingBag, 
  Percent, 
  Users, 
  Trophy, 
  Clock,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bharat-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
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
      icon: <Trophy className="w-5 h-5 mr-3" />,
      path: "/dashboard/giveaways/current"
    },
    {
      title: "Past Giveaways",
      icon: <Clock className="w-5 h-5 mr-3" />,
      path: "/dashboard/giveaways/past"
    },
    {
      title: "Cashback",
      icon: <Percent className="w-5 h-5 mr-3" />,
      path: "/dashboard/cashback"
    },
    {
      title: "Bharat Essentials Store",
      icon: <ShoppingBag className="w-5 h-5 mr-3" />,
      path: "/dashboard/store"
    },
    {
      title: "Gift Cards",
      icon: <Gift className="w-5 h-5 mr-3" />,
      path: "/dashboard/gift-cards"
    },
    {
      title: "Bulk Buying Groups",
      icon: <Users className="w-5 h-5 mr-3" />,
      path: "/dashboard/bulk-buying"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside 
          className={`fixed lg:relative z-10 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 lg:w-80 h-[calc(100vh-4rem)] overflow-y-auto flex flex-col`}
        >
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-bharat-600">Dashboard</h2>
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
            <ul className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center py-3 px-4 rounded-lg text-gray-700 hover:bg-bharat-50 hover:text-bharat-600 transition-colors group"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4">
            <WalletCard />
          </div>
        </aside>

        {/* Mobile sidebar toggle */}
        {isMobile && !sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed z-20 bottom-4 left-4 bg-bharat-600 text-white rounded-full p-3 shadow-lg transition-all hover:bg-bharat-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        )}
        
        {/* Main content */}
        <main className={`flex-1 p-4 md:p-6 lg:p-8 ${isMobile && sidebarOpen ? "opacity-25" : "opacity-100"} transition-opacity`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
