import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

import HeroSection from "./sections/HeroSection";
import WelcomeSection from "./sections/WelcomeSection";
import ApartmentsSection from "./sections/ApartmentsSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ExperiencesSection from "./sections/ExperiencesSection";
import FacilitiesSection from "./sections/FacilitiesSection";
import GallerySection from "./sections/GallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import OnSiteAmenitiesSection from "./sections/OnSiteAmenitiesSection";
import ReservationSection from "./sections/ReservationSection";

const HomePage = () => {
  return (
    <div className="bg-background text-foreground">
      <SiteNav />

      <main>
        <HeroSection />

        <WelcomeSection />

        <ApartmentsSection />

        <WhyChooseUsSection />

        <ExperiencesSection />

        <FacilitiesSection />

        <GallerySection />

        <TestimonialsSection />

        <OnSiteAmenitiesSection />

        <ReservationSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
