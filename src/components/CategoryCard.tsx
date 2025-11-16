import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const CategoryCard = ({ title, description, image, link, icon: Icon }: CategoryCardProps) => {
  return (
    <Link 
      to={link}
      className="group relative overflow-hidden rounded-lg sm:rounded-xl aspect-square block transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-border/50"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40 opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
      
      {/* Icon Badge with yellow accent */}
      {Icon && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 border-2 border-accent/50">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      )}
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 text-white">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-white/90 mb-3 sm:mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-1.5 sm:gap-2 text-white font-semibold text-xs sm:text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Explore</span>
          <div className="flex items-center gap-1 bg-accent/20 px-2 py-0.5 rounded-full">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
