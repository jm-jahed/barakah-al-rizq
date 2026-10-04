'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, Globe2, MapPin, Award, Building2, TrendingUp } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  roleEn: string;
  roleAr: string;
  companyEn: string;
  companyAr: string;
  quoteEn: string;
  quoteAr: string;
  locationEn: string;
  locationAr: string;
  region: 'uae' | 'global';
  impactMetricEn: string;
  impactMetricAr: string;
  rating: number;
}

// Canonical UAE + Global Client Testimonials
const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Tariq Al-Mansoor',
    roleEn: 'Managing Director',
    roleAr: 'العضو المنتدب',
    companyEn: 'Apex Capital Real Estate',
    companyAr: 'أبيكس كابيتال العقارية',
    quoteEn: 'WebStudioAE engineered our flagship PropTech platform from scratch. Lead conversions increased by 140% in our first quarter across Downtown Dubai and Palm Jumeirah buyers.',
    quoteAr: 'قامت WebStudioAE بهندسة منصتنا العقارية المتطورة بالكامل. ارتفعت نسبة تحويل العملاء المحتملين بنسبة 140٪ في الربع الأول لمشتري وسط مدينة دبي ونخلة جميرا.',
    locationEn: 'Dubai, UAE',
    locationAr: 'دبي، الإمارات',
    region: 'uae',
    impactMetricEn: '+140% Qualified Inquiries',
    impactMetricAr: '+١٤٠٪ استفسارات مؤكدة',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Julian Thorne',
    roleEn: 'Managing Partner',
    roleAr: 'الشريك الإداري',
    companyEn: 'Thorne & Co. Capital',
    companyAr: 'ثورن آند كو كابيتال',
    quoteEn: 'Finding an agency that combines London-standard bespoke aesthetic design with robust Next.js engineering was rare. WebStudioAE executed our wealth advisory portal flawlessly.',
    quoteAr: 'كان العثور على وكالة تجمع بين التصميم الجمالي المخصص وفق معايير لندن وهندسة البرمجيات القوية أمراً نادراً. نفذت WebStudioAE بوابتنا الاستثمارية ببراعة.',
    locationEn: 'Mayfair, London, UK',
    locationAr: 'مايفير، لندن',
    region: 'global',
    impactMetricEn: 'Institutional-Grade Security',
    impactMetricAr: 'حماية وأمان مؤسسي',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Sarah Jenkins',
    roleEn: 'Senior Partner',
    roleAr: 'شريكة رئيسية',
    companyEn: 'Valor Legal Advisory',
    companyAr: 'فالور للاستشارات القانونية',
    quoteEn: 'The attention to security and corporate elegance was remarkable. Our high-net-worth clients frequently compliment the clarity and responsiveness of our client portal.',
    quoteAr: 'كان الاهتمام بالأمان والأناقة المؤسسية استثنائياً. يثني عملاؤنا ذوو الملاءة المالية العالية باستمرار على وضوح واستجابة بوابة العملاء الخاصة بنا.',
    locationEn: 'DIFC, Dubai',
    locationAr: 'مركز دبي المالي العالمي',
    region: 'uae',
    impactMetricEn: '< 180ms Page Latency',
    impactMetricAr: '< ١٨٠ مللي ثانية استجابة',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Clara Von Berg',
    roleEn: 'Head of Digital',
    roleAr: 'رئيسة القطاع الرقمي',
    companyEn: 'Zurich Private Wealth',
    companyAr: 'زيورخ لإدارة الثروات',
    quoteEn: 'Sub-second performance across European and Middle Eastern edge nodes. The multilingual localized architecture operates with Swiss-grade precision.',
    quoteAr: 'أداء فائق السرعة عبر خوادم الحوسبة السحابية الأوروبية والشرق أوسطية. تعمل البنية الرقمية متعددة اللغات بدقة سويسرية متناهية.',
    locationEn: 'Zurich, Switzerland',
    locationAr: 'زيورخ، سويسرا',
    region: 'global',
    impactMetricEn: 'Swiss Precision Telemetry',
    impactMetricAr: 'دقة هندسية سويسرية',
    rating: 5,
  },
  {
    id: 'rev-5',
    name: 'Hamad Al-Kaabi',
    roleEn: 'Founder & CEO',
    roleAr: 'المؤسس والرئيس التنفيذي',
    companyEn: 'Nexus Serviced Offices',
    companyAr: 'نكسوس للمكاتب المجهزة',
    quoteEn: 'Their custom space calculator engine reduced our initial sales cycle from days to minutes. A truly enterprise-grade digital studio in the UAE.',
    quoteAr: 'محرك حساب المساحات المخصص الذي طوروه اختصر دورة المبيعات الأولية من أيام إلى دقائق. استوديو رقمي بمستوى مؤسسي رائد في الإمارات.',
    locationEn: 'Abu Dhabi, UAE',
    locationAr: 'أبوظبي، الإمارات',
    region: 'uae',
    impactMetricEn: '65% Faster Sales Cycle',
    impactMetricAr: '٦٥٪ سرعة في إتمام الصفقات',
    rating: 5,
  },
  {
    id: 'rev-6',
    name: 'David K. Cheng',
    roleEn: 'Principal Architect',
    roleAr: 'كبير المهندسين',
    companyEn: 'Apex Global Logistics',
    companyAr: 'أبيكس للخدمات اللوجستية',
    quoteEn: 'Real-time API tracking, lightning-quick responsive dashboards, and clean typography. They elevated our international freight platform far beyond competitors.',
    quoteAr: 'تتبع فوري عبر واجهات البرمجة، ولوحات تحكم فائقة الاستجابة، وخطوط طباعية متقنة. ارتقوا بمنصتنا للشحن الدولي متجاوزين المنافسين بمراحل.',
    locationEn: 'Singapore',
    locationAr: 'سنغافورة',
    region: 'global',
    impactMetricEn: 'Real-Time Global Telemetry',
    impactMetricAr: 'تتبع جغرافي فوري',
    rating: 5,
  },
  {
    id: 'rev-7',
    name: 'Elena Rostova',
    roleEn: 'Operations Director',
    roleAr: 'مديرة العمليات',
    companyEn: 'Stayora Holiday Homes',
    companyAr: 'ستايورا لبيوت العطلات',
    quoteEn: 'Direct holiday home bookings increased dramatically after replacing our legacy template. Page speed is instant and DTCM compliance integration is flawless.',
    quoteAr: 'زادت الحجوزات المباشرة لبيوت العطلات بشكل ملحوظ بعد استبدال القالب القديم. سرعة تحميل الصفحات فورية والتكامل مع متطلبات السياحة متقن.',
    locationEn: 'Dubai Marina, UAE',
    locationAr: 'دبي مارينا، الإمارات',
    region: 'uae',
    impactMetricEn: '100% DTCM Integrated',
    impactMetricAr: 'تكامل تام مع دائرة السياحة',
    rating: 5,
  },
  {
    id: 'rev-8',
    name: 'Alexandre De Saint-Germain',
    roleEn: 'Creative Lead',
    roleAr: 'المدير الإبداعي',
    companyEn: 'Maison Saint-Germain',
    companyAr: 'ميزون سان جيرمان',
    quoteEn: 'The digital craftsmanship mirrors the luxury ethos of Paris. The micro-interactions and visual hierarchy reflect true haute horlogerie perfection.',
    quoteAr: 'تعكس البراعة الرقمية روح الفخامة الباريسية الراقية. التفاعلات الدقيقة والتسلسل البصري يجسدان إتقاناً يقارب صناعة الساعات الفاخرة.',
    locationEn: 'Paris, France',
    locationAr: 'باريس، فرنسا',
    region: 'global',
    impactMetricEn: 'Haute Horlogerie UI',
    impactMetricAr: 'تصميم فائق الفخامة',
    rating: 5,
  },
];

