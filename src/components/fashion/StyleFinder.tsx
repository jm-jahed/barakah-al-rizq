'use client';
import React, { useState } from 'react';
import { FASHION_PRODUCTS } from '@/data/fashionData';

export const StyleFinder: React.FC<any> = ({ onSelectProduct }) => {
  const [occasion, setOccasion] = useState('Evening');
  const [vibe, setVibe] = useState('Minimal');
  const [matched, setMatched] = useState(false);

  return (
    <section className="py-24 bg-[#0D0B0A] text-[#F3EFEA] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            SMART STYLING ASSISTANT
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">Interactive Style Finder.</h2>
          <p className="text-xs sm:text-sm text-gray-400">Answer 2 style preferences to generate personalized outfit recommendations for your upcoming event.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#161311] p-8 rounded-3xl border border-amber-500/20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Occasion</label>
              <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full bg-[#0D0B0A] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['Everyday Resort', 'Evening Dinner', 'Wedding Guest', 'Workwear Tailoring', 'Ramadan / Eid'].map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Aesthetic Vibe</label>
              <select value={vibe} onChange={(e) => setVibe(e.target.value)} className="w-full bg-[#0D0B0A] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['Minimal Monochromatic', 'Dramatic Statement', 'Relaxed Oversized', 'Classic Tailored'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setMatched(true)} className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-xl">
            Generate Style Matches →
          </button>

          {matched && (
            <div className="mt-8 pt-8 border-t border-amber-500/20">
              <span className="text-xs font-mono text-emerald-400 block mb-4 text-center">✓ Recommended Outfits Matched</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {FASHION_PRODUCTS.slice(0, 3).map(p => (
                  <div key={p.id} onClick={() => onSelectProduct?.(p)} className="bg-[#0D0B0A] p-4 rounded-2xl border border-amber-500/20 cursor-pointer hover:border-amber-400">
                    <img src={p.images[0]} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-3" />
                    <h4 className="font-serif text-xs font-bold text-white mb-1 line-clamp-1">{p.name}</h4>
                    <span className="font-mono text-xs text-amber-300 font-bold">AED {p.price}</span>
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
