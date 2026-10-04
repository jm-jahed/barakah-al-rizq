'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface TableAvailabilityProps {
  onOpenReservation: () => void;
}

export const TableAvailability: React.FC<TableAvailabilityProps> = ({ onOpenReservation }) => {
  const [selectedSlot, setSelectedSlot] = useState<string>('19:30');

  const lunchSlots = [
    { time: '12:00', status: 'Available' },
    { time: '12:30', status: 'Available' },
    { time: '13:00', status: 'Limited' },
    { time: '13:30', status: 'Available' },
    { time: '14:00', status: 'Available' },
  ];

  const dinnerSlots = [
    { time: '18:00', status: 'Available' },
    { time: '18:30', status: 'Available' },
    { time: '19:00', status: 'Limited' },
    { time: '19:30', status: 'Popular' },
    { time: '20:00', status: 'Popular' },
    { time: '20:30', status: 'Available' },
    { time: '21:00', status: 'Available' },
    { time: '21:30', status: 'Available' },
  ];

  return (
    <section className="py-20 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                VISUAL DINING AVAILABILITY
              </span>
              <h3 className="text-2xl font-bold text-white font-serif">Today's Sample Table Slots</h3>
            </div>

            <span className="text-xs font-mono text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-bold">
              Sample Availability — Concept Build
            </span>
          </div>

          <div className="space-y-6">
            {/* Lunch */}
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold mb-3">
                LUNCH SERVICE (12:00 PM – 3:30 PM)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {lunchSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => {
                      setSelectedSlot(slot.time);
                      onOpenReservation();
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      selectedSlot === slot.time
                        ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg'
                        : 'bg-[#161D27] border-white/10 text-gray-200 hover:border-amber-400/40'
                    }`}
                  >
                    <div className="text-sm font-mono font-extrabold">{slot.time}</div>
                    <div className="text-[9px] font-mono opacity-80 mt-0.5">{slot.status}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dinner */}
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block font-bold mb-3">
                DINNER SERVICE (6:00 PM – 11:30 PM)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {dinnerSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => {
                      setSelectedSlot(slot.time);
                      onOpenReservation();
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      selectedSlot === slot.time
                        ? 'bg-amber-500 text-black border-amber-400 font-bold shadow-lg'
                        : 'bg-[#161D27] border-white/10 text-gray-200 hover:border-amber-400/40'
                    }`}
                  >
                    <div className="text-sm font-mono font-extrabold">{slot.time}</div>
                    <div className="text-[9px] font-mono opacity-80 mt-0.5">{slot.status}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
            >
              Reserve Selected Slot ({selectedSlot}) →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
