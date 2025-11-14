import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
            {category}
          </div>
        </div>
        <CardContent className="flex-1 p-3">
          <h3 className="font-semibold text-base mb-1 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-xs mb-2 line-clamp-2">{description}</p>
          <p className="text-xl font-bold text-primary">${price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="p-3 pt-0 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={() => onView(id)}>
            <Eye className="w-3 h-3 mr-1" />
            View
          </Button>
          <Button variant="default" size="sm" className="flex-1" onClick={() => onAddToCart(id)}>
            <ShoppingCart className="w-3 h-3 mr-1" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
