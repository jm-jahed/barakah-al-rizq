'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Building2,
  Globe,
  Box,
  Users,
  Clock,
  Truck,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { MOVE_TYPES, MoveTypeOption } from '@/data/movingData';

interface MoveTypeSelectorProps {
  onOpenQuoteModal: (moveType?: string) => void;
}

export const MoveTypeSelector: React.FC<MoveTypeSelectorProps> = ({ onOpenQuoteModal }) => {
  const [selectedType, setSelectedType] = useState<MoveTypeOption>(MOVE_TYPES[0]);

  return (
    <section id="property-types" className="py-24 bg-[#090807] relative border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            TAILORED PROPERTY RELOCATION SUITES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Are You Moving?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Select your property category to inspect dedicated crew allocations, vehicle types, master carpentry inclusions, and verified AED rates.
          </p>
        </div>

        {/* Property Type Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-12">
          {MOVE_TYPES.map((type) => {
            const isSelected = selectedType.id === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-32 ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-950/80 to-[#120F0C] border-amber-400 text-white shadow-xl shadow-amber-950/70 ring-1 ring-amber-400/40'
                    : 'bg-[#120F0C]/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">#{type.code}</span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold block leading-snug">{type.name}</h3>
                  <span className="text-[10px] text-amber-300 font-mono block mt-1">From {type.startingPrice}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Display Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-b from-[#14100C] to-[#0A0806] rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                  CATEGORY #{selectedType.code}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  {selectedType.name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {selectedType.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedType.tagline}
              </p>

              {/* Spec Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] uppercase">DEDICATED CREW</span>
                  </div>
                  <span className="text-white font-bold text-xs">{selectedType.recommendedCrew}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] uppercase">EST. DURATION</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xs">{selectedType.typicalDuration}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Truck className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px] uppercase">TRUCK CLASS</span>
                  </div>
                  <span className="text-white font-bold text-xs truncate">{selectedType.truckType}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase block">
                  Included White-Glove Protocols:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedType.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">STARTING RATE</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white font-mono">{selectedType.startingPrice}</span>
                    <span className="text-xs text-slate-400 font-mono">/ turnkey move</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(selectedType.name)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
                >
                  <span>Book {selectedType.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl relative group h-80 sm:h-96">
                <img
                  src={selectedType.image}
                  alt={selectedType.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{selectedType.name} Package</span>
                    <span className="text-amber-400 font-mono font-bold">{selectedType.startingPrice}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">Includes all cartons, blankets & building permit paperwork.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
