import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const galleryImages = [
  {
    id: 1,
    src: "/glb.jpg",
    alt: "Front view of Globar Village Apartment",
    title: "Exterior View",
    category: "Property",
  },
  {
    id: 2,
    src: "/glbrooftop.jpg",
    alt: "Globar Village rooftop",
    title: "Rooftop",
    category: "Outdoor",
  },
  {
    id: 3,
    src: "/glbside.jpg",
    alt: "Side view of Globar Village Apartment",
    title: "Side View",
    category: "Property",
  },
  {
    id: 4,
    src: "/room.jpg",
    alt: "Globar Village apartment bedroom",
    title: "Apartment Bedroom",
    category: "Accommodation",
  },
  {
    id: 5,
    src: "/room1.jpg",
    alt: "Globar Village room interior",
    title: "Room Interior",
    category: "Accommodation",
  },
  {
    id: 6,
    src: "/room2.jpg",
    alt: "Globar Village guest room",
    title: "Guest Room",
    category: "Accommodation",
  },
  {
    id: 7,
    src: "/bar.jpg",
    alt: "Globar Village bar and lounge",
    title: "Bar and Lounge",
    category: "Dining",
  },
  {
    id: 8,
    src: "/globa.png",
    alt: "Globar Village property view",
    title: "Globar Village",
    category: "Property",
  },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] =
    useState(null);

  const closeGallery = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex ===
      galleryImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [activeIndex]);

  const activeImage =
    activeIndex !== null
      ? galleryImages[activeIndex]
      : null;

  return (
    <>
      <style>
        {`
          @keyframes galleryImageEntrance {
            from {
              opacity: 0;
              transform:
                translateY(25px)
                scale(0.96);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }

          @keyframes galleryLineGrow {
            from {
              width: 0;
            }

            to {
              width: 52px;
            }
          }

          @keyframes galleryViewerEntrance {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          .gallery-image {
            opacity: 0;
            animation:
              galleryImageEntrance 0.7s
              ease-out forwards;
          }

          .gallery-line {
            animation:
              galleryLineGrow 1s
              ease-out forwards;
          }

          .gallery-viewer {
            animation:
              galleryViewerEntrance 0.3s
              ease-out both;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .gallery-image,
            .gallery-line,
            .gallery-viewer {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden bg-[#F4FBFE] py-20 md:py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Heading */}
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="gallery-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Gallery
              </p>

              <div className="gallery-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl leading-tight text-black md:text-5xl">
              Discover
              <span className="italic text-[#16AEE5]">
                {" "}Globar Village.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-black/60">
              Explore our apartments, rooms, outdoor
              spaces and guest facilities.
            </p>
          </Reveal>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4">
            {galleryImages.map(
              (image, index) => {
                const isLarge =
                  index === 0 || index === 5;

                return (
                  <Reveal
                    key={image.id}
                    delay={index * 70}
                    animation="scale-in"
                    className={`${
                      isLarge
                        ? "md:col-span-2 md:row-span-2"
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(index)
                      }
                      className="gallery-image group relative h-72 w-full overflow-hidden bg-black text-left md:h-full"
                      style={{
                        animationDelay: `${
                          index * 0.08
                        }s`,
                      }}
                      aria-label={`Open ${image.title}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Image information */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#16AEE5]">
                          {image.category}
                        </p>

                        <h3 className="font-display text-xl text-white">
                          {image.title}
                        </h3>
                      </div>

                      {/* Open icon */}
                      <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-black/70 text-[#16AEE5] opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                        <Maximize2 className="h-5 w-5" />
                      </span>

                      {/* Blue bottom line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#16AEE5] transition-all duration-500 group-hover:w-full" />
                    </button>
                  </Reveal>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Full-screen image viewer */}
      {activeImage && (
        <div
          className="gallery-viewer fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center border border-white/30 bg-black text-white transition-colors hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#16AEE5] hover:text-black md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Image */}
          <div className="flex h-full w-full flex-col items-center justify-center">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[78vh] max-w-full object-contain"
            />

            <div className="mt-5 text-center">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                {activeImage.category}
              </p>

              <h3 className="font-display text-2xl text-white">
                {activeImage.title}
              </h3>

              <p className="mt-2 text-xs text-white/45">
                {activeIndex + 1} /{" "}
                {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/10 text-white transition-colors hover:bg-[#16AEE5] hover:text-black md:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  );
};

export default GallerySection;
