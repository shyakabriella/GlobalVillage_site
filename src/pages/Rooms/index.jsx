import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bath,
  Bed,
  CheckCircle2,
  CookingPot,
  MessageCircle,
  Sparkles,
  Tv,
  Users,
  WashingMachine,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SiteNav, {
  BRAND,
} from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

const hero = "/room.jpg";

const rooms = [
  {
    id: 1,
    img: "/room.jpg",
    name: "Furnished Double Room",
    beds: "1 double bed",
    guests: 2,
    baths: 1,
    category: "double",
    tag: "Comfortable",
    description:
      "A comfortable furnished room suitable for individuals and couples.",
    facilities: [
      "Free Wi-Fi",
      "Private bathroom",
      "Flat-screen TV",
    ],
  },
  {
    id: 2,
    img: "/room1.jpg",
    name: "Furnished Twin Room",
    beds: "2 single beds",
    guests: 2,
    baths: 1,
    category: "twin",
    tag: "Flexible",
    description:
      "A practical twin room for friends, colleagues and business travellers.",
    facilities: [
      "Free Wi-Fi",
      "Private bathroom",
      "Modern furnishings",
    ],
  },
  {
    id: 3,
    img: "/room2.jpg",
    name: "Family Room",
    beds: "3 beds",
    guests: 4,
    baths: 2,
    category: "family",
    tag: "Spacious",
    description:
      "A spacious room designed for families, groups and extended stays.",
    facilities: [
      "Free Wi-Fi",
      "Private bathroom",
      "Family living space",
    ],
  },
];

const filters = [
  {
    id: "all",
    label: "All Rooms",
  },
  {
    id: "double",
    label: "Double",
  },
  {
    id: "twin",
    label: "Twin",
  },
  {
    id: "family",
    label: "Family",
  },
];

const apartmentFacilities = [
  {
    icon: CookingPot,
    label: "Private Kitchen",
  },
  {
    icon: WashingMachine,
    label: "Washing Machine",
  },
  {
    icon: Tv,
    label: "Flat-Screen TV",
  },
  {
    icon: Sparkles,
    label: "Sauna",
  },
  {
    icon: Wifi,
    label: "Free Wi-Fi",
  },
  {
    icon: Bath,
    label: "Private Bathroom",
  },
];

const propertyStats = [
  {
    value: "20",
    label: "Bedrooms",
  },
  {
    value: "20",
    label: "Bathrooms",
  },
  {
    value: "22",
    label: "Beds",
  },
  {
    value: "Flexible",
    label: "Length of Stay",
  },
];

