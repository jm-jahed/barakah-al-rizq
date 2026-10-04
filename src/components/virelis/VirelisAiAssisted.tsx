'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Eye,
  Microscope,
  FileCheck2,
  Users
} from 'lucide-react';

export function VirelisAiAssisted() {
  const capabilities = [
    {
      title: 'Morphological Pattern Highlighting',
      desc: 'Highlights atypical cellular clusters and tissue architectural changes on whole slide images for pathologist review.',
      badge: 'Vision Model'
    },
    {
      title: 'Critical STAT Prioritization',
      desc: 'Automatically elevates suspected acute findings (such as acute intracranial hemorrhage or critical troponin shifts) to the top of review queues.',
      badge: 'Queue Optimization'
    },
    {
      title: 'Multi-Modal Contextual Delta Checks',
      desc: 'Cross-correlates current lab values against 5-year patient historical curves, alerting to statistically significant physiological drift.',
      badge: 'Longitudinal Analysis'
    },
    {
      title: 'Structured Summary Generation',
      desc: 'Synthesizes complex multi-page laboratory and radiological findings into a concise, clinician-reviewed executive brief.',
      badge: 'Clinical NLP'
    }
  ];

  return (
    <section id="ai-assisted" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060A] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CLINICIAN-SUPERVISED DECISION SUPPORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Intelligence That Supports Expertise.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            VIRELIS algorithms do not make autonomous diagnoses. They act as a tireless second set of eyes, organizing high-density data and surfacing subtle anomalies for expert medical confirmation.
          </p>
        </div>

        {/* 4 Supervised AI Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-indigo-500/40 transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-indigo-400 uppercase mb-3">
                  <span>MODULE 0{idx + 1}</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {cap.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-indigo-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Specialist Supervised</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible AI Positioning Statement */}
        <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center font-mono text-xs text-slate-400">
          <div className="text-slate-300 font-bold mb-1">
            CLINICAL GOVERNANCE & TRANSPARENCY PRINCIPLES
          </div>
          <p className="max-w-2xl mx-auto font-sans font-light text-slate-400 text-xs">
            All AI algorithmic outputs feature transparent confidence scores and link directly to source DICOM coordinates and raw lab spectrographs. Medical decisions remain exclusively with licensed clinical practitioners.
          </p>
        </div>
      </div>
    </section>
  );
}
