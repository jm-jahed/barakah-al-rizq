'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, Anchor, Clock, Utensils, Waves, Calendar, ChevronRight, Check } from 'lucide-react';
import { MARINE_ITINERARIES, MarineItinerary } from '@/data/neroData';

interface NeroItineraryExplorerProps {
  onOpenBooking: () => void;
}

export const NeroItineraryExplorer: React.FC<NeroItineraryExplorerProps> = ({ onOpenBooking }) => {
  const [activeItineraryId, setActiveItineraryId] = useState<string>(MARINE_ITINERARIES[0].id);
  const [activeDayIdx, setActiveDayIdx] = useState<number>(0);

  const activeItinerary =
    MARINE_ITINERARIES.find((i) => i.id === activeItineraryId) || MARINE_ITINERARIES[0];
  const activeDay = activeItinerary.days[activeDayIdx] || activeItinerary.days[0];

  return (
    <section id="itineraries" className="py-24 bg-[#030712] border-b border-cyan-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>ARABIAN GULF & INDIAN OCEAN VOYAGES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Signature Superyacht Itineraries
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Explore meticulously plotted nautical routes through the UAE’s private archipelagos, Sir Bani Yas wildlife reserves, and the majestic fjords of Musandam.
          </p>
        </div>

        {/* Route Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          {MARINE_ITINERARIES.map((itin) => {
            const isSelected = itin.id === activeItineraryId;
            return (
              <button
                key={itin.id}
                type="button"
                onClick={() => {
                  setActiveItineraryId(itin.id);
                  setActiveDayIdx(0);
                }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0F223D] to-[#081324] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-[#091322] border-white/10 hover:border-cyan-500/30 text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    {itin.region}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-300">
                    {itin.duration}
                  </span>
                </div>
                <h4 className="text-sm font-bold font-serif text-white">{itin.title}</h4>
                <p className="text-[11px] font-mono text-gray-400">{itin.nauticalMiles} Nautical Miles • {itin.bestSeason}</p>
              </button>
            );
          })}
        </div>

        {/* Active Itinerary Deep-Dive Container */}
        <div className="bg-[#091322] rounded-3xl border border-cyan-500/30 p-6 sm:p-10 shadow-2xl space-y-8 max-w-6xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Route Overview Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                {activeItinerary.region} • {activeItinerary.nauticalMiles} NM Total Passage
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
                {activeItinerary.title}
              </h3>
              <p className="text-xs font-mono text-gray-300 max-w-2xl mt-2 leading-relaxed">
                {activeItinerary.summary}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                REQUEST THIS ROUTE →
              </button>
            </div>
          </div>

          {/* Day Navigation Tabs */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider block">
              Select Day Waypoint ({activeItinerary.days.length} Days)
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {activeItinerary.days.map((day, idx) => (
                <button
                  key={day.dayNumber}
                  type="button"
                  onClick={() => setActiveDayIdx(idx)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                    activeDayIdx === idx
                      ? 'bg-cyan-500 text-black border-cyan-400 font-extrabold shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                      : 'bg-[#040914] text-gray-400 border-white/10 hover:text-white'
                  }`}
                >
                  Day {day.dayNumber}: {day.cruisingHours}
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#040914] border border-cyan-500/20 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
              <div>
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold">
                  DAY {activeDay.dayNumber} OF {activeItinerary.days.length}
                </span>
                <h4 className="text-xl font-bold font-serif text-white mt-2">{activeDay.title}</h4>
                <p className="text-xs font-mono text-cyan-300">Coordinates: {activeDay.coordinates}</p>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-gray-400">
                <span className="block text-white font-bold">{activeDay.cruisingHours} Underway</span>
                <span>Cruising at 14–16 Knots</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider block">
                Signature Day Experiences & Water Activities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeDay.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Anchor className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-gray-300 leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anchorage & Dining Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#091322] border border-white/5 space-y-1">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5 uppercase text-[11px]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Night Anchorage & Mooring</span>
                </span>
                <p className="text-gray-300">{activeDay.anchorage}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#091322] border border-white/5 space-y-1">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 uppercase text-[11px]">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Curated Dining Experience</span>
                </span>
                <p className="text-gray-300">{activeDay.diningExperience}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
