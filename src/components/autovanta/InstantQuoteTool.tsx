'use client';

import React, { useState } from 'react';
import { Wrench, ArrowRight, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface InstantQuoteToolProps {
  onOpenBookingModal: () => void;
}

export const InstantQuoteTool: React.FC<InstantQuoteToolProps> = ({ onOpenBookingModal }) => {
  const { language, t, toArabicDigits, formatPrice } = useAutovantaLanguage();
  const [vehicleCategory, setVehicleCategory] = useState('japanese'); // japanese, european, american, luxury
  const [serviceType, setServiceType] = useState('minor'); // minor, major, brakes, ac, diagnostics, ppi
  const [modelYear, setModelYear] = useState('2022');

  // Estimate Model
  const calculateEstimate = () => {
    let baseAED = 350;
    let turnaroundEn = "2 Hours";
    let turnaroundAr = "ساعتان";

    if (serviceType === 'minor') {
      baseAED = 350;
      turnaroundEn = "2 to 3 Hours";
      turnaroundAr = "٢ إلى ٣ ساعات";
    } else if (serviceType === 'major') {
      baseAED = 850;
      turnaroundEn = "4 to 6 Hours";
      turnaroundAr = "٤ إلى ٦ ساعات";
    } else if (serviceType === 'brakes') {
      baseAED = 450;
      turnaroundEn = "2 to 3 Hours";
      turnaroundAr = "٢ إلى ٣ ساعات";
    } else if (serviceType === 'ac') {
      baseAED = 480;
      turnaroundEn = "3 to 4 Hours";
      turnaroundAr = "٣ إلى ٤ ساعات";
    } else if (serviceType === 'diagnostics') {
      baseAED = 290;
      turnaroundEn = "1 to 2 Hours";
      turnaroundAr = "١ إلى ٢ ساعة";
    } else if (serviceType === 'ppi') {
      baseAED = 490;
      turnaroundEn = "2 Hours";
      turnaroundAr = "ساعتان";
    }

    let multiplier = 1.0;
    if (vehicleCategory === 'european') multiplier = 1.35;
    else if (vehicleCategory === 'luxury') multiplier = 1.75;
    else if (vehicleCategory === 'american') multiplier = 1.15;

    const minPrice = Math.round(baseAED * multiplier);
    const maxPrice = Math.round(minPrice * 1.25);

    return {
      minPrice,
      maxPrice,
      turnaround: language === 'ar' ? turnaroundAr : turnaroundEn
    };
  };

  const est = calculateEstimate();

  const categories = [
    {
      id: 'japanese',
      labelEn: 'Japanese / Asian (Toyota, Nissan, Lexus)',
      labelAr: 'ياباني / آسيوي (تويوتا، نيسان، لكزس)'
    },
    {
      id: 'european',
      labelEn: 'German / European (BMW, Mercedes, Audi)',
      labelAr: 'ألماني / أوروبي (بي إم دبليو، مرسيدس، أودي)'
    },
    {
      id: 'american',
      labelEn: 'American (Ford, GMC, Jeep, Chevy)',
      labelAr: 'أمريكي (فورد، جي إم سي، جيب، شفروليه)'
    },
    {
      id: 'luxury',
      labelEn: 'High-Performance (Porsche, Range Rover)',
      labelAr: 'فاخر وعالي الأداء (بورشه، رينج روفر)'
    }
  ];

  return (
    <section id="quote-tool" className="py-24 bg-[#121315] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 backdrop-blur-md">
            <Wrench className="w-4 h-4 text-[#FF5722]" />
            <span className="text-xs font-mono font-bold text-orange-200 uppercase tracking-widest">
              {t('quoteBadge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t('quoteTitle')}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-light">
            {t('quoteSubtitle')}
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#181A1D] border border-orange-500/20 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Sparkles className="w-4 h-4 text-[#FF5722]" />
              <h3 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">
                {language === 'ar' ? '١. تحديد نوع وفئة السيارة والخدمة' : '1. VEHICLE & SERVICE SPECIFICATIONS'}
              </h3>
            </div>

            {/* Vehicle Category */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase font-bold">
                {t('quoteMakeLabel')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setVehicleCategory(cat.id)}
                    className={`p-3.5 rounded-2xl font-bold text-xs text-left rtl:text-right transition-all font-mono leading-relaxed border ${
                      vehicleCategory === cat.id
                        ? 'bg-[#FF5722] text-white border-[#FF5722] shadow-lg shadow-orange-950/40'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10'
                    }`}
                  >
                    {language === 'ar' ? cat.labelAr : cat.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase font-bold">
                {t('quoteServiceTypeLabel')}
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full py-3.5 px-4 rounded-xl bg-[#121315] border border-white/15 text-white font-medium text-xs sm:text-sm focus:outline-none focus:border-[#FF5722]"
              >
                <option value="minor">
                  {language === 'ar' ? 'صيانة دورية بسيطة (تبديل زيت تخليقي + فحص ٥٠ نقطة)' : 'Minor Servicing (Full Synthetic Oil + 50-Point Inspection)'}
                </option>
                <option value="major">
                  {language === 'ar' ? 'صيانة كبرى شاملة (شمعات الاحتراق + كافة الفلاتر والزيوت)' : 'Major Servicing (Spark Plugs, All Filters, Fluid Flushes)'}
                </option>
                <option value="brakes">
                  {language === 'ar' ? 'صيانة الفرامل (فحمات سيراميك أصلية + خرط الهوبات)' : 'Brake Pad & Rotor Machining Service (Ceramic Pads)'}
                </option>
                <option value="ac">
                  {language === 'ar' ? 'إصلاح التكييف وشحن الغاز للحرارة العالية (٥٠° مئوية)' : 'Extreme-Heat 50°C AC Gas Recovery & Compressor Overhaul'}
                </option>
                <option value="diagnostics">
                  {language === 'ar' ? 'فحص وبرمجة كمبيوتر شاملة وكشف لمبة المحرك' : 'OBD3 Diagnostic Computer Troubleshooting & Scan'}
                </option>
                <option value="ppi">
                  {language === 'ar' ? 'فحص شامل من ١٢٠ نقطة قبل شراء سيارة مستعملة (PPI)' : 'Pre-Purchase Used Car Inspection (120-Point Report)'}
                </option>
              </select>
            </div>

            {/* Model Year Quick Selector */}
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-2 uppercase font-bold">
                {t('quoteModelYearLabel')}
              </label>
              <div className="flex flex-wrap gap-2">
                {['2025-2026', '2023-2024', '2020-2022', '2016-2019', '2015 & Older'].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setModelYear(yr)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                      modelYear === yr
                        ? 'bg-amber-400 text-black border-amber-400'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {toArabicDigits(yr)}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1012] to-[#141619] p-6 sm:p-8 rounded-3xl border border-orange-500/30 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">
                {language === 'ar' ? 'تقرير التكلفة والوقت التقديري' : 'PROJECTED SERVICE ESTIMATE'}
              </span>

              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 font-mono block mb-1">
                  {t('quoteEstimatedTotal')}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  {language === 'ar'
                    ? `${toArabicDigits(est.minPrice)} – ${toArabicDigits(est.maxPrice)} د.إ`
                    : `AED ${est.minPrice.toLocaleString()} – AED ${est.maxPrice.toLocaleString()}`}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{t('quoteEstimatedTime')}:</span>
                  <span className="text-amber-300 font-bold">{est.turnaround}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{t('quoteWarrantyLabel')}:</span>
                  <span className="text-emerald-400 font-bold">
                    {language === 'ar' ? '١٢ شهراً / ٢٠,٠٠٠ كم' : '12-Month / 20,000 KM'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{language === 'ar' ? 'قطع الغيار:' : 'Parts Standard:'}</span>
                  <span className="text-gray-200 font-bold">
                    {language === 'ar' ? 'قطع أصلية OEM معتمدة' : '100% Genuine OEM / Bosch'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light mb-4 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'تسعير تقديري استرشادي. يتم اعتماد التكلفة النهائية بدقة بعد الفحص الفعلي للسيارة.'
                    : 'Estimate only. Final itemized quote confirmed after physical workshop inspection.'}
                </span>
              </p>

              <button
                onClick={onOpenBookingModal}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-extrabold text-xs tracking-wider uppercase font-mono shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>{t('quoteBookThisService')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};