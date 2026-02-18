import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly, such as your name, email address, shipping address, and payment details when you create an account or place an order. We also automatically collect certain data when you visit our site, including your IP address, browser type, device information, and browsing behavior through cookies and similar technologies.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your personal information to process and fulfill orders, communicate with you about your purchases, improve our website and services, send promotional communications (with your consent), prevent fraud, and comply with legal obligations. We never sell your personal data to third parties.`,
  },
  {
    title: "Sharing Your Information",
    content: `We share your information only with trusted third parties who assist us in operating our business: payment processors to complete transactions, shipping carriers to deliver your orders, and analytics providers to help us understand site usage. All partners are bound by strict data protection agreements.`,
  },
  {
    title: "Cookies & Tracking",
    content: `We use cookies and similar technologies to remember your preferences, keep items in your cart, analyze site traffic, and personalize your experience. You can manage cookie preferences through your browser settings. Disabling cookies may affect some site functionality.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits. While no system is completely secure, we take every reasonable precaution to protect your personal information from unauthorized access, alteration, or destruction.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or delete your personal data at any time. You can update your account information directly or contact us to request data deletion. You may also opt out of marketing emails by clicking the unsubscribe link in any promotional message. If you're in the EU, you have additional rights under GDPR including data portability and the right to lodge a complaint with a supervisory authority.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. We encourage you to review this page periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@luxe.com or write to us at LUXE, 123 Fashion Ave, New York, NY 10001.`,
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="section-padding bg-muted/50">
      <div className="container-main text-center max-w-3xl mx-auto">
        <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-4">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-muted-foreground text-sm">Last updated: February 18, 2026</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main max-w-3xl mx-auto space-y-10">
        <p className="text-muted-foreground leading-relaxed">
          At LUXE, we value your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your data when you visit our
          website or make a purchase.
        </p>

        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">
              {i + 1}. {s.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.content}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default PrivacyPolicy;
