import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/85">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Elements with yellow accents */}
      <div className="absolute top-20 right-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-accent/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-md rounded-full mb-4 sm:mb-6 border border-white/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Your One-Stop Shop for Printing & Office Supplies</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg">
            Creative Corner
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-white/95 drop-shadow-md">
            Printing Services, Stationery & More
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-white/90 max-w-2xl sm:max-w-3xl mx-auto px-3 sm:px-4 leading-relaxed">
            Professional printing services, premium stationery, office supplies, printers, cameras, and electronics. Everything you need in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3 sm:px-4">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="group w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-accent/30 hover:border-accent">
                Shop Products
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md text-white border-white/40 hover:bg-white/20 w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Our Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
