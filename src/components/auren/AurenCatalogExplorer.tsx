'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  FileText, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  PieChart,
  PhoneCall,
  Lock,
  Briefcase
} from 'lucide-react';
import { 
  AUREN_200_CATALOG, 
  AUREN_CATALOG_CATEGORIES, 
  AurenCategoryFilter, 
  AurenCatalogService 
} from '@/data/aurenCatalogData';

interface AurenCatalogExplorerProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const AurenCatalogExplorer: React.FC<AurenCatalogExplorerProps> = ({
  onOpenConsultationWithService
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AurenCategoryFilter>('All Asset Disciplines');
  const [selectedService, setSelectedService] = useState<AurenCatalogService | null>(null);
  const [filterComplexity, setFilterComplexity] = useState<'All' | 'Preservation' | 'Balanced Growth' | 'Opportunistic Alpha'>('All');

  const filteredCatalog = useMemo(() => {
    return AUREN_200_CATALOG.filter((item) => {
      const matchesCategory = selectedCategory === 'All Asset Disciplines' || item.category === selectedCategory;
      const matchesComplexity = filterComplexity === 'All' || item.complexity === filterComplexity;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.regulatoryRef.toLowerCase().includes(q) ||
        item.deliverables.some((d) => d.toLowerCase().includes(q));

      return matchesCategory && matchesComplexity && matchesSearch;
    });
  }, [searchQuery, selectedCategory, filterComplexity]);

  const handleSelectService = (service: AurenCatalogService) => {
    setSelectedService(service);
  };

  const handleBookService = (service: AurenCatalogService) => {
    if (onOpenConsultationWithService) {
      onOpenConsultationWithService(service.title);
    }
  };

  return (
    <section id="catalog" className="py-24 relative bg-[#060A0E] border-t border-b border-[#D4AF37]/20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Institutional Fiduciary Practice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
              200+ Wealth, Private Equity &amp; Family Office Mandates
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed font-sans">
              Explore our discrete, institutional-grade practice scopes across discretionary portfolio structuring, direct private equity co-investments, DIFC/ADGM foundations, and corporate treasury.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-4 bg-[#0D131C] p-3.5 rounded-2xl border border-white/10 shadow-xl self-start lg:self-auto">
            <div className="text-right">
              <span className="block text-2xl font-extrabold text-[#D4AF37] font-mono leading-none">
                {AUREN_200_CATALOG.length}+
              </span>
              <span className="text-[11px] text-gray-400 font-mono">Mandate Scopes</span>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div className="text-left">
              <span className="block text-2xl font-extrabold text-white font-mono leading-none">DIFC · ADGM</span>
              <span className="text-[11px] text-gray-400 font-mono">Rule of Law</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          
          {/* Top Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by asset class, mandate, code (e.g. Sukuk, Pre-IPO, SFO, DIFC Will, Treasury)..."
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-[#0C121B] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/20 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Complexity Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0C121B] border border-white/10 overflow-x-auto">
              {(['All', 'Preservation', 'Balanced Growth', 'Opportunistic Alpha'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setFilterComplexity(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    filterComplexity === lvl
                      ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {AUREN_CATALOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border ${
                    isSelected
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/50 shadow-md shadow-[#D4AF37]/10'
                      : 'bg-white/[0.02] text-gray-400 hover:text-white border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6 px-1">
          <span>Displaying <strong className="text-[#D4AF37]">{filteredCatalog.length}</strong> fiduciary mandate scopes</span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Asset Disciplines'); setFilterComplexity('All'); }}
              className="text-[#D4AF37] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCatalog.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group relative bg-[#090E16] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.12)] hover:-translate-y-1"
            >
              <div>
                {/* Top Code Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-white/[0.04] text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Mandate Title */}
                <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Regulatory Reference */}
                <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]/90 font-mono mb-3 line-clamp-1">
                  <Lock className="w-3 h-3 shrink-0" />
                  <span>{item.regulatoryRef}</span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4 font-sans">
                  {item.description}
                </p>

                {/* Deliverables Snippet */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                  {item.deliverables.slice(0, 2).map((del, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-300 font-mono line-clamp-1">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: AUM & CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-gray-400 block font-mono">Entry Threshold</span>
                  <span className="text-xs font-bold font-mono text-emerald-400">
                    {item.minimumAum.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectService(item)}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-mono font-semibold border border-white/10 transition-colors cursor-pointer"
                  >
                    Scope
                  </button>
                  <button
                    type="button"
                    onClick={() => handleBookService(item)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#c5a059] text-black text-xs font-mono font-bold transition-all hover:shadow-md hover:shadow-[#D4AF37]/30 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Mandate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCatalog.length === 0 && (
          <div className="text-center py-16 bg-[#0C121B] rounded-2xl border border-white/10">
            <PieChart className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1 font-serif">No matching advisory scopes found</h4>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-4 font-sans">
              Try adjusting your search query or selecting "All Asset Disciplines" to view all 200+ private wealth mandates.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Asset Disciplines'); setFilterComplexity('All'); }}
              className="px-4 py-2 rounded-xl bg-[#D4AF37] text-black font-bold font-mono text-xs cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>

      {/* Slide-over Detail Drawer */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-[#080D14] border-l border-[#D4AF37]/30 z-50 p-6 sm:p-8 overflow-y-auto shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                      {selectedService.code}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{selectedService.category}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-serif font-extrabold text-white mb-2 leading-tight">
                  {selectedService.title}
                </h3>
                
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-mono mb-5 flex items-center gap-2">
                  <Lock className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                  <span>Regulatory Standard: {selectedService.regulatoryRef}</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal font-sans">
                  {selectedService.description}
                </p>

                {/* Deliverables List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Engagement Deliverables &amp; Artifacts</span>
                  </h4>
                  <div className="space-y-2 bg-[#0E1520] p-4 rounded-xl border border-white/5">
                    {selectedService.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#0E1520] border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 block mb-1">Execution Timeframe</span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{selectedService.timeframe}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0E1520] border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 block mb-1">Strategy Complexity</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono block">
                      {selectedService.complexity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block">Minimum Capital Requirement</span>
                    <span className="text-lg font-extrabold font-mono text-emerald-400">
                      {selectedService.minimumAum.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                    Fiduciary Duty Mandate
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const service = selectedService;
                      setSelectedService(null);
                      if (onOpenConsultationWithService) {
                        onOpenConsultationWithService(service.title);
                      }
                    }}
                    className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c5a059] text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 cursor-pointer"
                  >
                    <span>Request Mandate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/971509988440?text=Hello%20AUREN%20CAPITAL,%20I%20would%20like%20to%20request%20confidential%20terms%20for%20mandate%20${encodeURIComponent(selectedService.code)}%20(${encodeURIComponent(selectedService.title)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Direct WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};
