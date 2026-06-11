import { Route, Routes } from "react-router-dom";

import Layouts from "../components/Layouts";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/index";
import Contact from "../pages/Contact/index";
import Experiences from "../pages/Experiences/index";
import Rooms from "../pages/Rooms/index";
import PrivacyPolicy from "../pages/PrivacyPolicy/index";
import TermsConditions from "../pages/TermsConditions/index";
import CancellationPolicy from "../pages/CancellationPolicy/index";
import CookiePolicy from "../pages/CookiePolicy/index";
import NotFound from "../pages/NotFound/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="cancellation-policy" element={<CancellationPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}