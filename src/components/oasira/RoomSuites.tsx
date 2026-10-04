'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Users, Maximize2, CheckCircle2, ArrowRight } from 'lucide-react';
import { OASIRA_ROOMS, OasiraRoom } from '@/data/oasiraData';

interface RoomSuitesProps {
  onSelectRoomForBooking: (room: OasiraRoom) => void;
}

export const RoomSuites: React.FC<RoomSuitesProps> = ({ onSelectRoomForBooking }) => {
  return (
    <section className="py-24 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              ACCOMMODATIONS ARCHITECTURE
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-4">
              Rooms, Suites & Villas.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              From panoramic sea-view rooms to private pool beach sanctuaries crafted for ultimate sanctuary.
            </p>
          </div>
        </div>

        {/* 5 Rooms List */}
        <div className="space-y-6">
          {OASIRA_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-[#0F382C] rounded-3xl border border-stone-800 p-6 sm:p-8 shadow-xl hover:border-[#D4B382]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-4 h-56 rounded-2xl overflow-hidden relative bg-[#0A2920]">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0A2920]/80 backdrop-blur-md text-[#D4B382] font-mono text-[10px] font-bold border border-[#D4B382]/30">
                  {room.view}
                </span>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-2xl font-serif font-bold text-[#FAF6EE]">{room.name}</h3>

                <div className="flex flex-wrap gap-4 font-mono text-xs text-stone-300">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-[#D4B382]" />
                    <span>{room.sizeSqM} m²</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-[#D4B382]" />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#D4B382]" />
                    <span>Up to {room.maxGuests} Guests</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 font-mono text-[11px] text-stone-400">
                  {room.amenities.map((a) => (
                    <span key={a} className="px-2.5 py-1 rounded-lg bg-[#0A2920] border border-stone-800">
                      ✓ {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 text-left lg:text-right space-y-3 font-mono border-t lg:border-t-0 lg:border-l border-stone-800 pt-4 lg:pt-0 lg:pl-6">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">NIGHTLY RATE</span>
                  <span className="text-2xl font-bold text-[#D4B382]">AED {room.pricePerNightAED}</span>
                </div>

                <button
                  onClick={() => onSelectRoomForBooking(room)}
                  className="w-full py-3.5 rounded-2xl bg-[#D4B382] hover:bg-[#c2a170] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Select Room</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
