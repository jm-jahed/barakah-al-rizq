'use client';

import React, { useState } from 'react';
import { Search, Calendar, Users, Home, SlidersHorizontal, Check } from 'lucide-react';

interface EmberwildStaySearchProps {
  onSearch: (filters: {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    stayType: string;
    firepitOnly: boolean;
    hotTubOnly: boolean;
    petFriendlyOnly: boolean;
    breakfastOnly: boolean;
  }) => void;
}

export const EmberwildStaySearch: React.FC<EmberwildStaySearchProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('ALL');
  const [checkIn, setCheckIn] = useState('15 Oct 2026');
  const [checkOut, setCheckOut] = useState('17 Oct 2026');
  const [guests, setGuests] = useState(2);
  const [stayType, setStayType] = useState('ALL');
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Advanced toggles
  const [firepitOnly, setFirepitOnly] = useState(false);
  const [hotTubOnly, setHotTubOnly] = useState(false);
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);
  const [breakfastOnly, setBreakfastOnly] = useState(false);

  const handleApply = () => {
    onSearch({
      destination,
      checkIn,
      checkOut,
      guests,
      stayType,
      firepitOnly,
      hotTubOnly,
      petFriendlyOnly,
      breakfastOnly
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
      <div className="p-4 sm:p-6 rounded-3xl bg-stone-900/95 border border-stone-800 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
          {/* Destination */}
          <div>
            <label className="block text-[11px] font-mono text-amber-400/90 uppercase tracking-wider mb-1.5">
              Landscape / Region
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-3.5 py-3 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
              >
                <option value="ALL">All UAE Destinations</option>
                <option value="Mountain">Hajar Mountain Ridges</option>
                <option value="Desert">Al Marmoom & Rub Al Khali Dunes</option>
                <option value="Forest">Wadi Shawkah Ancient Forest</option>
                <option value="Lakeside">Al Qudra & Hatta Dam Lakes</option>
                <option value="Coastal">Kalba & Sir Bani Yas Coast</option>
                <option value="Valley">Wurayah UNESCO Valleys</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div>
            <label className="block text-[11px] font-mono text-amber-400/90 uppercase tracking-wider mb-1.5">
              Check-In / Out (Demo)
            </label>
            <div className="flex items-center gap-1.5 bg-stone-950 border border-stone-800 rounded-2xl px-3 py-2.5 text-xs text-stone-300">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <input
                type="text"
                value={`${checkIn} – ${checkOut}`}
                readOnly
                className="bg-transparent text-xs text-stone-300 w-full focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-[11px] font-mono text-amber-400/90 uppercase tracking-wider mb-1.5">
              Guests
            </label>
            <div className="flex items-center bg-stone-950 border border-stone-800 rounded-2xl px-3 py-2 text-xs text-stone-300 justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-6 h-6 rounded-lg bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center"
                >
                  -
                </button>
                <button
                  onClick={() => setGuests(Math.min(8, guests + 1))}
                  className="w-6 h-6 rounded-lg bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Stay Type */}
          <div>
            <label className="block text-[11px] font-mono text-amber-400/90 uppercase tracking-wider mb-1.5">
              Stay Structure
            </label>
            <select
              value={stayType}
              onChange={(e) => setStayType(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-3.5 py-3 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
            >
              <option value="ALL">All Stay Types</option>
              <option value="Glass Dome">Glass Dome</option>
              <option value="Forest Cabin">Forest Cabin</option>
              <option value="Luxury Tent">Luxury Safari Tent</option>
              <option value="Treehouse">Treehouse</option>
              <option value="Desert Camp">Desert Dune Camp</option>
              <option value="Private Villa">Private Villa</option>
              <option value="Wilderness Pod">Wilderness Pod</option>
            </select>
          </div>

          {/* Submit Search Button */}
          <div>
            <button
              onClick={handleApply}
              className="w-full py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-950/40"
            >
              <Search className="w-4 h-4" />
              <span>Find Your Stay</span>
            </button>
          </div>
        </div>

        {/* Toggle Advanced Filters Button */}
        <div className="mt-4 pt-3 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span>{showAdvanced ? 'Hide Specific Amenities' : 'Filter by Firepit, Hot Tub, Pet Friendly'}</span>
          </button>

          {showAdvanced && (
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFirepitOnly(!firepitOnly)}
                className={`px-3 py-1 rounded-xl border text-[11px] flex items-center gap-1.5 transition-all ${
                  firepitOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950 border-stone-800 text-stone-400'
                }`}
              >
                {firepitOnly && <Check className="w-3 h-3" />}
                <span>Private Firepit</span>
              </button>

              <button
                onClick={() => setHotTubOnly(!hotTubOnly)}
                className={`px-3 py-1 rounded-xl border text-[11px] flex items-center gap-1.5 transition-all ${
                  hotTubOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950 border-stone-800 text-stone-400'
                }`}
              >
                {hotTubOnly && <Check className="w-3 h-3" />}
                <span>Outdoor Hot Tub</span>
              </button>

              <button
                onClick={() => setPetFriendlyOnly(!petFriendlyOnly)}
                className={`px-3 py-1 rounded-xl border text-[11px] flex items-center gap-1.5 transition-all ${
                  petFriendlyOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950 border-stone-800 text-stone-400'
                }`}
              >
                {petFriendlyOnly && <Check className="w-3 h-3" />}
                <span>Pet Friendly</span>
              </button>

              <button
                onClick={() => setBreakfastOnly(!breakfastOnly)}
                className={`px-3 py-1 rounded-xl border text-[11px] flex items-center gap-1.5 transition-all ${
                  breakfastOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-stone-950 border-stone-800 text-stone-400'
                }`}
              >
                {breakfastOnly && <Check className="w-3 h-3" />}
                <span>Breakfast Included</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
