
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Rewards", path: "/rewards" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "FAQs", path: "/faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen && isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('nav')) setIsOpen(false);
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen, isMobile]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-primary/10 py-2 sm:py-3" 
            : "bg-transparent py-3 sm:py-5"
        }`}
      >
        <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <motion.div 
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-neon"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-background font-bold text-sm sm:text-lg">BR</span>
            </motion.div>
            <span className="font-bold text-lg sm:text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary glow-text">
              Bharat Rewards
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <div className="flex space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium text-sm lg:text-base transition-all duration-200 relative group ${
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
              ))}
            </div>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full h-9 w-9 lg:h-10 lg:w-10 bg-primary/10 border border-primary/20 shadow-neon hover:bg-primary/20"
                  >
                    <User className="h-4 w-4 lg:h-5 lg:w-5 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2 glass-card border-primary/20 backdrop-blur-xl">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium text-sm text-primary truncate">{user?.email}</p>
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
              <Button 
                onClick={() => navigate("/login")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background shadow-neon text-sm lg:text-base px-4 lg:px-6"
              >
                Sign In
              </Button>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {isAuthenticated && (
              <Link to="/dashboard">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full h-8 w-8 bg-primary/10 border border-primary/20 hover:bg-primary/20"
                >
                  <User className="h-4 w-4 text-primary" />
                </Button>
              </Link>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary hover:bg-primary/10 h-8 w-8"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 w-full glass-card backdrop-blur-xl shadow-lg border-b border-primary/20"
            >
              <div className="py-4 px-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-3 px-2 text-base transition-all duration-200 rounded-lg ${
                      location.pathname === item.path
                        ? "text-primary font-medium glow-text bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {isAuthenticated && (
                  <Link
                    to="/dashboard"
                    className="block py-3 px-2 text-base text-primary font-medium glow-text bg-primary/5 rounded-lg"
                  >
                    Dashboard
                  </Link>
                )}
                
                {!isAuthenticated && (
                  <Button 
                    onClick={() => navigate("/login")}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-background glow-button h-11"
                  >
                    Sign In
                  </Button>
                )}
                
                {isAuthenticated && (
                  <div className="pt-2 border-t border-primary/20">
                    <Button 
                      onClick={logout}
                      variant="outline" 
                      className="w-full mt-2 border-red-400/50 text-red-400 hover:bg-red-500/10 h-11"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
