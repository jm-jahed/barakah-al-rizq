'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
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
  Calculator,
  Download,
  PhoneCall
} from 'lucide-react';
import { 
  LEDGERA_200_CATALOG, 
  LEDGERA_CATALOG_CATEGORIES, 
  CatalogCategoryFilter, 
  LedgeraCatalogService 
} from '@/data/ledgeraCatalogData';

interface LedgeraCatalogExplorerProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const LedgeraCatalogExplorer: React.FC<LedgeraCatalogExplorerProps> = ({
  onOpenConsultationWithService
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategoryFilter>('All Categories');
  const [selectedService, setSelectedService] = useState<LedgeraCatalogService | null>(null);
  const [filterComplexity, setFilterComplexity] = useState<'All' | 'Standard' | 'Advanced' | 'Enterprise'>('All');

  // Filtered Catalog
  const filteredCatalog = useMemo(() => {
    return LEDGERA_200_CATALOG.filter((item) => {
      const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
      const matchesComplexity = filterComplexity === 'All' || item.complexity === filterComplexity;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.subCategory.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.ftaRef.toLowerCase().includes(q) ||
        item.deliverables.some((d) => d.toLowerCase().includes(q));

      return matchesCategory && matchesComplexity && matchesSearch;
    });
  }, [searchQuery, selectedCategory, filterComplexity]);

  const handleSelectService = (service: LedgeraCatalogService) => {
    setSelectedService(service);
  };

  const handleBookService = (service: LedgeraCatalogService) => {
    if (onOpenConsultationWithService) {
      onOpenConsultationWithService(service.title);
    }
  };

  return (
    <section id="catalog" className="py-24 relative bg-[#090D14] border-t border-b border-emerald-500/15 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Comprehensive UAE Practice Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              200+ Regulated UAE Tax, VAT &amp; Accounting Services
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mt-3 font-normal leading-relaxed">
              Explore our complete statutory portfolio covering Corporate Tax (9%), VAT returns, IFRS bookkeeping, external audit liaison, and executive CFO advisory.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-4 bg-[#111722] p-3.5 rounded-2xl border border-white/10 shadow-xl self-start lg:self-auto">
            <div className="text-right">
              <span className="block text-2xl font-extrabold text-emerald-400 font-mono leading-none">
                {LEDGERA_200_CATALOG.length}+
              </span>
              <span className="text-[11px] text-gray-400 font-mono">Service Scopes</span>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div className="text-left">
              <span className="block text-2xl font-extrabold text-white font-mono leading-none">100%</span>
              <span className="text-[11px] text-gray-400 font-mono">FTA Aligned</span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-10">
          
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, regulation ref, code (e.g. QFZP, VAT 201, WPS, IFRS 16)..."
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-[#111722] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono"
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

            {/* Complexity Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111722] border border-white/10 overflow-x-auto">
              {(['All', 'Standard', 'Advanced', 'Enterprise'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setFilterComplexity(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    filterComplexity === lvl
                      ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs Scrollbar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {LEDGERA_CATALOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border ${
                    isSelected
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                      : 'bg-white/[0.02] text-gray-400 hover:text-white border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count Strip */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-6 px-1">
          <span>Showing <strong className="text-emerald-400">{filteredCatalog.length}</strong> statutory practice scopes</span>
          {searchQuery && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); setFilterComplexity('All'); }}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCatalog.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group relative bg-[#0E141F] border border-white/10 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.12)] hover:-translate-y-1"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-white/[0.04] text-emerald-400 border border-emerald-500/25">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Regulation Reference */}
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-mono mb-3 line-clamp-1">
                  <FileText className="w-3 h-3 shrink-0" />
                  <span>{item.ftaRef}</span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Deliverables Snippet */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                  {item.deliverables.slice(0, 2).map((del, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-300 font-mono line-clamp-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                  {item.deliverables.length > 2 && (
                    <span className="text-[10px] text-emerald-400 font-mono pl-4.5 block">
                      + {item.deliverables.length - 2} more deliverables
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Pricing & Action */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-gray-400 block font-mono">Statutory Fee</span>
                  <span className="text-xs font-bold font-mono text-white">
                    {item.pricing.priceLabel}
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
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold transition-all hover:shadow-md hover:shadow-emerald-500/30 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Retain</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCatalog.length === 0 && (
          <div className="text-center py-16 bg-[#111722] rounded-2xl border border-white/10">
            <Calculator className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No matching service scopes found</h4>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-4">
              Try adjusting your search query or selecting "All Categories" to view all 200+ UAE tax &amp; accounting services.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); setFilterComplexity('All'); }}
              className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-bold font-mono text-xs cursor-pointer"
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full max-w-xl bg-[#0C121D] border-l border-emerald-500/30 z-50 p-6 sm:p-8 overflow-y-auto shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
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

                {/* Title & Description */}
                <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">
                  {selectedService.title}
                </h3>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono mb-5 flex items-center gap-2">
                  <FileText className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>FTA Statutory Ref: {selectedService.ftaRef}</span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                  {selectedService.description}
                </p>

                {/* Key Deliverables List */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Included Engagement Deliverables</span>
                  </h4>
                  <div className="space-y-2 bg-[#111927] p-4 rounded-xl border border-white/5">
                    {selectedService.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operational Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#111927] border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 block mb-1">Standard Turnaround</span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white font-mono">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{selectedService.turnaround}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#111927] border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 block mb-1">Practice Complexity</span>
                    <span className="text-xs font-bold text-amber-400 font-mono block">
                      {selectedService.complexity} Grade
                    </span>
                  </div>
                </div>

                {/* Applicable Client Tiers */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2">Ideal Client Entity Structure:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedService.clientTiers.map((tier, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-300">
                        {tier}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block">Pricing Structure</span>
                    <span className="text-lg font-extrabold font-mono text-emerald-400">
                      {selectedService.pricing.priceLabel}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    FTA Certified Practice
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
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer"
                  >
                    <span>Retain Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/971509988440?text=Hello%20LEDGERA,%20I%20would%20like%20to%20retain%20service%20${encodeURIComponent(selectedService.code)}%20(${encodeURIComponent(selectedService.title)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Desk</span>
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
