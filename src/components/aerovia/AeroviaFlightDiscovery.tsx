'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AEROVIA_FLIGHTS, FlightResult } from '@/data/aeroviaData';
import { Plane, Clock, Luggage, ShieldCheck, ArrowRight, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface AeroviaFlightDiscoveryProps {
  onSelectFlight?: (flight: FlightResult) => void;
}

export const AeroviaFlightDiscovery: React.FC<AeroviaFlightDiscoveryProps> = ({ onSelectFlight }) => {
  const [selectedCabin, setSelectedCabin] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'duration'>('recommended');

  const filteredFlights = AEROVIA_FLIGHTS.filter((fl) => {
    if (selectedCabin === 'All') return true;
    return fl.cabinClass === selectedCabin;
  }).sort((a, b) => {
    if (sortBy === 'price') return a.priceAED - b.priceAED;
    if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
    return 0;
  });

  return (
    <section className="relative py-28 bg-[#03060c] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Plane className="w-3.5 h-3.5 text-amber-400" />
              FLIGHT DISCOVERY ENGINE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Find the Right <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                Way There.
              </span>
            </h2>
          </div>

          {/* Quick Filter & Sort Tabs */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[#070e1a] p-1 rounded-2xl border border-slate-800 font-mono text-xs">
              {(['All', 'Business Class', 'First Class', 'Premium Economy'] as const).map((cabin) => (
                <button
                  key={cabin}
                  onClick={() => setSelectedCabin(cabin)}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    selectedCabin === cabin
                      ? 'bg-amber-500 text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cabin}
                </button>
              ))}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2 rounded-xl bg-[#070e1a] border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-amber-500"
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="price">Sort: Lowest Price</option>
              <option value="duration">Sort: Fastest Duration</option>
            </select>
          </div>
        </div>

        {/* Flight Result Cards */}
        <div className="space-y-4">
          {filteredFlights.map((flight) => (
            <div
              key={flight.id}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group"
            >
              {/* Airline & Flight Identity */}
              <div className="flex items-center gap-4 min-w-[220px]">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 font-bold font-mono group-hover:scale-105 transition-transform">
                  {flight.airlineCode}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {flight.airline}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {flight.flightNumber} • {flight.aircraft}
                  </p>
                </div>
              </div>

              {/* Schedule & Duration Routing */}
              <div className="flex-1 w-full lg:w-auto grid grid-cols-3 gap-2 items-center text-center">
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">{flight.departureTime}</div>
                  <span className="text-xs font-mono text-slate-400">{flight.originCode}</span>
                </div>

                {/* Duration line */}
                <div className="px-2">
                  <span className="text-[11px] font-mono text-amber-400 block mb-1">{flight.duration}</span>
                  <div className="relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-slate-800"></div>
                    <Plane className="w-4 h-4 text-amber-400 absolute rotate-90" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 block mt-1">
                    {flight.stops === 0 ? 'Non-Stop Direct' : `${flight.stops} Stop`}
                  </span>
                </div>

                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">{flight.arrivalTime}</div>
                  <span className="text-xs font-mono text-slate-400">{flight.destinationCode}</span>
                </div>
              </div>

              {/* Cabin & Baggage Specs */}
              <div className="hidden sm:flex flex-col text-xs font-mono text-slate-400 gap-1 min-w-[170px]">
                <span className="text-amber-300 font-bold">{flight.cabinClass}</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Luggage className="w-3.5 h-3.5 text-slate-500" />
                  {flight.baggage}
                </span>
                <span className="text-[10px] text-emerald-400">{flight.onTimeRating} On-Time Rating</span>
              </div>

              {/* Price & Booking Button */}
              <div className="w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800 flex items-center justify-between lg:justify-end gap-6">
                <div className="text-left lg:text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Total in AED</span>
                  <div className="text-2xl font-extrabold text-white font-mono text-amber-300">
                    AED {flight.priceAED.toLocaleString()}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Taxes & Lounge Included</span>
                </div>

                <button
                  onClick={() => onSelectFlight?.(flight)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-xs font-mono transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5"
                >
                  Select Flight <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
