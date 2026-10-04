'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronDown,
  Filter, 
  FileText, 
  Coins, 
  Home, 
  Briefcase, 
  Scale, 
  Wrench, 
  UserCheck, 
  Palmtree, 
  Calculator, 
  ClipboardCheck,
  MessageCircle,
  Copy,
  Check,
  ChevronUp
} from 'lucide-react';
import { 
  NESTORA_200_CATALOG, 
  NESTORA_CATALOG_CATEGORIES, 
  NestoraCatalogService, 
  filterNestoraCatalog,
  NestoraCategoryFilter 
} from '@/data/nestoraCatalogData';
import { NESTORA_BRAND } from '@/data/nestoraData';

interface NestoraCatalogExplorerProps {
  onOpenConsultationWithService?: (serviceName: string) => void;
}

export const NestoraCatalogExplorer: React.FC<NestoraCatalogExplorerProps> = ({
  onOpenConsultationWithService
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<NestoraCategoryFilter>('All Asset Disciplines');
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('All Property Types');
  const [selectedService, setSelectedService] = useState<NestoraCatalogService | null>(null);
  
  // Progressive "See More" State (starts with 12, increments by +18)
  const INITIAL_COUNT = 12;
  const INCREMENT_COUNT = 18;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);
  const [lastExpandedIndex, setLastExpandedIndex] = useState<number | null>(null);

  // Drawer Live Fee Estimator state
  const [drawerRentValue, setDrawerRentValue] = useState<number>(180000);
  const [drawerUnitCount, setDrawerUnitCount] = useState<number>(1);
  const [isCopied, setIsCopied] = useState(false);

  const propertyTypes = [
    'All Property Types',
    'Apartment',
    'Villa / Townhouse',
    'Commercial Office',
    'Retail Shop',
    'Full Building Portfolio'
  ];

  const filteredServices = useMemo(() => {
    return filterNestoraCatalog(
      NESTORA_200_CATALOG,
      searchQuery,
      selectedCategory,
      selectedPropertyType
    );
  }, [searchQuery, selectedCategory, selectedPropertyType]);

  // Reset to initial count when search or filters change
  const handleCategoryChange = (cat: NestoraCategoryFilter) => {
    setSelectedCategory(cat);
    setVisibleCount(INITIAL_COUNT);
    setLastExpandedIndex(null);
  };

  const handlePropertyTypeChange = (pt: string) => {
    setSelectedPropertyType(pt);
    setVisibleCount(INITIAL_COUNT);
    setLastExpandedIndex(null);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setVisibleCount(INITIAL_COUNT);
    setLastExpandedIndex(null);
  };

  const visibleServices = useMemo(() => {
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount]);

  const hasMore = visibleCount < filteredServices.length;
  const remainingCount = filteredServices.length - visibleCount;

  // After clicking "See More", automatically scroll to start of newly loaded products
  const handleSeeMore = () => {
    const nextStartIndex = visibleCount;
    setLastExpandedIndex(nextStartIndex);
    setVisibleCount((prev) => Math.min(filteredServices.length, prev + INCREMENT_COUNT));

    setTimeout(() => {
      const el = document.getElementById(`mandate-item-${nextStartIndex}`);
      if (el) {
        const navOffset = 95;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const handleShowAll = () => {
    const nextStartIndex = visibleCount;
    setLastExpandedIndex(nextStartIndex);
    setVisibleCount(filteredServices.length);

    setTimeout(() => {
      const el = document.getElementById(`mandate-item-${nextStartIndex}`);
      if (el) {
        const navOffset = 95;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 120);
  };

  const handleEnquire = (service: NestoraCatalogService) => {
    setSelectedService(null);
    if (onOpenConsultationWithService) {
      onOpenConsultationWithService(`${service.title} (${service.code})`);
    } else {
      const formEl = document.getElementById('consultation-form');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyScope = (service: NestoraCatalogService) => {
    const scopeText = `NESTORA MANDATE: ${service.title} (${service.code})\nCategory: ${service.category}\nStandard: ${service.reraStandard}\nFee: ${service.pricing.label}\nTimeframe: ${service.timeframe}\n\nDeliverables:\n${service.deliverables.map(d => `- ${d}`).join('\n')}\n\nInquire: ${NESTORA_BRAND.whatsapp}`;
    navigator.clipboard.writeText(scopeText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const calculateEstimatedFee = (service: NestoraCatalogService) => {
    if (service.pricing.billingType === 'Annual % of Rent') {
      const fee = (drawerRentValue * service.pricing.aed) / 100 * drawerUnitCount;
      return `AED ${Math.round(fee).toLocaleString()} / year (${drawerUnitCount} unit${drawerUnitCount > 1 ? 's' : ''})`;
    }
    if (service.pricing.billingType === 'Per Unit Handover') {
      const fee = service.pricing.aed * drawerUnitCount;
      return `AED ${Math.round(fee).toLocaleString()} estimated`;
    }
    if (service.pricing.billingType === 'Fixed Annual Fee') {
      const fee = service.pricing.aed * drawerUnitCount;
      return `AED ${Math.round(fee).toLocaleString()} / year`;
    }
    const fee = service.pricing.aed * drawerUnitCount;
    return `AED ${Math.round(fee).toLocaleString()} / incident`;
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Residential Management': return Home;
      case 'Commercial & Retail': return Briefcase;
      case 'RERA & Legal Compliance': return Scale;
      case 'Preventive Maintenance & AMC': return Wrench;
      case 'Tenant Lifecycle & Leasing': return UserCheck;
      case 'Holiday Home & Short-Term': return Palmtree;
      case 'Financial & Asset Accounting': return Calculator;
      case 'Snagging & Handover': return ClipboardCheck;
      default: return Building2;
    }
  };

  return (
    <section id="catalog" className="py-24 bg-[#06181A] relative border-b border-[#C5A059]/20">
      
      {/* Subtle emerald glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0C2D31]/50 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#C5A059]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C2D31] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-xl">
            <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>222 LANDLORD & ASSET MANAGEMENT MANDATES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#F4EFE6] tracking-tight leading-tight">
            Institutional Asset Catalog.
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-light mt-3 leading-relaxed">
            Search our comprehensive registry of 222 Dubai & Abu Dhabi property management, RERA Ejari compliance, 24/7 preventive maintenance AMCs, and short-term yield optimization scopes.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#0A2226]/90 p-4 sm:p-5 rounded-2xl border border-stone-800 shadow-2xl backdrop-blur-xl mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by mandate code, keyword (e.g., 'Ejari', 'AMC', 'Snagging', 'Villa', 'Holiday Home', '90-Day')..."
                className="w-full bg-[#06181A] border border-stone-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#F4EFE6] placeholder:text-stone-500 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Property Type Dropdown */}
            <div className="md:col-span-4 relative">
              <select
                value={selectedPropertyType}
                onChange={(e) => handlePropertyTypeChange(e.target.value)}
                className="w-full bg-[#06181A] border border-stone-700/80 rounded-xl px-3.5 py-2.5 text-xs text-[#F4EFE6] focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer"
              >
                {propertyTypes.map((pt) => (
                  <option key={pt} value={pt} className="bg-[#0A2226] text-[#F4EFE6]">
                    {pt}
                  </option>
                ))}
              </select>
              <Filter className="w-3.5 h-3.5 text-[#C5A059] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            {NESTORA_CATALOG_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#C5A059] text-black font-bold shadow-lg shadow-[#C5A059]/20 scale-[1.02]'
                      : 'bg-[#06181A] text-stone-300 hover:text-white border border-stone-800/80 hover:border-stone-600'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#C5A059]'}`} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Count & Progress Bar */}
        <div className="mb-6 space-y-2 px-1">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-400 gap-2">
            <div>
              Showing <strong className="text-[#C5A059]">{visibleServices.length}</strong> of <strong className="text-[#C5A059]">{filteredServices.length}</strong> active property management mandates
            </div>
            <div className="text-stone-400">
              {Math.round((visibleServices.length / Math.max(1, filteredServices.length)) * 100)}% of mandates displayed
            </div>
          </div>
          
          {/* Visual Progress Bar */}
          <div className="w-full h-1.5 bg-[#0A2226] rounded-full overflow-hidden border border-stone-800/80">
            <div 
              className="h-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(100, (visibleServices.length / Math.max(1, filteredServices.length)) * 100)}%` }}
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, idx) => {
            const Icon = getCategoryIcon(service.category);
            const isNewlyRevealed = lastExpandedIndex !== null && idx >= lastExpandedIndex;

            return (
              <motion.div
                key={service.id}
                id={`mandate-item-${idx}`}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-[#0A2226]/90 border ${
                  isNewlyRevealed
                    ? 'border-[#C5A059]/70 ring-1 ring-[#C5A059]/40 shadow-2xl shadow-[#C5A059]/10'
                    : 'border-stone-800/90 hover:border-[#C5A059]/50'
                } rounded-2xl p-6 shadow-xl flex flex-col justify-between group transition-all hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#C5A059] to-[#b38e47] text-black text-[9px] font-mono font-black uppercase px-3 py-0.5 rounded-bl-xl shadow-md">
                    POPULAR MANDATE
                  </div>
                )}

                <div>
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#06181A] text-[#C5A059] border border-[#C5A059]/30 font-bold">
                        {service.code}
                      </span>
                      {isNewlyRevealed && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-bold animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">
                      {service.propertyType}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#F4EFE6] group-hover:text-[#C5A059] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  <div className="text-[11px] font-mono text-emerald-400/90 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" />
                    <span className="truncate">{service.reraStandard}</span>
                  </div>

                  <p className="text-xs text-stone-300 font-light line-clamp-3 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-stone-800/70">
                    {service.deliverables.slice(0, 2).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-stone-300 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                    {service.deliverables.length > 2 && (
                      <span className="text-[10px] font-mono text-stone-500 pl-5">
                        +{service.deliverables.length - 2} more scope items
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Footer: Pricing & Actions */}
                <div className="pt-4 border-t border-stone-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-[9px] text-stone-400 block uppercase">FEE SCHEDULE:</span>
                      <span className="text-sm font-bold text-[#C5A059]">{service.pricing.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-stone-400 block uppercase">TIMEFRAME:</span>
                      <span className="text-xs text-stone-300">{service.timeframe}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="w-full py-2 rounded-xl bg-[#06181A] hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white font-mono text-[11px] font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3 h-3 text-[#C5A059]" />
                      <span>View Scope</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEnquire(service)}
                      className="w-full py-2 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-md shadow-[#C5A059]/10 cursor-pointer"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Progressive "See More" Controls */}
        <div className="mt-12 text-center space-y-4">
          {hasMore ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleSeeMore}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>See More Mandates ({remainingCount} Remaining)</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleShowAll}
                className="px-6 py-4 rounded-2xl bg-[#0A2226] hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#C5A059]" />
                <span>Show All {filteredServices.length} Mandates</span>
              </button>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[#0A2226]/80 border border-[#C5A059]/30 max-w-md mx-auto space-y-3 font-mono text-xs">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>All {filteredServices.length} Mandates Displayed</span>
              </div>
              <p className="text-stone-400 text-[11px] font-light">
                Complete scope of UAE property management, RERA legal compliance, and 24/7 maintenance AMCs is visible.
              </p>
              <button
                type="button"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 text-[#C5A059] hover:underline text-[11px] font-bold cursor-pointer"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Back to Top of Catalog</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Slide-Over Mandate Dossier Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Drawer Body */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative w-full max-w-xl bg-[#082023] border-l border-[#C5A059]/30 h-full shadow-2xl p-6 sm:p-8 overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div>
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#0C2D31] border border-[#C5A059]/40 text-[#C5A059] font-mono text-xs font-bold">
                      {selectedService.code}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {selectedService.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopyScope(selectedService)}
                      title="Copy Scope to Clipboard"
                      className="p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#F4EFE6] leading-snug mb-3">
                  {selectedService.title}
                </h2>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0C2D31] border border-[#C5A059]/30 text-xs font-mono text-[#C5A059] mb-6">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>{selectedService.reraStandard}</span>
                </div>

                {/* Scope Description */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                    MANDATE OVERVIEW & REGULATORY SCOPE
                  </h4>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 mb-6 bg-[#06181A] p-5 rounded-2xl border border-stone-800">
                  <h4 className="text-xs font-mono text-[#C5A059] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CONTRACTED DELIVERABLES & SLAS</span>
                  </h4>
                  <div className="space-y-2.5 pt-1">
                    {selectedService.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Mandate Fee Estimator Widget */}
                <div className="mb-6 bg-[#0A2226] p-5 rounded-2xl border border-[#C5A059]/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#C5A059] uppercase font-bold flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Live Fee Estimator</span>
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">{selectedService.pricing.billingType}</span>
                  </div>

                  {selectedService.pricing.billingType === 'Annual % of Rent' ? (
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-stone-300">Expected Annual Rent:</span>
                          <span className="text-[#C5A059] font-bold">AED {drawerRentValue.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min={50000}
                          max={1000000}
                          step={10000}
                          value={drawerRentValue}
                          onChange={(e) => setDrawerRentValue(Number(e.target.value))}
                          className="w-full accent-[#C5A059] cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-xs font-mono">
                        <span className="text-stone-400">Estimated Management Fee:</span>
                        <span className="text-sm font-bold text-emerald-400">{calculateEstimatedFee(selectedService)}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-stone-300">Number of Units:</span>
                          <span className="text-[#C5A059] font-bold">{drawerUnitCount} Unit{drawerUnitCount > 1 ? 's' : ''}</span>
                        </div>
                        <input
                          type="range"
                          min={1}
                          max={20}
                          step={1}
                          value={drawerUnitCount}
                          onChange={(e) => setDrawerUnitCount(Number(e.target.value))}
                          className="w-full accent-[#C5A059] cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-xs font-mono">
                        <span className="text-stone-400">Estimated Total Cost:</span>
                        <span className="text-sm font-bold text-emerald-400">{calculateEstimatedFee(selectedService)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Parameters Matrix */}
                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                  <div className="bg-[#0A2226] p-3.5 rounded-xl border border-stone-800">
                    <span className="text-[10px] text-stone-400 block uppercase">FEES / PRICING:</span>
                    <span className="text-sm font-bold text-[#C5A059] block mt-0.5">{selectedService.pricing.label}</span>
                  </div>
                  <div className="bg-[#0A2226] p-3.5 rounded-xl border border-stone-800">
                    <span className="text-[10px] text-stone-400 block uppercase">SLA TIMEFRAME:</span>
                    <span className="text-sm font-bold text-stone-200 block mt-0.5">{selectedService.timeframe}</span>
                  </div>
                </div>

              </div>

              {/* Drawer Actions */}
              <div className="pt-6 border-t border-stone-800 space-y-3">
                <button
                  type="button"
                  onClick={() => handleEnquire(selectedService)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-transform cursor-pointer"
                >
                  <span>Request Mandate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/971566184509?text=Hello%20NESTORA,%20I%20would%20like%20to%20inquire%20about%20mandate%20${encodeURIComponent(selectedService.code)}%20-%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#06181A] hover:bg-stone-800 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Instant WhatsApp Inquiry</span>
                </a>

                <p className="text-[10px] font-mono text-stone-400 text-center">
                  Zero Obligation • 24-Hour Landlord Response Guarantee
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
