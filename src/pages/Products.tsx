import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const categoryOptions = ["All", "Dresses", "Tops & Blouses", "Outerwear", "Accessories"];
const priceRanges = ["All", "Under $100", "$100 - $200", "$200 - $300", "Over $300"];
const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Top Rated"];

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "All" && selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedPrice !== "All") {
      result = result.filter((p) => {
        if (selectedPrice === "Under $100") return p.price < 100;
        if (selectedPrice === "$100 - $200") return p.price >= 100 && p.price <= 200;
        if (selectedPrice === "$200 - $300") return p.price >= 200 && p.price <= 300;
        if (selectedPrice === "Over $300") return p.price > 300;
        return true;
      });
    }
    if (sort === "Price: Low to High") result.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") result.sort((a, b) => b.price - a.price);
    if (sort === "Top Rated") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [selectedCategory, selectedPrice, sort]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container-main px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Shop</span>
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Shop All</h1>
            <p className="text-muted-foreground text-sm mt-1">{filtered.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-md px-3 py-2 hover:border-secondary transition-colors"
            >
              <SlidersHorizontal size={16} /> Filters
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm bg-background border border-border rounded-md px-3 py-2 focus:outline-none focus:border-secondary"
              >
                {sortOptions.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${filtersOpen ? "fixed inset-0 z-50 bg-background p-6 overflow-y-auto" : "hidden"} lg:block lg:static lg:w-56 shrink-0`}>
            <div className="flex items-center justify-between lg:hidden mb-6">
              <h2 className="font-display text-xl font-bold">Filters</h2>
              <button onClick={() => setFiltersOpen(false)}><X size={20} /></button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Category</h3>
                <ul className="space-y-2">
                  {categoryOptions.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => setSelectedCategory(c)}
                        className={`text-sm transition-colors ${selectedCategory === c ? "text-secondary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Price</h3>
                <ul className="space-y-2">
                  {priceRanges.map((p) => (
                    <li key={p}>
                      <button
                        onClick={() => setSelectedPrice(p)}
                        className={`text-sm transition-colors ${selectedPrice === p ? "text-secondary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                      >
                        {p}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Rating</h3>
                <ul className="space-y-2">
                  {[4, 3, 2].map((r) => (
                    <li key={r} className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={12} className={i < r ? "fill-primary text-primary" : "text-border"} />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">& up</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setFiltersOpen(false)}
              className="lg:hidden mt-8 w-full btn-primary text-sm"
            >
              Show {filtered.length} results
            </button>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedPrice("All"); }}
                  className="text-secondary text-sm font-medium mt-2 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
