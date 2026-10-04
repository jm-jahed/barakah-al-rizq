'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Crown,
} from 'lucide-react';
import { NouraProduct, NOURA_PRODUCTS } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface LookbookEnsemble {
  id: string;
  title: string;
  occasion: string;
  location: string;
  description: string;
  image: string;
  totalAed: number;
  items: {
    name: string;
    type: string;
    priceAed: number;
    fabric: string;
  }[];
}

interface NouraLookbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: NouraProduct, size: string, color: string, qty: number) => void;
  onOpenProductDetail?: (product: NouraProduct) => void;
}

export const NouraLookbookDrawer: React.FC<NouraLookbookDrawerProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const { isRtl, formatPrice } = useNouraLanguage();
  const [selectedEnsembleId, setSelectedEnsembleId] = useState<string>('look-1');
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen) return null;

  const ensembles: LookbookEnsemble[] = isRtl
    ? [
        {
          id: 'look-1',
          title: 'افتتاح معرض الفنون بحي دبي للتصميم (d3)',
          occasion: 'معارض الفن المعاصر والأمسيات الثقافية',
          location: 'حي دبي للتصميم، مبنى 7',
          description: 'تنسيق أثيري متعدد الطبقات يجمع بين أورجانزا فرنسية مجعدة خفيفة مع فستان حريري لامع بلون الشامبين وحواف زري ذهبية فاخرة.',
          image: NOURA_PRODUCTS[0]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/ND_JUNE18_260641-2.jpg?v=1789122483',
          totalAed: 1140,
          items: [
            { name: 'عباية أورا أورجانزا مجعدة مفتوحة', type: 'القطعة الخارجية', priceAed: 580, fabric: 'أورجانزا فرنسية مجعدة' },
            { name: 'فستان داخلي حرير شامبين لامع', type: 'الطبقة الداخلية', priceAed: 320, fabric: 'ستان حريري ياباني' },
            { name: 'طرحة شيفون بحواف زري ذهبي', type: 'غطاء الرأس', priceAed: 140, fabric: 'شيفون فائق النعومة' },
            { name: 'بروش كريستال وعنبر مرصع يدوياً', type: 'إكسسوار', priceAed: 100, fabric: 'كريستال سواروفسكي / نحاس مذهب' },
          ]
        },
        {
          id: 'look-2',
          title: 'حفل الاستقبال الدبلوماسي في قصر الإمارات',
          occasion: 'سهرات كبار الشخصيات والاستقبالات الرسمية',
          location: 'مسرح قصر الإمارات وقصر السعديات، أبوظبي',
          description: 'مخمل إيطالي بلون الزمرد الملكي مع تطريزات زري أرابيسك ذهبية وقصة فراشة واسعة للمناسبات والولائم الراقية.',
          image: NOURA_PRODUCTS[1]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/POSHABYA13-MAY-20260434copy.jpg?v=1787917283',
          totalAed: 1390,
          items: [
            { name: 'عباية فراشة مخمل زمردي ملكي', type: 'القطعة الخارجية', priceAed: 790, fabric: 'مخمل حريري إيطالي' },
            { name: 'قفطان داخلي بروكار ذهبي منقوش', type: 'الطبقة الداخلية', priceAed: 380, fabric: 'حرير جاكار' },
            { name: 'طرحة شيفون زمردية خافتة البريق', type: 'غطاء الرأس', priceAed: 130, fabric: 'شيفون كوري فاخر' },
            { name: 'حزام شرابة تراثي إماراتي', type: 'إكسسوار', priceAed: 90, fabric: 'خيوط ذهبية مجدولة' },
          ]
        },
        {
          id: 'look-3',
          title: 'مجلس سحور رمضان عند الغسق',
          occasion: 'ضيافة وأمسيات رمضانية دافئة',
          location: 'باحة ون آند أونلي رويال ميراج، دبي',
          description: 'تطريز لؤلؤي ناعم متدرج على كريب ياباني بلون الليل الهادئ. أناقة هادئة تعكس الفخامة الصامتة والوقار.',
          image: NOURA_PRODUCTS[2]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/AUG_18_0701.jpg?v=1787916744',
          totalAed: 960,
          items: [
            { name: 'عباية كيمونو مفتوحة بتطريز سراب اللؤلؤ', type: 'القطعة الخارجية', priceAed: 520, fabric: 'كريب ياباني مطفأ' },
            { name: 'فستان كتان طبيعي خفيف ومريح', type: 'الطبقة الداخلية', priceAed: 270, fabric: 'كتان أوروبي نقي' },
            { name: 'طرحة شيفون بحواف لؤلؤية ناعمة', type: 'غطاء الرأس', priceAed: 110, fabric: 'شيفون فاخر' },
            { name: 'طقم أزرار صدف طبيعي', type: 'إكسسوار', priceAed: 60, fabric: 'صدف بحري طبيعي' },
          ]
        },
        {
          id: 'look-4',
          title: 'إطلالة القيادة التنفيذية والأعمال',
          occasion: 'اجتماعات مجالس الإدارة واللقاءات الرسمية',
          location: 'أبراج البوابة، مركز دبي المالي العالمي (DIFC)',
          description: 'قصة ترنش مزدوجة الصدر مصممة من نيدو دبي المقاوم للتجعد مع ياقة ستان محددة وأزرار كلاسيكية.',
          image: NOURA_PRODUCTS[3]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/POSHABYA13-MAY-20260175copy2_f3d4bdf5-d71c-406a-ab74-a1b30e356179.jpg?v=1787920062',
          totalAed: 880,
          items: [
            { name: 'عباية ترنش تنفيذية سوداء مزدوجة الصدر', type: 'القطعة الخارجية', priceAed: 550, fabric: 'نيدو دبي ملكي' },
            { name: 'فستان داخلي رمادي فحمي ناعم', type: 'الطبقة الداخلية', priceAed: 220, fabric: 'مايكرو كريب' },
            { name: 'طرحة جورجيت سوداء رسمية مطفأة', type: 'غطاء الرأس', priceAed: 110, fabric: 'جورجيت عالي الكثافة' },
          ]
        },
      ]
    : [
        {
          id: 'look-1',
          title: 'Dubai Design District (d3) Gallery Vernissage',
          occasion: 'Contemporary Art & Haute Culture',
          location: 'Dubai Design District, Building 7',
          description: 'An ethereal layered composition pairing sheer crushed organza with a shimmering satin slip dress and gold-threaded border accents.',
          image: NOURA_PRODUCTS[0]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/ND_JUNE18_260641-2.jpg?v=1789122483',
          totalAed: 1140,
          items: [
            { name: 'Aura Crushed Organza Open Abaya', type: 'Outerwear', priceAed: 580, fabric: 'French Crushed Organza' },
            { name: 'Lustrous Champagne Satin Slip Dress', type: 'Inner Layer', priceAed: 320, fabric: 'Japanese Liquid Satin' },
            { name: 'Metallic Gold Zari Edge Sheila', type: 'Headwear', priceAed: 140, fabric: 'Ultra-Fine Chiffon' },
            { name: 'Hand-Carved Amber & Crystal Brooch', type: 'Accessory', priceAed: 100, fabric: 'Swarovski Crystal / Brass' },
          ]
        },
        {
          id: 'look-2',
          title: 'Abu Dhabi Sovereign Gala & Cultural Reception',
          occasion: 'VIP Diplomatic Evening',
          location: 'Emirates Palace Auditorium & Saadiyat',
          description: 'Regal emerald velvet with Arabesque gold threadwork and full-volume Farasha butterfly wings for high-society banquets.',
          image: NOURA_PRODUCTS[1]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/POSHABYA13-MAY-20260434copy.jpg?v=1787917283',
          totalAed: 1390,
          items: [
            { name: 'Royal Emerald Farasha Velvet Abaya', type: 'Outerwear', priceAed: 790, fabric: 'Italian Silk Velvet' },
            { name: 'Embossed Gold Brocade Inner Kaftan', type: 'Inner Layer', priceAed: 380, fabric: 'Silk Jacquard' },
            { name: 'Forest Emerald Shimmer Sheila', type: 'Headwear', priceAed: 130, fabric: 'Fine Korean Chiffon' },
            { name: 'Emirati Heritage Tassel Belt', type: 'Accessory', priceAed: 90, fabric: 'Braided Gold Thread' },
          ]
        },
        {
          id: 'look-3',
          title: 'Ramadan Twilight Suhoor Majlis',
          occasion: 'Festive Modest Hospitality',
          location: 'One&Only Royal Mirage Courtyard',
          description: 'Subtle tone-on-tone pearl embroidery on midnight Japanese crepe. Understated elegance radiating quiet luxury.',
          image: NOURA_PRODUCTS[2]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/AUG_18_0701.jpg?v=1787916744',
          totalAed: 960,
          items: [
            { name: 'Pearl Mirage Open Kimono Abaya', type: 'Outerwear', priceAed: 520, fabric: 'Japanese Matte Crepe' },
            { name: 'Pure Linen Breathable Slip Dress', type: 'Inner Layer', priceAed: 270, fabric: 'European Natural Linen' },
            { name: 'Soft Pearl Edge Chiffon Sheila', type: 'Headwear', priceAed: 110, fabric: 'Premium Chiffon' },
            { name: 'Mother of Pearl Fastener Set', type: 'Accessory', priceAed: 60, fabric: 'Natural Shell' },
          ]
        },
        {
          id: 'look-4',
          title: 'Executive Modest Boardroom Capsule',
          occasion: 'Corporate Leadership & Diplomacy',
          location: 'DIFC Gate District Tower',
          description: 'Structured double-breasted trench silhouette crafted from heavy crease-resistant Dubai Nida with notched satin lapels.',
          image: NOURA_PRODUCTS[3]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/POSHABYA13-MAY-20260175copy2_f3d4bdf5-d71c-406a-ab74-a1b30e356179.jpg?v=1787920062',
          totalAed: 880,
          items: [
            { name: 'Executive Noir Double-Breasted Trench Abaya', type: 'Outerwear', priceAed: 550, fabric: 'Royal Dubai Nida' },
            { name: 'Minimalist Charcoal Inner Shift Dress', type: 'Inner Layer', priceAed: 220, fabric: 'Micro-Crepe' },
            { name: 'Matte Obsidian Business Sheila', type: 'Headwear', priceAed: 110, fabric: 'High-Density Georgette' },
          ]
        },
      ];

  const current = ensembles.find(e => e.id === selectedEnsembleId) || ensembles[0];

  const handleAddEnsembleToBag = () => {
    const repProduct = NOURA_PRODUCTS[0];
    const ensembleProduct: NouraProduct = {
      ...repProduct,
      id: `look-${current.id}-${Date.now()}`,
      name: isRtl ? `طقم كامل: ${current.title}` : `Complete Look: ${current.title}`,
      priceAED: current.totalAed,
      originalPriceAED: Math.round(current.totalAed * 1.25),
      badge: 'EXCLUSIVE',
      overview: isRtl
        ? `تنسيق إطلالة كاملة متكاملة تشمل: ${current.items.map(i => i.name).join('، ')}.`
        : `Complete styled ensemble including ${current.items.map(i => i.name).join(', ')}.`,
      sizes: ['M (56" Length)'],
      colorOptions: [{ name: isRtl ? 'إطلالة منسقة' : 'Curated Ensemble', hex: '#0a0a0a' }],
      image: current.image
    };

    if (onAddToCart) {
      onAddToCart(ensembleProduct, '56"', isRtl ? 'إطلالة منسقة' : 'Curated Ensemble', 1);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    isRtl
      ? `مرحباً أتيليه نورة دبي،\n\nأود الاستفسار وطلب طقم الإطلالة الكاملة:\n"${current.title}" (المجموع: ${formatPrice(current.totalAed)}).\nيرجى تأكيد توفر المقاسات المناسبة لي.`
      : `Hello NOURA Concierge,\n\nI am interested in ordering the complete Lookbook Ensemble:\n"${current.title}" (Total: ${formatPrice(current.totalAed)}).\nPlease check sizing availability for me.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-[#121212] border border-stone-800 rounded-3xl max-w-4xl w-full shadow-2xl relative font-sans text-stone-100 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-[#0A0A0A]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#1a1a1a] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] block">
                  {isRtl ? 'كتالوج الإطلالات الفاخرة • دبي' : 'HAUTE COUTURE EDITORIAL LOOKBOOK'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#FAFAFA]">
                  {isRtl ? 'تسوقي إطلالات الموسم المنسقة بالكامل' : 'Shop Complete Curated Looks'}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lookbook Navigation Tabs */}
          <div className="flex items-center gap-2 p-4 border-b border-stone-800 bg-[#0e0e0e] overflow-x-auto no-scrollbar font-mono text-xs">
            {ensembles.map((ens) => (
              <button
                key={ens.id}
                onClick={() => setSelectedEnsembleId(ens.id)}
                className={`px-4 py-2.5 rounded-xl border whitespace-nowrap font-bold transition-all ${
                  selectedEnsembleId === ens.id
                    ? 'bg-[#C5A059] text-black border-[#C5A059]'
                    : 'bg-[#0A0A0A] border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                <span>{ens.title.split(' ')[0]} {ens.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
            
            {/* Top Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Visual Card */}
              <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-800 bg-[#0A0A0A]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#C5A059]/30">
                    <span className="text-[9px] text-stone-400 uppercase block font-bold">
                      {isRtl ? 'إجمالي الإطلالة' : 'TOTAL ENSEMBLE'}
                    </span>
                    <span className="text-xl font-serif font-bold text-[#C5A059]">
                      {formatPrice(current.totalAed)}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/80 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    {isRtl ? 'يشمل ٤ قطع متناسقة' : '4 Items Included'}
                  </span>
                </div>
              </div>

              {/* Description & Location */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider font-bold block mb-1">
                    {isRtl ? `المناسبة: ${current.occasion}` : `OCCASION: ${current.occasion.toUpperCase()}`}
                  </span>
                  <h4 className="text-2xl font-serif font-extrabold text-white leading-tight">
                    {current.title}
                  </h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    {isRtl ? `المكان: ${current.location}` : `Setting: ${current.location}`}
                  </p>
                </div>

                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  {current.description}
                </p>

                {/* Items Breakdown Table */}
                <div className="space-y-2 pt-2 border-t border-stone-800 font-mono text-xs">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">
                    {isRtl ? 'تفاصيل محتويات الإطلالة:' : 'ENSEMBLE BREAKDOWN:'}
                  </span>
                  {current.items.map((item) => (
                    <div key={item.name} className="p-2.5 rounded-xl bg-[#0A0A0A] border border-stone-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-white font-serif font-bold text-xs block">{item.name}</span>
                        <span className="text-[10px] text-stone-500">{item.fabric} • {item.type}</span>
                      </div>
                      <span className="text-[#C5A059] font-bold text-xs">{formatPrice(item.priceAed)}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Footer CTAs */}
          <div className="p-6 border-t border-stone-800 bg-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`https://wa.me/971508889900?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{isRtl ? 'استفسار عن الإطلالة عبر واتساب' : 'Inquire Look on WhatsApp'}</span>
            </a>

            <button
              onClick={handleAddEnsembleToBag}
              className="w-full sm:w-auto flex-1 py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>{isAdded ? (isRtl ? 'تمت إضافة الطقم كاملاً!' : 'Added Complete Ensemble!') : (isRtl ? `تسوق الإطلالة كاملة (${formatPrice(current.totalAed)})` : `Shop Complete Ensemble (${formatPrice(current.totalAed)})`)}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
