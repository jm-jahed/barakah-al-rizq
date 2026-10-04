'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Search, ShieldCheck, Plane } from 'lucide-react';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

export const HowWeWork: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useAerovaultLanguage();

  const steps = lang === 'ar' ? [
    {
      num: '٠١',
      title: 'طلب الرحلة',
      subtitle: 'تحديد المسار والجدول الزمني',
      desc: 'شاركنا مطار الإقلاع المفضل، الوجهة المطلوبة، عدد الركاب، وموعد المغادرة المرغوب بدقة.',
      icon: <FileText className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '٠٢',
      title: 'تخصيص الطائرة',
      subtitle: 'مطابقة الأسطول المعتمد',
      desc: 'يقوم وسطاء إيروفولت فوراً بمطابقة مسارك مع أكثر من ١٥٠ طائرة نفاثة معتمدة بمعايير ARGUS الذهبية.',
      icon: <Search className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '٠٣',
      title: 'تأكيد الحجز',
      subtitle: 'عقد شفاف وتصاريح رسمية',
      desc: 'تأكيد التسعيرة الشاملة الثابتة، قائمة الركاب، وإنهاء إجراءات العبور والتصاريح الدبلوماسية.',
      icon: <ShieldCheck className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '٠٤',
      title: 'الإقلاع VIP',
      subtitle: 'صالات كبار الشخصيات والتارماك',
      desc: 'الوصول لصالة كبار الشخصيات قبل ١٥ دقيقة فقط، نقل مباشر لسلم الطائرة، والانطلاق نحو وجهتك.',
      icon: <Plane className="w-5 h-5 text-[#E5C378]" />
    }
  ] : [
    {
      num: '01',
      title: 'REQUEST',
      subtitle: 'Submit Flight Route & Details',
      desc: 'Submit your preferred departure FBO terminal, target destination, passenger count, and desired timing.',
      icon: <FileText className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '02',
      title: 'MATCH',
      subtitle: 'Global Fleet Sourcing',
      desc: 'Our charter flight brokers instantly match your route across 150+ ARGUS-certified private jets en-route.',
      icon: <Search className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '03',
      title: 'CONFIRM',
      subtitle: 'Flight Agreement & Manifest',
      desc: 'Lock in your fixed-price contract, passenger manifest, and diplomatic fast-track customs clearance.',
      icon: <ShieldCheck className="w-5 h-5 text-[#E5C378]" />
    },
    {
      num: '04',
      title: 'FLY',
      subtitle: 'VIP FBO Terminal Boarding',
      desc: 'Arrive at ExecuJet DWC or Al Bateen FBO 15 minutes before departure, step onto your jet, and take off.',
      icon: <Plane className="w-5 h-5 text-[#E5C378]" />
    }
  ];

  return (
    <section className="py-24 bg-[#07090E] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {lang === 'ar' ? 'بروتوكول حجز وإقلاع إيروفولت' : 'THE AEROVAULT CHARTER PROTOCOL'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans">
            {lang === 'ar' ? 'كيف نعمل' : 'How We Work'}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            {lang === 'ar'
              ? 'إطار عمل طيران تنفيذي متكامل من ٤ خطوات لتأمين رحلات كبار الشخصيات في أقل من ٩٠ دقيقة.'
              : 'A rapid 4-step business aviation framework delivering VIP charter flights in under 90 minutes.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-[#0D1118] border border-white/10 shadow-xl flex flex-col justify-between group hover:border-[#E5C378]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#E5C378]/30 font-mono group-hover:text-[#E5C378] transition-colors">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 font-mono uppercase tracking-wider">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-[#E5C378] mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  {lang === 'ar' ? `المرحلة ${step.num} من ٠٤` : `STAGE ${step.num} OF 04`}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};