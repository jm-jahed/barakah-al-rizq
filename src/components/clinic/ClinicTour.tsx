'use client';
import React, { useState } from 'react';

export const ClinicTour: React.FC<any> = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const rooms = [
    { name: 'Sanctuary Reception', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop' },
    { name: 'General Suite', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <section id="tour" className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Interactive Clinic Tour</h2></div>
        <div className="flex justify-center gap-2 mb-8">{rooms.map((r, idx) => (<button key={idx} onClick={() => setActiveRoom(idx)} className={`px-4 py-2 rounded-xl text-xs font-mono ${activeRoom === idx ? 'bg-sky-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300'}`}>{r.name}</button>))}</div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden border border-sky-500/30 max-w-5xl mx-auto"><img src={rooms[activeRoom].image} alt={rooms[activeRoom].name} className="w-full h-full object-cover" /></div>
      </div>
    </section>
  );
};