const Rooms = () => {
  const [active, setActive] =
    useState("all");

  const visibleRooms =
    active === "all"
      ? rooms
      : rooms.filter(
          (room) =>
            room.category === active,
        );

  return (
    <>
      <style>
        {`
          @keyframes roomsHeroEntrance {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes roomCardEntrance {
            from {
              opacity: 0;
              transform:
                translateY(28px)
                scale(0.97);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }

          @keyframes roomsLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          @keyframes roomFacilityEntrance {
            from {
              opacity: 0;
              transform: scale(0.88);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .rooms-hero-content {
            animation:
              roomsHeroEntrance 1s
              ease-out both;
          }

          .room-card {
            opacity: 0;
            animation:
              roomCardEntrance 0.7s
              ease-out forwards;
          }

          .rooms-line {
            animation:
              roomsLineGrow 1s
              ease-out forwards;
          }

          .room-facility {
            opacity: 0;
            animation:
              roomFacilityEntrance 0.6s
              ease-out forwards;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .rooms-hero-content,
            .room-card,
            .rooms-line,
            .room-facility {
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
              alt={`${BRAND} furnished room`}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          <div className="container relative z-10">
            <div className="rooms-hero-content max-w-4xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="rooms-line h-px bg-[#16AEE5]" />

                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                  Accommodation
                </p>
              </div>

              <h1 className="mb-5 font-display text-4xl leading-tight md:text-6xl">
                Apartments and
                <span className="block italic text-[#16AEE5]">
                  furnished rooms.
                </span>
              </h1>

              <p className="max-w-2xl leading-8 text-white/65">
                Comfortable rooms, flexible stays and
                modern apartment facilities in Kigali.
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

                <span>Rooms</span>
              </nav>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#16AEE5] via-[#16AEE5]/60 to-transparent" />
        </section>

        {/* Property statistics */}
        <section className="bg-black text-white">
          <div className="container grid grid-cols-2 gap-px bg-white/15 md:grid-cols-4">
            {propertyStats.map(
              (stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 80}
                  className="bg-black"
                >
                  <div className="group flex min-h-32 flex-col items-center justify-center p-5 text-center transition-colors duration-400 hover:bg-[#16AEE5]">
                    <p className="font-display text-3xl text-[#16AEE5] transition-colors group-hover:text-black">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50 transition-colors group-hover:text-black/60">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </section>

        {/* Introduction */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#16AEE5]/10 blur-3xl" />

          <Reveal className="container relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="rooms-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Choose Your Room
              </p>

              <div className="rooms-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-6 font-display text-3xl md:text-5xl">
              Find the space that
              <span className="italic text-[#16AEE5]">
                {" "}suits your stay.
              </span>
            </h2>

            <p className="leading-8 text-black/60">
              Our furnished rooms are suitable for
              business, leisure, family travel and
              extended accommodation. Every guest also
              receives access to the property’s shared
              apartment facilities.
            </p>
          </Reveal>
        </section>

        {/* Filters */}
        <section className="container">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() =>
                  setActive(filter.id)
                }
                className={`border px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                  active === filter.id
                    ? "border-[#16AEE5] bg-[#16AEE5] text-black"
                    : "border-black/20 bg-white text-black hover:border-black hover:bg-black hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Room grid */}
        <section className="container pb-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleRooms.map(
              (room, index) => (
                <Reveal
                  key={room.id}
                  delay={index * 120}
                >
                  <article
                    className="room-card group flex h-full flex-col overflow-hidden border border-black/10 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#16AEE5] hover:shadow-2xl"
                    style={{
                      animationDelay: `${
                        index * 0.14
                      }s`,
                    }}
                  >
                    <div className="relative h-72 overflow-hidden bg-black">
                      <img
                        src={room.img}
                        alt={room.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 bg-[#16AEE5] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                        {room.tag}
                      </span>

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="mb-3 font-display text-2xl">
                        {room.name}
                      </h3>

                      <p className="mb-6 text-sm leading-7 text-black/55">
                        {room.description}
                      </p>

                      <div className="mb-6 grid grid-cols-3 gap-3 border-y border-black/10 py-5">
                        <div className="text-center">
                          <Bed className="mx-auto mb-2 h-5 w-5 text-[#16AEE5]" />

                          <p className="text-xs text-black/60">
                            {room.beds}
                          </p>
                        </div>

                        <div className="text-center">
                          <Users className="mx-auto mb-2 h-5 w-5 text-[#16AEE5]" />

                          <p className="text-xs text-black/60">
                            {room.guests} guests
                          </p>
                        </div>

                        <div className="text-center">
                          <Bath className="mx-auto mb-2 h-5 w-5 text-[#16AEE5]" />

                          <p className="text-xs text-black/60">
                            {room.baths} bathroom
                          </p>
                        </div>
                      </div>

                      <ul className="mb-7 space-y-3">
                        {room.facilities.map(
                          (facility) => (
                            <li
                              key={facility}
                              className="flex items-center gap-3 text-sm text-black/65"
                            >
                              <CheckCircle2 className="h-4 w-4 flex-none text-[#16AEE5]" />

                              {facility}
                            </li>
                          ),
                        )}
                      </ul>

                      <Button
                        asChild
                        variant="outline"
                        className="group/button mt-auto h-12 w-full rounded-none border-black text-black hover:border-[#16AEE5] hover:bg-[#16AEE5]"
                      >
                        <Link
                          to="/contact"
                          className="flex items-center justify-center gap-3"
                        >
                          Check Availability

                          <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-2" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>

          {visibleRooms.length === 0 && (
            <p className="py-20 text-center text-black/50">
              No rooms are available in this category.
            </p>
          )}
        </section>

        {/* Shared facilities */}
        <section className="bg-[#F4FBFE] py-16">
          <div className="container">
            <Reveal className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                Included Facilities
              </p>

              <h2 className="font-display text-3xl">
                More than just a room.
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {apartmentFacilities.map(
                (
                  {
                    icon: Icon,
                    label,
                  },
                  index,
                ) => (
                  <Reveal
                    key={label}
                    delay={index * 70}
                  >
                    <div
                      className="room-facility group flex min-h-32 flex-col items-center justify-center border border-black/10 bg-white p-4 text-center transition-all duration-400 hover:-translate-y-2 hover:border-[#16AEE5] hover:bg-black hover:text-white"
                      style={{
                        animationDelay: `${
                          index * 0.08
                        }s`,
                      }}
                    >
                      <Icon
                        className="mb-3 h-7 w-7 text-[#16AEE5]"
                        strokeWidth={1.5}
                      />

                      <p className="text-xs font-semibold uppercase tracking-[0.1em]">
                        {label}
                      </p>
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Help strip */}
        <section className="bg-black py-10 text-white">
          <div className="container flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                Need Help Choosing?
              </p>

              <h3 className="font-display text-2xl md:text-3xl">
                Our management team is ready to help.
              </h3>
            </div>

            <Button
              asChild
              size="lg"
              className="group rounded-none bg-[#16AEE5] px-8 text-black hover:bg-white"
            >
              <a
                href="https://wa.me/250786063441"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="h-5 w-5" />

                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
};

export default Rooms;
