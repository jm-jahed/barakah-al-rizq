'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wheat, ShieldCheck, MapPin, Award, Layers } from 'lucide-react';
import { BAKERY_INGREDIENTS, BakeryIngredient } from '@/data/flameFlourData';

export const FlameFlourIngredientLibrary: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<BakeryIngredient>(BAKERY_INGREDIENTS[0]);

  return (
    <section className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Wheat className="w-3.5 h-3.5" />
            <span>HONEST HERITAGE PROVENANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            The Ingredient Library
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            We partner exclusively with multi-generational millers, Normandy dairies, and volcanic orchards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ingredient Clickable Pills / List (Left 6 Cols) */}
          <div className="lg:col-span-6 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {BAKERY_INGREDIENTS.map((ing) => {
              const isSelected = selectedIngredient.id === ing.id;
              return (
                <div
                  key={ing.id}
                  onClick={() => setSelectedIngredient(ing)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500/40 shadow-md'
                      : 'bg-stone-900/60 border-stone-800 hover:bg-stone-850/60'
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-serif font-medium text-stone-100">{ing.name}</h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{ing.origin}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-amber-400/80 shrink-0 ml-2">
                    {ing.role.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Ingredient Detail Spotlight (Right 6 Cols) */}
          <div className="lg:col-span-6 bg-[#120f0d] p-6 sm:p-8 rounded-3xl border border-stone-800/80 shadow-2xl min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIngredient.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between border-b border-stone-850 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                      PROVENANCE SPOTLIGHT
                    </span>
                    <h3 className="text-2xl font-serif text-stone-100 mt-1">
                      {selectedIngredient.name}
                    </h3>
                  </div>
                  <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-800/40 text-2xl">
                    🌾
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2 bg-stone-900/80 p-3 rounded-xl border border-stone-800">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-stone-400 block">Origin Terroir:</span>
                      <span className="text-stone-200 font-medium">{selectedIngredient.origin}</span>
                    </div>
                  </div>

                  <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800">
                    <span className="font-mono text-stone-400 block mb-1">Culinary Role:</span>
                    <span className="text-amber-300 font-medium">{selectedIngredient.role}</span>
                  </div>

                  <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800">
                    <span className="font-mono text-stone-400 block mb-1">Flavor Notes & Aromatics:</span>
                    <span className="text-stone-200">{selectedIngredient.flavorNotes}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  {selectedIngredient.description}
                </p>

                <div>
                  <div className="text-[10px] font-mono text-stone-400 uppercase mb-1.5">Featured in Bakes:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedIngredient.usedIn.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-lg bg-stone-900 text-amber-300 text-[11px] border border-stone-800 font-serif">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
