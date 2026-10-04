'use client';

import React, { useState } from 'react';
import { ShieldCheck, Eye, Zap, RefreshCw, ArrowRight } from 'lucide-react';

export default function WhySecurityMatters() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'PREVENT',
      headline: 'Identify Vulnerabilities Before They Become Incidents',
      desc: 'Through comprehensive Threat, Vulnerability, and Risk Assessments (TVRA), our advisors analyze physical weak points, access loopholes, and external threat vectors before unauthorized breaches occur.',
      icon: Eye,
      points: [
        'Perimeter penetration audits and digital vulnerability mapping',
        'Staff background vetting & biometric credential provisioning',
        'Predictive AI surveillance flagging abnormal loitering patterns'
      ]
    },
    {
      step: '02',
      title: 'PROTECT',
      headline: 'Create Controlled, High-Trust Environments',
      desc: 'Disciplined manned guarding and multi-layered electronic barriers establish an impenetrable protective ring around your executives, assets, intellectual property, and residents.',
      icon: ShieldCheck,
      points: [
        'Vigilant SIRA Grade-A certified static and concierge guarding',
        'Touchless biometric iris & facial recognition speed gates',
        'Armored VIP transport convoys with defensive-tactical drivers'
      ]
    },
    {
      step: '03',
      title: 'RESPOND',
      headline: 'Maintain Structured, Millisecond Response Procedures',
      desc: 'When an anomaly or breach is detected, response time is decisive. Our 24/7 Central SOC triages threats in seconds and coordinates immediate on-site intervention and mobile patrol reinforcement.',
      icon: Zap,
      points: [
        'Sub-15 second video verification and direct SOC audio voice-down',
        'Under 8-minute tactical mobile squad reinforcement in Dubai & Abu Dhabi',
        'Automated SIRA emergency escalation link to local police command'
      ]
    },
    {
      step: '04',
      title: 'RECOVER',
      headline: 'Support Total Operational Continuity After Events',
      desc: 'Security does not end when an incident is contained. We provide full digital forensic audit trails, damage containment, evidence collation, and continuous post-incident hardening.',
      icon: RefreshCw,
      points: [
        'Complete time-stamped digital incident dossiers and CCTV exports',
        'Post-incident security architecture debrief and hardening upgrades',
        'Business continuity support to resume normal enterprise operations'
      ]
    }
  ];

  const current = stages[activeStage];
  const IconComp = current.icon;

  return (
    <section className="py-24 bg-[#03060C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>THE 4-STAGE THREAT RESILIENCE FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Security Is More Than Presence.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            True defense is an active operational continuum engineered across prevention, continuous protection, rapid response, and resilience recovery.
          </p>
        </div>

        {/* 4-Stage Navigation Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {stages.map((st, idx) => (
            <button
              key={st.step}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeStage === idx
                  ? 'bg-gradient-to-b from-cyan-500/20 to-blue-600/10 border-cyan-400 text-white shadow-xl shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-cyan-400">STAGE {st.step}</span>
                <span className={`w-2 h-2 rounded-full ${activeStage === idx ? 'bg-cyan-400' : 'bg-slate-700'}`} />
              </div>
              <span className="text-sm font-extrabold text-white block font-mono">{st.title}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Showcase Container */}
        <div className="bg-[#080D18] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/15 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400 font-bold">
              <span>STAGE {current.step} &bull; {current.title}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {current.headline}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {current.desc}
            </p>

            <div className="space-y-2.5 pt-2">
              {current.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-4 text-center">
            <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-500/10">
              <IconComp className="w-10 h-10" />
            </div>
            <span className="text-lg font-black text-white font-mono">{current.title} PROTOCOL</span>
            <p className="text-xs text-slate-400 font-mono">
              Certified across SIRA Dubai &bull; MOI UAE &bull; PSBD Abu Dhabi standards.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
