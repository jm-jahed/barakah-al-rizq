'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Wrench, Clock, Truck, RotateCcw } from 'lucide-react';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const WhyAutovanta: React.FC = () => {
  const { language, t } = useAutovantaLanguage();

  const pillars = [
    {
      titleEn: "ASE Certified Master Technicians",
      titleAr: "مهندسون وفنيون معتمدون دولياً",
      descEn: "Our workshop leads are factory-trained master technicians specialized in German, Japanese, American, and luxury supercar diagnostics.",
      descAr: "فريقنا الهندسي مدرب ومعتمد من كبرى الشركات المصنعة ومتخصص في فحص وبرمجة السيارات الألمانية واليابانية والأمريكية والفاخرة.",
      icon: <Award className="w-6 h-6 text-[#FF5722]" />
    },
    {
      titleEn: "Transparent Upfront Pricing",
      titleAr: "تسعير مسبق وشفافية مطلقة",
      descEn: "You receive a clear itemized quote on WhatsApp before any work begins. Zero surprise extra fees on your final bill.",
      descAr: "تستلم تقريراً وتسعيرة مفصلة لكل قطعة وشغل يد عبر واتساب قبل بدء الصيانة. لا توجد أي رسوم إضافية مفاجئة.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FF5722]" />
    },
    {
      titleEn: "100% Genuine & OEM-Equivalent Parts",
      titleAr: "قطع غيار أصلية ومطابقة ١٠٠٪",
      descEn: "We stock authentic factory parts and premium German OEM components (Bosch, Brembo, Liqui Moly, Mobil1) with full warranties.",
      descAr: "نوفر قطع غيار المصنع الأصلية وقطع ألمانية معتمدة من بوش وبريمبو وزيوت ليكوي مولي وموبيل ١ مع الضمان الكامل.",
      icon: <Wrench className="w-6 h-6 text-[#FF5722]" />
    },
    {
      titleEn: "Same-Day Service Options",
      titleAr: "صيانة سريعة وتسليم نفس اليوم",
      descEn: "Minor servicing, brake pad replacements, battery fittings, and AC gas recharging completed within hours so you get back on the road.",
      descAr: "الصيانة الدورية، تغيير الفحمات، تبديل البطاريات، وتعبئة غاز المكيف تنجز خلال ساعات لتعود لرحلتك دون تأخير.",
      icon: <Clock className="w-6 h-6 text-[#FF5722]" />
    },
    {
      titleEn: "Commercial Fleet Capacity",
      titleAr: "طاقة استيعابية عالية للأساطيل",
      descEn: "16 high-clearance lift bays equipped to service light commercial vans, pickup trucks, and corporate passenger fleets with speed.",
      descAr: "١٦ رافعة هيدروليكية مجهزة لصيانة شاحنات التوصيل وسيارات الشركات ومركبات النقل الخفيف بسرعة وكفاءة.",
      icon: <Truck className="w-6 h-6 text-[#FF5722]" />
    },
    {
      titleEn: "12-Month / 20,000km Warranty",
      titleAr: "ضمان معتمد ١٢ شهراً / ٢٠,٠٠٠ كم",
      descEn: "Every repair and part installation is backed by our rock-solid 12-month guarantee covering both labor and replacement parts.",
      descAr: "كافة أعمال الصيانة وقطع الغيار المركبة مشمولة بضمان موثق لمدة عام كامل أو ٢٠,٠٠٠ كم يشمل القطع وأجور الفنيين.",
      icon: <RotateCcw className="w-6 h-6 text-[#FF5722]" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#121315] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('whyBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('whyTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {t('whySubtitle')}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#181A1D] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#121315] border border-white/10 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === 'ar' ? p.titleAr : p.titleEn}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {language === 'ar' ? p.descAr : p.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};