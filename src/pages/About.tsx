import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Target, Award, Users, Shield, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: Award, title: "Quality Products", description: "Trusted brands and premium materials" },
    { icon: Users, title: "Expert Support", description: "Professional guidance every step" },
    { icon: Zap, title: "Fast Turnaround", description: "Quick delivery and service" },
    { icon: Shield, title: "Satisfaction Guaranteed", description: "100% customer happiness" },
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">About Creative Corner</h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90">
              Your trusted partner for printing services, stationery, office supplies, and creative solutions since 2024
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20 space-y-12 sm:space-y-16 md:space-y-20">

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <SectionHeader 
            title="Our Story"
            subtitle="Building a creative community"
          />
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
            <p>
              Welcome to Creative Corner, your one-stop destination for all your creative, printing, and office needs. 
              We provide photographers, videographers, creative professionals, businesses, schools, and individuals with 
              high-quality equipment, printing services, office supplies, and stationery at competitive prices.
            </p>
            <p>
              From professional creative equipment to everyday office essentials, from custom printing services to 
              complete school supply kits - we have everything you need. Our mission is to empower individuals and 
              businesses by offering them access to quality products, exceptional service, and professional solutions 
              tailored to their needs.
            </p>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <section className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To empower creative professionals and businesses with premium equipment, exceptional printing services, 
                  and reliable office solutions that help bring their visions to life.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To become the leading destination for creative professionals, offering innovative products, 
                  unmatched service quality, and building a thriving community of creators.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Values */}
        <section>
          <SectionHeader 
            title="Why Choose Us"
            subtitle="The values that define our service"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-5 sm:p-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-4xl mx-auto">
          <SectionHeader 
            title="What We Offer"
            subtitle="Comprehensive solutions for all your creative needs"
          />
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Professional creative equipment for photography, videography, and audio",
                  "Complete printing services - digital, offset, and custom printing",
                  "Office supplies - printers, toners, laminators, and more",
                  "Stationery essentials for home, office, and school",
                  "School materials and educational supplies",
                  "Graphic design and branding services",
                  "Online ordering with fast delivery"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
