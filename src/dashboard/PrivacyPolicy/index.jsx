import { Link } from "react-router-dom";
import SiteNav, { BRAND } from "@/components/SiteNav";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <section className="relative h-[72vh] min-h-[520px] flex items-end bg-navy-deep">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="container relative z-10 pb-20 text-cream">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— PRIVACY</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight">Privacy Policy</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>
        </div>
      </section>

      <section className="container py-32 space-y-10">
        <div className="max-w-4xl space-y-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At {BRAND}, we respect your privacy and are committed to protecting the personal information you share with us. This policy explains how we collect, use, and safeguard your data when you visit our website.
          </p>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Information We Collect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We may collect information that you provide directly, such as reservation inquiries, newsletter sign-ups, or customer support requests. We also gather technical data automatically, including browser type and session details, to improve the site experience.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">How We Use Data</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your information is used to respond to requests, deliver services, and communicate important updates. We do not sell your personal data, and we use appropriate safeguards to keep it secure.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Cookies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to personalize your experience and analyze site performance. You can manage browser settings to control cookie usage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
