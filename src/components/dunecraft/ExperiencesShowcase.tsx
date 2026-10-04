'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Clock, ArrowRight, Check, X, Users, Sun } from 'lucide-react';
import { DUNECRAFT_EXPERIENCES, DunecraftExperience } from '@/data/dunecraftData';

interface ExperiencesShowcaseProps {
  onOpenBookingModal: (expId?: string) => void;
}

export const ExperiencesShowcase: React.FC<ExperiencesShowcaseProps> = ({ onOpenBookingModal }) => {
  const [selectedExp, setSelectedExp] = useState<DunecraftExperience | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredExps = categoryFilter === 'All'
    ? DUNECRAFT_EXPERIENCES
    : DUNECRAFT_EXPERIENCES.filter(e => e.category.includes(categoryFilter));

  return (
    <section id="experiences" className="py-24 bg-[#1C0D02] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block mb-3">
              PREMIUM DESERT SAFARIS &amp; ADVENTURES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
              Explore Our Desert Experiences
            </h2>
            <p className="text-gray-300 text-base font-light mt-2">
              From sunset red dune bashing to VIP private tents, quad biking trails, and overnight glamping under the stars.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['All', 'Sunset', 'VIP', 'Overnight', 'Extreme', 'Corporate'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setCategoryFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  categoryFilter === f
                    ? 'bg-amber-500 text-black shadow-lg shadow-orange-950/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
                }`}
              >
                {f === 'All' ? 'All Safaris (15+)' : f}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExps.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#2A1405] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/50 transition-all group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-xs font-bold">
                    {exp.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="text-emerald-400 font-bold text-sm">AED {exp.priceAED} / person</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors font-sans">
                    {exp.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-5">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {exp.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedExp(exp)}
                  className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono transition-all border border-white/15"
                >
                  VIEW ITINERARY
                </button>
                <button
                  onClick={() => onOpenBookingModal(exp.id)}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-md"
                >
                  <span>BOOK NOW</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Detail Drawer Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-[#2A1405] p-8 text-white shadow-2xl relative border border-amber-500/30 font-sans max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-black">
                <img src={selectedExp.image} alt={selectedExp.name} className="w-full h-full object-cover" />
              </div>

              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {selectedExp.category} • {selectedExp.duration}
              </span>
              <h3 className="text-2xl font-bold mb-4 font-sans">{selectedExp.name}</h3>
              
              <div className="p-4 rounded-2xl bg-[#1C0D02] border border-white/10 mb-6 flex items-center justify-between font-mono">
                <span className="text-xs text-gray-400">PACKAGE PRICE</span>
                <span className="text-xl font-black text-amber-400">AED {selectedExp.priceAED} / person</span>
              </div>

              <div className="space-y-2 mb-8 bg-[#1C0D02] p-5 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest block mb-3">
                  SAMPLE SAFARI ITINERARY &amp; HIGHLIGHTS
                </span>
                {selectedExp.itinerary.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-white">
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const e = selectedExp;
                    setSelectedExp(null);
                    onOpenBookingModal(e.id);
                  }}
                  className="w-full py-4 rounded-xl bg-amber-500 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-lg hover:bg-amber-400 transition-colors"
                >
                  BOOK THIS DESERT SAFARI
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};