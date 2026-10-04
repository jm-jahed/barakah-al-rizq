'use client';

import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

interface BusinessSolutionsProps {
  onOpenQuoteModal: () => void;
}

export const BusinessSolutions: React.FC<BusinessSolutionsProps> = ({ onOpenQuoteModal }) => {
  const features = [
    'Dedicated Key Account Manager & 24/7 Priority Support',
    'Custom delivery workflows & flexible customer SLAs',
    'Real-time automated analytics & BI dashboard exports',
    'RESTful API & Webhook integrations (Shopify, ERP, Custom)',
    'Flexible corporate billing, credit terms & multi-user role management'
  ];

  return (
    <section className="py-24 bg-[#070B14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Media Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-[#0F172A]">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                alt="Scale Corporate Delivery"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 font-mono text-xs flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-bold block">ENTERPRISE SUPPLY CHAIN</span>
                  <span className="text-gray-300">Custom B2B SLA Contracts</span>
                </div>
                <span className="px-3 py-1 rounded bg-blue-600/30 border border-blue-500/40 text-blue-300 text-[10px] font-bold">
                  GCC COVERAGE
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                ENTERPRISE LOGISTICS ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
                Scale your delivery operation.
              </h2>
              <p className="text-base text-gray-300 mt-2">
                From fast-growing online commerce brands to regional enterprise supply chains, our logistics infrastructure seamlessly adapts to your exact business volume.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feat) => (
                <div key={feat} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0F172A] border border-blue-500/20">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-200">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm flex items-center gap-3 transition-all shadow-xl shadow-blue-600/30"
              >
                <span>Talk to Our Enterprise Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
