import React from 'react';
import {
  Globe, CheckCircle, FileEdit, Image as ImageIcon,
  Files, BedDouble, Compass, Settings, Clock
} from 'lucide-react';

const DashboardPage = () => {
  const recentActivity = [
    { id: 1, user: 'Admin', action: 'updated the Home Page Hero Image', time: '2 hours ago' },
    { id: 2, user: 'Admin', action: 'published new Deluxe Suite details', time: 'Yesterday' },
    { id: 3, user: 'Editor', action: 'modified the Spa Experience description', time: '2 days ago' },
  ];

  const actions = [
    { icon: <FileEdit size={24} />, label: 'Edit Home Page' },
    { icon: <BedDouble size={24} />, label: 'Add New Room' },
    { icon: <Compass size={24} />, label: 'Manage Experiences' },
    { icon: <ImageIcon size={24} />, label: 'Media Library' },
    { icon: <Files size={24} />, label: 'All Pages' },
    { icon: <Settings size={24} />, label: 'Site Settings' },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-10 animate-[fadeIn_0.6s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-[2.75rem] font-bold text-[hsl(var(--foreground))] mb-2 tracking-tight leading-tight">
            CMS Overview
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg">
            Manage the content for www.danakigalihotel.com
          </p>
        </div>
        <a
          href="https://www.danakigalihotel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] px-5 py-3 rounded-lg font-semibold no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_25px_-5px_hsl(0,0%,0%,0.4)] transition-all duration-200 shadow-[0_4px_15px_-5px_hsl(0,0%,0%,0.3)] w-full sm:w-auto"
        >
          <Globe size={18} /> View Live Site
        </a>
      </header>

      {/* Status Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 sm:gap-6">
        {/* Status Card */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6 sm:p-7 shadow-sm flex flex-col justify-center">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-[hsl(var(--muted-foreground))]">Website Status</h3>
            <span className="flex items-center gap-1 text-sm font-semibold text-green-600 bg-green-600/10 px-3 py-1 rounded-full">
              <CheckCircle size={14} /> Live
            </span>
          </div>
          <p className="font-display text-xl sm:text-2xl font-bold text-[hsl(var(--foreground))] mb-1">
            danakigalihotel.com
          </p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">Last deployed: Today at 09:41 AM</p>
        </div>

        {/* Metrics Card */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6 sm:p-7 shadow-sm flex items-center justify-around">
          {[
            { value: '8', label: 'Published Pages' },
            { value: '12', label: 'Active Rooms' },
            { value: '5', label: 'Experiences' },
          ].map((metric, i, arr) => (
            <React.Fragment key={metric.label}>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-3xl sm:text-[2.5rem] font-bold text-[hsl(var(--foreground))] leading-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[hsl(var(--muted-foreground))] uppercase tracking-wide mt-1">
                  {metric.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-12 sm:h-16 bg-[hsl(var(--border))]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 sm:gap-6">
        {/* Quick Actions */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6 sm:p-7 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-[hsl(var(--foreground))] mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {actions.map((action) => (
              <button
                key={action.label}
                className="bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] rounded-lg p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 cursor-pointer text-[hsl(var(--foreground))] hover:border-[hsl(24,98%,53%)] hover:-translate-y-1 hover:shadow-[0_10px_25px_-10px_hsl(24,98%,53%,0.2)] hover:bg-[hsl(var(--card))] transition-all duration-200 group"
              >
                <div className="text-[hsl(24,98%,53%)] bg-[hsl(24,98%,53%,0.1)] p-3 sm:p-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-center leading-snug">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6 sm:p-7 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-[hsl(var(--foreground))] mb-6">Recent Activity</h2>
          <ul className="flex flex-col gap-5 list-none p-0 m-0">
            {recentActivity.map((activity, i) => (
              <li
                key={activity.id}
                className={`flex items-start gap-4 hover:translate-x-1 transition-transform duration-200 ${
                  i < recentActivity.length - 1 ? 'pb-5 border-b border-[hsl(var(--border))]' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[0.9rem] text-[hsl(var(--foreground))] mb-1 leading-snug">
                    <strong className="font-semibold">{activity.user}</strong> {activity.action}
                  </p>
                  <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
