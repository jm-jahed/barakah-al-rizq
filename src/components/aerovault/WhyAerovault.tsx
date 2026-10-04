'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Clock, DollarSign, Award, Users } from 'lucide-react';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

export const WhyAerovault: React.FC = () => {
  const { lang } = useAerovaultLanguage();

  const pillars = lang === 'ar' ? [
    {
      title: "شبكة سلامة معتمدة ARGUS ذهبية وبلاتينية",
      desc: "يخضع كل مشغل طائرات في شبكتنا لتدقيق سلامة دوري صارم، قيادة قبطانين معتمدين، وسجلات صيانة موثقة.",
      icon: <ShieldCheck className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "جاهزية إقلاع طارئ خلال ٩٠ دقيقة",
      desc: "فريق عمليات طيران متواجد بصالات كبار الشخصيات بمطاري آل مكتوم DWC والبطين لتأمين إقلاعك في زمن قياسي.",
      icon: <Clock className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "دخول التارماك المباشر بسيارات الليموزين",
      desc: "خدمة الوصول بسيارتك الفاخرة حتى درجات سلم الطائرة بصالات إكسيكوجيت، جتكس، ودي سي للطيران.",
      icon: <Plane className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "ضيافة كافيار ومأكولات فاخرة مخصصة",
      desc: "قوائم طعام راقية، أطباق كافيار، إنترنت فضائي عالي السرعة، أجنحة نوم فندقية، وحرية اصطحاب الحيوانات الأليفة.",
      icon: <Award className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "تسعيرات شفافة وشاملة ١٠٠٪ مقدماً",
      desc: "عقود واضحة بدون أي رسوم هبوط خفية، أو تكاليف تموضع غير متوقعة، أو مفاجآت في فواتير الوقود.",
      icon: <DollarSign className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "بروتوكولات سرية دبلوماسية مطلقة",
      desc: "اتفاقيات عدم إفصاح صارمة (NDA) وتخليص جوازات سريع ومحمي لقادة الأعمال، الوفود الحكومية، والشخصيات المرموقة.",
      icon: <Users className="w-6 h-6 text-[#E5C378]" />
    }
  ] : [
    {
      title: "ARGUS Gold & Platinum Safety Network",
      desc: "Every aircraft operator in our fleet access network undergoes rigorous safety audits, dual-pilot command, and verified maintenance logs.",
      icon: <ShieldCheck className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Rapid 90-Minute Emergency Dispatch",
      desc: "Stationed charter brokers en-route at ExecuJet DWC and Al Bateen FBO terminals deliver rapid 90-minute wheels-up dispatch.",
      icon: <Clock className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Direct VIP FBO Tarmac Access",
      desc: "Drive your limousine right up to the aircraft steps at ExecuJet, Jetex, or DC Aviation FBO lounges in Dubai & Abu Dhabi.",
      icon: <Plane className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "Custom VIP Onboard Catering & Amenities",
      desc: "Gourmet fine dining, caviar, satellite Wi-Fi, master suite beds, and pet-in-cabin freedom tailored to your travel profile.",
      icon: <Award className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "100% Upfront All-Inclusive Quotes",
      desc: "Zero hidden landing charges, repositioning fees, or unexpected de-icing surcharges. Transparent upfront contracts.",
      icon: <DollarSign className="w-6 h-6 text-[#E5C378]" />
    },
    {
      title: "100% Privacy & Diplomatic Protocol",
      desc: "Strict non-disclosure agreements (NDAs) and fast-track diplomatic passport clearance for C-suite leaders and royal delegations.",
      icon: <Users className="w-6 h-6 text-[#E5C378]" />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-[#07090E] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {lang === 'ar' ? 'معايير إيروفولت القياسية' : 'THE AEROVAULT STANDARD'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans tracking-tight">
            {lang === 'ar' ? 'لماذا يختار قادة الأعمال إيروفولت' : 'Why Leaders Fly with AEROVAULT'}
          </h2>
          <p className="text-slate-400 text-base font-light leading-relaxed">
            {lang === 'ar'
              ? 'نجمع بين أحدث أساطيل الطيران عابر القارات، سرعة إقلاع خلال ٩٠ دقيقة، وبروتوكولات سرية وأمان لا تضاهى.'
              : 'We combine ultra-long-range jet access with 90-minute FBO dispatch and total privacy protocols.'}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0D1118] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#11161F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#E5C378]/40 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-sans group-hover:text-[#E5C378] transition-colors">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};