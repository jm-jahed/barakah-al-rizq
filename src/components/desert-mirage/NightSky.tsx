'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, ShieldCheck, Compass, Eye, Star } from 'lucide-react';

export const NightSky: React.FC = () => {
  const celestialHighlights = [
    {
      title: 'Meade 14-Inch Telescope',
      desc: 'High-aperture Schmidt-Cassegrain optics tracking deep space nebulae, Jupiter’s cloud bands, and Saturnian rings.'
    },
    {
      title: 'Resident Master Astronomer',
      desc: 'Guided laser-pointer constellation tours revealing ancient Arabic celestial names (Aldebaran, Betelgeuse, Altair).'
    },
    {
      title: 'Zero Light Pollution Zone',
      desc: 'Located inside Dubai’s protected dark-sky corridor, delivering unobstructed Bortle Class 3 cosmic clarity.'
    }
  ];

  return (
    <section id="night-sky" className="relative py-24 bg-[#060504] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      {/* Subtle Starfield Glow */}
      <div className="absolute inset-0 bg-radial-vignette opacity-90 pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-950/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Moon className="w-3.5 h-3.5" />
            <span>CELESTIAL ASTRONOMY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            After Sunset, The Desert Changes.
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            When all camp lights are extinguished, the temperature drops and a quiet velvet silence envelops the dunes. Above you, 100,000 stars awaken across the Arabian night sky.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
            {celestialHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#140F0C] to-[#0A0806] border border-[#C9A265]/20 space-y-2 hover:border-[#C9A265]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1F1712] flex items-center justify-center text-[#C9A265]">
                  <Star className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif text-white pt-2">{item.title}</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
