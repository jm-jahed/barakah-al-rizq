'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Users, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  AlertCircle,
  Briefcase
} from 'lucide-react';

interface UaeGratuityCalculatorProps {
  onOpenConsultation?: (defaultService?: string) => void;
}

export const UaeGratuityCalculator: React.FC<UaeGratuityCalculatorProps> = ({
  onOpenConsultation
}) => {
  const [basicSalary, setBasicSalary] = useState<number>(12000);
  const [yearsOfService, setYearsOfService] = useState<number>(3);
  const [monthsOfService, setMonthsOfService] = useState<number>(6);
  const [contractType, setContractType] = useState<'limited' | 'unlimited'>('limited');
  const [terminationType, setTerminationType] = useState<'employer_termination' | 'employee_resignation'>('employer_termination');
  const [unusedLeaveDays, setUnusedLeaveDays] = useState<number>(14);

  // Calculation under UAE Federal Decree-Law No. 33 of 2021 (New Labor Law)
  const calculation = useMemo(() => {
    const totalDecimalYears = yearsOfService + monthsOfService / 12;

    // Minimum service threshold: under 1 year = 0 gratuity
    if (totalDecimalYears < 1) {
      return {
        dailyWage: basicSalary / 30,
        gratuityAmount: 0,
        leaveEncashment: (basicSalary / 30) * unusedLeaveDays,
        totalPayout: (basicSalary / 30) * unusedLeaveDays,
        isEligible: false,
        capped: false
      };
    }

    const dailyWage = basicSalary / 30;
    let rawGratuity = 0;

    // Under the New UAE Labor Law (Decree-Law 33/2021):
    // Standard rule for limited contracts (and resigned employees after 1 year):
    // 21 days basic salary for each year of the first 5 years
    // 30 days basic salary for each additional year
    if (totalDecimalYears <= 5) {
      rawGratuity = totalDecimalYears * 21 * dailyWage;
    } else {
      const first5Years = 5 * 21 * dailyWage;
      const additionalYears = (totalDecimalYears - 5) * 30 * dailyWage;
      rawGratuity = first5Years + additionalYears;
    }

    // Gratuity cannot exceed two years' basic salary (Article 51)
    const maxGratuityCap = basicSalary * 24;
    const capped = rawGratuity > maxGratuityCap;
    const gratuityAmount = Math.min(rawGratuity, maxGratuityCap);

    // Leave salary calculation
    const leaveEncashment = dailyWage * unusedLeaveDays;
    const totalPayout = gratuityAmount + leaveEncashment;

    return {
      dailyWage,
      gratuityAmount,
      leaveEncashment,
      totalPayout,
      isEligible: true,
      capped,
      maxGratuityCap
    };
  }, [basicSalary, yearsOfService, monthsOfService, contractType, terminationType, unusedLeaveDays]);

  return (
    <section id="gratuity-calculator" className="py-24 relative bg-[#090D14] border-b border-emerald-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>UAE Labor Law Statutory Payout Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            End of Service Gratuity (EOSG) &amp; Settlement Calculator
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Accurately calculate statutory employee severance, notice settlements, and leave encashments under UAE Federal Decree-Law No. 33 of 2021.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0E1522] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
            
            {/* 01. Monthly Basic Salary */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  01 · Monthly Basic Salary (Excluding Allowances)
                </label>
                <span className="text-sm font-extrabold font-mono text-emerald-400">
                  AED {basicSalary.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={60000}
                step={500}
                value={basicSalary}
                onChange={(e) => setBasicSalary(Number(e.target.value))}
                className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>AED 2,000</span>
                <span>AED 30,000</span>
                <span>AED 60,000+</span>
              </div>
              <p className="text-[11px] text-gray-500 font-mono mt-1.5">
                ✦ UAE Gratuity is strictly calculated on Basic Salary as registered on the MoHRE / Free Zone labor contract.
              </p>
            </div>

            {/* 02. Service Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Completed Years
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={35}
                    value={yearsOfService}
                    onChange={(e) => setYearsOfService(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090E17] border border-white/10 text-white font-mono font-bold text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <span className="text-xs font-mono text-gray-400 shrink-0">Years</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Additional Months
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={0}
                    max={11}
                    value={monthsOfService}
                    onChange={(e) => setMonthsOfService(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090E17] border border-white/10 text-white font-mono font-bold text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <span className="text-xs font-mono text-gray-400 shrink-0">Months</span>
                </div>
              </div>
            </div>

            {/* 03. Separation Reason & Contract Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Labor Contract Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setContractType('limited')}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold text-center transition-all cursor-pointer border ${
                      contractType === 'limited'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold'
                        : 'bg-white/[0.02] text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Limited Term
                  </button>
                  <button
                    type="button"
                    onClick={() => setContractType('unlimited')}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold text-center transition-all cursor-pointer border ${
                      contractType === 'unlimited'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold'
                        : 'bg-white/[0.02] text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Unlimited
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Reason for Separation
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTerminationType('employer_termination')}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold text-center transition-all cursor-pointer border ${
                      terminationType === 'employer_termination'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold'
                        : 'bg-white/[0.02] text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Termination
                  </button>
                  <button
                    type="button"
                    onClick={() => setTerminationType('employee_resignation')}
                    className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold text-center transition-all cursor-pointer border ${
                      terminationType === 'employee_resignation'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold'
                        : 'bg-white/[0.02] text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Resignation
                  </button>
                </div>
              </div>
            </div>

            {/* 04. Unused Annual Leave Days */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  Accrued Untaken Annual Leave Days
                </label>
                <span className="text-xs font-bold font-mono text-white">
                  {unusedLeaveDays} Days Balance
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={60}
                step={1}
                value={unusedLeaveDays}
                onChange={(e) => setUnusedLeaveDays(Number(e.target.value))}
                className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

          </div>

          {/* Right Settlement Summary (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111927] to-[#0A0F18] rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">Final Settlement Payout</span>
                <h3 className="text-lg font-extrabold text-white font-mono">Statutory EOSG Schedule</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold">
                UAE Law 33/2021
              </span>
            </div>

            {/* Payout Display */}
            <div className="p-6 rounded-2xl bg-[#090E17] border border-white/10 text-center">
              <span className="text-xs font-mono text-gray-400 block mb-1">Total Net Settlement Payout</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400 font-mono my-2 tracking-tight">
                AED {Math.round(calculation.totalPayout).toLocaleString()}
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono font-bold mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>WPS &amp; MoHRE Compliant</span>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Calculated Daily Basic Wage</span>
                <span className="text-white font-bold">AED {calculation.dailyWage.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Service Duration</span>
                <span className="text-white font-bold">{yearsOfService} Yrs, {monthsOfService} Mos</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Statutory Gratuity (EOSG)</span>
                <span className="text-emerald-400 font-extrabold">
                  AED {Math.round(calculation.gratuityAmount).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Leave Encashment ({unusedLeaveDays} Days)</span>
                <span className="text-amber-400 font-bold">
                  AED {Math.round(calculation.leaveEncashment).toLocaleString()}
                </span>
              </div>

              {calculation.capped && (
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono flex items-center gap-2">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Gratuity payout capped at 2 years' basic salary (Article 51).</span>
                </div>
              )}
            </div>

            {/* Booking CTA */}
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('Payroll & WPS Processing');
                }
              }}
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 cursor-pointer"
            >
              <span>Retain Monthly Payroll &amp; WPS Processing</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
