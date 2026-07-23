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
  Users,
  WashingMachine,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const SELECTED_APARTMENT_KEY = "global-village-selected-apartment";

const apartmentHouses = [
  {
    id: 1,
    number: "01",
    name: "Apartment House 01",
    type: "One-Bedroom House",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    image: "/room.jpg",
    features: [
      "One private bedroom",
      "One private bathroom",
      "Comfortable living space",
    ],
  },
  {
    id: 2,
    number: "02",
    name: "Apartment House 02",
    type: "One-Bedroom House",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    image: "/room.JPG",
    features: [
      "One private bedroom",
      "One private bathroom",
      "Free wireless internet",
    ],
  },
  {
    id: 3,
    number: "03",
    name: "Apartment House 03",
    type: "One-Bedroom House",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    image: "/room1.jpg",
    features: [
      "One comfortable bedroom",
      "One private bathroom",
      "Modern interior space",
    ],
  },
  {
    id: 4,
    number: "04",
    name: "Apartment House 04",
    type: "One-Bedroom House",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    image: "/room1.JPG",
    features: [
      "One private bedroom",
      "One private bathroom",
      "Secure apartment access",
    ],
  },
  {
    id: 5,
    number: "05",
    name: "Apartment House 05",
    type: "One-Bedroom House",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    image: "/room2.jpg",
    features: [
      "One comfortable bedroom",
      "One private bathroom",
      "Television and Wi-Fi",
    ],
  },
  {
    id: 6,
    number: "06",
    name: "Apartment House 06",
    type: "One-Bedroom House",
    rooms: 1,
    bathrooms: 1,
    guests: 2,
    image: "/room2.JPG",
    features: [
      "One private bedroom",
      "One private bathroom",
      "Quiet living environment",
    ],
  },
  {
    id: 7,
    number: "07",
    name: "Apartment House 07",
    type: "Two-Bedroom House",
    rooms: 2,
    bathrooms: 2,
    guests: 4,
    image: "/room3.JPG",
    features: [
      "Two private bedrooms",
      "Two private bathrooms",
      "Spacious shared living area",
    ],
  },
  {
    id: 8,
    number: "08",
    name: "Apartment House 08",
    type: "Two-Bedroom House",
    rooms: 2,
    bathrooms: 2,
    guests: 4,
    image: "/room5.JPG",
    features: [
      "Two comfortable bedrooms",
      "Two private bathrooms",
      "Suitable for small groups",
    ],
  },
  {
    id: 9,
    number: "09",
    name: "Apartment House 09",
    type: "Two-Bedroom House",
    rooms: 2,
    bathrooms: 2,
    guests: 4,
    image: "/room6.JPG",
    features: [
      "Two private bedrooms",
      "Two private bathrooms",
      "Modern apartment facilities",
    ],
  },
  {
    id: 10,
    number: "10",
    name: "Apartment House 10",
    type: "Two-Bedroom House",
    rooms: 2,
    bathrooms: 2,
    guests: 4,
    image: "/room7.JPG",
    features: [
      "Two comfortable bedrooms",
      "Two private bathrooms",
      "Private and secure setting",
    ],
  },
  {
    id: 11,
    number: "11",
    name: "Apartment House 11",
    type: "Three-Bedroom House",
    rooms: 3,
    bathrooms: 3,
    guests: 6,
    image: "/salon.JPG",
    features: [
      "Three private bedrooms",
      "Three private bathrooms",
      "Ideal for families and groups",
    ],
  },
  {
    id: 12,
    number: "12",
    name: "Apartment House 12",
    type: "Three-Bedroom House",
    rooms: 3,
    bathrooms: 3,
    guests: 6,
    image: "/saloon2.JPG",
    features: [
      "Three comfortable bedrooms",
      "Three private bathrooms",
      "Large shared living space",
    ],
  },
];

