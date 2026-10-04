'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Radio,
  AlertTriangle,
  CheckCircle2,
  Activity,
  ShieldAlert,
  Search,
  Wrench,
  Gauge
} from 'lucide-react';
import { LEAK_ANOMALY_SIGNALS, LeakAnomalySignal } from '@/data/aquavantaData';

export function AquavantaLeakIntelligence() {
  const [selectedSignalId, setSelectedSignalId] = useState<string>('leak-101');
  const selectedSignal =
    LEAK_ANOMALY_SIGNALS.find((s) => s.id === selectedSignalId) || LEAK_ANOMALY_SIGNALS[0];

  return (
    <section id="leak-intelligence" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#030713] border-b border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>ACOUSTIC LEAK INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Find the Invisible Loss.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Microscopic underground pipeline fissures create distinctive acoustic frequency signatures. AQUAVANTA correlates pressure wave reflections and acoustic hydrophones to pinpoint leaks before they surface.
          </p>
        </div>

        {/* Pipeline Anomaly Visualizer & Sensor Telemetry List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Monitored Pipeline Segments (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 mb-2">
              Monitored Trunk Line Telemetry
            </div>

            {LEAK_ANOMALY_SIGNALS.map((sig) => {
              const isSelected = sig.id === selectedSignalId;
              const isAlert = sig.status === 'INVESTIGATING';

              return (
                <button
                  key={sig.id}
                  onClick={() => setSelectedSignalId(sig.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 ring-1 ring-cyan-400/40 shadow-lg'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg mt-0.5 ${
                        isAlert
                          ? 'bg-amber-950/80 text-amber-400 border border-amber-800/50'
                          : 'bg-slate-800 text-emerald-400'
                      }`}
                    >
                      {isAlert ? <AlertTriangle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {sig.pipelineSegment}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        {sig.zone}
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        isAlert
                          ? 'bg-amber-950 text-amber-400 border border-amber-800/40'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                      }`}
                    >
                      {sig.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Anomaly Trace & Diagnostic Panel (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80 mb-6">
              <div>
                <div className="text-[10px] text-cyan-400 uppercase tracking-wider">
                  Diagnostic Case Record
                </div>
                <div className="text-lg font-bold text-white mt-0.5">
                  {selectedSignal.pipelineSegment}
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                Location: {selectedSignal.estimatedLocation}
              </div>
            </div>

            {/* Simulated Signal Wave Display */}
            <div className="p-4 rounded-xl bg-[#02050E] border border-slate-800/80 mb-6">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  Acoustic Frequency Hydrophone Signal
                </span>
                <span className="text-amber-400">Freq: 450 Hz Peak Anomaly</span>
              </div>
              <div className="h-16 flex items-end gap-1.5 px-2">
                {[30, 45, 25, 60, 40, 75, 95, 80, 60, 45, 30, 50, 65, 85, 40, 25, 35, 55, 70, 40, 30, 20].map(
                  (val, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${val}%` }}
                      className={`flex-1 rounded-t transition-all duration-300 ${
                        idx >= 6 && idx <= 10 ? 'bg-amber-400' : 'bg-cyan-500/40'
                      }`}
                    />
                  )
                )}
              </div>
            </div>

            {/* 3 Metric Diagnostics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Pressure Drop</div>
                <div className="text-base font-bold text-amber-400 mt-0.5">
                  -{selectedSignal.detectedPressureDropBar} Bar
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Flow Variance</div>
                <div className="text-base font-bold text-white mt-0.5">
                  {selectedSignal.flowVariancePct}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Severity Class</div>
                <div className="text-base font-bold text-cyan-300 mt-0.5">
                  {selectedSignal.severity}
                </div>
              </div>
            </div>

            {/* Action capabilities list */}
            <div className="space-y-1.5 text-slate-300 font-sans text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Automated PRV valve modulation applied to reduce line friction.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Geographic GPS coordinates dispatched to mobile field maintenance team.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Adjacent District Metering Area (DMA) looped to maintain uninterrupted customer supply.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
