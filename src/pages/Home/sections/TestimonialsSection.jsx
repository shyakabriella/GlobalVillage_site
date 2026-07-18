import {
  BadgeCheck,
  Quote,
  Star,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { testimonials } from "../homeData";

const TestimonialsSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes testimonialEntrance {
            from {
              opacity: 0;
              transform:
                translateY(30px)
                scale(0.97);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }

          @keyframes testimonialLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          @keyframes quoteFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          .testimonial-card {
            opacity: 0;
            animation:
              testimonialEntrance 0.8s
              ease-out forwards;
          }

          .testimonial-line {
            animation:
              testimonialLineGrow 1s
              ease-out forwards;
          }

          .testimonial-quote {
            animation:
              quoteFloat 4s ease-in-out
              infinite;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .testimonial-card,
            .testimonial-line,
            .testimonial-quote {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden bg-white py-20 md:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Heading */}
          <Reveal className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="testimonial-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Guest Reviews
              </p>

              <div className="testimonial-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl leading-tight text-black md:text-5xl">
              What our
              <span className="italic text-[#16AEE5]">
                {" "}guests say.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-black/60">
              Read about the comfort, service and
              experiences enjoyed by our guests.
            </p>
          </Reveal>

          {/* Reviews */}
          <div className="grid gap-7 md:grid-cols-3">
            {testimonials.map(
              (testimonial, index) => {
                const initial =
                  testimonial.name
                    ?.charAt(0)
                    .toUpperCase() || "G";

                return (
                  <Reveal
                    key={testimonial.name}
                    delay={index * 120}
                  >
                    <figure
                      className="testimonial-card group relative flex h-full flex-col overflow-hidden border border-black/10 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#16AEE5] hover:shadow-2xl"
                      style={{
                        animationDelay: `${
                          index * 0.15
                        }s`,
                      }}
                    >
                      {/* Animated blue line */}
                      <div className="absolute left-0 top-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />

                      {/* Quote icon */}
                      <Quote
                        className="testimonial-quote absolute right-7 top-7 h-10 w-10 text-[#16AEE5]/20 transition-colors group-hover:text-[#16AEE5]/40"
                        strokeWidth={1.5}
                      />

                      {/* Stars */}
                      <div
                        className="mb-6 flex gap-1"
                        aria-label="Five-star review"
                      >
                        {Array.from({
                          length: 5,
                        }).map(
                          (_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-4 w-4 fill-[#16AEE5] text-[#16AEE5]"
                            />
                          ),
                        )}
                      </div>

                      {/* Review */}
                      <blockquote className="mb-8 flex-grow font-display text-lg leading-8 text-black">
                        “{testimonial.text}”
                      </blockquote>

                      {/* Guest */}
                      <figcaption className="flex items-center gap-4 border-t border-black/10 pt-6">
                        <div className="flex h-12 w-12 flex-none items-center justify-center bg-black font-display text-xl text-[#16AEE5] transition-colors duration-300 group-hover:bg-[#16AEE5] group-hover:text-black">
                          {initial}
                        </div>

                        <div className="min-w-0 flex-grow">
                          <div className="flex items-center gap-2">
                            <p className="truncate font-semibold text-black">
                              {testimonial.name}
                            </p>

                            <BadgeCheck className="h-4 w-4 flex-none text-[#16AEE5]" />
                          </div>

                          <p className="text-sm text-black/50">
                            {testimonial.location}
                          </p>
                        </div>

                        <span className="hidden text-[9px] font-semibold uppercase tracking-[0.15em] text-[#16AEE5] sm:block">
                          Verified
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                );
              },
            )}
          </div>

          {/* Rating summary */}
          <Reveal className="mt-12">
            <div className="flex flex-col items-center justify-center gap-5 bg-black px-7 py-7 text-white sm:flex-row">
              <div className="flex items-center gap-1">
                {Array.from({
                  length: 5,
                }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-[#16AEE5] text-[#16AEE5]"
                  />
                ))}
              </div>

              <div className="hidden h-8 w-px bg-white/20 sm:block" />

              <div className="text-center sm:text-left">
                <p className="font-display text-xl">
                  Comfortable stays and welcoming service
                </p>

                <p className="text-xs text-white/50">
                  Guest experiences at Globar Village
                  Apartment
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
