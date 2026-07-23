import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";

import Reveal from "@/components/Reveal";

/*
|--------------------------------------------------------------------------
| Gallery Images
|--------------------------------------------------------------------------
|
| Image names must match the files inside the public folder exactly.
| Ubuntu treats .jpg and .JPG as different filenames.
|
*/

const galleryImages = [
  /*
  |--------------------------------------------------------------------------
  | Property and Exterior
  |--------------------------------------------------------------------------
  */

  {
    src: "/glb.jpg",
    title: "Main Property View",
    category: "Property",
  },
  {
    src: "/fullAprt.JPG",
    title: "Complete Apartment View",
    category: "Property",
  },
  {
    src: "/aprt.JPG",
    title: "Apartment Exterior",
    category: "Property",
  },
  {
    src: "/aprt3.JPG",
    title: "Apartment House",
    category: "Property",
  },
  {
    src: "/aprt4.JPG",
    title: "Property Entrance",
    category: "Property",
  },
  {
    src: "/aprt5.JPG",
    title: "Apartment Building",
    category: "Property",
  },
  {
    src: "/aprt6.JPG",
    title: "Modern Apartment Exterior",
    category: "Property",
  },
  {
    src: "/aprt7.JPG",
    title: "Apartment Property",
    category: "Property",
  },
  {
    src: "/glbside.jpg",
    title: "Side Property View",
    category: "Property",
  },
  {
    src: "/globa.png",
    title: "Global Village Apartment",
    category: "Property",
  },
  {
    src: "/part1.JPG",
    title: "Property Detail",
    category: "Property",
  },
  {
    src: "/contwa.JPG",
    title: "Apartment Surroundings",
    category: "Property",
  },
  {
    src: "/contwa1.JPG",
    title: "Property Environment",
    category: "Property",
  },

  /*
  |--------------------------------------------------------------------------
  | Outdoor and Rooftop
  |--------------------------------------------------------------------------
  */

  {
    src: "/glbrooftop.jpg",
    title: "Apartment Rooftop",
    category: "Outdoor",
  },
  {
    src: "/rftop.JPG",
    title: "Rooftop Area",
    category: "Outdoor",
  },
  {
    src: "/aout.JPG",
    title: "Outdoor Space",
    category: "Outdoor",
  },
  {
    src: "/banner.JPG",
    title: "Property Grounds",
    category: "Outdoor",
  },
  {
    src: "/bannere.JPG",
    title: "Outdoor Property View",
    category: "Outdoor",
  },

  /*
  |--------------------------------------------------------------------------
  | Bedrooms
  |--------------------------------------------------------------------------
  */

  {
    src: "/room.jpg",
    title: "Comfortable Bedroom",
    category: "Rooms",
  },
  {
    src: "/room.JPG",
    title: "Private Guest Room",
    category: "Rooms",
  },
  {
    src: "/room1.jpg",
    title: "Modern Room Interior",
    category: "Rooms",
  },
  {
    src: "/room1.JPG",
    title: "Apartment Bedroom",
    category: "Rooms",
  },
  {
    src: "/room2.jpg",
    title: "Guest Bedroom",
    category: "Rooms",
  },
  {
    src: "/room2.JPG",
    title: "Spacious Bedroom",
    category: "Rooms",
  },
  {
    src: "/room3.JPG",
    title: "Private Bedroom",
    category: "Rooms",
  },
  {
    src: "/room5.JPG",
    title: "Elegant Guest Room",
    category: "Rooms",
  },
  {
    src: "/room6.JPG",
    title: "Relaxing Bedroom",
    category: "Rooms",
  },
  {
    src: "/room7.JPG",
    title: "Apartment Room",
    category: "Rooms",
  },

  /*
  |--------------------------------------------------------------------------
  | Living Areas
  |--------------------------------------------------------------------------
  */

  {
    src: "/salon.JPG",
    title: "Apartment Living Room",
    category: "Living Areas",
  },
  {
    src: "/saloon.JPG",
    title: "Modern Lounge",
    category: "Living Areas",
  },
  {
    src: "/saloon2.JPG",
    title: "Comfortable Sitting Area",
    category: "Living Areas",
  },
  {
    src: "/sala mang.JPG",
    title: "Spacious Living Area",
    category: "Living Areas",
  },

  /*
  |--------------------------------------------------------------------------
  | Kitchen and Dining
  |--------------------------------------------------------------------------
  */

  {
    src: "/kitchen.JPG",
    title: "Modern Kitchen",
    category: "Kitchen & Dining",
  },
  {
    src: "/kitchn1.JPG",
    title: "Kitchen Facilities",
    category: "Kitchen & Dining",
  },
  {
    src: "/dine.JPG",
    title: "Dining Area",
    category: "Kitchen & Dining",
  },
  {
    src: "/bar.jpg",
    title: "Bar and Lounge",
    category: "Kitchen & Dining",
  },

  /*
  |--------------------------------------------------------------------------
  | Bathrooms
  |--------------------------------------------------------------------------
  */

  {
    src: "/douche.JPG",
    title: "Private Bathroom",
    category: "Bathrooms",
  },
  {
    src: "/douche2.JPG",
    title: "Modern Shower",
    category: "Bathrooms",
  },
  {
    src: "/douche3.JPG",
    title: "Bathroom Facilities",
    category: "Bathrooms",
  },

  /*
  |--------------------------------------------------------------------------
  | Wellness
  |--------------------------------------------------------------------------
  */

  {
    src: "/sauna.JPG",
    title: "Relaxing Sauna",
    category: "Wellness",
  },
  {
    src: "/saunaaa.JPG",
    title: "Private Sauna Area",
    category: "Wellness",
  },

  /*
  |--------------------------------------------------------------------------
  | Additional Property Photos
  |--------------------------------------------------------------------------
  */

  {
    src: "/Danakigali-photos-002.jpg",
    title: "Apartment Detail 01",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-003.jpg",
    title: "Apartment Detail 02",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-004.jpg",
    title: "Apartment Detail 03",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-005.jpg",
    title: "Apartment Detail 04",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-006.jpg",
    title: "Apartment Detail 05",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-007.jpg",
    title: "Apartment Detail 06",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-008.jpg",
    title: "Apartment Detail 07",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-009.jpg",
    title: "Apartment Detail 08",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-010.jpg",
    title: "Apartment Detail 09",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-013.jpg",
    title: "Apartment Detail 10",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-014.jpg",
    title: "Apartment Detail 11",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-015.jpg",
    title: "Apartment Detail 12",
    category: "Property Details",
  },
  {
    src: "/Danakigali-photos-018.jpg",
    title: "Apartment Detail 13",
    category: "Property Details",
  },
].map((image, index) => ({
  ...image,
  id: index + 1,
  alt: `${image.title} at Global Village Apartment`,
}));

