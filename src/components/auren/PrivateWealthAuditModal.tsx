'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Sparkles, 
  Lock,
  PieChart,
  Building2
} from 'lucide-react';

interface PrivateWealthAuditModalProps {
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

const WEALTH_QUESTIONS: Question[] = [
  {
    id: 'asset-concentration',
    category: 'Portfolio Concentration Risk',
    title: 'How diversified is your private wealth across asset classes and geographies?',
    description: 'Over-concentration in a single asset class (e.g. 70%+ in private business or UAE real estate) elevates tail-risk exposure during market cycles.',
    options: [
      { label: 'Multi-asset global portfolio (Equities, Sukuk, Private Credit, Real Estate, Cash)', score: 20, risk: 'Low', note: 'Institutional diversification protecting against regional drawdowns.' },
      { label: 'Moderate concentration — predominantly UAE real estate and cash deposits', score: 10, risk: 'Moderate', note: 'Exposure to real estate liquidity cycles and inflation.' },
      { label: 'Heavy concentration (80%+) in a single operating business or property', score: 0, risk: 'Critical', note: 'Severe single-asset risk. Immediate liquidity restructuring recommended.' }
    ]
  },
  {
    id: 'succession-governance',
    category: 'Succession & Estate Protection',
    title: 'Do you have registered DIFC / ADJD Wills or Foundation structures in place?',
    description: 'Without registered DIFC/ADJD Wills or Foundation SPVs, UAE bank accounts and local assets may face statutory probate freeze upon demise.',
    options: [
      { label: 'DIFC Foundation or registered DIFC/ADJD Wills covering all assets', score: 20, risk: 'Low', note: 'Full asset ring-fencing with zero probate delay.' },
      { label: 'Foreign home-country will exists, but no UAE-registered Will or Foundation', score: 10, risk: 'Moderate', note: 'Foreign probate orders take 12–18 months to execute in UAE courts.' },
      { label: 'No formal will or foundation in place', score: 0, risk: 'Critical', note: 'High risk of probate freeze and forced heirship application.' }
    ]
  },
  {
    id: 'cross-border-tax',
    category: 'Cross-Border Tax & Domicile',
    title: 'Do you hold foreign citizenship, UK/US real estate, or foreign tax residency ties?',
    description: 'Holding overseas assets directly can trigger 40% UK Inheritance Tax (IHT) or US estate tax without excluded property trust structures.',
    options: [
      { label: 'All offshore assets ring-fenced in DIFC / Channel Island holding SPVs', score: 20, risk: 'Low', note: 'Optimal international tax efficiency.' },
      { label: 'Direct ownership of UK/EU real estate with potential inheritance tax exposure', score: 5, risk: 'Moderate', note: 'Direct exposure to up to 40% foreign estate taxes.' },
      { label: 'No cross-border assets held outside UAE', score: 20, risk: 'Low', note: 'No foreign inheritance tax exposure.' }
    ]
  },
  {
    id: 'liquidity-treasury',
    category: 'Liquidity & Cash Optimization',
    title: 'What yield are your corporate and private cash reserves currently earning?',
    description: 'Idle cash in traditional current accounts loses real purchasing power to inflation. Institutional treasury repos can earn 4.8%–5.6% net yield.',
    options: [
      { label: 'Actively managed treasury earning 5%+ in institutional Sukuk and money market', score: 20, risk: 'Low', note: 'Optimal liquidity yield compounding.' },
      { label: 'Fixed deposits earning standard retail bank rates (2%–3.5%)', score: 10, risk: 'Moderate', note: 'Underperforming institutional treasury benchmarks.' },
      { label: 'Large balances sitting in 0% checking accounts', score: 0, risk: 'Critical', note: 'Substantial opportunity loss on cash reserves.' }
    ]
  },
  {
    id: 'family-governance',
    category: 'Family Board & Governance',
    title: 'Is there a formal Family Constitution or Board Governance charter?',
    description: 'A formal family constitution prevents inter-generational disputes, clarifies ownership transfer, and defines family member employment rules.',
    options: [
      { label: 'Written Family Constitution & active Family Council established', score: 20, risk: 'Low', note: 'Multi-generational longevity safeguarded.' },
      { label: 'Informal verbal agreements among patriarch/matriarch and heirs', score: 10, risk: 'Moderate', note: 'Ambiguity during future succession transitions.' },
      { label: 'No succession discussions have taken place', score: 0, risk: 'Critical', note: 'High risk of family enterprise disruption.' }
    ]
  }
];

export const PrivateWealthAuditModal: React.FC<PrivateWealthAuditModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = WEALTH_QUESTIONS[currentStep];
  const progressPercent = ((currentStep + 1) / WEALTH_QUESTIONS.length) * 100;

