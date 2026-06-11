import { Phone, MapPin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BRAND } from "./SiteNav";

const SiteFooter = () => (
  <footer id="contact" className="bg-navy-deep text-cream/80 py-20">
    <div className="container grid md:grid-cols-4 gap-12">
      <div>
        <a href="/" className="font-display text-2xl text-cream">{BRAND}<span className="text-gold">.</span></a>
        <p className="mt-4 text-sm leading-relaxed">A welcoming home in Kigali, Rwanda, where kindness, family, and hospitality come first.</p>
      </div>
      <div>
        <h4 className="font-display text-cream text-lg mb-4">Visit</h4>
        <p className="flex items-start gap-2 text-sm"><MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />KG 7 Ave, Kigali, Rwanda</p>
      </div>
      <div>
        <h4 className="font-display text-cream text-lg mb-4">Contact</h4>
        <p className="flex items-center gap-2 text-sm mb-2"><Phone className="w-4 h-4 text-gold" />+250 788 000 000</p>
        <p className="flex items-center gap-2 text-sm"><Mail className="w-4 h-4 text-gold" />stay@danakigali.rw</p>
      </div>
      <div>
        <h4 className="font-display text-cream text-lg mb-4">Newsletter</h4>
        <div className="flex">
          <Input placeholder="Your email" className="rounded-none bg-transparent border-cream/20 text-cream" />
          <Button className="rounded-none bg-gold hover:bg-gold-light text-navy-deep">Join</Button>
        </div>
      </div>
    </div>
    <div className="container mt-16 pt-8 border-t border-cream/10 text-xs text-cream/50 text-center">
      © {new Date().getFullYear()} {BRAND}. An original design.
    </div>
  </footer>
);

export default SiteFooter;
