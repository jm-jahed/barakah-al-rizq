'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Bot, Server, Share2 } from 'lucide-react';
import { ENTERPRISE_PLANS, TENSORIS_BRAND } from '@/data/tensorisData';

interface TensorisRoiCalculatorProps {
  onOpenModal: (customPackage?: string) => void;
}

export const TensorisRoiCalculator: React.FC<TensorisRoiCalculatorProps> = ({ onOpenModal }) => {
  const [teamSize, setTeamSize] = useState<number>(150);
  const [monthlyTxnCount, setMonthlyTxnCount] = useState<number>(85000);
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([
    'ERP Document Ingestion',
    'AML & Fraud Risk Screening',
    'Supply Chain Route Solver'
  ]);
  const [deploymentTier, setDeploymentTier] = useState<'pilot' | 'enterprise' | 'sovereign'>('enterprise');

  const workflowOptions = [
    'ERP Document Ingestion',
    'AML & Fraud Risk Screening',
    'Supply Chain Route Solver',
    'Autonomous Treasury FX Hedging',
    'Legal Contract Vector Graph',
    'VIP Conversational Concierge'
  ];

  const toggleWorkflow = (name: string) => {
    if (selectedWorkflows.includes(name)) {
      if (selectedWorkflows.length > 1) {
        setSelectedWorkflows(selectedWorkflows.filter(w => w !== name));
      }
    } else {
      setSelectedWorkflows([...selectedWorkflows, name]);
    }
  };

  // Dynamic calculations in AED
  const baseMonthlyAED = deploymentTier === 'pilot' ? 45000 : deploymentTier === 'enterprise' ? 115000 : 280000;
  const workflowMultiplier = 1 + (selectedWorkflows.length - 1) * 0.15;
  const estimatedAnnualSavingsAED = Math.round(
    teamSize * 42000 * 0.45 * workflowMultiplier + monthlyTxnCount * 1.85 * 12
  );
  const estimatedHoursSavedMonth = Math.round(teamSize * 32 * workflowMultiplier);
  const estimatedROI = Math.round(
    (estimatedAnnualSavingsAED / (baseMonthlyAED * 12)) * 100
  );

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello TENSORIS, I configured an Enterprise AI Architecture proposal on WebStudio AE:\n` +
      `• Tier: ${deploymentTier.toUpperCase()}\n` +
      `• Enterprise Size: ${teamSize} staff\n` +
      `• Monthly Transactions: ${monthlyTxnCount.toLocaleString()}\n` +
      `• Workflows: ${selectedWorkflows.join(', ')}\n` +
      `• Estimated Annual Savings: AED ${estimatedAnnualSavingsAED.toLocaleString()}\n` +
      `Please provide the technical architecture blueprint.`
    );
    window.open(`https://wa.me/${TENSORIS_BRAND.whatsappDirect}?text=${text}`, '_blank');
  };

  return (
    <section id="roi-calculator" className="relative py-24 bg-[#020617] text-slate-100 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI & INFRASTRUCTURE SIZING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Calculate Enterprise AI ROI & Sovereign Sizing
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Estimate direct operational cost reduction, decision cycle acceleration, and hardware allocation for your UAE deployment.
          </p>
        </div>

        {/* Master Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800">
            {/* Input 1: Enterprise Organization Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-bold uppercase">Enterprise Staff Scale:</span>
                <span className="text-cyan-300 font-bold text-sm">{teamSize} Knowledge Workers</span>
              </div>
              <input
                type="range"
                min={20}
                max={1500}
                step={10}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>20 (Mid-Enterprise)</span>
                <span>500 (Enterprise)</span>
                <span>1,500+ (Conglomerate)</span>
              </div>
            </div>

            {/* Input 2: Monthly Transaction / Document Volume */}
            <div className="space-y-2 pt-3 border-t border-slate-850">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-bold uppercase">Monthly Transactions / Invoices / Queries:</span>
                <span className="text-cyan-300 font-bold text-sm">{monthlyTxnCount.toLocaleString()} Ops / Mo</span>
              </div>
              <input
                type="range"
                min={5000}
                max={500000}
                step={5000}
                value={monthlyTxnCount}
                onChange={(e) => setMonthlyTxnCount(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5k / Mo</span>
                <span>250k / Mo</span>
                <span>500k+ / Mo</span>
              </div>
            </div>

            {/* Input 3: Target Workflows */}
            <div className="space-y-2 pt-3 border-t border-slate-850">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Select Active Swarm Workflows:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {workflowOptions.map((wf, idx) => {
                  const isChecked = selectedWorkflows.includes(wf);

                  return (
                    <button
                      key={idx}
                      onClick={() => toggleWorkflow(wf)}
                      className={`p-3 rounded-xl border text-xs font-mono text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-cyan-950/50 border-cyan-500/50 text-cyan-200 font-semibold'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="truncate">{wf}</span>
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                        isChecked ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'border-slate-700'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 4: Deployment Tier */}
            <div className="space-y-2 pt-3 border-t border-slate-850">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Compute Infrastructure Tier:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'pilot', name: 'Foundation Pilot', sub: 'AED 45k/mo' },
                  { id: 'enterprise', name: 'Matrix Pro', sub: 'AED 115k/mo' },
                  { id: 'sovereign', name: 'Air-Gapped Sovereign', sub: 'AED 280k/mo' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setDeploymentTier(tier.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      deploymentTier === tier.id
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-mono truncate">{tier.name}</div>
                    <div className="text-[10px] font-mono text-slate-500">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Projections Card */}
          <div className="lg:col-span-5 space-y-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617] border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                PROJECTED ROI & VALUE CREATION
              </span>
              <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                {estimatedROI}% First-Year ROI
              </span>
            </div>

            {/* Big Metrics */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                <div className="text-xs font-mono text-slate-400 uppercase">Estimated Annual Operational Savings:</div>
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400 tracking-tight">
                  AED {estimatedAnnualSavingsAED.toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  Calculated from cycle compression, labor reallocation, and error elimination.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Productive Hours Reclaimed</div>
                  <div className="text-xl font-bold font-mono text-cyan-300 mt-0.5">
                    {estimatedHoursSavedMonth.toLocaleString()} hrs / mo
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-850">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Decision Velocity Uplift</div>
                  <div className="text-xl font-bold font-mono text-white mt-0.5">
                    94.2% Faster
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Plan Sizing */}
            <div className="pt-2 border-t border-slate-850 text-xs font-mono text-slate-300 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Infrastructure:</span>
                <span className="text-white font-bold uppercase">{deploymentTier} Node</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Base Sovereign Monthly:</span>
                <span className="text-cyan-300 font-bold">AED {baseMonthlyAED.toLocaleString()} / mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">UAE Data Sovereignty:</span>
                <span className="text-emerald-400 font-bold">100% Onshore Dubai/AD</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => onOpenModal(`Custom Proposal: ${deploymentTier.toUpperCase()} - AED ${estimatedAnnualSavingsAED.toLocaleString()} Est Savings`)}
                className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Request Formal Architecture Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center justify-center gap-2"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant WhatsApp Dispatch to AI Solutions Architect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
