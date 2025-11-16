import { motion } from "framer-motion";
import { Printer, PenTool, Briefcase, Camera, HardDrive, ShoppingBag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      title: "Printing Services",
      description: "Professional printing for business cards, flyers, banners, and more",
      image: "/api/placeholder/400/300",
      link: "/category/printing-services",
      icon: Printer,
    },
    {
      title: "Stationery",
      description: "Premium notebooks, pens, paper, and writing supplies",
      image: "/api/placeholder/400/300",
      link: "/category/stationery",
      icon: PenTool,
    },
    {
      title: "Office Supplies",
      description: "Everything you need for your office and workspace",
      image: "/api/placeholder/400/300",
      link: "/category/office-supplies",
      icon: Briefcase,
    },
    {
      title: "Printers & Equipment",
      description: "Professional printers, scanners, and printing equipment",
      image: "/api/placeholder/400/300",
      link: "/category/printers",
      icon: Printer,
    },
    {
      title: "Cameras & Photography",
      description: "Digital cameras, lenses, and photography accessories",
      image: "/api/placeholder/400/300",
      link: "/category/cameras",
      icon: Camera,
    },
    {
      title: "Electronics & Storage",
      description: "Memory cards, hard drives, and electronic accessories",
      image: "/api/placeholder/400/300",
      link: "/category/electronics",
      icon: HardDrive,
    },
  ];

  const services = [
    {
      icon: Printer,
      title: "Custom Printing",
      description: "High-quality printing services for business cards, flyers, brochures, banners, and large format prints.",
    },
    {
      icon: PenTool,
      title: "Design Services",
      description: "Professional graphic design for logos, branding, marketing materials, and custom stationery.",
    },
    {
      icon: ShoppingBag,
      title: "Bulk Orders",
      description: "Special pricing for bulk orders of stationery, office supplies, and printing materials.",
    },
    {
      icon: Briefcase,
      title: "Business Solutions",
      description: "Complete office setup packages and corporate printing solutions tailored to your needs.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Creative Corner has been amazing! Their printing quality is exceptional and the customer service is top-notch. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Office Manager",
      content: "We order all our office supplies from Creative Corner. Great prices, fast delivery, and excellent quality products.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Graphic Designer",
      content: "The best place for printing services and stationery. Their custom design services helped us create stunning marketing materials.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <SectionHeader
            title="Shop by Category"
            subtitle="Explore our wide range of products and services"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <SectionHeader
            title="Our Services"
            subtitle="Professional solutions for all your printing and office needs"
            centered
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ServiceCard {...service} onGetQuote={() => {}} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Join thousands of satisfied customers"
            centered
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-3 sm:px-4">
              Browse our products, request a quote, or contact us for custom printing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3 sm:px-4">
              <Link to="/products">
                <Button size="lg" variant="secondary">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
