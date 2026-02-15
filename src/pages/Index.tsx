import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, testimonials } from "@/data/products";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-main grid lg:grid-cols-2 items-center min-h-[85vh]">
          <div className="section-padding lg:pr-12">
            <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in">New Collection 2026</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Elevate Your <span className="text-primary">Everyday</span> Style
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover curated pieces that blend timeless elegance with modern sophistication. Quality you can feel.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/products" className="btn-primary inline-flex items-center gap-2 text-sm">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="btn-secondary inline-flex items-center gap-2 text-sm">
                View Lookbook
              </Link>
            </div>
          </div>
          <div className="hidden lg:block h-[85vh] relative">
            <img src={heroImage} alt="Fashion lifestyle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Shop by Category</h2>
            <p className="text-muted-foreground">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.name}`}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display text-lg font-semibold text-background">{cat.name}</h3>
                  <p className="text-background/70 text-sm">{cat.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">Best Sellers</h2>
              <p className="text-muted-foreground">Our most loved pieces this season</p>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-1 text-secondary text-sm font-medium hover:gap-2 transition-all">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <p className="text-sm uppercase tracking-widest opacity-80 mb-3">Limited Time</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Up to 40% Off Winter Collection</h2>
          <p className="opacity-80 mb-8 max-w-md mx-auto">Shop our exclusive winter styles before they're gone. Free shipping on orders over $150.</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity">
            Shop the Sale <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real reviews from real customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < t.rating ? "fill-primary text-primary" : "text-border"} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold text-sm">
                    {t.avatar}
                  </div>
                  <span className="font-medium text-sm text-foreground">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
