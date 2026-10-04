'use client';

import React from 'react';
import { Activity, ShieldCheck, Heart, Users, Clock, Award } from 'lucide-react';

export const PetCareMetrics: React.FC<any> = () => {
  return (
    <div className="bg-[#090F16] py-10 border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono block">
            18,400+
          </span>
          <span className="text-xs font-mono text-slate-300 font-bold block">UAE Pets Treated</span>
          <span className="text-[10px] font-mono text-slate-500">Across Dubai & Abu Dhabi</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-teal-400 font-mono block">
            24 / 7 / 365
          </span>
          <span className="text-xs font-mono text-slate-300 font-bold block">Zero-Wait ICU Trauma</span>
          <span className="text-[10px] font-mono text-slate-500">Continuous Surgeon Presence</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono block">
            4.98 ★
          </span>
          <span className="text-xs font-mono text-slate-300 font-bold block">Patient Satisfaction</span>
          <span className="text-[10px] font-mono text-slate-500">1,840+ Verified Reviews</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
          <span className="text-2xl sm:text-4xl font-black text-teal-400 font-mono block">
            100%
          </span>
          <span className="text-xs font-mono text-slate-300 font-bold block">MOCCAE Passport Pass</span>
          <span className="text-[10px] font-mono text-slate-500">Global Pet Export Clearances</span>
        </div>

      </div>
    </div>
  );
};

export default PetCareMetrics;
