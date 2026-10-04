'use client';
import React, { useState } from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { CLASSES_DATA } from '@/data/wellnessData';

export const WellnessClasses: React.FC<any> = ({ onSelectClass, onOpenBooking, searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLevel, setActiveLevel] = useState<string>('All');

  const categories = ['All', 'Yoga', 'Pilates', 'Breathwork', 'Meditation', 'Mobility', 'Recovery'];
  const levels = ['All', 'Beginner', 'Intermediate', 'All Levels'];

  const filtered = CLASSES_DATA.filter(item => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    const matchesLvl = activeLevel === 'All' || item.level === activeLevel;
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesLvl && matchesSearch;
  });

  return (
    <section id="classes" className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">STUDIO PRACTICE MENU</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">Curated Classes & Modalities</h2>
          <p className="text-sm text-gray-400 font-sans">From sunrise vinyasa flows to precision reformer pilates and crystal sound baths, discover practices designed for total physical and mental alignment.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-[#181512] p-4 rounded-2xl border border-amber-500/20">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${activeCategory === cat ? 'bg-amber-500 text-black font-extrabold' : 'bg-white/5 border border-white/10 text-gray-300'}`}>{cat}</button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gray-400">Level:</span>
            <select value={activeLevel} onChange={(e) => setActiveLevel(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-white px-3 py-2">
              {levels.map(l => <option key={l} value={l} className="bg-[#181512] text-white">{l}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="bg-[#181512] rounded-3xl border border-amber-500/20 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group shadow-xl">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181512] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full bg-amber-500 text-black font-bold uppercase">{item.category}</span>
                  <span className="absolute top-4 right-4 text-[10px] font-mono px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-200 border border-amber-500/30">{item.level}</span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-400" /> {item.duration}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-amber-400" /> {item.instructor}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-300 transition-colors">{item.name}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-3">{item.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-amber-500/10 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Single Session</span>
                  <span className="text-lg font-mono font-bold text-amber-200">AED {item.priceSingle}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => onSelectClass(item)} className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-xl">Details</button>
                  <button onClick={() => { onSelectClass(item); onOpenBooking(item.id); }} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
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
