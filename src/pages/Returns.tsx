import Navigation from "@/components/Navigation";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Return Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">14-Day Return Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                you can return eligible items within 14 days of delivery for a refund or exchange.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Return Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Items must be in original, unused condition with tags/seals intact</li>
                <li>All original packaging and accessories must be included</li>
                <li>Return must be initiated within 14 days of delivery</li>
                <li>Original receipt or proof of purchase required</li>
                <li>Custom printed items and opened stationery cannot be returned</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Contact our customer service team via phone or WhatsApp</li>
                <li>Provide your order details and reason for return</li>
                <li>Return the item to our store or arrange pickup (fees may apply)</li>
                <li>Receive your refund within 3-5 business days after inspection</li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Non-Returnable Items</h2>
              <p className="text-muted-foreground mb-2">
                The following items cannot be returned:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Custom printed materials and personalized items</li>
                <li>Opened stationery items, pens, and consumables</li>
                <li>Software, books, and educational materials (once opened)</li>
                <li>Items marked as final sale or clearance</li>
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

export default Returns;
