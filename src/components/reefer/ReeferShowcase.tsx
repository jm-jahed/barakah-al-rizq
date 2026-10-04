'use client';

import React, { useState } from 'react';
import { ReeferThemeProvider, useReeferTheme } from './ReeferThemeContext';
import ReeferNav from './ReeferNav';
import ReeferHero from './ReeferHero';
import ReeferTrustStrip from './ReeferTrustStrip';
import ReeferRouteNetwork from './ReeferRouteNetwork';
import ReeferFleetSpecs from './ReeferFleetSpecs';
import ReeferTemperatureControl from './ReeferTemperatureControl';
import ReeferTrackedTransport from './ReeferTrackedTransport';
import ReeferBorderReady from './ReeferBorderReady';
import ReeferCargoTypes from './ReeferCargoTypes';
import ReeferProcess from './ReeferProcess';
import ReeferContractOptions from './ReeferContractOptions';
import ReeferWhyChooseUs from './ReeferWhyChooseUs';
import ReeferRouteMatrix from './ReeferRouteMatrix';
import ReeferQuoteCalculator from './ReeferQuoteCalculator';
import ReeferFleetCapacityGrid from './ReeferFleetCapacityGrid';
import ReeferUaeOperations from './ReeferUaeOperations';
import ReeferCTA from './ReeferCTA';
import ReeferFooter from './ReeferFooter';
import ReeferQuoteModal from './ReeferQuoteModal';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';

interface ReeferShowcaseProps {
  standalone?: boolean;
}

function ReeferShowcaseContent() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalDefaults, setQuoteModalDefaults] = useState<Record<string, string> | undefined>(undefined);
  const { isDark } = useReeferTheme();

  const handleOpenQuote = (defaultValues?: Record<string, string>) => {
    setQuoteModalDefaults(defaultValues);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17] text-white' : 'bg-white text-[#111111]'
    }`}>
      
      {/* 00 — Navigation with Light/Dark Mode Switcher */}
      <ReeferNav onOpenQuote={handleOpenQuote} />

      {/* 01 — Hero Section */}
      <ReeferHero onOpenQuote={handleOpenQuote} />

      {/* 02 — Trust Strip */}
      <ReeferTrustStrip />

      {/* 03 — Dubai → GCC Route Network */}
      <ReeferRouteNetwork onOpenQuote={handleOpenQuote} />

      {/* 04 — The Reefer Fleet */}
      <ReeferFleetSpecs onOpenQuote={handleOpenQuote} />

      {/* 05 — Temperature Control */}
      <ReeferTemperatureControl />

      {/* 06 — Fully Tracked Transport */}
      <ReeferTrackedTransport />

      {/* 07 — Border Ready */}
      <ReeferBorderReady />

      {/* 08 — Cargo Types */}
      <ReeferCargoTypes onOpenQuote={handleOpenQuote} />

      {/* 09 — How The Process Works */}
      <ReeferProcess onOpenQuote={handleOpenQuote} />

      {/* 10 — Contract Options */}
      <ReeferContractOptions onOpenQuote={handleOpenQuote} />

      {/* 11 — Why Businesses Choose Us */}
      <ReeferWhyChooseUs />

      {/* 12 — GCC Route Matrix */}
      <ReeferRouteMatrix onOpenQuote={handleOpenQuote} />

      {/* 13 — Quote Calculator */}
      <ReeferQuoteCalculator onSuccess={(msg) => console.log('Quote logged:', msg)} />

      {/* 14 — Fleet Capacity Visualization */}
      <ReeferFleetCapacityGrid />

      {/* 15 — UAE Operations */}
      <ReeferUaeOperations onOpenQuote={handleOpenQuote} />

      {/* 16 — CTA Section */}
      <ReeferCTA onOpenQuote={handleOpenQuote} />

      {/* 17 — Footer */}
      <ReeferFooter onOpenQuote={handleOpenQuote} />

      {/* Global Interactive Quote Modal */}
      <ReeferQuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        defaultValues={quoteModalDefaults}
      />

      {/* Floating Bottom Contact Bar (Mobile Optimized Quick-Trigger) */}
      <div className={`fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center gap-2 p-2 rounded-2xl shadow-2xl backdrop-blur-md border transition-colors ${
        isDark ? 'bg-[#0F172A]/95 border-slate-700 text-white' : 'bg-white/95 border-slate-200 text-[#111111]'
      }`}>
        <a
          href="https://wa.me/971508924471?text=Hello%20Khaleej%20Reefer,%20I%20need%20a%2025-ton%20reefer%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+97148812900"
          className={`py-3 px-3.5 rounded-xl font-mono text-xs flex items-center justify-center border transition-colors ${
            isDark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-100 text-[#111111] border-slate-200'
          }`}
        >
          <Phone className="w-4 h-4 text-amber-500" />
        </a>
        <button
          onClick={() => handleOpenQuote()}
          className="flex-1 py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-xs cursor-pointer"
        >
          <span>Quote</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

export default function ReeferShowcase({ standalone = false }: ReeferShowcaseProps) {
  return (
    <ReeferThemeProvider>
      <ReeferShowcaseContent />
    </ReeferThemeProvider>
  );
}
