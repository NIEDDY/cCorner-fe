import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import CategorySidebar from "@/components/CategorySidebar";
import SectionHeader from "@/components/SectionHeader";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";

import businessCardsImg from "@/assets/product-business-cards.jpg";
import flyersImg from "@/assets/product-flyers.jpg";
import bannersImg from "@/assets/product-banners.jpg";
import notebooksImg from "@/assets/product-notebooks.jpg";
import printerImg from "@/assets/product-printer.jpg";
import schoolSuppliesImg from "@/assets/product-school-supplies.jpg";

const Marketplace = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All Products",
    "Printing Materials",
    "Stationery",
    "Office Supplies",
    "School Materials",
    "Photography",
    "Videography",
  ];

  const products = [
    {
      id: "1",
      title: "Premium Business Cards",
      price: 29.99,
      image: businessCardsImg,
      description: "Professional business cards with premium finish",
      category: "Printing Materials",
      fullDescription: "High-quality premium business cards printed on 350gsm cardstock with various finishing options including matte, gloss, and soft-touch lamination. Perfect for making a lasting impression.",
    },
    {
      id: "2",
      title: "Marketing Flyers",
      price: 19.99,
      image: flyersImg,
      description: "Eye-catching promotional flyers",
      category: "Printing Materials",
      fullDescription: "Professional marketing flyers available in various sizes and paper stocks. Full-color printing with quick turnaround times. Ideal for events, promotions, and announcements.",
    },
    {
      id: "3",
      title: "Custom Banners",
      price: 89.99,
      image: bannersImg,
      description: "Large format custom printed banners",
      category: "Printing Materials",
      fullDescription: "Durable vinyl banners for indoor and outdoor use. Available in multiple sizes with grommets for easy hanging. Weather-resistant and vibrant colors that last.",
    },
    {
      id: "4",
      title: "Designer Notebooks",
      price: 12.99,
      image: notebooksImg,
      description: "Premium quality notebooks for creatives",
      category: "Stationery",
      fullDescription: "Beautifully designed notebooks with high-quality paper suitable for all types of writing instruments. Features include lay-flat binding, perforated pages, and durable covers.",
    },
    {
      id: "5",
      title: "Professional Printer",
      price: 399.99,
      image: printerImg,
      description: "High-speed office printer with scanner",
      category: "Office Supplies",
      fullDescription: "All-in-one professional printer with printing, scanning, and copying capabilities. High-speed performance with excellent print quality. Network connectivity and mobile printing supported.",
    },
    {
      id: "6",
      title: "School Supply Kit",
      price: 34.99,
      image: schoolSuppliesImg,
      description: "Complete stationery set for students",
      category: "School Materials",
      fullDescription: "Comprehensive school supply kit including pens, pencils, erasers, rulers, notebooks, and more. Everything a student needs for a successful academic year in one convenient package.",
    },
  ];

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleViewProduct = (id: string) => {
    const product = products.find(p => p.id === id);
    setSelectedProduct(product);
    setIsModalOpen(true);
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Marketplace" 
              subtitle="Discover our full range of creative products and supplies"
              centered
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <CategorySidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </aside>

            {/* Main Content */}
            <div>
              {/* Mobile Category Selector & Sort */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="lg:hidden">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="sm:w-[200px] sm:ml-auto">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProductCard
                      {...product}
                      onView={handleViewProduct}
                      onAddToCart={handleAddToCart}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </div>
  );
};

export default Marketplace;
