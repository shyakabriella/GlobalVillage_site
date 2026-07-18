import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Car,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { MAIN_IMAGE } from "../homeData";

const reservationBenefits = [
  {
    icon: CalendarCheck,
    label: "Flexible Stays",
  },
  {
    icon: Car,
    label: "Free Parking",
  },
  {
    icon: ShieldCheck,
    label: "Secure Property",
  },
];

const ReservationSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes reservationContentEntrance {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes reservationIconFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-7px);
            }
          }

          @keyframes reservationLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          @keyframes reservationLightMove {
            0% {
              transform: translateX(-150%);
            }

            100% {
              transform: translateX(250%);
            }
          }

          .reservation-content {
            animation:
              reservationContentEntrance 1s
              ease-out both;
          }

          .reservation-icon {
            animation:
              reservationIconFloat 4s
              ease-in-out infinite;
          }

          .reservation-line {
            animation:
              reservationLineGrow 1s
              ease-out forwards;
          }

          .reservation-light {
            animation:
              reservationLightMove 7s
              linear infinite;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .reservation-content,
            .reservation-icon,
            .reservation-line,
            .reservation-light {
              animation: none;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden bg-black py-20 text-center text-white md:py-28">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={MAIN_IMAGE}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/80" />
        </div>

        {/* Blue lighting */}
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#16AEE5]/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#16AEE5]/20 blur-3xl" />

        {/* Moving blue light */}
        <div className="reservation-light pointer-events-none absolute bottom-0 top-0 w-40 -skew-x-12 bg-gradient-to-r from-transparent via-[#16AEE5]/10 to-transparent blur-xl" />

        {/* Blue borders */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#16AEE5] to-transparent" />

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#16AEE5] to-transparent" />

        <Reveal className="container relative z-10">
          <div className="reservation-content mx-auto max-w-4xl">
            {/* Icon */}
            <div className="reservation-icon mx-auto mb-7 flex h-16 w-16 items-center justify-center border border-[#16AEE5] bg-black/60 backdrop-blur-sm">
              <Building2
                className="h-8 w-8 text-[#16AEE5]"
                strokeWidth={1.5}
              />
            </div>

            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="reservation-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Reservations
              </p>

              <div className="reservation-line h-px bg-[#16AEE5]" />
            </div>

            {/* Heading */}
            <h2 className="mx-auto mb-6 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
              Find an apartment that
              <span className="block italic text-[#16AEE5]">
                feels like home.
              </span>
            </h2>

            <p className="mx-auto mb-9 max-w-xl leading-7 text-white/65">
              Contact our team to check availability and
              reserve your apartment at Globar Village.
            </p>

            {/* Reservation benefits */}
            <div className="mx-auto mb-10 grid max-w-2xl gap-px bg-white/15 sm:grid-cols-3">
              {reservationBenefits.map(
                ({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center justify-center gap-3 bg-black/60 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:bg-[#16AEE5]"
                  >
                    <Icon
                      className="h-5 w-5 text-[#16AEE5] transition-colors group-hover:text-black"
                      strokeWidth={1.5}
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors group-hover:text-black">
                      {label}
                    </span>
                  </div>
                ),
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-13 rounded-none bg-[#16AEE5] px-10 text-black hover:bg-white"
              >
                <Link
                  to="/contact"
                  className="flex items-center gap-3"
                >
                  Contact Us Today

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-none border-white/50 bg-black/30 px-10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-black"
              >
                <Link to="/rooms">
                  View Apartments
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default ReservationSection;
