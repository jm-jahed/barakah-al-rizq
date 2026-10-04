'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Users, BedDouble, ArrowRight, Eye, Check, X } from 'lucide-react';
import { STAYORA_PROPERTIES, StayoraProperty } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface PropertiesShowcaseProps {
  onOpenEstimateModal: () => void;
}

export const PropertiesShowcase: React.FC<PropertiesShowcaseProps> = ({ onOpenEstimateModal }) => {
  const { t, isRtl, formatPrice, formatPercent, formatNumber } = useStayoraLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<StayoraProperty | null>(null);

  const filters = [
    { id: 'all', labelEn: 'All Properties', labelAr: 'كافة العقارات' },
    { id: 'Dubai', labelEn: 'Dubai', labelAr: 'دبي' },
    { id: 'Abu Dhabi', labelEn: 'Abu Dhabi', labelAr: 'أبوظبي' },
    { id: 'Ras Al Khaimah', labelEn: 'Ras Al Khaimah', labelAr: 'رأس الخيمة' },
  ];

  const filteredProperties = activeFilter === 'all'
    ? STAYORA_PROPERTIES
    : STAYORA_PROPERTIES.filter(p => p.emirate === activeFilter);

  return (
    <section id="properties" className="py-24 bg-[#0E2E30] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-amber-200 font-mono text-xs font-bold uppercase tracking-widest inline-block mb-3">
              {t('propertiesBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {t('propertiesTitle')}
            </h2>
            <p className="text-gray-300 text-base font-light mt-2 max-w-2xl">
              {t('propertiesSubtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#C85A32] text-white shadow-lg shadow-[#C85A32]/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/10'
                }`}
              >
                {isRtl ? f.labelAr : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((prop) => {
              const title = isRtl ? prop.titleAr : prop.title;
              const community = isRtl ? prop.communityAr : prop.community;
              const emirate = isRtl ? prop.emirateAr : prop.emirate;
              const bedrooms = isRtl ? prop.bedroomsAr : prop.bedrooms;
              const features = isRtl ? prop.featuresAr : prop.features;

              return (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl bg-[#133C3E] border border-amber-500/20 overflow-hidden shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/40 cursor-pointer" onClick={() => setSelectedProperty(prop)}>
                      <img
                        src={prop.image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#133C3E] via-transparent to-transparent opacity-80" />

                      <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'}`}>
                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-xs font-bold">
                          {community} ({emirate})
                        </span>
                      </div>

                      <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'}`}>
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 font-mono text-xs font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                          <span>{formatNumber(prop.rating)} ({formatNumber(prop.reviewsCount)})</span>
                        </span>
                      </div>
                    </div>

                    {/* Info Body */}
                    <div className="p-6">
                      <h3
                        onClick={() => setSelectedProperty(prop)}
                        className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-[#E07A5F] transition-colors cursor-pointer"
                      >
                        {title}
                      </h3>

                      <div className="flex items-center gap-4 text-xs font-mono text-gray-300 mb-4">
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-3.5 h-3.5 text-[#E07A5F] shrink-0" />
                          <span>{bedrooms}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#E07A5F] shrink-0" />
                          <span>{isRtl ? `يتسع لـ ${formatNumber(prop.guests)} ضيوف` : `Up to ${prop.guests} Guests`}</span>
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-white/10 mb-4">
                        {features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Nightly Rate & Action */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/10 font-mono">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase block">
                        {isRtl ? 'متوسط سعر الليلة' : 'AVG NIGHTLY RATE'}
                      </span>
                      <span className="text-lg font-black text-amber-300">
                        {formatPrice(prop.avgNightlyRateAED)}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#C85A32] text-white font-bold text-xs transition-all flex items-center gap-1.5"
                    >
                      <span>{isRtl ? 'عرض العقار' : 'VIEW LISTING'}</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="max-w-xl w-full rounded-3xl bg-[#133C3E] border border-amber-500/30 p-6 text-white relative shadow-2xl font-sans">
            <button
              onClick={() => setSelectedProperty(null)}
              className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} p-2 rounded-full bg-white/10 hover:bg-white/20 text-white`}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5">
              <img
                src={selectedProperty.image}
                alt={isRtl ? selectedProperty.titleAr : selectedProperty.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold mb-1">
              {isRtl ? selectedProperty.titleAr : selectedProperty.title}
            </h3>
            <p className="text-xs font-mono text-amber-300 mb-4">
              {isRtl ? selectedProperty.communityAr : selectedProperty.community}, {isRtl ? selectedProperty.emirateAr : selectedProperty.emirate} • {isRtl ? selectedProperty.bedroomsAr : selectedProperty.bedrooms}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/30 border border-white/10 mb-6 font-mono">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">
                  {isRtl ? 'سعر الليلة' : 'NIGHTLY RATE'}
                </span>
                <span className="text-lg font-bold text-white">
                  {formatPrice(selectedProperty.avgNightlyRateAED)}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block uppercase">
                  {isRtl ? 'متوسط نسبة الإشغال' : 'AVG OCCUPANCY'}
                </span>
                <span className="text-lg font-bold text-emerald-400">
                  {formatPercent(selectedProperty.occupancyRate)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedProperty(null);
                onOpenEstimateModal();
              }}
              className="w-full py-3.5 rounded-xl bg-[#C85A32] text-white font-bold text-xs font-mono uppercase tracking-wider shadow-xl hover:bg-[#b04b28] transition-colors"
            >
              {isRtl ? 'احسب أرباح عقار مماثل لعقارك' : 'GET SIMILAR PROPERTY INCOME ESTIMATE'}
            </button>
          </div>
        </div>
      )}

    </section>
  );
};