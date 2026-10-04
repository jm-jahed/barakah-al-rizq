'use client';

import React from 'react';
import { ShieldCheck, Building2, Award, Landmark, CheckCircle2 } from 'lucide-react';
import { AURELIA_BRAND } from '@/data/aureliaData';

export const AureliaTrustBar: React.FC = () => {
  return (
    <section className="py-8 bg-[#0C1013] border-b border-stone-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Item 1 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-stone-500/10 border border-stone-500/30 text-stone-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                RERA Developer
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                Master License #8812
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                DLD Escrow Account
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                100% Capital Protection
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                10-Year Golden Visa
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                Direct Title Deed Fast-Track
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-stone-500/10 border border-stone-500/30 text-stone-300">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                10-Year Warranty
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                Structural & MEP Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
