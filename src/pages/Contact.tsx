import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@luxe.com", href: "mailto:hello@luxe.com" },
  { icon: Phone, label: "Phone", value: "+1 (800) 555-LUXE", href: "tel:+18005555893" },
  { icon: MapPin, label: "Address", value: "123 Fashion Ave, New York, NY 10001" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9am–6pm EST" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding bg-muted/50">
        <div className="container-main text-center max-w-3xl mx-auto">
          <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            We'd Love to <span className="text-primary">Hear</span> from You
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a question about an order, need styling advice, or just want to say hello? We're here to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us more..."
              />
            </div>
            <button type="submit" className="btn-primary inline-flex items-center gap-2 text-sm">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-main max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is your return policy?", a: "We offer free returns within 30 days of purchase. Items must be unworn with tags attached." },
              { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout." },
              { q: "Do you ship internationally?", a: "Yes! We ship to over 15 countries worldwide. International orders typically arrive in 7-14 business days." },
              { q: "How do I track my order?", a: "Once your order ships, you'll receive a tracking number via email. You can also check your order status in your account." },
            ].map((faq) => (
              <details key={faq.q} className="bg-card border border-border rounded-lg group">
                <summary className="px-6 py-4 cursor-pointer text-sm font-medium text-foreground hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-lg">+</span>
                </summary>
                <p className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
