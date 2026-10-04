'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Gauge, Activity, Network, Shield, Radio, Sliders, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { AquavantaHero } from './AquavantaHero';
import { AquavantaCommandCenter } from './AquavantaCommandCenter';
import { AquavantaWaterJourney } from './AquavantaWaterJourney';
import { AquavantaSmartDistribution } from './AquavantaSmartDistribution';
import { AquavantaLeakIntelligence } from './AquavantaLeakIntelligence';
import { AquavantaWaterQuality } from './AquavantaWaterQuality';
import { AquavantaReservoirIntelligence } from './AquavantaReservoirIntelligence';
import { AquavantaSmartZones } from './AquavantaSmartZones';
import { AquavantaDigitalTwin } from './AquavantaDigitalTwin';
import { AquavantaSustainability } from './AquavantaSustainability';
import { AquavantaCapabilities } from './AquavantaCapabilities';
import { AquavantaCriticalInfra } from './AquavantaCriticalInfra';
import { AquavantaArchitecture } from './AquavantaArchitecture';
import { AquavantaSignatureStory } from './AquavantaSignatureStory';
import { AquavantaConfigurator } from './AquavantaConfigurator';
import { AquavantaProjectModal } from './AquavantaProjectModal';
import { AQUAVANTA_METADATA } from '@/data/aquavantaData';

interface AquavantaShowcaseProps {
  standalone?: boolean;
}

export function AquavantaShowcase({ standalone = false }: AquavantaShowcaseProps) {
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
    <div className="min-h-screen bg-[#02050E] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Top Project Breadcrumb Bar */}
      <header className="sticky top-0 z-40 bg-[#02050E]/90 backdrop-blur-md border-b border-cyan-950/80 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-cyan-400 font-semibold">Project #71</span>
            <span className="text-slate-700 hidden sm:inline">/</span>
            <span className="text-slate-300 hidden sm:inline font-sans font-bold">
              AQUAVANTA
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Hydraulic Network Nominal</span>
            </div>

            <button
              onClick={() => {
                setCustomSpecs('Inquiry from Project #71 Showcase');
                setModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors shadow-sm"
            >
              Request Proposal
            </button>
          </div>
        </div>
      </header>

      {/* Main Showcase Components */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <AquavantaHero
          onExploreClick={() => scrollToSection('command-center')}
          onArchitectureClick={() => scrollToSection('architecture')}
          onOpenModal={() => {
            setCustomSpecs('Direct Inquiry from AQUAVANTA Hero');
            setModalOpen(true);
          }}
        />

        {/* 2. Operations Command Center Simulation */}
        <AquavantaCommandCenter />

        {/* 3. The Complete Hydraulic Water Journey */}
        <AquavantaWaterJourney />

        {/* 4. Smart Distribution (Adaptive Flow) */}
        <AquavantaSmartDistribution />

        {/* 5. Acoustic Leak Intelligence */}
        <AquavantaLeakIntelligence />

        {/* 6. Continuous Water Quality */}
        <AquavantaWaterQuality />

        {/* 7. Strategic Reservoir Intelligence */}
        <AquavantaReservoirIntelligence />

        {/* 8. Metropolitan Smart Zones (DMAs) */}
        <AquavantaSmartZones />

        {/* 9. Hydraulic Digital Twin */}
        <AquavantaDigitalTwin />

        {/* 10. Climate Resilience & Sustainability */}
        <AquavantaSustainability />

        {/* 11. Infrastructure Capabilities */}
        <AquavantaCapabilities />

        {/* 12. Critical Infrastructure Protection */}
        <AquavantaCriticalInfra />

        {/* 13. Full-Stack Water Architecture */}
        <AquavantaArchitecture />

        {/* 14. Signature Story: "A City Wakes" */}
        <AquavantaSignatureStory />

        {/* 15. Interactive Network Sizer */}
        <AquavantaConfigurator onOpenModalWithSpecs={handleOpenModalWithSpecs} />

        {/* 16. Final Master Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#02050E] via-[#051428] to-[#02050E] border-t border-cyan-950/60 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE FUTURE OF WATER INFRASTRUCTURE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Design Water Infrastructure for What Comes Next.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Connect physical infrastructure with digital intelligence and build water networks that are easier to understand, manage, and evolve.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  setCustomSpecs('Custom Smart Water Deployment Strategy');
                  setModalOpen(true);
                }}
                className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-xl shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Explore AQUAVANTA</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCustomSpecs('Water Infrastructure Conversation Request');
                  setModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm transition-all duration-200"
              >
                Start a Conversation
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
              <span>Dubai & Abu Dhabi Hub</span>
              <span>•</span>
              <span>EPANET Physics Twin</span>
              <span>•</span>
              <span>Acoustic Leak Grid</span>
              <span>•</span>
              <span>100% Potability Security</span>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <AquavantaProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSpecs={customSpecs}
      />
    </div>
  );
}