const galleryCategories = [
  "All",
  "Property",
  "Rooms",
  "Living Areas",
  "Kitchen & Dining",
  "Bathrooms",
  "Wellness",
  "Outdoor",
  "Property Details",
];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [activeIndex, setActiveIndex] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | Filter Images
  |--------------------------------------------------------------------------
  */

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) =>
        image.category === selectedCategory,
    );
  }, [selectedCategory]);

  /*
  |--------------------------------------------------------------------------
  | Close Viewer
  |--------------------------------------------------------------------------
  */

  const closeGallery = useCallback(() => {
    setActiveIndex(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Previous Image
  |--------------------------------------------------------------------------
  */

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return currentIndex === 0
        ? filteredImages.length - 1
        : currentIndex - 1;
    });
  }, [filteredImages.length]);

  /*
  |--------------------------------------------------------------------------
  | Next Image
  |--------------------------------------------------------------------------
  */

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return currentIndex ===
        filteredImages.length - 1
        ? 0
        : currentIndex + 1;
    });
  }, [filteredImages.length]);

  /*
  |--------------------------------------------------------------------------
  | Keyboard Navigation
  |--------------------------------------------------------------------------
  */

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
  }, [
    activeIndex,
    closeGallery,
    showNext,
    showPrevious,
  ]);

  /*
  |--------------------------------------------------------------------------
  | Close Viewer When Category Changes
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setActiveIndex(null);
  }, [selectedCategory]);

  const activeImage =
    activeIndex !== null
      ? filteredImages[activeIndex]
      : null;

  return (
    <>
      <style>
        {`
          @keyframes galleryImageEntrance {
            from {
              opacity: 0;
              transform:
                translateY(30px)
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

          @keyframes galleryViewerImageEntrance {
            from {
              opacity: 0;
              transform: scale(0.94);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes galleryFilterEntrance {
            from {
              opacity: 0;
              transform: translateY(15px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .gallery-image {
            opacity: 0;
            animation:
              galleryImageEntrance 0.75s
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

          .gallery-viewer-image {
            animation:
              galleryViewerImageEntrance 0.45s
              ease-out both;
          }

          .gallery-filter {
            opacity: 0;
            animation:
              galleryFilterEntrance 0.6s
              ease-out forwards;
          }

          @media (
            prefers-reduced-motion: reduce
          ) {
            .gallery-image,
            .gallery-line,
            .gallery-viewer,
            .gallery-viewer-image,
            .gallery-filter {
              animation: none;
              opacity: 1;
            }
          }
        `}
      </style>

      <section
        id="gallery"
        className="relative overflow-hidden bg-[#F4FBFE] py-20 md:py-28"
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#16AEE5]/10 blur-3xl" />

        <div className="container relative z-10">
          {/* Section heading */}
          <Reveal className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="gallery-line h-px bg-[#16AEE5]" />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#16AEE5]">
                Our Gallery
              </p>

              <div className="gallery-line h-px bg-[#16AEE5]" />
            </div>

            <h2 className="mb-5 font-display text-3xl leading-tight text-black md:text-5xl">
              Discover

              <span className="italic text-[#16AEE5]">
                {" "}Global Village Apartment.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-black/60 md:text-base">
              Explore our apartment houses, guest rooms,
              living spaces, kitchens, bathrooms, sauna,
              rooftop and outdoor areas.
            </p>
          </Reveal>

          {/* Category filters */}
          <Reveal className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {galleryCategories.map(
                (category, index) => {
                  const categoryCount =
                    category === "All"
                      ? galleryImages.length
                      : galleryImages.filter(
                          (image) =>
                            image.category ===
                            category,
                        ).length;

                  const isActive =
                    selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(
                          category,
                        )
                      }
                      aria-pressed={isActive}
                      className={`gallery-filter flex items-center gap-2 border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ${
                        isActive
                          ? "border-[#16AEE5] bg-[#16AEE5] text-black shadow-md"
                          : "border-black/10 bg-white text-black/60 hover:border-black hover:bg-black hover:text-white"
                      }`}
                      style={{
                        animationDelay: `${
                          index * 0.06
                        }s`,
                      }}
                    >
                      <span>{category}</span>

                      <span
                        className={`flex h-5 min-w-5 items-center justify-center px-1 text-[9px] ${
                          isActive
                            ? "bg-black/10 text-black"
                            : "bg-black/5 text-black/40"
                        }`}
                      >
                        {categoryCount}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
          </Reveal>

          {/* Gallery result information */}
          <Reveal className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16AEE5]">
                {selectedCategory}
              </p>

              <p className="mt-1 text-sm text-black/50">
                {filteredImages.length}{" "}
                {filteredImages.length === 1
                  ? "photo"
                  : "photos"}
              </p>
            </div>

            <p className="hidden text-xs text-black/40 sm:block">
              Select an image to view it in full screen
            </p>
          </Reveal>

          {/* Gallery grid */}
          <div
            key={selectedCategory}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4"
          >
            {filteredImages.map(
              (image, index) => {
                const isLarge =
                  index === 0 ||
                  index % 10 === 5;

                return (
                  <Reveal
                    key={image.id}
                    delay={(index % 8) * 55}
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
                          (index % 12) * 0.06
                        }s`,
                      }}
                      aria-label={`Open ${image.title}`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                      />

                      {/* Dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/20 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Category and title */}
                      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 transition-transform duration-500 group-hover:translate-y-0">
                        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#16AEE5]">
                          {image.category}
                        </p>

                        <h3 className="font-display text-xl text-white">
                          {image.title}
                        </h3>
                      </div>

                      {/* Image number */}
                      <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center border border-white/20 bg-black/60 px-2 font-display text-sm text-white backdrop-blur-sm">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      {/* Open icon */}
                      <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-black/70 text-[#16AEE5] opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
          className="gallery-viewer fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={closeGallery}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-4 top-4 z-30 flex h-12 w-12 items-center justify-center border border-white/30 bg-black text-white transition-all hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black md:right-7 md:top-7"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/60 text-white backdrop-blur-sm transition-all hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black md:left-8 md:h-14 md:w-14"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Active image */}
          <div
            className="flex h-full w-full flex-col items-center justify-center"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="relative flex max-h-[78vh] max-w-[90vw] items-center justify-center overflow-hidden">
              <img
                key={activeImage.id}
                src={activeImage.src}
                alt={activeImage.alt}
                className="gallery-viewer-image max-h-[78vh] max-w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-0 border border-white/10" />
            </div>

            {/* Active image information */}
            <div className="mt-5 text-center">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#16AEE5]">
                {activeImage.category}
              </p>

              <h3 className="font-display text-2xl text-white">
                {activeImage.title}
              </h3>

              <p className="mt-2 text-xs text-white/45">
                {String(activeIndex + 1).padStart(
                  2,
                  "0",
                )}

                <span className="mx-2">/</span>

                {String(
                  filteredImages.length,
                ).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/60 text-white backdrop-blur-sm transition-all hover:border-[#16AEE5] hover:bg-[#16AEE5] hover:text-black md:right-8 md:h-14 md:w-14"
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