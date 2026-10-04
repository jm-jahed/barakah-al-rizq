'use client';

import React, { useState } from 'react';
import { CheckCircle2, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface MealBuilderProps {
  onAddCustomMealToCart?: (customMeal: { name: string; priceAED: number; details: string }) => void;
}

export const MealBuilder: React.FC<MealBuilderProps> = ({ onAddCustomMealToCart }) => {
  const { t, isRtl, formatPrice } = useCrispoLanguage();

  const mains = isRtl
    ? [
        { name: 'برجر فاير الحار المقرمش', price: 29 },
        { name: 'دجاج مقلي كلاسيكي (قطعتان)', price: 26 },
        { name: 'أصابع ستريبس مقرمشة (٤ قطع)', price: 24 },
        { name: 'راب دجاج باربيكيو مدخن', price: 27 },
      ]
    : [
        { name: 'Crispo Fire Burger', price: 29 },
        { name: 'Original Crunch (2 Pcs)', price: 26 },
        { name: 'Crispy Tenders (4 Pcs)', price: 24 },
        { name: 'Smokey BBQ Wrap', price: 27 },
      ];

  const sides = isRtl
    ? [
        { name: 'بطاطس محملة بالجبن السائل', price: 10 },
        { name: 'حلقات بصل ذهبية مقرمشة', price: 8 },
        { name: 'سلطة كولسلو كريمية طازجة', price: 6 },
        { name: 'بطاطس مقلية كلاسيكية مبهرة', price: 5 },
      ]
    : [
        { name: 'Loaded Cheese Fries', price: 10 },
        { name: 'Crispy Onion Rings', price: 8 },
        { name: 'Creamy Coleslaw', price: 6 },
        { name: 'Regular Skin-on Fries', price: 5 },
      ];

  const drinks = isRtl
    ? [
        { name: 'عصير ليموناضة بالنعناع الطازج', price: 6 },
        { name: 'مشروب بيبسي مثلج منعش', price: 4 },
        { name: 'سفن أب فري خالي من السكر', price: 4 },
        { name: 'شاي مثلج بالليمون (آيس تي)', price: 5 },
      ]
    : [
        { name: 'Fresh Mint Lemonade', price: 6 },
        { name: 'Chilled Pepsi Fountain', price: 4 },
        { name: '7UP Free', price: 4 },
        { name: 'Iced Lemon Tea', price: 5 },
      ];

  const extras = isRtl
    ? [
        { name: 'صلصة جبن شيدر ذائبة إضافية', price: 4 },
        { name: 'قطعة تندرز دجاج مقرمشة إضافية', price: 8 },
        { name: 'غموس مايونيز كريسبو السري', price: 2 },
        { name: 'بدون إضافات', price: 0 },
      ]
    : [
        { name: 'Extra Cheddar Cheese Sauce', price: 4 },
        { name: 'Extra Crispy Tender Piece', price: 8 },
        { name: 'Secret Mayo Dip', price: 2 },
        { name: 'None', price: 0 },
      ];

  const [main, setMain] = useState(mains[0]);
  const [side, setSide] = useState(sides[0]);
  const [drink, setDrink] = useState(drinks[0]);
  const [extra, setExtra] = useState(extras[0]);

  const totalPrice = main.price + side.price + drink.price + extra.price;

  return (
    <section className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
            {t('mealBuilderTitle')}
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] tracking-tight italic font-sans mt-4">
            {isRtl ? 'صمم بوكس وجبتك الخاصة.' : 'BUILD YOUR MEAL.'}
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            {t('mealBuilderSubtitle')}
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="bg-[#1A1715] rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 font-mono text-xs">
            
            {/* Step 1: Main */}
            <div>
              <label className="text-xs font-bold text-[#E63946] uppercase block mb-3">{t('mbStep1')}</label>
              <div className="space-y-2">
                {mains.map((m) => (
                  <div
                    key={m.name}
                    onClick={() => setMain(m)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      main.name === m.name ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{m.name}</span>
                    <span className="text-[#FFC107]">{formatPrice(m.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Side */}
            <div>
              <label className="text-xs font-bold text-[#E63946] uppercase block mb-3">{t('mbStep3')}</label>
              <div className="space-y-2">
                {sides.map((s) => (
                  <div
                    key={s.name}
                    onClick={() => setSide(s)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      side.name === s.name ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{s.name}</span>
                    <span className="text-[#FFC107]">{formatPrice(s.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Drink */}
            <div>
              <label className="text-xs font-bold text-[#E63946] uppercase block mb-3">{t('mbStep4')}</label>
              <div className="space-y-2">
                {drinks.map((d) => (
                  <div
                    key={d.name}
                    onClick={() => setDrink(d)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      drink.name === d.name ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{d.name}</span>
                    <span className="text-[#FFC107]">{formatPrice(d.price)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Extras */}
            <div>
              <label className="text-xs font-bold text-[#E63946] uppercase block mb-3">{t('chooseAddons')}</label>
              <div className="space-y-2">
                {extras.map((ex) => (
                  <div
                    key={ex.name}
                    onClick={() => setExtra(ex)}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      extra.name === ex.name ? 'bg-[#E63946]/20 border-[#E63946] text-white font-bold' : 'bg-[#12100E] border-stone-800 text-stone-400'
                    }`}
                  >
                    <span>{ex.name}</span>
                    <span className="text-[#FFC107]">{ex.price > 0 ? formatPrice(ex.price) : (isRtl ? 'مجاني' : 'Free')}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Live Order Summary Box */}
          <div className="p-6 rounded-2xl bg-[#12100E] border border-[#FFC107]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-mono text-xs text-stone-300 space-y-1">
              <span className="text-[#FFC107] font-bold block uppercase text-[10px]">
                {isRtl ? 'ملخص وجبتك المخصصة' : 'YOUR CUSTOM MEAL SUMMARY'}
              </span>
              <p className="text-white font-bold text-sm">
                {main.name} + {side.name} + {drink.name} {extra.price > 0 ? `+ ${extra.name}` : ''}
              </p>
            </div>

            <button
              onClick={() => {
                if (onAddCustomMealToCart) {
                  onAddCustomMealToCart({
                    name: isRtl ? `بوكس مخصص (${main.name} + ${side.name})` : `Custom Meal (${main.name} + ${side.name})`,
                    priceAED: totalPrice,
                    details: `${main.name} + ${side.name} + ${drink.name}${extra.price > 0 ? ` + ${extra.name}` : ''}`
                  });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#E63946] to-[#FF4757] hover:brightness-110 active:scale-95 transition-all text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isRtl ? `إضافة الوجبة • ${formatPrice(totalPrice)}` : `Add Meal • ${formatPrice(totalPrice)}`}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
