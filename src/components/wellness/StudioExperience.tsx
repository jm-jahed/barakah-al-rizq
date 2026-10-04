'use client';
import React from 'react';

export const StudioExperience: React.FC<any> = () => {
  const experiences = [
    { title: 'The Main Yoga Hall', desc: 'A 140sqm natural bamboo-floored sanctuary with acoustic soundproofing and ambient circadian lighting.', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop' },
    { title: 'Reformer Pilates Suite', desc: 'Equipped with 12 Allegro 2 Reformers, Cadillac towers, and ergonomic spring resistance systems.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop' },
    { title: '432Hz Sound Lounge', desc: 'Zero-gravity memory loungers, silk eye masks, and quartz crystal sound bath acoustic architecture.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">SANCTUARY ENVIRONMENT</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Architectural Studio Spaces</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((e, idx) => (
            <div key={idx} className="bg-[#181512] rounded-3xl border border-amber-500/20 overflow-hidden">
              <img src={e.image} alt={e.title} className="w-full h-56 object-cover" />
              <div className="p-6 space-y-2"><h3 className="font-serif text-xl font-bold text-white">{e.title}</h3><p className="text-xs text-gray-300">{e.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
