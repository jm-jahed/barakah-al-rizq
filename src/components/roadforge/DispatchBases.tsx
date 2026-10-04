'use client';

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { ROADFORGE_BASES } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const DispatchBases: React.FC = () => {
  const { language, t } = useRoadforgeLanguage();

  return (
    <section id="bases" className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('basesBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('basesTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {language === 'ar'
              ? 'مراكز عمليات وغرف تحكم تعمل على مدار الساعة بالقرب من شارع الشيخ زايد (E11) ومحمد بن زايد (E311) وشارع الإمارات (E611).'
              : '24/7 central dispatch hubs positioned near Sheikh Zayed Road (E11), E311, and E611 highways.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROADFORGE_BASES.map((b) => (
            <div
              key={b.city}
              className="p-8 rounded-3xl bg-[#162032] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    {language === 'ar' && b.cityAr ? b.cityAr : b.city}
                  </span>
                  <MapPin className="w-5 h-5 text-red-400 animate-pulse" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-mono">
                  {language === 'ar' && b.areaAr ? b.areaAr : b.area}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                  {language === 'ar' && b.descriptionAr ? b.descriptionAr : b.description}
                </p>
                
                <div className="text-xs text-gray-300 font-mono space-y-2 bg-[#0B132B] p-4 rounded-2xl border border-white/10">
                  <p className="flex items-start gap-2">
                    <span className="shrink-0">📍</span>
                    <span>{language === 'ar' && b.addressAr ? b.addressAr : b.address}</span>
                  </p>
                  <p className="flex items-start gap-2 text-emerald-400 font-bold">
                    <span className="shrink-0">⚡</span>
                    <span>{language === 'ar' ? `متوسط وقت الوصول: ${b.avgResponseTimeAr}` : `Avg Response: ${b.avgResponseTime}`}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-xs font-bold text-white">
                <span dir="ltr">{b.phone}</span>
                <a
                  href={`tel:${b.phone.replace(/\s+/g, '')}`}
                  className="text-amber-400 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'اتصال بالطوارئ' : 'CALL DISPATCH'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};