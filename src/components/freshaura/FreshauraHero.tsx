'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { FRESHAURA_STATS } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface FreshauraHeroProps {
  onShopProduce: () => void;
  onExploreFruitBoxes: () => void;
}

export const FreshauraHero: React.FC<FreshauraHeroProps> = ({
  onShopProduce,
  onExploreFruitBoxes,
}) => {
  const { t, isRtl, formatNumber } = useFreshauraLanguage();

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 bg-[#042F2E] overflow-hidden flex items-center">
      
      {/* Background Fresh Produce Photography Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1800&auto=format&fit=crop"
          alt="FRESHAURA Farm Fresh Fruits & Vegetables UAE"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E] via-[#042F2E]/85 to-[#042F2E]/70" />
      </div>

      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-emerald-500/10 blur-[190px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal-900/40 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#064E3B] border border-emerald-500/40 shadow-xl"
            >
              <Leaf className="w-4 h-4 text-emerald-300 shrink-0" />
              <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-[0.15em]">
                {t('heroPill')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-[#FBF9F5] tracking-tight leading-[1.05]"
            >
              {isRtl ? (
                <>
                  أجود الفواكه والخضار <br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-[#FBF9F5]">
                    طازجة من المزارع،
                  </span> <br />
                  تصلكم يومياً خلال ساعتين.
                </>
              ) : (
                <>
                  Farm-Fresh <br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-[#FBF9F5]">
                    Goodness,
                  </span> <br />
                  Delivered Daily in 2H.
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-200 max-w-xl font-light leading-relaxed font-sans"
            >
              {t('heroDesc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onShopProduce}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 hover:from-emerald-500 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-emerald-900/30 hover:scale-[1.02]"
              >
                <span>{t('heroCtaShop')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={onExploreFruitBoxes}
                className="px-7 py-4 rounded-xl bg-[#064E3B] hover:bg-emerald-900 border border-emerald-600/40 text-[#FBF9F5] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              >
                <span>{t('heroCtaBox')}</span>
              </button>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-emerald-900/80 max-w-2xl font-mono"
            >
              {FRESHAURA_STATS.map((stat) => (
                <div key={stat.labelEn} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">
                    {isRtl ? stat.valueAr : stat.valueEn}
                  </span>
                  <span className="text-[10px] text-stone-300 uppercase block font-sans">
                    {isRtl ? stat.labelAr : stat.labelEn}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-emerald-600/40 shadow-2xl bg-[#064E3B] group"
            >
              <div className="relative h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop"
                  alt="FRESHAURA Luxury Produce Selection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042F2E] via-transparent to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className={`absolute top-5 ${isRtl ? 'left-5' : 'right-5'} bg-[#042F2E]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-emerald-500/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2`}>
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-emerald-400 font-bold block">
                    {isRtl ? 'توصيل مبرد بنفس اليوم' : 'Same-Day UAE Delivery'}
                  </span>
                  <span className="text-[10px] text-stone-300">
                    {isRtl ? 'أسطول شاحنات مبردة ٤ درجات مئوية' : 'Refrigerated 4°C Cold Fleet'}
                  </span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#064E3B]/95 backdrop-blur-xl p-4 rounded-2xl border border-emerald-600/40 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-emerald-300 font-bold block">
                    {isRtl ? 'ضمان النضارة التامة ١٠٠٪' : '100% Freshness Guaranteed'}
                  </span>
                  <span className="text-[10px] text-stone-300">
                    {isRtl ? 'استبدال مجاني فوري في حال وجود أي تلف' : 'Free Instant Replacement Guarantee'}
                  </span>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#042F2E] text-emerald-400 border border-emerald-500/30 font-bold">
                  {isRtl ? 'حصاد اليوم' : 'DAILY HARVEST'}
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
