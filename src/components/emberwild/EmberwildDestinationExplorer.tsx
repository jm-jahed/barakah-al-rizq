'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, Wind, Mountain, Sun } from 'lucide-react';
import { EMBERWILD_DESTINATIONS } from '@/data/emberwildData';

export const EmberwildDestinationExplorer: React.FC<{ onSelectDestination?: (destType: string) => void }> = ({
  onSelectDestination
}) => {
  const [activeDestId, setActiveDestId] = useState(EMBERWILD_DESTINATIONS[0].id);

  const activeDest = EMBERWILD_DESTINATIONS.find(d => d.id === activeDestId) || EMBERWILD_DESTINATIONS[0];

  return (
    <section className="py-24 bg-[#080c08] text-stone-100 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              BIOSPHERES OF THE EMIRATES
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
              Destination <span className="font-serif italic text-amber-400">Explorer</span>
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl leading-relaxed">
              From craggy alpine peaks at 1,400 meters to secluded desert oases and mangrove waterways.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {EMBERWILD_DESTINATIONS.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setActiveDestId(dest.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeDestId === dest.id
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                {dest.title}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Editorial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-900/60 rounded-3xl border border-stone-800/80 p-6 sm:p-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20">
                {activeDest.title}
              </span>
              <span className="text-stone-400 text-xs font-mono">{activeDest.staysCount}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-light text-stone-100">
              {activeDest.tagline}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              {activeDest.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800/80">
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800/80">
                <div className="text-stone-500 text-xs font-mono uppercase mb-1">Average Temp</div>
                <div className="text-2xl font-mono text-white font-medium">{activeDest.avgTemp}</div>
                <div className="text-[11px] text-emerald-400 mt-1">Prime Season (Oct–Apr)</div>
              </div>
              <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800/80">
                <div className="text-stone-500 text-xs font-mono uppercase mb-1">Elevation</div>
                <div className="text-2xl font-mono text-amber-400 font-medium">{activeDest.elevation}</div>
                <div className="text-[11px] text-stone-400 mt-1">Above Sea Level</div>
              </div>
            </div>

            <button
              onClick={() => onSelectDestination && onSelectDestination(activeDest.type)}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center gap-2 transition-all shadow-lg shadow-amber-950/40"
            >
              <span>Explore {activeDest.title} Stays</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
              >
                <img
                  src={activeDest.image}
                  alt={activeDest.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-stone-200">
                  <span className="font-mono text-amber-300">Protected UAE Wilderness Preserve</span>
                  <span className="font-mono text-stone-400">Zero Light Pollution Verified</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
