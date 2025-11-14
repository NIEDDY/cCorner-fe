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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-4xl bg-background rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="inline-block self-start px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                  {product.category}
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                
                <p className="text-4xl font-bold text-primary mb-6">
                  ${product.price.toFixed(2)}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.fullDescription || product.description}
                </p>
                
                <div className="mt-auto space-y-3">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      onAddToCart(product.id);
                      onClose();
                    }}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
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
