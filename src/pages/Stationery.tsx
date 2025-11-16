import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const Stationery = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: "stationery-1",
      title: "Premium Notebooks",
      price: 12.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "High-quality notebooks, lined/plain pages",
    },
    {
      id: "stationery-2",
      title: "Professional Pen Sets",
      price: 24.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Professional ballpoint and gel pen sets",
    },
    {
      id: "stationery-3",
      title: "Marker Sets",
      price: 19.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Permanent and whiteboard markers",
    },
    {
      id: "stationery-4",
      title: "Paper Reams",
      price: 8.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "A4 copy paper, 500 sheets per ream",
    },
    {
      id: "stationery-5",
      title: "File Folders",
      price: 14.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Durable file folders and organizers",
    },
    {
      id: "stationery-6",
      title: "Envelopes",
      price: 6.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Various sizes for letters and documents",
    },
    {
      id: "stationery-7",
      title: "Staplers & Punches",
      price: 15.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Heavy-duty office staplers and hole punches",
    },
    {
      id: "stationery-8",
      title: "Sticky Notes",
      price: 4.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Colorful sticky notes in multiple sizes",
    },
    {
      id: "stationery-9",
      title: "Desk Organizers",
      price: 29.99,
      image: "/api/placeholder/300/300",
      category: "stationery",
      description: "Keep your workspace tidy and organized",
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
            Stationery Supplies
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Everything you need for your office or home workspace. Quality stationery products from trusted brands.
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

export default Stationery;
