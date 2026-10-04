'use client';
import React, { useState } from 'react';
import { SNEAKER_CATALOG } from '@/data/sneakerData';

export const AISneakerFinder: React.FC<any> = ({ onSelectProduct }) => {
  const [activity, setActivity] = useState('Lifestyle / Daily');
  const [silhouette, setSilhouette] = useState('High Top Retro');
  const [matched, setMatched] = useState(false);

  return (
    <section id="finder" className="py-24 bg-[#0A0908] text-[#E8E2D5] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            SMART ASSISTANT • AI FINDER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">FIND YOUR PAIR.</h2>
          <p className="text-xs text-gray-400">Answer 2 quick style preferences to generate tailored sneaker matches.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#141210] p-8 rounded-3xl border border-amber-500/20 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Usage Activity</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full bg-[#0A0908] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['Lifestyle / Daily', 'Basketball Court', 'Tech Running', 'Skateboarding'].map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">Silhouette Vibe</label>
              <select value={silhouette} onChange={(e) => setSilhouette(e.target.value)} className="w-full bg-[#0A0908] border border-amber-500/20 rounded-xl p-3 text-xs font-mono text-white">
                {['High Top Retro', 'Low Top Clean', 'Retro Runner', 'Chunky Skate'].map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <button onClick={() => setMatched(true)} className="w-full py-4 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-xl">
            Find Matches →
          </button>

          {matched && (
            <div className="mt-8 pt-8 border-t border-amber-500/20">
              <span className="text-xs font-mono text-emerald-400 block mb-4 text-center">✓ Demo AI-Style Matches Generated</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SNEAKER_CATALOG.slice(0, 3).map(m => (
                  <div key={m.id} onClick={() => onSelectProduct?.(m)} className="bg-[#0A0908] p-4 rounded-2xl border border-amber-500/20 cursor-pointer hover:border-amber-400">
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
