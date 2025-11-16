import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    fullDescription?: string;
  } | null;
  onAddToCart: (id: string) => void;
}

const ProductModal = ({ isOpen, onClose, product, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-2xl sm:max-w-3xl bg-background rounded-xl sm:rounded-2xl shadow-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative mx-2 sm:mx-4"
          >
            <button
              onClick={onClose}
              className="absolute right-2 top-2 sm:right-4 sm:top-4 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur hover:bg-muted transition-colors z-10"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
              <div className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="inline-block self-start px-2 py-0.5 sm:px-3 sm:py-1 bg-accent/20 text-accent rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4">
                  {product.category}
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">{product.title}</h2>
                
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                  ${product.price.toFixed(2)}
                </p>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {product.fullDescription || product.description}
                </p>
                
                <div className="mt-auto space-y-2 sm:space-y-3">
                  <Button
                    size="lg"
                    className="w-full text-sm sm:text-base"
                    onClick={() => {
                      onAddToCart(product.id);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-sm sm:text-base"
                    onClick={onClose}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
