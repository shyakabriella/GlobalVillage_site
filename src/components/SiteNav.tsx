import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BRAND = "DANA KIGALI HOTEL";
export const BRAND_SHORT = "DANA";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/experiences", label: "Experiences" },
  { to: "/contact", label: "Contact" },
];

const SiteNav = ({ variant = "overlay" }: { variant?: "overlay" | "solid" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = variant === "solid" || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isSolid
          ? "bg-navy-deep/95 backdrop-blur-md text-cream shadow-[0_8px_30px_-12px_hsl(215_45%_9%/0.4)]"
          : "bg-transparent text-cream"
      )}
    >
      <div className={cn("container flex items-center justify-between transition-all duration-500", isSolid ? "py-4" : "py-6")}>
        <Link to="/" className="font-display text-2xl tracking-wide" onClick={() => setOpen(false)}>
          {BRAND_SHORT}<span className="text-gold">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => cn("hover:text-gold transition", isActive && "text-gold")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button className="hidden sm:inline-flex bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-none px-6">
            Book Now
          </Button>
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-cream"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-navy-deep/95 backdrop-blur-md transition-[max-height] duration-500",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col py-6 gap-4 text-cream">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => cn("text-sm uppercase tracking-[0.2em] hover:text-gold transition", isActive && "text-gold")}
            >
              {l.label}
            </NavLink>
          ))}
          <Button className="sm:hidden bg-gold hover:bg-gold-light text-navy-deep font-semibold rounded-none px-6 w-fit">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
