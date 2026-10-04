'use client';
import React, { useState } from 'react';
import { JEWELRY_PRODUCTS } from '@/data/jewelryData';

export const JewelryFinder: React.FC<any> = ({ onSelectProduct }) => {
  const [occasion, setOccasion] = useState('Engagement');
  const [style, setStyle] = useState('Classic');
  const [metal, setMetal] = useState('18K Yellow Gold');
  const [matched, setMatched] = useState(false);

  const sampleMatches = JEWELRY_PRODUCTS.slice(0, 3);

  return (
    <section className="py-24 bg-[#0B0907] text-[#E8E2D5] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            SMART ASSISTANT • AI-STYLE FINDER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            Jewelry Finder Assistant.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Tell us your occasion, preferred gold metal alloy, and aesthetic style to generate tailored recommendations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#14110E] p-8 rounded-3xl border border-amber-500/20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Occasion</label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full bg-[#0B0907] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['Self Gift', 'Engagement', 'Wedding', 'Anniversary', 'Birthday'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Preferred Metal</label>
              <select value={metal} onChange={(e) => setMetal(e.target.value)} className="w-full bg-[#0B0907] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['18K Yellow Gold', '18K White Gold', '18K Rose Gold', 'Platinum'].map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Style Vibe</label>
              <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full bg-[#0B0907] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['Minimalist', 'Classic Solitaire', 'Statement Pavé', 'Vintage Art Déco'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setMatched(true)} className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-xl">
            Find Matches →
          </button>

          {matched && (
            <div className="mt-8 pt-8 border-t border-amber-500/20">
              <span className="text-xs font-mono text-emerald-400 block mb-4 text-center">✓ Tailored Recommendations Found</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sampleMatches.map(m => (
                  <div key={m.id} onClick={() => onSelectProduct?.(m)} className="bg-[#0B0907] p-4 rounded-2xl border border-amber-500/20 cursor-pointer hover:border-amber-400">
                    <img src={m.images[0]} alt={m.name} className="w-full h-36 object-cover rounded-xl mb-3" />
                    <h4 className="font-serif text-xs font-bold text-white mb-1 line-clamp-1">{m.name}</h4>
                    <span className="font-mono text-xs text-amber-300 font-bold">AED {m.priceAED.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
