import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Creative Corner Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Tips, tutorials, and insights for creative professionals, businesses, and students.
          </p>
          
          <div className="grid gap-8">
            <article className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 20, 2024</div>
                <h2 className="text-2xl font-bold mb-3">
                  <a href="#" className="hover:text-primary transition-colors">
                    The Ultimate Guide to Professional Business Card Design
                  </a>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Learn the key elements of effective business card design and how to make a lasting first impression 
                  with quality printing materials.
                </p>
                <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
              </div>
            </article>
            
            <article className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 18, 2024</div>
                <h2 className="text-2xl font-bold mb-3">
                  <a href="#" className="hover:text-primary transition-colors">
                    10 Essential Office Supplies Every Business Needs
                  </a>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Discover the must-have office supplies that boost productivity and keep your workplace running smoothly.
                </p>
                <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
              </div>
            </article>
            
            <article className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 15, 2024</div>
                <h2 className="text-2xl font-bold mb-3">
                  <a href="#" className="hover:text-primary transition-colors">
                    Back to School: Complete Stationery Checklist
                  </a>
                </h2>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to ensure students have all the necessary supplies for a successful school year.
                </p>
                <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
              </div>
            </article>
            
            <article className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March 10, 2024</div>
                <h2 className="text-2xl font-bold mb-3">
                  <a href="#" className="hover:text-primary transition-colors">
                    Digital vs Offset Printing: Which is Right for You?
                  </a>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Understanding the differences between digital and offset printing to make the best choice for your project.
                </p>
                <a href="#" className="text-primary hover:underline font-medium">Read More →</a>
              </div>
            </article>
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

export default Blog;
