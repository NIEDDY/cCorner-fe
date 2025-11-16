import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuantitySelector from "@/components/QuantitySelector";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

import businessCardsImg from "@/assets/product-business-cards.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: "1",
    title: "Premium Business Cards",
    price: 29.99,
    images: [businessCardsImg, businessCardsImg, businessCardsImg],
    description: "Professional business cards with premium finish",
    category: "Printing Materials",
    fullDescription: "High-quality premium business cards printed on 350gsm cardstock with various finishing options including matte, gloss, and soft-touch lamination. Perfect for making a lasting impression on clients and partners.",
    specifications: [
      { label: "Material", value: "350gsm Cardstock" },
      { label: "Size", value: "3.5\" x 2\" (Standard)" },
      { label: "Finish Options", value: "Matte, Gloss, Soft-Touch" },
      { label: "Print Quality", value: "Full Color CMYK" },
      { label: "Turnaround", value: "3-5 Business Days" },
    ],
  };

  const relatedProducts = [
    {
      id: "2",
      title: "Marketing Flyers",
      price: 19.99,
      image: businessCardsImg,
      description: "Eye-catching promotional flyers",
      category: "Printing Materials",
    },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category.toLowerCase().replace(/\s+/g, '-'),
      });
    }
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const handleViewProduct = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleAddRelatedToCart = (productId: string) => {
    const relatedProduct = relatedProducts.find(p => p.id === productId);
    if (relatedProduct) {
      addToCart({
        id: relatedProduct.id,
        title: relatedProduct.title,
        price: relatedProduct.price,
        image: relatedProduct.image,
        category: relatedProduct.category.toLowerCase().replace(/\s+/g, '-'),
      });
      toast.success("Added to cart!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-20">
            {/* Images */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-muted mb-3 sm:mb-4"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="px-2 sm:px-0">
              <div className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-accent/20 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {product.category}
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">{product.title}</h1>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <Card className="p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Specifications</h3>
                <div className="space-y-2 sm:space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between text-sm sm:text-base">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity(q => q + 1)}
                  onDecrease={() => quantity > 1 && setQuantity(q => q - 1)}
                />
                <Button size="lg" className="flex-1 text-sm sm:text-base" onClick={handleAddToCart}>
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <Button variant="outline" size="lg" className="flex-1 text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1 text-sm sm:text-base">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onView={handleViewProduct}
                  onAddToCart={handleAddRelatedToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
