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

import DashboardLayoutFallback from "../dashboard/DashboardLayoutFallback";

import DashboardPage from "../dashboard/Dashboard/DashboardPage";

import RoomsManager from "../dashboard/Dashboard/Rooms/RoomsManager";
import ExperiencesManager from "../dashboard/Dashboard/Experiences/ExperiencesManager";
import PagesList from "../dashboard/Dashboard/Pages/PagesList";
import PageEditor from "../dashboard/Dashboard/Pages/PageEditor";
import SiteSettings from "../dashboard/Dashboard/Settings/SiteSettings";

import LoginPage from "../dashboard/Login/LoginPage";

import ProtectedRoute from "../components/ProtectedRoute";

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

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayoutFallback />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="rooms" element={<RoomsManager />} />
        <Route path="experiences" element={<ExperiencesManager />} />
        <Route path="pages" element={<PagesList />} />
        <Route path="pages/:id/edit" element={<PageEditor />} />
        <Route path="settings" element={<SiteSettings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}


