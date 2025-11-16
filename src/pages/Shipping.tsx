import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const Shipping = () => {
  const deliveryMethods = [
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Within Kigali (orders placed before 2 PM)",
      price: "$5.00",
      time: "Same day"
    },
    {
      icon: Truck,
      title: "Next-Day Delivery",
      description: "Within Kigali",
      price: "$3.00",
      time: "Next business day"
    },
    {
      icon: Package,
      title: "Standard Delivery",
      description: "2-3 business days",
      price: "Free on orders over $50",
      time: "2-3 days"
    },
    {
      icon: MapPin,
      title: "Store Pickup",
      description: "Available within 2 hours",
      price: "Free",
      time: "2 hours"
    }
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Shipping Information</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
              Fast, reliable delivery options to get your orders to you quickly and safely.
            </p>
          </motion.div>
        </div>
      </section>
      
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Delivery Methods */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">Delivery Methods</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {deliveryMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2">{method.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3">{method.description}</p>
                      <p className="text-sm sm:text-base font-semibold text-primary mb-1">{method.price}</p>
                      <p className="text-xs text-muted-foreground">{method.time}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Processing Time */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Processing Time</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Most orders are processed within 1-2 hours during business hours. Custom printing orders may require 
                  1-3 business days depending on complexity and quantity. You'll receive a confirmation email once your 
                  order is processed and ready for shipping.
                </p>
              </CardContent>
            </Card>
          </section>
          
          {/* Order Tracking */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Order Tracking</h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  Once your order is dispatched, you'll receive a confirmation email with tracking information. 
                  You can also contact us directly to check your order status.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Email confirmation with tracking number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>SMS notifications for delivery updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>24/7 order status check on our website</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
          
          {/* Delivery Areas */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Delivery Areas</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  We currently deliver to all areas:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>All major cities and metropolitan areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Suburban and rural areas (may require additional delivery time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>International shipping available (contact for rates)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
