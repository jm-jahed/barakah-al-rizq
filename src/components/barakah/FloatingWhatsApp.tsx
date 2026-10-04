'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={BARAKAH_BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 transition-all hover:scale-105 border border-emerald-400 font-mono text-xs font-bold"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <span className="hidden sm:inline tracking-wider font-extrabold pr-1">
          CHAT WITH SALES
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-emerald-800 animate-ping" />
      </a>
    </div>
  );
};