  const handleSelectOption = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionIndex }));
  };

  const handleNext = () => {
    if (currentStep < WEALTH_QUESTIONS.length - 1) {
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

  const totalScore = Object.entries(answers).reduce((acc, [stepIdx, optIdx]) => {
    const q = WEALTH_QUESTIONS[Number(stepIdx)];
    return acc + (q?.options[optIdx]?.score || 0);
  }, 0);

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { label: 'High Fiduciary Health — Resilient Architecture', color: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40' };
    if (score >= 50) return { label: 'Moderate Vulnerability — Governance Gaps Identified', color: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/40' };
    return { label: 'Critical Wealth & Succession Exposure', color: 'text-rose-400', bg: 'bg-rose-500/15', border: 'border-rose-500/40' };
  };

  const riskProfile = getRiskLevel(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        className="relative w-full max-w-2xl bg-[#090E17] border border-[#D4AF37]/35 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
      >
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
                <span className="text-[#D4AF37] font-bold uppercase tracking-wider">
                  Diagnostic {currentStep + 1} of {WEALTH_QUESTIONS.length} · {currentQ.category}
                </span>
                <span>{Math.round(progressPercent)}% Completed</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white mb-2 leading-snug">
              {currentQ.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-6 font-sans">
              {currentQ.description}
            </p>

            {/* Options */}
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
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40'
                        : 'bg-white/[0.02] border-white/10 text-gray-300 hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    <div className="flex-1">
                      <span className="text-xs sm:text-sm font-bold block mb-1 font-mono">
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-gray-400 font-sans block">
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

            {/* Controls */}
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
                className="px-6 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c5a059] text-black font-serif font-extrabold text-xs uppercase tracking-wider transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-[#D4AF37]/25 flex items-center gap-2 cursor-pointer"
              >
                <span>{currentStep === WEALTH_QUESTIONS.length - 1 ? 'View Fiduciary Score' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Result */
          <div className="text-center py-4">
            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${riskProfile.bg} ${riskProfile.border} border`}>
              <ShieldCheck className={`w-8 h-8 ${riskProfile.color}`} />
            </div>

            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
              Fiduciary Wealth Health Score
            </span>
            <div className="text-5xl font-extrabold font-mono text-white mb-2">
              {totalScore} <span className="text-2xl text-gray-500">/ 100</span>
            </div>

            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${riskProfile.bg} ${riskProfile.border} border ${riskProfile.color} font-mono text-xs font-bold mb-6`}>
              <span>{riskProfile.label}</span>
            </div>

            <div className="bg-[#0C121D] p-5 rounded-2xl border border-white/5 text-left mb-6 space-y-3 font-mono text-xs">
              <span className="text-white font-bold block">Key Governance Takeaways:</span>
              <ul className="space-y-2 text-gray-300">
                {WEALTH_QUESTIONS.map((q, idx) => {
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenConsultation) {
                    onOpenConsultation('Private Wealth & Succession Mandate Assessment');
                  }
                }}
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c5a059] text-black font-serif font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/30 cursor-pointer"
              >
                <span>Request Private Fiduciary Desk</span>
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
                Retake Diagnostic
              </button>
            </div>

          </div>
        )}

      </motion.div>
    </div>
  );
};
