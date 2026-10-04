'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Users, Bed, Eye, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { HOTEL_ROOMS, RoomType } from '@/data/hotelData';

interface RoomsSuitesProps {
  onSelectRoom: (room: RoomType) => void;
  onBookRoom: (room: RoomType) => void;
}

export const RoomsSuites: React.FC<RoomsSuitesProps> = ({ onSelectRoom, onBookRoom }) => {
  return (
    <section id="rooms" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              ACCOMMODATIONS & RESIDENCES • UAE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
              Palatial suites designed for royalty.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Each private residence features Italian Calacatta marble, 24/7 dedicated Royal Butler service, Bang & Olufsen acoustics, and uninterrupted views of the Arabian Gulf and Dubai skyline.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end font-mono text-xs">
            <span className="text-[#C5A059] font-bold">42 PRIVATE SUITES & VILLAS</span>
            <span className="text-stone-400 text-[11px]">All rates in AED (د.إ)</span>
          </div>
        </div>

        {/* 4 Rooms Cards Stack */}
        <div className="space-y-12">
          {HOTEL_ROOMS.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#29221D] rounded-3xl border border-stone-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#C5A059]/40 transition-all duration-500"
            >
              {/* Media Image Column */}
              <div className={`lg:col-span-6 relative h-[320px] sm:h-[420px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29221D] via-transparent to-transparent" />
                
                <span className="absolute top-6 left-6 font-serif text-3xl font-bold text-white/40">
                  {room.code}
                </span>

                {room.butlerIncluded && (
                  <span className="absolute bottom-6 left-6 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#C5A059]/30 text-[11px] font-mono text-[#D4AF37] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    24/7 Royal Butler Included
                  </span>
                )}
              </div>

              {/* Information Column */}
              <div className={`lg:col-span-6 p-6 sm:p-10 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EE] group-hover:text-[#C5A059] transition-colors">
                      {room.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#C5A059]">
                      From AED {room.pricePerNightAED.toLocaleString()} / night
                    </span>
                    <span className="text-stone-500 text-xs">•</span>
                    <span className="text-xs text-stone-400 font-mono">{room.view}</span>
                  </div>
                  <p className="text-xs text-stone-400 font-mono mt-2">{room.tagline}</p>
                </div>

                {/* Specs Row */}
                <div className="grid grid-cols-3 gap-3 font-mono text-xs py-3 border-y border-stone-800 text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{room.sizeSqM} m²</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="truncate">{room.bedType.split(' ')[0]} {room.bedType.split(' ')[1] || ''}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{room.maxGuests} Guests</span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {room.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-[#F7F4EE] text-xs font-serif transition-all"
                  >
                    View Suite Floorplan & Gallery
                  </button>

                  <button
                    onClick={() => onBookRoom(room)}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] hover:to-[#c49f2b] text-black text-xs font-bold font-sans transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
                  >
                    <span>Reserve Residence (AED)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
