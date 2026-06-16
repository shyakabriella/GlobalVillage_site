import { Link } from "react-router-dom";
import SiteNav, { BRAND } from "@/components/SiteNav";

const CookiePolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <section className="relative h-[72vh] min-h-[520px] flex items-end bg-navy-deep">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="container relative z-10 pb-20 text-cream">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— COOKIES</p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight">Cookie Policy</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span>Cookie Policy</span>
          </nav>
        </div>
      </section>

      <section className="container py-32 space-y-10">
        <div className="max-w-4xl space-y-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This policy explains how cookies and similar technologies are used on the DANA KIGALI HOTEL website to improve your experience and understand how guests interact with our pages.
          </p>
          <div className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl">What Are Cookies?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device that help the website remember settings, recognize returning visitors, and provide a smoother experience.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl">How We Use Cookies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use cookies for analytics, site performance, and basic site functionality. We do not use cookies to collect personally identifiable information without consent.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-2xl md:text-3xl">Managing Cookies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You can manage or disable cookies through your browser settings. Disabling cookies may affect some features of the site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
