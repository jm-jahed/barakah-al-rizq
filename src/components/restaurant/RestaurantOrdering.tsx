'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Utensils, Clock, CheckCircle2 } from 'lucide-react';

interface RestaurantOrderingProps {
  onOpenMenu: () => void;
}

export const RestaurantOrdering: React.FC<RestaurantOrderingProps> = ({ onOpenMenu }) => {
  return (
    <section className="py-20 bg-[#080B0F] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              DUBAI EXPRESS DELIVERY & CURBSIDE PICKUP
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Order Al-Majlis Online.
            </h3>
            <p className="text-xs text-gray-300 max-w-xl">
              Enjoy freshly prepared 24K Gold Wagyu Kebabs, Truffle Hummus, and Pistachio Kunafa delivered hot to your door in DIFC, Downtown, and Marina.
            </p>
          </div>

          <button
            onClick={onOpenMenu}
            className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 shrink-0"
          >
            <ShoppingBag className="w-4 h-4" /> Start Online Order →
          </button>
        </div>
      </div>
    </section>
  );
};
