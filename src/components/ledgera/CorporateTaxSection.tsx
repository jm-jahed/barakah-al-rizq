'use client';

import React from 'react';
import { ShieldCheck, Info, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface CorporateTaxSectionProps {
  onOpenConsultation: () => void;
}

export const CorporateTaxSection: React.FC<CorporateTaxSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="tax-section" className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              UAE REGULATORY TAX FRAMEWORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
              UAE Corporate Tax — Are You Compliant?
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-2xl">
              Under Federal Decree-Law No. 47 of 2022, Corporate Tax applies to taxable profits generated in financial years starting on or after June 1, 2023.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl whitespace-nowrap"
          >
            <span>Book Corporate Tax Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 font-sans">
          
          <div className="bg-[#0E3B27] rounded-3xl border border-stone-800 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-[#D4AF37]">01 — REGISTRATION</span>
            <h3 className="text-xl font-serif font-bold text-[#F7F6F2]">Mandatory TRN Registration</h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Every mainland and free zone taxable person must register with the Federal Tax Authority (FTA) and obtain a Corporate Tax TRN.
            </p>
          </div>

          <div className="bg-[#0E3B27] rounded-3xl border border-stone-800 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-[#D4AF37]">02 — 9% TAX RATE</span>
            <h3 className="text-xl font-serif font-bold text-[#F7F6F2]">Threshold & Exemptions</h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              UAE Corporate Tax is generally 9% for taxable net income exceeding AED 375,000, while income up to AED 375,000 is taxed at 0%.
            </p>
          </div>

          <div className="bg-[#0E3B27] rounded-3xl border border-stone-800 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-[#D4AF37]">03 — FREE ZONES (QFZP)</span>
            <h3 className="text-xl font-serif font-bold text-[#F7F6F2]">Qualifying Income Rules</h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Qualifying Free Zone Persons (QFZP) can benefit from a 0% rate on qualifying income, subject to adequate substance and audit criteria.
            </p>
          </div>

          <div className="bg-[#0E3B27] rounded-3xl border border-stone-800 p-6 space-y-3">
            <span className="text-xs font-mono font-bold text-[#D4AF37]">04 — RECORD KEEPING</span>
            <h3 className="text-xl font-serif font-bold text-[#F7F6F2]">5-Year Audit Mandate</h3>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Businesses must maintain audited financial statements and books of account for a minimum of 5 years following the relevant tax period.
            </p>
          </div>

        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-[#0E3B27] border border-stone-800 flex items-center gap-3 text-xs text-stone-300 font-mono">
          <Info className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <span>
            <strong>General Tax Notice:</strong> General guidance only — this does not constitute tax advice. Actual tax treatment depends on the specific facts and financial circumstances of the business. Consult a registered UAE tax professional for final guidance.
          </span>
        </div>

      </div>
    </section>
  );
};
