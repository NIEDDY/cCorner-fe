import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, CheckCircle, X, FileText } from "lucide-react";

const Warranty = () => {
  const covered = [
    "Manufacturing defects in materials and workmanship",
    "Printing errors on custom orders (we'll reprint at no cost)",
    "Defective products will be replaced or refunded",
    "Equipment malfunctions under normal use"
  ];

  const notCovered = [
    "Damage from misuse, abuse, or accidents",
    "Normal wear and tear",
    "Consumable items (ink, paper, etc.) after use",
    "Customer design errors on custom printing"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Warranty Information</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
              Comprehensive warranty coverage and quality guarantees on all our products and services.
            </p>
          </motion.div>
        </div>
      </section>
      
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Manufacturer Warranty */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Manufacturer Warranty</h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      All products sold at Creative Corner come with the manufacturer's warranty where applicable. 
                      Warranty periods and coverage vary by product and manufacturer. We also provide our own guarantees 
                      on quality and satisfaction for all items.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Quality Guarantee */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Quality Guarantee</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  For products without manufacturer warranty, we offer our own quality guarantee:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Office Equipment</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">3 to 12 months depending on product</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Printing Materials</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Quality guarantee on all printed items</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-sm sm:text-base mb-2">Stationery Products</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Satisfaction guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* What's Covered */}
          <section>
            <Card className="border-accent/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">What's Covered</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">Typical warranty coverage includes:</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {covered.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* What's Not Covered */}
          <section>
            <Card className="border-destructive/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-destructive/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">What's Not Covered</h2>
                    <ul className="space-y-2 sm:space-y-3">
                      {notCovered.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                        >
                          <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          {/* Filing a Claim */}
          <section>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Filing a Warranty Claim</h2>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      To file a warranty claim, contact us with your receipt and a description of the issue. 
                      Bring the item to our store or we can arrange pickup for inspection. We'll resolve warranty 
                      claims quickly and fairly, typically within 3-5 business days.
                    </p>
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

export default Warranty;
