'use client';
import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { TREATMENTS_DATA, Treatment } from '@/data/dentalData';

export const DentalServices: React.FC<any> = ({ onSelectTreatment, onOpenBooking, searchQuery }) => {
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', 'General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Dental Implants', 'Restorative Dentistry', 'Pediatric Dentistry'];

  const filtered = TREATMENTS_DATA.filter(item => {
    const matchesCat = activeCat === 'All' || item.category === activeCat;
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="treatments" className="py-24 bg-slate-900/90 text-white border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] block mb-2 font-bold">CLINICAL DENTAL MENU</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">12+ Advanced Dental Treatments</h2>
        </div>

        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${activeCat === c ? 'bg-cyan-400 text-slate-950' : 'bg-slate-950 text-slate-300 border border-slate-800'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="bg-slate-950 rounded-3xl border border-cyan-500/20 overflow-hidden flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 group shadow-xl">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold uppercase">{item.category}</span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {item.duration}</span>
                  <h3 className="font-sans text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">{item.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">{item.priceLabel}</span>
                  <span className="text-lg font-mono font-bold text-teal-300">AED {item.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onSelectTreatment(item)} className="px-3 py-2 bg-slate-900 text-white font-mono text-xs rounded-xl">Details</button>
                  <button onClick={() => { onSelectTreatment(item); onOpenBooking(); }} className="px-4 py-2 bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
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
