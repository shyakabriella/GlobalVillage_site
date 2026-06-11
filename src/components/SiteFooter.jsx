import { Link } from "react-router-dom";
import { BRAND, BRAND_SHORT } from "./SiteNav";
import { MapPin, Phone, Mail, Share2, Globe, MessageSquare } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="container py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="font-display text-3xl mb-4">
            {BRAND_SHORT}<span className="text-gold">.</span>
          </div>
          <p className="text-cream/60 leading-relaxed text-sm mb-6">
            A place where everyone feels welcomed, cared for, and truly at home.
            Inspired by Dana — from the banks of the Nile to the hills of Kigali.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-cream/40 hover:text-gold transition">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/40 hover:text-gold transition">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-cream/40 hover:text-gold transition">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Explore</h3>
          <ul className="space-y-3 text-sm text-cream/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/rooms", label: "Rooms & Suites" },
              { to: "/experiences", label: "Experiences" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>KG 7 Ave, Kigali, Rwanda</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>+250 788 000 000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>stay@danakigali.rw</span>
            </li>
          </ul>
        </div>

        {/* Legal / Policy */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">Policies</h3>
          <ul className="space-y-3 text-sm text-cream/70">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms-conditions", label: "Terms & Conditions" },
              { to: "/cancellation-policy", label: "Cancellation Policy" },
              { to: "/cookie-policy", label: "Cookie Policy" },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p>Crafted with care in Kigali, Rwanda.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
