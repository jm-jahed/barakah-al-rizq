'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PressoraSignatureStory: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900/60 text-white border-t border-neutral-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-4">
          CRAFT & PRECISION
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-8">
          Before it becomes a product, <br />
          <span className="font-serif italic text-amber-400">it is an obsession with detail.</span>
        </h2>
        <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          <p>
            In a digital-first world, physical touch is the ultimate brand statement. The weight of 450gsm pure cotton, the crisp snap of an embossed monogram, the precise registration of double-sided gold foil.
          </p>
          <p className="text-neutral-400">
            PRESSORA was built to remove friction between creative vision and physical manufacturing. No guesswork, no color shifts, no delayed deliveries across the Emirates. Just absolute consistency at every impression.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-xs font-mono text-neutral-400">
          <div>
            <div className="text-xl text-white font-medium">100%</div>
            <div>UAE Production</div>
          </div>
          <div className="w-px h-8 bg-neutral-800" />
          <div>
            <div className="text-xl text-white font-medium">FSC®</div>
            <div>Sustainable Paper</div>
          </div>
          <div className="w-px h-8 bg-neutral-800" />
          <div>
            <div className="text-xl text-white font-medium">24h</div>
            <div>Express Turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
};
