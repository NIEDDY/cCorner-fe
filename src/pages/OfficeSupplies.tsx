import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import printerImg from "@/assets/product-printer.jpg";

const OfficeSupplies = () => {
  const products = [
    { name: "Laser Printers", price: "$299.99", description: "High-speed laser printers for office use", image: printerImg },
    { name: "Ink Cartridges", price: "$39.99", description: "Compatible ink cartridges for all major brands", image: printerImg },
    { name: "Toner Cartridges", price: "$79.99", description: "High-yield toner for laser printers", image: printerImg },
    { name: "Printing Machines", price: "$1,999.99", description: "Professional multifunction printing machines", image: printerImg },
    { name: "Laminators", price: "$149.99", description: "Hot and cold laminating machines", image: printerImg },
    { name: "Paper Shredders", price: "$89.99", description: "Cross-cut paper shredders for security", image: printerImg },
    { name: "Custom Stamps", price: "$24.99", description: "Personalized rubber stamps for office use", image: printerImg },
    { name: "Label Makers", price: "$34.99", description: "Electronic label makers with tape cartridges", image: printerImg },
    { name: "Binding Machines", price: "$119.99", description: "Comb and spiral binding machines", image: printerImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Office Supplies</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Complete office equipment solutions. From printers to laminators, we have everything your office needs.
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

export default OfficeSupplies;
