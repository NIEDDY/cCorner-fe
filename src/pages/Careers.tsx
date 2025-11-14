import Navigation from "@/components/Navigation";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at Creative Corner</h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Join our team of passionate individuals dedicated to serving our community with quality products and services. 
            We're always looking for talented people to help us grow across our creative equipment, printing, and office supply divisions.
          </p>
          
          <div className="space-y-8">
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">Printing Services Specialist</h2>
              <p className="text-muted-foreground mb-4">Full-time • On-site</p>
              <p className="mb-4">
                We're seeking an experienced printing specialist to manage our digital and offset printing operations, 
                ensuring high-quality output and customer satisfaction.
              </p>
              <a href="#" className="text-primary hover:underline font-medium">Learn More →</a>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">Graphic Designer</h2>
              <p className="text-muted-foreground mb-4">Full-time • Hybrid</p>
              <p className="mb-4">
                Join our creative team to design logos, branding materials, marketing collateral, and custom products 
                for our diverse client base.
              </p>
              <a href="#" className="text-primary hover:underline font-medium">Learn More →</a>
            </div>
            
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">Sales Representative</h2>
              <p className="text-muted-foreground mb-4">Full-time • On-site</p>
              <p className="mb-4">
                Help customers find the perfect products and services for their needs. Experience in office supplies, 
                stationery, or printing industry preferred.
              </p>
              <a href="#" className="text-primary hover:underline font-medium">Learn More →</a>
            </div>
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

export default Careers;
