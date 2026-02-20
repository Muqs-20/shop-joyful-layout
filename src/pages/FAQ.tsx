import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "Orders & Shipping",
    items: [
      { q: "How long does shipping take?", a: "Standard shipping takes 3–5 business days within the US. Express shipping (1–2 business days) is available at checkout for an additional fee." },
      { q: "Do you offer free shipping?", a: "Yes! We offer free standard shipping on all orders over $75. International orders qualify for free shipping above $150." },
      { q: "Can I track my order?", a: "Absolutely. Once your order ships, you'll receive a confirmation email with a tracking number. You can also view your order status in your account dashboard." },
      { q: "Do you ship internationally?", a: "Yes, we ship to over 15 countries worldwide. International orders typically arrive within 7–14 business days depending on your location and customs processing." },
    ],
  },
  {
    category: "Returns & Exchanges",
    items: [
      { q: "What is your return policy?", a: "We offer free returns within 30 days of purchase. Items must be unworn, unwashed, and have all original tags attached. Sale items are final sale." },
      { q: "How do I start a return?", a: "Log into your account, go to your order history, and select 'Return Item.' You'll receive a prepaid shipping label via email within 24 hours." },
      { q: "Can I exchange an item for a different size?", a: "Yes! You can request an exchange for a different size or color through your account. We'll ship the new item as soon as we receive your return." },
      { q: "When will I receive my refund?", a: "Refunds are processed within 3–5 business days after we receive your return. The credit will appear on your original payment method within 1–2 billing cycles." },
    ],
  },
  {
    category: "Products & Sizing",
    items: [
      { q: "How do I find my size?", a: "Each product page includes a detailed size guide with measurements. We recommend measuring yourself and comparing to our charts for the best fit." },
      { q: "Are your products true to size?", a: "Most of our items are true to size. However, some styles may run slightly small or large — we note this in the product description when applicable." },
      { q: "What materials do you use?", a: "We prioritize premium, sustainable materials including organic cotton, recycled polyester, and responsibly sourced wool. Material details are listed on every product page." },
      { q: "How should I care for my items?", a: "Care instructions are included on the label of each garment and on the product page. Generally, we recommend cold washing and air drying to extend the life of your pieces." },
    ],
  },
  {
    category: "Account & Payment",
    items: [
      { q: "Do I need an account to place an order?", a: "No, you can check out as a guest. However, creating an account lets you track orders, save favorites, and enjoy a faster checkout experience." },
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay." },
      { q: "Is my payment information secure?", a: "Yes. We use industry-standard SSL encryption and never store your full credit card details on our servers. All transactions are processed through secure, PCI-compliant payment providers." },
    ],
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="section-padding bg-muted/50">
      <div className="container-main text-center max-w-3xl mx-auto">
        <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-4">Support</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Find answers to our most common questions below. Can't find what you're looking for? Feel free to contact us.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main max-w-3xl mx-auto space-y-10">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="font-display text-xl font-bold text-foreground mb-4">{section.category}</h2>
            <Accordion type="single" collapsible className="border rounded-lg">
              {section.items.map((faq, i) => (
                <AccordionItem key={i} value={`${section.category}-${i}`} className="px-6">
                  <AccordionTrigger className="text-sm text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default FAQ;
