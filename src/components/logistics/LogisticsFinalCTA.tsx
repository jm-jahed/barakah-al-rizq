'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Phone, Truck } from 'lucide-react';
import { LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface LogisticsFinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const LogisticsFinalCTA: React.FC<LogisticsFinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#070B14] via-[#0F172A] to-blue-950 relative overflow-hidden text-center border-b border-white/10">
      
      {/* Background Animated Route Line */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 100 Q 400 300 800 100 T 1600 200"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 mx-auto mb-6 shadow-xl shadow-blue-600/30">
          <div className="w-full h-full bg-[#070B14] rounded-[14px] flex items-center justify-center">
            <Truck className="w-8 h-8 text-cyan-400" />
          </div>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Ready to move faster?
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let's build a logistics solution that works for your business. Talk to our dispatch team or generate an instant custom quote online.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm flex items-center gap-3 transition-all shadow-xl shadow-blue-600/30 hover:scale-[1.02]"
          >
            <span>Get a Instant Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={LOGISTICS_BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm flex items-center gap-3 transition-all backdrop-blur-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Dispatch</span>
          </a>
        </div>

      </div>
    </section>
  );
};
