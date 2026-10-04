'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MEDIVANTA_MEDICINES } from '@/data/medivantaData';
import { CheckCircle2, Clock, Thermometer, FileText, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

export const MedivantaAvailability: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#02050a] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
            REAL-TIME MEDICINE AVAILABILITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Know Before You Order. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Transparent Stock Across All Micro-Hubs.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eliminate unexpected pharmacy shortages. Every SKU is monitored with batch serialization, cold-storage telemetry, and live dispatch readiness.
          </p>
        </div>

        {/* Availability Matrix Table / Cards */}
        <div className="rounded-3xl bg-gradient-to-b from-[#070f1a] to-[#040810] border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300 font-mono">
              <thead className="bg-[#060c15] text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-4 px-6">Medicine & Formula</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Stock Status</th>
                  <th className="py-4 px-6">Thermal Spec</th>
                  <th className="py-4 px-6">Avg Lead Time</th>
                  <th className="py-4 px-6 text-right">Price (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {MEDIVANTA_MEDICINES.map((med) => (
                  <tr key={med.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white font-sans text-sm">{med.name}</div>
                      <div className="text-xs text-slate-400 font-mono">{med.genericName} • {med.dosage}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-xs text-slate-300">{med.category}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        In Stock (100% Ready)
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {med.temperatureControlled ? (
                        <div className="flex items-center gap-1 text-cyan-300 text-xs">
                          <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{med.tempRange}</span>
                        </div>
                      ) : (
                        <span className="text-slate-400 text-xs">Ambient Storage</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 text-slate-300 text-xs">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>~{med.leadTimeMinutes} min metro dispatch</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-bold text-white text-base">
                      AED {med.priceAED}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
