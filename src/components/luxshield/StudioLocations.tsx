'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { LUXSHIELD_LOCATIONS } from '@/data/luxshieldData';

export const StudioLocations: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B0C0E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            UAE STUDIO LOCATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Visit Our Detailing Studios
          </h2>
          <p className="text-gray-300 text-base font-light">
            Climate-controlled flagship facilities in Dubai and Abu Dhabi featuring dust-free coating booths and IR curing lamps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LUXSHIELD_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="p-8 rounded-3xl bg-[#14161A] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-400 font-mono">{loc.city}</span>
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-mono">{loc.area}</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">{loc.description}</p>
                
                <div className="text-xs text-gray-300 font-mono space-y-2 bg-[#0B0C0E] p-4 rounded-2xl border border-white/10">
                  <p className="flex items-center gap-2">📍 <span>{loc.address}</span></p>
                  <p className="flex items-center gap-2 text-amber-300">🕒 <span>{loc.hours}</span></p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-xs font-bold text-white">
                <span>{loc.phone}</span>
                <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-blue-400 hover:underline">
                  CALL STUDIO DESK
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};