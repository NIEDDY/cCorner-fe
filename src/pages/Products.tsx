import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock products data - in a real app, this would come from an API
const mockProducts = [
  {
    id: "1",
    title: "Premium Business Cards",
    price: 29.99,
    image: "/api/placeholder/300/300",
    category: "printing-services",
    description: "High-quality business cards with premium finish",
  },
  {
    id: "2",
    title: "Professional Notebook Set",
    price: 24.99,
    image: "/api/placeholder/300/300",
    category: "stationery",
    description: "Set of 3 premium notebooks",
  },
  {
    id: "3",
    title: "Office Desk Organizer",
    price: 39.99,
    image: "/api/placeholder/300/300",
    category: "office-supplies",
    description: "Multi-compartment desk organizer",
  },
  {
    id: "4",
    title: "Canon Professional Printer",
    price: 299.99,
    image: "/api/placeholder/300/300",
    category: "printers",
    description: "High-speed professional printer",
  },
  {
    id: "5",
    title: "Digital Camera Bundle",
    price: 599.99,
    image: "/api/placeholder/300/300",
    category: "cameras",
    description: "Professional camera with accessories",
  },
  {
    id: "6",
    title: "128GB Memory Card",
    price: 34.99,
    image: "/api/placeholder/300/300",
    category: "electronics",
    description: "High-speed SD card for cameras",
  },
  {
    id: "7",
    title: "Custom Flyer Printing",
    price: 19.99,
    image: "/api/placeholder/300/300",
    category: "printing-services",
    description: "Professional flyer printing service",
  },
  {
    id: "8",
    title: "Premium Pen Set",
    price: 14.99,
    image: "/api/placeholder/300/300",
    category: "stationery",
    description: "Set of 5 premium pens",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "printing-services", label: "Printing Services" },
    { value: "stationery", label: "Stationery" },
    { value: "office-supplies", label: "Office Supplies" },
    { value: "printers", label: "Printers" },
    { value: "cameras", label: "Cameras" },
    { value: "electronics", label: "Electronics" },
  ];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id: string) => {
    const product = mockProducts.find(p => p.id === id);
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
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Browse our wide selection of printing services, stationery, office supplies, and electronics
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12 bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-border/50">
          <div className="flex-1 relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 sm:pl-12 h-10 sm:h-12 rounded-lg border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px] lg:w-[220px] h-10 sm:h-12 border-2 focus:border-accent">
              <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                onView={handleViewProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Products;

