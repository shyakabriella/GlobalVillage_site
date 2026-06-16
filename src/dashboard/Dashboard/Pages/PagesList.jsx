import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Edit2, ExternalLink, FileText } from 'lucide-react';
import { useContent } from '../../../contexts/ContentContext';

const PagesList = () => {
  const navigate = useNavigate();
  const content = useContent();
  const pages = content?.pages ?? [];

  return (
    <div className="flex flex-col gap-8 animate-[fadeIn_0.4s_ease-out]">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="font-display text-[2.25rem] font-bold text-[hsl(var(--foreground))]">Manage Pages</h1>
        <div className="relative w-[300px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" />
          <input
            type="text"
            placeholder="Search pages..."
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-[0.95rem] outline-none focus:border-[hsl(24,98%,53%)] focus:shadow-[0_0_0_3px_hsl(24,98%,53%,0.1)] transition-all"
          />
        </div>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-6 shadow-sm flex flex-col hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_hsl(0,0%,0%,0.15)] transition-all duration-300"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] flex items-center justify-center text-white shadow-[0_4px_10px_-2px_hsl(24,98%,53%,0.4)]">
                <FileText size={22} />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                page.status === 'Published' ? 'bg-green-600/10 text-green-600' : 'bg-amber-500/10 text-amber-500'
              }`}>
                {page.status}
              </span>
            </div>

            {/* Card Content */}
            <div className="flex-1 mb-6">
              <h3 className="font-display text-2xl font-semibold text-[hsl(var(--foreground))] mb-1">{page.name}</h3>
              <p className="font-mono text-[hsl(var(--muted-foreground))] text-[0.9rem] mb-3">{page.slug}</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))] italic">"{page.heroTitle}"</p>
            </div>

            {/* Card Actions */}
            <div className="flex gap-3 border-t border-[hsl(var(--border))] pt-5">
              <button
                onClick={() => navigate(`/dashboard/pages/${page.id}/edit`)}
                className="flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--muted)/0.5)] border border-transparent text-[hsl(var(--foreground))] py-2.5 rounded-lg font-semibold text-sm hover:bg-[hsl(var(--background))] hover:border-[hsl(var(--border))] transition-all duration-200 cursor-pointer"
              >
                <Edit2 size={16} /> Edit Page
              </button>
              <a
                href={`https://www.danakigalihotel.com${page.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[hsl(var(--border))] text-[hsl(var(--foreground))] py-2.5 rounded-lg font-semibold text-sm hover:bg-[hsl(var(--muted)/0.3)] transition-all duration-200 no-underline"
              >
                <ExternalLink size={16} /> View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesList;
