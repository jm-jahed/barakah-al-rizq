'use client';

import React, { useState } from 'react';
import { Award, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EscapeBuilderProps {
  onOpenBookingWithCustomEscape: (totalPrice: number, summaryText: string) => void;
}

export const EscapeBuilder: React.FC<EscapeBuilderProps> = ({ onOpenBookingWithCustomEscape }) => {
  const [dest, setDest] = useState('Dubai');
  const [resort, setResort] = useState({ name: 'Azure Palm Resort & Beach Club', price: 1250 });
  const [room, setRoom] = useState({ name: 'Ocean Sunset Suite (2 Nights)', price: 3700 });
  const [exp, setExp] = useState({ name: 'Private Sunset Yacht Charter', price: 1450 });
  const [extra, setExtra] = useState({ name: 'Mercedes S-Class Airport Transfer', price: 350 });

  const resortsList = [
    { name: 'Azure Palm Resort (Dubai)', price: 1250 },
    { name: 'Dune Mirage Retreat (RAK)', price: 890 },
    { name: 'Pearl Bay Resort (Abu Dhabi)', price: 1150 },
    { name: 'Cove Fujairah (Fujairah)', price: 780 },
  ];

  const roomsList = [
    { name: 'Deluxe Sea View (2 Nights)', price: 2500 },
    { name: 'Ocean Sunset Suite (2 Nights)', price: 3700 },
    { name: 'Private Pool Villa (2 Nights)', price: 6400 },
  ];

  const expList = [
    { name: 'Private Sunset Yacht Charter', price: 1450 },
    { name: 'VIP Desert Safari & Dinner', price: 590 },
    { name: 'Fujairah Coral Diving', price: 420 },
    { name: 'None', price: 0 },
  ];

  const extrasList = [
    { name: 'Mercedes S-Class Airport Transfer', price: 350 },
    { name: 'Private Hammam & Spa Treatment', price: 550 },
    { name: 'Late 4 PM Guaranteed Checkout', price: 200 },
    { name: 'None', price: 0 },
  ];

  const total = resort.price + room.price + exp.price + extra.price;
  const summaryText = `${resort.name} • ${room.name} + ${exp.name} + ${extra.name}`;

  return (
    <section className="py-24 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
            INTERACTIVE TRIP ARCHITECT
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] mt-4">
            BUILD YOUR UAE ESCAPE.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Customize your resort, room category, private experiences, and VIP transfers for a tailored staycation package.
          </p>
        </div>

        {/* 4 Step Builder Container */}
        <div className="bg-[#0F382C] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Step 1: Resort */}
            <div>
              <label className="text-xs font-bold text-[#D4B382] uppercase block mb-3">STEP 01 — SELECT RESORT</label>
              <div className="space-y-2">
                {resortsList.map((r) => (
                  <div
                    key={r.name}
                    onClick={() => setResort(r)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      resort.name === r.name ? 'bg-[#0A2920] border-[#D4B382] text-white font-bold' : 'bg-[#0A2920]/50 border-stone-800 text-stone-400'
                    }`}
                  >
                    <span className="font-serif">{r.name}</span>
                    <span className="text-[#D4B382]">AED {r.price}/n</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Room */}
            <div>
              <label className="text-xs font-bold text-[#D4B382] uppercase block mb-3">STEP 02 — SELECT ROOM & NIGHTS</label>
              <div className="space-y-2">
                {roomsList.map((rm) => (
                  <div
                    key={rm.name}
                    onClick={() => setRoom(rm)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      room.name === rm.name ? 'bg-[#0A2920] border-[#D4B382] text-white font-bold' : 'bg-[#0A2920]/50 border-stone-800 text-stone-400'
                    }`}
                  >
                    <span className="font-serif">{rm.name}</span>
                    <span className="text-[#D4B382]">AED {rm.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Experience */}
            <div>
              <label className="text-xs font-bold text-[#D4B382] uppercase block mb-3">STEP 03 — SELECT EXPERIENCE</label>
              <div className="space-y-2">
                {expList.map((e) => (
                  <div
                    key={e.name}
                    onClick={() => setExp(e)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      exp.name === e.name ? 'bg-[#0A2920] border-[#D4B382] text-white font-bold' : 'bg-[#0A2920]/50 border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{e.name}</span>
                    <span className="text-[#D4B382]">{e.price > 0 ? `AED ${e.price}` : 'None'}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Extras */}
            <div>
              <label className="text-xs font-bold text-[#D4B382] uppercase block mb-3">STEP 04 — SELECT VIP EXTRAS</label>
              <div className="space-y-2">
                {extrasList.map((ex) => (
                  <div
                    key={ex.name}
                    onClick={() => setExtra(ex)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      extra.name === ex.name ? 'bg-[#0A2920] border-[#D4B382] text-white font-bold' : 'bg-[#0A2920]/50 border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{ex.name}</span>
                    <span className="text-[#D4B382]">{ex.price > 0 ? `AED ${ex.price}` : 'None'}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Live Order Summary Box */}
          <div className="p-6 rounded-2xl bg-[#0A2920] border border-[#D4B382]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[#D4B382] font-bold block uppercase text-[10px]">YOUR CUSTOM UAE ESCAPE SUMMARY</span>
              <p className="text-white font-serif font-bold text-sm leading-snug">
                {resort.name} • {room.name} {exp.name !== 'None' ? `+ ${exp.name}` : ''} {extra.name !== 'None' ? `+ ${extra.name}` : ''}
              </p>
            </div>

            <button
              onClick={() => onOpenBookingWithCustomEscape(total, summaryText)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#D4B382] via-[#C59B63] to-[#D4AF37] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book My Escape • AED {total}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
