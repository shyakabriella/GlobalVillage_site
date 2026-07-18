import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bath,
  Car,
  Check,
  CookingPot,
  Eye,
  Languages,
  ShieldCheck,
  Sparkles,
  TreePine,
  Tv,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const popularFacilities = [
  {
    icon: Wifi,
    label: "Free Wi-Fi",
  },
  {
    icon: Car,
    label: "Free Parking",
  },
  {
    icon: Bath,
    label: "Private Bathroom",
  },
  {
    icon: Sparkles,
    label: "Sauna",
  },
];

const facilityGroups = [
  {
    icon: Wifi,
    title: "Internet",
    description:
      "Free Wi-Fi is available throughout the property.",
    items: [
      "High-speed internet",
      "Available in all areas",
      "Free of charge",
    ],
  },
  {
    icon: Car,
    title: "Private Parking",
    description:
      "Free private parking is available on site.",
    items: [
      "No reservation needed",
      "On-site parking",
      "Free for guests",
    ],
  },
  {
    icon: CookingPot,
    title: "Private Kitchen",
    description:
      "Prepare and store food conveniently.",
    items: [
      "Kitchen space",
      "Washing machine",
      "Food storage",
    ],
  },
  {
    icon: Bath,
    title: "Bathroom",
    description:
      "Comfortable private bathroom facilities.",
    items: [
      "Private bathroom",
      "Modern facilities",
    ],
  },
  {
    icon: Tv,
    title: "Media and Technology",
    description:
      "Entertainment is available inside the apartment.",
    items: [
      "Flat-screen television",
    ],
  },
  {
    icon: TreePine,
    title: "Outdoor Spaces",
    description:
      "Relax and enjoy the outdoor environment.",
    items: [
      "Private balcony",
      "Terrace",
    ],
  },
  {
    icon: Eye,
    title: "Outdoor Views",
    description:
      "Enjoy pleasant surroundings during your stay.",
    items: [
      "Garden view",
      "Property view",
    ],
  },
  {
    icon: Sparkles,
    title: "Spa and Wellness",
    description:
      "A relaxing facility available at the property.",
    items: [
      "Private sauna",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Property Rules",
    description:
      "Designed to provide a clean and comfortable stay.",
    items: [
      "Smoke-free property",
    ],
  },
  {
    icon: Languages,
    title: "Languages Spoken",
    description:
      "Our team welcomes international guests.",
    items: [
      "English",
      "French",
      "Swahili",
    ],
  },
];

const FacilitiesSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes facilityCardEntrance {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes popularFacilityEntrance {
            from {
              opacity: 0;
              transform: scale(0.85);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes facilityLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          .facility-card {
            opacity: 0;
            animation:
              facilityCardEntrance 0.7s
              ease-out forwards;
          }

          .popular-facility {
            opacity: 0;
            animation:
              popularFacilityEntrance 0.6s
              ease-out forwards;
          }

          .facility-line {
            animation:
              facilityLineGrow 1s
              ease-out forwards;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .facility-card,
            .popular-facility,
            .facility-line {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="facilities"
        className="relative overflow-hidden bg-white py-20 md:py-24"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Heading */}
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="facility-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Apartment Facilities
              </p>

              <div className="facility-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl leading-tight text-black md:text-5xl">
              Made for
              <span className="italic text-[#16AEE5]">
                {" "}convenient living.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-black/60">
              Practical facilities and modern amenities
              are available to make every stay comfortable.
            </p>
          </Reveal>

          {/* Most popular facilities */}
          <Reveal className="mb-10">
            <div className="border border-black/10 bg-[#F4FBFE] p-6 md:p-8">
              <h3 className="mb-6 font-display text-xl text-black">
                Most Popular Facilities
              </h3>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {popularFacilities.map(
                  (
                    {
                      icon: Icon,
                      label,
                    },
                    index,
                  ) => (
                    <div
                      key={label}
                      className="popular-facility group flex items-center gap-4 border border-black/10 bg-white p-4 transition-all duration-400 hover:-translate-y-1 hover:border-[#16AEE5] hover:bg-black"
                      style={{
                        animationDelay: `${
                          index * 0.12
                        }s`,
                      }}
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center bg-[#16AEE5]/10 transition-colors group-hover:bg-[#16AEE5]">
                        <Icon
                          className="h-5 w-5 text-[#16AEE5] transition-colors group-hover:text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      <span className="text-sm font-semibold text-black transition-colors group-hover:text-white">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          {/* Detailed facility groups */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {facilityGroups.map(
              (
                {
                  icon: Icon,
                  title,
                  description,
                  items,
                },
                index,
              ) => (
                <Reveal
                  key={title}
                  delay={index * 60}
                >
                  <article
                    className="facility-card group relative h-full overflow-hidden border border-black/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#16AEE5] hover:shadow-xl"
                    style={{
                      animationDelay: `${
                        index * 0.07
                      }s`,
                    }}
                  >
                    {/* Animated top line */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />

                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center bg-[#16AEE5]/10 transition-all duration-400 group-hover:rotate-3 group-hover:bg-[#16AEE5]">
                        <Icon
                          className="h-6 w-6 text-[#16AEE5] transition-colors group-hover:text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3 className="font-display text-xl text-black">
                        {title}
                      </h3>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-black/55">
                      {description}
                    </p>

                    <ul className="space-y-3">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-black/70"
                        >
                          <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#16AEE5]/10">
                            <Check className="h-3 w-3 text-[#16AEE5]" />
                          </span>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ),
            )}
          </div>

          {/* Availability action */}
          <Reveal className="mt-12">
            <div className="flex flex-col items-center justify-between gap-6 bg-black p-7 text-white md:flex-row md:px-10">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#16AEE5]">
                  Plan Your Stay
                </p>

                <h3 className="font-display text-2xl">
                  Check apartment availability.
                </h3>
              </div>

              <Button
                asChild
                size="lg"
                className="group rounded-none bg-[#16AEE5] px-8 text-black hover:bg-white"
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-3"
                >
                  See Availability

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default FacilitiesSection;
