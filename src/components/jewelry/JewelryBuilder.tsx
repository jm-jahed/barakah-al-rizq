'use client';
import React, { useState } from 'react';

export const JewelryBuilder: React.FC = () => {
  const [metal, setMetal] = useState({ name: '18K Yellow Gold', price: 2500 });
  const [gemstone, setGemstone] = useState({ name: '1.5ct Solitaire Diamond (VVS1)', price: 6000 });
  const [setting, setSetting] = useState({ name: 'Crown Cathedral Setting', price: 500 });

  const total = metal.price + gemstone.price + setting.price;

  return (
    <section className="py-24 bg-[#0B0907] text-[#E8E2D5] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            BESPOKE ATELIER • CUSTOM DESIGNER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">Custom Jewelry Builder.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-[#14110E] p-8 rounded-3xl border border-amber-500/20 space-y-6">
            <div>
              <h4 className="font-serif text-base text-white mb-3">1. Select Precious Metal Alloy</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: '18K Yellow Gold', price: 2500 },
                  { name: '18K White Gold', price: 2600 },
                  { name: '18K Rose Gold', price: 2500 },
                  { name: 'Platinum PT950', price: 3400 },
                ].map(m => (
                  <div key={m.name} onClick={() => setMetal(m)} className={`p-3 rounded-xl border cursor-pointer text-xs font-mono ${metal.name === m.name ? 'border-amber-400 bg-amber-500/10 text-white' : 'border-white/10 text-gray-400'}`}>
                    {m.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-base text-white mb-3">2. Select Center Gemstone</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: '1.5ct Solitaire Diamond (VVS1)', price: 6000 },
                  { name: '2.2ct Ceylon Blue Sapphire', price: 4200 },
                  { name: '1.8ct Colombian Emerald', price: 4800 },
                ].map(g => (
                  <div key={g.name} onClick={() => setGemstone(g)} className={`p-3 rounded-xl border cursor-pointer text-xs font-mono ${gemstone.name === g.name ? 'border-amber-400 bg-amber-500/10 text-white' : 'border-white/10 text-gray-400'}`}>
                    {g.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-base text-white mb-3">3. Select Basket Setting Style</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: 'Crown Cathedral 6-Prong', price: 500 },
                  { name: 'Micro-Pavé Floating Halo', price: 850 },
                ].map(s => (
                  <div key={s.name} onClick={() => setSetting(s)} className={`p-3 rounded-xl border cursor-pointer text-xs font-mono ${setting.name === s.name ? 'border-amber-400 bg-amber-500/10 text-white' : 'border-white/10 text-gray-400'}`}>
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#14110E] p-8 rounded-3xl border border-amber-500/30 text-left sticky top-24">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-2">Live Custom Spec</span>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">Custom Ring</h3>
            <div className="space-y-2 text-xs font-mono text-gray-300 border-b border-amber-500/20 pb-4 mb-6">
              <div>Metal: <span className="text-white">{metal.name}</span></div>
              <div>Gem: <span className="text-white">{gemstone.name}</span></div>
              <div>Setting: <span className="text-white">{setting.name}</span></div>
            </div>
            <div className="font-mono text-3xl font-bold text-amber-400 mb-2">AED {total.toLocaleString()}</div>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 block mb-6 w-fit">
              Demo Estimate • Concept Project
            </span>
            <button className="w-full py-3 bg-amber-500 text-black font-extrabold text-xs font-mono uppercase tracking-wider rounded-xl">Request Custom Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};
