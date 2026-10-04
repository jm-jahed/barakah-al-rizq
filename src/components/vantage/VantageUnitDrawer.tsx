'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Layers,
  MessageCircle,
  ShieldCheck,
  Download,
  Share2,
  TrendingUp,
  Award,
  Sparkles,
  Compass,
  FileText
} from 'lucide-react';
import { VantageDevelopment } from '@/data/vantageData';
import { VANTAGE_BRAND } from '@/data/vantageData';

interface VantageUnitDrawerProps {
  development: VantageDevelopment | null;
  onClose: () => void;
  onOpenRegister: (dev: VantageDevelopment) => void;
  onOpenCalculator?: (dev: VantageDevelopment) => void;
}

export const VantageUnitDrawer: React.FC<VantageUnitDrawerProps> = ({
  development,
  onClose,
  onOpenRegister,
  onOpenCalculator,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplans' | 'financials' | 'escrow'>('overview');
  const [selectedUnitType, setSelectedUnitType] = useState<string>('2-Bedroom Sky Suite');
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!development) return null;

  const floorplans = [
    { type: '1-Bedroom Executive', sizeSqft: '840 – 980 sq.ft', sizeSqm: '78 – 91 m²', view: 'Panoramic Skyline & Water', balconies: '1 Large Terrace', priceAed: Math.round(development.startingPriceAed * 0.7) },
    { type: '2-Bedroom Sky Suite', sizeSqft: '1,420 – 1,650 sq.ft', sizeSqm: '132 – 153 m²', view: 'Full Panoramic Waterway / Fairway', balconies: '2 Wraparound Balconies', priceAed: development.startingPriceAed },
    { type: '3-Bedroom Royal Residence', sizeSqft: '2,200 – 2,850 sq.ft', sizeSqm: '204 – 265 m²', view: '360° Marina / Sunset Vista', balconies: 'Private Sky Garden Terrace', priceAed: Math.round(development.startingPriceAed * 1.45) },
    { type: 'Penthouse / Sky Villa', sizeSqft: '4,500 – 7,200 sq.ft', sizeSqm: '418 – 669 m²', view: 'Dual-Aspect Horizon Sunset', balconies: 'Private Rooftop Plunge Pool', priceAed: Math.round(development.startingPriceAed * 2.8) },
  ];

  const activeFloorplan = floorplans.find(f => f.type === selectedUnitType) || floorplans[1];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/work/property-development#${development.id}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleDownloadBrochure = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      // Create and trigger a realistic download summary file
      const blob = new Blob([
        `=======================================================\n` +
        `VANTAGE DEVELOPMENTS UAE - OFFICIAL PROJECT BROCHURE\n` +
        `=======================================================\n\n` +
        `Project Name: ${development.name}\n` +
        `Project Reference: ${development.code}\n` +
        `Location: ${development.location} (${development.city}, UAE)\n` +
        `Status: ${development.status}\n` +
        `Sector: ${development.categoryName}\n` +
        `Starting Price: AED ${development.startingPriceAed.toLocaleString()}\n` +
        `Down Payment: AED ${development.downPaymentAed.toLocaleString()} (${development.downPaymentPct}%)\n` +
        `Estimated Handover: ${development.handover}\n` +
        `Projected Net ROI: ${development.roiProjected}% p.a.\n` +
        `Construction Progress: ${development.completionPct}%\n\n` +
        `RERA / DLD Escrow Trust Account: ${development.escrowCert}\n` +
        `Government Permit: ${development.dldPermitNo}\n` +
        `Lead Architecture Firm: ${development.architect}\n\n` +
        `Key Amenities:\n` +
        development.amenities.map(a => `  - ${a}`).join('\n') +
        `\n\nSales Gallery Inquiry: +971 4 456 7890 | sales@vantage-developments.ae\n` +
        `WhatsApp Desk: +971 50 882 1944\n`
      ], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${development.code}_VANTAGE_BROCHURE.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello VANTAGE Developments Sales Desk,\n\nI am inquiring regarding ${development.name} (${development.code}) in ${development.location}.\nStarting Price: AED ${development.startingPriceAed.toLocaleString()}.\nPlease provide latest available floor plans and VIP allocation terms.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-[#0A192F] border border-stone-700/80 rounded-3xl max-w-4xl w-full shadow-2xl relative font-sans text-stone-100 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Header Bar */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-[#06101E]/90">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#C5A059] tracking-wider uppercase">
                {development.code} • {development.categoryName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5"
                title="Copy share link"
              >
                <Share2 className="w-4 h-4 text-[#C5A059]" />
                <span className="hidden sm:inline">{isCopied ? 'Link Copied!' : 'Share'}</span>
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-400 hover:text-white transition-all"
                aria-label="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 pt-4 border-b border-stone-800 bg-[#0A192F] overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: 'Overview & Specs', icon: Building2 },
              { id: 'floorplans', label: 'CAD Floorplans', icon: Layers },
              { id: 'financials', label: 'Payment & DLD Fees', icon: DollarSign },
              { id: 'escrow', label: 'RERA Escrow Verification', icon: ShieldCheck },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 font-mono text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10'
                      : 'border-transparent text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-gradient-to-b from-[#0A192F] to-[#06101E]">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Title & Location Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 font-bold uppercase">
                      {development.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 font-bold">
                      {development.propertyType}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-bold">
                      {development.roiProjected}% Projected ROI
                    </span>
                    <span className="flex items-center gap-1 text-stone-300 ml-auto">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      {development.location} ({development.city})
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#FAFAFA] tracking-tight">
                    {development.name}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base font-light mt-2 leading-relaxed">
                    Flagship architectural landmark developed by VANTAGE Developments UAE. Featuring bespoke Italian finishes, high-speed private lifts, floor-to-ceiling acoustic glass, and panoramic views across {development.location}.
                  </p>
                </div>

                {/* Hero Visual Card */}
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#06101E] border border-stone-800 shadow-xl group">
                  <img
                    src={development.image}
                    alt={development.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-[#06101E]/90 border border-[#C5A059]/40 backdrop-blur-md">
                      <span className="text-stone-400 text-[10px] uppercase block">STARTING PRICE</span>
                      <span className="text-xl font-serif font-bold text-[#FAFAFA]">
                        AED {development.startingPriceAed.toLocaleString()}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#06101E]/90 border border-stone-700 backdrop-blur-md">
                      <span className="text-stone-400 text-[10px] uppercase block">ESTIMATED HANDOVER</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        {development.handover}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Construction Progress */}
                <div className="p-5 rounded-2xl bg-[#06101E] border border-stone-800 space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400 uppercase text-[10px] font-bold">CONSTRUCTION PROGRESS AUDIT:</span>
                    <span className="text-[#C5A059] font-bold">{development.completionPct}% VERIFIED</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-stone-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#C5A059] via-amber-400 to-emerald-400 transition-all duration-1000"
                      style={{ width: `${development.completionPct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-stone-500 pt-1">
                    <span>Shapoorji Pallonji / Wade Adams Subcontracting</span>
                    <span>DLD Permit: {development.dldPermitNo}</span>
                  </div>
                </div>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
                    <span className="text-[10px] text-stone-400 uppercase block font-bold">DOWN PAYMENT</span>
                    <span className="text-lg font-serif font-bold text-[#C5A059] block mt-1">
                      AED {development.downPaymentAed.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-stone-400 font-bold">({development.downPaymentPct}% Booking)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
                    <span className="text-[10px] text-stone-400 uppercase block font-bold">4% DLD FEE</span>
                    <span className="text-lg font-serif font-bold text-white block mt-1">
                      AED {development.dldFeeAed.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-stone-400 font-bold">+ AED 5,250 Oqood</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
                    <span className="text-[10px] text-stone-400 uppercase block font-bold">EST. ANNUAL RENTAL</span>
                    <span className="text-lg font-serif font-bold text-emerald-400 block mt-1">
                      AED {development.estRentalAnnualAed.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-500 font-bold">({development.roiProjected}% Net Yield)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
                    <span className="text-[10px] text-stone-400 uppercase block font-bold">PAYMENT PLAN</span>
                    <span className="text-sm font-serif font-bold text-sky-400 block mt-1">
                      {development.paymentPlan}
                    </span>
                    <span className="text-[10px] text-stone-400">Milestone Linked</span>
                  </div>
                </div>

                {/* Flagship Amenities */}
                <div className="space-y-3 font-mono text-xs">
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">FLAGSHIP AMENITIES & ARCHITECTURAL HIGHLIGHTS:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {development.amenities.map((am) => (
                      <div key={am} className="p-3.5 rounded-xl bg-[#06101E] border border-stone-800/80 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span className="text-stone-200 text-xs">{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CAD FLOORPLANS TAB */}
            {activeTab === 'floorplans' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-white">Architectural CAD Layouts & Configurations</h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Select a configuration to view dimensions, private terrace allocations, and indicative pricing.
                  </p>
                </div>

                {/* Unit Type Selector Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  {floorplans.map((fp) => (
                    <button
                      key={fp.type}
                      onClick={() => setSelectedUnitType(fp.type)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedUnitType === fp.type
                          ? 'bg-[#C5A059]/15 border-[#C5A059] text-white'
                          : 'bg-[#06101E] border-stone-800 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      <span className="text-[10px] block font-bold uppercase text-[#C5A059]">{fp.sizeSqft}</span>
                      <span className="font-serif font-bold text-xs block mt-1">{fp.type}</span>
                    </button>
                  ))}
                </div>

                {/* Floor Plan Display Card */}
                <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 font-mono text-xs space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-4">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-bold">SELECTED LAYOUT:</span>
                      <h5 className="text-xl font-serif font-bold text-[#FAFAFA]">{activeFloorplan.type}</h5>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-400 uppercase font-bold">ESTIMATED PRICE:</span>
                      <span className="text-xl font-serif font-bold text-[#C5A059] block">
                        AED {activeFloorplan.priceAed.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* CAD Vector Blueprint Schematic */}
                  <div className="relative h-64 rounded-xl bg-[#0A192F] border border-dashed border-[#C5A059]/40 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C5A059_1px,transparent_1px),linear-gradient(to_bottom,#C5A059_1px,transparent_1px)] bg-[size:24px_24px]" />
                    
                    <Building2 className="w-12 h-12 text-[#C5A059] mb-3 opacity-70" />
                    <span className="text-white font-serif font-bold text-base z-10">{activeFloorplan.type} — Floor Master Layout</span>
                    <span className="text-stone-400 text-xs mt-1 z-10">Total Area: {activeFloorplan.sizeSqft} ({activeFloorplan.sizeSqm})</span>
                    <span className="text-emerald-400 text-[11px] mt-1 z-10">Orientation: {activeFloorplan.view}</span>

                    <div className="mt-4 flex gap-2 z-10">
                      <span className="px-3 py-1 rounded-full bg-[#06101E] text-stone-300 border border-stone-700 text-[10px]">
                        Ceiling Height: 3.40m
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#06101E] text-stone-300 border border-stone-700 text-[10px]">
                        Balcony: {activeFloorplan.balconies}
                      </span>
                    </div>
                  </div>

                  {/* Quick Specs Table */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">TOTAL SUITE AREA</span>
                      <span className="text-white font-bold text-xs">{activeFloorplan.sizeSqft}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">METRIC AREA</span>
                      <span className="text-white font-bold text-xs">{activeFloorplan.sizeSqm}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">OUTDOOR LIVING</span>
                      <span className="text-white font-bold text-xs">{activeFloorplan.balconies}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">FINISH STANDARD</span>
                      <span className="text-[#C5A059] font-bold text-xs">Italian Marble / Porcelanosa</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* FINANCIALS & DLD FEES TAB */}
            {activeTab === 'financials' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-white">Full Financial Schedule & Land Department Fees</h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Transparent cost schedule for {development.name}. Fully compliant with Dubai Land Department (DLD) regulations.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                    <span className="text-stone-300 font-bold uppercase text-[11px]">PURCHASE PRICE (AED)</span>
                    <span className="text-xl font-serif font-bold text-white">
                      AED {development.startingPriceAed.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-stone-300">
                      <span>• Initial Booking Deposit ({development.downPaymentPct}%)</span>
                      <span className="font-bold text-[#C5A059]">AED {development.downPaymentAed.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span>• Dubai Land Department (DLD 4% Title Registration)</span>
                      <span className="font-bold text-white">AED {development.dldFeeAed.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span>• DLD Oqood Pre-Registration Admin Fee</span>
                      <span className="font-bold text-white">AED 5,250</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300">
                      <span>• Construction Milestones Breakdown</span>
                      <span className="font-bold text-sky-400">{development.paymentPlan}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-300 border-t border-stone-800 pt-2 font-bold">
                      <span className="text-[#FAFAFA]">Total Cash Required at Booking + DLD:</span>
                      <span className="text-lg font-serif text-emerald-400">
                        AED {(development.downPaymentAed + development.dldFeeAed + 5250).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0A192F] border border-stone-800 text-[11px] text-stone-300 space-y-1">
                    <span className="text-emerald-400 font-bold block">★ UAE Golden Visa Eligibility</span>
                    <p className="text-stone-400 text-[10px] leading-relaxed">
                      {development.startingPriceAed >= 2000000
                        ? `This property (AED ${development.startingPriceAed.toLocaleString()}) qualifies for the 10-Year Renewable UAE Golden Visa under UAE Federal Decree Law.`
                        : `Properties valued at AED 2,000,000+ qualify for the UAE Golden Visa. Multiple unit combinations can be combined to reach the threshold.`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ESCROW VERIFICATION TAB */}
            {activeTab === 'escrow' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-white">RERA / DLD Escrow Trust Account Details</h4>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    All investor funds are deposited directly into the government-monitored escrow account released strictly per construction milestones.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#06101E] border border-emerald-500/30 font-mono text-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] text-emerald-400 uppercase font-bold block">GOVERNMENT ESCROW TRUST VERIFIED</span>
                      <h5 className="text-lg font-serif font-bold text-white">{development.escrowCert}</h5>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">GOVERNMENT PERMIT NO.</span>
                      <span className="text-white font-bold text-xs">{development.dldPermitNo}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">LEAD ARCHITECT / STRUCTURAL</span>
                      <span className="text-white font-bold text-xs truncate block">{development.architect}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">LOCATION COORDINATES</span>
                      <span className="text-[#C5A059] font-bold text-xs">{development.coordinates}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                      <span className="text-[9px] text-stone-400 uppercase block font-bold">COMPLIANCE STANDARD</span>
                      <span className="text-emerald-400 font-bold text-xs">Law No. 8 of 2007 (Escrow Guarantee)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-[10px] text-stone-300">
                    <p>
                      <strong>Investor Protection:</strong> Per UAE Real Estate Regulatory Authority (RERA) mandates, payments are retained in the escrow account and disbursed only upon engineer-certified site milestone audits.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Fixed Footer CTAs */}
          <div className="p-6 border-t border-stone-800 bg-[#06101E] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleDownloadBrochure}
                disabled={isDownloading}
                className="flex-1 sm:flex-initial py-3.5 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-[#C5A059]" />
                <span>{isDownloading ? 'Preparing Brochure...' : `Brochure (${development.brochureSizeMb} MB)`}</span>
              </button>

              <a
                href={`https://wa.me/971508821944?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 px-5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp Sales Desk</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                const dev = development;
                onClose();
                onOpenRegister(dev);
              }}
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:scale-[1.02] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 transition-all"
            >
              <span>Reserve Unit Allocation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
