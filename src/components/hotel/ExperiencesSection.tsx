'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Clock, Users, Calendar, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { HOTEL_EXPERIENCES, ExperienceItem } from '@/data/hotelData';

interface ExperiencesSectionProps {
  onRequestExperience: (exp: ExperienceItem) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onRequestExperience }) => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem>(HOTEL_EXPERIENCES[0]);

  return (
    <section id="experiences" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              CURATED UAE VIP EXPERIENCES
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
              Beyond the palace walls.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Private 85ft Superyacht charters, private helicopter skyline tours, desert royal falconry, and 24K gold hammam rituals orchestrated exclusively by our Royal Butler concierge.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs">
            <span className="text-[#C5A059] font-bold">4 SIGNATURE VIP EXPERIENCES</span>
            <span className="text-stone-400 text-[11px]">All rates in AED (د.إ)</span>
          </div>
        </div>

        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {HOTEL_EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className={`p-5 rounded-2xl border text-left transition-all font-sans flex flex-col justify-between h-36 ${
                selectedExp.id === exp.id
                  ? 'bg-[#29221D] border-[#C5A059] text-white shadow-xl shadow-[#C5A059]/10'
                  : 'bg-[#1C1917] border-stone-800 text-stone-400 hover:bg-stone-800/80 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono opacity-70">EXPERIENCE {exp.code}</span>
                {selectedExp.id === exp.id && (
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-serif font-bold text-[#F7F4EE] block leading-tight">{exp.title}</h3>
                <span className="text-[10px] font-mono text-[#C5A059] block mt-1">AED {exp.priceAED.toLocaleString()} / Session</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Experience Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-[#29221D] rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#C5A059] font-bold uppercase">EXPERIENCE #{selectedExp.code}</span>
                <span className="text-stone-400">• {selectedExp.departureTime}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-[#F7F4EE] leading-tight">
                {selectedExp.title}
              </h3>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                {selectedExp.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs py-3 border-y border-stone-800">
                <div className="p-3 bg-[#1C1917] rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 block">DURATION</span>
                  <span className="text-[#F7F4EE] font-bold">{selectedExp.duration}</span>
                </div>
                <div className="p-3 bg-[#1C1917] rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 block">GROUP SIZE</span>
                  <span className="text-[#F7F4EE] font-bold">{selectedExp.groupSize}</span>
                </div>
                <div className="p-3 bg-[#1C1917] rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 block">ESTIMATED RATE</span>
                  <span className="text-[#C5A059] font-bold">AED {selectedExp.priceAED.toLocaleString()}</span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-[#C5A059] font-bold uppercase block mb-1">INCLUDED IN VIP ITINERARY</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedExp.included.map((inc) => (
                    <div key={inc} className="flex items-center gap-2 text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onRequestExperience(selectedExp)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-black font-bold text-xs flex items-center gap-2 shadow-lg pt-3 hover:scale-[1.02] transition-transform"
              >
                <span>Request {selectedExp.title} (AED {selectedExp.priceAED.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl h-[360px] sm:h-[420px]">
                <img
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29221D] via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
