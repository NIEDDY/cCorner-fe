import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const PrintingMaterials = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: "printing-1",
      title: "Premium Business Cards",
      price: 29.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "High-quality business cards, 100 pieces with premium finish",
    },
    {
      id: "printing-2",
      title: "Flyers & Brochures",
      price: 49.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Full color flyers, A4 size, 500 pieces",
    },
    {
      id: "printing-3",
      title: "Large Format Posters",
      price: 19.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Large format posters, various sizes available",
    },
    {
      id: "printing-4",
      title: "Vinyl Banners",
      price: 89.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Vinyl banners for indoor/outdoor use",
    },
    {
      id: "printing-5",
      title: "Professional Certificates",
      price: 39.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Professional certificates with embossed seals",
    },
    {
      id: "printing-6",
      title: "Books & Booklets",
      price: 99.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Custom printed books, perfect binding",
    },
    {
      id: "printing-7",
      title: "Event Invitations",
      price: 34.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Premium wedding and event invitations",
    },
    {
      id: "printing-8",
      title: "Custom Calendars",
      price: 24.99,
      image: "/api/placeholder/300/300",
      category: "printing-services",
      description: "Custom wall and desk calendars",
    },
  ];

  const handleViewProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id: string) => {
    const product = products.find(p => p.id === id);
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
            Printing Materials
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Professional printing services for all your business and personal needs. High-quality materials at competitive prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {products.map((product, index) => (
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
      </main>
      
      <Footer />
    </div>
  );
};

export default PrintingMaterials;
