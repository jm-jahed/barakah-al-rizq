'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Utensils, MessageSquare } from 'lucide-react';
import { RESTAURANT_BRAND_INFO } from '@/data/restaurantData';

interface RestaurantFinalCTAProps {
  onOpenReservation: () => void;
}

export const RestaurantFinalCTA: React.FC<RestaurantFinalCTAProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-24 bg-[#07090C] border-b border-amber-500/20 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
          <Utensils className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
            Premium AED 2,499 Package Build Demonstration
          </span>
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight">
          Your Table Is Waiting.
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-serif italic">
          Experience contemporary Arabic dining, open-fire Wagyu grills, and DIFC terrace views.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm flex items-center gap-3 transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve a Table →</span>
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('menu');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm transition-all shadow-lg hover:scale-105"
          >
            Explore Menu
          </button>

          <a
            href={RESTAURANT_BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Restaurant</span>
          </a>
        </div>
      </div>
    </section>
  );
};
