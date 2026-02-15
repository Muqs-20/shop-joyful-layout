export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  colors?: string[];
  sizes?: string[];
  description?: string;
  specs?: Record<string, string>;
  images?: string[];
  badge?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export const categories: Category[] = [
  { id: 1, name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", count: 142 },
  { id: 2, name: "Tops & Blouses", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop", count: 98 },
  { id: 3, name: "Outerwear", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop", count: 67 },
  { id: 4, name: "Accessories", image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=400&h=500&fit=crop", count: 215 },
];

export const products: Product[] = [
  {
    id: 1, name: "Silk Midi Dress", price: 189, originalPrice: 249, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    rating: 4.8, reviews: 124, category: "Dresses", colors: ["#1a1a2e", "#cd1a76", "#f5f0e8"], sizes: ["XS", "S", "M", "L", "XL"], badge: "Best Seller",
    description: "Luxurious silk midi dress with a flattering A-line silhouette. Features a V-neckline and adjustable waist tie for a perfect fit.",
    specs: { Material: "100% Mulberry Silk", Care: "Dry Clean Only", Fit: "Regular", Length: "Midi" },
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=750&fit=crop",
    ],
  },
  {
    id: 2, name: "Cashmere Knit Sweater", price: 145, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    rating: 4.6, reviews: 89, category: "Tops & Blouses", colors: ["#f5f0e8", "#c4a882", "#2664ae"], sizes: ["S", "M", "L"],
    description: "Ultra-soft cashmere blend sweater with ribbed cuffs and hem.",
    specs: { Material: "70% Cashmere, 30% Wool", Care: "Hand Wash", Fit: "Relaxed" },
  },
  {
    id: 3, name: "Leather Tote Bag", price: 220, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop",
    rating: 4.9, reviews: 203, category: "Accessories", colors: ["#1a1a2e", "#8b6f47"], sizes: [],
    description: "Handcrafted Italian leather tote with brass hardware.",
    specs: { Material: "Full-grain Italian Leather", Dimensions: '14" x 12" x 5"' }, badge: "New",
  },
  {
    id: 4, name: "Tailored Wool Blazer", price: 295, originalPrice: 380, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    rating: 4.7, reviews: 56, category: "Outerwear", colors: ["#1a1a2e", "#4a4a5a"], sizes: ["XS", "S", "M", "L"],
    description: "Impeccably tailored wool blazer with a modern slim fit.",
    specs: { Material: "Italian Wool Blend", Lining: "Silk", Fit: "Slim" },
  },
  {
    id: 5, name: "Satin Wrap Top", price: 95, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop",
    rating: 4.5, reviews: 167, category: "Tops & Blouses", colors: ["#cd1a76", "#f5f0e8", "#1a1a2e"], sizes: ["XS", "S", "M", "L", "XL"],
    description: "Elegant satin wrap top with self-tie closure.",
    specs: { Material: "Satin Polyester", Care: "Machine Wash Cold", Fit: "Regular" },
  },
  {
    id: 6, name: "Gold Chain Necklace", price: 68, image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=400&h=500&fit=crop",
    rating: 4.4, reviews: 312, category: "Accessories", colors: ["#c4a882"], sizes: [],
    description: "Dainty layered gold chain necklace with pendant detail.",
    specs: { Material: "18K Gold Plated", Length: '16" + 2" extender' },
  },
  {
    id: 7, name: "Floral Maxi Dress", price: 165, originalPrice: 210, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    rating: 4.6, reviews: 78, category: "Dresses", colors: ["#f5f0e8"], sizes: ["S", "M", "L", "XL"], badge: "Sale",
    description: "Flowing floral maxi dress perfect for any occasion.",
    specs: { Material: "Chiffon", Care: "Hand Wash", Fit: "Loose" },
  },
  {
    id: 8, name: "Trench Coat", price: 340, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
    rating: 4.8, reviews: 45, category: "Outerwear", colors: ["#c4a882", "#1a1a2e"], sizes: ["XS", "S", "M", "L"],
    description: "Classic double-breasted trench coat in water-resistant cotton.",
    specs: { Material: "Cotton Gabardine", Water: "Resistant", Fit: "Regular" },
  },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Sarah M.", avatar: "S", text: "The quality is incredible. Every piece I've ordered has exceeded my expectations. The silk dress is now my go-to for events!", rating: 5 },
  { id: 2, name: "Emma K.", avatar: "E", text: "Fast shipping and beautiful packaging. The cashmere sweater is unbelievably soft. Will definitely be ordering more.", rating: 5 },
  { id: 3, name: "Lisa R.", avatar: "L", text: "Finally found a brand that combines style with quality. The leather tote is worth every penny — it's stunning in person.", rating: 4 },
];
