'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Terminal, Activity, Layers, Cpu, Shield, Briefcase, Sliders, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, MessageSquare } from 'lucide-react';
import { StratosynHero } from './StratosynHero';
import { StratosynGlobalFabric } from './StratosynGlobalFabric';
import { StratosynSystemLayers } from './StratosynSystemLayers';
import { StratosynCloudSystemStory } from './StratosynCloudSystemStory';
import { StratosynCommandCenter } from './StratosynCommandCenter';
import { StratosynOrchestration } from './StratosynOrchestration';
import { StratosynCapabilities } from './StratosynCapabilities';
import { StratosynPerformance } from './StratosynPerformance';
import { StratosynSecurity } from './StratosynSecurity';
import { StratosynUseCases } from './StratosynUseCases';
import { StratosynArchitectureStory } from './StratosynArchitectureStory';
import { StratosynTechEcosystem } from './StratosynTechEcosystem';
import { StratosynObservability } from './StratosynObservability';
import { StratosynConfigurator } from './StratosynConfigurator';
import { StratosynProjectModal } from './StratosynProjectModal';
import { STRATOSYN_METADATA } from '@/data/stratosynData';
import { AGENCY_BUSINESS } from '@/data/siteData';

interface StratosynShowcaseProps {
  standalone?: boolean;
}

export function StratosynShowcase({ standalone = false }: StratosynShowcaseProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [customSpecs, setCustomSpecs] = useState('');

  const handleOpenModalWithSpecs = (specs: string) => {
    setCustomSpecs(specs);
    setModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Top Project Breadcrumb Bar */}
      <header className="sticky top-0 z-40 bg-[#04060C]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-sky-400 font-semibold">Project #70</span>
            <span className="text-slate-700 hidden sm:inline">/</span>
            <span className="text-slate-300 hidden sm:inline font-sans font-bold">
              STRATOSYN
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>7 Fabrics Online</span>
            </div>

            <button
              onClick={() => {
                setCustomSpecs('Inquiry from Project #70 Showcase');
                setModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono transition-colors shadow-sm"
            >
              Request Architecture
            </button>
          </div>
        </div>
      </header>

      {/* Main Showcase Components */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <StratosynHero
          onExploreClick={() => scrollToSection('infrastructure-fabric')}
          onArchitectureClick={() => scrollToSection('system-architecture')}
          onOpenModal={() => {
            setCustomSpecs('Direct Inquiry from STRATOSYN Hero');
            setModalOpen(true);
          }}
        />

        {/* 2. Global Compute Fabric Map */}
        <StratosynGlobalFabric />

        {/* 3. Four Core System Layers */}
        <StratosynSystemLayers />

        {/* 4. "The Cloud is a System" Cinematic Storytelling */}
        <StratosynCloudSystemStory />

        {/* 5. Live Infrastructure Command Center Simulation */}
        <StratosynCommandCenter />

        {/* 6. Intelligent Orchestration (Adaptive Flow) */}
        <StratosynOrchestration />

        {/* 7. Eight Cloud Computing Capabilities */}
        <StratosynCapabilities />

        {/* 8. Built for the Workload Ahead (Performance & Reliability) */}
        <StratosynPerformance />

        {/* 9. Security at Every Layer */}
        <StratosynSecurity />

        {/* 10. Industry Use Cases */}
        <StratosynUseCases />

        {/* 11. Interactive 7-Tier Architecture Story */}
        <StratosynArchitectureStory />

        {/* 12. Technology Ecosystem */}
        <StratosynTechEcosystem />

        {/* 13. Continuous Observability Matrix */}
        <StratosynObservability />

        {/* 14. Interactive Workload Sizer & Cost Sizer */}
        <StratosynConfigurator onOpenModalWithSpecs={handleOpenModalWithSpecs} />

        {/* 15. Final Master Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#05070E] via-[#080D1A] to-[#04060C] border-t border-slate-800/80 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENGINEERED FOR SCALE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Build Beyond One Server.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Design infrastructure that can evolve with the workload, the product, and the world around it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  setCustomSpecs('Custom Enterprise Deployment Strategy');
                  setModalOpen(true);
                }}
                className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-sky-500/25 active:scale-[0.98] flex items-center gap-2"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCustomSpecs('Enterprise Conversation Request');
                  setModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all duration-200"
              >
                Start a Conversation
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
              <span>Dubai • DIFC Enclave</span>
              <span>•</span>
              <span>142.8 Tbps Mesh</span>
              <span>•</span>
              <span>Sub-5ms Edge Hop</span>
              <span>•</span>
              <span>Zero-Trust Security</span>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <StratosynProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSpecs={customSpecs}
      />
    </div>
  );
}
