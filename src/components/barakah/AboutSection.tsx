'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-200 shadow-xl bg-[#F8FAF8] p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
                  alt="BARAKAH AL RIZQ Foodstuff Market Trading Hub Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-lg">
                  <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-widest block">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <span className="text-sm font-bold text-[#063D24] font-sans block mt-0.5">
                    {BARAKAH_BRAND.mdName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
              ABOUT BARAKAH AL RIZQ
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063D24] tracking-tight leading-tight">
              A Trusted Pillar in UAE Foodstuff Trading.
            </h2>

            <p className="text-gray-700 text-base leading-relaxed font-light">
              <strong>BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</strong> is a premier UAE-based foodstuff import, export, wholesale, and distribution enterprise headquartered at the strategic Al Aweer Fruit &amp; Vegetable Market in Ras Al Khor, Dubai.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Under the leadership of Managing Director <strong>Habeeb Khan</strong>, our organization has established robust global procurement networks spanning 25+ countries. We supply high-grade fresh produce, premium Basmati rice, pulses, whole spices, and dry foodstuffs to supermarket chains, hypermarkets, hotels, and commercial food service buyers across all seven Emirates and regional GCC markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-gray-800">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F8FAF8] border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Farm-to-Market Import Sourcing</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F8FAF8] border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cold-Chain Temperature Controlled Storage</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F8FAF8] border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dubai Municipality Approved Quality Assurance</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F8FAF8] border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Re-Export Shipping Across GCC Countries</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};