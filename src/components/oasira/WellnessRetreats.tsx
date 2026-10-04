'use client';

import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

export const WellnessRetreats: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F382C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0A2920] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 font-sans">
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              SOMATIC & THERMAL WELLNESS
            </span>

            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-[#FAF6EE]">
              Take a slower weekend.
            </h3>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              Disconnect in thermal mineral springs under Jebel Hafeet, organic hammams, sunset sound baths, and plant-based nutrition menus.
            </p>

            <div className="p-4 rounded-xl bg-[#0F382C] border border-stone-800 font-mono text-xs text-stone-200">
              <span className="text-[#D4B382] font-bold block mb-1">FEATURED PACKAGE: 48-HOUR WELLNESS RESET</span>
              <span className="text-stone-300">Includes 2 Nights Hydrotherapy Stay + Organic Spa + Sommelier Detox • AED 1,890</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 rounded-2xl overflow-hidden border border-stone-800">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
              alt="UAE Wellness Spa"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
