import { motion } from "framer-motion";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  onView: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const ProductCard = ({ id, title, price, image, description, category, onView, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
        <div className="relative overflow-hidden aspect-[4/3] bg-muted">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          
          {/* Category Badge with yellow accent */}
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-primary text-primary-foreground px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg border border-accent/30">
            {category}
          </div>

          {/* Quick Actions - Show on hover */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm border border-accent/20 hover:border-accent"
              onClick={(e) => {
                e.stopPropagation();
                // Add to wishlist functionality
              }}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
            </Button>
          </div>

          {/* Quick View Button - Bottom overlay with yellow accent */}
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              className="w-full bg-white text-foreground hover:bg-accent hover:text-accent-foreground shadow-lg text-xs sm:text-sm font-semibold"
              onClick={(e) => {
                e.stopPropagation();
                onView(id);
              }}
            >
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Quick View
            </Button>
          </div>
        </div>
        
        <CardContent className="flex-1 p-3 sm:p-4 lg:p-5">
          <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1.5 sm:mb-2 line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
              ${price.toFixed(2)}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="p-3 sm:p-4 lg:p-5 pt-0 flex gap-1.5 sm:gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-xs sm:text-sm"
            onClick={() => onView(id)}
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            View
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all text-xs sm:text-sm font-semibold"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
