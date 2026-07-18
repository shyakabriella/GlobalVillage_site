import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  Clock3,
  CookingPot,
  Home,
  Languages,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SiteNav, {
  BRAND,
} from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

const images = {
  hero: "/glb.jpg",
  building: "/glbside.jpg",
  rooftop: "/glbrooftop.jpg",
  room: "/room.jpg",
  roomOne: "/room1.jpg",
  roomTwo: "/room2.jpg",
  bar: "/bar.jpg",
};

const propertyStats = [
  {
    icon: BedDouble,
    value: "20",
    label: "Bedrooms",
  },
  {
    icon: Bath,
    value: "20",
    label: "Bathrooms",
  },
  {
    icon: Home,
    value: "22",
    label: "Beds",
  },
  {
    icon: Plane,
    value: "2 km",
    label: "From the Airport",
  },
];

const values = [
  {
    icon: Home,
    title: "Fully Furnished",
    text:
      "Contemporary rooms and spacious living areas designed for comfortable daily living.",
  },
  {
    icon: Clock3,
    title: "Flexible Stays",
    text:
      "Suitable for business trips, holidays, short visits and extended stays.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy and Security",
    text:
      "A secure and private property where guests can relax with confidence.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    text:
      "Reliable high-speed internet is available throughout the property.",
  },
  {
    icon: CookingPot,
    title: "Modern Kitchen",
    text:
      "Prepare and store your food conveniently in a private kitchen.",
  },
  {
    icon: Sparkles,
    title: "Wellness Facilities",
    text:
      "Relax with convenient sauna, pool and fitness facilities.",
  },
];

const propertyFeatures = [
  "Private balconies and terrace",
  "Garden and property views",
  "Private kitchen and washing machine",
  "Flat-screen television",
  "Free private parking",
  "On-site supermarket",
];

const locationPoints = [
  {
    title: "Kigali International Airport",
    description:
      "Approximately 2 kilometres from the property.",
  },
  {
    title: "Presidential Palace Museum",
    description:
      "Approximately a 12-minute walk away.",
  },
  {
    title: "Kigali City Centre",
    description:
      "Convenient road access to the city centre.",
  },
  {
    title: "Local Amenities",
    description:
      "Close to supermarkets, transport and daily services.",
  },
];

