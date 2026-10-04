'use client';

import React from 'react';
import { Building2, ShieldCheck, Check, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface GroundProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const VipGroundServices: React.FC<GroundProps> = ({ onOpenContactModal }) => {
  const { lang, isRtl, t } = useSkyvaultLanguage();

  const groundFeatures = lang === 'ar' ? [
    { title: "هناجر مكيفة بمساحة ٨,٠٠٠ م²", desc: "مساحات خاصة بمجمع إكسيكوجيت DWC ومطار البطين لحماية الطائرات من حرارة وغبار الصيف." },
    { title: "مناولة المدرج ومعدات GPU", desc: "خدمات سحب الطائرات ٢٤/٧، وحدات الطاقة الأرضية، تزويد المياه، وعقود الوقود المخفضة." },
    { title: "حماية الطلاء والعناية بالفرش الداخلي", desc: "تطبيق طبقات الحماية السيراميكية، تنظيف وتعقيم الفرش الجلدي الفاخر بأحدث التقنيات." },
    { title: "دخول التارماك المباشر بالليموزين", desc: "إنهاء إجراءات الجوازات بخصوصية تامة ووصول السيارات الفاخرة مباشرة حتى سلم الطائرة." }
  ] : [
    { title: "Climate-Controlled Hangar Bays", desc: "8,000 m² private hangar space at DWC ExecuJet protected from extreme summer heat and dust." },
    { title: "Dedicated Ramp Handling & Tug", desc: "24/7 towing, GPU power units, water service, and direct discounted fuel uplift contracts." },
    { title: "Aircraft Detailing & Preservation", desc: "Ceramic paint protection, leather conditioning, and deep VIP cabin sanitation protocols." },
    { title: "Direct Tarmac Limousine Access", desc: "Private customs clearance and VIP limousine drive-up straight to aircraft steps." }
  ];

  return (
    <section id="ground" className="py-24 bg-[#0D1118] text-white relative border-y border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t('ground.tag')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-sans">
              {t('ground.title')}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              {t('ground.subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {groundFeatures.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#11161F] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-sans">
                    <Check className="w-4 h-4 text-[#E5C378] shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenContactModal('VIP Hangarage Inquiry')}
                className="px-8 py-4 rounded-2xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs font-mono uppercase tracking-wider shadow-2xl transition-all flex items-center gap-2"
              >
                <span>{t('ground.cta')}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#07090E] p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
                  alt="SKYVAULT Climate Controlled Hangar DWC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-[#E5C378]/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E5C378] uppercase block">
                      {t('ground.badge')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block mt-0.5 font-sans">
                      {t('ground.badgeSub')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};