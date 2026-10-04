'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, ShieldAlert } from 'lucide-react';

interface VatCalculatorProps {
  onOpenConsultationWithVat: (rev: number, exp: number, net: number) => void;
}

export const VatCalculator: React.FC<VatCalculatorProps> = ({ onOpenConsultationWithVat }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(150000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(80000);

  // Simple illustrative calculations
  const outputVat = Math.round(monthlyRevenue * 0.05);
  const inputVat = Math.round(monthlyExpenses * 0.05);
  const netVatPosition = outputVat - inputVat;

  return (
    <section id="vat-calc" className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            ILLUSTRATIVE VAT POSITION ESTIMATOR
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Estimate Your VAT Position.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Calculate your estimated monthly Output VAT (5%), Input VAT recovery, and net payable/refundable position.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0E3B27] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Monthly Sales Input */}
            <div className="p-6 rounded-2xl bg-[#0A291C] border border-stone-800 space-y-3">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">
                MONTHLY VATABLE SALES / REVENUE (AED)
              </label>
              <input
                type="number"
                step="5000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Math.max(0, Number(e.target.value)))}
                className="w-full text-2xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-2 focus:outline-none focus:border-[#D4AF37]"
              />
              <span className="text-[10px] text-stone-400 block">
                Estimated 5% Output VAT: <strong className="text-[#D4AF37]">AED {outputVat.toLocaleString()}</strong>
              </span>
            </div>

            {/* Monthly Expenses Input */}
            <div className="p-6 rounded-2xl bg-[#0A291C] border border-stone-800 space-y-3">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">
                MONTHLY VATABLE EXPENSES (AED)
              </label>
              <input
                type="number"
                step="5000"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Math.max(0, Number(e.target.value)))}
                className="w-full text-2xl font-serif font-bold text-white bg-transparent border-b border-stone-700 pb-2 focus:outline-none focus:border-[#D4AF37]"
              />
              <span className="text-[10px] text-stone-400 block">
                Estimated 5% Recoverable Input VAT: <strong className="text-emerald-400">AED {inputVat.toLocaleString()}</strong>
              </span>
            </div>

          </div>

          {/* Results Summary Box */}
          <div className="p-6 rounded-2xl bg-[#0A291C] border border-[#D4AF37]/40 space-y-3 font-mono text-xs mb-6">
            <div className="flex items-center justify-between">
              <span className="text-stone-400 uppercase text-[10px] font-bold">ESTIMATED NET MONTHLY VAT POSITION:</span>
              <span className="px-3 py-1 rounded-md bg-[#0E3B27] text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] font-bold">
                ILLUSTRATIVE ESTIMATE
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-2 border-t border-stone-800">
              <span className="text-stone-300">
                {netVatPosition >= 0 ? 'Estimated Net Payable to FTA:' : 'Estimated Net Refundable:'}
              </span>
              <span className="text-3xl font-serif font-bold text-[#D4AF37]">
                AED {Math.abs(netVatPosition).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-[#0A291C]/80 border border-stone-800 flex items-center gap-3 text-[11px] text-stone-400 mb-6">
            <ShieldAlert className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <span>
              <strong>Illustrative Calculation Disclaimer:</strong> Illustrative estimate only. Actual VAT position depends on specific transaction categories, zero-rated goods, and FTA input tax recovery rules. Consult LEDGERA for an accurate return audit.
            </span>
          </div>

          <button
            onClick={() => onOpenConsultationWithVat(monthlyRevenue, monthlyExpenses, netVatPosition)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all"
          >
            <span>Get Accurate VAT Review & Return Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
