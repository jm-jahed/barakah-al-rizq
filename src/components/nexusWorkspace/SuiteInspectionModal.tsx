'use client';

import React, { useState } from 'react';
import { OfficeOption, NEXUS_BRAND } from '@/data/nexusWorkspaceData';

interface SuiteInspectionModalProps {
  office: OfficeOption | null;
  onClose: () => void;
  onBookTour: (officeTitle: string) => void;
}

export default function SuiteInspectionModal({ office, onClose, onBookTour }: SuiteInspectionModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'ejari' | 'gallery'>('overview');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!office) return null;

  const allImages = [office.image, ...(office.gallery || [])].filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    `Hello NEXUS Concierge, I am interested in reserving or inspecting the ${office.title} (${office.priceFormatted}) at NEXUS Workspace. Please provide current availability and arrange a VIP walkthrough.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
              {office.category}
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
              REF: {office.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6">
          {/* Title & Key Telemetry */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {office.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {office.floorLevel} • {office.viewOrientation}
              </p>
            </div>
            <div className="bg-slate-950/80 px-4 py-3 rounded-xl border border-amber-500/20 text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Turnkey Lease Rate</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400">{office.priceFormatted}</span>
              <span className="text-[10px] text-emerald-400 block font-mono">All Utilities & Fiber Included</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Overview & Amenities
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'tech'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Acoustic & IT Specs
            </button>
            <button
              onClick={() => setActiveTab('ejari')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'ejari'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Ejari & Visa Quota
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'gallery'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Gallery ({allImages.length})
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 group">
                <img
                  src={allImages[activeImageIdx] || office.image}
                  alt={office.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                  <span className="bg-slate-900/80 backdrop-blur px-3 py-1 rounded-md border border-slate-700">
                    📐 {office.areaSqFt} sq.ft ({office.areaSqM} m²)
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur px-3 py-1 rounded-md border border-slate-700">
                    👥 Capacity: {office.capacity}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {office.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                    Premium Suite Inclusions
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {office.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                    Building & Hospitality Services
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {office.includedAmenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Acoustic & IT */}
          {activeTab === 'tech' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg">
                    🛡️
                  </div>
                  <h4 className="text-base font-bold text-white">Acoustic Isolation Rating</h4>
                  <p className="text-xs text-amber-400 font-mono font-semibold">{office.acousticRating}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineered with high-attenuation laminated double glazing and acoustic ceiling tiles for confidential boardroom negotiations, private wealth consultations, and distraction-free executive focus.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg">
                    ⚡
                  </div>
                  <h4 className="text-base font-bold text-white">Enterprise Network Telemetry</h4>
                  <p className="text-xs text-cyan-400 font-mono font-semibold">{office.itSpecs}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ultra-low latency dual redundant dark fiber connections (Du & Etisalat) with automated failover, private isolated VLANs for every suite, and Tier III on-prem server rack capabilities.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Power & Physical Security Safeguards
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Power Backup</span>
                    <strong className="text-white">Dual Online UPS + Diesel Generator</strong>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Access Control</span>
                    <strong className="text-white">Biometric Iris + Mobile Key</strong>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">CCTV Security</span>
                    <strong className="text-white">24/7 AI-Monitored Common Zones</strong>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Air Conditioning</span>
                    <strong className="text-white">HEPA Filtered Individual Climate</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Ejari & Visa Quota */}
          {activeTab === 'ejari' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-950 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-white">100% Guaranteed UAE Commercial Lease (Ejari)</h4>
                    <span className="text-xs text-emerald-400 font-mono">DLD & DET System Integration</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  This suite qualifies for immediate official DED / DET Ejari generation. No delays, no sublease authorization hurdles. We provide complete supporting documentation for your trade license application, partner visas, and corporate bank account compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1">Visa Quota Allocation</span>
                  <span className="text-base font-bold text-amber-400">{office.ejariQuota}</span>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1">Ejari Issuance Speed</span>
                  <span className="text-base font-bold text-emerald-400">Within 2 - 4 Hours</span>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1">Security Deposit</span>
                  <span className="text-base font-bold text-white">{office.depositMonths} Month(s) Escrow</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div className="h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src={allImages[activeImageIdx]}
                  alt={`${office.title} view ${activeImageIdx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-20 rounded-xl overflow-hidden border-2 transition ${
                      activeImageIdx === idx ? 'border-amber-400 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Immediate Handover & Ejari Issuance</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/971508821122?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition"
            >
              <span>💬</span>
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookTour(office.title);
              }}
              className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black rounded-xl transition shadow-lg shadow-amber-500/20"
            >
              Book VIP Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
