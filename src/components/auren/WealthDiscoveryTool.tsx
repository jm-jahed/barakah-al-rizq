'use client';

import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldAlert } from 'lucide-react';

interface WealthDiscoveryToolProps {
  onOpenConsultationWithGoal: (goal: string, topic: string) => void;
}

export const WealthDiscoveryTool: React.FC<WealthDiscoveryToolProps> = ({ onOpenConsultationWithGoal }) => {
  const [primaryGoal, setPrimaryGoal] = useState('Growth');
  const [timeHorizon, setTimeHorizon] = useState('7-15');
  const [involvementStyle, setInvolvementStyle] = useState('Collaborative');

  // Compute Advisory Focus & Topic
  let advisoryFocus = 'Explore multi-asset portfolio structuring and global diversification.';
  let conversationTopic = 'Global Asset Allocation & Risk-Adjusted Returns Framework';

  if (primaryGoal === 'Preservation') {
    advisoryFocus = 'Prioritize capital preservation, inflation hedging, and tail-risk downside protection.';
    conversationTopic = 'Liquidity Architecture & Capital Protection Governance';
  } else if (primaryGoal === 'Succession') {
    advisoryFocus = 'Establish multi-generational DIFC/ADGM foundation frameworks and family charters.';
    conversationTopic = 'Generational Wealth Succession & Family Governance Charters';
  } else if (primaryGoal === 'Diversification') {
    advisoryFocus = 'Evaluate concentration risk, illiquid real estate allocations, and cross-border currency hedges.';
    conversationTopic = 'Portfolio Concentration Audit & Cross-Border Diversification';
  }

  return (
    <section id="discovery" className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            INTERACTIVE ADVISORY DISCOVERY
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
            Understand Your Wealth Priorities.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select your strategic financial objectives to outline a tailored advisory focus for your introductory consultation.
          </p>
        </div>

        {/* Discovery Tool Box */}
        <div className="bg-[#1A1D1B] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto font-mono text-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Goal */}
            <div className="p-4 rounded-2xl bg-[#080A09] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">01 — PRIMARY FINANCIAL GOAL</label>
              <select
                value={primaryGoal}
                onChange={(e) => setPrimaryGoal(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none"
              >
                <option value="Growth" className="bg-[#080A09]">Capital Growth & Accumulation</option>
                <option value="Preservation" className="bg-[#080A09]">Capital Preservation & Protection</option>
                <option value="Succession" className="bg-[#080A09]">Generational Succession & Legacy</option>
                <option value="Diversification" className="bg-[#080A09]">Concentration Risk & Diversification</option>
              </select>
            </div>

            {/* Time Horizon */}
            <div className="p-4 rounded-2xl bg-[#080A09] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">02 — TIME HORIZON</label>
              <select
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none"
              >
                <option value="1-3" className="bg-[#080A09]">1 – 3 Years (Tactical / Exit)</option>
                <option value="3-7" className="bg-[#080A09]">3 – 7 Years (Mid-Term)</option>
                <option value="7-15" className="bg-[#080A09]">7 – 15 Years (Long-Term)</option>
                <option value="15+" className="bg-[#080A09]">15+ Years (Generational)</option>
              </select>
            </div>

            {/* Involvement */}
            <div className="p-4 rounded-2xl bg-[#080A09] border border-stone-800 space-y-1">
              <label className="text-[10px] text-stone-400 uppercase font-bold block">03 — ADVISORY ENGAGEMENT STYLE</label>
              <select
                value={involvementStyle}
                onChange={(e) => setInvolvementStyle(e.target.value)}
                className="w-full bg-transparent text-white font-serif font-bold text-sm focus:outline-none"
              >
                <option value="Collaborative" className="bg-[#080A09]">Collaborative (Co-Designed Strategy)</option>
                <option value="Delegated" className="bg-[#080A09]">Delegated (Retained Oversight Mandate)</option>
                <option value="HandsOn" className="bg-[#080A09]">Direct Advisory (Second Opinion)</option>
              </select>
            </div>

          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-[#080A09] border border-[#D4AF37]/30 space-y-3 font-mono text-xs mb-6">
            <div className="flex items-center justify-between">
              <span className="text-stone-400 uppercase text-[10px] font-bold">RECOMMENDED ADVISORY FOCUS:</span>
              <span className="px-3 py-1 rounded-full bg-[#1A1D1B] text-[#D4AF37] border border-[#D4AF37]/30 font-bold text-[10px] uppercase">
                {primaryGoal} MANDATE
              </span>
            </div>

            <p className="text-stone-200 font-sans font-light text-sm leading-relaxed pt-1">{advisoryFocus}</p>

            <div className="pt-3 border-t border-stone-800 flex justify-between items-center text-[11px]">
              <span className="text-stone-400">RECOMMENDED INITIAL TOPIC:</span>
              <span className="text-[#D4AF37] font-bold font-serif">{conversationTopic}</span>
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div className="p-4 rounded-xl bg-[#080A09]/80 border border-stone-800 flex items-center gap-3 text-[11px] text-stone-400 mb-6">
            <ShieldAlert className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <span>
              <strong>Regulatory Notice:</strong> For general guidance only — this does not constitute investment or financial advice. AUREN CAPITAL does not guarantee returns or performance. Consult an appropriately licensed financial professional for personalized advice.
            </span>
          </div>

          <button
            onClick={() => onOpenConsultationWithGoal(primaryGoal, conversationTopic)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all"
          >
            <span>Book a Private Conversation on This Topic</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
