'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { CRISPO_LOCATIONS, CrispoLocation } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface RestaurantLocatorProps {
  onStartOrderFromLocation: (locName: string) => void;
}

export const RestaurantLocator: React.FC<RestaurantLocatorProps> = ({ onStartOrderFromLocation }) => {
  const { t, isRtl, translateLocation, toArabicDigits } = useCrispoLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = CRISPO_LOCATIONS.filter((loc) => {
    const trans = translateLocation(loc);
    const q = searchTerm.toLowerCase();
    return (
      loc.name.toLowerCase().includes(q) ||
      loc.address.toLowerCase().includes(q) ||
      trans.name.toLowerCase().includes(q) ||
      trans.address.toLowerCase().includes(q)
    );
  });

  return (
    <section id="locations" className="py-24 bg-[#1A1715] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
              {isRtl ? 'دليل ومواقع فروع دبي' : 'DUBAI RESTAURANT FINDER'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans mt-4">
              {isRtl ? 'اختر أقرب فرع كريسبو إليك.' : 'FIND YOUR CRISPO.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {t('branchesSubtitle')}
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[280px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isRtl ? 'ابحث عن المنطقة، الفرع أو الشارع...' : 'Search area, city or postcode...'}
              className="w-full p-3.5 rounded-2xl bg-[#12100E] border border-stone-800 text-white font-mono text-xs focus:outline-none focus:border-[#E63946]"
            />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredLocations.map((rawLoc) => {
            const loc = translateLocation(rawLoc);

            return (
              <div
                key={rawLoc.id}
                className="p-6 rounded-3xl bg-[#12100E] border border-stone-800 space-y-4 font-mono text-xs hover:border-[#FFC107]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                      ● {loc.closingTime}
                    </span>
                    <span className="text-stone-400 text-[10px]">
                      {isRtl ? `على بعد ${loc.distanceKm}` : `${loc.distanceKm} away`}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white font-sans mb-1">{loc.name}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed font-sans">{loc.address}</p>

                  <div className="pt-4 border-t border-stone-800 space-y-1.5 text-[11px] text-stone-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#FFC107]" />
                      <span>{isRtl ? `وقت التوصيل التقديري: ${loc.deliveryTimeMins}` : `Est. Delivery: ${loc.deliveryTimeMins}`}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FFC107]" />
                      <span>{isRtl ? toArabicDigits(rawLoc.phone) : rawLoc.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex items-center gap-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 text-center font-sans font-bold"
                  >
                    {isRtl ? 'الاتجاهات والخريطة' : 'Directions'}
                  </a>
                  <button
                    onClick={() => onStartOrderFromLocation(rawLoc.name)}
                    className="flex-1 py-2.5 rounded-xl bg-[#E63946] hover:bg-[#FF4757] text-white text-center font-sans font-black uppercase flex items-center justify-center gap-1"
                  >
                    <span>{t('orderFromHere')}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
