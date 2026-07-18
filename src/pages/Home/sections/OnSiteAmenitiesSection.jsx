import { Link } from "react-router-dom";
import {
  Coffee,
  Flame,
  ShoppingCart,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const amenities = [
  {
    title: "Restaurant",
    subtitle: "Fresh meals, served conveniently",
    description:
      "Enjoy freshly prepared local and international dishes without leaving the property.",
    image: "/glb.jpg",
    icon: UtensilsCrossed,
    layout: "lg:col-span-7",
    height: "min-h-[430px]",
  },
  {
    title: "Supermarket",
    subtitle: "Everyday essentials close by",
    description:
      "Pick up groceries, refreshments and daily necessities conveniently on site.",
    image: "/glbside.jpg",
    icon: ShoppingCart,
    layout: "lg:col-span-5",
    height: "min-h-[430px]",
  },
  {
    title: "Bar",
    subtitle: "Relax and enjoy the evening",
    description:
      "Unwind with refreshing drinks in a welcoming and comfortable atmosphere.",
    image: "/bar.jpg",
    icon: Wine,
    layout: "lg:col-span-4",
    height: "min-h-[360px]",
  },
  {
    title: "Coffee Shop",
    subtitle: "Coffee and relaxed conversations",
    description:
      "Start your morning or enjoy a quiet break with fresh coffee and light refreshments.",
    image: "/glbrooftop.jpg",
    icon: Coffee,
    layout: "lg:col-span-4",
    height: "min-h-[360px]",
  },
  {
    title: "Sauna",
    subtitle: "Rest, refresh and recharge",
    description:
      "Relax after a busy day and enjoy a peaceful wellness experience during your stay.",
    image: "/room2.jpg",
    icon: Flame,
    layout: "lg:col-span-4",
    height: "min-h-[360px]",
  },
];

const OnSiteAmenitiesSection = () => {
  return (
    <section
      id="on-site-amenities"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#16AEE5]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-[#16AEE5]/5 blur-3xl" />

      <div className="container relative">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#16AEE5]" />

            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#16AEE5]">
              Everything On Site
            </p>

            <span className="h-px w-12 bg-[#16AEE5]" />
          </div>

          <h2 className="mb-6 font-display text-3xl leading-tight text-black md:text-5xl">
            More than an apartment.
            <span className="mt-2 block italic text-[#16AEE5]">
              Everything within reach.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-8 text-black/60">
            Eat, shop, relax and enjoy your stay with
            convenient facilities available at Globar
            Village Apartment.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {amenities.map(
            (
              {
                title,
                subtitle,
                description,
                image,
                icon: Icon,
                layout,
                height,
              },
              index,
            ) => (
              <Reveal
                key={title}
                delay={index * 100}
                animation="scale-in"
                className={layout}
              >
                <article
                  className={`group relative h-full overflow-hidden bg-black ${height}`}
                >
                  <img
                    src={image}
                    alt={`${title} at Globar Village Apartment`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/5 transition-colors duration-500 group-hover:via-black/55" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-7 text-white md:p-9">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#16AEE5] text-black shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-3">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.7}
                      />
                    </div>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#16AEE5]">
                      {subtitle}
                    </p>

                    <h3 className="mb-3 font-display text-3xl">
                      {title}
                    </h3>

                    <p className="max-w-md translate-y-2 text-sm leading-7 text-white/75 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:text-white">
                      {description}
                    </p>

                    <div className="mt-5 h-[2px] w-12 bg-[#16AEE5] transition-all duration-500 group-hover:w-24" />
                  </div>

                  <span className="absolute right-6 top-5 text-5xl font-light text-white/15">
                    0{index + 1}
                  </span>
                </article>
              </Reveal>
            ),
          )}
        </div>

        <Reveal
          delay={250}
          className="mt-12 flex flex-col items-center justify-between gap-7 border border-black/10 bg-[#F6FBFD] p-7 text-center md:flex-row md:p-9 md:text-left"
        >
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#16AEE5]">
              Convenient Living
            </p>

            <h3 className="font-display text-2xl text-black md:text-3xl">
              Everything you need during your stay.
            </h3>

            <p className="mt-2 text-sm leading-7 text-black/60">
              Contact our team for service availability
              and additional information.
            </p>
          </div>

          <Button
            asChild
            className="h-12 shrink-0 rounded-none bg-black px-9 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#16AEE5] hover:text-black"
          >
            <Link to="/contact">
              Ask About Our Services
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default OnSiteAmenitiesSection;
