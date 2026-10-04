'use client';

import React from 'react';
import { ShieldCheck, Award, Building2, DollarSign, CheckCircle2, Users } from 'lucide-react';
import { SKYVAULT_BADGES } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const TrustStrip: React.FC = () => {
  const { lang, isRtl } = useSkyvaultLanguage();

  return (
    <div className="bg-[#05060A] border-y border-white/5 py-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {SKYVAULT_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#0D1118] border border-white/5 flex flex-col items-center justify-center text-center space-y-1 hover:border-[#E5C378]/30 transition-colors group"
            >
              <ShieldCheck className="w-4 h-4 text-[#E5C378] group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                {lang === 'ar' ? badge.nameAr : badge.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {lang === 'ar' ? badge.badgeAr : badge.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};