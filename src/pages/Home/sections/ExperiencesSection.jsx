import {
  BedDouble,
  Building2,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
  TreePine,
  Users,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const propertyDetails = [
  {
    icon: Users,
    label: "Guest Capacity",
    value: "Up to 3 guests",
  },
  {
    icon: BedDouble,
    label: "Bedrooms",
    value: "20 bedrooms",
  },
  {
    icon: Building2,
    label: "Balcony",
    value: "Available",
  },
  {
    icon: TreePine,
    label: "Terrace",
    value: "Available",
  },
  {
    icon: Sparkles,
    label: "Activities",
    value: "Private sauna",
  },
  {
    icon: CalendarDays,
    label: "Prices",
    value: "Depend on your dates",
  },
  {
    icon: Clock3,
    label: "Arrival Times",
    value: "Check-in 06:00 · Check-out 10:00",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "13 km from Kigali centre",
  },
];

const ExperiencesSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes experienceCardEntrance {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes experienceIconEntrance {
            from {
              opacity: 0;
              transform:
                scale(0.7)
                rotate(-12deg);
            }

            to {
              opacity: 1;
              transform:
                scale(1)
                rotate(0);
            }
          }

          @keyframes experienceLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          .experience-card {
            opacity: 0;
            animation:
              experienceCardEntrance 0.7s
              ease-out forwards;
          }

          .experience-icon {
            opacity: 0;
            animation:
              experienceIconEntrance 0.7s
              ease-out forwards;
          }

          .experience-line {
            animation:
              experienceLineGrow 1s
              ease-out forwards;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .experience-card,
            .experience-icon,
            .experience-line {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="experiences"
        className="relative overflow-hidden bg-black py-20 text-white md:py-24"
      >
        {/* Decorative blue lighting */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Heading */}
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="experience-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Property Information
              </p>

              <div className="experience-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl md:text-5xl">
              Everything at
              <span className="italic text-[#16AEE5]">
                {" "}a glance.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Important information about your stay at
              Global Village Apartment.
            </p>
          </Reveal>

          {/* All property information */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {propertyDetails.map(
              (
                {
                  icon: Icon,
                  label,
                  value,
                },
                index,
              ) => (
                <Reveal
                  key={label}
                  delay={index * 70}
                >
                  <article
                    className="experience-card group relative flex min-h-48 flex-col justify-between overflow-hidden border border-white/15 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#16AEE5] hover:bg-white"
                    style={{
                      animationDelay: `${
                        index * 0.08
                      }s`,
                    }}
                  >
                    {/* Animated blue top line */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />

                    <div
                      className="experience-icon mb-7 flex h-12 w-12 items-center justify-center bg-[#16AEE5]/10 transition-all duration-400 group-hover:rotate-3 group-hover:bg-[#16AEE5]"
                      style={{
                        animationDelay: `${
                          0.15 + index * 0.08
                        }s`,
                      }}
                    >
                      <Icon
                        className="h-6 w-6 text-[#16AEE5] transition-colors duration-300 group-hover:text-black"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#16AEE5]">
                        {label}
                      </p>

                      <h3 className="font-display text-xl text-white transition-colors duration-300 group-hover:text-black">
                        {value}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>

          {/* Bottom note */}
          <Reveal className="mt-10">
            <div className="flex flex-col items-center justify-between gap-4 border-l-4 border-[#16AEE5] bg-white/[0.05] px-6 py-5 sm:flex-row">
              <p className="text-sm text-white/65">
                Prices may change depending on your dates
                and length of stay.
              </p>

              <span className="whitespace-nowrap bg-[#16AEE5] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                Check availability
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ExperiencesSection;
