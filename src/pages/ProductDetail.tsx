import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import QuantitySelector from "@/components/QuantitySelector";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

import businessCardsImg from "@/assets/product-business-cards.jpg";

const ProductDetail = () => {
  const { id } = useParams();
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
    rating: 4.8,
    reviews: 127,
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
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Product Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Images */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                {product.category}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-4xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <Card className="p-6 mb-6">
                <h3 className="font-bold mb-4">Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity(q => q + 1)}
                  onDecrease={() => quantity > 1 && setQuantity(q => q - 1)}
                />
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="w-5 h-5 mr-2" />
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
                  onView={() => {}}
                  onAddToCart={() => toast.success("Added to cart!")}
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
