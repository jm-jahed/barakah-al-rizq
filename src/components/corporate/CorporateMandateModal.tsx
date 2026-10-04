'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  Lock, 
  FileText, 
  Briefcase,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { CORPORATE_DIVISIONS } from '@/data/corporateEnterpriseData';

interface CorporateMandateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const CorporateMandateModal: React.FC<CorporateMandateModalProps> = ({
  isOpen,
  onClose,
  initialContext = '',
}) => {
  const [division, setDivision] = useState<string>('Strategic Capital & M&A Advisory');
  const [dealBudgetAED, setDealBudgetAED] = useState<string>('AED 250M – AED 500M');
  const [fullName, setFullName] = useState<string>('');
  const [entityName, setEntityName] = useState<string>('');
  const [officialEmail, setOfficialEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [mandateNotes, setMandateNotes] = useState<string>('');
  const [requireMutualNDA, setRequireMutualNDA] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialContext) {
      setMandateNotes(`Context / Reference: ${initialContext}`);
    }
  }, [initialContext]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0C1018] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-200"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#121722] to-[#0C1018]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                  CONFIDENTIAL EXECUTIVE MANDATE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Submit Institutional RFP / Mandate
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Mandate Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">
                    Mandate Dispatched to Executive Committee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-mono">
                    Your institutional inquiry has been encrypted and assigned to the Managing Director of {division}. An executive partner will contact you under mutual NDA within 4 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm mx-auto text-xs font-mono text-slate-400 text-left space-y-1">
                  <div><span className="text-slate-500">Tracking Reference:</span> VGH-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div><span className="text-slate-500">Jurisdiction:</span> DIFC Gate Tower 4 & ADGM Square</div>
                  <div><span className="text-slate-500">NDA Protocol:</span> Enforced Active</div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all"
                >
                  Close & Return to Portal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Division Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                    Target Enterprise Division:
                  </label>
                  <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                  >
                    {CORPORATE_DIVISIONS.map((d) => (
                      <option key={d.id} value={d.name} className="bg-[#0C1018] text-white">
                        {d.name} ({d.aum})
                      </option>
                    ))}
                    <option value="General Sovereign Consultation" className="bg-[#0C1018] text-white">
                      General Sovereign / Multi-Division Consultation
                    </option>
                  </select>
                </div>

                {/* Capital Target / Deal Size */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                    Projected Capital Deployment / Deal Scope (AED):
                  </label>
                  <select
                    value={dealBudgetAED}
                    onChange={(e) => setDealBudgetAED(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value="AED 50M – AED 100M" className="bg-[#0C1018] text-white">AED 50M – AED 100M</option>
                    <option value="AED 100M – AED 250M" className="bg-[#0C1018] text-white">AED 100M – AED 250M</option>
                    <option value="AED 250M – AED 500M" className="bg-[#0C1018] text-white">AED 250M – AED 500M</option>
                    <option value="AED 500M – AED 1B" className="bg-[#0C1018] text-white">AED 500M – AED 1 Billion</option>
                    <option value="AED 1B+" className="bg-[#0C1018] text-white">AED 1 Billion+ (Mega-Sovereign)</option>
                  </select>
                </div>

                {/* Name & Entity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Executive Full Name: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="H.E. / Dr. / Mr. Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Institution / Family Conglomerate: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Entity / Fund Name"
                      value={entityName}
                      onChange={(e) => setEntityName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Official Corporate Email: *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="executive@institution.ae"
                      value={officialEmail}
                      onChange={(e) => setOfficialEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                      Direct WhatsApp / Phone: *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Mandate Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 uppercase block font-medium">
                    Mandate Scope & Objectives:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief overview of transaction, timeline, target assets, or jurisdiction preferences..."
                    value={mandateNotes}
                    onChange={(e) => setMandateNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                {/* NDA Toggle */}
                <div 
                  onClick={() => setRequireMutualNDA(!requireMutualNDA)}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Lock className={`w-4 h-4 ${requireMutualNDA ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <div className="text-xs font-mono text-slate-200">
                      Enforce Mutual Institutional Non-Disclosure Agreement (NDA)
                    </div>
                  </div>
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md ${
                    requireMutualNDA ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {requireMutualNDA ? 'Required' : 'Standard'}
                  </span>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Encrypted Mandate RFP</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
