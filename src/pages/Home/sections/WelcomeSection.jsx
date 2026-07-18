import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import {
  BRAND,
  MAIN_IMAGE,
} from "../homeData";

const welcomePoints = [
  "Comfortable modern interiors",
  "Suitable for short and extended stays",
  "Private and secure environment",
  "Convenient location in Kigali",
];

const WelcomeSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes welcomeImageEntrance {
            from {
              opacity: 0;
              transform: translateX(-35px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes welcomeContentEntrance {
            from {
              opacity: 0;
              transform: translateX(35px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes locationFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes blueLineGrow {
            from {
              width: 0;
            }

            to {
              width: 56px;
            }
          }

          @keyframes pointEntrance {
            from {
              opacity: 0;
              transform: translateX(18px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .welcome-image-entrance {
            animation:
              welcomeImageEntrance 1s
              ease-out both;
          }

          .welcome-content-entrance {
            animation:
              welcomeContentEntrance 1s
              ease-out 0.15s both;
          }

          .welcome-location-float {
            animation:
              locationFloat 4s ease-in-out
              infinite;
          }

          .welcome-blue-line {
            animation:
              blueLineGrow 1s ease-out
              0.4s both;
          }

          .welcome-point {
            opacity: 0;
            animation:
              pointEntrance 0.6s ease-out
              forwards;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .welcome-image-entrance,
            .welcome-content-entrance,
            .welcome-location-float,
            .welcome-blue-line,
            .welcome-point {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="welcome"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        {/* Decorative blue background */}
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#16AEE5]/5 blur-3xl" />

        <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Building image */}
          <Reveal
            animation="scale-in"
            className="welcome-image-entrance relative"
          >
            {/* Black frame */}
            <div className="absolute -bottom-5 -left-5 hidden h-full w-full border border-black/25 md:block" />

            {/* Blue top decoration */}
            <div className="absolute -top-3 left-8 z-20 h-1 w-28 bg-[#16AEE5]" />

            <div className="relative z-10 flex h-[420px] items-center justify-center overflow-hidden border border-black/10 bg-[#F2FAFD] p-3 shadow-2xl md:h-[560px]">
              <img
                src={MAIN_IMAGE}
                alt="Welcome to Globar Village"
                loading="lazy"
                className="h-full w-full object-contain object-center"
              />

              {/* Light image shading */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Location card */}
            <div className="welcome-location-float absolute bottom-6 right-6 z-20 bg-black px-7 py-5 text-white shadow-2xl">
              <p className="font-display text-3xl text-[#16AEE5]">
                Kigali
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">
                Rwanda
              </p>
            </div>
          </Reveal>

          {/* Welcome content */}
          <Reveal delay={150}>
            <div className="welcome-content-entrance">
              {/* Section label */}
              <div className="mb-6 flex items-center gap-4">
                <div className="welcome-blue-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Welcome
                </p>
              </div>

              {/* Heading */}
              <h2 className="mb-7 font-display text-3xl leading-tight text-black md:text-5xl">
                Welcome to

                <span className="block italic text-[#16AEE5]">
                  Globar Village.
                </span>
              </h2>

              <p className="mb-5 leading-8 text-black/65">
                {BRAND} provides modern, comfortable and
                private apartment accommodation in Kigali,
                Rwanda.
              </p>

              <p className="mb-8 leading-8 text-black/65">
                Our apartments are suitable for individuals,
                couples, families and business travellers.
                Whether you are visiting for a few days or
                planning an extended stay, we provide a
                peaceful place where you can feel at home.
              </p>

              {/* Feature cards */}
              <div className="mb-8 grid gap-5 sm:grid-cols-2">
                <article className="group border border-black/10 border-l-4 border-l-[#16AEE5] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#16AEE5] hover:shadow-xl">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#16AEE5]/10 transition-colors duration-300 group-hover:bg-[#16AEE5]">
                    <Home
                      className="h-6 w-6 text-[#16AEE5] transition-colors duration-300 group-hover:text-black"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mb-2 font-display text-xl text-black">
                    Modern Apartments
                  </h3>

                  <p className="text-sm leading-6 text-black/60">
                    Comfortable spaces designed for short
                    and extended stays.
                  </p>
                </article>

                <article className="group border border-black/10 border-l-4 border-l-[#16AEE5] bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#16AEE5] hover:shadow-xl">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center bg-[#16AEE5]/10 transition-colors duration-300 group-hover:bg-[#16AEE5]">
                    <ShieldCheck
                      className="h-6 w-6 text-[#16AEE5] transition-colors duration-300 group-hover:text-black"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mb-2 font-display text-xl text-black">
                    Privacy and Security
                  </h3>

                  <p className="text-sm leading-6 text-black/60">
                    A peaceful environment where guests can
                    feel safe and comfortable.
                  </p>
                </article>
              </div>

              {/* Welcome points */}
              <ul className="mb-9 grid gap-4 sm:grid-cols-2">
                {welcomePoints.map(
                  (point, index) => (
                    <li
                      key={point}
                      className="welcome-point flex items-center gap-3"
                      style={{
                        animationDelay: `${
                          0.5 + index * 0.12
                        }s`,
                      }}
                    >
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#16AEE5]/10">
                        <CheckCircle2 className="h-4 w-4 text-[#16AEE5]" />
                      </span>

                      <span className="text-sm text-black/65">
                        {point}
                      </span>
                    </li>
                  ),
                )}
              </ul>

              {/* Action */}
              <Button
                asChild
                className="group h-12 rounded-none bg-black px-8 text-white hover:bg-[#16AEE5] hover:text-black"
              >
                <Link
                  to="/about"
                  className="flex items-center gap-3"
                >
                  Learn More About Us

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

export default WelcomeSection;
