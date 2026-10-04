'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck, DollarSign, Percent, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';

interface RealEstateMortgageCalculatorProps {
  onOpenViewing: () => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const RealEstateMortgageCalculator: React.FC<RealEstateMortgageCalculatorProps> = ({
  onOpenViewing,
  currency
}) => {
  // State variables for calculation
  const [propertyPriceAED, setPropertyPriceAED] = useState<number>(25000000); // 25M AED default
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20); // 20%
  const [loanTenureYears, setLoanTenureYears] = useState<number>(25); // 25 years
  const [interestRatePct, setInterestRatePct] = useState<number>(4.25); // 4.25% fixed
  const [expectedYieldPct, setExpectedYieldPct] = useState<number>(6.5); // 6.5% rental yield

  // Calculations
  const downPaymentAED = (propertyPriceAED * downPaymentPct) / 100;
  const loanAmountAED = propertyPriceAED - downPaymentAED;
  
  // DLD Transfer Fee (4%) + Admin Fees
  const dldFeeAED = propertyPriceAED * 0.04;
  const trusteeFeeAED = 4200;
  const valuationFeeAED = 3150;
  const totalUpfrontCashAED = downPaymentAED + dldFeeAED + trusteeFeeAED + valuationFeeAED;

  // Monthly Mortgage Amortization: P = [r*PV] / [1 - (1 + r)^-n]
  const monthlyRate = interestRatePct / 100 / 12;
  const totalPayments = loanTenureYears * 12;
  const monthlyMortgageAED = useMemo(() => {
    if (loanAmountAED <= 0) return 0;
    if (monthlyRate === 0) return loanAmountAED / totalPayments;
    return (loanAmountAED * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }, [loanAmountAED, monthlyRate, totalPayments]);

  // Annual Rental Income projection
  const annualRentalIncomeAED = (propertyPriceAED * expectedYieldPct) / 100;
  const monthlyRentalIncomeAED = annualRentalIncomeAED / 12;
  const netMonthlyCashflowAED = monthlyRentalIncomeAED - monthlyMortgageAED;

  const isGoldenVisaEligible = propertyPriceAED >= 2000000;

  return (
    <section id="mortgage-roi" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Private Wealth Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            UAE Mortgage & ROI Calculator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light">
            Model cash flow yields, monthly bank amortization, and DLD closing capital requirements across your prime UAE acquisition.
          </p>
        </div>

        {/* Interactive Calculator Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/50 border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-zinc-800 pb-3 flex items-center justify-between">
              <span>Acquisition Parameters</span>
              {isGoldenVisaEligible && (
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-normal flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  10-Yr Golden Visa Eligible
                </span>
              )}
            </h3>

            {/* Property Price Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-zinc-400 uppercase">Property Price (AED)</span>
                <span className="text-amber-400 font-bold text-sm">AED {propertyPriceAED.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={3000000}
                max={100000000}
                step={500000}
                value={propertyPriceAED}
                onChange={(e) => setPropertyPriceAED(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                <span>AED 3M</span>
                <span>AED 50M</span>
                <span>AED 100M</span>
              </div>
            </div>

            {/* Down Payment % Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-zinc-400 uppercase">Down Payment (%)</span>
                <span className="text-amber-400 font-bold text-sm">{downPaymentPct}% (AED {downPaymentAED.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min={20}
                max={60}
                step={5}
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                <span>20% (UAE Min. Non-Resident)</span>
                <span>60%</span>
              </div>
            </div>

            {/* Loan Tenure & Interest Rate */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                  Loan Tenure (Years)
                </label>
                <select
                  value={loanTenureYears}
                  onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-white focus:border-amber-500/60 focus:outline-none"
                >
                  {[5, 10, 15, 20, 25].map((y) => (
                    <option key={y} value={y}>{y} Years</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                  Interest Rate (% p.a.)
                </label>
                <select
                  value={interestRatePct}
                  onChange={(e) => setInterestRatePct(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-white focus:border-amber-500/60 focus:outline-none"
                >
                  {[3.75, 4.0, 4.25, 4.5, 4.75, 5.0, 5.5].map((r) => (
                    <option key={r} value={r}>{r}% Fixed Rate</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Expected Rental Yield */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-zinc-400 uppercase">Target Rental Yield (% Gross)</span>
                <span className="text-emerald-400 font-bold text-sm">{expectedYieldPct}%</span>
              </div>
              <input
                type="range"
                min={4.0}
                max={10.0}
                step={0.5}
                value={expectedYieldPct}
                onChange={(e) => setExpectedYieldPct(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-6 bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Live Investment Metrics
              </h3>

              {/* Monthly Payment Hero Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/30 mb-5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  Estimated Monthly Mortgage Payment
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 mt-1">
                  AED {Math.round(monthlyMortgageAED).toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1">
                  Based on AED {loanAmountAED.toLocaleString()} principal financing
                </div>
              </div>

              {/* Cashflow Telemetry Table */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Total Upfront Cash Required (Inc. 4% DLD):</span>
                  <span className="text-white font-bold">AED {Math.round(totalUpfrontCashAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Dubai Land Dept. (DLD 4% Fee):</span>
                  <span className="text-zinc-300">AED {dldFeeAED.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Projected Annual Rental Income:</span>
                  <span className="text-emerald-400 font-semibold">AED {annualRentalIncomeAED.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Estimated Monthly Net Cash Flow:</span>
                  <span className={`font-bold ${netMonthlyCashflowAED >= 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {netMonthlyCashflowAED >= 0 ? '+' : ''}AED {Math.round(netMonthlyCashflowAED).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Advisory CTA */}
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={onOpenViewing}
                className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Consult with Private Mortgage Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
