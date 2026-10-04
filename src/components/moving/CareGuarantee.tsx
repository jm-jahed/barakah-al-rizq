'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Heart, HeartHandshake } from 'lucide-react';

export const CareGuarantee: React.FC = () => {
  const benefits = [
    'Trained moving specialists & certified handymen',
    'Multi-layer bubble wrap & furniture blankets',
    'Sequential box inventory tagging & room tracking',
    'Fully insured transit protection up to AED 1,000,000',
    'Doorway, elevator, and flooring protection runners',
    'Post-move unpacking & box recycling cleanup'
  ];

  return (
    <section className="py-24 bg-[#143A2A] relative border-b border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-emerald-200 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30">
              ZERO DAMAGE COMMITMENT
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight font-serif leading-tight">
              Your belongings deserve more than a truck.
            </h2>

            <p className="text-base text-emerald-100/90 leading-relaxed font-normal">
              We treat your home and personal treasures with the same care and reverence we would show our own family heirlooms. Every item is packed, padded, and placed with meticulous attention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                  <span className="text-xs font-medium text-emerald-100">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Trust Badge Visual */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C1917] border border-emerald-500/40 text-center shadow-2xl space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#143A2A] border border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto shadow-xl">
                <ShieldCheck className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-extrabold text-white font-serif">NestMove Care Shield</h3>

              <p className="text-xs text-stone-300 leading-relaxed">
                In the rare event of accidental breakage, our instant claims policy resolves repair or replacement compensation within 48 hours without endless red tape.
              </p>

              <div className="pt-4 border-t border-stone-800 flex items-center justify-center gap-2 text-xs font-mono text-emerald-300 font-bold">
                <HeartHandshake className="w-4 h-4 text-[#D96B27]" />
                <span>100% Care SLA Guaranteed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
