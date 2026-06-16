import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const DashboardTopNav = ({ onMenuToggle }) => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] sticky top-0 z-10 shrink-0 gap-4">
      {/* Left: hamburger (mobile) + search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {/* Hamburger — only on mobile */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted)/0.4)] transition-all shrink-0"
        >
          <Menu size={22} />
        </button>

        {/* Search */}
        <div className="relative w-full max-w-[320px] hidden sm:block">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
          <input
            type="text"
            placeholder="Search CMS..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.3)] text-[hsl(var(--foreground))] text-sm outline-none focus:border-[hsl(24,98%,53%)] focus:bg-[hsl(var(--background))] focus:shadow-[0_0_0_3px_hsl(24,98%,53%,0.1)] transition-all"
          />
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Bell */}
        <button className="relative text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border-2 border-[hsl(var(--background))]" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-[hsl(var(--border))] hidden sm:block" />

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] flex items-center justify-center text-white shrink-0">
            <User size={18} />
          </div>
          <span className="font-semibold text-[0.95rem] text-[hsl(var(--foreground))] hidden md:block">Admin User</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNav;
