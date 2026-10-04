'use client';

import React, { useState } from 'react';
import { Scale, ArrowRight, Info, ShieldAlert, CheckCircle2, Calculator, Clock, Briefcase, FileCheck } from 'lucide-react';

interface MatterAssessmentToolProps {
  onOpenConsultationWithAssessment: (matter: string, stage: string, mode: string) => void;
}

export const MatterAssessmentTool: React.FC<MatterAssessmentToolProps> = ({
  onOpenConsultationWithAssessment,
}) => {
  const [matterType, setMatterType] = useState('Contract');
  const [businessStage, setBusinessStage] = useState('SME');
  const [urgency, setUrgency] = useState('Standard');
  const [dealValueAED, setDealValueAED] = useState<number>(3500000);

  // Dynamic fee calculation based on parameters
  let baseFeeAED = 18500;
  let estimatedDurationDays = 7;
  let partnerHours = 12;
  let recommendedPractice = 'Contract Drafting & Commercial Review';
  let recommendedEngagement = 'Bespoke Fixed Fee';
  let suggestedNextStep = 'Conduct 48-hour preliminary contract risk audit, identify non-standard covenants, and negotiate key commercial protections.';

  if (matterType === 'Dispute') {
    recommendedPractice = 'Dispute Resolution & DIAC / DIFC Court Litigation';
    recommendedEngagement = 'Retainer & Chambers Schedule';
    suggestedNextStep = 'Review jurisdiction clauses, issue formal pre-action legal notice, and prepare DIAC arbitration request statement.';
    baseFeeAED = Math.round(35000 + (dealValueAED * 0.008));
    estimatedDurationDays = 45;
    partnerHours = 36;
  } else if (matterType === 'Structuring') {
    recommendedPractice = 'Corporate Structuring & DIFC / ADGM Foundations';
    recommendedEngagement = 'Fixed Fee Structuring Package';
    suggestedNextStep = 'Evaluate asset holdings, draft foundation charter & by-laws, and ring-fence inter-company liability.';
    baseFeeAED = 28000;
    estimatedDurationDays = 14;
    partnerHours = 20;
  } else if (matterType === 'Compliance') {
    recommendedPractice = 'Regulatory & UAE Corporate Tax (9%) Compliance';
    recommendedEngagement = 'Annual Retainer Advisory';
    suggestedNextStep = 'Audit QFZP eligibility, review anti-money laundering (AML) protocols, and file ESR declarations with Ministry of Finance.';
    baseFeeAED = 22000;
    estimatedDurationDays = 10;
    partnerHours = 15;
  } else if (matterType === 'M&A') {
    recommendedPractice = 'Mergers & Acquisitions Legal Due Diligence';
    recommendedEngagement = 'Bespoke Transaction Fee';
    suggestedNextStep = 'Execute bilateral NDA, issue Legal Due Diligence Request List, and draft definitive Share Purchase Agreement (SPA).';
    baseFeeAED = Math.round(45000 + (dealValueAED * 0.005));
    estimatedDurationDays = 30;
    partnerHours = 48;
  }

  if (urgency === 'Urgent') {
    baseFeeAED = Math.round(baseFeeAED * 1.25);
    estimatedDurationDays = Math.max(2, Math.round(estimatedDurationDays * 0.5));
    recommendedEngagement += ' (Expedited 24h Counsel)';
  }

  return (
    <section id="assessment" className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            INTERACTIVE LEGAL TRIAGE & FEE ESTIMATOR
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
            Scope & Fee Assessment.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Configure your corporate matter parameters below to calculate estimated partner hours, statutory timelines, and transparent fixed-fee legal quotes in AED.
          </p>
        </div>

        {/* Assessment Box */}
        <div className="bg-[#0F1C3F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-5xl mx-auto font-mono text-xs space-y-8">
          
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Matter Type */}
            <div className="p-4 rounded-2xl bg-[#0B132B] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">STEP 01 — MATTER TYPE</label>
              <select
                value={matterType}
                onChange={(e) => setMatterType(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none cursor-pointer"
              >
                <option value="Contract" className="bg-[#0B132B]">Contract Drafting / Review</option>
                <option value="Dispute" className="bg-[#0B132B]">Dispute Resolution / Arbitration</option>
                <option value="Structuring" className="bg-[#0B132B]">Corporate Structuring & Foundation</option>
                <option value="Compliance" className="bg-[#0B132B]">Tax (9%) & AML Compliance</option>
                <option value="M&A" className="bg-[#0B132B]">Mergers & Acquisitions (M&A)</option>
              </select>
            </div>

            {/* Step 2: Business Stage */}
            <div className="p-4 rounded-2xl bg-[#0B132B] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">STEP 02 — CLIENT ENTITY</label>
              <select
                value={businessStage}
                onChange={(e) => setBusinessStage(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none cursor-pointer"
              >
                <option value="Startup" className="bg-[#0B132B]">DIFC / ADGM Tech Startup</option>
                <option value="SME" className="bg-[#0B132B]">Established UAE Commercial SME</option>
                <option value="Enterprise" className="bg-[#0B132B]">Multinational / Sovereign Group</option>
              </select>
            </div>

            {/* Step 3: Urgency */}
            <div className="p-4 rounded-2xl bg-[#0B132B] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">STEP 03 — TIMELINE PRIORITY</label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none cursor-pointer"
              >
                <option value="Standard" className="bg-[#0B132B]">Standard Review (5-7 Days)</option>
                <option value="Urgent" className="bg-[#0B132B]">Expedited Priority (24-48 Hours)</option>
              </select>
            </div>

          </div>

          {/* Deal Value Slider for M&A / Commercial Disputes */}
          {(matterType === 'M&A' || matterType === 'Dispute' || matterType === 'Structuring') && (
            <div className="p-5 rounded-2xl bg-[#0B132B] border border-stone-800 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs text-stone-300 font-bold uppercase">
                  TRANSACTION / DISPUTED ASSET VALUE (AED)
                </label>
                <span className="text-base font-extrabold text-[#C5A059]">
                  AED {dealValueAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="50000000"
                step="500000"
                value={dealValueAED}
                onChange={(e) => setDealValueAED(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer h-2 bg-stone-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>AED 500,000</span>
                <span>AED 25,000,000</span>
                <span>AED 50,000,000+</span>
              </div>
            </div>
          )}

          {/* Live Output Card with Estimated Legal Fee */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0B132B] to-[#14234E] border border-[#C5A059]/40 space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-6">
              <div>
                <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest block mb-1">
                  RECOMMENDED PRACTICE GROUP
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {recommendedPractice}
                </h3>
              </div>
              
              <div className="text-right">
                <span className="text-[10px] text-stone-400 uppercase block">ESTIMATED FIXED ENGAGEMENT</span>
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#C5A059]">
                  AED {baseFeeAED.toLocaleString()}
                </span>
                <span className="text-[10px] text-stone-400 block">{recommendedEngagement}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#0B132B]/80 border border-stone-800 flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="text-stone-400 text-[10px] block">Turnaround SLA</span>
                  <span className="text-white font-bold">{estimatedDurationDays} Business Days</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B132B]/80 border border-stone-800 flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="text-stone-400 text-[10px] block">Partner Attention</span>
                  <span className="text-white font-bold">{partnerHours} Dedicated Hours</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B132B]/80 border border-stone-800 flex items-center gap-3">
                <FileCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <div>
                  <span className="text-stone-400 text-[10px] block">Statutory Deliverable</span>
                  <span className="text-white font-bold">Airtight Legal Suite</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B132B] border border-stone-800 text-stone-300 font-sans text-xs leading-relaxed">
              <strong className="text-[#C5A059] font-mono block mb-1">PROPOSED IMMEDIATE ACTION SCOPE:</strong>
              {suggestedNextStep}
            </div>

            {/* Disclaimer */}
            <div className="p-3.5 rounded-xl bg-[#0B132B]/50 border border-stone-800 flex items-center gap-2.5 text-[11px] text-stone-400">
              <ShieldAlert className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>
                Protected under legal professional privilege & strict attorney-client confidentiality rules.
              </span>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-stone-400 text-[11px] font-sans">
                Formal engagement letters issued with transparent milestone invoicing.
              </span>

              <button
                onClick={() => onOpenConsultationWithAssessment(
                  `${recommendedPractice} (Matter Value: AED ${dealValueAED.toLocaleString()})`,
                  `${businessStage} — ${urgency}`,
                  `Estimated AED ${baseFeeAED.toLocaleString()} (${recommendedEngagement})`
                )}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#C5A059] hover:scale-105 text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 transition-all cursor-pointer"
              >
                <span>Instruct Counsel with This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
