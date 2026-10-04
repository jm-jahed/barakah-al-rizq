'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square, Package, ShieldCheck, Compass } from 'lucide-react';
import { PACKING_DATABASE } from '@/data/emberwildData';

export const EmberwildPackingGuide: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'Mountain' | 'Desert' | 'Lakeside'>('Mountain');
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const toggleCheck = (name: string) => {
    setCheckedItems(prev =>
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const getRegionItems = () => {
    if (selectedRegion === 'Desert') return PACKING_DATABASE.desertAddons;
    if (selectedRegion === 'Lakeside') return PACKING_DATABASE.waterAddons;
    return PACKING_DATABASE.mountainAddons;
  };

  const currentRegionItems = getRegionItems();

  return (
    <section className="py-20 bg-[#0a0d0a] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              SMART GEAR & APPAREL ADVISOR
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-100">
              Pack Light. <span className="font-serif italic text-amber-400">Prepare Well.</span>
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Curated gear recommendations tailored to UAE mountain altitudes, deep desert sands, and water excursions.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-stone-900 border border-stone-800 p-1.5 rounded-2xl text-xs">
            {(['Mountain', 'Desert', 'Lakeside'] as const).map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  selectedRegion === reg
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {reg} Essentials
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Universal Essentials */}
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-xs font-mono uppercase text-amber-400">Universal Wilderness Gear</span>
              <span className="text-xs text-stone-500 font-mono">6 Core Items</span>
            </div>

            <div className="space-y-3">
              {PACKING_DATABASE.essentials.map((item) => {
                const isChecked = checkedItems.includes(item.name);
                return (
                  <div
                    key={item.name}
                    onClick={() => toggleCheck(item.name)}
                    className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-start gap-3 cursor-pointer hover:border-stone-700 transition-colors"
                  >
                    <div className="mt-0.5 text-amber-400">
                      {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-stone-600" />}
                    </div>
                    <div>
                      <div className={`text-xs font-medium ${isChecked ? 'line-through text-stone-500' : 'text-stone-200'}`}>
                        {item.name}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">{item.reason}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Region Specific */}
          <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-xs font-mono uppercase text-amber-400">{selectedRegion} Specific Additions</span>
              <span className="text-xs text-stone-500 font-mono">Custom Pack</span>
            </div>

            <div className="space-y-3">
              {currentRegionItems.map((item) => {
                const isChecked = checkedItems.includes(item.name);
                return (
                  <div
                    key={item.name}
                    onClick={() => toggleCheck(item.name)}
                    className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800/80 flex items-start gap-3 cursor-pointer hover:border-stone-700 transition-colors"
                  >
                    <div className="mt-0.5 text-amber-400">
                      {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-stone-600" />}
                    </div>
                    <div>
                      <div className={`text-xs font-medium ${isChecked ? 'line-through text-stone-500' : 'text-stone-200'}`}>
                        {item.name}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">{item.reason}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-300 font-light mt-6">
              💡 <strong>EMBERWILD Provisioning:</strong> All retreats include organic body washes, fresh mountain towels, chemex coffee beans, and solar lantern sets.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
