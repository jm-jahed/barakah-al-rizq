'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Layers } from 'lucide-react';

interface PaymentPlanCalculatorProps {
  onOpenRegisterModalWithPlan: (price: number, plan: string, downPayment: number) => void;
}

export const PaymentPlanCalculator: React.FC<PaymentPlanCalculatorProps> = ({ onOpenRegisterModalWithPlan }) => {
  const [propertyPrice, setPropertyPrice] = useState(1850000);
  const [planType, setPlanType] = useState('60/40');

  // Calculations based on plan type
  let downPaymentPercent = 20;
  let constructionPercent = 40;
  let handoverPercent = 40;
  let postHandoverPercent = 0;

  if (planType === '70/30') {
    downPaymentPercent = 20;
    constructionPercent = 50;
    handoverPercent = 30;
    postHandoverPercent = 0;
  } else if (planType === 'Post-Handover') {
    downPaymentPercent = 20;
    constructionPercent = 30;
    handoverPercent = 20;
    postHandoverPercent = 30;
  }

  const downPaymentAED = Math.round(propertyPrice * (downPaymentPercent / 100));
  const constructionAED = Math.round(propertyPrice * (constructionPercent / 100));
  const handoverAED = Math.round(propertyPrice * (handoverPercent / 100));
  const postHandoverAED = Math.round(propertyPrice * (postHandoverPercent / 100));
  const dldAdminFeeAED = Math.round(propertyPrice * 0.04) + 4200; // 4% DLD + admin fee

  return (
    <section id="payment-calc" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            INTERACTIVE OFF-PLAN FINANCIAL PLANNER
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            Plan Your Off-Plan Investment.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Calculate construction-linked payment milestones, booking deposits, DLD fees, and handover balances in AED.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0A192F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Property Price Input */}
            <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-3">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">PROPERTY PRICE (AED)</label>
              <input
                type="number"
                step="50000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Math.max(0, Number(e.target.value)))}
                className="w-full text-2xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-2 focus:outline-none focus:border-[#C5A059]"
              />
              <span className="text-[10px] text-stone-400 block">
                Estimated 4% DLD Registration Fee: <strong className="text-[#C5A059]">AED {dldAdminFeeAED.toLocaleString()}</strong>
              </span>
            </div>

            {/* Payment Plan Select */}
            <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-3">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">OFF-PLAN PAYMENT STRUCTURE</label>
              <select
                value={planType}
                onChange={(e) => setPlanType(e.target.value)}
                className="w-full text-xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-2 focus:outline-none focus:border-[#C5A059]"
              >
                <option value="60/40" className="bg-[#06101E]">60/40 Standard (20% Booking, 40% Const., 40% Handover)</option>
                <option value="70/30" className="bg-[#06101E]">70/30 Investor (20% Booking, 50% Const., 30% Handover)</option>
                <option value="Post-Handover" className="bg-[#06101E]">50/50 Post-Handover (20% Booking, 30% Const., 20% Handover, 30% Post)</option>
              </select>
              <span className="text-[10px] text-stone-400 block">
                Selected Plan: <strong className="text-emerald-400">{planType} Milestone Structure</strong>
              </span>
            </div>

          </div>

          {/* Breakdown Milestones Grid */}
          <div className="p-6 rounded-2xl bg-[#06101E] border border-[#C5A059]/40 space-y-4 font-mono text-xs mb-6">
            <div className="flex items-center justify-between">
              <span className="text-stone-400 uppercase text-[10px] font-bold">MILESTONE PAYMENT BREAKDOWN:</span>
              <span className="px-3 py-1 rounded-md bg-[#0A192F] text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold">
                ESTIMATED AED AMOUNTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2 border-t border-stone-800 text-center">
              <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                <span className="text-stone-400 text-[9px] uppercase block font-bold">BOOKING DEPOSIT ({downPaymentPercent}%)</span>
                <span className="text-xl font-serif font-bold text-[#C5A059] block mt-1">AED {downPaymentAED.toLocaleString()}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                <span className="text-stone-400 text-[9px] uppercase block font-bold">DURING CONSTRUCTION ({constructionPercent}%)</span>
                <span className="text-xl font-serif font-bold text-white block mt-1">AED {constructionAED.toLocaleString()}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                <span className="text-stone-400 text-[9px] uppercase block font-bold">UPON HANDOVER ({handoverPercent}%)</span>
                <span className="text-xl font-serif font-bold text-emerald-400 block mt-1">AED {handoverAED.toLocaleString()}</span>
              </div>

              <div className="p-3 rounded-xl bg-[#0A192F] border border-stone-800">
                <span className="text-stone-400 text-[9px] uppercase block font-bold">POST-HANDOVER ({postHandoverPercent}%)</span>
                <span className="text-xl font-serif font-bold text-sky-400 block mt-1">
                  {postHandoverPercent > 0 ? `AED ${postHandoverAED.toLocaleString()}` : 'N/A'}
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-[#06101E]/80 border border-stone-800 flex items-center gap-3 text-[11px] text-stone-400 mb-6">
            <ShieldAlert className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
            <span>
              <strong>Payment Plan Disclaimer:</strong> Illustrative only. Final payment plans, installment schedules, and DLD registration fees are confirmed at the time of unit booking and SPA execution.
            </span>
          </div>

          <button
            onClick={() => onOpenRegisterModalWithPlan(propertyPrice, planType, downPaymentAED)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all"
          >
            <span>Speak to a VANTAGE Sales Advisor About This Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
