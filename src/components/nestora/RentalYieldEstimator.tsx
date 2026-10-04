'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, ShieldAlert } from 'lucide-react';

interface RentalYieldEstimatorProps {
  onOpenConsultationWithYield: (price: number, rent: number, netYield: number) => void;
}

export const RentalYieldEstimator: React.FC<RentalYieldEstimatorProps> = ({ onOpenConsultationWithYield }) => {
  const [purchasePrice, setPurchasePrice] = useState(1800000);
  const [monthlyRent, setMonthlyRent] = useState(12500);
  const [annualServiceCharge, setAnnualServiceCharge] = useState(18000);

  // Calculations
  const annualRent = monthlyRent * 12;
  const grossYield = purchasePrice > 0 ? ((annualRent / purchasePrice) * 100).toFixed(2) : '0.00';
  
  // Management Fee 8%
  const managementFee = annualRent * 0.08;
  const netAnnualIncome = Math.max(0, annualRent - managementFee - annualServiceCharge);
  const netYield = purchasePrice > 0 ? ((netAnnualIncome / purchasePrice) * 100).toFixed(2) : '0.00';

  return (
    <section id="yield-calc" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            INTERACTIVE LANDLORD YIELD CALCULATOR
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
            Estimate Your Rental Yield.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Calculate your estimated Gross Yield %, Net Yield %, and Net Annual Income after service charges and management fees.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0C2D31] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Purchase Price */}
            <div className="p-4 rounded-2xl bg-[#082023] border border-stone-800 space-y-2">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">PROPERTY VALUE / PRICE (AED)</label>
              <input
                type="number"
                step="50000"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Math.max(0, Number(e.target.value)))}
                className="w-full text-xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-1 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Monthly Rent */}
            <div className="p-4 rounded-2xl bg-[#082023] border border-stone-800 space-y-2">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">EXPECTED MONTHLY RENT (AED)</label>
              <input
                type="number"
                step="500"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Math.max(0, Number(e.target.value)))}
                className="w-full text-xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-1 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            {/* Service Charges */}
            <div className="p-4 rounded-2xl bg-[#082023] border border-stone-800 space-y-2">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">ANNUAL SERVICE CHARGES (AED)</label>
              <input
                type="number"
                step="1000"
                value={annualServiceCharge}
                onChange={(e) => setAnnualServiceCharge(Math.max(0, Number(e.target.value)))}
                className="w-full text-xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-1 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

          </div>

          {/* Results Box */}
          <div className="p-6 rounded-2xl bg-[#082023] border border-[#C5A059]/40 space-y-4 font-mono text-xs mb-6">
            <div className="flex items-center justify-between">
              <span className="text-stone-400 uppercase text-[10px] font-bold">ESTIMATED LANDLORD YIELD BREAKDOWN:</span>
              <span className="px-3 py-1 rounded-md bg-[#0C2D31] text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold">
                ESTIMATED OUTPUTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-800">
              <div>
                <span className="text-stone-400 text-[10px] uppercase block">GROSS ANNUAL YIELD:</span>
                <span className="text-2xl font-serif font-bold text-stone-200">{grossYield}%</span>
              </div>

              <div>
                <span className="text-stone-400 text-[10px] uppercase block">ESTIMATED NET YIELD (AFTER 8% FEE):</span>
                <span className="text-2xl font-serif font-bold text-[#C5A059]">{netYield}%</span>
              </div>

              <div>
                <span className="text-stone-400 text-[10px] uppercase block">ESTIMATED NET ANNUAL INCOME:</span>
                <span className="text-2xl font-serif font-bold text-emerald-400">AED {Math.round(netAnnualIncome).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-[#082023]/80 border border-stone-800 flex items-center gap-3 text-[11px] text-stone-400 mb-6">
            <ShieldAlert className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
            <span>
              <strong>Yield Estimator Disclaimer:</strong> Yield estimates are provided for illustrative purposes only based on average Dubai/Abu Dhabi market parameters. Actual returns depend on final lease contract terms, occupancy rates, and building service fees.
            </span>
          </div>

          <button
            onClick={() => onOpenConsultationWithYield(purchasePrice, monthlyRent, Number(netYield))}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all"
          >
            <span>Get a Verified Property Management Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
