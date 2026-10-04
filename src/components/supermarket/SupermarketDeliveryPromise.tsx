'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { ShieldCheck, Truck, Tag, PhoneCall } from 'lucide-react';

export default function SupermarketDeliveryPromise() {
  const { lang, isRtl, t } = useSupermarketLanguage();

  const pillars = [
    {
      icon: ShieldCheck,
      title: t('trust1Title'),
      desc: t('trust1Desc'),
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      icon: Truck,
      title: t('trust2Title'),
      desc: t('trust2Desc'),
      color: 'text-teal-500 bg-teal-500/10'
    },
    {
      icon: Tag,
      title: t('trust3Title'),
      desc: t('trust3Desc'),
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      icon: PhoneCall,
      title: t('trust4Title'),
      desc: t('trust4Desc'),
      color: 'text-rose-500 bg-rose-500/10'
    },
  ];

  return (
    <section className="py-10 px-4 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
