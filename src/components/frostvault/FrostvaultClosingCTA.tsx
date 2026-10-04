'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ArrowRight } from 'lucide-react';

interface FrostvaultClosingCTAProps {
  onRequestStorage: () => void;
  onExploreOperations: () => void;
}

export const FrostvaultClosingCTA: React.FC<FrostvaultClosingCTAProps> = ({
  onRequestStorage,
  onExploreOperations,
}) => {
  return (
    <section className="py-24 bg-[#070b0e] text-[#f1f5f9] px-4 sm:px-6 lg:px-8 border-t border-[#132334]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-[#0c1d2e] via-[#091522] to-[#060a0f] border border-[#1b3a5c] p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs tracking-[0.4em] uppercase text-[#38bdf8] font-mono block">
              COLD CHAIN, REIMAGINED
            </span>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#f8fafc]">
              Protect What Matters.
            </h2>

            <p className="text-base sm:text-lg text-[#94a3b8] font-light leading-relaxed max-w-2xl mx-auto">
              Design smarter storage, sharper operations, and a cold chain built for what comes next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onRequestStorage}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(14,165,233,0.35)] cursor-pointer font-mono"
              >
                <span>Request Storage Capacity</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreOperations}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0a1420] hover:bg-[#102030] text-[#cbd5e1] border border-[#172f48] text-xs font-mono font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                Explore Operations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
