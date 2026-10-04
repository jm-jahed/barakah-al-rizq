'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Plus, ArrowRight } from 'lucide-react';
import { PERFUME_PRODUCTS, PerfumeProduct } from '@/data/perfumeData';

export const LayeringStudio: React.FC = () => {
  const [baseId, setBaseId] = useState<string>('midnight-oud');
  const [accentId, setAccentId] = useState<string>('rose-elan');

  const baseProduct = PERFUME_PRODUCTS.find((p) => p.id === baseId) || PERFUME_PRODUCTS[0];
  const accentProduct = PERFUME_PRODUCTS.find((p) => p.id === accentId) || PERFUME_PRODUCTS[2];

  return (
    <section id="layering" className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            THE ART OF OLFACTORY HARMONY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Fragrance Layering Studio.
          </h2>
          <p className="text-base text-gray-400">
            Combine a rich resinous base Extrait with a floral or fresh accent EDP to create your unique bespoke aura.
          </p>
        </div>

        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* 1. Base Fragrance Selector */}
            <div className="md:col-span-5 space-y-3 p-5 rounded-2xl bg-[#161D27] border border-white/10">
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold block">
                01. CHOOSE BASE SCENT (Resinous / Woody)
              </span>

              <select
                value={baseId}
                onChange={(e) => setBaseId(e.target.value)}
                className="w-full bg-[#0E131A] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
              >
                {PERFUME_PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.fragranceFamily})
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-3 pt-2">
                <img src={baseProduct.image} alt={baseProduct.name} className="w-14 h-16 rounded-xl object-cover bg-black" />
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{baseProduct.name}</h4>
                  <span className="text-[10px] font-mono text-gray-400 block">{baseProduct.baseNotes.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Plus Symbol */}
            <div className="md:col-span-2 text-center flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold flex items-center justify-center">
                +
              </div>
            </div>

            {/* 2. Accent Fragrance Selector */}
            <div className="md:col-span-5 space-y-3 p-5 rounded-2xl bg-[#161D27] border border-white/10">
              <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">
                02. CHOOSE ACCENT SCENT (Floral / Fresh)
              </span>

              <select
                value={accentId}
                onChange={(e) => setAccentId(e.target.value)}
                className="w-full bg-[#0E131A] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
              >
                {PERFUME_PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.fragranceFamily})
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-3 pt-2">
                <img src={accentProduct.image} alt={accentProduct.name} className="w-14 h-16 rounded-xl object-cover bg-black" />
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{accentProduct.name}</h4>
                  <span className="text-[10px] font-mono text-gray-400 block">{accentProduct.topNotes.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Layered Outcome Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-[#161D27] to-amber-500/15 border border-amber-500/40 text-center space-y-3 shadow-xl">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
              RESULTING BESPOKE OLFACTORY FACET
            </span>

            <h3 className="text-2xl font-extrabold text-white font-serif">
              {baseProduct.name.split(' ')[0]} & {accentProduct.name.split(' ')[0]} Accord
            </h3>

            <p className="text-xs text-gray-300 max-w-lg mx-auto leading-relaxed">
              Creates a luxurious dual-phase projection. {baseProduct.name}'s deep base of {baseProduct.baseNotes[0]} anchors {accentProduct.name}'s sparkling top notes of {accentProduct.topNotes[0]}.
            </p>

            <div className="text-[10px] font-mono text-amber-300 font-bold border border-amber-500/30 px-3 py-1 rounded-full inline-block">
              Concept Layering Tool — Olfactory Simulation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
