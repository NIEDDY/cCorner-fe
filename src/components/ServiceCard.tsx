import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
    >
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1 p-6">
          <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <h3 className="font-bold text-xl mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" className="w-full" onClick={onGetQuote}>
            Get a Quote
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
