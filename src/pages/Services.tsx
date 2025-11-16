import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Printer, PenTool, FileText, ShoppingBag, Briefcase, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Digital & Offset Printing",
      description: "Professional printing services for all your needs. From business cards to large format banners, we deliver quality results on time.",
      features: ["High-resolution printing", "Various paper stocks", "Fast turnaround", "Bulk discounts available"]
    },
    {
      icon: PenTool,
      title: "Graphic Design Services",
      description: "Creative design solutions that bring your vision to life. Our expert designers create stunning visuals for your brand.",
      features: ["Logo design & branding", "Packaging design", "Marketing materials", "Social media graphics"]
    },
    {
      icon: FileText,
      title: "Photocopying, Scanning & Binding",
      description: "Quick and efficient document services. Perfect for reports, presentations, and document management.",
      features: ["Black & white / color copying", "High-speed scanning", "Comb & spiral binding", "Lamination services"]
    },
    {
      icon: ShoppingBag,
      title: "Custom Printing",
      description: "Personalize anything! We print on t-shirts, mugs, cards, and various promotional items.",
      features: ["T-shirt printing", "Promotional products", "Custom souvenirs", "Personalized gifts"]
    },
    {
      icon: Briefcase,
      title: "Online Ordering & Delivery",
      description: "Convenient online ordering with doorstep delivery. Shop from anywhere and get your items delivered.",
      features: ["Easy online ordering", "Track your order", "Fast delivery", "Secure payment options"]
    },
    {
      icon: HeadphonesIcon,
      title: "Consultation Services",
      description: "Expert advice for your business needs. We help with office setup, branding, and document preparation.",
      features: ["Office setup consultation", "Branding strategy", "Document management", "Print optimization"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Services</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
            Professional creative services to help your business grow. From design to delivery, we're here to support your success.
          </p>
          </motion.div>
        </div>
      </section>
        
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border border-border/50 rounded-lg sm:rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm">
                      <span className="text-accent mr-2 mt-0.5">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
                <Button className="w-full text-xs sm:text-sm" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Project?</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-5 sm:mb-6">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <Button size="lg" asChild className="text-sm sm:text-base">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
