'use client';

import React, { useState, useMemo } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA, CourseItem } from '@/data/eduvantaData';

export const CourseCatalog: React.FC = () => {
  const { language, formatPrice, formatNumber, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(7000);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected course for detail modal
  const [activeCourse, setActiveCourse] = useState<CourseItem | null>(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    EDUVANTA_DATA.courses.forEach((c) => set.add(c.category));
    return Array.from(set);
  }, []);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return EDUVANTA_DATA.courses.filter((course) => {
      // Category filter
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false;
      }
      // Format filter
      if (selectedFormat !== 'all' && course.format !== selectedFormat) {
        return false;
      }
      // Price filter
      if (course.numericPrice > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitleEn = course.title.toLowerCase().includes(q);
        const matchTitleAr = course.titleAr.includes(q);
        const matchDescEn = course.description.toLowerCase().includes(q);
        const matchDescAr = course.descriptionAr.includes(q);
        const matchCatEn = course.category.toLowerCase().includes(q);
        const matchCatAr = course.categoryAr.includes(q);
        if (!matchTitleEn && !matchTitleAr && !matchDescEn && !matchDescAr && !matchCatEn && !matchCatAr) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedFormat, maxPrice, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedFormat('all');
    setMaxPrice(7000);
    setSearchQuery('');
  };

  const getFormatBadgeColor = (format: string) => {
    switch (format) {
      case 'In-Person':
        return 'bg-amber-500/10 text-[#E5C378] border-[#E5C378]/30';
      case 'Online':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      case 'Hybrid':
      default:
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
    }
  };

  const getCategoryLabel = (category: string) => {
    if (language === 'ar') {
      const match = EDUVANTA_DATA.courses.find(c => c.category === category);
      return match ? match.categoryAr : category;
    }
    return category;
  };

  const getFormatLabel = (format: string) => {
    if (format === 'In-Person') return t.catalog.inPerson;
    if (format === 'Online') return t.catalog.online;
    return t.catalog.hybrid;
  };

  return (
    <section id="courses" className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.catalog.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.catalog.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Control Console */}
        <div className="bg-[#0D1118] border border-white/[0.08] rounded-2xl p-5 sm:p-6 mb-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                {language === 'ar' ? 'بحث بالاسم أو الكلمة' : 'Search Programs'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.catalog.filterSearchPlaceholder}
                  className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E5C378] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs ${
                      isRtl ? 'left-3' : 'right-3'
                    }`}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Discipline / Category Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                {t.catalog.filterDiscipline}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378] transition-colors cursor-pointer"
              >
                <option value="all">{t.catalog.filterAllCategories}</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {getCategoryLabel(cat)}
                  </option>
                ))}
              </select>
            </div>

            {/* Format Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                {t.catalog.filterFormat}
              </label>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full bg-[#11161F] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E5C378] transition-colors cursor-pointer"
              >
                <option value="all">{t.catalog.filterAllFormats}</option>
                <option value="Hybrid">{t.catalog.hybrid}</option>
                <option value="In-Person">{t.catalog.inPerson}</option>
                <option value="Online">{t.catalog.online}</option>
              </select>
            </div>

            {/* Max Budget Filter */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {t.catalog.filterBudget}
                </label>
                <span className="text-xs font-mono font-bold text-[#E5C378]">
                  {formatPrice(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="7000"
                step="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#E5C378] bg-[#11161F] h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Active Filter Bar & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] text-xs text-slate-400">
            <div>
              {t.catalog.showingResults.replace('{count}', formatNumber(filteredCourses.length))}
            </div>

            {(selectedCategory !== 'all' || selectedFormat !== 'all' || maxPrice < 7000 || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E5C378] hover:underline cursor-pointer"
              >
                <span>✕</span>
                <span>{t.catalog.resetFilters}</span>
              </button>
            )}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#0D1118] border border-white/[0.08] hover:border-[#E5C378]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 group"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                      {language === 'ar' ? course.categoryAr : course.category}
                    </span>
                    <span
                      className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border ${getFormatBadgeColor(
                        course.format
                      )}`}
                    >
                      {getFormatLabel(course.format)}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#E5C378] transition-colors leading-snug">
                    {language === 'ar' ? course.titleAr : course.title}
                  </h3>

                  {/* Schedule & Duration Specs */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#E5C378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {language === 'ar' ? course.durationAr : course.duration}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                    {language === 'ar' ? course.descriptionAr : course.description}
                  </p>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400 tracking-wider">
                      {language === 'ar' ? 'الرسوم الدراسية' : 'Tuition'}
                    </span>
                    <span className="text-base font-black text-white font-mono">
                      {formatPrice(course.numericPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveCourse(course)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-md shadow-[#E5C378]/15 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>{t.catalog.viewProgram}</span>
                    <span className={isRtl ? 'rotate-180' : ''}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0D1118] border border-white/[0.08] rounded-2xl max-w-xl mx-auto">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-xl">
              🔍
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.catalog.noResultsTitle}</h3>
            <p className="text-xs text-slate-400 mb-6">{t.catalog.noResultsSubtitle}</p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#07090E] bg-[#E5C378] hover:bg-[#F0D595] transition-colors"
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        )}
      </div>

      {/* Interactive Course Detail Modal / Drawer */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-[#0D1118] border border-white/15 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-scaleUp text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCourse(null)}
              className={`absolute top-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer ${
                isRtl ? 'left-6' : 'right-6'
              }`}
              aria-label="Close Modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {language === 'ar' ? activeCourse.categoryAr : activeCourse.category}
                </span>
                <span className="text-white/20">•</span>
                <span
                  className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full border ${getFormatBadgeColor(
                    activeCourse.format
                  )}`}
                >
                  {getFormatLabel(activeCourse.format)}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  {language === 'ar' ? activeCourse.durationAr : activeCourse.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {language === 'ar' ? activeCourse.titleAr : activeCourse.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E5C378] font-mono">
                {t.catalog.modalCertification}: {language === 'ar' ? activeCourse.certificationAr : activeCourse.certification}
              </p>
            </div>

            {/* Modal Body Sections */}
            <div className="space-y-6 text-xs sm:text-sm">
              {/* Program Overview */}
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2 text-[#E5C378]">
                  {t.catalog.modalOverview}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeCourse.descriptionAr : activeCourse.description}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1.5 text-emerald-400">
                  {language === 'ar' ? 'المخرجات المهنية المستهدفة' : 'Measurable Career Outcome'}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeCourse.outcomeAr : activeCourse.outcome}
                </p>
              </div>

              {/* Who It Is For */}
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2 text-[#E5C378]">
                  {t.catalog.modalWhoIsFor}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeCourse.targetAudienceAr : activeCourse.targetAudience}
                </p>
              </div>

              {/* Curriculum Modules */}
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3 text-[#E5C378]">
                  {t.catalog.modalWhatYouLearn}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'ar' ? activeCourse.syllabusAr : activeCourse.syllabus).map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#11161F] border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-[#E5C378] font-bold">✓</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tuition & Financial Support */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#11161F] to-[#0D1118] border border-[#E5C378]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="block text-[11px] uppercase text-slate-400 tracking-wider">
                    {t.catalog.modalTuition}
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    {formatPrice(activeCourse.numericPrice)}
                  </span>
                  <span className="block text-[10.5px] text-slate-400 mt-0.5">
                    {language === 'ar'
                      ? 'متاح بخطط تقسيط شهرية بدون فوائد (٣ أو ٦ أشهر)'
                      : '0% Interest Monthly Installments Available (3 or 6 Months)'}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                  <a
                    href="#enroll"
                    onClick={() => setActiveCourse(null)}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/20 text-center"
                  >
                    <span>{t.catalog.modalEnrollNow}</span>
                    <span className={isRtl ? 'rotate-180' : ''}>→</span>
                  </a>

                  <a
                    href={EDUVANTA_DATA.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-center"
                  >
                    <span>{t.catalog.talkToAdvisor}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
