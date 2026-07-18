import { Link } from "react-router-dom";
import {
  ExternalLink,
  Globe2,
  Camera,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { BRAND } from "./SiteNav";

const primaryPhone = "+250 786 063 441";

const contactNumbers = [
  {
    label: "Primary Phone / WhatsApp",
    display: "+250 786 063 441",
    phone: "+250786063441",
    whatsapp: "250786063441",
  },
  {
    label: "Alternative Contact",
    display: "+250 795 595 608",
    phone: "+250795595608",
    whatsapp: "250795595608",
  },
  {
    label: "Alternative Contact",
    display: "+250 788 836 308",
    phone: "+250788836308",
    whatsapp: "250788836308",
  },
  {
    label: "Immediate Booking Line",
    display: "+250 788 800 403",
    phone: "+250788800403",
    whatsapp: "250788800403",
  },
];

const bookingPlatforms = [
  {
    label: "Search on Booking.com",
    href:
      "https://www.booking.com/searchresults.html?ss=Global+Village+Apartment%2C+Kigali",
  },
  {
    label: "Search on Agoda",
    href:
      "https://www.agoda.com/search?textToSearch=Global%20Village%20Apartment%20Kigali",
  },
];

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Logo blue top line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#16AEE5] to-transparent" />

      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

      <div className="container relative z-10 py-16 md:py-20">
        {/* Main footer columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-4"
              aria-label="Global Village home"
            >
              <img
                src="/logo.png"
                alt={BRAND}
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              A fully furnished, flexible-stay apartment
              property in Kanombe, Kigali. Comfortable for
              business, leisure and extended stays.
            </p>

            <a
              href="https://wa.me/250786063441"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 bg-[#16AEE5] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white"
            >
              <MessageCircle className="h-5 w-5" />

              Chat on WhatsApp
            </a>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-6 font-display text-xl text-white">
              Visit Us
            </h4>

            <div className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-5 w-5 flex-none text-[#16AEE5]"
                strokeWidth={1.5}
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  KK 177 St, Kanombe
                </p>

                <p className="mt-1 text-sm text-white/55">
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-l-2 border-[#16AEE5] pl-4 text-sm leading-6 text-white/55">
              <p>
                Approximately 2 km from Kigali
                International Airport.
              </p>

              <p>
                About a 12-minute walk from the
                Presidential Palace Museum.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=KK+177+St+Kanombe+Kigali+Rwanda"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#16AEE5] transition-colors hover:text-white"
            >
              Open in Google Maps

              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-6 font-display text-xl text-white">
              Contact Management
            </h4>

            <div className="space-y-5">
              {contactNumbers.map((contact) => (
                <div
                  key={contact.phone}
                  className="group border-b border-white/10 pb-4"
                >
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#16AEE5]">
                    {contact.label}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#16AEE5]"
                    >
                      <Phone className="h-4 w-4 text-[#16AEE5]" />

                      {contact.display}
                    </a>

                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Message ${contact.display} on WhatsApp`}
                      className="flex h-7 w-7 items-center justify-center bg-white/10 text-[#16AEE5] transition-colors hover:bg-[#16AEE5] hover:text-black"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online booking */}
          <div>
            <h4 className="mb-6 font-display text-xl text-white">
              Book Online
            </h4>

            <p className="mb-5 text-sm leading-7 text-white/55">
              For availability, booking support and
              cancellation inquiries, contact management
              directly or use an online booking platform.
            </p>

            <div className="space-y-3">
              {bookingPlatforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-white/15 px-4 py-3 text-sm text-white/70 transition-all hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black"
                >
                  {platform.label}

                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16AEE5]">
                Follow and Message Us
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/globalvillageapartments/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black"
                  aria-label="Instagram"
                >
                  <Camera className="h-5 w-5" />
                </a>

                <a
                  href="https://gva.rw"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black"
                  aria-label="GVA website"
                >
                  <Globe2 className="h-5 w-5" />
                </a>
              </div>

              <p className="mt-3 text-xs text-white/45">
                Instagram: @globalvillageapartments
              </p>
            </div>
          </div>
        </div>

        {/* Direct booking strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border border-white/10 bg-white/[0.04] px-6 py-6 md:flex-row md:px-8">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#16AEE5]">
              Need immediate booking assistance?
            </p>

            <p className="text-sm text-white/55">
              Call or send a WhatsApp message directly to
              the management team.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+250786063441"
              className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              <Phone className="h-4 w-4" />

              Call {primaryPhone}
            </a>

            <a
              href="https://wa.me/250786063441"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#16AEE5] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />

              WhatsApp Management
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-white/40 md:flex-row md:text-left">
          <p>
            © {currentYear} {BRAND}. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#16AEE5]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="transition-colors hover:text-[#16AEE5]"
            >
              Terms and Conditions
            </Link>

            <Link
              to="/cancellation-policy"
              className="transition-colors hover:text-[#16AEE5]"
            >
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
