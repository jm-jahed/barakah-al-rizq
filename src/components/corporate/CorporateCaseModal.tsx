'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Coins, 
  FileText, 
  ArrowRight,
  Download
} from 'lucide-react';
import { CorporateCaseStudy } from '@/data/corporateEnterpriseData';

interface CorporateCaseModalProps {
  caseStudy: CorporateCaseStudy | null;
  onClose: () => void;
  onOpenMandateModal: (mandateContext?: string) => void;
}

export const CorporateCaseModal: React.FC<CorporateCaseModalProps> = ({
  caseStudy,
  onClose,
  onOpenMandateModal,
}) => {
  if (!caseStudy) return null;

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
          className="relative w-full max-w-3xl bg-[#0C1018] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-200"
        >
          {/* Header Banner */}
          <div className="relative aspect-[21/9] w-full bg-slate-950 overflow-hidden">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-[#0C1018]/60 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Close Case Study Brief"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 inset-x-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                  {caseStudy.dealSizeAED}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {caseStudy.sector}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {caseStudy.title}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Client Entity</span>
                <span className="text-white font-bold">{caseStudy.client}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Jurisdiction</span>
                <span className="text-emerald-300 font-bold">{caseStudy.jurisdiction}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Timeline</span>
                <span className="text-white font-bold">{caseStudy.year}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Status</span>
                <span className="text-amber-300 font-bold">Closed & Executed</span>
              </div>
            </div>

            {/* 3-Part Deep Breakdown */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  1. The Strategic Challenge:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  2. Institutional Structuring & Solution:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  3. Fiduciary Outcome & Metrics Delivered:
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {caseStudy.outcome}
                </p>
              </div>
            </div>

            {/* Verified Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#111724] border border-white/10 text-center">
                  <div className="text-base sm:text-lg font-mono font-black text-amber-300">{m.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-[#090C12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>DFSA & FSRA Verified Mandate Brief</span>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenMandateModal(`Inquiry based on Case Study: ${caseStudy.title}`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <span>Initiate Similar Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
