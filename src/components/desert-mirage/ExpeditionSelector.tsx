'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Clock, Users, ArrowRight, ShieldCheck, CheckCircle2, Star, ChevronRight } from 'lucide-react';
import { EXPEDITIONS, Expedition } from '@/data/desertMirageData';

interface ExpeditionSelectorProps {
  onOpenBooking: (expeditionId?: string) => void;
}

export const ExpeditionSelector: React.FC<ExpeditionSelectorProps> = ({ onOpenBooking }) => {
  const [selectedExpeditionId, setSelectedExpeditionId] = useState<string>(EXPEDITIONS[0].id);
  const [filterLevel, setFilterLevel] = useState<string>('ALL');

  const levels = ['ALL', 'Thrilling Adventure', 'Relaxed Luxury', 'Ultra-Exclusive', 'Culinary Focus'];

  const filteredExpeditions = filterLevel === 'ALL'
    ? EXPEDITIONS
    : EXPEDITIONS.filter(e => e.experienceLevel === filterLevel);

  const activeExpedition = EXPEDITIONS.find(e => e.id === selectedExpeditionId) || EXPEDITIONS[0];

  return (
    <section id="expeditions" className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C9A265]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#3B3026]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>THE EXPEDITION COLLECTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Choose Your Expedition
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Six signature desert voyages crafted with private off-road navigation, royal falconry, stargazing celestial decks, and bespoke Arabian culinary feasts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
                  filterLevel === lvl
                    ? 'bg-[#C9A265] text-[#090706] font-bold shadow-md shadow-[#C9A265]/20'
                    : 'bg-[#140F0C] border border-[#C9A265]/20 text-stone-400 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Expeditions Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredExpeditions.map((exp) => {
            const isSelected = selectedExpeditionId === exp.id;

            return (
              <motion.div
                key={exp.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedExpeditionId(exp.id)}
                className={`group rounded-2xl cursor-pointer overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1A1410] to-[#0F0C0A] border-[#C9A265] shadow-2xl shadow-[#C9A265]/20 ring-1 ring-[#C9A265]/40'
                    : 'bg-[#120E0B]/90 border-stone-800/80 hover:border-[#C9A265]/40'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A] via-[#0F0C0A]/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#090706]/80 backdrop-blur-md border border-[#C9A265]/30 text-[10px] font-mono text-[#E8D7B8] font-bold uppercase">
                      {exp.tag}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      exp.availability === 'AVAILABLE'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                        : exp.availability === 'LIMITED'
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                        : 'bg-[#C9A265]/20 text-[#E8D7B8] border border-[#C9A265]/40'
                    }`}>
                      {exp.availability}
                    </span>
                  </div>

                  {/* Pricing on Image Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-stone-400 uppercase">Starting From</div>
                      <div className="text-xl font-mono font-bold text-[#E8D7B8]">
                        AED {exp.basePriceAED.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-stone-400">
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-serif text-white group-hover:text-[#E8D7B8] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-mono text-[#C9A265]">{exp.subtitle}</p>
                    <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2 pt-1">
                      {exp.description}
                    </p>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-3 border-t border-stone-800 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="p-1.5 rounded bg-[#18130F] border border-stone-800/80">
                        <div className="text-stone-500">{h.label}</div>
                        <div className="text-stone-300 font-semibold truncate">{h.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Card Action */}
                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#C9A265]">
                    <span>Inspect Expedition Dossier</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Expedition Dossier Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExpedition.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/40 shadow-2xl shadow-[#C9A265]/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#C9A265]/20 border border-[#C9A265]/40 text-xs font-mono text-[#E8D7B8] font-bold">
                    {activeExpedition.tag}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Departure: {activeExpedition.departureTime}
                  </span>
                </div>

                <h3 className="text-3xl font-serif text-white">
                  {activeExpedition.title} — <span className="italic text-[#E8D7B8] font-light">{activeExpedition.subtitle}</span>
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed font-light">
                  {activeExpedition.description}
                </p>

                {/* Included Features List */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#C9A265] font-semibold">
                    Expedition Inclusions:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeExpedition.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A265] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sizing & Booking Box */}
              <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-[#0F0C0A] border border-[#C9A265]/30">
                <div className="text-xs font-mono uppercase tracking-widest text-[#C9A265]">
                  EXPEDITION PRICING IN AED
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono text-stone-400">Shared Luxury Tier:</span>
                    <span className="text-2xl font-mono font-bold text-white">
                      AED {activeExpedition.basePriceAED.toLocaleString()} <span className="text-xs font-normal text-stone-500">/ guest</span>
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-2 border-t border-stone-800">
                    <span className="text-xs font-mono text-stone-400">Private Vehicle Charter (Up to 4):</span>
                    <span className="text-xl font-mono font-bold text-[#E8D7B8]">
                      AED {activeExpedition.privatePriceAED.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 space-y-2.5">
                  <button
                    onClick={() => onOpenBooking(activeExpedition.id)}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C9A265] via-[#D8B478] to-[#A87B38] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C9A265]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Reserve {activeExpedition.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center text-[10px] font-mono text-stone-500">
                    Complimentary Cancellation up to 24 Hours Prior.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
