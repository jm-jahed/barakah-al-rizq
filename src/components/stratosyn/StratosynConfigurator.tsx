'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, Database, Globe, Activity, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { WORKLOAD_PRESETS, WorkloadProfile } from '@/data/stratosynData';

interface StratosynConfiguratorProps {
  onOpenModalWithSpecs?: (specs: string) => void;
}

export function StratosynConfigurator({ onOpenModalWithSpecs }: StratosynConfiguratorProps) {
  const [selectedPreset, setSelectedPreset] = useState<string>('enterprise-core');
  const [vCpu, setVCpu] = useState<number>(128);
  const [ramGb, setRamGb] = useState<number>(512);
  const [gpus, setGpus] = useState<number>(0);
  const [storageTb, setStorageTb] = useState<number>(10);
  const [regions, setRegions] = useState<number>(3);

  const applyPreset = (preset: WorkloadProfile) => {
    setSelectedPreset(preset.id);
    setVCpu(preset.defaultVcpu);
    setRamGb(preset.defaultRamGb);
    setGpus(preset.defaultGpu);
    setStorageTb(preset.defaultStorageTb);
    setRegions(preset.defaultRegions);
  };

  // Dynamic calculated estimated monthly AED (realistic enterprise UAE cloud baseline)
  const estimatedMonthlyAed = Math.round(
    vCpu * 45 + ramGb * 12 + gpus * 1800 + storageTb * 150 + regions * 800
  );

  const handleConsultationClick = () => {
    const specsSummary = `Workload Sizer: ${vCpu} vCPU, ${ramGb}GB RAM, ${gpus} GPUs, ${storageTb}TB NVMe, across ${regions} Regions. Est. AED ${estimatedMonthlyAed.toLocaleString()}/mo.`;
    if (onOpenModalWithSpecs) {
      onOpenModalWithSpecs(specsSummary);
    }
  };

  return (
    <section id="workload-sizer" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE WORKLOAD SIZER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Configure Your Distributed Footprint
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Model your enterprise computational demands, regional distribution, and accelerator allocation with instant simulated sizing.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {WORKLOAD_PRESETS.map((preset) => {
            const isSelected = preset.id === selectedPreset;
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-slate-900 border-sky-400 shadow-lg shadow-sky-950/40 ring-1 ring-sky-400/40'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-mono text-sky-400 uppercase mb-1">Preset</div>
                <div className="text-base font-bold text-white mb-1">{preset.name}</div>
                <div className="text-xs text-slate-400 font-light leading-relaxed">{preset.description}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Configurator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800/60 flex items-center justify-between">
              <span>Hardware Allocation Controls</span>
              <span>Dynamic Sizing Engine</span>
            </div>

            {/* vCPU Slider */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  Compute Cores (vCPU)
                </span>
                <span className="text-sky-400 font-bold text-sm">{vCpu} Cores</span>
              </div>
              <input
                type="range"
                min={8}
                max={512}
                step={8}
                value={vCpu}
                onChange={(e) => {
                  setSelectedPreset('custom');
                  setVCpu(parseInt(e.target.value));
                }}
                className="w-full accent-sky-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>8 Cores</span>
                <span>256 Cores</span>
                <span>512 Cores</span>
              </div>
            </div>

            {/* RAM Slider */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-indigo-400" />
                  System Memory (RAM)
                </span>
                <span className="text-indigo-400 font-bold text-sm">{ramGb} GB</span>
              </div>
              <input
                type="range"
                min={32}
                max={2048}
                step={32}
                value={ramGb}
                onChange={(e) => {
                  setSelectedPreset('custom');
                  setRamGb(parseInt(e.target.value));
                }}
                className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>32 GB</span>
                <span>1,024 GB</span>
                <span>2,048 GB</span>
              </div>
            </div>

            {/* GPU Accelerators Slider */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  GPU Tensor Cores (H100/B200)
                </span>
                <span className="text-emerald-400 font-bold text-sm">{gpus} GPUs</span>
              </div>
              <input
                type="range"
                min={0}
                max={32}
                step={2}
                value={gpus}
                onChange={(e) => {
                  setSelectedPreset('custom');
                  setGpus(parseInt(e.target.value));
                }}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>0 (CPU Only)</span>
                <span>16 GPUs</span>
                <span>32 GPUs</span>
              </div>
            </div>

            {/* NVMe Storage Slider */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-cyan-400" />
                  NVMe-oF Tier 0 Storage
                </span>
                <span className="text-cyan-400 font-bold text-sm">{storageTb} TB</span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                step={1}
                value={storageTb}
                onChange={(e) => {
                  setSelectedPreset('custom');
                  setStorageTb(parseInt(e.target.value));
                }}
                className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>1 TB</span>
                <span>50 TB</span>
                <span>100 TB</span>
              </div>
            </div>

            {/* Regions Slider */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-sky-400" />
                  Active Geographic Fabrics
                </span>
                <span className="text-sky-400 font-bold text-sm">{regions} Regions</span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={regions}
                onChange={(e) => {
                  setSelectedPreset('custom');
                  setRegions(parseInt(e.target.value));
                }}
                className="w-full accent-sky-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>1 (UAE Enclave)</span>
                <span>4 (Global Ring)</span>
                <span>7 (All Hubs)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Estimated Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Estimated Enterprise Cloud Tier
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-baseline gap-2 mb-1">
                <span className="text-xs text-sky-400 font-normal">AED</span>
                {estimatedMonthlyAed.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal">/ month</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-400 mb-6">
                ● Includes 24/7 Dedicated UAE SOC & 99.999% SLA
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 font-mono text-xs border-t border-b border-slate-800/80 py-4 my-4">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Compute Allocation:</span>
                  <span className="text-white font-bold">{vCpu} vCPU • {ramGb}GB</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Accelerators:</span>
                  <span className="text-white font-bold">{gpus > 0 ? `${gpus}x H100 Tensor` : 'Standard CPU'}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Replication Domains:</span>
                  <span className="text-white font-bold">{regions} Fabric Hubs</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>NVMe Tier 0:</span>
                  <span className="text-white font-bold">{storageTb} TB Active-Active</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                Customized quotes include sovereign UAE data boundaries, dedicated fiber cross-connects, and automated GitOps onboarding.
              </p>
            </div>

            <button
              onClick={handleConsultationClick}
              className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2"
            >
              <span>Request Infrastructure Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
