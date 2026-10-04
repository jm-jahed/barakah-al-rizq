'use client';

import React, { useState, useMemo } from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA, TechProgram } from '@/data/codeforgeData';

export const ProgramsSection: React.FC = () => {
  const { language, formatPrice, formatNumber, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(20000);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active track for modal
  const [activeTrack, setActiveTrack] = useState<TechProgram | null>(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    CODEFORGE_DATA.programs.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  // Filtered tracks
  const filteredPrograms = useMemo(() => {
    return CODEFORGE_DATA.programs.filter((prog) => {
      if (selectedCategory !== 'all' && prog.category !== selectedCategory) {
        return false;
      }
      if (selectedMode !== 'all') {
        if (!prog.mode.toLowerCase().includes(selectedMode.toLowerCase())) {
          return false;
        }
      }
      if (prog.numericPrice > maxPrice) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitleEn = prog.title.toLowerCase().includes(q);
        const matchTitleAr = prog.titleAr.includes(q);
        const matchDescEn = prog.description.toLowerCase().includes(q);
        const matchDescAr = prog.descriptionAr.includes(q);
        const matchTech = prog.techStack.some((ts) => ts.toLowerCase().includes(q));
        if (!matchTitleEn && !matchTitleAr && !matchDescEn && !matchDescAr && !matchTech) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedMode, maxPrice, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedMode('all');
    setMaxPrice(20000);
    setSearchQuery('');
  };

  const getCategoryLabel = (category: string) => {
    if (language === 'ar') {
      const match = CODEFORGE_DATA.programs.find((p) => p.category === category);
      return match ? match.categoryAr : category;
    }
    return category;
  };

  return (
    <section id="programs" className="bg-[#070A12] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
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
        <div className="bg-[#0D121F] border border-white/[0.08] rounded-2xl p-5 sm:p-6 mb-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider font-mono">
                {language === 'ar' ? 'بحث بالتقنية أو اللغة' : 'Search Tech Stack'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.catalog.filterSearchPlaceholder}
                  className="w-full bg-[#121829] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#38BDF8] font-mono"
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

            {/* Discipline Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider font-mono">
                {t.catalog.filterDiscipline}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#121829] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#38BDF8] cursor-pointer"
              >
                <option value="all">{t.catalog.filterAllCategories}</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {getCategoryLabel(cat)}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider font-mono">
                {t.catalog.filterMode}
              </label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full bg-[#121829] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#38BDF8] cursor-pointer"
              >
                <option value="all">{t.catalog.filterAllModes}</option>
                <option value="Full-Time">{t.catalog.fullTime}</option>
                <option value="Part-Time">{t.catalog.partTime}</option>
                <option value="Hybrid">{t.catalog.hybrid}</option>
                <option value="Online">{t.catalog.online}</option>
              </select>
            </div>

            {/* Max Budget Filter */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  {t.catalog.filterBudget}
                </label>
                <span className="text-xs font-mono font-bold text-[#38BDF8]">
                  {formatPrice(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min="14000"
                max="20000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#38BDF8] bg-[#121829] h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Active Filter Bar & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] text-xs text-slate-400">
            <div className="font-mono">
              {t.catalog.showingResults.replace('{count}', formatNumber(filteredPrograms.length))}
            </div>

            {(selectedCategory !== 'all' || selectedMode !== 'all' || maxPrice < 20000 || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#38BDF8] hover:underline cursor-pointer"
              >
                <span>✕</span>
                <span>{t.catalog.resetFilters}</span>
              </button>
            )}
          </div>
        </div>

        {/* Tracks Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#0D121F] border border-white/[0.08] hover:border-sky-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/5 group"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                      TRACK {language === 'ar' ? `٠${prog.num}` : prog.num}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400 font-mono">
                      {language === 'ar' ? prog.modeAr : prog.mode}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {language === 'ar' ? prog.titleAr : prog.title}
                  </h3>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-mono">
                    <svg className="w-3.5 h-3.5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{language === 'ar' ? prog.durationAr : prog.duration}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 line-clamp-3 mb-5 leading-relaxed">
                    {language === 'ar' ? prog.descriptionAr : prog.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prog.techStack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {prog.techStack.length > 5 && (
                      <span className="text-[10.5px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                        +{prog.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] uppercase text-slate-400 tracking-wider font-mono">
                      {language === 'ar' ? 'الرسوم الدراسية' : 'Tuition'}
                    </span>
                    <span className="text-base font-black text-white font-mono">
                      {formatPrice(prog.numericPrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveTrack(prog)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-md shadow-sky-500/15 hover:shadow-lg transition-all cursor-pointer font-sans"
                  >
                    <span>{t.catalog.viewCurriculum}</span>
                    <span className={isRtl ? 'rotate-180' : ''}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0D121F] border border-white/[0.08] rounded-2xl max-w-xl mx-auto">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-xl font-mono">
              {'404'}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{t.catalog.noResultsTitle}</h3>
            <p className="text-xs text-slate-400 mb-6">{t.catalog.noResultsSubtitle}</p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#070A12] bg-[#38BDF8] hover:bg-[#7DD3FC] transition-colors"
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        )}
      </div>

      {/* Interactive Curriculum Modal */}
      {activeTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-[#0D121F] border border-white/15 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-scaleUp text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveTrack(null)}
              className={`absolute top-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer ${
                isRtl ? 'left-6' : 'right-6'
              }`}
              aria-label="Close Modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
                  TRACK {language === 'ar' ? `٠${activeTrack.num}` : activeTrack.num}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  {language === 'ar' ? activeTrack.modeAr : activeTrack.mode}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs text-slate-400 font-mono">
                  {language === 'ar' ? activeTrack.durationAr : activeTrack.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {language === 'ar' ? activeTrack.titleAr : activeTrack.title}
              </h3>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-xs sm:text-sm">
              {/* Overview */}
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2 text-[#38BDF8] font-mono">
                  {t.catalog.modalOverview}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeTrack.descriptionAr : activeTrack.description}
                </p>
              </div>

              {/* Target Outcome */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-1.5 text-emerald-400 font-mono">
                  {t.catalog.modalOutcome}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeTrack.outcomeAr : activeTrack.outcome}
                </p>
              </div>

              {/* Production Tech Stack */}
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3 text-[#38BDF8] font-mono">
                  {t.catalog.modalTechStack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeTrack.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#121829] border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6-Module Roadmap */}
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3 text-[#38BDF8] font-mono">
                  {t.catalog.modalCurriculum}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(language === 'ar' ? activeTrack.modulesAr : activeTrack.modules).map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#121829] border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2 font-mono"
                    >
                      <span className="text-[#38BDF8] font-bold">✓</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tuition & Installments */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121829] to-[#0D121F] border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="block text-[11px] uppercase text-slate-400 tracking-wider font-mono">
                    {t.catalog.modalTuition}
                  </span>
                  <span className="text-2xl font-black text-white font-mono">
                    {formatPrice(activeTrack.numericPrice)}
                  </span>
                  <span className="block text-[10.5px] text-slate-400 mt-0.5">
                    {language === 'ar'
                      ? 'متاح بخطط تقسيط شهرية بدون فوائد تصل حتى ٦ أشهر'
                      : '0% Interest Monthly Installment Plans Available (Up to 6 Months)'}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                  <a
                    href="#apply"
                    onClick={() => setActiveTrack(null)}
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-lg shadow-sky-500/20 text-center font-sans"
                  >
                    <span>{t.catalog.modalApply}</span>
                    <span className={isRtl ? 'rotate-180' : ''}>→</span>
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
