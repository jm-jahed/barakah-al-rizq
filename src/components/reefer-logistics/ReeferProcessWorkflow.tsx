'use client';

import React from 'react';
import {
  ClipboardCheck,
  Truck,
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react';
import { PROCESS_STEPS } from '@/data/reeferLogisticsData';

interface ReeferProcessWorkflowProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferProcessWorkflow({ onOpenQuote }: ReeferProcessWorkflowProps) {
  const iconMap: Record<string, any> = {
    ClipboardCheck,
    Truck,
    Activity,
    ShieldCheck,
    CheckCircle2
  };

  return (
    <section className="py-20 sm:py-28 bg-[#070b14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>SEAMLESS 5-STAGE LOGISTICS LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            HOW THE PROCESS WORKS
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            From instant booking to destination dock discharge — a streamlined B2B logistics process built for reliability.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative text-left">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || Truck;
            return (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#0c1220] border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-xl relative"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-sky-400">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white mb-1">
                    {step.title}
                  </h3>

                  <div className="text-xs font-mono text-sky-300 font-semibold mb-3">
                    {step.action}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>STAGE:</span>
                    <span className="text-emerald-400 font-bold">{step.duration}</span>
                  </div>
                  <div className="truncate">
                    📍 {step.checkpoint}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking CTA Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c1424] border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white font-mono">
              Ready to schedule your first reefer shipment?
            </h4>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Instant quote confirmation for Al Aweer / JAFZA loading slots.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 shrink-0"
          >
            <span>START STEP 01 — BOOKING</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
