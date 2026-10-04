'use client';

import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { CLINIC_LOCATIONS } from '@/data/petCareData';

export const PetLocations: React.FC<any> = () => {
  return (
    <section id="locations" className="py-24 sm:py-32 bg-[#0B1219] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>UAE CLINICAL NETWORK & HOSPITAL CENTERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Four Premier UAE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Hospital Locations.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Conveniently located in prime luxury neighborhoods across Dubai, Abu Dhabi, and Sharjah with on-site surgical suites and 24/7 trauma bays.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="rounded-3xl bg-[#0E1720] border border-white/10 p-6 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden relative">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1720] via-transparent to-transparent" />
                  {loc.is24h && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-rose-500 text-white font-mono font-bold text-[9px]">
                      24/7 OPEN
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                    {loc.emirate} EMIRATE
                  </span>
                  <h4 className="text-base font-bold text-white font-sans mt-0.5">
                    {loc.name}
                  </h4>
                  <p className="text-xs text-slate-300 font-mono mt-1">
                    {loc.address}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{loc.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/15 hover:border-emerald-500/30 text-xs font-mono font-bold text-emerald-300 text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetLocations;
