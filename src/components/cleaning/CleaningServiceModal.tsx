'use client';

import React, { useState } from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { 
  X, 
  Clock, 
  Users, 
  Maximize2, 
  ShieldCheck, 
  Check, 
  Bookmark, 
  Scale, 
  Share2, 
  Layers, 
  Award, 
  Car, 
  FileText,
  Star,
  CheckCircle2
} from 'lucide-react';

interface CleaningServiceModalProps {
  service: CleaningService | null;
  onClose: () => void;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (s: CleaningService) => void;
  onToggleCompare: (s: CleaningService) => void;
  onBookDispatch: (s: CleaningService) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const CleaningServiceModal: React.FC<CleaningServiceModalProps> = ({
  service,
  onClose,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onBookDispatch,
  currency
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'equipment' | 'beforeafter'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!service) return null;

  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];
  const convertedPrice = Math.round(service.priceAED * currentRate);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-zinc-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase">
              {service.id}
            </span>
            <span className="text-zinc-400 text-xs font-mono hidden sm:inline">
              {service.categoryName} • {service.propertyType}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all text-xs flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(service)}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 font-semibold'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-emerald-400'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
            </button>

            {/* Save Toggle */}
            <button
              onClick={() => onToggleSave(service)}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 font-semibold'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-emerald-400'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Main Showcase Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Active Image */}
            <div className="lg:col-span-8 space-y-3">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {service.turnaroundSpeed}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300">
                    {service.chemicalCertification.split('(')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Acquisition Summary Card */}
            <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                  <span>{service.categoryName}</span>
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {service.rating} ({service.reviewsCount} verified audits)
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-snug">
                  {service.title}
                </h1>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    All-Inclusive Protocol Rate
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                    {currency} {convertedPrice.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center justify-between">
                    <span>Up to {service.sqftCoverage.toLocaleString()} Sq. Ft.</span>
                    <span className="text-emerald-400 font-semibold">100% Free Re-Clean</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Clock className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{service.durationHours} Hours</div>
                    <div className="text-[10px] text-zinc-500">Duration</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Users className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{service.crewSize} Staff</div>
                    <div className="text-[10px] text-zinc-500">BICSc Crew</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Maximize2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{service.sqftCoverage.toLocaleString()}</div>
                    <div className="text-[10px] text-zinc-500">Sqft Max</div>
                  </div>
                </div>

                {/* Regulatory Pill */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dubai Municipality Approved • AED 5M Insured</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => onBookDispatch(service)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Car className="w-4 h-4" />
                  Dispatch Crew for This Service
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-zinc-800 flex gap-4 text-xs font-mono uppercase tracking-wider">
            {[
              { id: 'overview', label: 'Protocol Deliverables & Scope' },
              { id: 'methodology', label: '5-Phase Technical Methodology' },
              { id: 'equipment', label: 'Industrial Equipment & Chemicals' },
              { id: 'beforeafter', label: 'Before / After Inspection' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 border-b-2 font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'border-emerald-400 text-emerald-400'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-3">Service Briefing</h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="mt-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-emerald-300">
                  {service.recommendedFor}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-4">Mandatory Deliverables & Checkpoints</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Methodology */}
          {activeTab === 'methodology' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {service.methodology.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{step.phase}</div>
                    <div className="text-xs text-zinc-400 leading-relaxed font-light">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Equipment */}
          {activeTab === 'equipment' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-3">Industrial Machinery Deployed</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.equipment.map((eq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                      <Layers className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-mono text-white font-semibold">{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30">
                <div className="text-xs font-mono text-teal-400 uppercase font-bold mb-1">
                  Chemical Safety Data Sheet (MSDS)
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {service.chemicalCertification}. Zero volatile organic compounds (0% VOCs), phosphate-free, and safe for asthmatics, newborn infants, and household pets.
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: Before / After Slider */}
          {activeTab === 'beforeafter' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden select-none border border-zinc-800">
                {/* Before Image (Left Base) */}
                <img
                  src={service.beforeImage}
                  alt="Before Cleaning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono text-zinc-300">
                  Before Treatment
                </span>

                {/* After Image (Right Clipped) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                  <img
                    src={service.afterImage}
                    alt="After Cleaning"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-xs font-mono">
                    After PRISTINE Detail
                  </span>
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center font-mono text-xs font-bold shadow-xl">
                    ⇄
                  </div>
                </div>

                {/* Interactive Slider Input */}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                />
              </div>
              <p className="text-center text-xs font-mono text-zinc-400">
                Drag the slider left and right to inspect the surface transformation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
