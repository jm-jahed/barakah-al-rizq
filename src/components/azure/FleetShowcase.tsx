'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Users, ArrowRight, Check, X, Compass, Star } from 'lucide-react';
import { AZURE_YACHTS, AzureYacht } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface FleetShowcaseProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onOpenBookingModal }) => {
  const [selectedYacht, setSelectedYacht] = useState<AzureYacht | null>(null);
  const [sizeFilter, setSizeFilter] = useState('All');
  const { language, t, toArabicDigits, formatPrice } = useAzureLanguage();

  const filteredYachts = sizeFilter === 'All'
    ? AZURE_YACHTS
    : sizeFilter === 'Small'
      ? AZURE_YACHTS.filter(y => y.lengthFt <= 55)
      : sizeFilter === 'Medium'
        ? AZURE_YACHTS.filter(y => y.lengthFt > 55 && y.lengthFt <= 85)
        : AZURE_YACHTS.filter(y => y.lengthFt > 85);

  const filters = [
    { id: 'All', label: t('fleetFilterAll') },
    { id: 'Small', label: t('fleetFilterSmall') },
    { id: 'Medium', label: t('fleetFilterMedium') },
    { id: 'Superyacht', label: t('fleetFilterSuper') }
  ];

  return (
    <section id="fleet" className="py-24 bg-[#06101E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block mb-3">
              {t('fleetBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t('fleetTitle')}
            </h2>
            <p className="text-gray-300 text-base font-light mt-2 max-w-2xl">
              {t('fleetSubtitle')}
            </p>
          </div>

          {/* Size Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSizeFilter(f.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  sizeFilter === f.id
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-950/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Yachts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredYachts.map((yacht) => (
            <motion.div
              key={yacht.id}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#0B1A2F] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/50 transition-all group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={yacht.image}
                    alt={language === 'ar' ? yacht.nameAr : yacht.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-xs font-bold" dir="ltr">
                    {language === 'ar' ? `${toArabicDigits(yacht.lengthFt)} ${t('fleetFt')} • ${toArabicDigits(yacht.guestCapacity)} ${t('fleetGuests')}` : `${yacht.lengthFt} FT • ${yacht.guestCapacity} GUESTS`}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase block mb-1">
                    {language === 'ar' ? yacht.occasionTypeAr : yacht.occasionType}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors font-sans">
                    {language === 'ar' ? yacht.nameAr : yacht.name}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-[#06101E] border border-white/10 mb-5 flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[10px] text-gray-400 block">{t('fleetHourlyRate')}</span>
                      <span className="text-base font-black text-amber-400">
                        {formatPrice(yacht.hourlyRateAED)}/{language === 'ar' ? 'س' : 'hr'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block">{t('fleetFullDay')}</span>
                      <span className="text-sm font-bold text-white">
                        {formatPrice(yacht.dailyRateAED)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {(language === 'ar' ? yacht.amenitiesAr : yacht.amenities).slice(0, 3).map((am, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedYacht(yacht)}
                  className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono transition-all border border-white/15"
                >
                  {t('fleetViewSpecs')}
                </button>
                <button
                  onClick={() => onOpenBookingModal(yacht.id)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-md"
                >
                  <span>{t('fleetCharterBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Yacht Detail Specs Drawer Modal */}
      <AnimatePresence>
        {selectedYacht && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-[#0B1A2F] p-6 sm:p-8 text-white shadow-2xl relative border border-amber-500/30 font-sans max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedYacht(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src={selectedYacht.image}
                  alt={language === 'ar' ? selectedYacht.nameAr : selectedYacht.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {language === 'ar' ? `${toArabicDigits(selectedYacht.lengthFt)} قدم سوبر يخت فاخر` : `${selectedYacht.lengthFt} FT LUXURY YACHT`}
              </span>
              <h3 className="text-2xl font-bold mb-4 font-sans">
                {language === 'ar' ? selectedYacht.nameAr : selectedYacht.name}
              </h3>
              
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#06101E] border border-white/10 mb-6 font-mono text-center text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">{t('fleetCapacity')}</span>
                  <span className="text-amber-400 font-bold text-sm">
                    {language === 'ar' ? `${toArabicDigits(selectedYacht.guestCapacity)} ضيوف` : `${selectedYacht.guestCapacity} Guests`}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">{t('fleetCabins')}</span>
                  <span className="text-white font-bold text-sm">
                    {language === 'ar' ? `${toArabicDigits(selectedYacht.cabins)} غرف رئيسية` : `${selectedYacht.cabins} Master`}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">{t('fleetMaxSpeed')}</span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {language === 'ar' ? selectedYacht.specs.speedKnotsAr : selectedYacht.specs.speedKnots}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 mb-8 bg-[#06101E] p-5 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest block mb-3">
                  {t('fleetAmenitiesInclusions')}
                </span>
                {(language === 'ar' ? selectedYacht.amenitiesAr : selectedYacht.amenities).map((am, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const y = selectedYacht;
                    setSelectedYacht(null);
                    onOpenBookingModal(y.id);
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-lg hover:from-amber-400 hover:to-amber-300 transition-colors"
                >
                  {t('fleetBookThisYacht')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};