const About = () => {
  return (
    <>
      <style>
        {`
          @keyframes aboutHeroEntrance {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes aboutImageEntrance {
            from {
              opacity: 0;
              transform:
                translateX(40px)
                scale(0.97);
            }

            to {
              opacity: 1;
              transform:
                translateX(0)
                scale(1);
            }
          }

          @keyframes aboutCardEntrance {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes aboutLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          @keyframes aboutBadgeFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes aboutLightMove {
            from {
              transform: translateX(-180%);
            }

            to {
              transform: translateX(280%);
            }
          }

          .about-hero-content {
            animation:
              aboutHeroEntrance 1s
              ease-out both;
          }

          .about-image {
            animation:
              aboutImageEntrance 1s
              ease-out both;
          }

          .about-card {
            opacity: 0;
            animation:
              aboutCardEntrance 0.7s
              ease-out forwards;
          }

          .about-line {
            animation:
              aboutLineGrow 1s
              ease-out forwards;
          }

          .about-badge {
            animation:
              aboutBadgeFloat 4s
              ease-in-out infinite;
          }

          .about-light {
            animation:
              aboutLightMove 8s
              linear infinite;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .about-hero-content,
            .about-image,
            .about-card,
            .about-line,
            .about-badge,
            .about-light {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="bg-white text-black">
        <SiteNav />

        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-black pb-16 pt-36 text-white md:pb-20">
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt={`${BRAND} building`}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
          </div>

          <div className="about-light pointer-events-none absolute bottom-0 top-0 w-48 -skew-x-12 bg-gradient-to-r from-transparent via-[#16AEE5]/10 to-transparent blur-xl" />

          <div className="container relative z-10">
            <div className="about-hero-content max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="about-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Our Story
                </p>
              </div>

              <h1 className="mb-6 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
                About
                <span className="block italic text-[#16AEE5]">
                  Globar Village Apartment.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                Fully furnished apartments offering
                flexible, comfortable and convenient stays
                in Kigali, Rwanda.
              </p>

              <nav className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em]">
                <Link
                  to="/"
                  className="text-white/55 transition-colors hover:text-[#16AEE5]"
                >
                  Home
                </Link>

                <span className="text-[#16AEE5]">
                  /
                </span>

                <span className="text-white">
                  About
                </span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#16AEE5] via-[#16AEE5]/60 to-transparent" />
        </section>

        {/* Welcome and story */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

          <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <div className="about-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Welcome
                </p>
              </div>

              <h2 className="mb-7 font-display text-3xl leading-tight md:text-5xl">
                Comfort and convenience
                <span className="block italic text-[#16AEE5]">
                  in the heart of Kigali.
                </span>
              </h2>

              <div className="space-y-5 leading-8 text-black/65">
                <p>
                  <strong className="font-display text-xl text-black">
                    {BRAND}
                  </strong>{" "}
                  is a fully furnished, flexible-stay
                  apartment property in Kanombe, Kigali.
                </p>

                <p>
                  Our accommodation is suitable for
                  business travellers, families, leisure
                  visitors and guests planning extended
                  stays.
                </p>

                <p>
                  Guests enjoy comfortable rooms,
                  contemporary furnishings, spacious living
                  areas, private kitchens and outdoor spaces
                  with pleasant views.
                </p>
              </div>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {propertyFeatures.map(
                  (feature, index) => (
                    <li
                      key={feature}
                      className="about-card flex items-center gap-3"
                      style={{
                        animationDelay: `${
                          index * 0.1
                        }s`,
                      }}
                    >
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#16AEE5]/10">
                        <CheckCircle2 className="h-4 w-4 text-[#16AEE5]" />
                      </span>

                      <span className="text-sm text-black/65">
                        {feature}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </Reveal>

            <Reveal
              animation="scale-in"
              className="about-image relative"
            >
              <div className="absolute -bottom-5 -right-5 hidden h-full w-full border border-black/20 md:block" />

              <div className="relative z-10 flex h-[470px] items-center justify-center overflow-hidden bg-[#F4FBFE] p-2 shadow-2xl md:h-[620px]">
                <img
                  src={images.building}
                  alt={`${BRAND} exterior`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="about-badge absolute bottom-7 left-7 z-20 bg-black px-7 py-5 text-white shadow-2xl">
                <Building2 className="mb-3 h-7 w-7 text-[#16AEE5]" />

                <p className="font-display text-xl">
                  Flexible Living
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Short and extended stays
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Property statistics */}
        <section className="bg-black py-14 text-white">
          <div className="container grid grid-cols-2 gap-px bg-white/15 md:grid-cols-4">
            {propertyStats.map(
              (
                {
                  icon: Icon,
                  value,
                  label,
                },
                index,
              ) => (
                <Reveal
                  key={label}
                  delay={index * 90}
                  className="bg-black"
                >
                  <div className="group flex min-h-44 flex-col items-center justify-center p-6 text-center transition-colors duration-500 hover:bg-[#16AEE5]">
                    <Icon
                      className="mb-4 h-8 w-8 text-[#16AEE5] transition-colors group-hover:text-black"
                      strokeWidth={1.5}
                    />

                    <p className="font-display text-4xl text-white transition-colors group-hover:text-black">
                      {value}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors group-hover:text-black/60">
                      {label}
                    </p>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </section>

        {/* Values */}
        <section className="relative overflow-hidden bg-[#F4FBFE] py-20 md:py-24">
          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

          <div className="container relative z-10">
            <Reveal className="mx-auto mb-14 max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-4">
                <div className="about-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  What We Offer
                </p>

                <div className="about-line h-px bg-[#16AEE5]" />
              </div>

              <h2 className="mb-5 font-display text-3xl md:text-5xl">
                Designed around
                <span className="italic text-[#16AEE5]">
                  {" "}your stay.
                </span>
              </h2>

              <p className="mx-auto max-w-2xl leading-7 text-black/60">
                Modern facilities, flexible accommodation
                and dependable guest support.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(
                (
                  {
                    icon: Icon,
                    title,
                    text,
                  },
                  index,
                ) => (
                  <Reveal
                    key={title}
                    delay={index * 80}
                  >
                    <article
                      className="about-card group relative h-full overflow-hidden border border-black/10 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#16AEE5] hover:shadow-2xl"
                      style={{
                        animationDelay: `${
                          index * 0.1
                        }s`,
                      }}
                    >
                      <div className="absolute left-0 top-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />

                      <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#16AEE5]/10 transition-colors group-hover:bg-[#16AEE5]">
                        <Icon
                          className="h-7 w-7 text-[#16AEE5] transition-colors group-hover:text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3 className="mb-3 font-display text-xl">
                        {title}
                      </h3>

                      <p className="text-sm leading-7 text-black/60">
                        {text}
                      </p>
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="grid bg-white lg:grid-cols-2">
          <Reveal
            animation="scale-in"
            className="min-h-[420px] lg:min-h-[650px]"
          >
            <img
              src={images.rooftop}
              alt="Globar Village Apartment rooftop"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex items-center px-7 py-16 md:px-14 lg:px-20">
            <Reveal>
              <div className="mb-6 flex items-center gap-4">
                <div className="about-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Our Location
                </p>
              </div>

              <h2 className="mb-6 font-display text-3xl leading-tight md:text-5xl">
                Conveniently located
                <span className="block italic text-[#16AEE5]">
                  in Kanombe.
                </span>
              </h2>

              <div className="mb-8 flex items-start gap-4 border-l-4 border-[#16AEE5] bg-[#F4FBFE] p-5">
                <MapPin className="mt-1 h-6 w-6 flex-none text-[#16AEE5]" />

                <div>
                  <p className="font-semibold">
                    KK 177 St, Kanombe
                  </p>

                  <p className="text-sm text-black/55">
                    Kigali, Rwanda
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {locationPoints.map(
                  (
                    {
                      title,
                      description,
                    },
                    index,
                  ) => (
                    <div
                      key={title}
                      className="about-card flex gap-4 border-b border-black/10 pb-5"
                      style={{
                        animationDelay: `${
                          index * 0.1
                        }s`,
                      }}
                    >
                      <span className="flex h-8 w-8 flex-none items-center justify-center bg-black text-xs font-bold text-[#16AEE5]">
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="font-display text-lg">
                          {title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-black/55">
                          {description}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "English",
                  "French",
                  "Swahili",
                ].map((language) => (
                  <span
                    key={language}
                    className="inline-flex items-center gap-2 border border-[#16AEE5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]"
                  >
                    <Languages className="h-4 w-4 text-[#16AEE5]" />

                    {language}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="grid min-h-[420px] lg:grid-cols-2">
          <Reveal
            animation="scale-in"
            className="min-h-[320px]"
          >
            <img
              src={images.room}
              alt="Room at Globar Village Apartment"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="relative flex flex-col justify-center overflow-hidden bg-black p-10 text-white md:p-16 lg:p-20">
            <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#16AEE5]/20 blur-3xl" />

            <Reveal className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                Plan Your Stay
              </p>

              <h2 className="mb-6 font-display text-3xl leading-tight md:text-5xl">
                Your Kigali apartment
                <span className="block italic text-[#16AEE5]">
                  is waiting.
                </span>
              </h2>

              <p className="mb-8 max-w-lg leading-7 text-white/60">
                Contact our management team to check
                availability, discuss your stay and reserve
                your apartment.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-none bg-[#16AEE5] px-9 text-black hover:bg-white"
                >
                  <Link
                    to="/contact"
                    className="flex items-center gap-3"
                  >
                    Check Availability

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none border-white/50 bg-transparent px-9 text-white hover:bg-white hover:text-black"
                >
                  <Link to="/">
                    Back to Home
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default About;
