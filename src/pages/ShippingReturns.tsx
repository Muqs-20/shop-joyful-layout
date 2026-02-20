import { Truck, RotateCcw, Clock, Shield, Package, CreditCard, MapPin, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const shippingOptions = [
  { method: "Standard Shipping", time: "3–5 business days", cost: "Free over $75", icon: Truck },
  { method: "Express Shipping", time: "1–2 business days", cost: "$12.99", icon: Clock },
  { method: "International Shipping", time: "7–14 business days", cost: "Free over $150", icon: MapPin },
];

const returnSteps = [
  { step: "1", title: "Start Your Return", description: "Log into your account and navigate to your order history. Select the item you'd like to return and choose a reason." },
  { step: "2", title: "Print Your Label", description: "You'll receive a prepaid shipping label via email within 24 hours. Print it and attach it to your package." },
  { step: "3", title: "Ship It Back", description: "Drop off your package at any authorized carrier location. You'll receive tracking updates via email." },
  { step: "4", title: "Get Your Refund", description: "Once we receive and inspect your return, your refund will be processed within 3–5 business days." },
];

const policies = [
  { icon: Clock, title: "30-Day Window", description: "Return any item within 30 days of delivery for a full refund." },
  { icon: Shield, title: "Free Returns", description: "We cover return shipping costs on all domestic orders." },
  { icon: CreditCard, title: "Fast Refunds", description: "Refunds processed within 3–5 business days of receiving your return." },
  { icon: Package, title: "Easy Exchanges", description: "Swap for a different size or color — we'll ship the new item as soon as we get your return." },
];

const ShippingReturns = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-padding bg-muted/50">
      <div className="container-main text-center max-w-3xl mx-auto">
        <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-4">Policies</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Shipping & <span className="text-primary">Returns</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We want you to love every purchase. Learn about our shipping options and hassle-free return process below.
        </p>
      </div>
    </section>

    {/* Tabs */}
    <section className="section-padding">
      <div className="container-main max-w-4xl mx-auto">
        <Tabs defaultValue="shipping" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger value="shipping" className="text-sm font-medium">Shipping</TabsTrigger>
            <TabsTrigger value="returns" className="text-sm font-medium">Returns & Exchanges</TabsTrigger>
          </TabsList>

          {/* Shipping Tab */}
          <TabsContent value="shipping" className="space-y-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {shippingOptions.map((opt) => (
                <div key={opt.method} className="border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                  <opt.icon className="mx-auto mb-4 text-primary" size={28} />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{opt.method}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{opt.time}</p>
                  <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">{opt.cost}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground">Shipping Details</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>Orders placed before 2 PM EST ship the same business day.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>Tracking information is emailed once your order has shipped.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>International orders may be subject to customs duties and taxes.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>We currently ship to over 15 countries worldwide.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>PO Boxes and military addresses (APO/FPO) are supported for domestic orders.</li>
              </ul>
            </div>
          </TabsContent>

          {/* Returns Tab */}
          <TabsContent value="returns" className="space-y-10">
            {/* Policy highlights */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {policies.map((p) => (
                <div key={p.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <p.icon className="text-primary" size={20} />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">How Returns Work</h3>
              <div className="space-y-6">
                {returnSteps.map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">{s.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exceptions */}
            <div className="bg-muted/50 rounded-lg p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground">Return Exceptions</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>Sale and clearance items are final sale and cannot be returned.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>Items must be unworn, unwashed, and have all original tags attached.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>Swimwear and intimates are non-returnable for hygiene reasons.</li>
                <li className="flex gap-3"><span className="text-primary font-bold">•</span>Gift cards are non-refundable.</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-12 text-center border-t border-border pt-10">
          <HelpCircle className="mx-auto mb-3 text-muted-foreground" size={28} />
          <p className="text-muted-foreground text-sm mb-4">Still have questions?</p>
          <Link to="/contact" className="btn-primary inline-block">Contact Support</Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ShippingReturns;
