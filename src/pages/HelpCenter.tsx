import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find answers to commonly asked questions about our products, services, and policies.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I place an order?</AccordionTrigger>
              <AccordionContent>
                Browse our catalog online or visit our store in person. Add items to your cart and proceed to checkout. 
                For bulk orders or custom printing services, contact us directly for a quote.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>What printing services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer digital and offset printing, custom printing on various materials (t-shirts, mugs, etc.), 
                graphic design services, photocopying, scanning, binding, and lamination. Visit our Services page for more details.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
              <AccordionContent>
                We accept cash, mobile money (MTN, Airtel), bank transfers, and major credit/debit cards. 
                For large orders, we can arrange payment terms upon request.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer delivery services?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer delivery services within Kigali and can arrange shipping to other locations in Rwanda. 
                Delivery fees vary based on location and order size. Check our Shipping Info page for more details.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer returns on unopened, unused products within 14 days of purchase. Custom printed items and 
                opened stationery cannot be returned. See our Returns page for full details.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer bulk discounts?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer competitive pricing for bulk orders on office supplies, stationery, and printing services. 
                Contact us with your requirements for a custom quote.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger>Can you design graphics for my business?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Our graphic design team can create logos, branding materials, business cards, brochures, 
                packaging, and more. Contact us to discuss your project and get a quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

export default HelpCenter;
