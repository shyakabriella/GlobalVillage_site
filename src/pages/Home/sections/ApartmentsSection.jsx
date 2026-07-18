import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  CookingPot,
  Sparkles,
  TreePine,
  Tv,
  WashingMachine,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const apartmentOffers = [
  {
    id: 1,
    image: "/room.jpg",
    tag: "Spacious Living",
    title: "Complete Apartment",
    description:
      "A spacious apartment designed for groups, families and extended stays.",
    features: [
      "20 comfortable bedrooms",
      "20 private bathrooms",
      "22 beds available",
    ],
    icon: BedDouble,
  },
  {
    id: 2,
    image: "/room1.jpg",
    tag: "Private Kitchen",
    title: "Cook and Feel at Home",
    description:
      "A private kitchen provides space for preparing meals and safely storing food.",
    features: [
      "Fully equipped kitchen",
      "Food preparation space",
      "Private washing machine",
    ],
    icon: CookingPot,
  },
  {
    id: 3,
    image: "/room2.jpg",
    tag: "Relaxation",
    title: "Sauna and Garden Views",
    description:
      "Relax in the sauna or enjoy peaceful garden views from the private terrace.",
    features: [
      "Private balcony and terrace",
      "Garden views",
      "Flat-screen television",
    ],
    icon: Sparkles,
  },
];

const apartmentStats = [
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
    icon: BedDouble,
    value: "22",
    label: "Beds",
  },
  {
    icon: CookingPot,
    value: "1",
    label: "Private Kitchen",
  },
];

const facilities = [
  {
    icon: Building2,
    label: "Balcony",
  },
  {
    icon: TreePine,
    label: "Terrace",
  },
  {
    icon: Sparkles,
    label: "Sauna",
  },
  {
    icon: CookingPot,
    label: "Kitchen",
  },
  {
    icon: WashingMachine,
    label: "Washing Machine",
  },
  {
    icon: Tv,
    label: "Flat-Screen TV",
  },
];

const ApartmentsSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes apartmentCardEntrance {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes facilityEntrance {
            from {
              opacity: 0;
              transform: scale(0.9);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes blueLineMove {
            0% {
              transform: translateX(-100%);
            }

            100% {
              transform: translateX(300%);
            }
          }

          .apartment-card {
            opacity: 0;
            animation:
              apartmentCardEntrance 0.8s
              ease-out forwards;
          }

          .apartment-facility {
            opacity: 0;
            animation:
              facilityEntrance 0.6s
              ease-out forwards;
          }

          .apartment-blue-line {
            animation:
              blueLineMove 3s linear
              infinite;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .apartment-card,
            .apartment-facility,
            .apartment-blue-line {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="apartments"
        className="relative overflow-hidden bg-[#F4FBFE] py-20 md:py-24"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Section heading */}
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Our Apartment
              </p>

              <div className="h-px w-12 bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl leading-tight text-black md:text-5xl">
              Space, comfort and
              <span className="block italic text-[#16AEE5]">
                modern convenience.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-black/65">
              Discover a spacious apartment with modern
              facilities, private living areas and
              everything needed for a comfortable stay.
            </p>
          </Reveal>

          {/* Apartment statistics */}
          <Reveal className="mb-12">
            <div className="grid grid-cols-2 border border-black/10 bg-white shadow-sm md:grid-cols-4">
              {apartmentStats.map(
                ({ icon: Icon, value, label }, index) => (
                  <div
                    key={label}
                    className={`group flex items-center justify-center gap-4 p-6 transition-colors duration-300 hover:bg-black hover:text-white ${
                      index !== apartmentStats.length - 1
                        ? "border-r border-black/10"
                        : ""
                    }`}
                  >
                    <Icon
                      className="h-7 w-7 text-[#16AEE5]"
                      strokeWidth={1.5}
                    />

                    <div>
                      <p className="font-display text-2xl text-[#16AEE5]">
                        {value}
                      </p>

                      <p className="text-xs uppercase tracking-[0.15em] text-black/60 transition-colors group-hover:text-white/60">
                        {label}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Reveal>

          {/* Apartment cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {apartmentOffers.map(
              (
                {
                  id,
                  image,
                  tag,
                  title,
                  description,
                  features,
                  icon: Icon,
                },
                index,
              ) => (
                <Reveal
                  key={id}
                  delay={index * 130}
                >
                  <article
                    className="apartment-card group flex h-full flex-col overflow-hidden border border-black/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#16AEE5] hover:shadow-2xl"
                    style={{
                      animationDelay: `${
                        index * 0.15
                      }s`,
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden bg-black">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <span className="absolute left-5 top-5 bg-[#16AEE5] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                        {tag}
                      </span>

                      <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center bg-black/90 text-[#16AEE5] backdrop-blur-sm">
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Animated blue line */}
                      <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-white/20">
                        <div className="apartment-blue-line h-full w-1/3 bg-[#16AEE5]" />
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="flex flex-grow flex-col p-7">
                      <h3 className="mb-3 font-display text-2xl text-black">
                        {title}
                      </h3>

                      <p className="mb-6 text-sm leading-7 text-black/60">
                        {description}
                      </p>

                      <ul className="mb-7 space-y-3">
                        {features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-black/70"
                          >
                            <CheckCircle2 className="h-4 w-4 flex-none text-[#16AEE5]" />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        variant="outline"
                        className="group/button mt-auto h-12 w-full rounded-none border-black bg-white text-black hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black"
                      >
                        <Link
                          to="/contact"
                          className="flex items-center justify-center gap-3"
                        >
                          Check Availability

                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>

          {/* Facilities */}
          <Reveal className="mt-16">
            <div className="border border-black/10 bg-white p-7 shadow-sm md:p-10">
              <div className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                  Apartment Facilities
                </p>

                <h3 className="font-display text-2xl text-black md:text-3xl">
                  What the apartment offers
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {facilities.map(
                  ({ icon: Icon, label }, index) => (
                    <div
                      key={label}
                      className="apartment-facility group flex min-h-32 flex-col items-center justify-center border border-black/10 bg-[#F4FBFE] p-4 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#16AEE5] hover:bg-black hover:text-white"
                      style={{
                        animationDelay: `${
                          0.2 + index * 0.1
                        }s`,
                      }}
                    >
                      <Icon
                        className="mb-3 h-7 w-7 text-[#16AEE5] transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                      />

                      <span className="text-xs font-semibold uppercase tracking-[0.1em]">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          {/* View apartments */}
          <Reveal className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="group rounded-none bg-black px-10 text-white hover:bg-[#16AEE5] hover:text-black"
            >
              <Link
                to="/rooms"
                className="flex items-center gap-3"
              >
                View Apartment Details

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ApartmentsSection;
