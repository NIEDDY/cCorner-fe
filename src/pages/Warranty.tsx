import Navigation from "@/components/Navigation";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Warranty Information</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Manufacturer Warranty</h2>
              <p className="text-muted-foreground mb-4">
                All products sold at Creative Corner come with the manufacturer's warranty where applicable. 
                Warranty periods and coverage vary by product and manufacturer. We also provide our own guarantees 
                on quality and satisfaction for all items.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Quality Guarantee</h2>
              <p className="text-muted-foreground mb-4">
                For products without manufacturer warranty, we offer our own quality guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Office equipment - 3 to 12 months depending on product</li>
                <li>Printing materials - Quality guarantee on all printed items</li>
                <li>Stationery products - Satisfaction guaranteed</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">What's Covered</h2>
              <p className="text-muted-foreground mb-2">Typical warranty coverage includes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Manufacturing defects in materials and workmanship</li>
                <li>Printing errors on custom orders (we'll reprint at no cost)</li>
                <li>Defective products will be replaced or refunded</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">What's Not Covered</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Damage from misuse, abuse, or accidents</li>
                <li>Normal wear and tear</li>
                <li>Consumable items (ink, paper, etc.) after use</li>
                <li>Customer design errors on custom printing</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Filing a Warranty Claim</h2>
              <p className="text-muted-foreground">
                To file a warranty claim, contact us with your receipt and a description of the issue. 
                Bring the item to our store or we can arrange pickup for inspection. We'll resolve warranty 
                claims quickly and fairly.
              </p>
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

export default Warranty;
