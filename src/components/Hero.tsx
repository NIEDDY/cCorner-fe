import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-creative.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(33, 48, 69, 0.92) 0%, rgba(33, 48, 69, 0.75) 100%), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-accent/20 backdrop-blur-md text-accent-foreground rounded-full text-sm font-semibold border border-accent/30"
          >
            {/* <Sparkles className="w-4 h-4" />
            New Arrivals Just Landed
          </motion.div> */}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground">
            Creative Corner
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-primary-foreground/90">
            Your Creative Vision, Our Mission
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
            From premium printing to professional equipment - everything creative professionals need in one place
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="xl" className="group">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl" className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-background/20">
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
