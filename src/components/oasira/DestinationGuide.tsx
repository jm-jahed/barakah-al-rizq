'use client';

import React, { useState } from 'react';
import { MapPin, Compass, Clock, Tag } from 'lucide-react';

export const DestinationGuide: React.FC = () => {
  const [selectedEmirate, setSelectedEmirate] = useState('Dubai');

  const destinationsData: Record<string, { desc: string; priceRange: string; bestTime: string; length: string; highlights: string[]; image: string }> = {
    'Dubai': {
      desc: 'Iconic beachfront luxury resorts on Palm Jumeirah, private butler penthouses, and world-class culinary dining.',
      priceRange: 'AED 1,250 – AED 5,800 / night',
      bestTime: 'October – April',
      length: '2 to 3 Nights',
      highlights: ['Palm Jumeirah Beach Access', 'Michelin Culinary Scene', 'Private Yacht Docking'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'
    },
    'Abu Dhabi': {
      desc: 'Cultural islands, natural turquoise lagoons on Saadiyat, turtle nesting beaches, and serene palatial retreats.',
      priceRange: 'AED 1,150 – AED 4,200 / night',
      bestTime: 'November – March',
      length: '2 to 4 Nights',
      highlights: ['Saadiyat Island Turquoise Beach', 'Louvre Abu Dhabi Proximity', 'Golf & Marine Reserves'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop'
    },
    'Ras Al Khaimah': {
      desc: 'Dramatic red desert sand dunes, tented pool villas in Al Wadi, and high-altitude mountain pools on Jebel Jais.',
      priceRange: 'AED 890 – AED 3,200 / night',
      bestTime: 'September – May',
      length: '2 Nights',
      highlights: ['Desert Dune Tented Villas', 'Jebel Jais Cloud Infinity Pool', 'Falconry & Stargazing'],
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop'
    },
    'Fujairah': {
      desc: 'Where the Hajar Mountains plummet into the Indian Ocean. Coral reef snorkeling, scuba diving, and quiet oceanfront bays.',
      priceRange: 'AED 780 – AED 2,400 / night',
      bestTime: 'Year-Round Coastal Breeze',
      length: '3 Nights',
      highlights: ['PADI Coral Reef Diving', 'Indian Ocean Sunset Views', 'Mountain Backdrop Kayaking'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    },
    'Al Ain': {
      desc: 'The historic garden city with date-palm falaj oases, thermal mineral springs under Jebel Hafeet, and heritage lodges.',
      priceRange: 'AED 620 – AED 1,800 / night',
      bestTime: 'October – April',
      length: '2 Nights',
      highlights: ['Unesco Oasis Date Gardens', 'Jebel Hafeet Mineral Springs', 'Heritage Fort Lodges'],
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop'
    },
    'Umm Al Quwain': {
      desc: 'Quiet waterfront chalets hovering over natural mangrove channels, flamingo birdwatching, and peaceful kayak trails.',
      priceRange: 'AED 690 – AED 1,900 / night',
      bestTime: 'October – May',
      length: '2 Nights',
      highlights: ['Overwater Mangrove Chalets', 'Flamingo Sanctuary', 'Quiet Paddleboarding'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
    }
  };

  const current = destinationsData[selectedEmirate] || destinationsData['Dubai'];

  return (
    <section id="destinations" className="py-24 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
            EMIRATES TRAVEL DESTINATIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-4">
            7 Emirates. Endless Escapes.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select an emirate to explore tailored staycation guidelines, price benchmarks, and highlights.
          </p>
        </div>

        {/* Emirate Selector Buttons */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {Object.keys(destinationsData).map((em) => (
            <button
              key={em}
              onClick={() => setSelectedEmirate(em)}
              className={`px-5 py-3 rounded-2xl font-bold transition-all border ${
                selectedEmirate === em
                  ? 'bg-[#D4B382] text-black border-[#D4B382] shadow-lg'
                  : 'bg-[#0F382C] text-stone-300 border-stone-800 hover:text-white'
              }`}
            >
              {em}
            </button>
          ))}
        </div>

        {/* Selected Emirate Card */}
        <div className="bg-[#0F382C] rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 font-sans">
            <div>
              <span className="text-xs font-mono text-[#D4B382] uppercase font-bold">EMIRATE DESTINATION GUIDE</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF6EE] mt-1">{selectedEmirate}</h3>
            </div>

            <p className="text-sm text-stone-300 font-light leading-relaxed">{current.desc}</p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="p-3.5 rounded-xl bg-[#0A2920] border border-stone-800">
                <span className="text-stone-400 text-[10px] uppercase block">TYPICAL RATES</span>
                <span className="text-[#D4B382] font-bold">{current.priceRange}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0A2920] border border-stone-800">
                <span className="text-stone-400 text-[10px] uppercase block">RECOMMENDED STAY</span>
                <span className="text-white font-bold">{current.length}</span>
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">DESTINATION HIGHLIGHTS:</span>
              {current.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-stone-200">
                  <span className="text-[#D4B382]">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[360px] rounded-2xl overflow-hidden border border-stone-800 shadow-xl">
            <img src={current.image} alt={selectedEmirate} className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};
