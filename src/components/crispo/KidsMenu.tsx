'use client';

import React from 'react';
import { Plus, Smile, Gift } from 'lucide-react';
import { CRISPO_PRODUCTS, CrispoProduct } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface KidsMenuProps {
  onAddToCart?: (product: CrispoProduct) => void;
}

export const KidsMenu: React.FC<KidsMenuProps> = ({ onAddToCart }) => {
  const { t, isRtl, formatPrice } = useCrispoLanguage();

  const kidsItems = isRtl
    ? [
        { name: 'وجبة ميني برجر الأطفال السعيدة', price: 22, desc: 'ميني برجر دجاج مقرمش، بطاطس مقلية، عصير تفاح طبيعي ولعبة مفاجأة.', cal: 420 },
        { name: 'وجبة أصابع التندرز للأبطال الصغار', price: 20, desc: '٣ أصابع تندرز مقرمشة، بطاطس، ذرة حلوة وعصير برتقال.', cal: 380 },
        { name: 'بوكس دبابيس الدجاج المقرمشة للأطفال', price: 24, desc: 'قطعتان دبابيس دجاج، بطاطس، سلطة كولسلو وآيس كريم فانيليا.', cal: 490 },
      ]
    : [
        { name: 'Mini Crispo Burger Meal', price: 22, desc: 'Mini chicken burger, regular fries, apple juice & surprise toy.', cal: 420 },
        { name: 'Little Craver Tenders Meal', price: 20, desc: '3 crispy tenders, fries, sweet corn & orange juice.', cal: 380 },
        { name: 'Kids Drumstick Box', price: 24, desc: '2 crispy drumsticks, fries, coleslaw & soft serve ice cream.', cal: 490 },
      ];

  return (
    <section className="py-20 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
              {isRtl ? 'نادي أبطال كريسبو الصغار' : 'KIDS CRAVER CLUB'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans mt-4">
              {isRtl ? 'قرمشة كبيرة لعشاقنا الصغار.' : 'BIG CRUNCH FOR LITTLE CRAVERS.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              {t('kidsSubtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#FFC107]">
            <Gift className="w-4 h-4" />
            <span>{isRtl ? 'لعبة مفاجأة مشمولة في كل وجبة أطفال' : 'SURPRISE TOY INCLUDED IN EVERY MEAL'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kidsItems.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-3xl bg-[#1A1715] border border-stone-800 hover:border-[#FFC107]/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFC107]/20 text-[#FFC107] font-bold">
                    {isRtl ? 'وجبة أطفال' : 'KIDS MEAL'}
                  </span>
                  <span className="text-stone-400">{item.cal} {t('caloriesLabel')}</span>
                </div>

                <h3 className="text-xl font-black text-white font-sans mb-2">{item.name}</h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed mb-6">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-between font-mono">
                <span className="text-xl font-black text-[#FFC107]">
                  {formatPrice(item.price)}
                </span>
                <button
                  onClick={() => {
                    if (onAddToCart) {
                      const kidProduct: CrispoProduct = {
                        id: `kids-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                        code: 'KD',
                        name: item.name,
                        category: 'Combos',
                        description: item.desc,
                        priceAED: item.price,
                        calories: item.cal,
                        image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1200&auto=format&fit=crop',
                        ingredients: ['100% Real Chicken Breast', 'Fresh Potatoes', 'Real Fruit Juice', 'Collectible Toy'],
                        allergens: ['Gluten']
                      };
                      onAddToCart(kidProduct);
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#E63946] hover:bg-[#FF4757] active:scale-95 transition-all text-white font-sans text-xs font-black uppercase flex items-center gap-1 shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t('addToCart')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
