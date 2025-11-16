import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onGetQuote: () => void;
}

const ServiceCard = ({ icon: Icon, title, description, onGetQuote }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30">
        <CardContent className="flex-1 p-5 sm:p-6 lg:p-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/10 via-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary group-hover:text-accent transition-colors" />
          </div>
          <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{description}</p>
        </CardContent>
        <CardFooter className="p-5 sm:p-6 lg:p-8 pt-0">
          <Button 
            variant="outline" 
            className="w-full group/btn border-2 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
            asChild
          >
            <Link to="/contact">
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
