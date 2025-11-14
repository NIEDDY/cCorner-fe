import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import notebooksImg from "@/assets/product-notebooks.jpg";

const Stationery = () => {
  const products = [
    { name: "Premium Notebooks", price: "$12.99", description: "High-quality notebooks, lined/plain pages", image: notebooksImg },
    { name: "Pen Sets", price: "$24.99", description: "Professional ballpoint and gel pen sets", image: notebooksImg },
    { name: "Marker Sets", price: "$19.99", description: "Permanent and whiteboard markers", image: notebooksImg },
    { name: "Paper Reams", price: "$8.99", description: "A4 copy paper, 500 sheets per ream", image: notebooksImg },
    { name: "File Folders", price: "$14.99", description: "Durable file folders and organizers", image: notebooksImg },
    { name: "Envelopes", price: "$6.99", description: "Various sizes for letters and documents", image: notebooksImg },
    { name: "Staplers & Punches", price: "$15.99", description: "Heavy-duty office staplers and hole punches", image: notebooksImg },
    { name: "Sticky Notes", price: "$4.99", description: "Colorful sticky notes in multiple sizes", image: notebooksImg },
    { name: "Desk Organizers", price: "$29.99", description: "Keep your workspace tidy and organized", image: notebooksImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Stationery Supplies</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Everything you need for your office or home workspace. Quality stationery products from trusted brands.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted rounded-md mb-4 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">{product.price}</p>
                <Button>Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Creative Corner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Stationery;
