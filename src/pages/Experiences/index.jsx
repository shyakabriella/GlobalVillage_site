import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Coffee,
  CookingPot,
  Dumbbell,
  Home,
  MapPin,
  Sparkles,
  WashingMachine,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SiteNav, {
  BRAND,
} from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

const hero = "/glb.jpg";

const experiences = [
  {
    icon: Home,
    title: "Fully Furnished Living",
    tag: "Comfort",
    image: "/room.jpg",
    text:
      "Relax in comfortable, well-appointed rooms with contemporary furnishings and practical living spaces.",
    details: [
      "Modern furnishings",
      "Comfortable bedrooms",
      "Flexible stays",
    ],
  },
  {
    icon: Coffee,
    title: "Balcony and Rooftop",
    tag: "Outdoor Living",
    image: "/glbrooftop.jpg",
    text:
      "Enjoy fresh Kigali air, outdoor seating and pleasant views from the balcony, terrace and rooftop.",
    details: [
      "Private balcony",
      "Outdoor terrace",
      "Property views",
    ],
  },
  {
    icon: CookingPot,
    title: "Kitchen and Laundry",
    tag: "Convenience",
    image: "/room2.jpg",
    text:
      "Prepare meals and manage longer stays conveniently with private kitchen and laundry facilities.",
    details: [
      "Private kitchen",
      "Food storage",
      "Washing machine",
    ],
  },
  {
    icon: Sparkles,
    title: "Sauna and Wellness",
    tag: "Relaxation",
    image: "/room1.jpg",
    text:
      "Make time to relax with convenient sauna, pool and wellness facilities available at the property.",
    details: [
      "Private sauna",
      "Pool facilities",
      "Peaceful atmosphere",
    ],
  },
  {
    icon: Dumbbell,
    title: "Fitness and Recreation",
    tag: "Wellness",
    image: "/glbside.jpg",
    text:
      "Maintain your routine during your stay with fitness and leisure facilities designed for guests.",
    details: [
      "Gym facilities",
      "Leisure areas",
      "Flexible access",
    ],
  },
  {
    icon: Coffee,
    title: "Bar and Social Space",
    tag: "Dining",
    image: "/bar.jpg",
    text:
      "Meet, relax and enjoy refreshments in a welcoming social environment within the property.",
    details: [
      "Bar and lounge",
      "Relaxed seating",
      "Social atmosphere",
    ],
  },
];

