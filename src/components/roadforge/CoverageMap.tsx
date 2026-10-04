'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const CoverageMap: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('dubai');
  const { language, t } = useRoadforgeLanguage();

  const zones = [
    {
      id: 'dubai',
      nameEn: 'Dubai & E11 Corridor',
      nameAr: 'دبي ومحور شارع الشيخ زايد E11',
      timeEn: '18 to 22 Mins',
      timeAr: '١٨ إلى ٢٢ دقيقة',
      basesEn: 'Al Quoz HQ & Downtown Patrols',
      basesAr: 'مركز القوز ودوريات وسط المدينة',
      routesEn: 'Sheikh Zayed Road (E11), Al Khail Road (E44), DXB Airport, Dubai Marina',
      routesAr: 'شارع الشيخ زايد (E11)، شارع الخيل (E44)، مطار دبي، دبي مارينا والبرشاء'
    },
    {
      id: 'abudhabi',
      nameEn: 'Abu Dhabi & Yas Island',
      nameAr: 'أبوظبي وجزيرة ياس والمصفح',
      timeEn: '22 to 25 Mins',
      timeAr: '٢٢ إلى ٢٥ دقيقة',
      basesEn: 'Mussafah M-10 Base & E11 Border Unit',
      basesAr: 'قاعدة مصفح M-10 ووحدة حدود دبي-أبوظبي',
      routesEn: 'E11 Sheikh Maktoum Hwy, Yas Island, Saadiyat, Abu Dhabi Corniche',
      routesAr: 'طريق الشيخ مكتوم بن راشد (E11)، جزيرة ياس، السعديات، وكورنيش العاصمة'
    },
    {
      id: 'sharjah',
      nameEn: 'Sharjah & Northern Highways',
      nameAr: 'الشارقة والمحاور الشمالية',
      timeEn: '20 to 24 Mins',
      timeAr: '٢٠ إلى ٢٤ دقيقة',
      basesEn: 'Sharjah Industrial Area 6 Base',
      basesAr: 'مركز المنطقة الصناعية ٦ بالشارقة',
      routesEn: 'E311 MBZ Road, E611 Emirates Road, University City, Ajman Border',
      routesAr: 'شارع الشيخ محمد بن زايد (E311)، شارع الإمارات (E611)، والمدينة الجامعية'
    }
  ];

  const current = zones.find(z => z.id === selectedZone) || zones[0];

  return (
    <section id="coverage" className="py-24 bg-[#162032] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('coverageBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('coverageTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {t('coverageSubtitle')}
          </p>
        </div>

        {/* Interactive Zone Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {zones.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setSelectedZone(z.id)}
              className={`px-6 py-3 rounded-2xl font-mono text-xs font-bold transition-all whitespace-nowrap ${
                selectedZone === z.id
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-950/50 scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
              }`}
            >
              {language === 'ar' ? z.nameAr : z.nameEn}
            </button>
          ))}
        </div>

        {/* Visual Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B132B] p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
          
          {/* Left Spec Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-xl font-black text-white font-mono">
                {language === 'ar' ? current.nameAr : current.nameEn}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">{language === 'ar' ? 'متوسط وقت الاستجابة:' : 'AVERAGE RESPONSE TIME:'}</span>
                <span className="text-emerald-400 font-bold">{language === 'ar' ? current.timeAr : current.timeEn}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400">{language === 'ar' ? 'نقاط التمركز:' : 'DISPATCH UNITS:'}</span>
                <span className="text-amber-300 font-bold">{language === 'ar' ? current.basesAr : current.basesEn}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase block">
                {language === 'ar' ? 'أبرز المحاور والطرق المغطاة' : 'PRIMARY COVERED HIGHWAYS'}
              </span>
              <p className="text-sm text-gray-300 font-light leading-relaxed bg-[#162032] p-4 rounded-xl border border-white/10">
                {language === 'ar' ? current.routesAr : current.routesEn}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'ar' ? 'تتبع فوري لمسار السطحة عبر نظام GPS' : '24/7 Live GPS Dispatch Tracking Available'}</span>
            </div>
          </div>

          {/* Right Map Image Visualization */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-white/15">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              alt="UAE Highway Corridor Recovery Patrol Map"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>
                  {language === 'ar' ? 'دوريات وسطحات متمركزة على مدار الساعة' : 'Patrol Units En-Route (Dubai • Abu Dhabi • Sharjah)'}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {language === 'ar' ? 'دوريات نشطة' : 'ACTIVE PATROLS'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};