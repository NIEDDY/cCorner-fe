import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">CC</span>
              </div>
              <span className="text-xl font-bold">Creative Corner</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your one-stop destination for printing services, stationery, office supplies, printers, cameras, and electronics.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shop Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/printing-services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Printing Services</Link></li>
              <li><Link to="/category/stationery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Stationery</Link></li>
              <li><Link to="/category/office-supplies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Office Supplies</Link></li>
              <li><Link to="/category/printers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Printers & Equipment</Link></li>
              <li><Link to="/category/cameras" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cameras & Photography</Link></li>
              <li><Link to="/category/electronics" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Electronics & Storage</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@creativecorner.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Business Street, Commerce City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 mt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Creative Corner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
