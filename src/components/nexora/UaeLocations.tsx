'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Calendar } from 'lucide-react';
import { NEXORA_LOCATIONS, NEXORA_BRAND } from '@/data/nexoraData';

interface UaeLocationsProps {
  onOpenConsultation: () => void;
}

export const UaeLocations: React.FC<UaeLocationsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="locations" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              UAE PRACTICE LOCATIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              4 UAE Offices.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Strategic office hubs situated across Dubai DIFC, Abu Dhabi Al Maryah Island, Sharjah, and Ras Al Khaimah.
            </p>
          </div>
        </div>

        {/* 4 Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {NEXORA_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="bg-[#1A1D24] rounded-3xl border border-stone-800 p-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[10px] text-[#D4AF37] uppercase font-bold px-2.5 py-1 rounded-md bg-[#121417] border border-[#D4AF37]/30 inline-block">
                  {loc.type}
                </span>

                <h3 className="text-xl font-serif font-bold text-[#F7F6F2]">{loc.city}</h3>

                <div className="space-y-1.5 text-stone-300 font-sans text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{loc.building}</span>
                      <span className="text-stone-400 text-[11px]">{loc.district}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-[11px] font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span className="text-stone-400">{loc.hours}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#D4AF37]">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="font-bold">{loc.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 space-y-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2b] text-black font-serif font-bold text-xs uppercase"
                >
                  Book Meeting
                </button>

                <a
                  href={NEXORA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-xl bg-[#121417] hover:bg-stone-800 text-emerald-300 border border-emerald-500/20 text-center block text-[11px] font-bold"
                >
                  WhatsApp Office
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
