'use client';

import React from 'react';
import { MessageSquare, Compass, Crown } from 'lucide-react';
import { PERFUME_BRAND_INFO } from '@/data/perfumeData';

interface PerfumeConciergeProps {
  onOpenFinder: () => void;
}

export const PerfumeConcierge: React.FC<PerfumeConciergeProps> = ({ onOpenFinder }) => {
  return (
    <section className="py-20 bg-[#0A0D12] border-b border-amber-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
          PERSONAL OLFACTORY CONSULTATION
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
          Need Help Choosing Your Scent?
        </h2>

        <p className="text-base text-gray-300 max-w-xl mx-auto font-serif italic">
          "Speak directly with our Dubai Mall fragrance concierge or take our signature olfactory matching wizard."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={PERFUME_BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Fragrance Concierge
          </a>

          <button
            onClick={onOpenFinder}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20"
          >
            Launch Fragrance Finder →
          </button>
        </div>
      </div>
    </section>
  );
};
