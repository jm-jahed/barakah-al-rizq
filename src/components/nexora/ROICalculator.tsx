'use client';

import React, { useState } from 'react';
import { TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

interface ROICalculatorProps {
  onOpenConsultationWithNumbers: (rev: number, growth: number, savings: number) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onOpenConsultationWithNumbers }) => {
  const [currentRevAED, setCurrentRevAED] = useState(10000000); // AED 10M
  const [growthTargetPercent, setGrowthTargetPercent] = useState(40); // 40%
  const [operatingCostAED, setOperatingCostAED] = useState(3500000); // AED 3.5M

  const potentialRevenueAED = Math.round(currentRevAED * (1 + growthTargetPercent / 100));
  const estimatedRevenueGain = potentialRevenueAED - currentRevAED;
  const estimatedSavingsAED = Math.round(operatingCostAED * 0.22); // 22% overhead efficiency

  return (
    <section className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1A1D24] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl space-y-8 font-sans">
          
          <div className="flex items-center justify-between border-b border-stone-800 pb-4 font-serif">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block">COMMERCIAL STRATEGY CONSOLE</span>
              <h3 className="text-2xl font-bold text-[#F7F6F2]">Business Growth Opportunity Calculator</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#121417] text-[#D4AF37] font-mono text-xs font-bold border border-[#D4AF37]/30">
              AED FINANCIAL MODEL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">CURRENT ANNUAL REVENUE (AED)</label>
              <select
                value={currentRevAED}
                onChange={(e) => setCurrentRevAED(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-[#121417] border border-stone-800 text-white font-bold"
              >
                <option value={3000000}>AED 3,000,000</option>
                <option value={10000000}>AED 10,000,000</option>
                <option value={25000000}>AED 25,000,000</option>
                <option value={50000000}>AED 50,000,000+</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">GROWTH TARGET (%)</label>
              <select
                value={growthTargetPercent}
                onChange={(e) => setGrowthTargetPercent(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-[#121417] border border-stone-800 text-white font-bold"
              >
                <option value={20}>+20% Growth Target</option>
                <option value={40}>+40% Growth Target</option>
                <option value={60}>+60% Growth Target</option>
                <option value={100}>+100% Double Revenue</option>
              </select>
            </div>

            <div>
              <label className="text-stone-400 block mb-1 uppercase text-[10px]">CURRENT OPERATING OVERHEAD (AED)</label>
              <select
                value={operatingCostAED}
                onChange={(e) => setOperatingCostAED(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-[#121417] border border-stone-800 text-white font-bold"
              >
                <option value={1000000}>AED 1,000,000</option>
                <option value={3500000}>AED 3,500,000</option>
                <option value={8000000}>AED 8,000,000</option>
                <option value={15000000}>AED 15,000,000</option>
              </select>
            </div>
          </div>

          {/* Results Output Box */}
          <div className="p-6 rounded-2xl bg-[#121417] border border-[#D4AF37]/30 space-y-3 font-mono text-xs">
            <div className="flex justify-between text-stone-300">
              <span>Projected Target Annual Revenue:</span>
              <span className="text-white font-bold text-sm">AED {potentialRevenueAED.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Estimated Top-Line Revenue Opportunity:</span>
              <span className="text-emerald-400 font-bold">+ AED {estimatedRevenueGain.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-400">
              <span>Estimated Annual Overhead Efficiency Savings:</span>
              <span className="text-[#D4AF37] font-bold">~ AED {estimatedSavingsAED.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-stone-300 pt-2 border-t border-stone-800">
              <span>Recommended Advisory Priority:</span>
              <span className="text-[#D4AF37] font-serif font-bold">Corporate Restructuring & Scaling</span>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultationWithNumbers(potentialRevenueAED, estimatedRevenueGain, estimatedSavingsAED)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
          >
            <span>Discuss My Numbers With a Senior Advisor</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
