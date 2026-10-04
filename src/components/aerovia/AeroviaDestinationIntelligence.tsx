'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Heart, Briefcase, Mountain, Landmark, Palmtree, ArrowRight, CheckCircle2 } from 'lucide-react';

const TRAVEL_STYLES = [
  { id: 'relax', name: 'Relax & Wellness', icon: <Palmtree className="w-4 h-4" /> },
  { id: 'culture', name: 'Imperial Culture & Art', icon: <Landmark className="w-4 h-4" /> },
  { id: 'romance', name: 'Romance & Seclusion', icon: <Heart className="w-4 h-4" /> },
  { id: 'business', name: 'Executive & Business', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'adventure', name: 'High-Altitude Adventure', icon: <Mountain className="w-4 h-4" /> },
  { id: 'explore', name: 'Urban Design & Gastronomy', icon: <Compass className="w-4 h-4" /> }
];

export const AeroviaDestinationIntelligence: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('culture');
  const [tripLength, setTripLength] = useState('5–7 Days');
  const [budgetTier, setBudgetTier] = useState('First / Palace Luxury');

  return (
    <section className="relative py-28 bg-[#03070d] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            DESTINATION INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Your Next Destination, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Curated to Your Taste.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Select your preferred travel ethos, length of stay, and comfort parameters. Our AI matching model calculates the optimal worldwide city or island retreat.
          </p>
        </div>

        {/* Intelligence Controls Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#091422] to-[#040810] border border-amber-500/30 shadow-2xl max-w-5xl mx-auto">
          {/* Style Selector */}
          <div className="mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-3">
              01. Choose Travel Ethos & Style:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {TRAVEL_STYLES.map((style) => {
                const isSelected = selectedStyle === style.id;
                return (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-b from-amber-950/70 to-slate-900/90 border-amber-500 text-amber-300 shadow-md shadow-amber-500/20'
                        : 'bg-[#060c14] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {style.icon}
                    <span className="text-[11px] font-mono font-bold leading-tight">{style.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Controls: Trip Length & Budget Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 pt-6 border-t border-slate-800">
            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase mb-2">Trip Duration:</label>
              <select
                value={tripLength}
                onChange={(e) => setTripLength(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#040810] border border-slate-800 text-sm text-white font-mono focus:outline-none focus:border-amber-500"
              >
                <option value="Weekend Escape (3–4 Days)">Weekend Escape (3–4 Days)</option>
                <option value="5–7 Days">Signature Journey (5–7 Days)</option>
                <option value="10–14 Days">Grand Tour (10–14 Days)</option>
                <option value="Extended Sabbatical (21+ Days)">Extended Sabbatical (21+ Days)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-amber-400 uppercase mb-2">Comfort & Service Tier:</label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#040810] border border-slate-800 text-sm text-white font-mono focus:outline-none focus:border-amber-500"
              >
                <option value="Business & Boutique Luxury">Business Suite & Boutique 5-Star</option>
                <option value="First / Palace Luxury">First Class & Palace Distinction</option>
                <option value="Private Jet & Overwater Estate">Private Jet & Island Estate</option>
              </select>
            </div>
          </div>

          {/* Generated Recommendation Card */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#0a1828] via-[#050b14] to-[#0a1828] border border-amber-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-emerald-400 font-bold">98.4% MATCH SCORE</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-amber-300">TOKYO • 5–7 DAYS</span>
              </div>
              <h3 className="text-xl font-bold text-white">Culture + Design + Michelin Gastronomy</h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Flight EK 318 (A380 Suite) + Aman Tokyo Premier Room + 3 VIP Curated Ateliers
              </p>
            </div>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-xs font-mono transition-all shadow-md shadow-amber-500/20 flex items-center gap-2 shrink-0">
              Explore Tokyo Proposal <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
