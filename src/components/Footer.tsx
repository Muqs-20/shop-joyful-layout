import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">LUXE<span className="text-primary">.</span></h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Curated fashion for the modern woman. Premium quality, timeless design.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Shop</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">New Arrivals</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Best Sellers</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Dresses</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Help</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Shipping & Returns</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Size Guide</Link></li>
            <li><Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Stay Connected</h4>
          <p className="text-sm opacity-70 mb-4">Subscribe for exclusive offers and new arrivals.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-background/10 border border-background/20 rounded-l-md px-3 py-2 text-sm placeholder:opacity-50 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md text-sm font-medium hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
        <span>© 2026 LUXE. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          <Link to="/products" className="hover:opacity-100 transition-opacity">Shop</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
