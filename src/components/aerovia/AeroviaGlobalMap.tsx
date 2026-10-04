'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Plane, MapPin, Compass, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const GLOBAL_ROUTES = [
  { origin: 'Dubai (DXB)', dest: 'Tokyo (HND)', dist: '7,934 km', time: '09h 25m', type: 'Flagship Long-Haul' },
  { origin: 'London (LHR)', dest: 'Paris (CDG)', dist: '344 km', time: '01h 15m', type: 'European Shuttle' },
  { origin: 'New York (JFK)', dest: 'Miami (MIA)', dist: '1,754 km', time: '03h 05m', type: 'Trans-Atlantic Link' },
  { origin: 'Singapore (SIN)', dest: 'Bali (DPS)', dist: '1,675 km', time: '02h 45m', type: 'Equatorial Island Route' }
];

export const AeroviaGlobalMap: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            GLOBAL FLIGHT NETWORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            The World Connected <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              In High Definition.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Real-time direct air bridges linking Dubai and the GCC with the world’s most iconic financial capitals and tranquil island sanctuaries.
          </p>
        </div>

        {/* Global Route Corridor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {GLOBAL_ROUTES.map((route, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-2">
                {route.type}
              </span>
              <div className="flex items-center gap-2 text-base font-bold text-white mb-1">
                <span>{route.origin.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                <span>{route.dest.split(' ')[0]}</span>
              </div>
              <p className="text-xs text-slate-400 font-mono mb-4">{route.origin} → {route.dest}</p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>{route.dist}</span>
                <span className="text-amber-300 font-bold">{route.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Infrastructure Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#081422] via-[#050b14] to-[#081422] border border-amber-500/35 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Direct GDS & Private Airspace Routing</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Connecting Amadeus, Sabre, and on-demand luxury charter availability into a single sub-second query gateway.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shrink-0">
            500+ Airlines Aggregated
          </span>
        </div>
      </div>
    </section>
  );
};
