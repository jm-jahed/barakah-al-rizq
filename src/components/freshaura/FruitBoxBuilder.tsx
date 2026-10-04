'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Package } from 'lucide-react';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface FruitBoxBuilderProps {
  onAddCustomBoxToCart: (boxName: string, price: number, weight: string, fruits: string[]) => void;
}

export const FruitBoxBuilder: React.FC<FruitBoxBuilderProps> = ({ onAddCustomBoxToCart }) => {
  const { t, isRtl, formatPrice, formatNumber } = useFreshauraLanguage();
  const [selectedTierKey, setSelectedTierKey] = useState<'Small' | 'Medium' | 'Family' | 'Premium'>('Medium');

  const tiers = {
    Small: {
      nameEn: 'Small Fruit Box',
      nameAr: 'صندوق الفواكه الصغير',
      price: 49,
      weightEn: '3.5 KG',
      weightAr: '٣.٥ كجم',
      maxFruits: 4,
      discountEn: 'Save 10%',
      discountAr: 'وفر ١٠٪',
    },
    Medium: {
      nameEn: 'Medium Family Fruit Box',
      nameAr: 'صندوق الفواكه العائلي المتوسط',
      price: 79,
      weightEn: '6.5 KG',
      weightAr: '٦.٥ كجم',
      maxFruits: 6,
      discountEn: 'Save 15%',
      discountAr: 'وفر ١٥٪',
    },
    Family: {
      nameEn: 'Family Jumbo Fruit Box',
      nameAr: 'صندوق العائلة الجامبو',
      price: 119,
      weightEn: '10.5 KG',
      weightAr: '١٠.٥ كجم',
      maxFruits: 8,
      discountEn: 'Save 20%',
      discountAr: 'وفر ٢٠٪',
    },
    Premium: {
      nameEn: 'Gourmet Exotic Fruit Box',
      nameAr: 'صندوق الفواكه الاستوائية الفاخر',
      price: 169,
      weightEn: '14.0 KG',
      weightAr: '١٤.٠ كجم',
      maxFruits: 10,
      discountEn: 'Save 25%',
      discountAr: 'وفر ٢٥٪',
    },
  };

  const availableFruits = [
    { id: 'strawberries', nameEn: 'Sweet Strawberries', nameAr: 'فراولة طازجة حلوة', icon: '🍓' },
    { id: 'mangoes', nameEn: 'Royal Honey Mangoes', nameAr: 'مانجو عسلي ملكي', icon: '🥭' },
    { id: 'avocados', nameEn: 'Hass Avocados', nameAr: 'أفوكادو هاس فاخر', icon: '🥑' },
    { id: 'bananas', nameEn: 'Yellow Bananas', nameAr: 'موز أصفر طازج', icon: '🍌' },
    { id: 'oranges', nameEn: 'Spanish Navel Oranges', nameAr: 'برتقال أبو صرة إسباني', icon: '🍊' },
    { id: 'blueberries', nameEn: 'Queen Blueberries', nameAr: 'توت أزرق فاخر', icon: '🫐' },
    { id: 'grapes', nameEn: 'Red Seedless Grapes', nameAr: 'عنب أحمر بدون بذور', icon: '🍇' },
    { id: 'kiwis', nameEn: 'Golden Kiwis', nameAr: 'كيوي ذهبي نيوزيلندي', icon: '🥝' },
    { id: 'pineapples', nameEn: 'Sweet Gold Pineapple', nameAr: 'أناناس ذهبي حلو', icon: '🍍' },
    { id: 'cherries', nameEn: 'Bing Cherries', nameAr: 'كرز بينغ أحمر', icon: '🍒' },
  ];

  const [selectedFruitIds, setSelectedFruitIds] = useState<string[]>([
    'strawberries',
    'mangoes',
    'avocados',
    'bananas',
    'oranges',
    'blueberries',
  ]);

  const currentTier = tiers[selectedTierKey];

  const toggleFruit = (fruitId: string) => {
    if (selectedFruitIds.includes(fruitId)) {
      setSelectedFruitIds(selectedFruitIds.filter((id) => id !== fruitId));
    } else {
      if (selectedFruitIds.length < currentTier.maxFruits) {
        setSelectedFruitIds([...selectedFruitIds, fruitId]);
      }
    }
  };

  const selectedFruitsNames = selectedFruitIds.map((id) => {
    const f = availableFruits.find((item) => item.id === id);
    return isRtl ? f?.nameAr || '' : f?.nameEn || '';
  });

  const currentBoxName = isRtl ? currentTier.nameAr : currentTier.nameEn;
  const currentBoxWeight = isRtl ? currentTier.weightAr : currentTier.weightEn;

  return (
    <section id="fruit-builder" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
            {t('builderBadge')}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
            {t('builderTitle')}
          </h2>
          <p className="text-sm sm:text-base text-stone-200 font-light mt-2">
            {t('builderSubtitle')}
          </p>
        </div>

        {/* Builder Main Container */}
        <div className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 p-6 sm:p-12 shadow-2xl font-sans max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tier & Fruit Selector */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Box Tier */}
            <div>
              <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase block mb-3">
                {isRtl ? 'الخطوة ١: اختر حجم وسعة الصندوق' : 'STEP 1: SELECT YOUR BOX TIER SIZE'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                {(Object.keys(tiers) as (keyof typeof tiers)[]).map((tKey) => {
                  const item = tiers[tKey];
                  const isSel = selectedTierKey === tKey;
                  return (
                    <button
                      key={tKey}
                      onClick={() => {
                        setSelectedTierKey(tKey);
                        if (selectedFruitIds.length > item.maxFruits) {
                          setSelectedFruitIds(selectedFruitIds.slice(0, item.maxFruits));
                        }
                      }}
                      className={`p-3 rounded-2xl border text-start flex flex-col justify-between transition-all ${
                        isSel
                          ? 'bg-emerald-400 text-black border-emerald-400 shadow-lg'
                          : 'bg-[#042F2E] text-stone-200 border-emerald-700/40 hover:text-white'
                      }`}
                    >
                      <span className="font-serif font-bold text-sm block">
                        {isRtl ? item.nameAr.split(' ')[0] + ' ' + (item.nameAr.split(' ')[2] || '') : tKey}
                      </span>
                      <span className="text-[11px] font-mono block mt-1 font-bold">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-[9px] block opacity-80 mt-1">
                        {isRtl ? item.weightAr : item.weightEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Pick Fruits */}
            <div>
              <div className="flex justify-between items-center mb-3 font-mono text-xs">
                <span className="text-[10px] text-emerald-300 font-bold uppercase">
                  {isRtl
                    ? `الخطوة ٢: اختر فواكهك المفضلة (${formatNumber(selectedFruitIds.length)} من أصل ${formatNumber(currentTier.maxFruits)})`
                    : `STEP 2: PICK YOUR FRUITS (${selectedFruitIds.length} / ${currentTier.maxFruits} SELECTED)`}
                </span>
                <span className="text-stone-300 text-[10px]">
                  {isRtl ? currentTier.discountAr : currentTier.discountEn}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableFruits.map((fr) => {
                  const isChecked = selectedFruitIds.includes(fr.id);
                  const isMax = selectedFruitIds.length >= currentTier.maxFruits && !isChecked;

                  return (
                    <button
                      key={fr.id}
                      disabled={isMax}
                      onClick={() => toggleFruit(fr.id)}
                      className={`p-3 rounded-2xl border text-start flex items-center justify-between font-mono text-xs transition-all ${
                        isChecked
                          ? 'bg-[#042F2E] border-emerald-400 text-white shadow-md'
                          : isMax
                          ? 'bg-[#042F2E]/40 border-stone-800 text-stone-500 cursor-not-allowed'
                          : 'bg-[#042F2E] border-emerald-700/30 text-stone-300 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{fr.icon}</span>
                        <span className="text-xs font-sans font-bold">{isRtl ? fr.nameAr : fr.nameEn}</span>
                      </span>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-[#042F2E] rounded-2xl p-6 border border-emerald-600/40 space-y-5 font-mono text-xs">
            
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] text-emerald-300 uppercase block font-bold">
                  {isRtl ? 'ملخص الصندوق المخصص' : 'CUSTOM FRUIT BOX SUMMARY'}
                </span>
                <h4 className="text-lg font-serif font-bold text-white">{currentBoxName}</h4>
              </div>
            </div>

            <div className="space-y-2 border-t border-b border-emerald-900/80 py-4">
              <div className="flex justify-between">
                <span className="text-stone-300">{isRtl ? 'الوزن الصافي التقديري:' : 'Estimated Net Weight:'}</span>
                <span className="text-white font-bold">{currentBoxWeight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-300">{isRtl ? 'خصم المجموعة التوفيري:' : 'Bundle Discount:'}</span>
                <span className="text-emerald-400 font-bold">{isRtl ? currentTier.discountAr : currentTier.discountEn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-300">{isRtl ? 'الفواكه المحددة:' : 'Fruits Selected:'}</span>
                <span className="text-emerald-300 font-bold">{formatNumber(selectedFruitIds.length)} / {formatNumber(currentTier.maxFruits)}</span>
              </div>
            </div>

            {/* Selected items pills */}
            <div className="flex flex-wrap gap-1.5 font-sans text-xs">
              {selectedFruitsNames.map((name, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-[#064E3B] text-emerald-200 border border-emerald-600/40 font-medium">
                  {name}
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-baseline justify-between">
              <span className="text-stone-300 text-[10px] uppercase">
                {isRtl ? 'إجمالي سعر الصندوق:' : 'TOTAL BOX PRICE:'}
              </span>
              <span className="text-2xl font-serif font-bold text-emerald-300">
                {formatPrice(currentTier.price)}
              </span>
            </div>

            <button
              onClick={() =>
                onAddCustomBoxToCart(currentBoxName, currentTier.price, currentBoxWeight, selectedFruitsNames)
              }
              className="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
            >
              <span>{isRtl ? 'إضافة الصندوق المخصص للسلة' : 'Build & Add My Box to Bag'}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
