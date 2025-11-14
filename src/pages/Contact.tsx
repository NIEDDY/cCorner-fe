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
    { icon: Mail, label: "Email", value: "creative@corner.com", href: "mailto:eddynibyose@gmail.com" },
    { icon: Phone, label: "Phone", value: "+250 787 695 070", href: "tel:+250787695070" },
    { icon: MessageSquare, label: "WhatsApp", value: "+250 787 695 070", href: "https://wa.me/250787695070" },
    { icon: MapPin, label: "Location", value: "Kigali, Rwanda", href: "https://maps.app.goo.gl/KRPwYESacG6TiJK9A" },
    { icon: Clock, label: "Hours", value: "Mon-Sat 8AM-7PM, Sun 9AM-5PM", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Have a suggestion or question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input id="name" placeholder="Your Name" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input id="email" type="email" placeholder="example@gmail.com" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="+2507..." className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                    <Input id="subject" placeholder="How can we help you?" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea id="message" placeholder="Tell us more..." rows={6} required className="w-full" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
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
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow rounded-xl border border-gray-200">
                    <CardContent className="p-6 flex items-start gap-4">
                      <a href={info.href} className="flex items-start gap-4 group w-full">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                          <info.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{info.label}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <Card className="overflow-hidden rounded-xl shadow-md border border-gray-200">
              <div className="aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=Kigali,%20Rwanda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kigali Map"
                />
              </div>
            </Card>

            {/* Immediate Help */}
            <Card className="bg-accent/10 border-accent/20 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-bold text-lg md:text-xl mb-3">Need Immediate Help?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  For urgent inquiries, please call us directly or send us a WhatsApp message. We're here to assist you immediately!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                    <a href="tel:+250788123456">Call Now</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                    <a href="https://wa.me/250788123456" target="_blank" rel="noopener noreferrer">
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
