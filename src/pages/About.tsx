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

  // const team = [
  //   { name: "Sarah Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  //   { name: "Michael Chen", role: "Creative Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  //   { name: "Emily Rodriguez", role: "Operations Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400" },
  //   { name: "David Kim", role: "Technical Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Creative Corner</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Your trusted partner for creative equipment, printing services, and office solutions since 2024
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 space-y-20">

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
          <div className="space-y-6 text-lg text-muted-foreground">
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
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center md:text-left">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
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
              <CardContent className="p-8 text-center md:text-left">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        {/* 
        <section>
          <SectionHeader 
            title="Meet Our Team"
            subtitle="The people behind Creative Corner"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-accent text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        */}

        {/* What We Offer */}
        <section className="max-w-4xl mx-auto">
          <SectionHeader 
            title="What We Offer"
            subtitle="Comprehensive solutions for all your creative needs"
          />
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <ul className="space-y-4">
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
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
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
