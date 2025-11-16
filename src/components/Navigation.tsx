import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border/50 shadow-sm">
      {/* Row 1: Utility Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-2.5">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <span className="flex items-center gap-1.5">
                <span className="hidden sm:inline">📧</span>
                <span className="text-xs sm:text-sm">info@creativecorner.com</span>
              </span>
              <span className="hidden md:inline text-xs sm:text-sm">Your Trusted Partner for Printing & Office Supplies</span>
            </div>
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              <Link to="/help-center" className="hover:text-accent transition-colors font-medium text-xs sm:text-sm">Help</Link>
              <Link to="/shipping" className="hover:text-accent transition-colors font-medium text-xs sm:text-sm">Track Order</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Main Header */}
      <div className="bg-white">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl md:text-2xl">CC</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Creative Corner
                </span>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Printing & Office Supplies</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl hidden md:flex">
              <div className="relative w-full">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
                <Input 
                  placeholder="Search for products, services..." 
                  className="pl-10 sm:pl-12 pr-3 sm:pr-4 h-10 sm:h-12 rounded-full border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors h-9 w-9 sm:h-10 sm:w-10" asChild>
                <Link to="/contact">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-colors h-9 w-9 sm:h-10 sm:w-10 relative">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-accent text-accent-foreground text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden h-9 w-9 sm:h-10 sm:w-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3 sm:mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 rounded-full border-2 focus:border-primary text-sm h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Navigation Bar */}
      <nav className="hidden md:block bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 border-t border-border/50">
        <div className="container mx-auto px-3 sm:px-4">
          <ul className="flex justify-center gap-0.5 sm:gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.href}
                  className="block px-4 sm:px-6 py-2.5 sm:py-3.5 hover:bg-primary hover:text-primary-foreground transition-all font-medium rounded-lg text-xs sm:text-sm relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.href}
                      className="block px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg font-medium text-sm sm:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
