'use client';

import React from 'react';
import { MapPin, Phone, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';
import { SKYVAULT_BASES } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const OperationalBases: React.FC = () => {
  const { lang, isRtl, t } = useSkyvaultLanguage();

  return (
    <section id="bases" className="py-24 bg-[#07090E] text-white border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('bases.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('bases.title')}
          </h2>
          <p className="text-slate-400 text-base font-light">
            {t('bases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKYVAULT_BASES.map((b) => (
            <div
              key={b.city}
              className="p-8 rounded-3xl bg-[#0D1118] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#E5C378] font-mono">
                    {lang === 'ar' ? b.cityAr : b.city}
                  </span>
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-[#E5C378] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-mono">
                  {lang === 'ar' ? b.baseAr : b.base}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  {lang === 'ar' ? b.descriptionAr : b.description}
                </p>
                
                <div className="text-xs text-slate-300 font-mono space-y-2 bg-[#11161F] p-4 rounded-2xl border border-white/10">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E5C378] shrink-0" />
                    <span>{lang === 'ar' ? b.addressAr : b.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{lang === 'ar' ? b.camAr : b.cam}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap items-center justify-between font-mono text-xs font-bold text-white gap-4">
                <span className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-[#E5C378]" />
                  {b.phone}
                </span>
                <a
                  href={`tel:${b.phone.replace(/\s+/g, '')}`}
                  className="px-4 py-2 rounded-xl bg-[#E5C378] text-black font-extrabold hover:bg-[#d4af37] transition-colors"
                >
                  {t('bases.call')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};