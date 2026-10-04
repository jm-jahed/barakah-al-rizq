'use client';
import React, { useState } from 'react';

export const StudioTour: React.FC<any> = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const rooms = [
    { name: 'Yoga Main Hall', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop', desc: '140sqm natural bamboo studio space.' },
    { name: 'Reformer Suite', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop', desc: '12 custom Allegro 2 Reformer carriages.' },
    { name: 'Recovery Lounge', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop', desc: 'Assisted stretching tables and zero-gravity recliners.' }
  ];

  return (
    <section id="tour" className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Interactive Studio Explorer</h2></div>
        <div className="flex justify-center gap-2 mb-8">{rooms.map((r, idx) => (<button key={idx} onClick={() => setActiveRoom(idx)} className={`px-4 py-2 rounded-xl text-xs font-mono ${activeRoom === idx ? 'bg-amber-500 text-black font-bold' : 'bg-[#181512] text-gray-300'}`}>{r.name}</button>))}</div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-amber-500/30 max-w-5xl mx-auto">
          <img src={rooms[activeRoom].image} alt={rooms[activeRoom].name} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
