'use client';

import React from 'react';
import { ShieldCheck, Anchor, Award, Globe2, Radio, CheckCircle2 } from 'lucide-react';
import { NERO_BRAND } from '@/data/neroData';

export const NeroTrustBar: React.FC = () => {
  return (
    <section className="py-8 bg-[#040914] border-b border-cyan-500/15 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Item 1 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                DMCA Licensed
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                Commercial Charter #9041
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                MYBA Corporate
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                Standard Member #80912
              </span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                Starlink Maritime
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                350 Mbps Low-Latency Sea Net
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono font-bold text-white uppercase tracking-wider">
                Lloyds Register
              </span>
              <span className="block text-[11px] font-mono text-gray-400">
                Class +100A1 Yacht Survey
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
