'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AEROVIA_HOTELS, HotelProperty } from '@/data/aeroviaData';
import { Building2, Star, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Wifi, Coffee, Waves, Utensils } from 'lucide-react';

interface AeroviaHotelDiscoveryProps {
  onSelectHotel?: (hotel: HotelProperty) => void;
}

export const AeroviaHotelDiscovery: React.FC<AeroviaHotelDiscoveryProps> = ({ onSelectHotel }) => {
  const [selectedDestination, setSelectedDestination] = useState<string>('All');

  const destinations = ['All', 'Tokyo', 'Paris', 'Maldives', 'Singapore', 'Dubai'];

  const filteredHotels = AEROVIA_HOTELS.filter((hotel) => {
    if (selectedDestination === 'All') return true;
    return hotel.destination === selectedDestination;
  });

  return (
    <section className="relative py-28 bg-[#020409] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              CURATED HOSPITALITY STAYS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Stay Somewhere <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                Worth Arriving For.
              </span>
            </h2>
          </div>

          {/* Destination filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {destinations.map((dest) => (
              <button
                key={dest}
                onClick={() => setSelectedDestination(dest)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedDestination === dest
                    ? 'bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08121f] via-transparent to-black/30" />

                  {/* Badge */}
                  {hotel.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500 text-black shadow-md">
                      {hotel.badge}
                    </div>
                  )}

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {hotel.guestRating}
                  </div>

                  <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {hotel.neighborhood}, {hotel.destination}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    {hotel.propertyCategory}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {hotel.description}
                  </p>

                  <div className="p-3 rounded-2xl bg-[#040810] border border-slate-800/80 mb-4">
                    <span className="text-slate-500 text-[10px] font-mono block mb-0.5">Selected Room:</span>
                    <p className="text-xs font-bold text-slate-200 font-mono">{hotel.roomType}</p>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-1.5 mb-2">
                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Nightly Rate</span>
                  <div className="text-xl font-extrabold text-white font-mono text-amber-300">
                    AED {hotel.pricePerNightAED.toLocaleString()}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    Total ({hotel.stayNights}N): AED {hotel.totalStayAED.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => onSelectHotel?.(hotel)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-bold text-xs font-mono transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5"
                >
                  Select Stay <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
