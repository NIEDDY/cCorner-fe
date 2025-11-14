import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import schoolSuppliesImg from "@/assets/product-school-supplies.jpg";

const SchoolMaterials = () => {
  const products = [
    { name: "Exercise Books", price: "$3.99", description: "Quality exercise books for all subjects", image: schoolSuppliesImg },
    { name: "School Stationery Kits", price: "$29.99", description: "Complete stationery kits for students", image: schoolSuppliesImg },
    { name: "Textbooks", price: "$24.99", description: "Educational textbooks for all grades", image: schoolSuppliesImg },
    { name: "Geometry Sets", price: "$12.99", description: "Mathematical instruments and compasses", image: schoolSuppliesImg },
    { name: "Art Supplies", price: "$34.99", description: "Crayons, colored pencils, and paints", image: schoolSuppliesImg },
    { name: "Backpacks", price: "$39.99", description: "Durable school backpacks with multiple compartments", image: schoolSuppliesImg },
    { name: "Calculators", price: "$19.99", description: "Scientific calculators for students", image: schoolSuppliesImg },
    { name: "Pencil Cases", price: "$8.99", description: "Stylish pencil cases and pouches", image: schoolSuppliesImg },
    { name: "Water Bottles", price: "$14.99", description: "Reusable water bottles for school", image: schoolSuppliesImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">School Materials</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Everything students need for a successful school year. Quality educational materials at affordable prices.
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

export default SchoolMaterials;
