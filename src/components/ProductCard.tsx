import { Star, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="card-product group block">
    <div className="relative overflow-hidden aspect-[4/5] bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {product.badge && (
        <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
          product.badge === "Sale" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        }`}>
          {product.badge}
        </span>
      )}
      <button
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        onClick={(e) => { e.preventDefault(); }}
        aria-label="Add to wishlist"
      >
        <Heart size={14} className="text-foreground" />
      </button>
      <button
        className="absolute bottom-3 left-3 right-3 btn-primary text-sm py-2.5 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2"
        onClick={(e) => { e.preventDefault(); }}
      >
        <ShoppingBag size={14} />
        Add to Cart
      </button>
    </div>
    <div className="p-4">
      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
      <h3 className="font-body font-medium text-sm text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"} />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">({product.reviews})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">${product.price}</span>
        {product.originalPrice && (
          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
