'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const EmberwildStory: React.FC = () => {
  return (
    <section className="py-28 bg-[#0a0d0a] text-stone-100 border-t border-stone-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-4">
          THE EMBERWILD ESSENCE
        </div>

        <h2 className="text-3xl sm:text-6xl font-light tracking-tight text-stone-100 mb-10 leading-tight">
          A Place Outside <br />
          <span className="font-serif italic text-amber-400">the Routine.</span>
        </h2>

        <div className="space-y-6 text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          <p>
            There are places where the signal disappears. <br />
            The road gets quieter. <br />
            The sky gets bigger. <br />
            The fire burns slower.
          </p>
          <p className="text-stone-400 text-sm sm:text-base">
            EMBERWILD is designed for those moments — when leaving the ordinary behind becomes the destination itself. Experience untamed nature paired with uncompromised comfort.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-8 text-xs font-mono text-stone-400">
          <div>
            <div className="text-2xl text-stone-100 font-light font-mono">24</div>
            <div className="mt-1">Wilderness Stays</div>
          </div>
          <div className="w-px h-8 bg-stone-800" />
          <div>
            <div className="text-2xl text-stone-100 font-light font-mono">1,400m</div>
            <div className="mt-1">Peak Altitude</div>
          </div>
          <div className="w-px h-8 bg-stone-800" />
          <div>
            <div className="text-2xl text-stone-100 font-light font-mono">100%</div>
            <div className="mt-1">Off-Grid Solar</div>
          </div>
        </div>
      </div>
    </section>
  );
};
