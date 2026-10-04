'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const ProgramFinderTool: React.FC = () => {
  const { lang, isRtl, formatPrice, toArabicDigits } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].finder;

  const [age, setAge] = useState('18-24m');
  const [schedule, setSchedule] = useState('full-day');
  const [priority, setPriority] = useState('bilingual');
  const [hasSibling, setHasSibling] = useState(false);

  // Derive recommendation
  const getRecommendation = () => {
    if (age === '6-12m' || age === '12-18m') {
      const basePrice = 3200;
      const finalPrice = hasSibling ? basePrice * 0.9 : basePrice;
      return {
        title: isRtl ? 'جناح الرضع (بيبي روم)' : 'Baby Room',
        ageRange: isRtl ? '٦ إلى ١٨ شهراً' : '6 – 18 Months',
        ratio: isRtl ? 'نسبة رعاية ١:٣ فائقة' : '1:3 Care Ratio',
        basePrice,
        finalPrice,
        period: 'month' as const,
        why: isRtl
          ? 'بيئة هادئة ومجهزة بالمثيرات الحسية مع نسبة ممرضة لكل ٣ أطفال لرعاية المؤشرات الحركية والتغذية الصحية وتوفير أعلى درجات الأمان النفسي.'
          : 'Serene sensory nursery environment with a dedicated 1:3 nurse ratio for gentle infant milestones, responsive care, and pureed nutrition.',
        highlights: isRtl
          ? ['ممرضات معتمدات بدوام كامل', 'فلاتر هواء طبية HEPA', 'متابعة مصورة حية للأهل']
          : ['Full-time Pediatric Nurses', 'Medical HEPA Air Purifiers', 'Live App Daily Photo Logs']
      };
    } else if (age === '18-24m' || age === '2-3y') {
      const basePrice = 3800;
      const finalPrice = hasSibling ? basePrice * 0.9 : basePrice;
      return {
        title: isRtl ? 'برنامج البراعم (تودلرز)' : 'Toddler Program',
        ageRange: isRtl ? '١٨ شهراً إلى ٣ سنوات' : '18 Months – 3 Years',
        ratio: isRtl ? 'نسبة رعاية ١:٥' : '1:5 Care Ratio',
        basePrice,
        finalPrice,
        period: 'month' as const,
        why: isRtl
          ? 'استكشاف نشط قائم على اللعب يحفز التحدث باللغتين العربية والإنجليزية، والتدريب اللطيف على استخدام الحمام، وتطوير المهارات الحركية والفنية.'
          : 'Active play-based discovery fostering bilingual Arabic/English speech, gentle toilet training independence, and fine motor creative arts.',
        highlights: isRtl
          ? ['انغماس لغوي عربي وإنجليزي', 'ألعاب مائية ورذاذ يومية', 'تدريب لطيف على النظافة']
          : ['Bilingual Arabic/English Immersion', 'Daily Shaded Splash Play', 'Gentle Potty Training Support']
      };
    } else {
      const basePrice = 4400;
      const finalPrice = hasSibling ? basePrice * 0.9 : basePrice;
      return {
        title: isRtl ? 'الروضة التمهيدية (ما قبل الروضة)' : 'Pre-Kindergarten',
        ageRange: isRtl ? '٣ إلى ٤ سنوات' : '3 – 4 Years',
        ratio: isRtl ? 'نسبة معلمة لكل ٦ أطفال' : '1:6 Educator Ratio',
        basePrice,
        finalPrice,
        period: 'month' as const,
        why: isRtl
          ? 'إعداد أكاديمي ولغوي متكامل يبني مهارات القراءة المبكرة والمفاهيم الرياضية والثقة التامة لاجتياز اختبارات قبول المدارس الدولية المرموقة.'
          : 'Early academic and phonetic preparation fostering number concepts, scientific curiosity, and confident performance in UAE school interviews.',
        highlights: isRtl
          ? ['تأهيل كامل للمرحلة الابتدائية', 'مختبر استكشاف STEM المبكر', 'سجل قبول ١٠٠٪ بالمدارس']
          : ['100% Primary Assessment Success', 'Early STEM & Robotics Lab', 'Leadership & Social Confidence']
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="finder" className="py-24 bg-[#0A120D] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            ⚡ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        <div className="bg-[#132219] p-6 sm:p-10 md:p-12 rounded-3xl border border-emerald-800/50 max-w-4xl mx-auto shadow-2xl">
          {/* Interactive Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 1. Age Group */}
            <div>
              <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2.5">
                {tr.step1Title}
              </label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="6-12m">{isRtl ? '٦ - ١٢ شهراً (رضيع)' : '6 – 12 Months (Infant)'}</option>
                <option value="12-18m">{isRtl ? '١٢ - ١٨ شهراً' : '12 – 18 Months'}</option>
                <option value="18-24m">{isRtl ? '١٨ - ٢٤ شهراً (تودلر)' : '18 – 24 Months (Toddler)'}</option>
                <option value="2-3y">{isRtl ? '٢ - ٣ سنوات' : '2 – 3 Years'}</option>
                <option value="3-4y">{isRtl ? '٣ - ٤ سنوات (روضة تمهيدي)' : '3 – 4 Years (Pre-K)'}</option>
              </select>
            </div>

            {/* 2. Schedule */}
            <div>
              <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2.5">
                {tr.step2Title}
              </label>
              <select
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="full-day">{isRtl ? 'دوام كامل (٧:٣٠ ص - ٤:٠٠ م)' : 'Full-Day (7:30 AM - 4:00 PM)'}</option>
                <option value="half-day">{isRtl ? 'نصف دوام صباحي (٧:٣٠ ص - ١:٠٠ م)' : 'Half-Day Morning (7:30 AM - 1:00 PM)'}</option>
                <option value="extended">{isRtl ? 'دوام ممتد (٧:٣٠ ص - ٥:٣٠ م)' : 'Extended Day (7:30 AM - 5:30 PM)'}</option>
              </select>
            </div>

            {/* 3. Priority */}
            <div>
              <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2.5">
                {tr.step3Title}
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-[#0A120D] border border-emerald-700/50 rounded-2xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="bilingual">{isRtl ? 'انغماس ثنائي لغوي متكامل' : 'Bilingual Language Immersion'}</option>
                <option value="settling">{isRtl ? 'تهيئة هادئة بدون بكاء' : 'Gentle Zero-Distress Settling'}</option>
                <option value="school">{isRtl ? 'استعداد لاختبارات المدارس' : 'Primary School Assessment Prep'}</option>
                <option value="sensory">{isRtl ? 'أنشطة حسية وألعاب مائية' : 'Sensory Arts & Splash Play'}</option>
              </select>
            </div>
          </div>

          {/* Sibling Toggle Checkbox */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0A120D]/60 border border-emerald-800/40 mb-8 cursor-pointer" onClick={() => setHasSibling(!hasSibling)}>
            <input
              type="checkbox"
              id="sibling-checkbox"
              checked={hasSibling}
              onChange={(e) => setHasSibling(e.target.checked)}
              className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
            />
            <label htmlFor="sibling-checkbox" className="text-xs sm:text-sm text-emerald-200 cursor-pointer select-none">
              {isRtl ? 'لدي طفل آخر مسجل (تطبيق خصم الأخوة ١٠٪)' : 'Enrolling a sibling (Apply 10% Sibling Discount)'}
            </label>
          </div>

          {/* Recommendation Output Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1A2F22] border border-amber-400/50 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-700/40">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/40 inline-block mb-2">
                  ✨ {tr.resultTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">{rec.title}</h3>
                <span className="text-xs sm:text-sm text-emerald-300 font-medium mt-1 block">
                  🎯 {rec.ageRange} • 👥 {rec.ratio}
                </span>
              </div>
              <div className="text-left md:text-right">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                  {hasSibling ? (isRtl ? 'الرسوم بعد الخصم' : 'DISCOUNTED TUITION') : (isRtl ? 'الرسوم التقديرية' : 'ESTIMATED TUITION')}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-amber-300 mt-1">
                  {formatPrice(rec.finalPrice, rec.period)}
                </div>
                {hasSibling && (
                  <span className="text-[10px] text-emerald-400 font-medium block mt-0.5">
                    {isRtl ? 'وفرت ١٠٪ من الرسوم الأساسية' : 'Saved 10% via Sibling Benefit'}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-6">
              <strong className="text-amber-300 font-bold">{isRtl ? 'لماذا يناسب طفلك:' : 'Why this fits your child:'} </strong>
              {rec.why}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8">
              {rec.highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0A120D]/60 text-xs text-emerald-200 border border-emerald-800/30 flex items-center gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#tour"
                className="w-full sm:w-auto text-center text-xs font-extrabold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
              >
                {tr.bookTourFor} →
              </a>
              <a
                href={LITTLE_HORIZON_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center text-xs font-bold text-emerald-300 border border-emerald-700/50 hover:bg-[#132219] px-6 py-3.5 rounded-xl transition-colors"
              >
                {tr.contactAdvisor}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
