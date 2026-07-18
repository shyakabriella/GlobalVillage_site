import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Clock,
  ExternalLink,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SiteNav, {
  BRAND,
} from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

const hero = "/glb.jpg";
const locationImage = "/glbside.jpg";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "KK 177 St, Kanombe",
      "Kigali, Rwanda",
    ],
    href:
      "https://www.google.com/maps/search/?api=1&query=KK+177+St+Kanombe+Kigali+Rwanda",
    action: "Open Map",
  },
  {
    icon: Phone,
    title: "Primary Contact",
    lines: [
      "+250 786 063 441",
      "Phone and WhatsApp",
    ],
    href: "tel:+250786063441",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "Alternative Contacts",
    lines: [
      "+250 795 595 608",
      "+250 788 836 308",
    ],
    href: "https://wa.me/250795595608",
    action: "Send WhatsApp",
  },
  {
    icon: Globe2,
    title: "Online",
    lines: [
      "Website: gva.rw",
      "@globalvillageapartments",
    ],
    href: "https://gva.rw",
    action: "Visit Website",
  },
];

const contactChannels = [
  {
    label: "Primary WhatsApp",
    value: "+250 786 063 441",
  },
  {
    label: "Immediate Booking",
    value: "+250 788 800 403",
  },
  {
    label: "Instagram",
    value: "@globalvillageapartments",
  },
  {
    label: "Booking Platforms",
    value: "Booking.com and Agoda",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] =
    useState(initialForm);

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = [
      form.firstName,
      form.lastName,
    ]
      .filter(Boolean)
      .join(" ");

    const whatsappMessage = [
      "Hello Globar Village Apartment,",
      "",
      `Name: ${fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Subject: ${form.subject}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/250786063441?text=${
        encodeURIComponent(whatsappMessage)
      }`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes contactHeroEntrance {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes contactCardEntrance {
            from {
              opacity: 0;
              transform:
                translateY(25px)
                scale(0.97);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }

          @keyframes contactLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          @keyframes contactIconFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-6px);
            }
          }

          @keyframes contactLightMove {
            from {
              transform: translateX(-170%);
            }

            to {
              transform: translateX(270%);
            }
          }

          .contact-hero {
            animation:
              contactHeroEntrance 1s
              ease-out both;
          }

          .contact-card {
            opacity: 0;
            animation:
              contactCardEntrance 0.7s
              ease-out forwards;
          }

          .contact-line {
            animation:
              contactLineGrow 1s
              ease-out forwards;
          }

          .contact-icon {
            animation:
              contactIconFloat 4s
              ease-in-out infinite;
          }

          .contact-light {
            animation:
              contactLightMove 8s
              linear infinite;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .contact-hero,
            .contact-card,
            .contact-line,
            .contact-icon,
            .contact-light {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="bg-white text-black">
        <SiteNav />

        {/* Hero */}
        <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-black pb-16 pt-36 text-white">
          <div className="absolute inset-0">
            <img
              src={hero}
              alt={`${BRAND} contact`}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
          </div>

          <div className="contact-light pointer-events-none absolute bottom-0 top-0 w-48 -skew-x-12 bg-gradient-to-r from-transparent via-[#16AEE5]/10 to-transparent blur-xl" />

          <div className="container relative z-10">
            <div className="contact-hero max-w-4xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="contact-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Get in Touch
                </p>
              </div>

              <h1 className="mb-5 font-display text-4xl leading-tight md:text-6xl">
                Contact
                <span className="block italic text-[#16AEE5]">
                  Globar Village.
                </span>
              </h1>

              <p className="max-w-2xl leading-8 text-white/65">
                Contact our management team for
                reservations, availability, cancellations
                and apartment information.
              </p>

              <nav className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.15em]">
                <Link
                  to="/"
                  className="text-white/50 transition-colors hover:text-[#16AEE5]"
                >
                  Home
                </Link>

                <span className="text-[#16AEE5]">
                  /
                </span>

                <span>Contact</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#16AEE5] via-[#16AEE5]/60 to-transparent" />
        </section>

        {/* Contact cards */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

          <div className="container relative z-10">
            <Reveal className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-4">
                <div className="contact-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Reach Out
                </p>

                <div className="contact-line h-px bg-[#16AEE5]" />
              </div>

              <h2 className="mb-5 font-display text-3xl md:text-5xl">
                We are here
                <span className="italic text-[#16AEE5]">
                  {" "}for you.
                </span>
              </h2>

              <p className="mx-auto max-w-2xl leading-7 text-black/60">
                Call, send a WhatsApp message or visit the
                property in Kanombe, Kigali.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map(
                (
                  {
                    icon: Icon,
                    title,
                    lines,
                    href,
                    action,
                  },
                  index,
                ) => (
                  <Reveal
                    key={title}
                    delay={index * 100}
                  >
                    <article
                      className="contact-card group relative flex h-full flex-col overflow-hidden border border-black/10 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#16AEE5] hover:shadow-xl"
                      style={{
                        animationDelay: `${
                          index * 0.12
                        }s`,
                      }}
                    >
                      <div className="absolute left-0 top-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />

                      <div className="contact-icon mb-6 flex h-14 w-14 items-center justify-center bg-[#16AEE5]/10 transition-colors group-hover:bg-[#16AEE5]">
                        <Icon
                          className="h-7 w-7 text-[#16AEE5] transition-colors group-hover:text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3 className="mb-4 font-display text-xl">
                        {title}
                      </h3>

                      <div className="mb-6 flex-grow space-y-2">
                        {lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-6 text-black/55"
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      <a
                        href={href}
                        target={
                          href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#16AEE5] transition-colors hover:text-black"
                      >
                        {action}

                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Form and location */}
        <section className="bg-[#F4FBFE] py-20 md:py-24">
          <div className="container grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <Reveal>
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <div className="contact-line h-px bg-[#16AEE5]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                    Send a Message
                  </p>
                </div>

                <h2 className="mb-5 font-display text-3xl md:text-5xl">
                  Write to us.
                </h2>

                <p className="mb-9 max-w-lg leading-7 text-black/60">
                  Complete this form and your message will
                  open in WhatsApp, ready to send directly
                  to management.
                </p>

                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </Label>

                      <Input
                        id="firstName"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        required
                        className="h-12 rounded-none border-black/15 bg-white text-black focus-visible:ring-[#16AEE5]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </Label>

                      <Input
                        id="lastName"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        required
                        className="h-12 rounded-none border-black/15 bg-white text-black focus-visible:ring-[#16AEE5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      Email Address
                    </Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="h-12 rounded-none border-black/15 bg-white text-black focus-visible:ring-[#16AEE5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium"
                    >
                      Phone Number
                    </Label>

                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+250..."
                      className="h-12 rounded-none border-black/15 bg-white text-black focus-visible:ring-[#16AEE5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium"
                    >
                      Subject
                    </Label>

                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Booking, availability or inquiry"
                      required
                      className="h-12 rounded-none border-black/15 bg-white text-black focus-visible:ring-[#16AEE5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Message
                    </Label>

                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your stay, dates and number of guests..."
                      required
                      className="min-h-[160px] resize-y rounded-none border-black/15 bg-white text-black focus-visible:ring-[#16AEE5]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group h-12 rounded-none bg-black px-9 text-white hover:bg-[#16AEE5] hover:text-black"
                  >
                    <Send className="mr-2 h-4 w-4" />

                    Continue on WhatsApp

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* Location and channels */}
            <div className="space-y-9">
              <Reveal
                delay={120}
                animation="scale-in"
              >
                <div className="group relative h-[420px] overflow-hidden bg-black">
                  <img
                    src={locationImage}
                    alt={`${BRAND} in Kanombe, Kigali`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 bg-black/85 p-5 text-white backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 flex-none text-[#16AEE5]" />

                      <div>
                        <p className="font-semibold">
                          KK 177 St, Kanombe
                        </p>

                        <p className="mt-1 text-sm text-white/55">
                          Kigali, Rwanda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=KK+177+St+Kanombe+Kigali+Rwanda"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#16AEE5] hover:text-black"
                >
                  Open Location in Google Maps

                  <ExternalLink className="h-4 w-4" />
                </a>
              </Reveal>

              <Reveal delay={220}>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                    Contact Channels
                  </p>

                  <div className="divide-y divide-black/10 border-y border-black/10">
                    {contactChannels.map(
                      (channel) => (
                        <div
                          key={channel.label}
                          className="flex flex-col justify-between gap-2 py-4 sm:flex-row"
                        >
                          <span className="text-sm text-black/55">
                            {channel.label}
                          </span>

                          <span className="text-sm font-semibold text-black">
                            {channel.value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="relative overflow-hidden bg-black py-16 text-center text-white md:py-20">
          <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#16AEE5]/15 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#16AEE5]/15 blur-3xl" />

          <Reveal className="container relative z-10 mx-auto max-w-3xl">
            <div className="contact-icon mx-auto mb-6 flex h-16 w-16 items-center justify-center border border-[#16AEE5]">
              <MessageCircle className="h-8 w-8 text-[#16AEE5]" />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
              Instant Messaging
            </p>

            <h2 className="mb-6 font-display text-3xl md:text-5xl">
              Prefer to chat on
              <span className="italic text-[#16AEE5]">
                {" "}WhatsApp?
              </span>
            </h2>

            <p className="mx-auto mb-9 max-w-xl leading-7 text-white/60">
              Contact the management team directly for
              quick booking and availability support.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-[#16AEE5] px-9 text-black hover:bg-white"
              >
                <a
                  href="https://wa.me/250786063441"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />

                  Chat on WhatsApp
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/50 bg-transparent px-9 text-white hover:bg-white hover:text-black"
              >
                <Link to="/rooms">
                  View Rooms
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default Contact;
