'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Cpu, MapPin, Truck, Bell, CheckCircle2, ShieldCheck, Clock, Activity, ArrowRight } from 'lucide-react';

interface EngineStep {
  step: string;
  name: string;
  action: string;
  techLayer: string;
  metric: string;
}

const ENGINE_STEPS: EngineStep[] = [
  {
    step: '01',
    name: 'Order Created',
    action: 'Patient or clinic transmits order payload with prescription token.',
    techLayer: 'REST / GraphQL Ingestion Gateway',
    metric: '< 120ms Ingestion'
  },
  {
    step: '02',
    name: 'Location Evaluated',
    action: 'Customer geocoding mapped to nearest urban micro-fulfillment center.',
    techLayer: 'Spatial GIS Polygon Router',
    metric: '< 40ms Geocoding'
  },
  {
    step: '03',
    name: 'Inventory Confirmed',
    action: 'Cold-storage automated stock reserve locked for patient batch.',
    techLayer: 'Distributed Redis Stock Matrix',
    metric: '100% Stock Lock'
  },
  {
    step: '04',
    name: 'Delivery Route Optimized',
    action: 'AI traffic routing engine plots fastest path avoiding metro bottlenecks.',
    techLayer: 'Dynamic Graph Route Optimizer',
    metric: 'Real-time Traffic Sync'
  },
  {
    step: '05',
    name: 'Courier Dispatched',
    action: 'Certified cold-chain electric courier departs hub with calibrated vault.',
    techLayer: 'Vehicle Telematics & Bluetooth IoT',
    metric: '< 3.5 min Dispatch'
  },
  {
    step: '06',
    name: 'Customer Notified',
    action: 'WhatsApp and SMS push link provides sub-second GPS & thermal tracking.',
    techLayer: 'Multi-Channel Push Webhook',
    metric: 'Sub-second Notification'
  },
  {
    step: '07',
    name: 'Doorstep Delivery',
    action: 'Dual-Factor OTP entered; tamper seal verified and delivery concluded.',
    techLayer: 'Cryptographic OTP & Cloud Receipt',
    metric: 'Zero Handover Error'
  }
];

export const MedivantaDeliveryEngine: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(3);
  const activeStep = ENGINE_STEPS[activeStepIdx];

  return (
    <section className="relative py-28 bg-[#03060c] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Activity className="w-3.5 h-3.5 text-emerald-300" />
            SMART DELIVERY ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            The Last Mile, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Re-Engineered.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Healthcare logistics require deterministic precision. Our algorithmic routing operating system continuously recalculates traffic, weather conditions, and cold-vault stability.
          </p>
        </div>

        {/* Interactive Engine Pipeline Horizontal/Vertical Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {ENGINE_STEPS.map((step, idx) => {
            const isSelected = idx === activeStepIdx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-emerald-950/60 to-slate-900/80 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-1 ring-emerald-400/30'
                    : 'bg-[#060b14]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-400'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono font-bold block mb-1 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                    STEP {step.step}
                  </span>
                  <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {step.name}
                  </h4>
                </div>
                <div className="mt-3 text-[10px] font-mono text-cyan-400/80 truncate">
                  {step.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#08121d] via-[#050a12] to-[#08121d] border border-emerald-500/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                Engine Protocol Phase {activeStep.step}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-cyan-300">{activeStep.techLayer}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{activeStep.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{activeStep.action}</p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 font-mono text-xs text-right">
              <span className="text-slate-400 block text-[10px] uppercase">Telemetry Benchmark</span>
              <span className="text-emerald-300 font-bold text-sm">{activeStep.metric}</span>
            </div>
            <button
              onClick={() => setActiveStepIdx((prev) => (prev + 1) % ENGINE_STEPS.length)}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold font-mono transition-colors flex items-center gap-1.5"
            >
              Next Step <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
