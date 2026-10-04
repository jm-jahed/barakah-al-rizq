'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Layers, Database, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { STRATOSYN_TECH_ECOSYSTEM, TechEcosystemItem } from '@/data/stratosynData';

export function StratosynTechEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Container & Runtime',
    'Orchestration & IaC',
    'Observability & Telemetry',
    'Data & Caching',
    'Network & Protocols'
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? STRATOSYN_TECH_ECOSYSTEM
      : STRATOSYN_TECH_ECOSYSTEM.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>OPEN STANDARDS & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Integrated With Open Cloud Standards
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Engineered around standard OCI containers, Kubernetes primitives, Terraform providers, and OpenTelemetry observability to prevent vendor lock-in.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:text-white hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-sky-400">{item.category}</span>
                  <span className="text-slate-400">{item.version}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Integration:</span>
                <span className="text-emerald-400 font-semibold">{item.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-[11px] font-mono text-slate-500">
          Note: Open-source technologies listed reflect architectural integration standards. No endorsement or official affiliation implied.
        </div>
      </div>
    </section>
  );
}
