import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import { cn } from "../lib/utils";

export const BRAND = "Global VILLAGE APRTMENT LTD";
export const BRAND_SHORT = "Global VILLAGE";

const PHONE_DISPLAY = "+250 786 063 441";
const PHONE_LINK = "+250786063441";
const WHATSAPP_LINK = "https://wa.me/250786063441";
const LOCATION_LINK =
  "https://www.google.com/maps/search/?api=1&query=KK+177+St+Kanombe+Kigali+Rwanda";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Apartments" },
  { to: "/experiences", label: "Experiences" },
  { to: "/contact", label: "Contact" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setVisible(true);
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    const onToggleMenu = () => {
      setOpen((currentOpen) => !currentOpen);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener(
      "toggle-mobile-menu",
      onToggleMenu,
    );

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(
        "toggle-mobile-menu",
        onToggleMenu,
      );
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-700 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-5 opacity-0",
        scrolled && "shadow-[0_10px_35px_rgba(0,0,0,0.10)]",
      )}
    >
      {/* Contact information bar */}
      <div
        className={cn(
          "overflow-hidden bg-black text-white",
          "transition-all duration-500",
          scrolled
            ? "max-h-0 border-b-0 opacity-0"
            : "max-h-14 border-b border-white/10 opacity-100",
        )}
      >
        <div className="container flex min-h-10 items-center justify-between gap-5 py-2 text-[11px]">
          <div className="flex min-w-0 items-center gap-5">
            <a
              href={LOCATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 transition-colors hover:text-[#16AEE5] sm:flex"
            >
              <MapPin
                className="h-3.5 w-3.5 shrink-0 text-[#16AEE5] transition-transform group-hover:scale-110"
                strokeWidth={1.8}
              />

              <span className="truncate">
                KK 177 St, Kanombe, Kigali, Rwanda
              </span>
            </a>

            <div className="hidden items-center gap-2 text-white/75 lg:flex">
              <Clock3
                className="h-3.5 w-3.5 text-[#16AEE5]"
                strokeWidth={1.8}
              />

              <span>Open daily · Guest support available</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <a
              href={`tel:${PHONE_LINK}`}
              className="group flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[#16AEE5]"
            >
              <Phone
                className="h-3.5 w-3.5 text-[#16AEE5] transition-transform group-hover:rotate-6"
                strokeWidth={1.8}
              />

              <span>{PHONE_DISPLAY}</span>
            </a>

            <span className="hidden h-4 w-px bg-white/20 sm:block" />

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 whitespace-nowrap transition-colors hover:text-[#16AEE5] sm:flex"
            >
              <MessageCircle
                className="h-3.5 w-3.5 text-[#16AEE5] transition-transform group-hover:scale-110"
                strokeWidth={1.8}
              />

              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-black/5 bg-white/95 text-black backdrop-blur-xl">
        <div
          className={cn(
            "container flex items-center justify-between",
            "transition-all duration-500",
            scrolled ? "py-2" : "py-3",
          )}
        >
          <Link
            to="/"
            aria-label={`${BRAND} home`}
            className="group flex items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo.png"
              alt={BRAND}
              className={cn(
                "w-auto object-contain",
                "transition-all duration-500 ease-out",
                "group-hover:scale-[1.03]",
                scrolled ? "h-14" : "h-[4.5rem]",
              )}
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={{
                  transitionDelay: `${index * 55}ms`,
                }}
                className={({ isActive }) =>
                  cn(
                    "group relative py-3",
                    "text-[12px] font-semibold uppercase tracking-[0.16em]",
                    "transition-all duration-300",
                    "hover:text-[#16AEE5]",
                    visible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0",
                    isActive
                      ? "text-[#16AEE5]"
                      : "text-black/75",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    <span
                      className={cn(
                        "absolute bottom-1 left-0 h-[2px] bg-[#16AEE5]",
                        "transition-all duration-300",
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={cn(
              "relative flex h-11 w-11 items-center justify-center md:hidden",
              "border transition-all duration-300",
              open
                ? "border-[#16AEE5] bg-[#16AEE5] text-black"
                : "border-black/15 bg-white text-black hover:border-[#16AEE5]",
            )}
            onClick={() => setOpen((currentOpen) => !currentOpen)}
          >
            <span
              className={cn(
                "absolute transition-all duration-300",
                open
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100",
              )}
            >
              <Menu className="h-5 w-5" />
            </span>

            <span
              className={cn(
                "absolute transition-all duration-300",
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0",
              )}
            >
              <X className="h-5 w-5" />
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden border-t bg-white md:hidden",
            "transition-all duration-500 ease-in-out",
            open
              ? "max-h-[520px] border-black/10 opacity-100"
              : "max-h-0 border-transparent opacity-0",
          )}
        >
          <nav
            aria-label="Mobile navigation"
            className="container flex flex-col py-5"
          >
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open
                    ? `${index * 60}ms`
                    : "0ms",
                }}
                className={({ isActive }) =>
                  cn(
                    "border-b border-black/10 px-1 py-4",
                    "text-xs font-semibold uppercase tracking-[0.2em]",
                    "transition-all duration-500",
                    open
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-5 opacity-0",
                    isActive
                      ? "border-l-2 border-l-[#16AEE5] pl-4 text-[#16AEE5]"
                      : "text-black/75 hover:pl-3 hover:text-[#16AEE5]",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div
              className={cn(
                "mt-5 grid gap-3 bg-black p-5 text-xs text-white",
                "transition-all delay-300 duration-500",
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center gap-3 transition-colors hover:text-[#16AEE5]"
              >
                <Phone className="h-4 w-4 text-[#16AEE5]" />
                {PHONE_DISPLAY}
              </a>

              <a
                href={LOCATION_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-[#16AEE5]"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#16AEE5]" />
                KK 177 St, Kanombe, Kigali
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[#16AEE5]"
              >
                <MessageCircle className="h-4 w-4 text-[#16AEE5]" />
                Contact us on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
