'use client';

import React, { useState } from 'react';
import { Eye, ShieldAlert, Cpu, UserCheck, Activity, CheckCircle2 } from 'lucide-react';

export default function SecurityProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      name: 'ASSESS',
      title: 'Physical & Environmental Reconnaissance',
      desc: 'Our certified security consultants conduct on-site physical surveys of your facility, reviewing access points, perimeter fences, traffic patterns, and existing CCTV blind spots.',
      icon: Eye,
      inclusions: ['Perimeter physical integrity audit', 'Access control blind-spot mapping', 'Historical threat matrix analysis']
    },
    {
      num: '02',
      name: 'ANALYZE',
      title: 'Quantitative Risk & Vulnerability Scoring',
      desc: 'We cross-reference your site findings against SIRA and MOI regulatory requirements, categorizing threat vectors across unauthorized entry, loss, and executive vulnerabilities.',
      icon: ShieldAlert,
      inclusions: ['SIRA compliance gap assessment', 'Threat probability vs severity matrix', 'Asset valuation & criticality grading']
    },
    {
      num: '03',
      name: 'DESIGN',
      title: 'Sovereign Security Strategy Architecture',
      desc: 'We engineer a bespoke security masterplan detailing exact guard post rosters, access control hardware placement, SOC response protocols, and emergency escalation workflows.',
      icon: Cpu,
      inclusions: ['Post orders & emergency operating procedures', 'Biometric & CCTV technical layout plan', 'Police & Civil Defense liaison blueprints']
    },
    {
      num: '04',
      name: 'DEPLOY',
      title: 'Precision Mobilization & Guard Handover',
      desc: 'Uniformed SIRA Grade-A officers and CPOs are deployed to your site. All officers complete mandatory site-specific onboarding, emergency drills, and customer etiquette training.',
      icon: UserCheck,
      inclusions: ['Uniformed officer post deployment', 'RFID patrol checkpoint token installation', 'Central SOC live video feed integration']
    },
    {
      num: '05',
      name: 'MONITOR',
      title: 'Continuous Review & Threat Adaptation',
      desc: 'Security is never static. Our supervisors conduct unannounced night audits, review monthly digital incident logs with you, and proactively adapt guard rosters as operations scale.',
      icon: Activity,
      inclusions: ['24/7/365 Central SOC active watch', 'Monthly executive risk intelligence reports', 'Quarterly emergency drill recertification']
    }
  ];

  return (
    <section className="py-24 bg-[#03060C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>THE 5-STEP STRATEGIC METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How Sovereign Security Is Engineered
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From initial site reconnaissance to 24/7 central SOC monitoring, our structured methodology guarantees zero operational vulnerabilities.
          </p>
        </div>

        {/* 5-Step Process Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeStep === idx
                  ? 'bg-cyan-500 text-slate-950 font-black shadow-xl shadow-cyan-500/25 border-cyan-400 scale-105'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold ${activeStep === idx ? 'text-slate-900' : 'text-cyan-400'}`}>
                  STEP {s.num}
                </span>
                <span className={`w-2 h-2 rounded-full ${activeStep === idx ? 'bg-slate-950' : 'bg-slate-700'}`} />
              </div>
              <span className="text-sm font-bold font-mono block">{s.name}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-[#080D18] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                STEP {steps[activeStep].num} &bull; {steps[activeStep].name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {steps[activeStep].title}
              </h3>
            </div>
            <span className="px-3.5 py-1.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400">
              SIRA Standard Protocol
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {steps[activeStep].desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {steps[activeStep].inclusions.map((inc, idx) => (
              <div key={idx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
