'use strict';
import React, { useState } from 'react';
import { MarketingSolution } from '@/data/marketingCatalogData';
import { X, Calendar, Clock, Crown, ShieldCheck, CheckCircle2, User, Phone, Mail, Zap, ArrowRight, Globe } from 'lucide-react';

interface MarketingAuditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSolution?: MarketingSolution | null;
  customProposalPayload?: {
    monthlyAdSpendAED: number;
    industry: string;
    objective: string;
    projectedLeads: number;
    projectedRevenueAED: number;
    blendedRoas: number;
  } | null;
}

export const MarketingAuditDrawer: React.FC<MarketingAuditDrawerProps> = ({
  isOpen,
  onClose,
  selectedSolution,
  customProposalPayload
}) => {
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [currentSpend, setCurrentSpend] = useState<string>('AED 25,000 - AED 75,000 / mo');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="w-full max-w-xl h-full bg-neutral-950 border-l border-amber-500/30 flex flex-col justify-between overflow-y-auto text-neutral-200 shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                DIFC Growth Intelligence Audit
              </span>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">
              {isSubmitted ? 'Audit Request Initiated' : 'Request Enterprise Growth Audit'}
            </h3>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex-1 py-6 flex flex-col gap-6">
            {/* Selected Scope Banner */}
            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-amber-400 mb-1">
                  Selected Growth Engagement
                </p>
                <h4 className="text-base font-serif font-bold text-white line-clamp-1">
                  {customProposalPayload
                    ? `Custom ${customProposalPayload.industry} ROI Blueprint`
                    : selectedSolution
                    ? selectedSolution.title
                    : 'Enterprise Full-Funnel Growth Audit & Strategy'}
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {customProposalPayload
                    ? `Target: AED ${customProposalPayload.projectedRevenueAED.toLocaleString()} Revenue (${customProposalPayload.blendedRoas}x ROAS)`
                    : selectedSolution
                    ? `${selectedSolution.durationWeeks} Weeks Sprint • ROAS ${selectedSolution.projectedRoas}`
                    : 'DIFC Senior Growth Director 1-on-1 Review'}
                </p>
              </div>

              <div className="text-right shrink-0 pl-3">
                <span className="text-[10px] uppercase text-neutral-500 block">SLA Response</span>
                <span className="text-xs font-semibold text-emerald-400">Under 24h</span>
              </div>
            </div>

            {/* Business Assets */}
            <div className="space-y-4">
              <label className="text-xs uppercase font-semibold text-neutral-300 block flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                1. Digital Asset & Company Details
              </label>

              <input
                type="url"
                placeholder="https://yourcompany.com (or Instagram / Landing Page)"
                required
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Company / Brand Name"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
                />

                <select
                  value={currentSpend}
                  onChange={(e) => setCurrentSpend(e.target.value)}
                  aria-label="Current Monthly Ad Spend in UAE"
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  <option value="Under AED 20,000 / mo">Under AED 20,000 / mo</option>
                  <option value="AED 20,000 - AED 50,000 / mo">AED 20,000 - AED 50,000 / mo</option>
                  <option value="AED 50,000 - AED 150,000 / mo">AED 50,000 - AED 150,000 / mo</option>
                  <option value="AED 150,000 - AED 500,000+ / mo">AED 150,000 - AED 500,000+ / mo</option>
                </select>
              </div>
            </div>

            {/* Decision Maker Contact */}
            <div className="space-y-3 pt-2">
              <label className="text-xs uppercase font-semibold text-neutral-300 block flex items-center gap-2">
                <User className="w-4 h-4 text-amber-400" />
                2. Executive Contact Details
              </label>

              <input
                type="text"
                placeholder="Full Name & Executive Title (e.g. Founder, CMO, VP Growth)"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="tel"
                  placeholder="UAE Mobile (+971 50 ...)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
                />
                <input
                  type="email"
                  placeholder="Corporate Work Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/25 transition-all mt-4 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-neutral-950" />
              <span>Deliver 24h Growth Audit & Competitor Teardown</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation */
          <div className="flex-1 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              Audit Pipeline Queued
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Growth Blueprint Under Preparation
            </h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6 leading-relaxed">
              Our Senior Growth Director at DIFC Gate Precinct has received <strong className="text-white">{websiteUrl}</strong>. A comprehensive 12-page video teardown & ROI model will be dispatched via WhatsApp to <strong className="text-amber-400">{phone || '+971 50 ...'}</strong> within 24 hours.
            </p>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all"
            >
              Done & Return to Growth Suite
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-800 text-center text-[10px] text-neutral-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Strict Non-Disclosure Agreement (NDA) Protected • DIFC Dubai</span>
        </div>
      </div>
    </div>
  );
};
