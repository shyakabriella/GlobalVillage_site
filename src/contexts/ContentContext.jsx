import {
  createContext,
  useContext,
  useState,
} from "react";

// Files placed inside public are referenced from "/".
const images = {
  hero: "/glb.jpg",
  roomDeluxe: "/glb.jpg",
  roomDouble: "/glb.jpg",
  roomSuperior: "/glb.jpg",
  roomSingle: "/glb.jpg",
  spa: "/glb.jpg",
  pool: "/glb.jpg",
  dining: "/glb.jpg",
  terrace: "/glb.jpg",
  team1: "/glb.jpg",
  team2: "/glb.jpg",
  team3: "/glb.jpg",
  contactHero: "/glb.jpg",
  fruitPlate: "/glb.jpg",
};

const initialPages = [
  {
    id: "1",
    name: "Home",
    slug: "/",
    status: "Published",
    lastModified: "Today, 09:41 AM",
    metaTitle:
      "Globar Village Aprtment Ltd – Modern Living, Redefined.",
    metaDescription:
      "Discover comfortable and modern apartment accommodation at Globar Village Aprtment Ltd.",
    sections: {
      hero: {
        image: images.hero,
        title: "Modern Living,\nRedefined.",
        subtitle:
          "GLOBAR VILLAGE APRTMENT LTD welcomes you to modern, comfortable and convenient living in Kigali, Rwanda.",
      },

      aboutSnippet: {
        image: images.pool,
        title: "Designed with you in mind.",
        body:
          "GLOBAR VILLAGE APRTMENT LTD provides comfortable and thoughtfully designed apartments for short visits, business trips, family holidays and extended stays. Every space combines privacy, convenience and modern living.",
      },

      facilities: [
        {
          id: "f1",
          icon: "Car",
          label: "Secure Parking",
        },
        {
          id: "f2",
          icon: "Bell",
          label: "Guest Support",
        },
        {
          id: "f3",
          icon: "Wifi",
          label: "Fast Wi-Fi",
        },
        {
          id: "f4",
          icon: "Home",
          label: "Modern Apartments",
        },
      ],

      gallery: [
        {
          id: "g1",
          url: images.hero,
        },
        {
          id: "g2",
          url: images.dining,
        },
        {
          id: "g3",
          url: images.terrace,
        },
        {
          id: "g4",
          url: images.pool,
        },
        {
          id: "g5",
          url: images.roomDeluxe,
        },
        {
          id: "g6",
          url: images.spa,
        },
        {
          id: "g7",
          url: images.roomSuperior,
        },
        {
          id: "g8",
          url: images.roomDouble,
        },
      ],

      testimonials: [
        {
          id: "t1",
          name: "Eleanor Vance",
          role: "London",
          text:
            "A comfortable and peaceful place to stay. The apartment was clean, modern and thoughtfully prepared.",
        },
        {
          id: "t2",
          name: "Marc Dubois",
          role: "Paris",
          text:
            "The apartment gave us the privacy and convenience we needed. We felt at home throughout our stay.",
        },
        {
          id: "t3",
          name: "Aiko Tanaka",
          role: "Kyoto",
          text:
            "A welcoming environment, excellent service and a beautiful modern apartment.",
        },
      ],
    },
  },

  {
    id: "2",
    name: "About Us",
    slug: "/about",
    status: "Published",
    lastModified: "Oct 10, 2026",
    metaTitle:
      "About Us – Globar Village Aprtment Ltd",
    metaDescription:
      "Learn more about Globar Village Aprtment Ltd and our modern apartment accommodation.",
    sections: {
      hero: {
        image: images.hero,
        title: "About GLOBAR VILLAGE",
      },

      welcome: {
        image: images.terrace,
        title: "Modern Living, Redefined.",
        body:
          "GLOBAR VILLAGE APRTMENT LTD provides modern, comfortable and convenient apartment accommodation in Kigali, Rwanda.\n\nOur apartments are created for guests who want more than a room. We provide welcoming living spaces where individuals, couples, families and business travellers can enjoy comfort, privacy and independence.\n\nEvery apartment is designed with practical living in mind. Our spaces combine modern interiors, comfortable rooms and essential amenities to create an environment that feels like home.\n\nWhether you are visiting Kigali for business, leisure, family travel or an extended stay, GLOBAR VILLAGE APRTMENT LTD offers a peaceful and convenient place to live.\n\nOur team is committed to cleanliness, security, comfort and dependable guest support. We pay attention to the details that help make every stay simple and enjoyable.\n\nAt GLOBAR VILLAGE APRTMENT LTD, modern living is redefined around your needs.",
      },

      values: [
        {
          id: "v1",
          icon: "Heart",
          title: "Hospitality",
          text:
            "We welcome every guest with genuine care, respect and friendly service.",
        },
        {
          id: "v2",
          icon: "Users",
          title: "Community",
          text:
            "We provide a welcoming environment where individuals and families feel comfortable.",
        },
        {
          id: "v3",
          icon: "Shield",
          title: "Security",
          text:
            "Guest safety, privacy and peace of mind are central to our services.",
        },
        {
          id: "v4",
          icon: "Home",
          title: "Comfort",
          text:
            "Our apartments are designed to offer comfort, privacy and the feeling of home.",
        },
        {
          id: "v5",
          icon: "Sparkles",
          title: "Cleanliness",
          text:
            "We maintain clean, organised and carefully prepared living spaces.",
        },
        {
          id: "v6",
          icon: "Building",
          title: "Modern Living",
          text:
            "Our spaces combine modern design with practical features for everyday living.",
        },
      ],

      milestones: [
        {
          id: "m1",
          year: "Our Vision",
          text:
            "To provide modern and dependable apartment accommodation in Kigali.",
        },
        {
          id: "m2",
          year: "Our Purpose",
          text:
            "To give every guest a comfortable, private and welcoming place to stay.",
        },
        {
          id: "m3",
          year: "Today",
          text:
            "GLOBAR VILLAGE APRTMENT LTD welcomes local and international guests.",
        },
        {
          id: "m4",
          year: "Future",
          text:
            "To continue improving our apartments and expanding our guest services.",
        },
      ],

      team: [
        {
          id: "tm1",
          img: images.team1,
          name: "Property Manager",
          role: "Management",
        },
        {
          id: "tm2",
          img: images.team2,
          name: "Guest Services",
          role: "Customer Support",
        },
        {
          id: "tm3",
          img: images.team3,
          name: "Housekeeping Team",
          role: "Apartment Care",
        },
      ],
    },
  },

  {
    id: "3",
    name: "Contact",
    slug: "/contact",
    status: "Published",
    lastModified: "Sep 25, 2026",
    metaTitle:
      "Contact Us – Globar Village Aprtment Ltd",
    metaDescription:
      "Contact Globar Village Aprtment Ltd for apartment reservations and inquiries.",
    sections: {
      hero: {
        image: images.contactHero,
        title: "Contact Us",
      },

      reachOut: {
        title: "We are here for you.",
        body:
          "Whether you want to reserve an apartment, ask a question or make a special request, the GLOBAR VILLAGE team is ready to assist you.",
      },

      mapImage: images.terrace,

      contactInfo: [
        {
          id: "c1",
          icon: "MapPin",
          title: "Address",
          lines: "Kigali\nRwanda",
        },
        {
          id: "c2",
          icon: "Phone",
          title: "Phone",
          lines: "+250 788 000 000",
        },
        {
          id: "c3",
          icon: "Mail",
          title: "Email",
          lines: "info@globarvillage.com",
        },
        {
          id: "c4",
          icon: "Clock",
          title: "Support Hours",
          lines: "Open 24 hours\nEvery day of the year",
        },
      ],

      hours: [
        {
          id: "h1",
          label: "Guest Support",
          value: "24 / 7",
        },
        {
          id: "h2",
          label: "Check-in",
          value: "From 2:00 PM",
        },
        {
          id: "h3",
          label: "Check-out",
          value: "Before 11:00 AM",
        },
        {
          id: "h4",
          label: "Housekeeping",
          value: "8:00 AM – 5:00 PM",
        },
        {
          id: "h5",
          label: "Reservations",
          value: "7:00 AM – 10:00 PM",
        },
        {
          id: "h6",
          label: "Airport Transfer",
          value: "Available on request",
        },
      ],
    },
  },

  {
    id: "4",
    name: "Experiences",
    slug: "/experiences",
    status: "Published",
    lastModified: "Oct 12, 2026",
    metaTitle:
      "Experiences – Globar Village Aprtment Ltd",
    metaDescription:
      "Discover comfortable modern living at Globar Village Aprtment Ltd.",
    sections: {
      hero: {
        image: images.hero,
        title: "Experiences",
      },

      intro: {
        title: "Comfort in every moment.",
        body:
          "At GLOBAR VILLAGE APRTMENT LTD, every service is designed to make your stay comfortable, private and memorable.",
      },

      experiencesList: [
        {
          id: "e1",
          icon: "Heart",
          title: "Personal Service",
          tag: "Hospitality",
          img: images.terrace,
          text:
            "Our team provides friendly and dependable support from your arrival until your departure.",
          detail:
            "Guest support · Apartment assistance · Attention to detail",
        },
        {
          id: "e2",
          icon: "Coffee",
          title: "Private Living",
          tag: "Privacy",
          img: images.dining,
          text:
            "Enjoy the comfort and independence of a private apartment designed around your daily needs.",
          detail:
            "Private space · Comfortable seating · Peaceful environment",
        },
        {
          id: "e3",
          icon: "Sun",
          title: "Bright Interiors",
          tag: "Comfort",
          img: images.roomSuperior,
          text:
            "Our apartments feature welcoming interiors and natural light that create a refreshing atmosphere.",
          detail:
            "Natural light · Modern design · Welcoming spaces",
        },
        {
          id: "e4",
          icon: "UtensilsCrossed",
          title: "Kitchen Facilities",
          tag: "Convenience",
          img: images.spa,
          text:
            "Prepare meals and enjoy the convenience of apartment living during short or extended stays.",
          detail:
            "Kitchen space · Dining area · Everyday convenience",
        },
        {
          id: "e5",
          icon: "Wind",
          title: "Restful Sleep",
          tag: "Tranquillity",
          img: images.roomSingle,
          text:
            "Relax in comfortable bedrooms designed to provide restful and peaceful nights.",
          detail:
            "Comfortable bedding · Quiet environment · Private rooms",
        },
        {
          id: "e6",
          icon: "Home",
          title: "Spacious Apartments",
          tag: "Accommodation",
          img: images.roomDouble,
          text:
            "Enjoy generous living areas suitable for individuals, couples, families and business travellers.",
          detail:
            "Living areas · Comfortable seating · Extended stays",
        },
        {
          id: "e7",
          icon: "Car",
          title: "Secure Parking",
          tag: "Convenience",
          img: images.pool,
          text:
            "Convenient parking helps make your arrival and daily movements simple and secure.",
          detail:
            "Guest parking · Convenient access · Security",
        },
        {
          id: "e8",
          icon: "Sparkles",
          title: "Clean Spaces",
          tag: "Quality",
          img: images.hero,
          text:
            "Every apartment is carefully cleaned and prepared to provide a comfortable stay.",
          detail:
            "Housekeeping · Clean interiors · Prepared apartments",
        },
      ],
    },
  },

  {
    id: "5",
    name: "Apartments",
    slug: "/rooms",
    status: "Published",
    lastModified: "Oct 11, 2026",
    metaTitle:
      "Apartments – Globar Village Aprtment Ltd",
    metaDescription:
      "Browse the available apartments at Globar Village Aprtment Ltd.",
    sections: {
      hero: {
        image: images.hero,
        title: "Apartments",
      },

      intro: {
        title: "Find your ideal apartment.",
        body:
          "Each apartment at GLOBAR VILLAGE APRTMENT LTD is designed to provide privacy, comfort and convenience. Choose the accommodation that best matches your visit, family size and length of stay.",
      },

      roomsList: [
        {
          id: "r1",
          img: images.roomDouble,
          name: "One-Bedroom Apartment",
          price: 90,
        },
        {
          id: "r2",
          img: images.roomDeluxe,
          name: "Two-Bedroom Apartment",
          price: 120,
        },
        {
          id: "r3",
          img: images.roomSuperior,
          name: "Family Apartment",
          price: 140,
        },
      ],
    },
  },
];

const ContentContext = createContext(undefined);

export const ContentProvider = ({ children }) => {
  const [pages, setPages] = useState(initialPages);

  const updatePage = (updatedPage) => {
    setPages((previousPages) =>
      previousPages.map((page) =>
        page.id === updatedPage.id
          ? updatedPage
          : page,
      ),
    );
  };

  return (
    <ContentContext.Provider
      value={{
        pages,
        updatePage,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error(
      "useContent must be used inside ContentProvider",
    );
  }

  return context;
};