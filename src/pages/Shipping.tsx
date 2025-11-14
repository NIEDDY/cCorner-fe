import Navigation from "@/components/Navigation";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping Information</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Delivery Methods</h2>
              <p className="text-muted-foreground mb-4">
                We offer convenient delivery options to meet your needs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Same-Day Delivery within Kigali (orders placed before 2 PM) - RWF 3,000</li>
                <li>Next-Day Delivery within Kigali - RWF 2,000</li>
                <li>Standard Delivery (2-3 business days) - Free on orders over RWF 50,000</li>
                <li>Provincial Delivery (3-5 business days) - Varies by location</li>
                <li>Store Pickup - Free (available within 2 hours)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
              <p className="text-muted-foreground">
                Most orders are processed within 1-2 hours during business hours. Custom printing orders may require 
                1-3 business days depending on complexity and quantity.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
              <p className="text-muted-foreground">
                Once your order is dispatched, you'll receive a confirmation call or SMS with delivery information. 
                You can also contact us directly to check your order status.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Delivery Areas</h2>
              <p className="text-muted-foreground mb-2">
                We currently deliver to all areas in Rwanda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>All districts of Kigali City</li>
                <li>Major towns in all provinces</li>
                <li>Remote areas (may require additional delivery time and fees)</li>
              </ul>
            </section>
          </div>
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

export default Shipping;