const apartmentStats = [
  {
    icon: Building2,
    value: "12",
    label: "Apartment Houses",
  },
  {
    icon: BedDouble,
    value: "20",
    label: "Guest Rooms",
  },
  {
    icon: Bath,
    value: "20",
    label: "Private Bathrooms",
  },
  {
    icon: Users,
    value: "40+",
    label: "Guest Capacity",
  },
];

const facilities = [
  {
    icon: Building2,
    label: "Private Balconies",
  },
  {
    icon: TreePine,
    label: "Garden and Terrace",
  },
  {
    icon: Sparkles,
    label: "Sauna",
  },
  {
    icon: CookingPot,
    label: "Kitchen Facilities",
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

const saveSelectedApartment = (apartment) => {
  try {
    window.sessionStorage.setItem(
      SELECTED_APARTMENT_KEY,
      JSON.stringify(apartment),
    );
  } catch (error) {
    console.error(
      "Unable to save the selected apartment:",
      error,
    );
  }
};

const ApartmentsSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes apartmentCardEntrance {
            from {
              opacity: 0;
              transform: translateY(40px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes facilityEntrance {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes apartmentLineMove {
            from {
              transform: translateX(-100%);
            }

            to {
              transform: translateX(300%);
            }
          }

          @keyframes apartmentNumberPulse {
            0%,
            100% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.06);
            }
          }

          .apartment-house-card {
            opacity: 0;
            animation:
              apartmentCardEntrance 0.85s
              ease-out forwards;
          }

          .apartment-facility {
            opacity: 0;
            animation:
              facilityEntrance 0.7s
              ease-out forwards;
          }

          .apartment-moving-line {
            animation:
              apartmentLineMove 3s linear
              infinite;
          }

          .apartment-house-card:hover
          .apartment-house-number {
            animation:
              apartmentNumberPulse 1.2s
              ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .apartment-house-card,
            .apartment-facility,
            .apartment-moving-line,
            .apartment-house-card:hover
            .apartment-house-number {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="apartments"
        className="relative overflow-hidden bg-[#F4FBFE] py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-32 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          <Reveal className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Our Accommodation
              </p>

              <div className="h-px w-12 bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl leading-tight text-black md:text-5xl">
              Twelve private apartment houses,

              <span className="block italic text-[#16AEE5]">
                twenty comfortable rooms.
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-sm leading-7 text-black/65 md:text-base">
              Select an apartment house to view your choice on
              the reservation page and send an availability
              inquiry.
            </p>
          </Reveal>

          <Reveal className="mb-16">
            <div className="grid grid-cols-2 overflow-hidden border border-black/10 bg-white shadow-lg lg:grid-cols-4">
              {apartmentStats.map(
                ({ icon: Icon, value, label }, index) => (
                  <div
                    key={label}
                    className={`group flex min-h-32 items-center justify-center gap-4 p-5 transition-all duration-300 hover:bg-black hover:text-white md:p-7 ${
                      index !== apartmentStats.length - 1
                        ? "border-r border-black/10"
                        : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-none items-center justify-center bg-[#16AEE5]/10 transition-colors duration-300 group-hover:bg-[#16AEE5]">
                      <Icon
                        className="h-6 w-6 text-[#16AEE5] transition-colors group-hover:text-black"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div>
                      <p className="font-display text-2xl text-[#16AEE5] md:text-3xl">
                        {value}
                      </p>

                      <p className="text-[10px] uppercase tracking-[0.14em] text-black/55 transition-colors group-hover:text-white/65 md:text-xs">
                        {label}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Reveal>

          <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                Select Your House
              </p>

              <h3 className="font-display text-3xl text-black md:text-4xl">
                Our 12 apartment houses
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60">
              Click the apartment image or the selection button.
              Your chosen house will appear automatically on the
              contact page.
            </p>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {apartmentHouses.map((apartment, index) => (
              <Reveal
                key={apartment.id}
                delay={(index % 3) * 100}
              >
                <article
                  className="apartment-house-card group flex h-full flex-col overflow-hidden border border-black/10 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#16AEE5] hover:shadow-2xl"
                  style={{
                    animationDelay: `${
                      (index % 4) * 0.12
                    }s`,
                  }}
                >
                  <Link
                    to={`/contact?house=${apartment.id}`}
                    onClick={() =>
                      saveSelectedApartment(apartment)
                    }
                    className="relative block h-72 overflow-hidden bg-black"
                    aria-label={`Select ${apartment.name}`}
                  >
                    <img
                      src={apartment.image}
                      alt={`${apartment.name} room`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

                    <div className="apartment-house-number absolute left-5 top-5 flex h-14 w-14 items-center justify-center border border-white/25 bg-black/60 font-display text-xl text-[#16AEE5] backdrop-blur-md">
                      {apartment.number}
                    </div>

                    <span className="absolute right-5 top-5 bg-[#16AEE5] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-black">
                      {apartment.type}
                    </span>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#16AEE5]">
                        Click to select
                      </p>

                      <h4 className="font-display text-2xl text-white">
                        {apartment.name}
                      </h4>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-white/20">
                      <div className="apartment-moving-line h-full w-1/3 bg-[#16AEE5]" />
                    </div>
                  </Link>

                  <div className="grid grid-cols-3 border-b border-black/10 bg-[#F4FBFE]">
                    <div className="flex flex-col items-center justify-center border-r border-black/10 px-2 py-4 text-center">
                      <BedDouble
                        className="mb-2 h-5 w-5 text-[#16AEE5]"
                        strokeWidth={1.5}
                      />

                      <strong className="text-sm text-black">
                        {apartment.rooms}
                      </strong>

                      <span className="text-[9px] uppercase tracking-[0.12em] text-black/45">
                        {apartment.rooms === 1
                          ? "Room"
                          : "Rooms"}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center border-r border-black/10 px-2 py-4 text-center">
                      <Bath
                        className="mb-2 h-5 w-5 text-[#16AEE5]"
                        strokeWidth={1.5}
                      />

                      <strong className="text-sm text-black">
                        {apartment.bathrooms}
                      </strong>

                      <span className="text-[9px] uppercase tracking-[0.12em] text-black/45">
                        {apartment.bathrooms === 1
                          ? "Bathroom"
                          : "Bathrooms"}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center px-2 py-4 text-center">
                      <Users
                        className="mb-2 h-5 w-5 text-[#16AEE5]"
                        strokeWidth={1.5}
                      />

                      <strong className="text-sm text-black">
                        {apartment.guests}
                      </strong>

                      <span className="text-[9px] uppercase tracking-[0.12em] text-black/45">
                        Guests
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col p-6">
                    <ul className="mb-7 space-y-3">
                      {apartment.features.map((feature) => (
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
                        to={`/contact?house=${apartment.id}`}
                        onClick={() =>
                          saveSelectedApartment(apartment)
                        }
                        className="flex items-center justify-center gap-3"
                      >
                        Select This House

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="border border-black/10 bg-white p-7 shadow-lg md:p-10">
              <div className="mx-auto mb-9 max-w-2xl text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                  Shared Property Facilities
                </p>

                <h3 className="mb-3 font-display text-2xl text-black md:text-3xl">
                  Facilities available to our guests
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {facilities.map(
                  ({ icon: Icon, label }, index) => (
                    <div
                      key={label}
                      className="apartment-facility group flex min-h-32 flex-col items-center justify-center border border-black/10 bg-[#F4FBFE] p-4 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#16AEE5] hover:bg-black hover:text-white"
                      style={{
                        animationDelay: `${
                          0.15 + index * 0.1
                        }s`,
                      }}
                    >
                      <Icon
                        className="mb-3 h-7 w-7 text-[#16AEE5] transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">
                        {label}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ApartmentsSection;