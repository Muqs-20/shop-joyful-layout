import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    toast.success("Order placed successfully! Thank you for your purchase.");
    clearCart();
  };

  const shipping = totalPrice >= 150 ? 0 : 12;
  const tax = +(totalPrice * 0.08).toFixed(2);
  const grandTotal = +(totalPrice + shipping + tax).toFixed(2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Cart</span>
        </div>
      </div>

      <section className="container-main px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground text-sm mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/products" className="btn-primary inline-flex items-center gap-2 text-sm">
              Continue Shopping <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 bg-card border border-border rounded-lg p-4">
                  <Link to={`/product/${item.product.id}`} className="w-24 h-28 rounded-md overflow-hidden shrink-0 bg-muted">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium text-sm text-foreground hover:text-primary transition-colors">
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.selectedSize && `Size: ${item.selectedSize}`}
                          {item.selectedSize && item.selectedColor && " · "}
                          {item.selectedColor && `Color: ${item.selectedColor}`}
                        </p>
                      </div>
                      <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Remove">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border rounded-md">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground">
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground">
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-semibold text-foreground">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="font-display text-lg font-semibold text-foreground mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-semibold text-foreground">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                {shipping === 0 && (
                  <div className="flex items-center gap-2 mt-4 text-xs text-secondary">
                    <Truck size={14} />
                    <span>You qualify for free shipping!</span>
                  </div>
                )}

                <button onClick={handleCheckout} className="btn-primary w-full mt-6 flex items-center justify-center gap-2 text-sm">
                  Place Order
                </button>

                <Link to="/products" className="block text-center text-sm text-secondary hover:underline mt-4">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
