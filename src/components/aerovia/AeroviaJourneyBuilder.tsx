'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, ShieldCheck, CheckCircle2, ArrowRight, MapPin, Calendar, Users, Layers, Clock, Compass } from 'lucide-react';

interface JourneyStepState {
  destination: string;
  outboundFlight: string;
  stayHotel: string;
  stayNights: number;
  experiences: string[];
  totalAED: number;
}

export const AeroviaJourneyBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [journeyState, setJourneyState] = useState<JourneyStepState>({
    destination: 'Tokyo, Japan (HND)',
    outboundFlight: 'EK 318 • Dubai (DXB) → Tokyo (HND) Business Suite',
    stayHotel: 'Aman Tokyo & Sky Sanctuary (Premier Grand Room)',
    stayNights: 5,
    experiences: ['Private Shinto Shrine VIP Entry', 'teamLab Digital Art Tour', 'Michelin Omakase Tasting'],
    totalAED: 31920
  });

  const steps = [
    { title: '01. Choose Destination', detail: journeyState.destination, icon: <Compass className="w-4 h-4" /> },
    { title: '02. Select Flights', detail: journeyState.outboundFlight, icon: <Plane className="w-4 h-4" /> },
    { title: '03. Choose Stay', detail: `${journeyState.stayHotel} (${journeyState.stayNights} Nights)`, icon: <Building2 className="w-4 h-4" /> },
    { title: '04. Customize Experience', detail: `${journeyState.experiences.length} Curated Experiences Included`, icon: <ShieldCheck className="w-4 h-4" /> },
    { title: '05. Review & Confirm', detail: `Total Journey: AED ${journeyState.totalAED.toLocaleString()}`, icon: <CheckCircle2 className="w-4 h-4" /> }
  ];

  return (
    <section className="relative py-28 bg-[#02050b] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            SIGNATURE JOURNEY BUILDER
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Build the Journey. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Not Just the Booking.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Move beyond disjointed hotel and flight tabs. Compose every leg of your worldwide escape into a single unified timeline with synchronized connection buffers.
          </p>
        </div>

        {/* 5-Step Progression Navigator */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-12">
          {steps.map((step, idx) => {
            const isSelected = idx === currentStep;
            return (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-950/60 to-slate-900/90 border-amber-500/60 shadow-[0_0_20px_rgba(212,175,55,0.2)] ring-1 ring-amber-400/30'
                    : 'bg-[#060b14]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                      {step.title.split('.')[0]}
                    </span>
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-amber-500/20 text-amber-300' : 'text-slate-500'}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {step.title.split('. ')[1]}
                  </h4>
                </div>
                <p className="text-[10px] font-mono text-amber-400/80 mt-2 truncate">
                  {step.detail}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Journey Timeline Box (DUBAI -> TOKYO) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#091220] via-[#050b13] to-[#02050a] border border-amber-500/35 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                JOURNEY PROPOSAL: #AER-TYO-8820
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Dubai (DXB) → Tokyo (HND)</h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">Total Journey (2 Adults)</span>
              <div className="text-2xl font-extrabold text-white font-mono text-amber-300">
                AED {journeyState.totalAED.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Connected Timeline Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8 relative">
            {/* Leg 1: Flight Outbound */}
            <div className="p-5 rounded-2xl bg-[#070e1a] border border-slate-800 relative">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Plane className="w-4 h-4" />
                  OUTBOUND
                </span>
                <span>09h 25m</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">DXB → HND</h4>
              <p className="text-xs text-slate-400 font-mono mb-3">Emirates Skylink A380 Suite</p>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                Business Lie-Flat
              </span>
            </div>

            {/* Leg 2: Luxury Stay */}
            <div className="p-5 rounded-2xl bg-[#070e1a] border border-slate-800 relative">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Building2 className="w-4 h-4" />
                  5 NIGHTS
                </span>
                <span>Otemachi</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Aman Tokyo</h4>
              <p className="text-xs text-slate-400 font-mono mb-3">Premier Grand Room (Mt. Fuji View)</p>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                Breakfast & Onsen Inc.
              </span>
            </div>

            {/* Leg 3: Curated Experiences */}
            <div className="p-5 rounded-2xl bg-[#070e1a] border border-slate-800 relative">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  EXPERIENCES
                </span>
                <span>3 Private Tours</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Culture & Omakase</h4>
              <p className="text-xs text-slate-400 font-mono mb-3">Meiji Shrine VIP, teamLab & Sushi</p>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                Private Guide
              </span>
            </div>

            {/* Leg 4: Return Flight */}
            <div className="p-5 rounded-2xl bg-[#070e1a] border border-slate-800 relative">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Plane className="w-4 h-4" />
                  RETURN
                </span>
                <span>10h 10m</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">HND → DXB</h4>
              <p className="text-xs text-slate-400 font-mono mb-3">Emirates Skylink A380 Suite</p>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                Business Lie-Flat
              </span>
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>All flight connection buffers and private chauffeur transfers synchronized</span>
            </div>

            <button
              onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-xs font-mono transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              Continue Composition <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
