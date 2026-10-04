'use client';

import React, { useState } from 'react';
import { Sun, Cloud, Snowflake, Sparkles } from 'lucide-react';

export const SeasonalGuide: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('Winter Grand Season');

  const seasons = [
    {
      name: 'Winter Grand Season',
      tagline: 'Perfect 24°C Days & Ocean Breezes',
      desc: 'November to March is the golden season in Dubai. Crystalline turquoise waters, pleasant balmy evenings, alfresco dining at ORA, and private superyacht sunsets around Palm Jumeirah.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Spring Oasis',
      tagline: 'Warm Evenings & Royal Desert Safaris',
      desc: 'April to May brings serene coastal mornings (28°C–32°C), private beachfront cabana lounging, desert sunset falconry at Al Maha, and secluded spa wellness retreats.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Summer Sanctuary',
      tagline: 'Private Villas & 24K Gold Hammams',
      desc: 'June to August features temperature-controlled private pool villas, chilled indoor infinity atriums, night-time superyacht charters, and restorative 24K gold hammam therapies.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Autumn Radiance',
      tagline: 'Gastronomy & Cultural High Season',
      desc: 'September to October heralds the return of vibrant rooftop dining, Michelin chef tasting menus, Dubai Opera VIP galas, and tranquil private beach relaxation.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const current = seasons.find((s) => s.name === selectedSeason) || seasons[0];

  return (
    <section className="py-24 bg-[#141210] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              DUBAI CLIMATE & SEASONAL GUIDE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
              When to experience Velora.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Every season on Jumeirah Bay Island and Palm Jumeirah offers an extraordinary atmosphere, from golden winter waters to summer wellness sanctuaries.
            </p>
          </div>
        </div>

        {/* Season Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {seasons.map((s) => (
            <button
              key={s.name}
              onClick={() => setSelectedSeason(s.name)}
              className={`p-4 rounded-2xl border text-left font-serif transition-all ${
                selectedSeason === s.name
                  ? 'bg-[#29221D] border-[#C5A059] text-white shadow-xl shadow-[#C5A059]/10'
                  : 'bg-[#1C1917] border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              <h3 className="text-base font-bold block">{s.name}</h3>
              <span className="text-[10px] font-mono text-[#C5A059] block mt-0.5">{s.tagline}</span>
            </button>
          ))}
        </div>

        {/* Selected Season Display */}
        <div className="bg-[#29221D] rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono text-[#C5A059] uppercase font-bold">{current.name} in Dubai</span>
            <h3 className="text-3xl font-serif text-[#F7F4EE]">{current.tagline}</h3>
            <p className="text-sm text-stone-300 font-light leading-relaxed">{current.desc}</p>
          </div>

          <div className="lg:col-span-6 relative h-[320px] rounded-2xl overflow-hidden border border-stone-800 shadow-xl">
            <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};
