'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, DollarSign, Building2, Users, Award, CheckCircle2 } from 'lucide-react';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const WhySkyvault: React.FC = () => {
  const { lang, t } = useSkyvaultLanguage();

  const pillars = lang === 'ar' ? [
    {
      title: "اعتماد GCAA CAMO (ترخيص AWR-048)",
      desc: "إشراف هندسي وتنظيمي معتمد يتابع كل مهمة صيانة لحماية القيمة السوقية للطائرة وضمان سلامة الركاب بنسبة ١٠٠٪.",
      benefit: "حماية القيمة السوقية عند إعادة البيع",
      icon: <ShieldCheck className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "تعظيم عوائد التأجير التجاري (AOC)",
      desc: "إدراج الطائرة في رخصة النقل الجوي يتيح تأجيرها لعملاء نخبة معتمدين أثناء فترات التوقف مع تحويل شهري شفاف للأرباح.",
      benefit: "تعويض حتى ٧٠٪ من التكاليف الثابتة",
      icon: <DollarSign className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "هناجر DWC المكيفة بمساحة ٨,٠٠٠ م²",
      desc: "مساحات خاصة ومحمية بمجمع إكسيكوجيت DWC تحمي أجهزة إلكترونيات الطيران وطلاء الهيكل من حرارة وغبار الصيف.",
      benefit: "بيئة صيانة وتخزين فندقية مثالية",
      icon: <Building2 className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "قباطنة مرخصون على الطراز وتدريب CAE",
      desc: "إدارة عقود الطيارين المرخصين وإلزامهم بالتدريب نصف السنوي في محاكيات CAE و FlightSafety الدولية المتقدمة.",
      benefit: "أعلى جاهزية وكفاءة طيران وأمان",
      icon: <Users className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "أسعار وقود ومناولة مخفضة عالمياً",
      desc: "عقود مجمعة لشراء وقود الطيران وخدمات صالات FBO بخصومات هائلة تُمرر مباشرة للمالك بهامش ربح ٠٪.",
      benefit: "وفورات مباشرة على كل رحلة",
      icon: <Award className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "شفافية مالية مطلقة وتقارير رقمية",
      desc: "دفاتر حسابات شهرية مدققة ومفصلة، سجلات صيانة رقمية متاحة على مدار الساعة، ومدير حسابات طيران تنفيذي مكرس.",
      benefit: "وضوح مالي تام بدون رسوم خفية",
      icon: <FileCheck className="w-6 h-6 text-[#E5C378]" />
    }
  ] : [
    {
      title: "GCAA Approved CAMO (AWR-048)",
      desc: "Full civil aviation airworthiness management tracking every maintenance task to protect resale value and passenger safety.",
      benefit: "Preserves Long-Term Asset Resale Value",
      icon: <ShieldCheck className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Maximized Charter Revenue Offsets",
      desc: "Placing your aircraft on our GCAA AOC generates net owner revenue from selective third-party charters during idle weeks.",
      benefit: "Offsets Up to 70% of Fixed Operating Overhead",
      icon: <DollarSign className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Climate-Controlled DWC Hangarage",
      desc: "Dedicated 8,000 m² climate-controlled hangar bays at ExecuJet DWC protecting avionics and paintwork from extreme UAE summer heat.",
      benefit: "Pristine Aircraft Preservation Year-Round",
      icon: <Building2 className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Vetted Type-Rated Flight Crew",
      desc: "Experienced Type-Rated Captains managed under compliant UAE contracts with bi-annual CAE and FlightSafety simulator training.",
      benefit: "Top-Tier Flight Safety & Operating Standards",
      icon: <Users className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Global Fuel & Handling Discounts",
      desc: "Consolidated volume fuel contracts and FBO handling discounts passed directly to aircraft owners with 0% markup.",
      benefit: "Direct Direct Cost Reductions on Every Flight",
      icon: <Award className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Complete Financial Transparency",
      desc: "Itemized monthly accounting ledgers, digital maintenance logs, and 24/7 dedicated personal aviation account director.",
      benefit: "Zero Hidden Fees or Markups on Parts",
      icon: <FileCheck className="w-6 h-6 text-[#E5C378]" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#0D1118] text-white relative border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('why.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            {t('why.title')}
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#11161F] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#07090E] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#E5C378]/40 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 font-sans group-hover:text-[#E5C378] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#E5C378]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{p.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};