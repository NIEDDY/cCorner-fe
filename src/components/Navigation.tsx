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
    { label: "Marketplace", href: "/marketplace" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      {/* Row 1: Utility Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <div className="flex gap-3 md:gap-6">
              <span className="flex items-center gap-1">
                creative@corner.com
              </span>
              <span className="hidden sm:inline">The Creative Professional's Source since 2024</span>
            </div>
            <div className="flex gap-3 md:gap-6">
              <Link to="/help-center" className="hover:text-accent transition-colors">Help</Link>
              <a href="#" className="hover:text-accent transition-colors">Track Order</a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Main Header */}
      <div className="bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground font-bold text-lg md:text-xl">CC</span>
              </div>
              <span className="text-xl md:text-2xl font-bold hidden sm:inline">Creative Corner</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:flex">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search for products, services..." 
                  className="pl-12 pr-4 h-12 rounded-full border-2 focus:border-accent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-accent/10">
                <User className="w-5 h-5" />
              </Button>
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="hover:bg-accent/10 relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Navigation Bar */}
      <nav className="hidden md:block bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.href}
                  className="block px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-all font-medium rounded-lg"
                >
                  {item.label}
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
            className="md:hidden bg-background border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link 
                      to={item.href}
                      className="block px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors rounded-lg font-medium"
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
