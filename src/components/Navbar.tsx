import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Shop", path: "/products" },
  { label: "Categories", path: "/products?category=all" },
  { label: "Deals", path: "/products?deals=true" },
  { label: "About", path: "#about" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-main flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
          LUXE<span className="text-primary">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-secondary ${
                  location.pathname === item.path ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="hidden sm:block text-muted-foreground hover:text-foreground transition-colors" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <Link to="/products" className="relative text-muted-foreground hover:text-foreground transition-colors" aria-label="Cart">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
