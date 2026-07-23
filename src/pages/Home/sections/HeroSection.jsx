import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { BRAND } from "../homeData";

/*
|--------------------------------------------------------------------------
| Hero Background Images
|--------------------------------------------------------------------------
|
| These images must be inside your public folder:
|
| public/aprt5.JPG
| public/aprt6.JPG
| public/aprt7.JPG
| public/fullAprt.JPG
|
*/

const heroImages = [
  {
    src: "/aprt5.JPG",
    alt: `${BRAND} apartment exterior`,
  },
  {
    src: "/aprt6.JPG",
    alt: `${BRAND} modern apartment building`,
  },
  {
    src: "/aprt7.JPG",
    alt: `${BRAND} comfortable accommodation`,
  },
  {
    src: "/fullAprt.JPG",
    alt: `${BRAND} complete apartment property`,
  },
];

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
  const [imageIndex, setImageIndex] =
    useState(0);

  const [highlightIndex, setHighlightIndex] =
    useState(0);

  const [isVisible, setIsVisible] =
    useState(true);

  const highlightTimeoutRef = useRef(null);

  /*
  |--------------------------------------------------------------------------
  | Preload Images
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    heroImages.forEach((image) => {
      const preloadImage = new Image();
      preloadImage.src = image.src;
    });
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Automatic Background Image Slider
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const imageRotationTimer =
      window.setInterval(() => {
        setImageIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            heroImages.length,
        );
      }, 6500);

    return () => {
      window.clearInterval(
        imageRotationTimer,
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Automatic Property Highlight Slider
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const highlightRotationTimer =
      window.setInterval(() => {
        setIsVisible(false);

        if (
          highlightTimeoutRef.current
        ) {
          window.clearTimeout(
            highlightTimeoutRef.current,
          );
        }

        highlightTimeoutRef.current =
          window.setTimeout(() => {
            setHighlightIndex(
              (currentIndex) =>
                (currentIndex + 1) %
                propertyHighlights.length,
            );

            setIsVisible(true);
          }, 550);
      }, 4000);

    return () => {
      window.clearInterval(
        highlightRotationTimer,
      );

      if (highlightTimeoutRef.current) {
        window.clearTimeout(
          highlightTimeoutRef.current,
        );
      }
    };
  }, []);

  const activeHighlight =
    propertyHighlights[highlightIndex];

  /*
  |--------------------------------------------------------------------------
  | Select Property Highlight
  |--------------------------------------------------------------------------
  */

  const selectHighlight = (index) => {
    if (index === highlightIndex) {
      return;
    }

    setIsVisible(false);

    if (highlightTimeoutRef.current) {
      window.clearTimeout(
        highlightTimeoutRef.current,
      );
    }

    highlightTimeoutRef.current =
      window.setTimeout(() => {
        setHighlightIndex(index);
        setIsVisible(true);
      }, 350);
  };

  /*
  |--------------------------------------------------------------------------
  | Select Background Image
  |--------------------------------------------------------------------------
  */

  const selectImage = (index) => {
    if (index === imageIndex) {
      return;
    }

    setImageIndex(index);
  };

  return (
    <>
      <style>
        {`
          @keyframes heroContentEntrance {
            from {
              opacity: 0;
              transform: translateY(28px);
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

          @keyframes imageNumberEntrance {
            from {
              opacity: 0;
              transform: translateY(10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-content-entrance {
            animation:
              heroContentEntrance 1.2s
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

          .hero-slide {
            opacity: 0;
            transform: scale(1.08);
            transition:
              opacity 1.5s ease-in-out,
              transform 7s ease-out;
            will-change:
              opacity,
              transform;
          }

          .hero-slide-active {
            opacity: 1;
            transform: scale(1);
          }

          .hero-image-number {
            animation:
              imageNumberEntrance 0.6s
              ease-out both;
          }

          .hero-image-indicator {
            position: relative;
            overflow: hidden;
          }

          .hero-image-indicator::after {
            content: "";
            position: absolute;
            inset: 0;
            background: #16AEE5;
            transform: translateX(-100%);
          }

          .hero-image-indicator-active::after {
            animation:
              heroIndicatorProgress 6.5s
              linear forwards;
          }

          @keyframes heroIndicatorProgress {
            from {
              transform: translateX(-100%);
            }

            to {
              transform: translateX(0);
            }
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .hero-content-entrance,
            .hero-words-entrance,
            .hero-blue-line,
            .hero-image-number,
            .hero-image-indicator-active::after {
              animation: none;
            }

            .hero-slide {
              transition:
                opacity 0.3s ease;
              transform: none;
            }

            .hero-slide-active {
              transform: none;
            }
          }
        `}
      </style>

      <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
        {/* Animated background image slider */}
        <div className="absolute inset-0 bg-black">
          {heroImages.map(
            (image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                aria-hidden={
                  index !== imageIndex
                }
                className={`hero-slide absolute inset-0 h-full w-full object-cover object-center ${
                  index === imageIndex
                    ? "hero-slide-active z-[2]"
                    : "z-0"
                }`}
              />
            ),
          )}

          {/* Dark left overlay */}
          <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/95 via-black/65 to-black/5" />

          {/* Bottom overlay */}
          <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/75 via-transparent to-black/25" />

          {/* Soft central overlay */}
          <div className="absolute inset-0 z-[3] bg-black/10" />
        </div>

        {/* Main hero content */}
        <main className="container relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-32 text-white">
          <Reveal>
            <div className="hero-words-entrance max-w-2xl">
              {/* Company name */}
              <div className="mb-5 flex items-center gap-4">
                <div className="hero-blue-line h-px bg-[#16AEE5]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#16AEE5] md:text-xs">
                  {BRAND}
                </p>
              </div>

              {/* Hero heading */}
              <h1 className="mb-5 max-w-3xl font-display text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                Modern Living,

                <span className="block italic text-[#16AEE5]">
                  Redefined.
                </span>
              </h1>

              {/* Hero description */}
              <p className="mb-7 max-w-lg border-l-2 border-[#16AEE5] pl-5 text-sm leading-7 text-white/75 md:text-base">
                Comfortable, private and modern
                apartment living in Kigali,
                Rwanda.
              </p>

              {/* Rotating property information */}
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
                    {
                      activeHighlight.description
                    }
                  </p>
                </div>
              </div>

              {/* Property highlight controls */}
              <div className="mb-7 flex items-center gap-2">
                {propertyHighlights.map(
                  (highlight, index) => (
                    <button
                      key={highlight.title}
                      type="button"
                      aria-label={`Show ${highlight.title}`}
                      aria-pressed={
                        index ===
                        highlightIndex
                      }
                      onClick={() =>
                        selectHighlight(index)
                      }
                      className={`h-[3px] transition-all duration-500 ${
                        index ===
                        highlightIndex
                          ? "w-9 bg-[#16AEE5]"
                          : "w-4 bg-white/30 hover:bg-white/70"
                      }`}
                    />
                  ),
                )}
              </div>

              {/* Action buttons */}
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

        {/* Background image slider controls */}
        <div className="absolute bottom-8 right-5 z-20 flex items-end gap-5 sm:right-8 md:bottom-10 md:right-12">
          {/* Image number */}
          <div
            key={imageIndex}
            className="hero-image-number hidden items-end gap-1 text-white sm:flex"
          >
            <span className="font-display text-3xl leading-none text-[#16AEE5] md:text-4xl">
              {String(
                imageIndex + 1,
              ).padStart(2, "0")}
            </span>

            <span className="pb-1 text-xs text-white/50">
              /
              {String(
                heroImages.length,
              ).padStart(2, "0")}
            </span>
          </div>

          {/* Image indicators */}
          <div className="flex items-center gap-2">
            {heroImages.map(
              (image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show background image ${
                    index + 1
                  }`}
                  aria-pressed={
                    index === imageIndex
                  }
                  onClick={() =>
                    selectImage(index)
                  }
                  className={`hero-image-indicator h-1 transition-all duration-500 ${
                    index === imageIndex
                      ? "hero-image-indicator-active w-12 bg-white/30"
                      : "w-5 bg-white/35 hover:bg-white/70"
                  }`}
                />
              ),
            )}
          </div>
        </div>

        {/* Decorative left label */}
        <div className="absolute bottom-10 left-6 z-20 hidden origin-left -rotate-90 items-center gap-3 lg:flex">
          <span className="h-px w-10 bg-white/40" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Kigali, Rwanda
          </span>
        </div>

        {/* Blue bottom edge */}
        <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-gradient-to-r from-[#16AEE5] via-[#16AEE5]/50 to-transparent" />
      </section>
    </>
  );
};

export default HeroSection;