const Experiences = () => {
  return (
    <>
      <style>
        {`
          @keyframes experienceHeroEntrance {
            from {
              opacity: 0;
              transform: translateY(35px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes experienceImageEntrance {
            from {
              opacity: 0;
              transform:
                translateX(-35px)
                scale(0.97);
            }

            to {
              opacity: 1;
              transform:
                translateX(0)
                scale(1);
            }
          }

          @keyframes experienceContentEntrance {
            from {
              opacity: 0;
              transform: translateX(35px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
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

          @keyframes experienceIconFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          .experience-hero {
            animation:
              experienceHeroEntrance 1s
              ease-out both;
          }

          .experience-image {
            animation:
              experienceImageEntrance 0.9s
              ease-out both;
          }

          .experience-content {
            animation:
              experienceContentEntrance 0.9s
              ease-out both;
          }

          .experience-line {
            animation:
              experienceLineGrow 1s
              ease-out forwards;
          }

          .experience-icon {
            animation:
              experienceIconFloat 4s
              ease-in-out infinite;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .experience-hero,
            .experience-image,
            .experience-content,
            .experience-line,
            .experience-icon {
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
              alt={`${BRAND} experiences`}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
          </div>

          <div className="container relative z-10">
            <div className="experience-hero max-w-4xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="experience-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Guest Experiences
                </p>
              </div>

              <h1 className="mb-5 font-display text-4xl leading-tight md:text-6xl">
                More than
                <span className="block italic text-[#16AEE5]">
                  a place to stay.
                </span>
              </h1>

              <p className="max-w-2xl leading-8 text-white/65">
                Discover comfortable accommodation,
                relaxing facilities and convenient
                experiences at Global Village Apartment.
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

                <span>Experiences</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#16AEE5] via-[#16AEE5]/60 to-transparent" />
        </section>

        {/* Introduction */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

          <Reveal className="container relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="experience-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Your Stay
              </p>

              <div className="experience-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-6 font-display text-3xl leading-tight md:text-5xl">
              Experiences designed for
              <span className="italic text-[#16AEE5]">
                {" "}comfort.
              </span>
            </h2>

            <p className="leading-8 text-black/60">
              Whether you are visiting for business,
              leisure or an extended stay, every facility
              is designed to make your time in Kigali
              convenient and memorable.
            </p>
          </Reveal>
        </section>

        {/* Experiences */}
        <section className="container space-y-20 pb-20 md:space-y-28">
          {experiences.map(
            (experience, index) => {
              const Icon = experience.icon;
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={experience.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Image */}
                  <Reveal
                    animation="scale-in"
                    className={`experience-image ${
                      isReversed
                        ? "lg:order-2"
                        : ""
                    }`}
                  >
                    <div className="group relative h-[380px] overflow-hidden bg-black md:h-[500px]">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                      <span className="absolute left-5 top-5 bg-[#16AEE5] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                        {experience.tag}
                      </span>

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </Reveal>

                  {/* Content */}
                  <Reveal
                    delay={120}
                    className={`experience-content ${
                      isReversed
                        ? "lg:order-1"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="experience-icon flex h-14 w-14 items-center justify-center bg-black">
                        <Icon
                          className="h-7 w-7 text-[#16AEE5]"
                          strokeWidth={1.5}
                        />
                      </div>

                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#16AEE5]">
                        {experience.tag}
                      </p>
                    </div>

                    <h3 className="mb-5 mt-6 font-display text-3xl leading-tight md:text-5xl">
                      {experience.title}
                    </h3>

                    <p className="mb-7 max-w-xl leading-8 text-black/60">
                      {experience.text}
                    </p>

                    <ul className="space-y-4">
                      {experience.details.map(
                        (detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-3 text-sm text-black/70"
                          >
                            <span className="h-2 w-2 flex-none bg-[#16AEE5]" />

                            {detail}
                          </li>
                        ),
                      )}
                    </ul>

                    <div className="mt-8 h-px w-24 bg-[#16AEE5]" />
                  </Reveal>
                </article>
              );
            },
          )}
        </section>

        {/* Location highlight */}
        <section className="bg-[#F4FBFE] py-14">
          <div className="container grid gap-8 md:grid-cols-3">
            <Reveal className="flex items-center gap-5">
              <MapPin className="h-9 w-9 flex-none text-[#16AEE5]" />

              <div>
                <p className="font-display text-xl">
                  Kanombe, Kigali
                </p>

                <p className="text-sm text-black/50">
                  KK 177 St
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={100}
              className="flex items-center gap-5"
            >
              <Clock3 className="h-9 w-9 flex-none text-[#16AEE5]" />

              <div>
                <p className="font-display text-xl">
                  Flexible Stays
                </p>

                <p className="text-sm text-black/50">
                  Short and extended visits
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={200}
              className="flex items-center gap-5"
            >
              <WashingMachine className="h-9 w-9 flex-none text-[#16AEE5]" />

              <div>
                <p className="font-display text-xl">
                  Modern Facilities
                </p>

                <p className="text-sm text-black/50">
                  Designed for convenient living
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-black py-16 text-center text-white md:py-20">
          <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#16AEE5]/15 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#16AEE5]/15 blur-3xl" />

          <Reveal className="container relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
              Begin Your Experience
            </p>

            <h2 className="mb-6 font-display text-3xl leading-tight md:text-5xl">
              Make Global Village
              <span className="block italic text-[#16AEE5]">
                your Kigali home.
              </span>
            </h2>

            <p className="mx-auto mb-9 max-w-xl leading-7 text-white/60">
              Contact our team to check availability and
              plan a comfortable stay in Kigali.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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

export default Experiences;
