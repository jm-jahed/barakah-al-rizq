'use client';
import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

export const CorporateWellness: React.FC<any> = () => {
  return (
    <section className="py-24 bg-[#0E0D0B] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#161411] rounded-3xl p-8 md:p-12 border border-amber-500/20 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400">
              <Building2 className="w-5 h-5" /><span className="text-xs font-mono font-bold uppercase tracking-widest">UAE ENTERPRISE WELLNESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Corporate Yoga & Executive De-Stress</h2>
          </div>
          <div className="lg:col-span-5 text-center">
            <a href="https://wa.me/971523394001?text=Hi%20AURA%20Wellness!%20I%20want%20to%20inquire%20about%20Corporate%20Wellness." target="_blank" rel="noreferrer" className="w-full py-3.5 bg-emerald-500 text-black font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2">
              <span>Request Corporate Proposal</span><ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
