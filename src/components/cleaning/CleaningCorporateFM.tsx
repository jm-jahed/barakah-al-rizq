'use client';

import React, { useState } from 'react';
import { ShieldCheck, Building2, Award, CheckCircle2, ArrowRight, Layers, FileText } from 'lucide-react';

interface CleaningCorporateFMProps {
  onOpenDispatch: () => void;
}

export const CleaningCorporateFM: React.FC<CleaningCorporateFMProps> = ({
  onOpenDispatch
}) => {
  const [activeTab, setActiveTab] = useState<'corporate' | 'retail' | 'clinic' | 'highrise'>('corporate');

  const SECTORS = {
    corporate: {
      title: 'DIFC & Corporate Headquarters Facility Management',
      subtitle: 'Discreet 24/7 After-Hours Workspace Sanitization',
      description: 'Engineered for sovereign wealth funds, multinational investment banks, and legal chambers in DIFC, Downtown, and ADGM. Includes daily workstation micro-dusting, high-traffic HEPA carpet extraction, and executive boardroom bio-misting.',
      metrics: [
        { label: 'Air Particulate Reduction', value: '99.8%' },
        { label: 'Security Clearance', value: '100% Vetted' },
        { label: 'Discreet Shift Window', value: '8 PM - 5 AM' },
        { label: 'Monthly SLA Audits', value: 'ISO 9001:2015' }
      ]
    },
    retail: {
      title: 'Luxury Flagship Retail & Showroom Detailing',
      subtitle: 'Dubai Mall & Mall of the Emirates High-Spec Care',
      description: 'Precision maintenance for ultra-luxury haute couture boutiques, high-jewelry vitrines, and exotic automotive showrooms. Streak-free crystal glass detailing, mirror-finish Italian marble maintenance, and delicate display fabric preservation.',
      metrics: [
        { label: 'Glass Clarity Index', value: '100% Pure Optical' },
        { label: 'Marble Gloss Rating', value: '95° Mirror Spec' },
        { label: 'Emergency Spill Response', value: '15 Minutes' },
        { label: 'VIP Walkthrough Audit', value: 'Daily Pre-Open' }
      ]
    },
    clinic: {
      title: 'DHA-Certified Medical Cleanrooms & Cosmetic Clinics',
      subtitle: 'Hospital-Grade Pathogen Eradication Protocols',
      description: 'Strict adherence to Dubai Health Authority (DHA) sanitation mandates for day-surgery centers, dental operating suites, and aesthetic dermatology clinics. Electrostatic surface bio-bonding and ATP bioluminescence swab compliance logging.',
      metrics: [
        { label: 'Microbial Kill Rate', value: '99.999%' },
        { label: 'DHA Regulatory Compliance', value: '100% Pass Rate' },
        { label: 'EPA-Registered Biocides', value: 'Hospital-Grade' },
        { label: 'Air Quality Filtration', value: 'HEPA Class H14' }
      ]
    },
    highrise: {
      title: 'High-Rise Architectural Glass & Abseiling Facade Wash',
      subtitle: 'IRATA-Certified Rope Access & Water-Fed Carbon Poles',
      description: 'Rope-access building facade washing for skyscrapers and coastal glass towers. Purified deionized reverse-osmosis water systems removing mineral desert dust without leaving water spots or calcification.',
      metrics: [
        { label: 'Rope Access Level', value: 'IRATA Level 3' },
        { label: 'Max Reach Elevation', value: '350+ Meters' },
        { label: 'Pure Water Purity', value: '0 PPM TDS' },
        { label: 'Safety Record', value: '0 Incident Hours' }
      ]
    }
  };

  const currentSector = SECTORS[activeTab];

  return (
    <section id="corporate-fm" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional Enterprise Operations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              B2B & Facility Management
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Turnkey cleaning contracts for DIFC financial institutions, luxury fashion flagships, and DHA-licensed cosmetic surgical centers.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001, 14001 & 45001 Certified</span>
            </span>
          </div>
        </div>

        {/* Sector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'corporate', label: 'Corporate Headquarters' },
            { id: 'retail', label: 'Luxury Boutiques' },
            { id: 'clinic', label: 'DHA Medical Clinics' },
            { id: 'highrise', label: 'Skyscraper Facades' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`p-4 rounded-2xl border text-left transition-all font-mono text-xs ${
                activeTab === tab.id
                  ? 'bg-emerald-500/15 border-emerald-500/50 text-white font-bold shadow-lg shadow-emerald-500/10'
                  : 'bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Sector Card */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                {currentSector.subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                {currentSector.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed font-light max-w-3xl">
                {currentSector.description}
              </p>
            </div>

            <button
              onClick={onOpenDispatch}
              className="shrink-0 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>Request Corporate SLA Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
            {currentSector.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800">
                <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-zinc-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
