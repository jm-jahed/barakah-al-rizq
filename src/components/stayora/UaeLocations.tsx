'use client';

import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { STAYORA_LOCATIONS } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const UaeLocations: React.FC = () => {
  const { language, t } = useStayoraLanguage();

  return (
    <section id="locations" className="py-24 bg-[#F9F6F0] text-[#133C3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('locationsBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#133C3E]">
            {t('locationsTitle')}
          </h2>
          <p className="text-gray-700 text-base font-normal">
            {t('locationsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAYORA_LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="p-8 rounded-3xl bg-white border border-amber-900/10 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#C85A32] font-mono">
                    {language === 'ar' && loc.cityAr ? loc.cityAr : loc.city}
                  </span>
                  <MapPin className="w-5 h-5 text-[#133C3E]" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 font-mono">
                  {language === 'ar' && loc.areaAr ? loc.areaAr : loc.area}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal mb-6">
                  {language === 'ar' && loc.descriptionAr ? loc.descriptionAr : loc.description}
                </p>
                <div className="text-xs text-gray-700 font-mono space-y-1 bg-[#F9F6F0] p-3 rounded-xl">
                  <p>📍 {language === 'ar' && loc.addressAr ? loc.addressAr : loc.address}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between font-mono text-xs font-bold text-[#133C3E]">
                <span dir="ltr">{loc.phone}</span>
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  className="text-[#C85A32] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'اتصال بالمكتب' : 'CALL DESK'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};