// Subcomponent for individual testimonial card with cursor spotlight and interactive star sparkle
const TestimonialCard: React.FC<{ rev: ReviewItem; isAr: boolean; shouldReduceMotion: boolean | null }> = ({
  rev,
  isAr,
  shouldReduceMotion,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-[320px] sm:w-[380px] shrink-0 p-7 rounded-3xl bg-[#14100C] border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl flex flex-col justify-between overflow-hidden md:hover:-translate-y-2 md:hover:border-amber-500/60 md:hover:shadow-[0_20px_50px_rgba(245,158,11,0.18)] cursor-default backdrop-blur-md"
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.25,
            background: isHovered
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.16), transparent 70%)`
              : `radial-gradient(200px circle at 50% 0%, rgba(245, 158, 11, 0.06), transparent 75%)`,
          }}
        />
      )}

      {/* Top Accent Gold Hairline */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300 ${
          isHovered
            ? 'opacity-100 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
            : 'opacity-20 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent'
        }`}
      />

      <div className="relative z-10">
        {/* Top Bar: Rating & Verified Impact Metric */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(rev.rating)].map((_, i) => (
              <motion.span
                key={i}
                animate={isHovered ? { scale: [1, 1.25, 1], rotate: [0, 8, 0] } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="inline-block"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
              </motion.span>
            ))}
            <span className="text-[11px] font-mono font-bold text-amber-300 ml-1">
              {isAr ? '٥.٠' : '5.0'}
            </span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono font-bold truncate max-w-[170px]">
            <TrendingUp className="w-3 h-3 shrink-0" />
            <span className="truncate">{isAr ? rev.impactMetricAr : rev.impactMetricEn}</span>
          </div>
        </div>

        {/* Review Quote Text */}
        <p
          className={`text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 italic transition-colors md:group-hover:text-white ${
            isAr ? 'text-right font-serif' : 'text-left font-sans'
          }`}
        >
          "{isAr ? rev.quoteAr : rev.quoteEn}"
        </p>
      </div>

      {/* Reviewer Details Footer */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center gap-3 transition-colors md:group-hover:border-amber-500/30">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 text-black font-extrabold flex items-center justify-center text-sm shadow-md font-mono shrink-0">
          {rev.name[0]}
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-sm font-bold text-white tracking-tight font-sans truncate transition-colors md:group-hover:text-amber-400">
              {rev.name}
            </h4>
            <span className="text-[10px] font-mono text-gray-400 flex items-center gap-0.5 shrink-0">
              <MapPin className="w-2.5 h-2.5 text-amber-400" />
              <span>{isAr ? rev.locationAr : rev.locationEn}</span>
            </span>
          </div>
          <p
            className={`text-xs text-gray-400 truncate ${
              isAr ? 'text-right font-serif' : 'text-left font-sans'
            }`}
          >
            {isAr ? `${rev.roleAr} • ${rev.companyAr}` : `${rev.roleEn} • ${rev.companyEn}`}
          </p>
        </div>
      </div>
    </article>
  );
};

