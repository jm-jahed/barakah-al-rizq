'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Plane, 
  Heart,
  Eye
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/travelData';

interface SmartTripMatcherProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenInquiry: (context?: string) => void;
}

const SEASONS = [
  { id: 'eid-long-weekend', label: 'Eid & Long Weekend Break', desc: 'Short flight (under 5h from DXB), instant recharge', maxFlight: 5 },
  { id: 'uae-summer-escape', label: 'UAE Summer Cool-Down', desc: 'Alpine peaks, temperate Europe, crisp mountain air', maxFlight: 8 },
  { id: 'winter-sun', label: 'Winter Sun & Overwater Haven', desc: 'Tropical atolls, private reefs, calm waters', maxFlight: 6 },
  { id: 'grand-expedition', label: 'Grand Multi-Week Expedition', desc: 'Cultural depth, helicopter charters, bucket list', maxFlight: 12 }
];

const TRAVEL_STYLES = [
  { id: 'honeymoon', label: 'Romance & Private Overwater', filter: 'Overwater' },
  { id: 'family-vip', label: 'Multi-Gen Royal Family VIP', filter: 'Family' },
  { id: 'ski-alpine', label: 'Ski-in / Ski-out & Alpine Rail', filter: 'Alpine' },
  { id: 'safari-wild', label: 'Private Bush Aviation Safari', filter: 'Safari' },
  { id: 'cultural-zen', label: 'Michelin Dining & Zen Heritage', filter: 'Zen' }
];

export const SmartTripMatcher: React.FC<SmartTripMatcherProps> = ({
  onSelectDestination,
  onOpenInquiry,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('eid-long-weekend');
  const [selectedStyle, setSelectedStyle] = useState<string>('honeymoon');
  const [partySize, setPartySize] = useState<string>('2 Adults (Couple)');
  const shouldReduceMotion = useReducedMotion();

  // Find best destination match
  const matchedDestination = React.useMemo(() => {
    if (selectedStyle === 'ski-alpine' || selectedSeason === 'uae-summer-escape') {
      return DESTINATIONS_DATA.find((d) => d.id === 'dest-switzerland') || DESTINATIONS_DATA[1];
    }
    if (selectedStyle === 'cultural-zen') {
      return DESTINATIONS_DATA.find((d) => d.id === 'dest-japan') || DESTINATIONS_DATA[3];
    }
    if (selectedStyle === 'safari-wild') {
      return DESTINATIONS_DATA.find((d) => d.id === 'dest-serengeti') || DESTINATIONS_DATA[4];
    }
    if (selectedStyle === 'honeymoon' || selectedSeason === 'eid-long-weekend') {
      return DESTINATIONS_DATA.find((d) => d.id === 'dest-maldives') || DESTINATIONS_DATA[0];
    }
    return DESTINATIONS_DATA[2];
  }, [selectedSeason, selectedStyle]);

  return (
    <section id="trip-matcher" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI TRAVEL MATCHER FOR UAE RESIDENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Instant UAE Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Match Engine</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Match your exact holiday calendar, non-stop flight duration from DXB/AUH, and luxury preferences with an instant bespoke travel proposal.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">Tailored for GCC Calendars</span>
            <span className="text-[11px] text-slate-500">Eid, Summer & Winter Escapes</span>
          </div>
        </div>

        {/* 2-Column Matcher Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F141E] border border-white/10 space-y-7 shadow-2xl backdrop-blur-md">
            
            {/* 1. Travel Season Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                1. Select UAE Travel Window / Season:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SEASONS.map((s) => {
                  const isSelected = s.id === selectedSeason;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSeason(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white font-bold shadow-md'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-sm font-bold text-white mb-0.5">{s.label}</div>
                      <div className="text-[11px] text-slate-400 font-mono leading-tight">{s.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Travel Style */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                2. Travel Vibe & Experience Style:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TRAVEL_STYLES.map((st) => {
                  const isSelected = st.id === selectedStyle;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setSelectedStyle(st.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-amber-300 font-bold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Travel Party */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                3. Traveling Party Size:
              </label>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                {['2 Adults (Couple)', 'Family (2 Adults + 2 Kids)', 'Royal Party (6+ Guests)'].map((p) => {
                  const isSelected = p === partySize;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPartySize(p)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Match Output Card (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121722] via-[#0E131C] to-[#0A0D14] border border-amber-500/30 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-0.5">
                  AI CURATED MATCH
                </span>
                <h3 className="text-xl font-black text-white">
                  {matchedDestination.name}
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  {matchedDestination.country} • {matchedDestination.style}
                </span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                99% Match
              </span>
            </div>

            {/* Destination Preview Frame */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/5">
              <img
                src={matchedDestination.image}
                alt={matchedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                <span className="text-amber-300 font-bold">From AED {matchedDestination.priceFromAED.toLocaleString()}</span>
                <span>{matchedDestination.flightTimeFromDXB}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {matchedDestination.description}
            </p>

            {/* Quick Match Specs */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Flight Connection:</span>
                <span className="text-white font-bold">{matchedDestination.flightTimeFromDXB}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>UAE Visa Protocol:</span>
                <span className="text-emerald-300 font-bold">{matchedDestination.visaForUAEResidents}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Recommended Stay:</span>
                <span className="text-amber-300 font-bold">{matchedDestination.duration}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => onSelectDestination(matchedDestination)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Matched Sanctuary</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenInquiry(`Matched Trip Inquiry: ${matchedDestination.name} for ${partySize}`)}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Request Tailored Proposal in AED</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
