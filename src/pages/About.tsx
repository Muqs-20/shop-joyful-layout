import { Link } from "react-router-dom";
import { Award, Heart, Globe, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Award, title: "Quality First", desc: "Every piece is crafted from premium materials, selected for durability and beauty." },
  { icon: Heart, title: "Timeless Design", desc: "We create pieces that transcend trends — elegant today, elegant tomorrow." },
  { icon: Globe, title: "Sustainable Practice", desc: "Ethically sourced materials and responsible manufacturing at every step." },
  { icon: Users, title: "Community Driven", desc: "A brand built by and for women who value substance over fast fashion." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-padding bg-muted/50">
      <div className="container-main text-center max-w-3xl mx-auto">
        <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-4">Our Story</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Crafted with <span className="text-primary">Purpose</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          LUXE was born from a simple idea: fashion should feel as good as it looks. We curate timeless pieces
          that combine premium craftsmanship with modern design, empowering you to express your authentic style.
        </p>
      </div>
    </section>

    {/* Image + Text */}
    <section className="section-padding">
      <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=750&fit=crop"
            alt="Fashion atelier"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">The LUXE Difference</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in 2020, LUXE started as a small collection of essentials designed for the modern wardrobe.
              Today, we've grown into a full lifestyle brand — but our commitment to quality remains unchanged.
            </p>
            <p>
              Each piece in our collection is designed in-house and produced in small batches with carefully vetted
              artisan workshops in Italy, Portugal, and Japan. We never compromise on materials, and we never
              mass-produce.
            </p>
            <p>
              Our mission is simple: help you build a wardrobe of pieces you'll love for years, not just seasons.
            </p>
          </div>
          <Link to="/products" className="btn-primary inline-flex items-center gap-2 text-sm mt-8">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted/50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">Our Values</h2>
          <p className="text-muted-foreground">What drives everything we do</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding">
      <div className="container-main grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { num: "50K+", label: "Happy Customers" },
          { num: "200+", label: "Curated Pieces" },
          { num: "15", label: "Countries Shipped" },
          { num: "4.8★", label: "Average Rating" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl font-bold text-primary mb-1">{s.num}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
