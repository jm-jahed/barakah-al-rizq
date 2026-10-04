'use client';

import React from 'react';
import { Building2, ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { AURELIA_BRAND } from '@/data/aureliaData';

export const AureliaFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-[#06080A] text-gray-400 text-xs font-mono border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-stone-400 via-stone-600 to-stone-900 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(214,211,209,0.2)]">
              <div className="w-full h-full bg-[#090C0E] rounded-[10px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-stone-300" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                AURELIA <span className="text-stone-400">ESTATES</span> DUBAI
              </span>
              <span className="block text-[10px] text-stone-400 tracking-widest uppercase">
                {AURELIA_BRAND.tagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 hover:bg-stone-200 hover:text-black text-gray-300 transition-all cursor-pointer flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">TOP OF GALLERY</span>
            </button>
          </div>
        </div>

        {/* 4 Column Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">DIFC Gate Village Gallery</h4>
            <p className="text-gray-400 leading-relaxed">
              {AURELIA_BRAND.difcHQ.address}
            </p>
            <p className="text-stone-300">{AURELIA_BRAND.difcHQ.hours}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Abu Dhabi ADGM Office</h4>
            <p className="text-gray-400 leading-relaxed">
              {AURELIA_BRAND.abuDhabiDesk.address}
            </p>
            <p className="text-stone-300">{AURELIA_BRAND.abuDhabiDesk.phone}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Private Client Desks</h4>
            <p className="text-white font-bold">Toll Free: {AURELIA_BRAND.difcHQ.tollFree}</p>
            <p className="text-emerald-400 font-bold">WhatsApp: {AURELIA_BRAND.whatsapp}</p>
            <p className="text-gray-300">{AURELIA_BRAND.difcHQ.email}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold font-serif text-white uppercase">Regulatory & Licensing</h4>
            <div className="space-y-1.5 text-[11px]">
              <p className="text-gray-300">✓ RERA Master Developer #8812</p>
              <p className="text-gray-300">✓ DLD Escrow Account Governed</p>
              <p className="text-gray-300">✓ 10-Year Golden Visa Authorized</p>
              <p className="text-gray-300">✓ DIFC Registered Entity #7704</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[11px] text-gray-500">
          <p>© 2026 {AURELIA_BRAND.legalName}. ALL RIGHTS RESERVED.</p>
          <p>100% UAE MARKET LOCALIZED • ALL VALUATIONS IN AED</p>
        </div>

      </div>
    </footer>
  );
};
