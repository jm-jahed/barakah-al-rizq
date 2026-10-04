'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Clock, Luggage, ShieldCheck, CheckCircle2, Coffee, Wifi, Tv, Bed } from 'lucide-react';

export const AeroviaFlightDetail: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#020509] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#091422] to-[#040810] border border-amber-500/30 shadow-2xl">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-amber-400">FLIGHT DETAILS • EK 318</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-950 border border-amber-500/40 text-amber-300">
                  Direct Non-Stop
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">Dubai (DXB) → Tokyo Haneda (HND)</h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">Aircraft Class</span>
              <span className="text-base font-bold font-mono text-white">Airbus A380-800 First / Business Suite</span>
            </div>
          </div>

          {/* Detailed Timeline Route */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="p-6 rounded-2xl bg-[#060c16] border border-slate-800">
              <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Departure</span>
              <div className="text-2xl font-bold text-white font-mono">08:20 AM</div>
              <p className="text-xs text-slate-300 font-semibold mt-1">Dubai International Airport (DXB)</p>
              <p className="text-xs text-slate-500 font-mono">Terminal 3 • Concourse A Lounge Access</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060c16] border border-slate-800 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase block mb-1">In-Flight Duration</span>
                <div className="text-2xl font-bold text-white font-mono">09h 25m</div>
                <p className="text-xs text-emerald-400 font-mono mt-1">Cruising Altitude: 39,000 ft</p>
              </div>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
                Carbon Offset: 420 kg (Included)
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#060c16] border border-slate-800">
              <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Arrival</span>
              <div className="text-2xl font-bold text-white font-mono">10:45 PM</div>
              <p className="text-xs text-slate-300 font-semibold mt-1">Tokyo Haneda International (HND)</p>
              <p className="text-xs text-slate-500 font-mono">Terminal 3 • VIP Fast-Track Immigration</p>
            </div>
          </div>

          {/* Onboard Suite Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#03060c] border border-slate-800/80 mb-6">
            <div className="flex items-center gap-3">
              <Bed className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs font-bold text-white">Full Lie-Flat Bed</div>
                <span className="text-[10px] text-slate-400 font-mono">78" Pitch • Mattress</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Coffee className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs font-bold text-white">À La Carte Dining</div>
                <span className="text-[10px] text-slate-400 font-mono">Dom Pérignon • Kaiseki</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-xs font-bold text-white">High-Speed Starlink</div>
                <span className="text-[10px] text-slate-400 font-mono">Unlimited In-Flight WiFi</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Tv className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs font-bold text-white">32" 4K HDR Display</div>
                <span className="text-[10px] text-slate-400 font-mono">6,500+ Media Channels</span>
              </div>
            </div>
          </div>

          {/* Fare Conditions */}
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Free Date Changes up to 24h before
              </span>
              <span>•</span>
              <span className="text-slate-300">2 × 32kg Checked Baggage</span>
            </div>
            <span className="text-amber-300 font-bold">Guaranteed Price: AED 8,420</span>
          </div>
        </div>
      </div>
    </section>
  );
};
