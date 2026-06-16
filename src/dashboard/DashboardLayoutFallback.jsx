import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import DashboardTopNav from "../components/DashboardTopNav/DashboardTopNav";

const DashboardLayoutFallback = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuToggle = () => setMobileOpen(true);
  const handleCloseMobile = () => setMobileOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[hsl(var(--background))]">

      {/* Mobile overlay sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleCloseMobile}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar onClose={handleCloseMobile} />
          </div>
        </div>
      )}

      {/* Desktop sidebar — always in flow on lg, hidden on mobile */}
      <div className="hidden lg:block shrink-0">
        <Sidebar />
      </div>

      {/* Main column — takes remaining width and scrolls independently */}
      <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        <DashboardTopNav onMenuToggle={handleMenuToggle} />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutFallback;


