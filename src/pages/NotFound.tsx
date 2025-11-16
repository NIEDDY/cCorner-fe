import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home, Search, ShoppingBag, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 sm:mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-primary mb-4">
                404
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Page Not Found
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link to="/">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/products">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Browse Products
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              <Link to="/" className="group">
                <div className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm sm:text-base mb-1">Home</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Return to homepage</p>
                </div>
              </Link>
              
              <Link to="/products" className="group">
                <div className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                  <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm sm:text-base mb-1">Products</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Browse our catalog</p>
                </div>
              </Link>
              
              <Link to="/contact" className="group">
                <div className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm sm:text-base mb-1">Contact</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Get help</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
