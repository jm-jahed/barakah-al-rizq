'use client';

import React, { useState } from 'react';
import { Calculator, ShieldCheck } from 'lucide-react';

export const PriceCalculator: React.FC = () => {
  const [nights, setNights] = useState(3);
  const [roomPricePerNight, setRoomPricePerNight] = useState(1250);
  const [needTransfer, setNeedTransfer] = useState(true);
  const [needSpa, setNeedSpa] = useState(true);

  const roomSubtotal = nights * roomPricePerNight;
  const transferCost = needTransfer ? 350 : 0;
  const spaCost = needSpa ? 550 : 0;
  const subtotal = roomSubtotal + transferCost + spaCost;

  const vatTax = Math.round(subtotal * 0.05);
  const serviceFee = Math.round(subtotal * 0.10);
  const tourismFee = nights * 20; // AED 20 per night Tourism Dirham fee
  const total = subtotal + vatTax + serviceFee + tourismFee;

  return (
    <section className="py-20 bg-[#0A2920] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0F382C] rounded-3xl border border-stone-700 p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-[#FAF6EE]">
              <Calculator className="w-5 h-5 text-[#D4B382]" />
              <span>Transparent UAE Stay Price Calculator</span>
            </div>
            <span className="text-[10px] font-mono text-[#D4B382] uppercase bg-[#0A2920] px-3 py-1 rounded-full border border-[#D4B382]/30">
              AED REAL-TIME BREAKDOWN
            </span>
          </div>

          {/* Input Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">NUMBER OF NIGHTS</label>
              <select
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white font-bold"
              >
                <option value={1}>1 Night</option>
                <option value={2}>2 Nights</option>
                <option value={3}>3 Nights</option>
                <option value={5}>5 Nights</option>
                <option value={7}>7 Nights</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">ROOM CATEGORY</label>
              <select
                value={roomPricePerNight}
                onChange={(e) => setRoomPricePerNight(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-[#0A2920] border border-stone-800 text-white font-bold"
              >
                <option value={890}>Dune Mirage Villa (AED 890/n)</option>
                <option value={1250}>Deluxe Sea View (AED 1,250/n)</option>
                <option value={1850}>Ocean Sunset Suite (AED 1,850/n)</option>
                <option value={3200}>Private Pool Villa (AED 3,200/n)</option>
              </select>
            </div>

            <div className="space-y-2 pt-2">
              <div
                onClick={() => setNeedTransfer(!needTransfer)}
                className={`p-2.5 rounded-xl border cursor-pointer flex justify-between ${needTransfer ? 'bg-[#0A2920] border-[#D4B382] text-white' : 'bg-[#0A2920]/40 border-stone-800 text-stone-500'}`}
              >
                <span>Airport Transfer</span>
                <span className="text-[#D4B382]">+ AED 350</span>
              </div>
              <div
                onClick={() => setNeedSpa(!needSpa)}
                className={`p-2.5 rounded-xl border cursor-pointer flex justify-between ${needSpa ? 'bg-[#0A2920] border-[#D4B382] text-white' : 'bg-[#0A2920]/40 border-stone-800 text-stone-500'}`}
              >
                <span>Spa Treatment</span>
                <span className="text-[#D4B382]">+ AED 550</span>
              </div>
            </div>
          </div>

          {/* Breakdown Output Box */}
          <div className="p-6 rounded-2xl bg-[#0A2920] border border-stone-800 space-y-2 font-mono text-xs">
            <div className="flex justify-between text-stone-300">
              <span>Room Rate ({nights} Nights x AED {roomPricePerNight}):</span>
              <span>AED {roomSubtotal}</span>
            </div>
            {needTransfer && (
              <div className="flex justify-between text-stone-400">
                <span>Mercedes Airport Transfer:</span>
                <span>AED {transferCost}</span>
              </div>
            )}
            {needSpa && (
              <div className="flex justify-between text-stone-400">
                <span>Wellness Spa Treatment:</span>
                <span>AED {spaCost}</span>
              </div>
            )}
            <div className="flex justify-between text-stone-400">
              <span>UAE VAT (5%):</span>
              <span>AED {vatTax}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Resort Service Charge (10%):</span>
              <span>AED {serviceFee}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Tourism Dirham Fee (AED 20/night):</span>
              <span>AED {tourismFee}</span>
            </div>

            <div className="flex justify-between text-white font-bold text-base pt-2 border-t border-stone-800">
              <span>TOTAL ESTIMATED STAY PRICE:</span>
              <span className="text-[#D4B382]">AED {total}</span>
            </div>
          </div>

          <p className="text-[10px] font-mono text-stone-400 text-center">
            ✦ Final price confirmed before payment. No hidden resort fees.
          </p>

        </div>

      </div>
    </section>
  );
};
