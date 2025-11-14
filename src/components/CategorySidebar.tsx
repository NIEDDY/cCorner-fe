import { motion } from "framer-motion";
import { useState } from "react";

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar = ({ categories, selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm sticky top-24">
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ x: 4 }}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground font-semibold"
                : "hover:bg-muted"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
