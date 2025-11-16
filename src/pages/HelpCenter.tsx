import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our catalog online or visit our store in person. Add items to your cart and proceed to checkout. For bulk orders or custom printing services, contact us directly for a quote."
    },
    {
      question: "What printing services do you offer?",
      answer: "We offer digital and offset printing, custom printing on various materials (t-shirts, mugs, etc.), graphic design services, photocopying, scanning, binding, and lamination. Visit our Services page for more details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, mobile money (MTN, Airtel), bank transfers, and major credit/debit cards. For large orders, we can arrange payment terms upon request."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes! We offer delivery services within Kigali and can arrange shipping to other locations in Rwanda. Delivery fees vary based on location and order size. Check our Shipping Info page for more details."
    },
    {
      question: "What is your return policy?",
      answer: "We offer returns on unopened, unused products within 14 days of purchase. Custom printed items and opened stationery cannot be returned. See our Returns page for full details."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer competitive pricing for bulk orders on office supplies, stationery, and printing services. Contact us with your requirements for a custom quote."
    },
    {
      question: "Can you design graphics for my business?",
      answer: "Absolutely! Our graphic design team can create logos, branding materials, business cards, brochures, packaging, and more. Contact us to discuss your project and get a quote."
    },
    {
      question: "How long does custom printing take?",
      answer: "Standard custom printing orders typically take 3-5 business days. Rush orders can be completed in 1-2 business days for an additional fee. Complex designs may require more time."
    },
    {
      question: "Do you offer installation services?",
      answer: "Yes, we offer installation and setup services for printers, office equipment, and other products. Contact us to schedule an appointment."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is dispatched, you'll receive a confirmation with tracking information. You can also contact us directly to check your order status."
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Help Center</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8">
              Find answers to commonly asked questions about our products, services, and policies.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input 
                placeholder="Search for help..." 
                className="pl-10 sm:pl-12 pr-4 h-10 sm:h-12 rounded-full border-2 bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/70"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">Live Chat</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Chat with our team</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:shadow-lg transition-all"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">Call Us</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:shadow-lg transition-all"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">Email Us</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">info@creativecorner.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 sm:p-6 bg-card rounded-lg sm:rounded-xl border border-border/50 hover:shadow-lg transition-all"
            >
              <Link to="/contact" className="block">
                <Button className="w-full text-xs sm:text-sm">Contact Form</Button>
              </Link>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg sm:rounded-xl px-4 sm:px-6">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still Need Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 text-center border border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Still Need Help?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" asChild className="text-sm sm:text-base">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-sm sm:text-base">
                <a href="tel:+15551234567">Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
