'use client';

import React from 'react';
import { Activity, ShieldCheck, Calendar, FileText, Bell, CheckCircle2, AlertCircle } from 'lucide-react';

export const PetHealthDashboard: React.FC<any> = () => {
  return (
    <section id="portal" className="py-20 bg-[#080E14] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
              PATIENT CLOUD PORTAL PREVIEW
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              24/7 Digital Health Records & Telemetry.
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Real-Time Sync with Jumeirah 2 Diagnostic Server
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Vaccines */}
          <div className="p-6 rounded-3xl bg-[#0E1720] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
                <Calendar className="w-4 h-4" />
                <span>Immunization Status</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                100% Up to Date
              </span>
            </div>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between">
                <span>Rabies 3-Year Booster:</span>
                <span className="text-white font-bold">Valid until Nov 2027</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between">
                <span>Kennel Cough (Bordetella):</span>
                <span className="text-emerald-400 font-bold">Due in 45 Days</span>
              </div>
            </div>
          </div>

          {/* Diagnostic Imaging & Blood Reports */}
          <div className="p-6 rounded-3xl bg-[#0E1720] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs font-mono">
                <FileText className="w-4 h-4" />
                <span>Diagnostic Lab Cloud</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold">
                3 New Reports
              </span>
            </div>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between items-center">
                <span>128-Slice CT Thorax Staging</span>
                <span className="text-teal-400 font-bold text-[11px]">PDF Ready</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between items-center">
                <span>Comprehensive Biochemistry-18</span>
                <span className="text-teal-400 font-bold text-[11px]">Normal</span>
              </div>
            </div>
          </div>

          {/* Active Prescriptions */}
          <div className="p-6 rounded-3xl bg-[#0E1720] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                <Bell className="w-4 h-4" />
                <span>Active Prescription Plan</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                Auto-Refill Active
              </span>
            </div>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between">
                <span>YuMOVE Joint Care PLUS</span>
                <span className="text-white font-bold">1 Tab / AM</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex justify-between">
                <span>NexGard SPECTRA Chews</span>
                <span className="text-emerald-400 font-bold">Next: 1st of Month</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PetHealthDashboard;
