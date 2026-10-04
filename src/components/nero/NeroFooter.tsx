'use client';

import React from 'react';
import { Anchor, ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { NERO_BRAND } from '@/data/neroData';

export const NeroFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-[#02050A] text-gray-400 text-xs font-mono border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-[#04080F] rounded-[10px] flex items-center justify-center">
                <Anchor className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                NERO <span className="text-cyan-400">MARINE</span> DUBAI
              </span>
              <span className="block text-[10px] text-cyan-300 tracking-widest uppercase">
                Sovereign Marine & Superyacht Luxury
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black text-gray-300 transition-all cursor-pointer flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">TOP OF MARINA</span>
            </button>
          </div>
        </div>

        {/* 4 Column Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Dubai Harbour HQ</h4>
            <p className="text-gray-400 leading-relaxed">
              {NERO_BRAND.dubaiMarinaHQ.address}
            </p>
            <p className="text-cyan-300">VHF Radio: {NERO_BRAND.dubaiMarinaHQ.vhfChannel}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Abu Dhabi Yas Marina</h4>
            <p className="text-gray-400 leading-relaxed">
              {NERO_BRAND.abuDhabiMarina.address}
            </p>
            <p className="text-cyan-300">VHF Radio: {NERO_BRAND.abuDhabiMarina.vhfChannel}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Direct Marine Hotlines</h4>
            <p className="text-white font-bold">Toll Free: {NERO_BRAND.dubaiMarinaHQ.tollFree}</p>
            <p className="text-emerald-400 font-bold">WhatsApp: {NERO_BRAND.whatsapp}</p>
            <p className="text-gray-300">{NERO_BRAND.dubaiMarinaHQ.email}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Licensing & Regulatory</h4>
            <div className="space-y-1.5 text-[11px]">
              <p className="text-gray-300">✓ DMCA License #9041</p>
              <p className="text-gray-300">✓ MYBA Member #80912</p>
              <p className="text-gray-300">✓ UAE FTA Maritime Approved</p>
              <p className="text-gray-300">✓ Lloyds Register +100A1</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[11px] text-gray-500">
          <p>© 2026 {NERO_BRAND.legalName}. ALL RIGHTS RESERVED.</p>
          <p>100% UAE MARKET LOCALIZED • ALL RATES IN AED</p>
        </div>

      </div>
    </footer>
  );
};
