'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AEROVIA_DESTINATIONS, DestinationItem } from '@/data/aeroviaData';
import { Compass, MapPin, Clock, ArrowRight, ShieldCheck, Plane, Building2 } from 'lucide-react';

interface AeroviaDestinationDiscoveryProps {
  onSelectDestination?: (dest: DestinationItem) => void;
}

export const AeroviaDestinationDiscovery: React.FC<AeroviaDestinationDiscoveryProps> = ({ onSelectDestination }) => {
  return (
    <section className="relative py-28 bg-[#02050b] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              DESTINATION COLLECTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Where Will You <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                Go Next?
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated global itineraries designed from Dubai and the Gulf. Explore high-speed connections, world-class architecture, and private island sanctuaries.
          </p>
        </div>

        {/* 6 Curated Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AEROVIA_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination?.(dest)}
              className="group cursor-pointer rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08121f] via-transparent to-black/30" />

                  {/* Flight duration badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/75 backdrop-blur-md border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                    <Plane className="w-3 h-3 text-amber-400" />
                    {dest.flightHoursFromDXB}
                  </div>

                  {/* Destination Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                      {dest.country} • {dest.region}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs text-slate-300 italic mb-4 font-serif">
                    “{dest.tagline}”
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.curatedStyles.map((style, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {style}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-2xl bg-[#040810] border border-slate-800/80 mb-2">
                    <span className="text-slate-500 text-[10px] font-mono block mb-1">Curated Highlight:</span>
                    <p className="text-xs font-mono text-slate-300">{dest.highlights[0]}</p>
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Starting Flight</span>
                  <div className="text-base font-bold text-white font-mono text-amber-300">
                    AED {dest.startingFlightAED.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
                  <span>Explore {dest.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
