'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Sparkles, 
  FileText,
  Building,
  HelpCircle
} from 'lucide-react';

interface FtaComplianceAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

interface Question {
  id: string;
  category: string;
  title: string;
  description: string;
  options: {
    label: string;
    score: number;
    risk: 'Low' | 'Moderate' | 'Critical';
    note: string;
  }[];
}

const AUDIT_QUESTIONS: Question[] = [
  {
    id: 'ct-reg',
    category: 'Corporate Tax (9%)',
    title: 'Has your company obtained an official FTA Corporate Tax TRN?',
    description: 'Under FTA Decision No. 3 of 2024, strict corporate tax registration deadlines apply with an administrative penalty of AED 10,000 for late registration.',
    options: [
      { label: 'Yes — Corporate Tax TRN issued and active on EmaraTax', score: 20, risk: 'Low', note: 'Compliant with FTA registration deadlines.' },
      { label: 'Application submitted — pending FTA verification', score: 10, risk: 'Moderate', note: 'Monitor EmaraTax portal closely.' },
      { label: 'No — Not yet registered or deadline missed', score: 0, risk: 'Critical', note: 'Immediate risk of AED 10,000 FTA late registration penalty.' }
    ]
  },
  {
    id: 'accounting-system',
    category: 'IFRS Accounting & Books',
    title: 'How are your financial records and general ledger maintained?',
    description: 'Article 56 of the Corporate Tax Law requires businesses to maintain IFRS-compliant audited or verified financial records for at least 7 years.',
    options: [
      { label: 'Monthly IFRS cloud accounting (Xero/QuickBooks/Zoho) with bank reconciliations', score: 20, risk: 'Low', note: 'High audit readiness with digital trail.' },
      { label: 'Periodic Excel spreadsheets and manual ledgers', score: 10, risk: 'Moderate', note: 'Vulnerable during comprehensive FTA tax audits.' },
      { label: 'No formal accounting system — receipts kept in folders', score: 0, risk: 'Critical', note: 'Severe non-compliance risk under Tax Procedures Law.' }
    ]
  },
  {
    id: 'vat-compliance',
    category: 'VAT & Tax Invoices',
    title: 'Are your VAT 201 quarterly returns reconciled and tax invoices compliant?',
    description: 'Tax invoices must contain mandatory statutory fields (TRN, sequential number, VAT rate, supplier & recipient details in AED).',
    options: [
      { label: '100% compliant with standard VAT invoices and quarterly reconciliations', score: 20, risk: 'Low', note: 'Strong input VAT deduction defense.' },
      { label: 'Returns filed but internal reconciliations are delayed or incomplete', score: 10, risk: 'Moderate', note: 'Risk of input VAT disallowance upon audit.' },
      { label: 'Turnover exceeds AED 375k but business is not VAT registered', score: 0, risk: 'Critical', note: 'Mandatory penalty of AED 20,000 for late VAT registration.' }
    ]
  },
  {
    id: 'transfer-pricing',
    category: 'Transfer Pricing & Related Parties',
    title: 'Do you engage in transactions with related parties, sister companies, or directors?',
    description: 'Arm’s length standard must be maintained for owner salaries, intercompany management fees, and cross-entity loans with transfer pricing documentation.',
    options: [
      { label: 'Arm’s length agreements & benchmark documentation in place', score: 20, risk: 'Low', note: 'Protected against related-party tax adjustments.' },
      { label: 'Related party transactions exist without written transfer pricing policies', score: 5, risk: 'Moderate', note: 'Potential FTA challenge on director salary & fees.' },
      { label: 'No related party transactions take place', score: 20, risk: 'Low', note: 'No transfer pricing exposure.' }
    ]
  },
  {
    id: 'esr-ubo',
    category: 'ESR & Corporate Governance',
    title: 'Are your ESR Notifications and Real Beneficiary (UBO) registers up to date?',
    description: 'Cabinet Decision No. 109 of 2023 mandates annual UBO register maintenance with licensing authorities.',
    options: [
      { label: 'All ESR filings and UBO declarations submitted and approved', score: 20, risk: 'Low', note: 'Zero corporate governance penalties.' },
      { label: 'UBO filed during license renewal, ESR status unconfirmed', score: 10, risk: 'Moderate', note: 'Verify if company falls under Relevant Activities.' },
      { label: 'No UBO or ESR filings have been completed', score: 0, risk: 'Critical', note: 'Commercial license suspension and MoF fines risk.' }
    ]
  }
];

