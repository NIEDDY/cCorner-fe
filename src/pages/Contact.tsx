import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@creativecorner.com", href: "mailto:info@creativecorner.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MessageSquare, label: "WhatsApp", value: "+1 (555) 123-4567", href: "https://wa.me/15551234567" },
    { icon: MapPin, label: "Location", value: "123 Business Street, Commerce City, CC 12345", href: "#" },
    { icon: Clock, label: "Hours", value: "Mon-Sat 8AM-7PM, Sun 9AM-5PM", href: "#" },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Get in Touch</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
              Have a suggestion or question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl rounded-xl sm:rounded-2xl border border-border/50 hover:shadow-2xl transition-shadow">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input id="name" placeholder="Your Name" required className="w-full h-10 sm:h-12" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input id="email" type="email" placeholder="example@gmail.com" required className="w-full h-10 sm:h-12" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="w-full h-10 sm:h-12" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                    <Input id="subject" placeholder="How can we help you?" required className="w-full h-10 sm:h-12" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea id="message" placeholder="Tell us more..." rows={6} required className="w-full text-sm sm:text-base" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 h-11 sm:h-12 text-sm sm:text-base">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h2>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow rounded-lg sm:rounded-xl border border-border/50">
                    <CardContent className="p-4 sm:p-6">
                      <a href={info.href} className="flex items-start gap-3 sm:gap-4 group w-full">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-7 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg mb-1">{info.label}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground break-words">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <Card className="overflow-hidden rounded-lg sm:rounded-xl shadow-md border border-border/50">
              <div className="aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=Business+Street,+Commerce+City&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </Card>

            {/* Immediate Help */}
            <Card className="bg-accent/10 border-accent/20 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Need Immediate Help?</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4">
                  For urgent inquiries, please call us directly or send us a WhatsApp message. We're here to assist you immediately!
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button variant="outline" size="sm" asChild className="w-full sm:w-auto text-xs sm:text-sm">
                    <a href="tel:+15551234567">Call Now</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full sm:w-auto text-xs sm:text-sm">
                    <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
