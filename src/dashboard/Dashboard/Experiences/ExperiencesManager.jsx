import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';

const ExperiencesManager = () => {
  const experiences = [
    { id: 1, name: 'Luxury Spa', category: 'Wellness', status: 'Active', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Fine Dining at Le Grand', category: 'Dining', status: 'Active', img: 'https://images.unsplash.com/photo-1414235077428-338988691f1b?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'City Heritage Tour', category: 'Tours', status: 'Active', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-[fadeIn_0.4s_ease-out]">
      {/* Header */}
      <header className="flex justify-between items-end">
        <div>
          <h1 className="font-display text-[2.25rem] font-bold text-[hsl(var(--foreground))] mb-1">Manage Experiences</h1>
          <p className="text-[hsl(var(--muted-foreground))]">Curate the dining, wellness, and local tours for your guests.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] text-white px-6 py-3 rounded-lg font-semibold border-none cursor-pointer shadow-[0_4px_15px_-3px_hsl(24,98%,53%,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-3px_hsl(24,98%,53%,0.5)] transition-all duration-200">
          <Plus size={18} /> Add Experience
        </button>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_hsl(0,0%,0%,0.15)] transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <img src={exp.img} alt={exp.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-[hsl(var(--background))] px-3 py-1 rounded-full text-xs font-semibold text-[hsl(var(--foreground))] uppercase tracking-wide shadow">
                {exp.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-[1.35rem] font-semibold text-[hsl(var(--foreground))] mb-1">{exp.name}</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mb-6">
                Status:{' '}
                <span className={exp.status === 'Active' ? 'text-green-600 font-semibold' : 'text-amber-500 font-semibold'}>
                  {exp.status}
                </span>
              </p>

              <div className="flex gap-3 border-t border-[hsl(var(--border))] pt-5">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[hsl(var(--muted)/0.5)] border border-transparent text-[hsl(var(--foreground))] py-2 rounded-lg font-medium text-sm hover:bg-[hsl(var(--background))] hover:border-[hsl(var(--border))] transition-all duration-200 cursor-pointer">
                  <Edit3 size={16} /> Edit
                </button>
                <button className="w-10 flex items-center justify-center text-red-500 bg-[hsl(var(--muted)/0.5)] rounded-lg py-2 hover:bg-red-50 transition-all duration-200 cursor-pointer">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesManager;
