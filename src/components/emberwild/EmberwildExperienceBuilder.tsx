'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plus, Check, Flame, ShoppingBag, ArrowRight } from 'lucide-react';
import { EXPERIENCE_ADDONS, ExperienceAddon } from '@/data/emberwildData';

interface EmberwildExperienceBuilderProps {
  onAddExperienceToBag?: (addon: ExperienceAddon) => void;
  onBookFullEscape?: (totalAED: number, selectedAddons: ExperienceAddon[]) => void;
}

export const EmberwildExperienceBuilder: React.FC<EmberwildExperienceBuilderProps> = ({
  onAddExperienceToBag,
  onBookFullEscape
}) => {
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['add-campfire', 'add-stargaze']);
  const [stayNights, setStayNights] = useState<number>(2);

  const baseStayRateAED = 1650; // Ember Ridge Dome base rate
  const stayTotal = baseStayRateAED * stayNights;

  const toggleAddon = (id: string) => {
    setSelectedAddonIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedAddons = EXPERIENCE_ADDONS.filter(a => selectedAddonIds.includes(a.id));
  const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.priceAED, 0);
  const grandTotal = stayTotal + addonsTotal;

  return (
    <section className="py-24 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              BESPOKE TRIP CUSTOMIZER
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
              Build Your <span className="font-serif italic text-amber-400">Escape.</span>
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Select optional wilderness experiences to customize your base retreat. Watch your itinerary and pricing calculate in real time.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
            DEMO PRICING · ALL VALUES IN AED
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Add-ons selection list */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-2">
              Available Wilderness Add-Ons:
            </div>

            <div className="grid grid-cols-1 gap-3">
              {EXPERIENCE_ADDONS.map((addon) => {
                const isSelected = selectedAddonIds.includes(addon.id);
                return (
                  <motion.div
                    key={addon.id}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-stone-900 border-amber-500/80 shadow-lg shadow-amber-950/20'
                        : 'bg-stone-950/80 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'bg-amber-500 text-stone-950' : 'bg-stone-900 text-stone-400'
                      }`}>
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-stone-100">{addon.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-amber-400 border border-stone-800">
                            {addon.category}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">{addon.description}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 flex items-center gap-3">
                      <div>
                        <div className="text-sm font-mono font-medium text-amber-400">
                          + AED {addon.priceAED}
                        </div>
                        <div className="text-[10px] text-stone-500 font-mono">{addon.duration}</div>
                      </div>

                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected ? 'bg-amber-500 border-amber-500 text-stone-950 font-bold' : 'border-stone-800 bg-stone-900 text-stone-500'
                      }`}>
                        {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Real-Time Price & Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/90 border border-stone-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div>
                  <h3 className="text-xl font-light text-stone-100">Your Custom Escape</h3>
                  <p className="text-xs text-stone-400 font-mono">Ember Ridge Dome (Selected Base)</p>
                </div>
                <div className="flex items-center gap-1 bg-stone-950 border border-stone-800 px-3 py-1.5 rounded-xl text-xs">
                  <span className="text-stone-400">Duration:</span>
                  <button
                    onClick={() => setStayNights(Math.max(1, stayNights - 1))}
                    className="w-5 h-5 bg-stone-900 text-stone-300 rounded hover:text-white"
                  >
                    -
                  </button>
                  <span className="font-mono text-amber-400 font-bold px-1">{stayNights} Nights</span>
                  <button
                    onClick={() => setStayNights(stayNights + 1)}
                    className="w-5 h-5 bg-stone-900 text-stone-300 rounded hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-stone-300">
                  <span>Base Stay ({stayNights} Nights @ AED {baseStayRateAED}/nt)</span>
                  <span className="font-mono text-white">AED {stayTotal.toLocaleString()}</span>
                </div>

                <div className="text-stone-400 pt-2 border-t border-stone-800/80">
                  <div className="text-[11px] font-mono uppercase text-amber-400/90 mb-2">
                    Selected Experiences ({selectedAddons.length}):
                  </div>
                  {selectedAddons.length === 0 ? (
                    <div className="text-stone-500 italic text-xs">No add-ons selected yet.</div>
                  ) : (
                    <div className="space-y-1.5">
                      {selectedAddons.map(addon => (
                        <div key={addon.id} className="flex justify-between text-stone-300 text-xs">
                          <span>+ {addon.name}</span>
                          <span className="font-mono text-amber-300">AED {addon.priceAED}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-stone-400 pt-2 border-t border-stone-800/80">
                  <span>Wilderness Conservation Fee (Demo)</span>
                  <span className="font-mono text-emerald-400">Included</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-mono text-stone-500">Estimated Total</div>
                  <div className="text-2xl sm:text-3xl font-mono font-medium text-amber-400">
                    AED {grandTotal.toLocaleString()}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                  DEMO PRICING
                </span>
              </div>

              {/* Action */}
              <button
                onClick={() => onBookFullEscape && onBookFullEscape(grandTotal, selectedAddons)}
                className="w-full py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-950/40"
              >
                <span>Add Customized Escape to Trip Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
