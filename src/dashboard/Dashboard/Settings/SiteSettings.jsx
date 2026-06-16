import React from 'react';
import { Save } from 'lucide-react';

const SiteSettings = () => {
  const inputClass = "w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[0.95rem] outline-none font-[inherit] focus:border-[hsl(24,98%,53%)] focus:shadow-[0_0_0_3px_hsl(24,98%,53%,0.1)] transition-all";

  return (
    <div className="flex flex-col gap-10 animate-[fadeIn_0.4s_ease-out]">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-[2.25rem] font-bold text-[hsl(var(--foreground))] mb-1">Site Settings</h1>
          <p className="text-[hsl(var(--muted-foreground))]">Configure global website metadata and contact details.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] text-white px-6 py-3 rounded-lg font-semibold border-none cursor-pointer shadow-[0_4px_15px_-3px_hsl(24,98%,53%,0.4)] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
          <Save size={18} /> Save Settings
        </button>
      </header>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* General Information */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-8 shadow-sm flex flex-col gap-6">
          <h2 className="font-display text-[1.35rem] font-semibold text-[hsl(var(--foreground))] pb-4 border-b border-[hsl(var(--border))]">
            General Information
          </h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Hotel Name</label>
            <input type="text" className={inputClass} defaultValue="Dana Kigali Hotel" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Tagline</label>
            <input type="text" className={inputClass} defaultValue="Experience unparalleled luxury in the heart of Kigali." />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">SEO Description</label>
            <textarea className={`${inputClass} min-h-[100px] resize-y`} defaultValue="Dana Kigali Hotel offers luxury accommodation, fine dining, and spa experiences..." />
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-8 shadow-sm flex flex-col gap-6">
          <h2 className="font-display text-[1.35rem] font-semibold text-[hsl(var(--foreground))] pb-4 border-b border-[hsl(var(--border))]">
            Contact Details
          </h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Primary Email</label>
            <input type="email" className={inputClass} defaultValue="info@danakigalihotel.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Phone Number</label>
            <input type="tel" className={inputClass} defaultValue="+250 123 456 789" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Physical Address</label>
            <textarea className={`${inputClass} min-h-[100px] resize-y`} defaultValue="KN 5 Rd, Kigali, Rwanda" />
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-8 shadow-sm flex flex-col gap-6">
          <h2 className="font-display text-[1.35rem] font-semibold text-[hsl(var(--foreground))] pb-4 border-b border-[hsl(var(--border))]">
            Social Media Links
          </h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Instagram URL</label>
            <input type="url" className={inputClass} defaultValue="https://instagram.com/danakigalihotel" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[hsl(var(--foreground))]">Facebook URL</label>
            <input type="url" className={inputClass} defaultValue="https://facebook.com/danakigalihotel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSettings;
