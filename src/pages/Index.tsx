import { motion } from "framer-motion";
import { Camera, Video, Printer, Pen, Briefcase, GraduationCap, Palette, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import photographyImg from "@/assets/category-photography.jpg";
import videographyImg from "@/assets/category-videography.jpg";
import designImg from "@/assets/category-design.jpg";
import lightingImg from "@/assets/category-lighting.jpg";
import audioImg from "@/assets/category-audio.jpg";
import accessoriesImg from "@/assets/category-accessories.jpg";

const Index = () => {
  const quickShopCategories = [
    {
      title: "Photography",
      description: "Professional cameras, lenses, and accessories",
      image: photographyImg,
      link: "/category/photography",
    },
    {
      title: "Videography",
      description: "High-end video equipment and stabilizers",
      image: videographyImg,
      link: "/category/videography",
    },
    {
      title: "Design Tools",
      description: "Creative software and digital tools",
      image: designImg,
      link: "/category/design",
    },
    {
      title: "Lighting",
      description: "Studio and portable lighting solutions",
      image: lightingImg,
      link: "/category/lighting",
    },
    {
      title: "Audio Equipment",
      description: "Microphones, mixers, and sound gear",
      image: audioImg,
      link: "/category/audio",
    },
    {
      title: "Accessories",
      description: "Bags, filters, and essential gear",
      image: accessoriesImg,
      link: "/category/accessories",
    },
  ];

  const services = [
    {
      icon: Printer,
      title: "Printing Services",
      description: "Professional printing for all your creative needs - from business cards to large format banners.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Expert design services for logos, branding, packaging, and marketing materials.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, products, and commercial projects.",
    },
    {
      icon: Package,
      title: "Custom Products",
      description: "Personalized printing on t-shirts, mugs, cards, and promotional items.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Photographer",
      content: "Creative Corner has been my go-to supplier for years. Their products are top-notch and the service is exceptional!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Graphic Designer",
      content: "The printing quality is outstanding. I've ordered hundreds of business cards and marketing materials - always perfect!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Small Business Owner",
      content: "From design to delivery, Creative Corner made the entire process smooth. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Quick Shop Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Shop by Category"
            subtitle="Browse our curated collections of professional creative equipment"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {quickShopCategories.map((category, index) => (
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

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <SectionHeader title="Featured Products" subtitle="Handpicked items for creative professionals" />
            <Link to="/marketplace">
              <Button variant="outline" className="mt-4 sm:mt-0">
                View All Products
              </Button>
            </Link>
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-6">Explore our full marketplace for premium products</p>
            <Link to="/marketplace">
              <Button size="lg">Browse Marketplace</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Professional Services"
            subtitle="Expert creative services to bring your vision to life"
            centered
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
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

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Join thousands of satisfied creative professionals"
            centered
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation for your custom printing or creative project today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  View Services
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
