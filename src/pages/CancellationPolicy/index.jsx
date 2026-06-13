import { Link } from "react-router-dom";
import SiteNav, { BRAND } from "@/components/SiteNav";

const CancellationPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <section className="relative h-[72vh] min-h-[520px] flex items-end bg-navy-deep">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="container relative z-10 pb-20 text-cream">
          <p className="text-gold tracking-[0.3em] text-sm mb-4">— CANCELLATION</p>
          <h1 className="font-display text-6xl md:text-8xl leading-tight">Cancellation Policy</h1>
          <nav className="mt-6 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span>Cancellation Policy</span>
          </nav>
        </div>
      </section>

      <section className="container py-32 space-y-10">
        <div className="max-w-4xl space-y-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We want your stay at DANA KIGALI HOTEL to be effortless. This page explains our cancellation terms, time frames, and refund guidelines.
          </p>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Standard Cancellation</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reservations may be cancelled up to 48 hours before arrival without any fee. Cancellations made after that period may incur charges, depending on the selected rate plan.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">No-Show Policy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you do not arrive on the scheduled check-in date and do not notify us in advance, the first night may be charged and any remaining nights may be cancelled.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl md:text-4xl">Refunds</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Refunds are issued to the original payment method within 7-10 business days after cancellation, when applicable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;
