'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  FileText,
  Users,
  Briefcase
} from 'lucide-react';

interface FamilyOfficeFoundationBuilderProps {
  onOpenConsultation?: (defaultMandate?: string) => void;
}

export const FamilyOfficeFoundationBuilder: React.FC<FamilyOfficeFoundationBuilderProps> = ({
  onOpenConsultation
}) => {
  const [jurisdiction, setJurisdiction] = useState<'difc' | 'adgm'>('difc');
  const [selectedAssets, setSelectedAssets] = useState<string[]>([
    'UAE Luxury Real Estate',
    'Global Investment Portfolios',
    'Operating Family Business Shares'
  ]);
  const [governanceTier, setGovernanceTier] = useState<'single_tier' | 'dual_tier' | 'full_sfo'>('dual_tier');

  const assetOptions = [
    'UAE Luxury Real Estate',
    'Global Investment Portfolios',
    'Operating Family Business Shares',
    'Private Equity & SPV Equity',
    'Intellectual Property & Patents',
    'Precious Metals & Luxury Collectibles'
  ];

  const toggleAsset = (asset: string) => {
    setSelectedAssets((prev) =>
      prev.includes(asset) ? prev.filter((a) => a !== asset) : [...prev, asset]
    );
  };

  return (
    <section id="foundation-builder" className="py-24 relative bg-[#06090F] border-b border-[#D4AF37]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>UAE Common Law Foundation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            DIFC &amp; ADGM Family Foundation &amp; SPV Structuring Engine
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3 font-normal leading-relaxed font-sans">
            Architect custom multi-generational holding foundations, ring-fence family assets against forced heirship, and establish institutional board governance under English common law.
          </p>
        </div>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A0F17] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-7">
            
            {/* 01. Jurisdiction Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3">
                01 · Primary Legal Jurisdiction &amp; Courts Nexus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'difc',
                    name: 'DIFC Foundation',
                    law: 'DIFC Law No. 3 of 2018',
                    desc: 'Direct Dubai Land Department (DLD) MoU for 0% transfer tax on Dubai property.'
                  },
                  {
                    id: 'adgm',
                    name: 'ADGM Foundation',
                    law: 'ADGM Regulations 2017',
                    desc: 'English Common Law jurisdiction with direct ADJD property and commercial integration.'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setJurisdiction(item.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      jurisdiction === item.id
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/50'
                        : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="block font-serif font-bold text-sm text-white">{item.name}</span>
                    <span className="text-[11px] font-mono text-[#D4AF37] block mt-0.5">{item.law}</span>
                    <span className="text-xs text-gray-400 font-sans block mt-1.5 leading-relaxed">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 02. Assets to Ring-Fence */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3">
                02 · Family Asset Classes to Ring-Fence &amp; Protect
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {assetOptions.map((asset) => {
                  const isChecked = selectedAssets.includes(asset);
                  return (
                    <button
                      key={asset}
                      type="button"
                      onClick={() => toggleAsset(asset)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                          : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-mono font-semibold">{asset}</span>
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-black' : 'border-white/20'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 03. Governance & Council Architecture */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3">
                03 · Governance &amp; Council Structure Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'single_tier', title: 'Single Council', desc: 'Family-Run Board' },
                  { id: 'dual_tier', title: 'Council + Guardian', desc: 'Veto Rights & Fiduciary' },
                  { id: 'full_sfo', title: 'Single Family Office', desc: 'Full CIO & Staff' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setGovernanceTier(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      governanceTier === tier.id
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white ring-1 ring-[#D4AF37]/50'
                        : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="block font-serif font-bold text-xs text-white">{tier.title}</span>
                    <span className="text-[10px] text-gray-400 font-mono block mt-0.5">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Console (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1622] to-[#080D14] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">Structure Blueprint</span>
                <h3 className="text-lg font-serif font-extrabold text-white">Foundation Architecture</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold">
                100% Ring-Fenced
              </span>
            </div>

            {/* Architecture Card */}
            <div className="p-5 rounded-2xl bg-[#06090F] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Selected Jurisdiction</span>
                <span className="text-[#D4AF37] font-bold uppercase">{jurisdiction} Foundation</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Protected Asset Scopes</span>
                <span className="text-white font-bold">{selectedAssets.length} Asset Classes</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Forced Heirship Protection</span>
                <span className="text-emerald-400 font-bold">100% Excluded</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>DLD Property Transfer Tax</span>
                <span className="text-emerald-400 font-bold">0% Direct SPV</span>
              </div>
            </div>

            {/* Key Structural Safeguards */}
            <div className="space-y-2 font-mono text-xs text-gray-300 bg-[#0A0F18] p-4 rounded-xl border border-white/5">
              <span className="text-[#D4AF37] font-bold block mb-1">Structural Safeguards Included:</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Foundation Charter &amp; By-Laws with Guardian veto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>DIFC/ADGM Prescribed SPVs for real estate holding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Confidential beneficial register protected by courts</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('DIFC / ADGM Foundation Establishment & Asset Ring-Fencing');
                }
              }}
              className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c5a059] text-black font-serif font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/30 cursor-pointer"
            >
              <span>Retain Foundation Establishment Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-gray-500 font-mono text-center leading-tight">
              ✦ Structured under DIFC Foundations Law No. 3 of 2018 and ADGM Foundations Regulations 2017 with full DIFC Courts jurisdiction.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
