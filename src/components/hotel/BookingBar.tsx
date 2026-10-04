'use client';

import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ArrowRight, Sparkles } from 'lucide-react';
import { HOTEL_ROOMS } from '@/data/hotelData';

interface BookingBarProps {
  onSearchAvailability: (searchParams: any) => void;
}

export const BookingBar: React.FC<BookingBarProps> = ({ onSearchAvailability }) => {
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-19');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchAvailability({
      checkIn,
      checkOut,
      guests,
      roomType,
    });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 mb-16">
      <form
        onSubmit={handleSearch}
        className="bg-[#29221D]/95 border border-[#C5A059]/40 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
      >
        {/* Check In */}
        <div className="p-3 rounded-2xl bg-[#1C1917] border border-stone-800 font-mono text-xs">
          <label className="text-[10px] text-stone-400 uppercase block mb-1">CHECK-IN</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent text-[#F7F4EE] font-bold focus:outline-none"
          />
        </div>

        {/* Check Out */}
        <div className="p-3 rounded-2xl bg-[#1C1917] border border-stone-800 font-mono text-xs">
          <label className="text-[10px] text-stone-400 uppercase block mb-1">CHECK-OUT</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent text-[#F7F4EE] font-bold focus:outline-none"
          />
        </div>

        {/* Guests */}
        <div className="p-3 rounded-2xl bg-[#1C1917] border border-stone-800 font-mono text-xs">
          <label className="text-[10px] text-stone-400 uppercase block mb-1">GUESTS</label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-[#F7F4EE] font-bold focus:outline-none font-sans"
          >
            <option value="1 Guest" className="bg-[#1C1917]">1 VIP Guest</option>
            <option value="2 Guests" className="bg-[#1C1917]">2 Guests (Couple)</option>
            <option value="3 Guests" className="bg-[#1C1917]">3 Guests (Family)</option>
            <option value="4+ Guests" className="bg-[#1C1917]">4+ Guests / Private Pool Villa</option>
          </select>
        </div>

        {/* Rooms */}
        <div className="p-3 rounded-2xl bg-[#1C1917] border border-stone-800 font-mono text-xs">
          <label className="text-[10px] text-stone-400 uppercase block mb-1">PALACE SUITE</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full bg-transparent text-[#F7F4EE] font-bold focus:outline-none font-sans"
          >
            <option value="all" className="bg-[#1C1917]">All Suites & Beach Villas</option>
            {HOTEL_ROOMS.map((room) => (
              <option key={room.id} value={room.id} className="bg-[#1C1917]">
                {room.name} (AED {room.pricePerNightAED})
              </option>
            ))}
          </select>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#b38e47] hover:to-[#c49f2b] text-black font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 h-full min-h-[52px] hover:scale-[1.02]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Check Rates (AED)</span>
        </button>

      </form>
    </div>
  );
};
