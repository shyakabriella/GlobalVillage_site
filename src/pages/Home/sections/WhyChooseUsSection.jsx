import {
  Car,
  Clock3,
  Dumbbell,
  Home,
  Languages,
  MapPin,
  ShoppingCart,
  Wifi,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { BRAND } from "../homeData";

const benefits = [
  {
    icon: Home,
    title: "Fully Furnished",
    text:
      "Comfortable rooms, contemporary furniture, spacious living areas and a modern kitchen.",
  },
  {
    icon: Clock3,
    title: "Flexible Stays",
    text:
      "Suitable for business, leisure, short visits and long-term accommodation.",
  },
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    text:
      "Stay connected with reliable high-speed internet throughout the property.",
  },
  {
    icon: Car,
    title: "Private Parking",
    text:
      "Convenient and secure private parking is available on the property.",
  },
  {
    icon: Dumbbell,
    title: "Pool and Gym",
    text:
      "Enjoy convenient facilities for relaxation, leisure, exercise and fitness.",
  },
  {
    icon: ShoppingCart,
    title: "On-Site Supermarket",
    text:
      "Purchase daily essentials conveniently without travelling far from your apartment.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    text:
      "Close to Kigali city centre, the airport, supermarkets and important local amenities.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    text:
      "Our team communicates in English, French and Swahili to assist every guest.",
  },
];

const propertyFeatures = [
  "Comfortable, well-appointed rooms",
  "Spacious modern living areas",
  "Fully equipped kitchen",
  "Pleasant outdoor views",
];

const WhyChooseUsSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes whyCardEntrance {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes whyFeatureEntrance {
            from {
              opacity: 0;
              transform: translateX(-18px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes whyBlueLine {
            from {
              width: 0;
            }

            to {
              width: 50px;
            }
          }

          .why-card {
            opacity: 0;
            animation:
              whyCardEntrance 0.7s
              ease-out forwards;
          }

          .why-feature {
            opacity: 0;
            animation:
              whyFeatureEntrance 0.6s
              ease-out forwards;
          }

          .why-blue-line {
            animation:
              whyBlueLine 1s ease-out
              forwards;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .why-card,
            .why-feature,
            .why-blue-line {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Section introduction */}
          <Reveal className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="why-blue-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Why Choose Us
              </p>

              <div className="why-blue-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-6 font-display text-3xl leading-tight text-black md:text-5xl">
              Everything you need to
              <span className="block italic text-[#16AEE5]">
                feel at home.
              </span>
            </h2>

           
          </Reveal>

          {/* Main property features */}
          <Reveal className="mb-12">
            <div className="grid overflow-hidden border border-black/10 bg-black sm:grid-cols-2 lg:grid-cols-4">
              {propertyFeatures.map(
                (feature, index) => (
                  <div
                    key={feature}
                    className={`why-feature group flex min-h-28 items-center justify-center gap-3 p-6 text-center transition-colors duration-300 hover:bg-[#16AEE5] ${
                      index !==
                      propertyFeatures.length - 1
                        ? "border-b border-white/10 sm:border-r lg:border-b-0"
                        : ""
                    }`}
                    style={{
                      animationDelay: `${
                        index * 0.12
                      }s`,
                    }}
                  >
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#16AEE5] text-xs font-bold text-black transition-colors group-hover:bg-black group-hover:text-white">
                      {index + 1}
                    </span>

                    <p className="text-sm font-medium text-white transition-colors group-hover:text-black">
                      {feature}
                    </p>
                  </div>
                ),
              )}
            </div>
          </Reveal>

          {/* Benefits */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(
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
                    className="why-card group relative h-full overflow-hidden border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#16AEE5] hover:shadow-2xl"
                    style={{
                      animationDelay: `${
                        index * 0.1
                      }s`,
                    }}
                  >
                    {/* Top blue line */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />

                    <div className="mb-6 flex h-14 w-14 items-center justify-center bg-[#16AEE5]/10 transition-all duration-400 group-hover:rotate-3 group-hover:bg-[#16AEE5]">
                      <Icon
                        className="h-7 w-7 text-[#16AEE5] transition-colors duration-300 group-hover:text-black"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="mb-3 font-display text-xl text-black">
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

          {/* Languages */}
          <Reveal className="mt-12">
            <div className="flex flex-col items-center justify-between gap-6 border border-black/10 bg-[#F4FBFE] p-7 md:flex-row md:px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-black">
                  <Languages
                    className="h-6 w-6 text-[#16AEE5]"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="font-display text-xl text-black">
                    Languages Spoken
                  </p>

                  <p className="text-sm text-black/60">
                    Our team is ready to welcome local and
                    international guests.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "English",
                  "French",
                  "Swahili",
                ].map((language) => (
                  <span
                    key={language}
                    className="border border-[#16AEE5] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-[#16AEE5]"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
