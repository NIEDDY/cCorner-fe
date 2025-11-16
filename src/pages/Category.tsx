import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')
    : 'Category';

  // Mock products for category - in real app, fetch from API
  const categoryProducts = [
    {
      id: `${category}-1`,
      title: `Premium ${categoryTitle} Product`,
      price: 99.99,
      image: "/api/placeholder/300/300",
      category: category || "category",
      description: `High-quality ${categoryTitle.toLowerCase()} product with premium features`,
    },
    {
      id: `${category}-2`,
      title: `Professional ${categoryTitle} Solution`,
      price: 149.99,
      image: "/api/placeholder/300/300",
      category: category || "category",
      description: `Professional-grade ${categoryTitle.toLowerCase()} solution for your needs`,
    },
    {
      id: `${category}-3`,
      title: `Standard ${categoryTitle} Package`,
      price: 79.99,
      image: "/api/placeholder/300/300",
      category: category || "category",
      description: `Standard ${categoryTitle.toLowerCase()} package perfect for everyday use`,
    },
  ];

  const handleViewProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id: string) => {
    const product = categoryProducts.find(p => p.id === id);
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            {categoryTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Browse our collection of professional {categoryTitle.toLowerCase()} products and services.
          </p>
        </div>
        
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard 
                  {...product}
                  onView={handleViewProduct}
                  onAddToCart={handleAddToCart}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <p className="text-muted-foreground text-base sm:text-lg">No products found in this category.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
