'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  Scissors,
  CheckCircle2,
  Ruler,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check,
  Layers,
  Palette
} from 'lucide-react';
import { NouraProduct, NOURA_BRAND, NOURA_PRODUCTS } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface NouraCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: NouraProduct, size: string, color: string, qty: number) => void;
}

export const NouraCustomizerModal: React.FC<NouraCustomizerModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const { t, isRtl, formatPrice } = useNouraLanguage();
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);

  // Customizer state
  const [silhouette, setSilhouette] = useState(isRtl ? 'قصة فراشة كلاسيكية' : 'Classic Farasha Butterfly');
  const [fabric, setFabric] = useState(isRtl ? 'حرير نيدو ياباني ملكي' : 'Royal Dubai Nida (Zero-Sheen)');
  const [color, setColor] = useState(isRtl ? 'أسود ملكي فاخر' : 'Midnight Obsidian Black');
  const [colorHex, setColorHex] = useState('#0a0a0a');
  const [lengthInch, setLengthInch] = useState<number>(56);
  const [fitStyle, setFitStyle] = useState<'Standard Regular' | 'Relaxed Modest Flare' | 'Tailored Slim'>('Relaxed Modest Flare');
  const [embroidery, setEmbroidery] = useState(isRtl ? 'شك كريستال سواروفسكي على الأكمام' : 'Swarovski Crystal Cuffs');
  const [matchingSheila, setMatchingSheila] = useState(true);
  const [monogramInitials, setMonogramInitials] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen) return null;

  const silhouettes = isRtl
    ? [
        { name: 'كيمونو عصري مفتوح', desc: 'قصة أمامية مفتوحة مع أزرار طقطق وياقة راقية تناسب الإطلالات اليومية والعملية.', basePrice: 420, image: NOURA_PRODUCTS[4]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/AUG_18_0764.jpg?v=1787916841' },
        { name: 'قصة فراشة كلاسيكية', desc: 'قصة جناح الفراشة الانسيابية بحجم ملكي واسع يمنح حشمة تامة وأناقة خليجية أصيلة.', basePrice: 480, image: NOURA_PRODUCTS[5]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/POSHABYA13-MAY-20260434copy.jpg?v=1787917283' },
        { name: 'بشت إماراتي تراثي', desc: 'قصة البشت التراثية مع خطوط زري ذهبي عند الأكتاف والياقة لمناسبات كبار الشخصيات.', basePrice: 560, image: NOURA_PRODUCTS[6]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/AUG_18_0701.jpg?v=1787916744' },
        { name: 'قصة كلوش ملكية واسعة', desc: 'قصة دائرية واسعة من الأسفل تمنح انسيابية لافتة ووقاراً استثنائياً في كل خطوة.', basePrice: 520, image: NOURA_PRODUCTS[7]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/ND_JUNE18_260641-2.jpg?v=1789122483' },
      ]
    : [
        { name: 'Modern Open Kimono', desc: 'Versatile contemporary front-open with snap buttons and clean lapels.', basePrice: 420, image: NOURA_PRODUCTS[4]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/AUG_18_0764.jpg?v=1787916841' },
        { name: 'Classic Farasha Butterfly', desc: 'Flowing winged silhouette offering full draping modesty and regal volume.', basePrice: 480, image: NOURA_PRODUCTS[5]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/POSHABYA13-MAY-20260434copy.jpg?v=1787917283' },
        { name: 'Sleek Bisht Heritage Cut', desc: 'Emirati heritage cut with structured gold zari piping and broad shoulders.', basePrice: 560, image: NOURA_PRODUCTS[6]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/AUG_18_0701.jpg?v=1787916744' },
        { name: 'Royal Umbrella Flare', desc: 'Cascading full circle bottom hem with dramatic graceful movement.', basePrice: 520, image: NOURA_PRODUCTS[7]?.image || 'https://cdn.shopify.com/s/files/1/0381/2104/6147/files/ND_JUNE18_260641-2.jpg?v=1789122483' },
      ];

  const fabrics = isRtl
    ? [
        { name: 'حرير نيدو ياباني ملكي', desc: 'قماش مطفأ فائق النعومة وخفيف الوزن ومقاوم للتجعد، المعيار الذهبي للعباية الإماراتية.', extraAed: 0 },
        { name: 'كريب دبي الفاخر', desc: 'وزن مثالي وانسيابية رائعة مع ملمس ناعم يدوم طويلاً.', extraAed: 60 },
        { name: 'حرير سائل وستان ملكي', desc: 'لمعة خافتة ساحرة ومظهر براق مناسب لحفلات الاستقبال والسهرات.', extraAed: 120 },
        { name: 'أورجانزا فرنسية مجعدة', desc: 'طبقة علوية خفيفة كالنسيم مع أساور محددة ومظهر عصري.', extraAed: 150 },
        { name: 'مخمل إيطالي وجاكار مطرز', desc: 'فخامة شتوية مميزة مع خيوط زري ذهبية بارزة.', extraAed: 180 },
      ]
    : [
        { name: 'Royal Dubai Nida (Zero-Sheen)', desc: 'Breathable, ultra-soft matte drape. The hallmark of authentic Emirati couture.', extraAed: 0 },
        { name: 'Japanese Luxury Crepe', desc: 'Wrinkle-resistant heavy fall with exquisite texture and fluid drape.', extraAed: 60 },
        { name: 'Liquid Mulberry Silk & Satin', desc: 'Luminous light-catching luster for galas and evening celebrations.', extraAed: 120 },
        { name: 'Pure French Crushed Organza', desc: 'Sheer ethereal top-layer with structured modern cuffs.', extraAed: 150 },
        { name: 'Italian Crushed Velvet & Jacquard', desc: 'Rich tactile winter warmth with gold thread accents.', extraAed: 180 },
      ];

  const colors = isRtl
    ? [
        { name: 'أسود ملكي فاخر', hex: '#0a0a0a' },
        { name: 'زمردي داكن', hex: '#064e3b' },
        { name: 'ذهبي شامبين ورمال الصحراء', hex: '#d4af37' },
        { name: 'عنابي فاخر داكن', hex: '#4a0404' },
        { name: 'رمادي صخري دخاني', hex: '#374151' },
        { name: 'أخضر ميرمية ناعم', hex: '#6b7280' },
      ]
    : [
        { name: 'Midnight Obsidian Black', hex: '#0a0a0a' },
        { name: 'Royal Emerald Green', hex: '#064e3b' },
        { name: 'Desert Dune Champagne', hex: '#d4af37' },
        { name: 'Deep Burgundy Velvet', hex: '#4a0404' },
        { name: 'Smoky Twilight Grey', hex: '#374151' },
        { name: 'Soft Muted Sage', hex: '#6b7280' },
      ];

  const embroideries = isRtl
    ? [
        { name: 'حواف ناعمة بدون تطريز', desc: 'مظهر ناعم وبسيط بحياكة فرنسية دقيقة بدون كريستال.', extraAed: 0 },
        { name: 'شك كريستال سواروفسكي على الأكمام', desc: 'حبات كريستال دقيقة مشكوكة يدوياً تلتقط الضوء عند أطراف الأكمام.', extraAed: 95 },
        { name: 'تطريز زري ذهبي تراثي', desc: 'زخارف هندسية عربية بخيوط الذهب الفاخرة على طول الياقة والأكمام.', extraAed: 140 },
        { name: 'دانتيل فرنسي بارز', desc: 'تطريزات دانتيل ناعمة ومفرغة عند الأكتاف ونهايات الأكمام.', extraAed: 165 },
      ]
    : [
        { name: 'Minimalist Raw Trim', desc: 'No crystals, clean French seam hemline.', extraAed: 0 },
        { name: 'Swarovski Crystal Cuffs', desc: 'Hand-sewn micro-crystals catching light along sleeve edges.', extraAed: 95 },
        { name: 'Gold Metallic Zari Borders', desc: 'Traditional Arabesque geometric gold embroidery along the lapel.', extraAed: 140 },
        { name: 'French Floral Corded Lace', desc: 'Scalloped lace appliqués across shoulders and sleeve hems.', extraAed: 165 },
      ];

  const selectedSil = silhouettes.find(s => s.name === silhouette) || silhouettes[0];
  const selectedFab = fabrics.find(f => f.name === fabric) || fabrics[0];
  const selectedEmb = embroideries.find(e => e.name === embroidery) || embroideries[0];

  const sheilaFee = matchingSheila ? 65 : 0;
  const monogramFee = monogramInitials.trim() ? 45 : 0;
  const totalPriceAed = selectedSil.basePrice + selectedFab.extraAed + selectedEmb.extraAed + sheilaFee + monogramFee;

  const handleCompleteCustomOrder = () => {
    const customProduct: NouraProduct = {
      id: `bespoke-${Date.now()}`,
      name: isRtl ? `عباية تفصيل خاص: ${silhouette}` : `Bespoke Couture ${silhouette}`,
      category: 'Bespoke Atelier',
      collection: 'BESPOKE COUTURE',
      priceAED: totalPriceAed,
      originalPriceAED: Math.round(totalPriceAed * 1.2),
      badge: 'EXCLUSIVE',
      colorOptions: [{ name: color, hex: colorHex }],
      sizes: [`${lengthInch}" Length / ${fitStyle}`],
      fabric,
      fit: fitStyle,
      closure: isRtl ? 'أزرار طقطق يدوية وحزام مطابق' : 'Handcrafted Snap Buttons & Matching Belt',
      finishingDetails: `${embroidery}${monogramInitials ? ` • ${isRtl ? 'مونوغرام:' : 'Monogram:'} ${monogramInitials.toUpperCase()}` : ''}${matchingSheila ? ` • ${isRtl ? 'مع طرحة مطابقة' : 'With Matching Sheila'}` : ''}`,
      occasion: isRtl ? 'تفصيل كوتور خاص' : 'Bespoke Haute Couture',
      care: isRtl ? 'غسيل جاف فقط / كي بالبخار' : 'Dry clean only / Steam iron on reverse',
      rating: 5.0,
      reviewsCount: 1,
      image: selectedSil.image,
      secondaryImages: [selectedSil.image],
      overview: isRtl
        ? `عباية مفصلة خصيصاً في أتيليه دار نورة بحي دبي للتصميم (d3). مصنوعة من ${fabric} بلون ${color}، بطول ${lengthInch} بوصة، و${embroidery}.`
        : `Individually handcrafted bespoke abaya made to order at NOURA Atelier in Dubai Design District (d3). Featuring ${fabric} in ${color}, custom length ${lengthInch}", ${embroidery}.`,
      isNewArrival: true,
      isBestseller: true,
      inStock: true
    };

    if (onAddToCart) {
      onAddToCart(customProduct, `${lengthInch}"`, color, 1);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1500);
  };

  const whatsappMessage = encodeURIComponent(
    isRtl
      ? `مرحباً أتيليه نورة عباية دبي،\n\nأود طلب تفصيل عباية مخصصة بالمواصفات التالية:\n- القصة: ${silhouette}\n- القماش: ${fabric}\n- اللون: ${color}\n- الطول: ${lengthInch} بوصة\n- نمط المقاس: ${fitStyle}\n- التطريز: ${embroidery}\n- الطرحة المطابقة: ${matchingSheila ? 'نعم' : 'لا'}\n- الحروف الأولى: ${monogramInitials || 'بدون'}\n- السعر التقديري: ${formatPrice(totalPriceAed)}\n\nيرجى تأكيد موعد بدء التفصيل في أتيليه دبي (d3).`
      : `Hello NOURA ABAYA Atelier Concierge,\n\nI would like to place a Bespoke Custom Abaya Order:\n- Silhouette: ${silhouette}\n- Fabric: ${fabric}\n- Color: ${color}\n- Length: ${lengthInch} inches\n- Fit: ${fitStyle}\n- Embellishment: ${embroidery}\n- Matching Sheila: ${matchingSheila ? 'Yes' : 'No'}\n- Monogram: ${monogramInitials || 'None'}\n- Estimated Price: ${formatPrice(totalPriceAed)}\n\nPlease confirm fabrication timeline at the d3 Atelier.`
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
          {/* Header Bar */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-[#0A0A0A]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#1a1a1a] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] block">
                  {isRtl ? 'استوديو التفصيل والكوتور الخاص' : 'BESPOKE ATELIER COUTURE STUDIO'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#FAFAFA]">
                  {isRtl ? 'صممي عبايتك الإماراتية المخصصة' : 'Design Your Custom Emirati Abaya'}
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

          {/* Stepper Tabs */}
          <div className="grid grid-cols-4 border-b border-stone-800 bg-[#0e0e0e] font-mono text-xs">
            {[
              { step: 1, label: isRtl ? '١. القصة' : '1. Silhouette', icon: Sparkles },
              { step: 2, label: isRtl ? '٢. القماش واللون' : '2. Fabric & Color', icon: Palette },
              { step: 3, label: isRtl ? '٣. القياسات' : '3. Measurements', icon: Ruler },
              { step: 4, label: isRtl ? '٤. التطريز' : '4. Embellishments', icon: Layers },
            ].map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step as any)}
                className={`py-3.5 px-2 text-center border-b-2 font-bold transition-all truncate ${
                  activeStep === s.step
                    ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                    : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                <span className="truncate">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
            
            {/* STEP 1: SILHOUETTE */}
            {activeStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    {isRtl ? 'اختاري القصة والتصميم الأساسي للعباية' : 'Select Your Signature Cut & Draping Silhouette'}
                  </h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    {isRtl ? 'كل قصة مصممة ومحاكة بعناية لتمنحكِ الراحة التامة والحشمة الراقية.' : 'Each cut is tailored with inner shoulder reinforcing for all-day comfort.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {silhouettes.map((sil) => (
                    <div
                      key={sil.name}
                      onClick={() => setSilhouette(sil.name)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between group ${
                        silhouette === sil.name
                          ? 'bg-[#1a1a1a] border-[#C5A059] shadow-xl shadow-[#C5A059]/10'
                          : 'bg-[#0A0A0A] border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-serif font-bold text-base text-white group-hover:text-[#C5A059] transition-colors">
                            {sil.name}
                          </h5>
                          <span className="font-mono text-xs font-bold text-[#C5A059]">
                            {formatPrice(sil.basePrice)}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 font-light leading-relaxed mb-4">
                          {sil.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-stone-800/80 font-mono text-[11px]">
                        <span className="text-stone-500">{isRtl ? 'تفصيل أتيليه دبي (d3)' : 'Tailored in Dubai d3'}</span>
                        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                          silhouette === sil.name ? 'bg-[#C5A059] text-black' : 'bg-white/5 text-stone-400'
                        }`}>
                          {silhouette === sil.name ? (isRtl ? 'محدد' : 'Selected') : (isRtl ? 'اختيار' : 'Select')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: FABRIC & COLOR */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    {isRtl ? 'اختاري نوع القماش الملكي ودرجة اللون' : 'Choose Authentic Fabric & Color Palette'}
                  </h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    {isRtl ? 'أقمشة مستوردة ومختارة مباشرة من أرقى بيوت النسيج في اليابان وفرنسا وإيطاليا.' : 'Directly sourced from premier mills in Dubai, Kyoto, and Lyon.'}
                  </p>
                </div>

                {/* Fabric Selection */}
                <div className="space-y-2.5">
                  <label className="text-[10px] font-mono text-stone-400 uppercase font-bold block">
                    {isRtl ? 'نوع القماش' : 'FABRIC MATERIAL'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    {fabrics.map((fab) => (
                      <div
                        key={fab.name}
                        onClick={() => setFabric(fab.name)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          fabric === fab.name
                            ? 'bg-[#1a1a1a] border-[#C5A059]'
                            : 'bg-[#0A0A0A] border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-serif font-bold text-sm text-white">{fab.name}</span>
                          <span className="text-[#C5A059] font-bold">
                            {fab.extraAed === 0 ? (isRtl ? 'مشمول' : 'Included') : `+${formatPrice(fab.extraAed)}`}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 font-sans">{fab.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div className="space-y-2.5">
                  <label className="text-[10px] font-mono text-stone-400 uppercase font-bold block">
                    {isRtl ? 'درجة اللون' : 'COLOR SELECTION'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                    {colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          setColor(c.name);
                          setColorHex(c.hex);
                        }}
                        className={`p-3 rounded-xl border flex items-center gap-3 text-left rtl:text-right transition-all ${
                          color === c.name
                            ? 'bg-[#1a1a1a] border-[#C5A059]'
                            : 'bg-[#0A0A0A] border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-xs text-white truncate">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: MEASUREMENTS & LENGTH */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    {isRtl ? 'تحديد الطول بالبوصة ونمط القصة' : 'Custom Length & Sizing Matrix'}
                  </h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    {isRtl ? 'المقاس الإماراتي المعتمد يُقاس من أعلى الكتف وحتى أسفل الكعب بالبوصة.' : 'Standard UAE abaya length is measured from shoulder top to bottom floor hem.'}
                  </p>
                </div>

                {/* Length Slider */}
                <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-stone-800 font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-300 font-bold">{isRtl ? 'طول العباية (بالبوصة):' : 'Abaya Hem Length (Inches):'}</span>
                    <span className="text-2xl font-serif font-bold text-[#C5A059]" dir="ltr">{lengthInch}"</span>
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="62"
                    step="2"
                    value={lengthInch}
                    onChange={(e) => setLengthInch(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />

                  {/* Height guide */}
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-stone-400 pt-2 border-t border-stone-800">
                    <div><span>52" (152 – 157cm)</span></div>
                    <div><span>54" (158 – 162cm)</span></div>
                    <div><span>56" (163 – 167cm)</span></div>
                    <div><span>58" (168 – 174cm)</span></div>
                  </div>
                </div>

                {/* Fit Preference */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-stone-400 uppercase font-bold block">
                    {isRtl ? 'نمط القصة والوسع' : 'FIT & CUT PREFERENCE'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                    {(['Standard Regular', 'Relaxed Modest Flare', 'Tailored Slim'] as const).map((fit) => {
                      const fitLabel = isRtl
                        ? (fit === 'Standard Regular' ? 'قصة عادية كلاسيكية' : fit === 'Relaxed Modest Flare' ? 'كلوش واسع ومريح' : 'قصة مستقيمة محددة')
                        : fit;

                      return (
                        <button
                          key={fit}
                          onClick={() => setFitStyle(fit)}
                          className={`p-4 rounded-xl border text-center font-bold transition-all ${
                            fitStyle === fit
                              ? 'bg-[#C5A059] text-black border-[#C5A059]'
                              : 'bg-[#0A0A0A] text-stone-300 border-stone-800 hover:text-white'
                          }`}
                        >
                          {fitLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Monogram Option */}
                <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-stone-800 font-mono text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-stone-300 font-bold">
                      {isRtl ? `تطريز الحروف الأولى بالخيط الذهبي (+${formatPrice(45)}):` : `Gold Thread Monogram Initials (+${formatPrice(45)}):`}
                    </label>
                    <span className="text-stone-500 text-[10px]">{isRtl ? 'حتى 3 أحرف' : 'Up to 3 Letters'}</span>
                  </div>
                  <input
                    type="text"
                    maxLength={3}
                    value={monogramInitials}
                    onChange={(e) => setMonogramInitials(e.target.value.toUpperCase())}
                    placeholder={isRtl ? 'مثال: ن.ع' : 'e.g. NAK'}
                    className="w-full p-3 rounded-xl bg-[#121212] border border-stone-800 text-white tracking-widest uppercase font-serif text-base focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: EMBELLISHMENTS & SUMMARY */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    {isRtl ? 'التطريز اليدوي وملخص تفاصيل الطلب' : 'Artisanal Embellishments & Order Review'}
                  </h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    {isRtl ? 'تطريز وشك يدوي متقن في أتيليه حي دبي للتصميم.' : 'Hand-finished by our master seamstresses in our Dubai Design District atelier.'}
                  </p>
                </div>

                {/* Embellishments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  {embroideries.map((emb) => (
                    <div
                      key={emb.name}
                      onClick={() => setEmbroidery(emb.name)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        embroidery === emb.name
                          ? 'bg-[#1a1a1a] border-[#C5A059]'
                          : 'bg-[#0A0A0A] border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-serif font-bold text-sm text-white">{emb.name}</span>
                        <span className="text-[#C5A059] font-bold">
                          {emb.extraAed === 0 ? (isRtl ? 'مشمول' : 'Included') : `+${formatPrice(emb.extraAed)}`}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-400 font-sans">{emb.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Matching Sheila Option */}
                <div
                  onClick={() => setMatchingSheila(!matchingSheila)}
                  className={`p-4 rounded-xl border cursor-pointer font-mono text-xs flex items-center justify-between ${
                    matchingSheila
                      ? 'bg-[#1a1a1a] border-[#C5A059]'
                      : 'bg-[#0A0A0A] border-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                      matchingSheila ? 'bg-[#C5A059] border-[#C5A059] text-black' : 'border-stone-700'
                    }`}>
                      {matchingSheila && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <span className="text-white font-bold block">
                        {isRtl ? `إضافة طرحة شيفون فاخرة متطابقة اللون (+${formatPrice(65)})` : `Include Color-Matched Luxury Sheila (+${formatPrice(65)})`}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {isRtl ? 'مقاس 2.25م × 0.75م بحواف متطابقة مع تطريز العباية' : '2.25m x 0.75m Chiffon with identical edge piping'}
                      </span>
                    </div>
                  </div>
                  <span className="text-[#C5A059] font-bold">+{formatPrice(65)}</span>
                </div>

                {/* Live Specification Summary Card */}
                <div className="p-5 rounded-2xl bg-[#0A0A0A] border border-[#C5A059]/40 font-mono text-xs space-y-2">
                  <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                    <span className="text-[10px] text-stone-400 uppercase font-bold">
                      {isRtl ? 'ملخص مواصفات التفصيل الخاص' : 'BESPOKE ORDER CONFIGURATION'}
                    </span>
                    <span className="text-xl font-serif font-bold text-[#C5A059]">
                      {isRtl ? `الإجمالي: ${formatPrice(totalPriceAed)}` : `TOTAL: ${formatPrice(totalPriceAed)}`}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-300 pt-1">
                    <div><span>• {isRtl ? 'القصة:' : 'Cut:'} <strong className="text-white">{silhouette}</strong></span></div>
                    <div><span>• {isRtl ? 'القماش:' : 'Fabric:'} <strong className="text-white">{fabric}</strong></span></div>
                    <div><span>• {isRtl ? 'اللون:' : 'Color:'} <strong className="text-white">{color}</strong></span></div>
                    <div><span>• {isRtl ? 'الطول:' : 'Length:'} <strong className="text-white" dir="ltr">{lengthInch}"</strong></span></div>
                    <div><span>• {isRtl ? 'التطريز:' : 'Accents:'} <strong className="text-white">{embroidery}</strong></span></div>
                    <div><span>• {isRtl ? 'الطرحة:' : 'Sheila:'} <strong className="text-white">{matchingSheila ? (isRtl ? 'مشمولة' : 'Included') : (isRtl ? 'بدون' : 'None')}</strong></span></div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Fixed Footer Bar */}
          <div className="p-6 border-t border-stone-800 bg-[#0A0A0A] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-stone-400">
                {isRtl ? `الخطوة ${activeStep} من ٤` : `Step ${activeStep} of 4`}
              </span>
              {activeStep > 1 && (
                <button
                  onClick={() => setActiveStep((prev) => (prev - 1) as any)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-stone-300 font-mono text-xs"
                >
                  {isRtl ? 'السابق' : 'Previous'}
                </button>
              )}
              {activeStep < 4 && (
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) as any)}
                  className="px-4 py-1.5 rounded-lg bg-[#C5A059] text-black font-mono text-xs font-bold"
                >
                  {isRtl ? 'الخطوة التالية' : 'Next Step'}
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/971508889900?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{isRtl ? 'مراسلة الأتيليه واتساب' : 'WhatsApp Atelier'}</span>
              </a>

              <button
                onClick={handleCompleteCustomOrder}
                className="flex-1 sm:flex-initial py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-black" />
                <span>{isAdded ? (isRtl ? 'تمت الإضافة للحقيبة!' : 'Added to Bag!') : (isRtl ? `إضافة للحقيبة (${formatPrice(totalPriceAed)})` : `Add to Bag (${formatPrice(totalPriceAed)})`)}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
