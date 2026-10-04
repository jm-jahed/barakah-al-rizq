'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, ArrowRight, Terminal, ShieldCheck, Bot, Share2, ChevronRight, Layers, Calculator, ExternalLink, Lock, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { TENSORIS_BRAND } from '@/data/tensorisData';
import { TensorisHero } from './TensorisHero';
import { TensorisTrust } from './TensorisTrust';
import { TensorisArchitecture } from './TensorisArchitecture';
import { TensorisCapabilities } from './TensorisCapabilities';
import { TensorisAgentSystem } from './TensorisAgentSystem';
import { TensorisCommandCenter } from './TensorisCommandCenter';
import { TensorisIndustries } from './TensorisIndustries';
import { TensorisWorkflowStory } from './TensorisWorkflowStory';
import { TensorisSecurity } from './TensorisSecurity';
import { TensorisTechEcosystem } from './TensorisTechEcosystem';
import { TensorisCaseStudy } from './TensorisCaseStudy';
import { TensorisRoiCalculator } from './TensorisRoiCalculator';
import { TensorisTestimonials } from './TensorisTestimonials';
import { TensorisProjectModal } from './TensorisProjectModal';

interface TensorisShowcaseProps {
  standalone?: boolean;
}

export const TensorisShowcase: React.FC<TensorisShowcaseProps> = ({ standalone = false }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalIntent, setModalIntent] = useState<string>('Enterprise AI Architecture Briefing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleOpenModal = (intent?: string) => {
    if (intent) setModalIntent(intent);
    setIsModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Architecture', id: 'architecture' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'AI Agents', id: 'agents' },
    { label: 'Command Center', id: 'command-center' },
    { label: 'Industries', id: 'industries' },
    { label: 'Workflow', id: 'workflow' },
    { label: 'Security', id: 'security' },
    { label: 'Technology', id: 'technology' },
    { label: 'ROI Estimator', id: 'roi-calculator' },
    { label: 'Faq', id: 'faqs' }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Banner: WebStudio AE Showcase Navigation */}
      <div className="bg-[#02040a] border-b border-slate-800/80 text-xs font-mono py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-slate-300 font-semibold">Project #68</span>
            <span className="text-slate-600">/</span>
            <span className="hidden sm:inline text-slate-400">Artificial Intelligence Platform</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
              Top 20 Flagship Ready
            </span>
            <button
              onClick={() => handleOpenModal('Direct WebStudio Consultation for AI Platform')}
              className="text-cyan-400 hover:text-cyan-300 font-bold"
            >
              Consult Studio →
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-mono">
                  {TENSORIS_BRAND.name}
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                  Cognitive OS
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-mono text-slate-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenModal('Header Briefing Request')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs font-mono shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>Deploy AI Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden border-b border-slate-800 bg-[#020617] px-4 pt-2 pb-6 space-y-3"
            >
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenModal('Mobile Menu Consultation');
                  }}
                  className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2"
                >
                  <span>Deploy Sovereign AI Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <TensorisHero 
        onOpenModal={handleOpenModal}
        onScrollToSection={scrollToSection}
      />

      {/* Enterprise Trust & Credibility */}
      <TensorisTrust />

      {/* Core 4-Layer Architecture */}
      <TensorisArchitecture />

      {/* 6 Capabilities Deep-Dive */}
      <TensorisCapabilities onOpenModal={handleOpenModal} />

      {/* Autonomous AI Agent System */}
      <TensorisAgentSystem onOpenModal={handleOpenModal} />

      {/* Interactive AI Command Center */}
      <TensorisCommandCenter onOpenModal={handleOpenModal} />

      {/* Industry Solutions */}
      <TensorisIndustries onOpenModal={handleOpenModal} />

      {/* 5-Stage Workflow Pipeline */}
      <TensorisWorkflowStory />

      {/* Sovereign Security & Compliance */}
      <TensorisSecurity />

      {/* Technology Ecosystem */}
      <TensorisTechEcosystem />

      {/* Flagship Transformation Case Study */}
      <TensorisCaseStudy onOpenModal={handleOpenModal} />

      {/* Interactive ROI & Infrastructure Estimator */}
      <TensorisRoiCalculator onOpenModal={handleOpenModal} />

      {/* Testimonials & FAQs */}
      <TensorisTestimonials onOpenModal={handleOpenModal} />

      {/* Final Cinematic Enterprise CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#030712] via-[#020510] to-[#010308] text-slate-100 overflow-hidden border-t border-slate-900">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SOVEREIGN ARCHITECTURAL TRANSFORMATION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Architect Your Enterprise Intelligence.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Join the UAE&apos;s leading institutions in deploying dedicated sovereign GPU enclaves, autonomous multi-agent swarms, and deterministic decision engines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenModal('Final CTA — Deploy Sovereign AI')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <span>Schedule Architecture Briefing</span>
            </button>

            <button
              onClick={() => scrollToSection('roi-calculator')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 transition-all"
            >
              <span>Calculate AED ROI</span>
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>DIFC & ADGM On-Site Engineers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% UAE Data Sovereignty Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero Vendor Cloud Egress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010307] border-t border-slate-900 text-slate-400 text-xs py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold font-mono text-xs">
                  T
                </div>
                <span className="text-base font-bold text-white font-mono">{TENSORIS_BRAND.name}</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {TENSORIS_BRAND.legalName}
              </p>
              <p className="text-slate-500 text-[11px]">
                {TENSORIS_BRAND.sovereigntyStandard}
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <div className="font-mono text-white font-bold uppercase tracking-wider text-xs">Headquarters</div>
              <p className="text-slate-400">{TENSORIS_BRAND.headquarters}</p>
              <p className="text-slate-500">{TENSORIS_BRAND.satelliteOffices}</p>
              <p className="text-cyan-400 font-mono mt-1">Tel: {TENSORIS_BRAND.contactPhone}</p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2">
              <div className="font-mono text-white font-bold uppercase tracking-wider text-xs">Quick Links</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><button onClick={() => scrollToSection('architecture')} className="hover:text-cyan-300">4-Layer Cognitive Fabric</button></li>
                <li><button onClick={() => scrollToSection('capabilities')} className="hover:text-cyan-300">Sovereign AI Capabilities</button></li>
                <li><button onClick={() => scrollToSection('agents')} className="hover:text-cyan-300">Autonomous Agent Matrix</button></li>
                <li><button onClick={() => scrollToSection('command-center')} className="hover:text-cyan-300">Live AI Command Center</button></li>
                <li><button onClick={() => scrollToSection('roi-calculator')} className="hover:text-cyan-300">AED ROI & Compute Sizing</button></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <div className="font-mono text-white font-bold uppercase tracking-wider text-xs">Sovereignty Attestation</div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                All model weights, vector representations, and cryptographic audit trails are strictly contained within UAE tier-4 data centers under TDRA Level 3 compliance.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => handleOpenModal('Download Sovereign AI Whitepaper')}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 hover:text-white font-mono text-[11px]"
                >
                  Download Sovereign Whitepaper
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
            <div>
              © {new Date().getFullYear()} {TENSORIS_BRAND.legalName}. Engineered by <Link href="/" className="text-cyan-400 hover:underline">WebStudio AE</Link>.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy Enclave Policy</span>
              <span>•</span>
              <span>Terms of Compute</span>
              <span>•</span>
              <span>DIFC Registry</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Consultation Modal */}
      <TensorisProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultIntent={modalIntent}
      />
    </div>
  );
};
