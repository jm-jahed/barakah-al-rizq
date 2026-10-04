'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { AZURE_LOCATIONS } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

export const MarinaLocations: React.FC = () => {
  const { language, t } = useAzureLanguage();

  return (
    <section id="marinas" className="py-24 bg-[#06101E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('marinasBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('marinasTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light max-w-2xl mx-auto">
            {t('marinasSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AZURE_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="p-8 rounded-3xl bg-[#0B1A2F] border border-white/10 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    {language === 'ar' ? loc.cityAr : loc.city}
                  </span>
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-mono">
                  {language === 'ar' ? loc.marinaAr : loc.marina}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                  {language === 'ar' ? loc.descriptionAr : loc.description}
                </p>
                
                <div className="text-xs text-gray-300 font-mono space-y-2 bg-[#06101E] p-4 rounded-2xl border border-white/10">
                  <p className="flex items-start gap-2">
                    <span className="text-amber-400">📍</span>
                    <span>{t('marinaAddress')} {language === 'ar' ? loc.addressAr : loc.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-amber-300">
                    <span>🕒</span>
                    <span>{t('marinaHours')} {language === 'ar' ? loc.hoursAr : loc.hours}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-xs font-bold text-white">
                <span dir="ltr">{loc.phone}</span>
                <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-amber-400 hover:underline">
                  {language === 'ar' ? 'اتصل بمرسى اليخوت' : 'CALL MARINA DESK'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};