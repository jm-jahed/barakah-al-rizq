'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  ArrowRight,
  ShieldAlert,
  Layers,
  TrendingUp,
  DollarSign,
  Award,
  Sparkles,
  Calendar,
  Percent,
  CheckCircle2,
  FileSpreadsheet,
  Download
} from 'lucide-react';
import { VANTAGE_BRAND } from '@/data/vantageData';

interface VantageFinancialSuiteProps {
  onOpenRegisterModalWithPlan?: (price: number, plan: string, downPayment: number) => void;
  onOpenVipModal?: () => void;
}

export const VantageFinancialSuite: React.FC<VantageFinancialSuiteProps> = ({
  onOpenRegisterModalWithPlan,
  onOpenVipModal,
}) => {
  const [activeTab, setActiveTab] = useState<'milestone' | 'roi'>('milestone');

  // Milestone State
  const [propertyPrice, setPropertyPrice] = useState(2400000);
  const [planType, setPlanType] = useState('60/40 Construction Linked');
  const [isExporting, setIsExporting] = useState(false);

  // ROI State
  const [holdingYears, setHoldingYears] = useState(4);
  const [annualAppreciationPct, setAnnualAppreciationPct] = useState(9.5);
  const [grossRentalYieldPct, setGrossRentalYieldPct] = useState(8.2);
  const [serviceChargePerSqft, setServiceChargePerSqft] = useState(18);
  const [estimatedSqft, setEstimatedSqft] = useState(1450);

  // Milestone calculations
  let downPaymentPct = 20;
  let constructionPct = 40;
  let handoverPct = 40;
  let postHandoverPct = 0;
  let postHandoverMonths = 0;

  if (planType === '70/30 Handover Linked') {
    downPaymentPct = 20;
    constructionPct = 50;
    handoverPct = 30;
    postHandoverPct = 0;
  } else if (planType === '50/50 with 3-Year Post-Handover') {
    downPaymentPct = 20;
    constructionPct = 30;
    handoverPct = 20;
    postHandoverPct = 30;
    postHandoverMonths = 36;
  } else if (planType === '80/20 Investor Launch Plan') {
    downPaymentPct = 10;
    constructionPct = 70;
    handoverPct = 20;
    postHandoverPct = 0;
  } else if (planType === '100% Ready (Immediate Handover)') {
    downPaymentPct = 100;
    constructionPct = 0;
    handoverPct = 0;
    postHandoverPct = 0;
  }

  const downPaymentAed = Math.round(propertyPrice * (downPaymentPct / 100));
  const constructionAed = Math.round(propertyPrice * (constructionPct / 100));
  const handoverAed = Math.round(propertyPrice * (handoverPct / 100));
  const postHandoverAed = Math.round(propertyPrice * (postHandoverPct / 100));
  const monthlyPostAed = postHandoverMonths > 0 ? Math.round(postHandoverAed / postHandoverMonths) : 0;

  const dldRegFeeAed = Math.round(propertyPrice * 0.04);
  const oqoodAdminAed = 5250;
  const trusteeFeeAed = propertyPrice >= 500000 ? 4200 : 2100;
  const initialCashOutlay = downPaymentAed + dldRegFeeAed + oqoodAdminAed + trusteeFeeAed;

  // ROI calculations
  const projectedFuturePrice = Math.round(propertyPrice * Math.pow(1 + annualAppreciationPct / 100, holdingYears));
  const totalCapitalGainAed = projectedFuturePrice - propertyPrice;
  const annualGrossRentAed = Math.round((projectedFuturePrice * grossRentalYieldPct) / 100);
  const annualServiceChargeAed = Math.round(serviceChargePerSqft * estimatedSqft);
  const annualNetRentAed = Math.max(0, annualGrossRentAed - annualServiceChargeAed);
  const netRoiPct = ((annualNetRentAed / propertyPrice) * 100).toFixed(1);
  const totalGainWithRent = totalCapitalGainAed + (annualNetRentAed * holdingYears);
  const equityMultiplier = ((totalGainWithRent + propertyPrice) / propertyPrice).toFixed(2);
  const isGoldenVisaEligible = propertyPrice >= 2000000;

  const quickPricePresets = [
    { label: 'AED 1.25M', value: 1250000 },
    { label: 'AED 2.40M', value: 2400000 },
    { label: 'AED 4.50M', value: 4500000 },
    { label: 'AED 8.50M', value: 8500000 },
    { label: 'AED 18.0M', value: 18000000 },
  ];

  const handleExportSchedule = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      const blob = new Blob([
        `=======================================================\n` +
        `VANTAGE DEVELOPMENTS UAE - FINANCIAL SCHEDULE EXPORT\n` +
        `=======================================================\n\n` +
        `Target Property Value: AED ${propertyPrice.toLocaleString()}\n` +
        `Payment Structure: ${planType}\n\n` +
        `MILESTONE BREAKDOWN:\n` +
        `- Booking Down Payment (${downPaymentPct}%): AED ${downPaymentAed.toLocaleString()}\n` +
        `- During Construction (${constructionPct}%): AED ${constructionAed.toLocaleString()}\n` +
        `- Upon Handover (${handoverPct}%): AED ${handoverAed.toLocaleString()}\n` +
        `- Post-Handover (${postHandoverPct}%): AED ${postHandoverAed.toLocaleString()} (${postHandoverMonths} months @ AED ${monthlyPostAed.toLocaleString()}/mo)\n\n` +
        `STATUTORY DLD / GOVERNMENT FEES:\n` +
        `- 4% DLD Land Registration: AED ${dldRegFeeAed.toLocaleString()}\n` +
        `- Oqood Title Pre-Registration: AED ${oqoodAdminAed.toLocaleString()}\n` +
        `- Registration Trustee Admin: AED ${trusteeFeeAed.toLocaleString()}\n` +
        `- Total Initial Cash Outlay at Booking: AED ${initialCashOutlay.toLocaleString()}\n\n` +
        `CAPITAL ROI PROJECTIONS (${holdingYears}-Year Holding Horizon):\n` +
        `- Projected Capital Gain: AED ${totalCapitalGainAed.toLocaleString()} (@ ${annualAppreciationPct}% p.a.)\n` +
        `- Projected Future Property Value: AED ${projectedFuturePrice.toLocaleString()}\n` +
        `- Annual Net Rental Income: AED ${annualNetRentAed.toLocaleString()}/year (${netRoiPct}% Net)\n` +
        `- Total Projected Return: AED ${totalGainWithRent.toLocaleString()} (${equityMultiplier}x Equity Multiple)\n` +
        `- UAE Golden Visa Status: ${isGoldenVisaEligible ? 'QUALIFIED (AED 2M+)' : 'Standard Residency'}\n\n` +
        `Contact VANTAGE Financial Advisory: +971 4 588 3000 | sales@vantagedevelopments.ae\n`
      ], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `VANTAGE_FINANCIAL_PLAN_AED_${propertyPrice}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 1000);
  };

  return (
    <section id="payment-calc" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
            PROPRIETARY OFF-PLAN FINANCIAL SUITE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4 tracking-tight">
            Off-Plan Financial & ROI Studio.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2 max-w-2xl mx-auto leading-relaxed">
            Simulate construction-linked cash outlays, official Dubai Land Department (DLD) fees, capital appreciation trajectories, and UAE Golden Visa qualification.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0A192F] border border-stone-700 mt-8 font-mono text-xs">
            <button
              onClick={() => setActiveTab('milestone')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'milestone'
                  ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Milestone & DLD Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('roi')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === 'roi'
                  ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Capital Growth & ROI Predictor</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MILESTONE CALCULATOR */}
        {activeTab === 'milestone' && (
          <div className="bg-[#0A192F] rounded-3xl border border-stone-700/80 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto font-mono text-xs space-y-8">
            
            {/* Top Inputs: Price & Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Price Selector */}
              <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-stone-400 uppercase font-bold">PROPERTY PURCHASE VALUE (AED)</label>
                  <span className="text-[#C5A059] font-bold text-xs">
                    {isGoldenVisaEligible ? '★ Golden Visa Eligible' : 'Standard Tier'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl font-serif font-bold text-[#C5A059]">AED</span>
                  <input
                    type="number"
                    step="50000"
                    min="500000"
                    max="100000000"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Math.max(100000, Number(e.target.value)))}
                    className="w-full text-2xl sm:text-3xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-1 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="500000"
                  max="30000000"
                  step="100000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full accent-[#C5A059] cursor-pointer"
                />

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {quickPricePresets.map((pr) => (
                    <button
                      key={pr.label}
                      onClick={() => setPropertyPrice(pr.value)}
                      className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all ${
                        propertyPrice === pr.value
                          ? 'bg-[#C5A059] text-black border-[#C5A059]'
                          : 'bg-[#0A192F] text-stone-300 border-stone-800 hover:text-white'
                      }`}
                    >
                      {pr.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Milestone Structure */}
              <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-4">
                <label className="text-[10px] text-stone-400 uppercase font-bold block">OFF-PLAN PAYMENT STRUCTURE</label>
                
                <select
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#0A192F] border border-stone-700 text-white font-serif font-bold text-sm focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="60/40 Construction Linked">60/40 Construction Linked (20% Booking, 40% Const., 40% Handover)</option>
                  <option value="70/30 Handover Linked">70/30 Investor Plan (20% Booking, 50% Const., 30% Handover)</option>
                  <option value="50/50 with 3-Year Post-Handover">50/50 Post-Handover (20% Booking, 30% Const., 20% Handover, 30% Post-3Yr)</option>
                  <option value="80/20 Investor Launch Plan">80/20 VIP Launch (10% Booking, 70% Const., 20% Handover)</option>
                  <option value="100% Ready (Immediate Handover)">100% Ready Asset (Cash / Sovereign Bank Mortgage)</option>
                </select>

                <div className="p-3.5 rounded-xl bg-[#0A192F] border border-stone-800 space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Total Construction Period:</span>
                    <span className="text-white font-bold">24 – 36 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Milestone Verification:</span>
                    <span className="text-emerald-400 font-bold">DLD Certified Engineer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Escrow Release Policy:</span>
                    <span className="text-white font-bold">100% RERA Protected</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 4 Milestones Cards */}
            <div className="p-6 rounded-2xl bg-[#06101E] border border-[#C5A059]/40 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-stone-400 uppercase text-[10px] font-bold">CONSTRUCTION PAYMENT MILESTONE BREAKDOWN</span>
                <span className="px-3 py-1 rounded-md bg-[#0A192F] text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold">
                  OFFICIAL AED CURRENCY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                <div className="p-4 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-stone-400 text-[9px] uppercase block font-bold">BOOKING DEPOSIT ({downPaymentPct}%)</span>
                  <span className="text-xl font-serif font-bold text-[#C5A059] block mt-1">AED {downPaymentAed.toLocaleString()}</span>
                  <span className="text-[10px] text-stone-500">Upon SPA Signature</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-stone-400 text-[9px] uppercase block font-bold">CONSTRUCTION ({constructionPct}%)</span>
                  <span className="text-xl font-serif font-bold text-white block mt-1">AED {constructionAed.toLocaleString()}</span>
                  <span className="text-[10px] text-stone-500">Linked to Site Audits</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-stone-400 text-[9px] uppercase block font-bold">ON HANDOVER ({handoverPct}%)</span>
                  <span className="text-xl font-serif font-bold text-emerald-400 block mt-1">AED {handoverAed.toLocaleString()}</span>
                  <span className="text-[10px] text-stone-500">Key & Title Handover</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-stone-400 text-[9px] uppercase block font-bold">POST-HANDOVER ({postHandoverPct}%)</span>
                  <span className="text-xl font-serif font-bold text-sky-400 block mt-1">
                    {postHandoverPct > 0 ? `AED ${postHandoverAed.toLocaleString()}` : 'N/A'}
                  </span>
                  <span className="text-[10px] text-stone-500">
                    {postHandoverMonths > 0 ? `${postHandoverMonths} Mo @ AED ${monthlyPostAed.toLocaleString()}/mo` : 'No Post Installments'}
                  </span>
                </div>
              </div>
            </div>

            {/* DLD & Statutory Fee Schedule Table */}
            <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-3">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">
                STATUTORY DUBAI LAND DEPARTMENT (DLD) / GOVERNMENT REGISTRATION FEES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-[9px] text-stone-400 uppercase block font-bold">4% DLD REGISTRATION</span>
                  <span className="text-base font-serif font-bold text-white block mt-0.5">AED {dldRegFeeAed.toLocaleString()}</span>
                  <span className="text-[10px] text-stone-500">DLD Official Transfer Fee</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-[9px] text-stone-400 uppercase block font-bold">OQOOD PRE-REGISTRATION</span>
                  <span className="text-base font-serif font-bold text-white block mt-0.5">AED 5,250</span>
                  <span className="text-[10px] text-stone-500">Pre-Title Deed Certification</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A192F] border border-stone-800">
                  <span className="text-[9px] text-stone-400 uppercase block font-bold">TOTAL BOOKING CASH OUTLAY</span>
                  <span className="text-base font-serif font-bold text-emerald-400 block mt-0.5">AED {initialCashOutlay.toLocaleString()}</span>
                  <span className="text-[10px] text-emerald-500">Booking + All Gov Fees</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleExportSchedule}
                disabled={isExporting}
                className="py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 hover:text-white font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-[#C5A059]" />
                <span>{isExporting ? 'Exporting Schedule...' : 'Export Financial Schedule (.txt)'}</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenRegisterModalWithPlan) {
                    onOpenRegisterModalWithPlan(propertyPrice, planType, downPaymentAed);
                  }
                }}
                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-all"
              >
                <span>Book Unit Under This Payment Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: ROI & CAPITAL APPRECIATION PREDICTOR */}
        {activeTab === 'roi' && (
          <div className="bg-[#0A192F] rounded-3xl border border-stone-700/80 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto font-mono text-xs space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Sliders Box */}
              <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-5">
                <span className="text-[10px] text-stone-400 uppercase font-bold block">INVESTMENT HOLDING PARAMETERS</span>

                {/* Holding Horizon */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-300">Investment Holding Period:</span>
                    <span className="text-[#C5A059] font-bold">{holdingYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={holdingYears}
                    onChange={(e) => setHoldingYears(Number(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                </div>

                {/* Annual Capital Appreciation */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-300">Annual Capital Growth Rate:</span>
                    <span className="text-white font-bold">{annualAppreciationPct}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="18"
                    step="0.5"
                    value={annualAppreciationPct}
                    onChange={(e) => setAnnualAppreciationPct(Number(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                  <span className="text-[10px] text-stone-500 block">Prime Dubai/Abu Dhabi Historical Average: 8% – 12%</span>
                </div>

                {/* Gross Rental Yield */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-300">Projected Gross Rental Yield:</span>
                    <span className="text-emerald-400 font-bold">{grossRentalYieldPct}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="12"
                    step="0.1"
                    value={grossRentalYieldPct}
                    onChange={(e) => setGrossRentalYieldPct(Number(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                </div>

                {/* Service Charge */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-300">Service Charge per Sq.ft:</span>
                    <span className="text-stone-200 font-bold">AED {serviceChargePerSqft} / sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="30"
                    step="1"
                    value={serviceChargePerSqft}
                    onChange={(e) => setServiceChargePerSqft(Number(e.target.value))}
                    className="w-full accent-[#C5A059]"
                  />
                </div>
              </div>

              {/* Projection Result Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0A192F] to-[#06101E] border-2 border-[#C5A059]/60 space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#C5A059] uppercase font-bold">PROJECTION SUMMARY ({holdingYears} YEARS)</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                      {equityMultiplier}x Equity Multiple
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-400 text-xs">Initial Property Acquisition:</span>
                      <span className="text-base font-bold text-white">AED {propertyPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-400 text-xs">Projected Property Valuation:</span>
                      <span className="text-2xl font-serif font-bold text-[#C5A059]">
                        AED {projectedFuturePrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline border-t border-stone-800 pt-2">
                      <span className="text-stone-400 text-xs">Total Capital Gain:</span>
                      <span className="text-base font-bold text-emerald-400">+ AED {totalCapitalGainAed.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-baseline">
                      <span className="text-stone-400 text-xs">Net Rental Income ({holdingYears} Yrs):</span>
                      <span className="text-base font-bold text-sky-400">+ AED {(annualNetRentAed * holdingYears).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-baseline border-t border-stone-800 pt-2">
                      <span className="text-stone-300 font-bold">Cumulative Net Return:</span>
                      <span className="text-xl font-serif font-extrabold text-[#FAFAFA]">
                        AED {totalGainWithRent.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#06101E] border border-stone-800 text-[10px] text-stone-300 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <span>
                    <strong>0% Personal Capital Gains Tax in UAE.</strong> Rental yields and asset appreciation remain 100% tax-free for international residents.
                  </span>
                </div>
              </div>

            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenVipModal}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Reserve High-Yield Allocation with VIP Token</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
