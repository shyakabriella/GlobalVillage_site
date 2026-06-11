import { Link } from "react-router-dom";
import SiteNav, { BRAND } from "@/components/SiteNav";

const TermsConditions = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <section className="relative h-[72vh] min-h-[520px] flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="container relative z-10 pb-20 text-cream">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— TERMS</p>
          <h1 className="font-display text-6xl md:text-8xl leading-tight">Terms &amp; Conditions</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span>Terms &amp; Conditions</span>
          </nav>
        </div>
      </section>

      <section className="container py-32 space-y-10">
        <div className="max-w-4xl space-y-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            These terms govern your use of the DANA KIGALI HOTEL website. By accessing our site, you agree to these conditions and accept responsibility for compliance with all applicable laws.
          </p>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Use of the Website</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You may use this website for lawful purposes only. Content is provided for informational purposes and may be updated without notice.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Reservations</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All room and service bookings are subject to availability and our booking policies. Prices and availability may change, and final confirmation is provided at checkout.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Intellectual Property</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All content on this site is protected by copyright and other intellectual property rights. Reproduction or redistribution is prohibited without prior written consent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
