'use client';
import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, BarberService } from '@/data/barberData';

export const BarberServices: React.FC<any> = ({ onSelectService, onOpenBooking, searchQuery }) => {
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', 'Hair', 'Beard', 'Shave', 'Skin', 'Wellness', 'Packages'];

  const filtered = SERVICES_DATA.filter(item => {
    const matchesCat = activeCat === 'All' || item.category === activeCat;
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">GROOMING MENU</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Precision Grooming Services</h2>
        </div>

        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${activeCat === c ? 'bg-amber-400 text-slate-950' : 'bg-neutral-900 text-neutral-300 border border-neutral-800'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="bg-neutral-900 rounded-3xl border border-amber-500/20 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group shadow-xl">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold uppercase">{item.category}</span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-400" /> {item.duration}</span>
                  <h3 className="font-sans text-lg font-bold text-white group-hover:text-amber-300 transition-colors">{item.name}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">{item.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-800 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 block uppercase">Sample Fee</span>
                  <span className="text-lg font-mono font-bold text-amber-300">AED {item.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onSelectService(item)} className="px-3 py-2 bg-neutral-950 text-white font-mono text-xs rounded-xl">Details</button>
                  <button onClick={() => { onSelectService(item); onOpenBooking(); }} className="px-4 py-2 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                    <span>Book</span><ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
