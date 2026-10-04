'use client';

import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { NESTORA_LOCATIONS, NESTORA_BRAND } from '@/data/nestoraData';

interface UaeLocationsProps {
  onOpenConsultation: () => void;
}

export const UaeLocations: React.FC<UaeLocationsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="locations" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              UAE PROPERTY MANAGEMENT DESKS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
              Management Offices.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Visit our client reception chambers located in Business Bay Dubai and Al Reem Island Abu Dhabi.
            </p>
          </div>
        </div>

        {/* 2 Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
          {NESTORA_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="bg-[#0C2D31] rounded-3xl border border-stone-800 p-8 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all space-y-6"
            >
              <div className="space-y-4">
                <span className="text-[10px] text-[#C5A059] uppercase font-bold px-3 py-1 rounded-md bg-[#082023] border border-[#C5A059]/30 inline-block">
                  {loc.purpose}
                </span>

                <h3 className="text-2xl font-serif font-bold text-[#F4EFE6]">{loc.city}</h3>

                <div className="space-y-2 text-stone-300 font-sans text-xs pt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{loc.building}</span>
                      <span className="text-stone-400 text-[11px]">{loc.district}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-[11px] font-mono">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span className="text-stone-400">{loc.hours}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#C5A059]">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="font-bold">{loc.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 space-y-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif font-bold text-xs uppercase"
                >
                  Book In-Person Portfolio Meeting
                </button>

                <a
                  href={NESTORA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#082023] hover:bg-stone-800 text-emerald-300 border border-emerald-500/20 text-center block text-[11px] font-bold"
                >
                  WhatsApp Property Manager
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
