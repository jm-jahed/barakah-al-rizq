'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2, MessageSquare, Calendar } from 'lucide-react';
import { RESTAURANT_BRAND_INFO } from '@/data/restaurantData';

interface PrivateDiningProps {
  onOpenReservation: () => void;
}

export const PrivateDining: React.FC<PrivateDiningProps> = ({ onOpenReservation }) => {
  const features = [
    "Exclusive Royal Majlis Suite seating up to 24 guests",
    "Private dedicated waiter & sommelier service",
    "Bespoke 5-course tailored menu created by Chef Omar",
    "Custom floral arrangements & personalized place cards",
    "Private audio-visual system for corporate presentations",
    "Valet entrance dispatch directly at DIFC Building 03"
  ];

  return (
    <section id="privatedining" className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              EXCLUSIVE SUITES & CORPORATE EVENTS
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif leading-tight">
              Royal Majlis Private Dining.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed font-serif italic">
              "Designed for intimate family celebrations, high-level corporate dinners, engagements, and private brand launches in DIFC."
            </p>

            <div className="space-y-2.5 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#10141C] border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block font-bold">MINIMUM SPEND PACKAGE</span>
                <div className="text-2xl font-extrabold text-amber-400 font-mono">From AED 1,500</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenReservation}
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg"
                >
                  Inquire Private Majlis →
                </button>
              </div>
            </div>

            <div className="text-[10px] font-mono text-amber-400/80">
              Concept Private Dining — Sample Package #12
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 rounded-3xl bg-[#10141C] border border-amber-500/30 overflow-hidden shadow-2xl relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Royal Majlis Private Suite"
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-mono text-amber-300 font-bold bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                  Capacity: Up to 24 Guests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
