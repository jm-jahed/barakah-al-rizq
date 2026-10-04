'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, Clock, MapPin, User, Phone, MessageSquare, ShieldCheck, Compass } from 'lucide-react';
import { MOCK_MOVE_DASHBOARD, NESTMOVE_BRAND } from '@/data/movingData';

export const MoveDashboard: React.FC = () => {
  const dash = MOCK_MOVE_DASHBOARD;

  return (
    <section id="tracker" className="py-24 bg-[#090807] relative border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Compass className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
              LIVE MOVING DAY COMMAND HUD
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4">
              Real-Time Move Tracking.
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-xl">
              Track your ongoing relocation milestones, view assigned master carpenters, verify community gatepasses, and communicate with your team leader in real time.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              LIVE TELEMETRY • ACTIVE MOVE DISPATCH
            </span>
          </div>
        </div>

        {/* Dashboard Main Console Card */}
        <div className="bg-gradient-to-b from-[#14100C] to-[#0A0806] rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          
          {/* Top Bar: Move ID & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black font-mono text-white">MOVE ID: {dash.moveId}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
                  ● {dash.status}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono mt-1 block">
                VIP Client: <strong className="text-white">{dash.customerName}</strong>
              </span>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">OVERALL COMPLETION</span>
              <span className="text-2xl font-black text-amber-400 font-mono">{dash.progressPercent}%</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 font-mono text-xs border-b border-slate-800">
            
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">PICKUP RESIDENCE</span>
              <span className="text-white font-bold text-xs block">{dash.pickupLocation}</span>
              <span className="text-[10px] text-emerald-400 block pt-1">✓ {dash.telemetry.originPermit}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase block">NEW DESTINATION</span>
              <span className="text-cyan-300 font-bold text-xs block">{dash.deliveryLocation}</span>
              <span className="text-[10px] text-emerald-400 block pt-1">✓ {dash.telemetry.destinationPermit}</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-slate-500 text-[10px] uppercase block mb-1">DISPATCHED ASSETS</span>
                <span className="text-white font-bold text-xs block">{dash.crewCount}</span>
                <span className="text-amber-300 text-[10px] block mt-0.5">{dash.trucksDispatched}</span>
              </div>

              <div className="pt-2 border-t border-slate-800 mt-2 flex items-center justify-between">
                <span className="text-slate-300 text-[11px]">Lead: {dash.assignedLead}</span>
                <a
                  href={`tel:${dash.driverPhone}`}
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-bold text-[11px]"
                >
                  <Phone className="w-3 h-3 text-emerald-400" />
                  Call Lead
                </a>
              </div>
            </div>

          </div>

          {/* Milestone Progress Bar */}
          <div className="pt-6">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-6">
              MOVING DAY MILESTONE PROGRESSION:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dash.timeline.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-xs font-mono transition-all ${
                    step.status === 'completed'
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-slate-200'
                      : step.status === 'in-progress'
                      ? 'bg-amber-950/40 border-amber-500/50 text-white shadow-lg'
                      : 'bg-slate-950/60 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[11px] text-amber-300">{step.time}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      step.status === 'completed'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : step.status === 'in-progress'
                        ? 'bg-amber-500/20 text-amber-300 animate-pulse'
                        : 'bg-slate-900 text-slate-500'
                    }`}>
                      {step.status}
                    </span>
                  </div>
                  <div className="font-sans font-semibold text-xs leading-snug">{step.title}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
