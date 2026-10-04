'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, ShieldCheck, Compass, Eye, Star } from 'lucide-react';

export const EmberwildNightSky: React.FC = () => {
  const [selectedConstellation, setSelectedConstellation] = useState<string>('Orion');

  const constellations = [
    {
      name: 'Orion (Al-Jabbar)',
      visibility: 'High Zenith · 22:00',
      description: 'The celestial hunter dominating the UAE autumn sky with the glowing Orion Nebula (M42).'
    },
    {
      name: 'Ursa Major (Al-Dubb Al-Akbar)',
      visibility: 'Northern Crest · All Night',
      description: 'The celestial guide used for centuries by Bedouin navigators to pinpoint true celestial North.'
    },
    {
      name: 'Pleiades (Al-Thurayya)',
      visibility: 'Eastern Horizon · 20:30',
      description: 'The dazzling Seven Sisters star cluster signaling the onset of cool desert camping season.'
    }
  ];

  return (
    <section className="py-24 bg-[#0a0d0a] text-stone-100 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DARK SKY ASTRONOMICAL PRESERVE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
              The Night Sky <br />
              <span className="font-serif italic text-amber-400">Above Your Dome</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              Far from city light pollution, the skies above the Hajar Mountains and Rub Al Khali reveal the Milky Way core with naked-eye clarity.
            </p>

            <div className="space-y-3">
              {constellations.map((c) => (
                <div
                  key={c.name}
                  onClick={() => setSelectedConstellation(c.name)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedConstellation === c.name
                      ? 'bg-stone-900 border-amber-500'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-stone-100">{c.name}</h4>
                    <span className="text-[11px] font-mono text-amber-400">{c.visibility}</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-stone-900/60 border border-stone-800 text-center space-y-6 relative overflow-hidden">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-300">
                <Moon className="w-10 h-10" />
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase text-stone-500">Current Lunar Phase</div>
                <h3 className="text-2xl font-light text-stone-100 mt-1">Waxing Crescent (22% Illumination)</h3>
                <p className="text-xs text-emerald-400 font-mono mt-1">Optimal Dark Sky Contrast for Stargazing</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-stone-400 font-mono">
                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                  <div>Bortle Scale</div>
                  <div className="text-stone-100 font-bold text-sm mt-0.5">Class 2 (Dark Sky)</div>
                </div>
                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                  <div>Visible Stars</div>
                  <div className="text-amber-400 font-bold text-sm mt-0.5">~3,500+ Stars</div>
                </div>
              </div>

              <div className="text-[10px] text-stone-500 font-mono pt-2">
                Astronomy telemetry simulated for UAE mountain coordinates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
