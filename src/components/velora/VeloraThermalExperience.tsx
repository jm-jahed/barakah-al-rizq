'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Droplets, Snowflake, ShieldCheck, Moon, ArrowRight } from 'lucide-react';
import { THERMAL_PILLARS } from '@/data/veloraData';

export const VeloraThermalExperience: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('steam');

  const activePillar =
    THERMAL_PILLARS.find((p) => p.id === activePillarId) || THERMAL_PILLARS[0];

  const iconMap: Record<string, React.ElementType> = {
    steam: Flame,
    warmth: ShieldCheck,
    cold: Snowflake,
    water: Droplets,
    rest: Moon,
  };

  return (
    <section className="py-24 bg-[#0d100e] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 border-t border-[#1a221e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c5a059] font-light mb-3">
            ARCHITECTURAL HYDROTHERAPY
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-4">
            Heat. Water. Stillness.
          </h2>
          <p className="text-[#a8a396] font-light text-base sm:text-lg">
            A scientifically calibrated thermal progression designed to stimulate circulation, calm the central nervous system, and restore biological equilibrium.
          </p>
        </div>

        {/* 5-Step Progression Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {THERMAL_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.id] || ShieldCheck;
            const isSelected = pillar.id === activePillarId;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between min-h-[120px] cursor-pointer ${
                  isSelected
                    ? 'bg-[#1a241e] border-[#c5a059] text-[#fdfbf7] shadow-[0_0_25px_rgba(197,160,89,0.2)]'
                    : 'bg-[#111613] border-[#1e2721] text-[#7d786d] hover:bg-[#161c18] hover:text-[#ded9ce]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${isSelected ? 'text-[#c5a059]' : 'text-[#5a554c]'}`}>
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#c5a059]' : 'text-[#5a554c]'}`} />
                </div>
                <div>
                  <div className={`text-base font-serif ${isSelected ? 'text-[#fdfbf7]' : 'text-[#ded9ce]'}`}>
                    {pillar.name}
                  </div>
                  <div className="text-[10px] text-[#716c62] truncate mt-0.5 font-light">
                    {pillar.tempRange}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Thermal Stage Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#16201b] via-[#111613] to-[#0c0f0d] border border-[#27362e] shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#c5a059] uppercase mb-2">
                  <span>{activePillar.tempRange}</span>
                  <span>·</span>
                  <span>Recommended: {activePillar.recommendedDuration}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#fdfbf7] mb-2">
                  {activePillar.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8477] italic mb-6">
                  {activePillar.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#b8b2a3] font-light leading-relaxed mb-6">
                  {activePillar.description}
                </p>

                <div className="p-4 rounded-xl bg-[#0e1310] border border-[#1f2a24] text-xs text-[#a9a497] font-light">
                  <strong className="text-[#c5a059] font-normal block mb-1 uppercase tracking-wider text-[10px]">
                    Sensory & Biological Purpose
                  </strong>
                  {activePillar.benefit}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0f1412] border border-[#222e27] space-y-4">
                <div className="text-[11px] text-[#716c62] uppercase tracking-widest font-medium">
                  Thermal Sanctuary Amenities
                </div>
                <ul className="text-xs text-[#bcb7ab] font-light space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>Himalayan salt vapor infusion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>Acoustic underwater resonance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>Crushed botanical ice fountains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>Heated ergonomic stone loungers</span>
                  </li>
                </ul>

                <div className="pt-2 text-[10px] text-[#6b665d] italic border-t border-[#1a231e]">
                  Non-clinical hydrotherapy. Designed for relaxation and well-being.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
