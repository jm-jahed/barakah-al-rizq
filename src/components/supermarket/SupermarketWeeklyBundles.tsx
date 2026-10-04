'use client';

import React, { useState } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { WEEKLY_BUNDLES, WeeklyBundle } from '../../data/supermarketData';
import { Package, Plus, Check, CheckCircle2 } from 'lucide-react';

export default function SupermarketWeeklyBundles() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { addToCart, setIsCartOpen } = useSupermarketCart();
  const [addedBundleId, setAddedBundleId] = useState<string | null>(null);

  const handleAddBundle = (bundle: WeeklyBundle) => {
    // Add bundle representation to cart
    addToCart({
      id: bundle.id,
      slug: bundle.id,
      nameEn: bundle.nameEn,
      nameAr: bundle.nameAr,
      descEn: bundle.descEn,
      descAr: bundle.descAr,
      category: 'Family Bundles',
      categoryAr: 'الباقات العائلية',
      categorySlug: 'family-bundles',
      brand: 'Al Mirqab Exclusive',
      origin: 'UAE',
      unit: 'Family Saver Pack',
      price: bundle.bundlePrice,
      originalPrice: bundle.originalPrice,
      discountPercent: Math.round((bundle.savings / bundle.originalPrice) * 100),
      discountAmount: bundle.savings,
      rating: 4.9,
      reviewsCount: 142,
      inStock: true,
      stockQuantity: 40,
      badge: 'Family Saver',
      featured: true,
      bestseller: true,
      isNew: false,
      isUnder10: false,
      isUnder20: false,
      isUaeLocal: true,
      image: bundle.image
    });

    setAddedBundleId(bundle.id);
    setTimeout(() => {
      setAddedBundleId(null);
      setIsCartOpen(true);
    }, 600);
  };

  return (
    <section className="py-10 px-4 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>{isRtl ? 'باقات التوفير العائلية الشاملة' : 'Curated Family Value Packs'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            {isRtl ? 'باقات أسبوعية ذكية بخصم إضافي' : 'Bundle & Save More Every Week'}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {isRtl
              ? 'وفر حتى 30 درهماً على كل باقة مع اختيارات منتقاة تلبي احتياجات الأسرة بالكامل.'
              : 'Save up to AED 30.00 per bundle with pre-packed essentials delivered straight to your kitchen.'}
          </p>
        </div>

        {/* 4 Bundle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {WEEKLY_BUNDLES.map((bundle) => {
            const isAdded = addedBundleId === bundle.id;
            return (
              <div
                key={bundle.id}
                className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/60 rounded-2xl p-4 flex flex-col justify-between transition-all hover:shadow-2xl group"
              >
                <div>
                  {/* Top Tag & Savings */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                      {isRtl ? bundle.tagAr : bundle.tagEn}
                    </span>
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      {isRtl ? `وفر ${bundle.savings.toFixed(2)} درهم` : `Save AED ${bundle.savings.toFixed(2)}`}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900 mb-3">
                    <img
                      src={bundle.image}
                      alt={bundle.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-extrabold text-sm sm:text-base text-white mb-1.5 leading-snug">
                    {isRtl ? bundle.nameAr : bundle.nameEn}
                  </h3>
                  <p className="text-xs text-zinc-400 mb-3 line-clamp-2">
                    {isRtl ? bundle.descAr : bundle.descEn}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="space-y-1 py-2 border-t border-zinc-800/80 mb-4">
                    {(isRtl ? bundle.itemsAr : bundle.itemsEn).slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs text-zinc-500 line-through">
                      AED {bundle.originalPrice.toFixed(2)}
                    </div>
                    <div className="text-lg font-black text-emerald-400">
                      AED {bundle.bundlePrice.toFixed(2)}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddBundle(bundle)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-md ${
                      isAdded
                        ? 'bg-teal-500 text-zinc-950 font-black'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t('added')}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isRtl ? 'أضف الباقة' : 'Add Bundle'}</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
