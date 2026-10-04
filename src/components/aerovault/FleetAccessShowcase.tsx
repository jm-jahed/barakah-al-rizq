'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Users, ArrowRight, Check, X, ShieldCheck, Compass, Gauge } from 'lucide-react';
import { AEROVAULT_JETS, AerovaultJet } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface FleetAccessShowcaseProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const FleetAccessShowcase: React.FC<FleetAccessShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedJet, setSelectedJet] = useState<AerovaultJet | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const { language, t, toArabicDigits, formatPrice } = useAerovaultLanguage();

  const filteredJets = categoryFilter === 'All'
    ? AEROVAULT_JETS
    : categoryFilter === 'Light'
      ? AEROVAULT_JETS.filter(j => j.category === 'Light Jet')
      : categoryFilter === 'Midsize'
        ? AEROVAULT_JETS.filter(j => j.category === 'Super Midsize')
        : categoryFilter === 'Heavy'
          ? AEROVAULT_JETS.filter(j => j.category === 'Heavy Jet' || j.category === 'Ultra Long Range')
          : AEROVAULT_JETS.filter(j => j.category === 'VIP Corporate Airliner');

  const filters = [
    { id: 'All', label: t('fleetFilterAll') },
    { id: 'Light', label: t('fleetFilterLight') },
    { id: 'Midsize', label: t('fleetFilterMid') },
    { id: 'Heavy', label: t('fleetFilterHeavy') },
    { id: 'Airliner', label: t('fleetFilterAirliner') }
  ];

  return (
    <section id="fleet" className="py-24 bg-[#07090E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block mb-3">
              {t('fleetBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t('fleetTitle')}
            </h2>
            <p className="text-gray-300 text-base font-light mt-2 max-w-2xl">
              {t('fleetSubtitle')}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCategoryFilter(f.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  categoryFilter === f.id
                    ? 'bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] text-black shadow-lg shadow-amber-950/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Jets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJets.map((jet) => (
            <motion.div
              key={jet.id}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-[#0D1118] border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between hover:border-[#E5C378]/50 transition-all group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={jet.image}
                    alt={language === 'ar' ? jet.nameAr : jet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#E5C378] font-mono text-xs font-bold" dir="ltr">
                    {language === 'ar' ? `${toArabicDigits(jet.passengers)} ${t('fleetPax')} • ${toArabicDigits(jet.rangeKm)} كم` : `${jet.passengers} PASSENGERS • ${jet.rangeKm.toLocaleString()} KM`}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-[#E5C378] font-bold uppercase block mb-1">
                    {language === 'ar' ? jet.categoryAr : jet.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E5C378] transition-colors font-sans">
                    {language === 'ar' ? jet.nameAr : jet.name}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-[#07090E] border border-white/10 mb-5 flex items-center justify-between font-mono">
                    <div>
                      <span className="text-[10px] text-gray-400 block">{t('fleetHourlyRate')}</span>
                      <span className="text-base font-black text-[#E5C378]">
                        {formatPrice(jet.hourlyRateAED)}/{language === 'ar' ? 'س' : 'hr'}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block">{t('fleetRange')}</span>
                      <span className="text-sm font-bold text-white" dir="ltr">
                        {language === 'ar' ? `${toArabicDigits(jet.rangeKm.toLocaleString())} كم` : `${jet.rangeKm.toLocaleString()} km`}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {(language === 'ar' ? jet.amenitiesAr : jet.amenities).slice(0, 3).map((am, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#E5C378] shrink-0" />
                        <span>{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedJet(jet)}
                  className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs font-mono transition-all border border-white/15"
                >
                  {t('fleetViewSpecs')}
                </button>
                <button
                  onClick={() => onOpenQuoteModal(jet.id)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] hover:from-[#D4AF37] hover:to-[#B89222] text-black font-extrabold text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-md"
                >
                  <span>{t('fleetCharterBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Jet Detail Specs Drawer Modal */}
      <AnimatePresence>
        {selectedJet && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl w-full rounded-3xl bg-[#0D1118] p-6 sm:p-8 text-white shadow-2xl relative border border-[#E5C378]/30 font-sans max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedJet(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src={selectedJet.image}
                  alt={language === 'ar' ? selectedJet.nameAr : selectedJet.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest block mb-1">
                {language === 'ar' ? selectedJet.categoryAr : selectedJet.category}
              </span>
              <h3 className="text-2xl font-bold mb-4 font-sans">
                {language === 'ar' ? selectedJet.nameAr : selectedJet.name}
              </h3>
              
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#07090E] border border-white/10 mb-6 font-mono text-center text-xs">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">{t('fleetPax')}</span>
                  <span className="text-[#E5C378] font-bold text-sm">
                    {language === 'ar' ? `${toArabicDigits(selectedJet.passengers)} ركاب` : `${selectedJet.passengers} Pax`}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">{t('fleetSpeed')}</span>
                  <span className="text-white font-bold text-sm" dir="ltr">
                    {language === 'ar' ? `${toArabicDigits(selectedJet.specs.cruiseSpeedKm)} كم/س` : `${selectedJet.specs.cruiseSpeedKm} km/h`}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">{t('fleetLuggage')}</span>
                  <span className="text-emerald-400 font-bold text-sm">
                    {selectedJet.specs.luggageCapM3}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 mb-8 bg-[#07090E] p-5 rounded-2xl border border-white/10">
                <span className="text-xs font-mono font-bold text-[#E5C378] uppercase tracking-widest block mb-3">
                  {t('fleetAmenitiesInclusions')}
                </span>
                {(language === 'ar' ? selectedJet.amenitiesAr : selectedJet.amenities).map((am, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const j = selectedJet;
                    setSelectedJet(null);
                    onOpenQuoteModal(j.id);
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-lg hover:from-[#D4AF37] hover:to-[#B89222] transition-colors"
                >
                  {language === 'ar' ? 'طلب تسعيرة على متن هذه الطائرة' : 'REQUEST CHARTER ON THIS AIRCRAFT'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};