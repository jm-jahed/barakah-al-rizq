'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Compass, Droplets } from 'lucide-react';
import { PERFUME_BRAND_INFO } from '@/data/perfumeData';

export const PerfumeHouse: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              CRAFTSMANSHIP & HERITAGE
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif leading-tight">
              The House of Maison De L'Ambre.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed font-serif italic">
              "Fusing centuries-old Arabian agarwood distillation with classic French haute parfumerie extraction techniques."
            </p>

            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Founded on the principle of uncompromised luxury, every bottle is filled with high-concentration Extraits containing rare 30-year aged Cambodian oud, Grasse rose absolute, and wild Iranian saffron.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono text-gray-300">
              <div className="p-4 rounded-2xl bg-[#10141C] border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold block text-sm">100% PURE OUD</span>
                <span className="text-gray-400 text-[10px]">Aged 30-Year Cambodian Agarwood</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#10141C] border border-white/10 space-y-1">
                <span className="text-amber-400 font-bold block text-sm">25-35% EXTRAIT</span>
                <span className="text-gray-400 text-[10px]">Maximum Olfactory Longevity</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-amber-400/80 pt-2">
              Concept Brand Story — Sample Build #11 • Demonstrating Agency E-Commerce Design
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-4 rounded-3xl bg-[#10141C] border border-amber-500/30 overflow-hidden shadow-2xl relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop"
                  alt="House Craftsmanship"
                  className="w-full h-full object-cover filter brightness-85 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-mono text-amber-300 font-bold bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                  {PERFUME_BRAND_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
