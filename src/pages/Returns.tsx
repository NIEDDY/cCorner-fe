import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { RefreshCw, X, CheckCircle, AlertCircle } from "lucide-react";

const Returns = () => {
  const returnSteps = [
    { step: 1, title: "Contact Us", description: "Reach out via phone, email, or WhatsApp with your order details" },
    { step: 2, title: "Get Approval", description: "We'll review your request and provide return authorization" },
    { step: 3, title: "Ship or Return", description: "Return the item to our store or arrange pickup" },
    { step: 4, title: "Receive Refund", description: "Get your refund within 3-5 business days after inspection" }
  ];

  const nonReturnable = [
    "Custom printed materials and personalized items",
    "Opened stationery items, pens, and consumables",
    "Software, books, and educational materials (once opened)",
    "Items marked as final sale or clearance"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Return Policy</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
              We want you to be completely satisfied with your purchase. Our hassle-free return process makes it easy.
            </p>
          </motion.div>
        </div>
      </section>
      
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* 14-Day Return Policy */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">14-Day Return Policy</h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                      you can return eligible items within 14 days of delivery for a refund or exchange.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Return Requirements */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Return Requirements</h2>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    "Items must be in original, unused condition with tags/seals intact",
                    "All original packaging and accessories must be included",
                    "Return must be initiated within 14 days of delivery",
                    "Original receipt or proof of purchase required",
                    "Custom printed items and opened stationery cannot be returned"
                  ].map((requirement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
          
          {/* How to Return */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">How to Return an Item</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {returnSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg sm:text-xl">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Non-Returnable Items */}
          <section>
            <Card className="border-destructive/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-destructive/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Non-Returnable Items</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      The following items cannot be returned:
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {nonReturnable.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                          <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Returns;