export const FtaComplianceAuditModal: React.FC<FtaComplianceAuditModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = AUDIT_QUESTIONS[currentStep];
  const progressPercent = ((currentStep + 1) / AUDIT_QUESTIONS.length) * 100;

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionIndex }));
  };

  const handleNext = () => {
    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Calculate Total Score & Risk Profile
  const totalScore = Object.entries(answers).reduce((acc, [stepIdx, optIdx]) => {
    const q = AUDIT_QUESTIONS[Number(stepIdx)];
    return acc + (q?.options[optIdx]?.score || 0);
  }, 0);

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { label: 'Low Risk — Audit Ready', color: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40' };
    if (score >= 50) return { label: 'Moderate Risk — Remediation Required', color: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/40' };
    return { label: 'Critical Non-Compliance Risk', color: 'text-rose-400', bg: 'bg-rose-500/15', border: 'border-rose-500/40' };
  };

  const riskProfile = getRiskLevel(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        className="relative w-full max-w-2xl bg-[#0C121D] border border-emerald-500/35 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Step Progress Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">
                  Step {currentStep + 1} of {AUDIT_QUESTIONS.length} · {currentQ.category}
                </span>
                <span>{Math.round(progressPercent)}% Complete</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question Title & Details */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-snug">
              {currentQ.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-6">
              {currentQ.description}
            </p>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentStep] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-md shadow-emerald-500/15 ring-1 ring-emerald-500/40'
                        : 'bg-white/[0.02] border-white/10 text-gray-300 hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    <div className="flex-1">
                      <span className="text-xs sm:text-sm font-bold block mb-1 font-mono">
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-gray-400 font-mono block">
                        {opt.note}
                      </span>
                    </div>

                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                      opt.risk === 'Low' ? 'bg-emerald-500/20 text-emerald-400' :
                      opt.risk === 'Moderate' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }`}>
                      {opt.risk} Risk
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Nav Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono font-semibold text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={answers[currentStep] === undefined}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentStep === AUDIT_QUESTIONS.length - 1 ? 'View Audit Result' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Result Summary Screen */
          <div className="text-center py-4">
            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${riskProfile.bg} ${riskProfile.border} border`}>
              <ShieldCheck className={`w-8 h-8 ${riskProfile.color}`} />
            </div>

            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
              FTA Statutory Audit Readiness Score
            </span>
            <div className="text-5xl font-extrabold font-mono text-white mb-2">
              {totalScore} <span className="text-2xl text-gray-500">/ 100</span>
            </div>

            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${riskProfile.bg} ${riskProfile.border} border ${riskProfile.color} font-mono text-xs font-bold mb-6`}>
              <span>{riskProfile.label}</span>
            </div>

            {/* Findings Card */}
            <div className="bg-[#111927] p-5 rounded-2xl border border-white/5 text-left mb-6 space-y-3 font-mono text-xs">
              <span className="text-white font-bold block">Summary Findings:</span>
              <ul className="space-y-2 text-gray-300">
                {AUDIT_QUESTIONS.map((q, idx) => {
                  const opt = q.options[answers[idx] || 0];
                  return (
                    <li key={q.id} className="flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                        opt.risk === 'Low' ? 'bg-emerald-400' :
                        opt.risk === 'Moderate' ? 'bg-amber-400' : 'bg-rose-400'
                      }`} />
                      <div>
                        <strong className="text-white">{q.category}:</strong> {opt.note}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Action CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenConsultation) {
                    onOpenConsultation('FTA Tax Audit Readiness & Assessment');
                  }
                }}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 cursor-pointer"
              >
                <span>Book FTA Audit Defense Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setIsCompleted(false);
                }}
                className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
              >
                Retake Assessment
              </button>
            </div>

          </div>
        )}

      </motion.div>
    </div>
  );
};
