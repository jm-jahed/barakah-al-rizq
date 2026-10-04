'use client';

import React, { useState } from 'react';
import { Globe, MapPin, ArrowRight, Shield } from 'lucide-react';
import { REGIONAL_HUBS, RegionalHub } from '@/data/logisticsData';

export const CoverageMap: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<RegionalHub>(REGIONAL_HUBS[0]);

  return (
    <section id="coverage" className="py-24 bg-[#070B14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              GLOBAL LOGISTICS NETWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              Wherever business takes you.
            </h2>
            <p className="text-base text-gray-400 mt-2 max-w-xl">
              Direct air freight, highway corridors, and ocean port gateways connecting the Middle East to international commercial hubs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 font-bold uppercase">120+ COUNTRIES CONNECTED</span>
          </div>
        </div>

        {/* Map Visualization & Location Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic Canvas Box */}
          <div className="lg:col-span-8 bg-[#0F172A] rounded-3xl border border-blue-500/30 p-6 sm:p-8 relative min-h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl">
            
            {/* World Map SVG Dots Representation */}
            <div className="absolute inset-0 opacity-20 pointer-events-none p-6">
              <svg className="w-full h-full" viewBox="0 0 100 60">
                {/* Simplified continent shapes */}
                <ellipse cx="25" cy="25" rx="15" ry="12" fill="#38BDF8" opacity="0.3" />
                <ellipse cx="45" cy="28" rx="12" ry="10" fill="#38BDF8" opacity="0.3" />
                <ellipse cx="55" cy="48" rx="14" ry="8" fill="#38BDF8" opacity="0.4" />
                <ellipse cx="80" cy="35" rx="15" ry="12" fill="#38BDF8" opacity="0.3" />
              </svg>
            </div>

            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs font-mono font-bold text-gray-300 uppercase">INTERACTIVE NETWORK MAP</span>
              <span className="text-[10px] font-mono text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                ACTIVE AIR & LAND CORRIDORS
              </span>
            </div>

            {/* Hub Location Pins Overlay */}
            <div className="relative z-10 my-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {REGIONAL_HUBS.map((hub) => (
                <button
                  key={hub.city}
                  onClick={() => setSelectedHub(hub)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    selectedHub.city === hub.city
                      ? 'bg-blue-600 border-cyan-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-[#070B14]/90 border-white/10 text-gray-300 hover:border-blue-500/40 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className={`w-3.5 h-3.5 ${selectedHub.city === hub.city ? 'text-cyan-300' : 'text-blue-400'}`} />
                    <span className="font-bold font-mono text-xs">{hub.city}</span>
                  </div>
                  <span className="text-[10px] font-mono block opacity-80">{hub.country}</span>
                </button>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-gray-400 pt-4 border-t border-white/10">
              <span>Middle East • GCC Highways • EU Gateway • APAC Air Freight</span>
              <span className="text-cyan-300">Selected: {selectedHub.city}</span>
            </div>

          </div>

          {/* Right Selected Hub Spec Card */}
          <div className="lg:col-span-4 bg-[#0F172A] rounded-3xl border border-blue-500/30 p-8 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                HUB SPECIFICATIONS
              </span>

              <h3 className="text-2xl font-extrabold text-white mt-4">{selectedHub.city}</h3>
              <p className="text-xs text-gray-400 font-mono mb-6">{selectedHub.country}</p>

              <div className="space-y-4 font-mono text-xs mb-8">
                <div className="p-3.5 rounded-xl bg-[#070B14] border border-white/10 flex justify-between">
                  <span className="text-gray-400">HUB CATEGORY</span>
                  <span className="text-white font-bold">{selectedHub.type}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070B14] border border-white/10 flex justify-between">
                  <span className="text-gray-400">DAILY CARGO VOLUME</span>
                  <span className="text-cyan-300 font-bold">{selectedHub.dailyVolume}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070B14] border border-white/10 flex justify-between">
                  <span className="text-gray-400">AVG TRANSIT LEAD TIME</span>
                  <span className="text-emerald-400 font-bold">{selectedHub.avgLeadTime}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070B14] border border-white/10 flex justify-between">
                  <span className="text-gray-400">OPERATIONAL STATUS</span>
                  <span className="text-blue-400 font-bold">{selectedHub.status}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30">
              <span className="text-[11px] font-mono text-cyan-300 block mb-1">GCC Customs Express Clearance</span>
              <p className="text-[11px] text-gray-300">
                Direct customs integration ensuring sub-2-hour border clearance for bonded cargo between UAE, Saudi Arabia, and Qatar.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
