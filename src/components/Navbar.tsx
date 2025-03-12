
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems: NavItem[] = [
    { name: "Rewards", path: "/rewards" },
    { name: "Pricing", path: "/#pricing" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-bharat-600 to-bharat-400 flex items-center justify-center shadow-button">
            <span className="text-white font-bold text-lg">BR</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-bharat-600 to-bharat-400 animate-pulse-slow opacity-70"></div>
          </div>
          <span className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-bharat-700 to-bharat-500">
            Bharat Rewards
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium text-base transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-bharat-600"
                    : "text-foreground hover:text-bharat-600"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-bharat-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? "w-full" : ""
                }`} />
              </Link>
            ))}
          </div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-bharat-50">
                  <User className="h-5 w-5 text-bharat-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 animate-fade-in">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-sm">{user?.email}</p>
                    <p className="text-xs text-muted-foreground">Rewards Member</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/cashback" className="cursor-pointer">Cashback Offers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/giveaways" className="cursor-pointer">Giveaways</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={logout}
                  className="text-red-500 focus:text-red-500 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              asChild
              className="bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-white shadow-button transition-all duration-300 hover:shadow-lg"
            >
              <Link to="/dashboard">Login</Link>
            </Button>
          )}
        </div>

        <div className="md:hidden flex items-center space-x-2">
          {isAuthenticated && (
            <Link to="/dashboard" className="mr-2">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-bharat-50">
                <User className="h-4 w-4 text-bharat-600" />
              </Button>
            </Link>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg shadow-md py-4 px-4 space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 text-base ${
                location.pathname === item.path
                  ? "text-bharat-600 font-medium"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="block py-2 text-base text-bharat-600 font-medium"
            >
              Dashboard
            </Link>
          )}
          
          {!isAuthenticated && (
            <Button 
              asChild
              className="w-full mt-4 bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-white"
            >
              <Link to="/dashboard">Login</Link>
            </Button>
          )}
          
          {isAuthenticated && (
            <Button 
              onClick={logout}
              variant="outline" 
              className="w-full mt-4 border-red-200 text-red-500 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
