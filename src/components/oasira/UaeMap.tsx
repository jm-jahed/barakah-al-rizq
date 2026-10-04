'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Palmtree } from 'lucide-react';

export const UaeMap: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState('Dubai');

  const markers = [
    { name: 'Dubai', timeFromDxb: '0m', startingPrice: 'AED 1,250', resort: 'Azure Palm Resort', desc: 'Palm Jumeirah & luxury private beaches.' },
    { name: 'Abu Dhabi', timeFromDxb: '1h 20m', startingPrice: 'AED 1,150', resort: 'Pearl Bay Resort', desc: 'Saadiyat Island natural lagoons & culture.' },
    { name: 'Ras Al Khaimah', timeFromDxb: '1h 15m', startingPrice: 'AED 890', resort: 'Dune Mirage Retreat', desc: 'Desert dunes & Jebel Jais mountain pools.' },
    { name: 'Fujairah', timeFromDxb: '1h 40m', startingPrice: 'AED 780', resort: 'Cove Fujairah', desc: 'Indian Ocean coral reefs & diving.' },
    { name: 'Al Ain', timeFromDxb: '1h 30m', startingPrice: 'AED 620', resort: 'Wadi Escape', desc: 'Date palm oases & thermal springs.' },
    { name: 'Umm Al Quwain', timeFromDxb: '45m', startingPrice: 'AED 690', resort: 'Lagoona Retreat', desc: 'Overwater chalets & flamingo mangroves.' },
  ];

  const current = markers.find((m) => m.name === activeMarker) || markers[0];

  return (
    <section className="py-24 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              UAE ESCAPE MAP
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] leading-tight">
              Explore the 7 Emirates.
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              Click any emirate marker to view travel times from Dubai, starting rates, and flagship resort highlights.
            </p>

            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              {markers.map((m) => (
                <button
                  key={m.name}
                  onClick={() => setActiveMarker(m.name)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    activeMarker === m.name ? 'bg-[#0F382C] border-[#D4B382] text-white font-bold' : 'bg-[#0F382C]/50 border-stone-800 text-stone-400'
                  }`}
                >
                  <span className="font-serif">{m.name}</span>
                  <span className="text-[10px] text-[#D4B382]">{m.timeFromDxb}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0F382C] rounded-3xl border border-stone-700 p-8 sm:p-10 shadow-2xl relative space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4B382]" />
                  <h3 className="text-2xl font-serif font-bold text-white">{current.name} Emirate</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0A2920] text-[#D4B382] font-mono text-xs font-bold border border-[#D4B382]/30">
                  {current.startingPrice} / night
                </span>
              </div>

              <p className="text-sm text-stone-300 font-light leading-relaxed font-sans">{current.desc}</p>

              <div className="p-4 rounded-2xl bg-[#0A2920] border border-stone-800 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-stone-400 text-[10px] uppercase block">FLAGSHIP RESORT</span>
                  <span className="text-[#D4B382] font-bold text-sm">{current.resort}</span>
                </div>
                <div className="text-right">
                  <span className="text-stone-400 text-[10px] uppercase block">DRIVE TIME FROM DUBAI</span>
                  <span className="text-white font-bold">{current.timeFromDxb}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
