'use client';

import React, { useState } from 'react';
import { ArrowRight, Info, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface TaxReadinessCheckerProps {
  onOpenConsultationWithRisk: (risk: string, details: string) => void;
}

export const TaxReadinessChecker: React.FC<TaxReadinessCheckerProps> = ({ onOpenConsultationWithRisk }) => {
  const [revenueTier, setRevenueTier] = useState('Over375k');
  const [businessType, setBusinessType] = useState('Mainland');
  const [bookkeepingStatus, setBookkeepingStatus] = useState('Partially');

  // Compute Risk Level
  let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' = 'MEDIUM';
  let recommendedAction = 'Schedule a professional bookkeeping catch-up and FTA Corporate Tax registration audit.';

  if (bookkeepingStatus === 'Backlogged' || bookkeepingStatus === 'NotMaintained') {
    riskLevel = 'HIGH';
    recommendedAction = 'Urgent action required: Reconcile backlogged ledgers to prevent FTA non-compliance penalties.';
  } else if (bookkeepingStatus === 'FullyUpToDate' && revenueTier === 'Under375k') {
    riskLevel = 'LOW';
    recommendedAction = 'Maintain current cloud ledgers and verify corporate tax registration timeline.';
  } else if (bookkeepingStatus === 'FullyUpToDate' && revenueTier === 'Over375k') {
    riskLevel = 'LOW';
    recommendedAction = 'Review qualifying expense deductions and prepare annual 9% Corporate Tax return file.';
  }

  return (
    <section id="tax-checker" className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            INTERACTIVE COMPLIANCE ASSESSMENT
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Check Your Corporate Tax Readiness.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Evaluate your entity's current financial record status to identify compliance exposure and recommended legal steps.
          </p>
        </div>

        {/* Assessment Tool Box */}
        <div className="bg-[#0E3B27] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Input 1: Revenue Tier */}
            <div className="p-4 rounded-2xl bg-[#0A291C] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">01 — ANNUAL REVENUE TIER</label>
              <select
                value={revenueTier}
                onChange={(e) => setRevenueTier(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none"
              >
                <option value="Under375k" className="bg-[#0A291C]">Under AED 375,000 / Year</option>
                <option value="Over375k" className="bg-[#0A291C]">AED 375,000 – AED 3,000,000</option>
                <option value="Enterprise" className="bg-[#0A291C]">Over AED 3,000,000 / Year</option>
              </select>
            </div>

            {/* Input 2: Business Type */}
            <div className="p-4 rounded-2xl bg-[#0A291C] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">02 — BUSINESS JURISDICTION</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none"
              >
                <option value="Mainland" className="bg-[#0A291C]">UAE Mainland LLC (DED)</option>
                <option value="FreeZone" className="bg-[#0A291C]">Free Zone Entity (DMCC/JAFZA/RAKEZ)</option>
                <option value="Holding" className="bg-[#0A291C]">Holding / SPV Structure</option>
              </select>
            </div>

            {/* Input 3: Bookkeeping Status */}
            <div className="p-4 rounded-2xl bg-[#0A291C] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">03 — BOOKKEEPING STATUS</label>
              <select
                value={bookkeepingStatus}
                onChange={(e) => setBookkeepingStatus(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none"
              >
                <option value="FullyUpToDate" className="bg-[#0A291C]">Fully Up to Date (Cloud Reconciled)</option>
                <option value="Partially" className="bg-[#0A291C]">Partially Organized (Invoices Present)</option>
                <option value="Backlogged" className="bg-[#0A291C]">Backlogged (3+ Months Behind)</option>
                <option value="NotMaintained" className="bg-[#0A291C]">Not Maintained / No Software</option>
              </select>
            </div>

          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-[#0A291C] border border-[#D4AF37]/30 space-y-3 font-mono text-xs mb-6">
            <div className="flex items-center justify-between">
              <span className="text-stone-400">ASSESSED COMPLIANCE RISK LEVEL:</span>
              <span
                className={`px-3 py-1 rounded-full font-bold text-xs uppercase ${
                  riskLevel === 'HIGH'
                    ? 'bg-rose-950 text-rose-300 border border-rose-500/40'
                    : riskLevel === 'MEDIUM'
                    ? 'bg-amber-950 text-amber-300 border border-amber-500/40'
                    : 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                {riskLevel} RISK
              </span>
            </div>

            <div className="pt-2 border-t border-stone-800 space-y-1">
              <span className="text-stone-400 text-[10px] uppercase block">RECOMMENDED COMPLIANCE STEP:</span>
              <p className="text-stone-200 font-sans font-light text-xs leading-relaxed">{recommendedAction}</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-[#0A291C]/80 border border-stone-800 flex items-center gap-3 text-[11px] text-stone-400 mb-6">
            <ShieldAlert className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <span>
              <strong>General Guidance Notice:</strong> This screening tool provides general guidance only and does not constitute tax or legal advice. Consult a registered UAE tax professional for official assessment.
            </span>
          </div>

          <button
            onClick={() => onOpenConsultationWithRisk(riskLevel, recommendedAction)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all"
          >
            <span>Get a Professional Compliance Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
