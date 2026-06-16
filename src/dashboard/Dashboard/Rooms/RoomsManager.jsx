import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';

const RoomsManager = () => {
  const rooms = [
    { id: 1, name: 'Deluxe Suite', price: '$450/night', status: 'Active', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'Executive Room', price: '$350/night', status: 'Active', img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'Presidential Penthouse', price: '$1200/night', status: 'Active', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=400' },
    { id: 4, name: 'Standard King', price: '$250/night', status: 'Draft', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="flex flex-col gap-8 animate-[fadeIn_0.4s_ease-out]">
      {/* Header */}
      <header className="flex justify-between items-end">
        <div>
          <h1 className="font-display text-[2.25rem] font-bold text-[hsl(var(--foreground))] mb-1">Manage Rooms</h1>
          <p className="text-[hsl(var(--muted-foreground))]">Update your hotel catalog and availability.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] text-white px-6 py-3 rounded-lg font-semibold border-none cursor-pointer shadow-[0_4px_15px_-3px_hsl(24,98%,53%,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-3px_hsl(24,98%,53%,0.5)] transition-all duration-200">
          <Plus size={18} /> Add New Room
        </button>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_hsl(0,0%,0%,0.15)] transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <img src={room.img} alt={room.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3 bg-[hsl(var(--background)/0.9)] backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[hsl(var(--foreground))] flex items-center gap-1.5 shadow">
                <span className={`w-2 h-2 rounded-full ${room.status === 'Active' ? 'bg-green-600' : 'bg-amber-500'}`} />
                {room.status}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-[1.35rem] font-semibold text-[hsl(var(--foreground))] mb-1">{room.name}</h3>
              <p className="text-[hsl(24,98%,53%)] font-semibold text-lg mb-6">{room.price}</p>

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

export default RoomsManager;
