import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import {
  BRAND,
  MAIN_IMAGE,
} from "../homeData";

const propertyHighlights = [
  {
    title: "Spacious Accommodation",
    description:
      "20 comfortable bedrooms with 20 private bathrooms.",
  },
  {
    title: "Private Outdoor Spaces",
    description:
      "Enjoy private balconies and a relaxing terrace.",
  },
  {
    title: "Modern Amenities",
    description:
      "Kitchen, washing machine, television and free Wi-Fi.",
  },
  {
    title: "Secure Parking",
    description:
      "Free private parking is available for every guest.",
  },
  {
    title: "Near Kigali Airport",
    description:
      "Only 1.2 miles from Kigali International Airport.",
  },
  {
    title: "Explore Kigali",
    description:
      "Easy access to museums, parks and city attractions.",
  },
];

const HeroSection = () => {
  const [highlightIndex, setHighlightIndex] =
    useState(0);

  const [isVisible, setIsVisible] =
    useState(true);

  useEffect(() => {
    let transitionTimer;

    const rotationTimer = window.setInterval(() => {
      setIsVisible(false);

      transitionTimer = window.setTimeout(() => {
        setHighlightIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            propertyHighlights.length,
        );

        setIsVisible(true);
      }, 550);
    }, 4000);

    return () => {
      window.clearInterval(rotationTimer);
      window.clearTimeout(transitionTimer);
    };
  }, []);

  const activeHighlight =
    propertyHighlights[highlightIndex];

  const selectHighlight = (index) => {
    setIsVisible(false);

    window.setTimeout(() => {
      setHighlightIndex(index);
      setIsVisible(true);
    }, 350);
  };

  return (
    <>
      <style>
        {`
          @keyframes heroImageEntrance {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroWordsEntrance {
            from {
              opacity: 0;
              transform: translateX(-35px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroBlueLine {
            from {
              width: 0;
            }

            to {
              width: 55px;
            }
          }

          .hero-image-entrance {
            animation:
              heroImageEntrance 1.2s
              ease-out both;
          }

          .hero-words-entrance {
            animation:
              heroWordsEntrance 1s
              ease-out 0.2s both;
          }

          .hero-blue-line {
            animation:
              heroBlueLine 1s
              ease-out 0.6s both;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .hero-image-entrance,
            .hero-words-entrance,
            .hero-blue-line {
              animation: none;
            }
          }
        `}
      </style>

      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        {/* Full background image */}
        <div className="absolute inset-0 bg-black">
          <img
            src={MAIN_IMAGE}
            alt={`${BRAND} complete apartment building`}
            className="hero-image-entrance absolute inset-0 h-full w-full object-fill"
          />

          {/* Dark left overlay for readable words */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/5" />

          {/* Light bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
        </div>

        <main className="container relative z-10 flex min-h-screen flex-col justify-center pb-16 pt-32 text-white">
          <Reveal>
            <div className="hero-words-entrance max-w-2xl">
              {/* Company name */}
              <div className="mb-5 flex items-center gap-4">
                <div className="hero-blue-line h-px bg-[#16AEE5]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#16AEE5] md:text-xs">
                  {BRAND}
                </p>
              </div>

              {/* Professional title */}
              <h1 className="mb-5 max-w-3xl font-display text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                Modern Living,

                <span className="block italic text-[#16AEE5]">
                  Redefined.
                </span>
              </h1>

              <p className="mb-7 max-w-lg border-l-2 border-[#16AEE5] pl-5 text-sm leading-7 text-white/75 md:text-base">
                Comfortable, private and modern apartment
                living in Kigali, Rwanda.
              </p>

              {/* Rotating property words */}
              <div className="mb-6 min-h-[105px] max-w-xl overflow-hidden">
                <div className="mb-2 flex items-center gap-3">
                  <Building2
                    className="h-4 w-4 text-[#16AEE5]"
                    strokeWidth={1.5}
                  />

                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#16AEE5]">
                    About this property
                  </p>
                </div>

                <div
                  aria-live="polite"
                  className={`transform transition-all duration-500 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-7 opacity-0"
                  }`}
                >
                  <h2 className="mb-1 font-display text-xl text-white md:text-2xl">
                    {activeHighlight.title}
                  </h2>

                  <p className="text-sm leading-6 text-white/65">
                    {activeHighlight.description}
                  </p>
                </div>
              </div>

              {/* Progress controls */}
              <div className="mb-7 flex items-center gap-2">
                {propertyHighlights.map(
                  (highlight, index) => (
                    <button
                      key={highlight.title}
                      type="button"
                      aria-label={`Show ${highlight.title}`}
                      onClick={() =>
                        selectHighlight(index)
                      }
                      className={`h-[3px] transition-all duration-500 ${
                        index === highlightIndex
                          ? "w-9 bg-[#16AEE5]"
                          : "w-4 bg-white/30 hover:bg-white/70"
                      }`}
                    />
                  ),
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-none bg-[#16AEE5] px-7 text-sm font-semibold text-black hover:bg-white"
                >
                  <Link
                    to="/contact"
                    className="flex items-center gap-3"
                  >
                    Reserve an Apartment

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-none border-white/60 bg-black/20 px-7 text-sm text-white backdrop-blur-sm hover:bg-white hover:text-black"
                >
                  <Link to="/about">
                    Discover More
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </main>

        {/* Blue edge */}
        <div className="absolute bottom-0 left-0 z-10 h-1 w-full bg-gradient-to-r from-[#16AEE5] via-[#16AEE5]/50 to-transparent" />
      </section>
    </>
  );
};

export default HeroSection;
