'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NOURA_COLLECTIONS_INFO } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface CollectionShowcaseProps {
  onSelectCollection: (colName: string) => void;
}

export const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({ onSelectCollection }) => {
  const { isRtl, t, translateCollection } = useNouraLanguage();

  return (
    <section id="collections" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.15em] px-3 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
              {isRtl ? 'تشكيلات الهوت كوتور الحصرية' : 'EXPLORE OUR HAUTE COUTURE LINE'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              {t('collectionsTitle')}
            </h2>
            <p className="text-base text-stone-300 font-normal mt-2 max-w-xl">
              {t('collectionsSubtitle')}
            </p>
          </div>
        </div>

        {/* 4 Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NOURA_COLLECTIONS_INFO.map((col) => (
            <motion.div
              key={col.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => onSelectCollection(col.name)}
              className="bg-[#121212] rounded-3xl border border-stone-800 overflow-hidden shadow-xl hover:border-[#C5A059] transition-all cursor-pointer flex flex-col justify-between group font-sans"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={col.image}
                    alt={translateCollection(col.name)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 rtl:right-4 rtl:left-auto px-3 py-1 rounded-full bg-[#0A0A0A]/90 text-[#C5A059] border border-[#C5A059]/40 font-mono text-[10px] font-bold tracking-widest backdrop-blur-md">
                    {isRtl ? 'إصدار فاخر' : 'COUTURE EDIT'}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#FAFAFA] group-hover:text-[#C5A059] transition-colors">
                    {translateCollection(col.name)}
                  </h3>
                  <p className="text-xs text-stone-400 font-normal leading-relaxed line-clamp-2">
                    {isRtl 
                      ? (col.id === 'eid-collection' ? 'فساتين وقفاطين العيد الفاخرة بتطريزات الزري الذهبي وأساور الكريستال.' :
                         col.id === 'new-arrivals' ? 'أحدث إصدارات الموسم بحرير النيدو الياباني وأكمام الأورجانزا والتطريز الإماراتي.' :
                         col.id === 'signature-abayas' ? 'قصات النيدو الأسود الأيقونية مع لمسات الشك اليدوي والانسيابية الملكية.' :
                         'قفاطين حريرية انسيابية وعبايات سهرة مخصصة لتجمعات الشهر الفضيل والعيد.')
                      : col.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 font-mono text-xs text-[#C5A059] font-bold flex items-center justify-between">
                <span>{t('viewCollection')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
