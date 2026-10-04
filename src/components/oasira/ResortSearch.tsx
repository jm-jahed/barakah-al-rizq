'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter, ArrowRight } from 'lucide-react';

interface ResortSearchProps {
  onSearch: (params: { destination: string; checkIn: string; checkOut: string; guests: number; tripType: string }) => void;
}

export const ResortSearch: React.FC<ResortSearchProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('Dubai');
  const [checkIn, setCheckIn] = useState('2026-09-18');
  const [checkOut, setCheckOut] = useState('2026-09-20');
  const [guests, setGuests] = useState(2);
  const [tripType, setTripType] = useState('Beach');

  const emirates = ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah', 'Fujairah', 'Sharjah', 'Al Ain', 'Ajman', 'Umm Al Quwain'];
  const tripTypes = ['Beach', 'Desert', 'Family', 'Romantic', 'Wellness', 'Adventure'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ destination, checkIn, checkOut, guests, tripType });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
      <div className="bg-[#0F382C] border border-stone-700 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
        
        <div className="flex items-center gap-2 mb-6">
          <Search className="w-5 h-5 text-[#D4B382]" />
          <h3 className="text-xl font-serif font-bold text-[#FAF6EE]">Where will you escape?</h3>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
          
          {/* Destination */}
          <div className="p-3 rounded-2xl bg-[#0A2920] border border-stone-800 space-y-1">
            <label className="text-[10px] text-stone-400 uppercase block">DESTINATION</label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-white font-bold focus:outline-none font-serif"
            >
              {emirates.map((e) => (
                <option key={e} value={e} className="bg-[#0A2920] text-white">
                  {e}
                </option>
              ))}
            </select>
          </div>

          {/* Check-In */}
          <div className="p-3 rounded-2xl bg-[#0A2920] border border-stone-800 space-y-1">
            <label className="text-[10px] text-stone-400 uppercase block">CHECK-IN</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-white font-bold focus:outline-none"
            />
          </div>

          {/* Check-Out */}
          <div className="p-3 rounded-2xl bg-[#0A2920] border border-stone-800 space-y-1">
            <label className="text-[10px] text-stone-400 uppercase block">CHECK-OUT</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-white font-bold focus:outline-none"
            />
          </div>

          {/* Guests & Trip Type */}
          <div className="p-3 rounded-2xl bg-[#0A2920] border border-stone-800 space-y-1">
            <label className="text-[10px] text-stone-400 uppercase block">GUESTS & TYPE</label>
            <div className="flex gap-2">
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-1/2 bg-transparent text-white font-bold focus:outline-none"
              >
                <option value={1} className="bg-[#0A2920]">1 Guest</option>
                <option value={2} className="bg-[#0A2920]">2 Guests</option>
                <option value={4} className="bg-[#0A2920]">4 Guests</option>
                <option value={6} className="bg-[#0A2920]">6+ Guests</option>
              </select>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-1/2 bg-transparent text-[#D4B382] font-bold focus:outline-none"
              >
                {tripTypes.map((t) => (
                  <option key={t} value={t} className="bg-[#0A2920]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              className="w-full h-full py-4 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] hover:from-[#c2a170] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Search Resorts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
