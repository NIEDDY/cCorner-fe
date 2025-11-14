import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import businessCardsImg from "@/assets/product-business-cards.jpg";
import flyersImg from "@/assets/product-flyers.jpg";
import bannersImg from "@/assets/product-banners.jpg";

const PrintingMaterials = () => {
  const products = [
    { name: "Business Cards", price: "$29.99", description: "Premium quality business cards, 100 pieces", image: businessCardsImg },
    { name: "Flyers & Brochures", price: "$49.99", description: "Full color flyers, A4 size, 500 pieces", image: flyersImg },
    { name: "Posters", price: "$19.99", description: "Large format posters, various sizes available", image: flyersImg },
    { name: "Banners", price: "$89.99", description: "Vinyl banners for indoor/outdoor use", image: bannersImg },
    { name: "Certificates", price: "$39.99", description: "Professional certificates with embossed seals", image: businessCardsImg },
    { name: "Books & Booklets", price: "$99.99", description: "Custom printed books, perfect binding", image: flyersImg },
    { name: "Invitations", price: "$34.99", description: "Premium wedding and event invitations", image: businessCardsImg },
    { name: "Calendars", price: "$24.99", description: "Custom wall and desk calendars", image: flyersImg },
    { name: "Labels & Stickers", price: "$15.99", description: "Custom labels and stickers, various sizes", image: businessCardsImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Printing Materials</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Professional printing services for all your business and personal needs. High-quality materials at competitive prices.
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
                <Button>Order Now</Button>
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

export default PrintingMaterials;
