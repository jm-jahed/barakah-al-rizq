'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, MapPin, Check, Layers, Key, ShieldCheck, Landmark } from 'lucide-react';
import { AureliaResidence } from '@/data/aureliaData';

interface AureliaResidenceModalProps {
  residence: AureliaResidence | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestViewing: (residenceName: string) => void;
}

export const AureliaResidenceModal: React.FC<AureliaResidenceModalProps> = ({
  residence,
  isOpen,
  onClose,
  onRequestViewing
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'floorplans'>('specs');
  const [activeFloorIdx, setActiveFloorIdx] = useState<number>(0);

  if (!isOpen || !residence) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#13191D] border border-stone-600 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#090C0E]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-stone-500/10 border border-stone-500/30 text-stone-300">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">{residence.name}</h3>
                <p className="text-xs font-mono text-stone-400">{residence.location} • {residence.type}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Top Image & Key Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-black">
                <img
                  src={residence.image}
                  alt={residence.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-stone-300 font-mono text-xs font-bold border border-stone-600 backdrop-blur-md">
                  {residence.status}
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-[#090C0E] border border-white/5 space-y-2">
                  <span className="text-[11px] font-mono text-gray-400 uppercase block">Capital Valuation</span>
                  <div className="text-2xl font-extrabold font-mono text-emerald-400">
                    {residence.priceFormatted}
                  </div>
                  <span className="text-xs font-mono text-stone-300 block">
                    BUA: {residence.buaSqFt.toLocaleString()} sq ft ({residence.buaSqM} sq m)
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-xs text-gray-300">
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Bedrooms:</span>
                    <span className="text-white font-bold">{residence.bedrooms} Master Suites</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Bathrooms:</span>
                    <span className="text-white font-bold">{residence.bathrooms} Luxury Baths</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 py-1">
                    <span className="text-gray-400">Pool System:</span>
                    <span className="text-white font-bold">{residence.pool.split('+')[0]}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Showroom Garage:</span>
                    <span className="text-white font-bold">{residence.garage}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Switcher Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-3">
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-stone-200 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                1. ARCHITECTURAL HIGHLIGHTS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('floorplans')}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'floorplans'
                    ? 'bg-stone-200 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                2. FLOOR PLAN LEVEL BREAKDOWN ({residence.floorPlanDetails.length})
              </button>
            </div>

            {/* Content Tab 1: Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <p className="text-xs font-sans text-gray-300 leading-relaxed italic">
                  "{residence.headlineFeature}"
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {residence.architecturalHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#090C0E] border border-white/5 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-stone-300 shrink-0 mt-0.5" />
                      <span className="text-xs font-mono text-gray-300 leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#090C0E] border border-emerald-500/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>RERA Permit: <strong>{residence.reraPermit}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-300">
                    <Landmark className="w-4 h-4" />
                    <span>DLD Escrow: <strong>{residence.escrowAccount}</strong></span>
                  </div>
                </div>
              </div>
            )}

            {/* Content Tab 2: Floor Plans */}
            {activeTab === 'floorplans' && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {residence.floorPlanDetails.map((fp, fpIdx) => (
                    <button
                      key={fpIdx}
                      type="button"
                      onClick={() => setActiveFloorIdx(fpIdx)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer border ${
                        activeFloorIdx === fpIdx
                          ? 'bg-stone-200 text-black border-white'
                          : 'bg-[#090C0E] text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {fp.level.split('(')[0]}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-[#090C0E] border border-stone-700 space-y-3">
                  <h4 className="text-sm font-bold font-serif text-white">
                    {residence.floorPlanDetails[activeFloorIdx]?.level}
                  </h4>
                  <p className="text-xs font-sans text-gray-300 leading-relaxed">
                    {residence.floorPlanDetails[activeFloorIdx]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {residence.floorPlanDetails[activeFloorIdx]?.features.map((feat, fIdx) => (
                      <span key={fIdx} className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-stone-300">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-white/10 bg-[#090C0E] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-gray-400">
              100% Freehold Title Deed • 10-Year Golden Visa Eligible
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
              >
                CLOSE
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestViewing(residence.name);
                }}
                className="w-1/2 sm:w-auto px-8 py-3 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>REQUEST VIEWING →</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
