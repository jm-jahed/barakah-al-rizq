'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface MarketEntrySectionProps {
  onOpenConsultation: () => void;
}

export const MarketEntrySection: React.FC<MarketEntrySectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    { name: 'Market Research', sub: 'Feasibility & Competitors' },
    { name: 'Entity Structure', sub: 'Mainland / Free Zone' },
    { name: 'Licensing', sub: 'Trade License Approval' },
    { name: 'Banking', sub: 'Corporate Account Dossier' },
    { name: 'Operations', sub: 'Office & Visa Clearances' },
    { name: 'Market Launch', sub: 'Commercial Execution' },
  ];

  return (
    <section id="market-entry" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              GCC EXPANSION FOR INTERNATIONAL ENTERPRISES
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] leading-tight">
              Entering the UAE Market?
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              We provide global corporations, tech firms, and investors with a frictionless market entry framework—handling everything from regulatory due diligence to VIP banking and key executive residency.
            </p>

            {/* Journey Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
              {steps.map((st, i) => (
                <div key={st.name} className="p-3.5 rounded-xl bg-[#1A1D24] border border-stone-800 space-y-0.5">
                  <span className="text-[10px] text-[#D4AF37] font-bold block">STEP 0{i + 1}</span>
                  <span className="text-white font-bold block">{st.name}</span>
                  <span className="text-[10px] text-stone-400 block">{st.sub}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2b] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl"
            >
              <span>Discuss Market Entry Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Package Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A1D24] rounded-3xl border border-[#D4AF37]/40 p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block">
                COMPREHENSIVE ADVISORY BUNDLE
              </span>

              <h3 className="text-3xl font-serif font-bold text-[#F7F6F2]">
                UAE Market Entry Package
              </h3>

              <div className="font-mono">
                <span className="text-[10px] text-stone-400 block uppercase">STARTING ADVISORY FEE</span>
                <span className="text-3xl font-black text-[#D4AF37]">AED 18,500</span>
                <span className="text-[10px] text-stone-500 block italic mt-0.5">*Excludes official government fees</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-stone-300 border-t border-stone-800 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Comprehensive UAE Market Feasibility Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Corporate Ownership & Holding Structure Advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Full Trade License & Immigration Setup Coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Corporate Banking Dossier & Relationship Manager Intro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Commercial Launch Strategy & Tax Classification</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Market Entry Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
