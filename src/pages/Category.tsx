import Navigation from "@/components/Navigation";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  
  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')
    : 'Category';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryTitle}</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Browse our collection of professional {categoryTitle.toLowerCase()} equipment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-muted-foreground mb-4">Professional equipment description</p>
            <p className="text-2xl font-bold">$999.99</p>
          </div>
          
          <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-muted-foreground mb-4">Professional equipment description</p>
            <p className="text-2xl font-bold">$1,299.99</p>
          </div>
          
          <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-muted-foreground mb-4">Professional equipment description</p>
            <p className="text-2xl font-bold">$799.99</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Creative Corner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Category;