export const Testimonials: React.FC = () => {
  const [isAr, setIsAr] = useState(false);
  const [regionFilter, setRegionFilter] = useState<'all' | 'uae' | 'global'>('all');
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredReviews = useMemo(() => {
    if (regionFilter === 'all') return REVIEWS_DATA;
    return REVIEWS_DATA.filter((r) => r.region === regionFilter);
  }, [regionFilter]);

  // Duplicate for infinite marquee loop
  const marqueeItems = useMemo(() => {
    return [...filteredReviews, ...filteredReviews];
  }, [filteredReviews]);

  return (
    <section id="reviews" className="py-24 bg-[#0B0907] border-t border-amber-500/15 relative z-10 overflow-hidden font-sans">
      <style>{`
        @keyframes infinite-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
        }
        .marquee-animate {
          animation: infinite-marquee 48s linear infinite;
        }
      `}</style>

      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {}
            }}
            className="max-w-2xl"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4 shadow-lg shadow-amber-500/5"
            >
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest font-mono">
                {isAr ? 'شهادات العملاء والشركاء' : 'VERIFIED CLIENT INTELLIGENCE'}
              </span>
            </motion.div>

            <div className="overflow-hidden pb-1">
              <motion.h2
                variants={{
                  hidden: { y: '80%', opacity: 0, filter: 'blur(4px)' },
                  visible: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] ${
                  isAr ? 'font-serif text-right' : 'font-sans'
                }`}
              >
                {isAr ? 'ماذا يقول عملاؤنا في الإمارات وحول العالم' : 'What UAE & Global Leaders Say'}
              </motion.h2>
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className={`text-base text-gray-400 font-normal leading-relaxed mt-3 ${
                isAr ? 'text-right font-serif' : 'font-sans'
              }`}
            >
              {isAr
                ? 'شهادات موثقة من شركاء الأعمال ومؤسسي المشاريع التجارية عبر الإمارات والأسواق العالمية.'
                : 'Verified outcomes from enterprise partners, founders, and managing directors across Dubai, Abu Dhabi, London, Zurich, and global hubs.'}
            </motion.p>
          </motion.div>

          {/* Controls: Region Filter + Language Switcher */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Region Filter */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <button
                type="button"
                onClick={() => setRegionFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  regionFilter === 'all'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                All ({REVIEWS_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setRegionFilter('uae')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  regionFilter === 'uae'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                UAE Market
              </button>
              <button
                type="button"
                onClick={() => setRegionFilter('global')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  regionFilter === 'global'
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Global
              </button>
            </div>

            {/* Language Switcher */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <button
                type="button"
                onClick={() => setIsAr(false)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  !isAr
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setIsAr(true)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isAr
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-md font-serif'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* INFINITE MARQUEE TRACK */}
      <div
        dir="ltr"
        className="w-full overflow-hidden relative py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        ref={trackRef}
      >
        {/* Subtle Fade Gradients on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0907] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0907] to-transparent z-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`marquee-track ${!shouldReduceMotion ? 'marquee-animate' : ''}`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {marqueeItems.map((rev, idx) => (
              <TestimonialCard
                key={`${rev.id}-${idx}`}
                rev={rev}
                isAr={isAr}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;