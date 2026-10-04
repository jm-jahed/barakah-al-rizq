'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  ArrowLeft,
  FileCheck, 
  CreditCard, 
  Briefcase, 
  Building2, 
  Globe, 
  FileText, 
  Crown, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Language, TYPING_SERVICES_DATA, ServiceItem } from '@/data/typingCenterData';

interface ServiceDirectoryProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenAppointment: (serviceId?: string) => void;
  initialCategory?: string;
}

export default function ServiceDirectory({
  lang,
  onSelectService,
  onOpenAppointment,
  initialCategory = 'all'
}: ServiceDirectoryProps) {
  const isAr = lang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelEn: 'All Services (25+)', labelAr: 'كافة الخدمات (25+)' },
    { id: 'visa', labelEn: 'Visa & Immigration', labelAr: 'التأشيرات والإقامة' },
    { id: 'emirates-id', labelEn: 'Emirates ID', labelAr: 'الهوية الإماراتية' },
    { id: 'tasheel', labelEn: 'Tasheel / MOHRE', labelAr: 'تسهيل والعمل' },
    { id: 'business', labelEn: 'Business & PRO', labelAr: 'خدمات الشركات' },
    { id: 'translation', labelEn: 'Translation & Attestation', labelAr: 'الترجمة والتصديقات' },
    { id: 'ejari', labelEn: 'Ejari & Property', labelAr: 'إيجاري والعقارات' },
    { id: 'golden-visa', labelEn: 'Golden / Green Visa', labelAr: 'الإقامة الذهبية والخضراء' },
  ];

  // Filter logic
  const filteredServices = useMemo(() => {
    return TYPING_SERVICES_DATA.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const matchSearch =
        item.nameEn.toLowerCase().includes(q) ||
        item.nameAr.includes(q) ||
        item.authority.toLowerCase().includes(q) ||
        item.authorityAr.includes(q) ||
        item.shortDescEn.toLowerCase().includes(q) ||
        item.shortDescAr.includes(q) ||
        item.requirementsEn.some((r) => r.toLowerCase().includes(q)) ||
        item.requirementsAr.some((r) => r.includes(q));

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-[#060913] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <FileCheck className="w-3.5 h-3.5" />
              <span>{isAr ? 'دليل الخدمات الحكومية الشامل' : 'COMPLETE UAE SERVICE DIRECTORY'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {isAr ? 'اختر الخدمة وتعرّف على الشروط والرسوم' : 'Search & Explore UAE Government Services'}
            </h2>
            <p className="text-sm text-slate-300">
              {isAr
                ? 'استعرض أكثر من 25 خدمة معتمدة تشمل الهوية، التأشيرات، تصاريح العمل، توثيق إيجاري والتصديقات القانونية.'
                : 'Browse our complete catalog of certified services across Emirates ID, residency, Tasheel work permits, Ejari, and foreign attestation.'}
            </p>
          </div>

          {/* Search Bar in Header */}
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحث عن خدمة، هوية، إيجاري...' : 'Search visa, ID, Ejari...'}
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2.5 rounded-xl bg-white/[0.04] border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400 font-mono"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                  : 'bg-white/[0.03] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-[#072617] border border-slate-800 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/50 group relative overflow-hidden"
              >
                {/* Top Glowing Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/0 group-hover:via-amber-400 to-transparent transition-all" />

                <div className="space-y-4">
                  {/* Category & Authority Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase">
                      {isAr ? service.categoryLabelAr : service.categoryLabelEn}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{isAr ? service.processingTimeAr : service.processingTimeEn}</span>
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {isAr ? service.nameAr : service.nameEn}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {isAr ? service.shortDescAr : service.shortDescEn}
                    </p>
                  </div>

                  {/* Pricing Overview Pill */}
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-slate-800/80 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{isAr ? 'رسوم الطباعة والتدقيق:' : 'Typing & Audit Fee:'}</span>
                      <span className="font-mono font-bold text-amber-400">AED {service.typingFeeMin}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">{isAr ? 'الرسوم الحكومية التقديرية:' : 'Gov Statutory Fee:'}</span>
                      <span className="font-mono text-slate-300">
                        AED {service.govtFeeMin} {service.govtFeeMax !== service.govtFeeMin ? ` - ${service.govtFeeMax}` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Key Requirements Highlights */}
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono text-slate-400">
                      {isAr ? 'المستندات الأساسية المطلوبة:' : 'Essential Documents:'}
                    </p>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {(isAr ? service.requirementsAr : service.requirementsEn).slice(0, 2).map((req, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300 truncate">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-amber-500/10 transition-all cursor-pointer"
                  >
                    <span>{isAr ? 'تفاصيل الشروط والرسوم' : 'Inspect Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>

                  <button
                    onClick={() => onOpenAppointment(service.id)}
                    className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-400 text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isAr ? 'تقديم الطلب' : 'Start Service'}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl bg-white/[0.02] border border-slate-800 space-y-3">
            <p className="text-slate-400 text-sm font-mono">
              {isAr ? 'لم يتم العثور على خدمة مطابقة لبحثك' : 'No matching services found for your query'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold"
            >
              {isAr ? 'إعادة ضبط البحث' : 'Reset Filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
