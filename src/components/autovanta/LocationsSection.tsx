'use client';

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { AUTOVANTA_LOCATIONS } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const LocationsSection: React.FC = () => {
  const { language, t } = useAutovantaLanguage();

  return (
    <section id="locations" className="py-24 bg-[#0F1012] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('locationsBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('locationsTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {t('locationsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUTOVANTA_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="p-8 rounded-3xl bg-[#181A1D] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#FF5722] font-mono">
                    {language === 'ar' && loc.cityAr ? loc.cityAr : loc.city}
                  </span>
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 font-mono">
                  {language === 'ar' && loc.areaAr ? loc.areaAr : loc.area}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light mb-6">
                  {language === 'ar' && loc.descriptionAr ? loc.descriptionAr : loc.description}
                </p>
                
                <div className="text-xs text-gray-300 font-mono space-y-2 bg-[#121315] p-4 rounded-2xl border border-white/10">
                  <p className="flex items-start gap-2">
                    <span className="shrink-0">📍</span>
                    <span>{language === 'ar' && loc.addressAr ? loc.addressAr : loc.address}</span>
                  </p>
                  <p className="flex items-start gap-2 text-amber-300">
                    <span className="shrink-0">🕒</span>
                    <span>{language === 'ar' && loc.hoursAr ? loc.hoursAr : loc.hours}</span>
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-xs font-bold text-white">
                <span dir="ltr">{loc.phone}</span>
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  className="text-[#FF5722] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'اتصال بالورشة' : 'CALL SERVICE DESK'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};