import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Digital & Offset Printing",
      description: "Professional printing services for all your needs. From business cards to large format banners, we deliver quality results on time.",
      features: ["High-resolution printing", "Various paper stocks", "Fast turnaround", "Bulk discounts available"]
    },
    {
      title: "Graphic Design Services",
      description: "Creative design solutions that bring your vision to life. Our expert designers create stunning visuals for your brand.",
      features: ["Logo design & branding", "Packaging design", "Marketing materials", "Social media graphics"]
    },
    {
      title: "Photocopying, Scanning & Binding",
      description: "Quick and efficient document services. Perfect for reports, presentations, and document management.",
      features: ["Black & white / color copying", "High-speed scanning", "Comb & spiral binding", "Lamination services"]
    },
    {
      title: "Custom Printing",
      description: "Personalize anything! We print on t-shirts, mugs, cards, and various promotional items.",
      features: ["T-shirt printing", "Promotional products", "Custom souvenirs", "Personalized gifts"]
    },
    {
      title: "Online Ordering & Delivery",
      description: "Convenient online ordering with doorstep delivery. Shop from anywhere and get your items delivered.",
      features: ["Easy online ordering", "Track your order", "Fast delivery", "Secure payment options"]
    },
    {
      title: "Consultation Services",
      description: "Expert advice for your business needs. We help with office setup, branding, and document preparation.",
      features: ["Office setup consultation", "Branding strategy", "Document management", "Print optimization"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional creative services to help your business grow. From design to delivery, we're here to support your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <Button size="lg">Contact Us Now</Button>
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

export default Services;
