import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface TrackingResult {
  orderId: string;
  status: "processing" | "shipped" | "in_transit" | "delivered";
  estimatedDelivery: string;
  items: number;
  carrier: string;
  lastUpdate: string;
  timeline: { label: string; date: string; completed: boolean; icon: React.ElementType }[];
}

const mockTracking: Record<string, TrackingResult> = {
  "ORD-12345": {
    orderId: "ORD-12345",
    status: "in_transit",
    estimatedDelivery: "Feb 22, 2026",
    items: 3,
    carrier: "FedEx",
    lastUpdate: "Package arrived at local distribution center",
    timeline: [
      { label: "Order Placed", date: "Feb 17, 2026", completed: true, icon: Package },
      { label: "Processing", date: "Feb 17, 2026", completed: true, icon: Clock },
      { label: "Shipped", date: "Feb 18, 2026", completed: true, icon: Truck },
      { label: "In Transit", date: "Feb 19, 2026", completed: true, icon: MapPin },
      { label: "Delivered", date: "Est. Feb 22", completed: false, icon: CheckCircle },
    ],
  },
  "ORD-67890": {
    orderId: "ORD-67890",
    status: "delivered",
    estimatedDelivery: "Feb 15, 2026",
    items: 1,
    carrier: "UPS",
    lastUpdate: "Delivered — left at front door",
    timeline: [
      { label: "Order Placed", date: "Feb 10, 2026", completed: true, icon: Package },
      { label: "Processing", date: "Feb 10, 2026", completed: true, icon: Clock },
      { label: "Shipped", date: "Feb 11, 2026", completed: true, icon: Truck },
      { label: "In Transit", date: "Feb 12, 2026", completed: true, icon: MapPin },
      { label: "Delivered", date: "Feb 15, 2026", completed: true, icon: CheckCircle },
    ],
  },
};

const statusColors: Record<string, string> = {
  processing: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  in_transit: "bg-secondary/10 text-secondary",
  delivered: "bg-green-100 text-green-700",
};

const statusLabels: Record<string, string> = {
  processing: "Processing",
  shipped: "Shipped",
  in_transit: "In Transit",
  delivered: "Delivered",
};

const OrderTracking = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = () => {
    const trimmed = query.trim().toUpperCase();
    if (!trimmed) {
      toast.error("Please enter an order number");
      return;
    }
    setSearched(true);
    const found = mockTracking[trimmed] || null;
    setResult(found);
    if (!found) {
      toast.error("Order not found. Try ORD-12345 or ORD-67890 for a demo.");
    }
  };

  const progressValue = result
    ? (result.timeline.filter((t) => t.completed).length / result.timeline.length) * 100
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="section-padding bg-muted/50">
        <div className="container-main text-center max-w-3xl mx-auto">
          <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-4">Track</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Order <span className="text-primary">Tracking</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Enter your order number to see real-time updates on your shipment.
          </p>

          {/* Search */}
          <div className="flex gap-3 max-w-md mx-auto">
            <Input
              placeholder="e.g. ORD-12345"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              className="text-center"
            />
            <Button onClick={handleTrack} className="gap-2">
              <Search size={16} /> Track
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Demo IDs: <span className="font-mono text-foreground">ORD-12345</span> · <span className="font-mono text-foreground">ORD-67890</span>
          </p>
        </div>
      </section>

      {/* Result */}
      <section className="section-padding">
        <div className="container-main max-w-3xl mx-auto">
          {searched && !result && (
            <div className="text-center py-16">
              <Package className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Order Not Found</h2>
              <p className="text-muted-foreground text-sm">
                We couldn't find that order. Please double-check the number and try again.
              </p>
            </div>
          )}

          {result && (
            <div className="space-y-8 animate-fade-in">
              {/* Summary Card */}
              <div className="border border-border rounded-lg p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Order</p>
                    <h2 className="font-display text-2xl font-bold text-foreground">{result.orderId}</h2>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[result.status]}`}>
                    {statusLabels[result.status]}
                  </span>
                </div>

                <Progress value={progressValue} className="h-2 mb-6" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Items</p>
                    <p className="font-medium text-foreground">{result.items}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Carrier</p>
                    <p className="font-medium text-foreground">{result.carrier}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Est. Delivery</p>
                    <p className="font-medium text-foreground">{result.estimatedDelivery}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">Last Update</p>
                    <p className="font-medium text-foreground">{result.lastUpdate}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Shipment Timeline</h3>
                <div className="space-y-0">
                  {result.timeline.map((step, i) => (
                    <div key={step.label} className="flex gap-4">
                      {/* Line + dot */}
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.completed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          <step.icon size={14} />
                        </div>
                        {i < result.timeline.length - 1 && (
                          <div className={`w-0.5 h-10 ${step.completed ? "bg-primary/30" : "bg-border"}`} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className={`text-sm font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help link */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm mb-3">Need help with your order?</p>
                <Button variant="outline" asChild>
                  <a href="/contact" className="gap-2">Contact Support <ArrowRight size={14} /></a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderTracking;
