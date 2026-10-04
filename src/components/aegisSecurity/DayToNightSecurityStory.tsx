'use client';

import React, { useState } from 'react';
import { Sun, Moon, Sunrise, Sunset, Shield, Eye, Lock, Radio } from 'lucide-react';

export default function DayToNightSecurityStory() {
  const [activePeriodIdx, setActivePeriodIdx] = useState<number>(0);

  const periods = [
    {
      id: 'day',
      label: 'DAY (06:00 - 18:00)',
      name: 'Active Commerce & Visitor Flow',
      icon: Sun,
      color: 'from-amber-500/20 to-cyan-500/20',
      badgeColor: 'text-amber-400 bg-amber-950/80 border-amber-500/40',
      headline: 'Flawless High-Volume Visitor Flow & Executive Presence',
      description: 'During peak daylight hours, our concierge security officers manage visitor screening, biometric turnstiles, executive escorts, and delivery vehicle manifests with five-star corporate etiquette.',
      protocol: 'Biometric Turnstiles & Concierge Verification Active',
      metrics: ['1,200+ Daily Visitors Cleared', '100% ID Scanned', 'Sub-20s Gate Flow'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'dusk',
      label: 'DUSK (18:00 - 20:00)',
      name: 'Perimeter Hardening & Ingress Transition',
      icon: Sunset,
      color: 'from-orange-500/20 to-purple-600/20',
      badgeColor: 'text-orange-400 bg-orange-950/80 border-orange-500/40',
      headline: 'Securing Secondary Portals & Arming Motion Sensors',
      description: 'As commercial operations taper off, officers conduct systematic sweep audits of emergency fire stairs, server room seals, and switch secondary gates to strict digital-only access.',
      protocol: 'Perimeter Sensor Calibration & Lighting Test Handshake',
      metrics: ['100% Secondary Doors Locked', 'CCTV Night Mode Activated', 'ANPR Evening Gate Sync'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'night',
      label: 'NIGHT (20:00 - 05:00)',
      name: 'Zero-Tolerance Thermal & Vault Shield',
      icon: Moon,
      color: 'from-blue-900/30 to-slate-950',
      badgeColor: 'text-cyan-400 bg-cyan-950/80 border-cyan-500/40',
      headline: 'Thermal AI Tripwires, RFID Guard Patrols & SOC Watch',
      description: 'In the quiet of the night, human vigilance is reinforced with artificial intelligence. Thermal PTZ cameras scan perimeter boundaries, guards log hourly RFID tokens, and our SOC monitors all feeds.',
      protocol: 'Level-IV Armed Vault Lockdown & FLIR Thermal Tripwire',
      metrics: ['24/7 Central SOC Remote Eye', 'Hourly RFID Guard Patrols', 'Sub-8m Tactical Reinforce'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'dawn',
      label: 'DAWN (05:00 - 06:00)',
      name: 'Shift Handover & Morning Readiness',
      icon: Sunrise,
      color: 'from-cyan-500/20 to-blue-600/20',
      badgeColor: 'text-cyan-300 bg-slate-900 border-cyan-500/30',
      headline: 'Digital Log Audits & Executive Morning Verification',
      description: 'Prior to tenant arrival, the night supervisor completes digital incident sign-offs on the SIRA portal, conducts a full perimeter sweep, and prepares the command desk for the morning shift.',
      protocol: 'Digital SIRA Manifest Sign-Off & Turnstile Boot-Check',
      metrics: ['0 Anomaly Morning Report', 'Complete Perimeter Cleared', '100% Day Officers on Post'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const current = periods[activePeriodIdx];
  const IconComp = current.icon;

  return (
    <section className="py-24 bg-[#03060C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>24/7 CONTINUOUS OPERATIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 24-Hour Sovereign Cycle
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience how security layers dynamically adapt throughout the day, dusk, night, and dawn to deliver unbroken preparedness.
          </p>
        </div>

        {/* 4-Period Step Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {periods.map((p, idx) => {
            const PctIcon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActivePeriodIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePeriodIdx === idx
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-xl shadow-cyan-500/25 border-cyan-400 scale-105'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <PctIcon className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-bold uppercase">CYCLE 0{idx + 1}</span>
                </div>
                <span className="text-xs font-bold block font-mono">{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Period Stage Card */}
        <div className="bg-[#080D18] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[450px]">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className={`px-3 py-1 rounded-xl border text-xs font-mono font-bold shadow-lg ${current.badgeColor}`}>
                {current.label}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400 uppercase block font-bold">Active Phase Protocol</span>
              <span className="text-xs font-bold text-white font-mono">{current.protocol}</span>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                {current.name}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {current.headline}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {current.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
                    <span className="text-cyan-400 font-bold block mb-0.5">✓</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Unbroken 24/7/365 SIRA Certified Shift Handover</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
