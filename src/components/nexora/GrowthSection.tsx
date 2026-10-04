'use client';

import React from 'react';
import { TrendingUp, Layers } from 'lucide-react';

export const GrowthSection: React.FC = () => {
  const stages = [
    {
      stage: 'START',
      revenue: 'AED 0 – 5M Revenue',
      challenges: 'Unit economics, initial client acquisition, compliance setup',
      strategy: 'Establish clean accounting, early customer acquisition model, zero tax penalty setup',
      nexoraSupport: 'Foundational business setup, PRO clearance, VAT registration'
    },
    {
      stage: 'SCALE',
      revenue: 'AED 5M – 25M Revenue',
      challenges: 'Cash flow constraints, working capital management, hiring executive talent',
      strategy: 'Optimize gross margins, structure credit lines, institutionalize governance',
      nexoraSupport: 'Virtual CFO advisory, Banking line refinancing, ESR compliance'
    },
    {
      stage: 'EXPAND',
      revenue: 'AED 25M – 100M+ Revenue',
      challenges: 'Multi-entity governance, GCC regional expansion, tax optimization',
      strategy: 'DIFC/ADGM holding foundation setup, international transfer pricing, M&A prep',
      nexoraSupport: 'Corporate restructuring, Holding setup, M&A due diligence'
    },
    {
      stage: 'ENTERPRISE',
      revenue: 'AED 100M+ Revenue',
      challenges: 'Institutional liquidity, IPO readiness, cross-border regulatory exposure',
      strategy: 'Board advisory, capital restructuring, institutional shareholder governance',
      nexoraSupport: 'Partner-level advisory, Family Office structuring, M&A execution'
    }
  ];

  return (
    <section className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            BUSINESS SCALING MATRIX
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Your first milestone isn't the finish line.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Tailored corporate advisory engineered to support your business across every revenue lifecycle stage in the UAE.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {stages.map((stg) => (
            <div
              key={stg.stage}
              className="bg-[#1A1D24] rounded-3xl border border-stone-800 p-6 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all space-y-4"
            >
              <div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#121417] text-[#D4AF37] border border-[#D4AF37]/30 inline-block mb-3">
                  STAGE: {stg.stage}
                </span>

                <h3 className="text-xl font-serif font-bold text-[#F7F6F2] mb-1">{stg.revenue}</h3>

                <div className="space-y-3 pt-3 border-t border-stone-800 font-sans">
                  <div>
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold block">PRIMARY CHALLENGE:</span>
                    <p className="text-stone-300 text-xs font-light">{stg.challenges}</p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block">STRATEGIC FOCUS:</span>
                    <p className="text-stone-200 text-xs font-light">{stg.strategy}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800 font-mono text-[11px]">
                <span className="text-stone-500 uppercase block text-[9px]">NEXORA ADVISORY ROLE:</span>
                <span className="text-[#D4AF37] font-bold">{stg.nexoraSupport}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
