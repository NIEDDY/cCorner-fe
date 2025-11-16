import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const OfficeSupplies = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: "office-1",
      title: "Laser Printers",
      price: 299.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "High-speed laser printers for office use",
    },
    {
      id: "office-2",
      title: "Ink Cartridges",
      price: 39.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Compatible ink cartridges for all major brands",
    },
    {
      id: "office-3",
      title: "Toner Cartridges",
      price: 79.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "High-yield toner for laser printers",
    },
    {
      id: "office-4",
      title: "Printing Machines",
      price: 1999.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Professional multifunction printing machines",
    },
    {
      id: "office-5",
      title: "Laminators",
      price: 149.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Hot and cold laminating machines",
    },
    {
      id: "office-6",
      title: "Paper Shredders",
      price: 89.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Cross-cut paper shredders for security",
    },
    {
      id: "office-7",
      title: "Custom Stamps",
      price: 24.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Personalized rubber stamps for office use",
    },
    {
      id: "office-8",
      title: "Label Makers",
      price: 34.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Electronic label makers with tape cartridges",
    },
    {
      id: "office-9",
      title: "Binding Machines",
      price: 119.99,
      image: "/api/placeholder/300/300",
      category: "office-supplies",
      description: "Comb and spiral binding machines",
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
            Office Supplies
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Complete office equipment solutions. From printers to laminators, we have everything your office needs.
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

export default OfficeSupplies;
