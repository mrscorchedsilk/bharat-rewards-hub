
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
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
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems: NavItem[] = [
    { name: "Rewards", path: "/rewards" },
    { name: "Pricing", path: "/pricing" },
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

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-neon border-b border-primary/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <motion.div 
            className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-neon"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-background font-bold text-lg">BR</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse-glow opacity-70"></div>
          </motion.div>
          <motion.span 
            className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary glow-text"
            whileHover={{ scale: 1.05 }}
          >
            Bharat Rewards
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`font-medium text-base transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? "text-primary glow-text"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? "w-full shadow-neon" : ""
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-primary/10 border border-primary/20 shadow-neon">
                    <User className="h-5 w-5 text-primary" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 mt-2 animate-fade-in glass-card border-primary/20">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-sm text-primary">{user?.email}</p>
                    <p className="text-xs text-muted-foreground">Rewards Member</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-primary/20" />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer hover:bg-primary/10">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/cashback" className="cursor-pointer hover:bg-primary/10">Cashback Offers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/giveaways" className="cursor-pointer hover:bg-primary/10">Giveaways</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/20" />
                <DropdownMenuItem 
                  onClick={logout}
                  className="text-red-400 focus:text-red-400 cursor-pointer hover:bg-red-500/10"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleSignInClick}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background shadow-neon glow-button transition-all duration-300"
              >
                Sign In
              </Button>
            </motion.div>
          )}
        </div>

        <div className="md:hidden flex items-center space-x-2">
          {isAuthenticated && (
            <Link to="/dashboard" className="mr-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-primary/10 border border-primary/20">
                  <User className="h-4 w-4 text-primary" />
                </Button>
              </motion.div>
            </Link>
          )}
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </motion.div>
        </div>
      </nav>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full glass-card backdrop-blur-lg shadow-neon border-b border-primary/20 py-4 px-4 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 text-base transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-medium glow-text"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="block py-2 text-base text-primary font-medium glow-text"
            >
              Dashboard
            </Link>
          )}
          
          {!isAuthenticated && (
            <Button 
              onClick={handleSignInClick}
              className="w-full mt-4 bg-gradient-to-r from-primary to-secondary text-background glow-button"
            >
              Sign In
            </Button>
          )}
          
          {isAuthenticated && (
            <Button 
              onClick={logout}
              variant="outline" 
              className="w-full mt-4 border-red-400/50 text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button>
          )}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
