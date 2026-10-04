'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Database, 
  Globe2, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Layout, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Smartphone,
  Maximize2,
  GitBranch,
  Server,
  Activity,
  ArrowUpRight,
  ExternalLink,
  X,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { SELECTED_WORK, ProjectItem } from '@/data/siteData';

interface DigitalArchitectureMatrixProps {
  onOpenOrderModal: (context?: string) => void;
}

interface ArchitecturalModule {
  name: string;
  focus: string;
  tech: string;
  description: string;
  connectedSlugs?: string[];
}

interface SystemLayer {
  id: string;
  tag: string;
  title: string;
  category: string;
  summary: string;
  telemetry: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
  modules: ArchitecturalModule[];
  uaeIntegration: string;
}

const ARCHITECTURE_LAYERS: SystemLayer[] = [
  {
    id: 'experience-layer',
    tag: 'LAYER 01',
    title: 'Experience & Interface Design',
    category: 'Design Systems & UI Ergonomics',
    summary: 'Bespoke design systems structured in Figma and implemented in Next.js with thoughtful micro-interactions, clean typography, and responsive dark aesthetics.',
    telemetry: 'Zero CLS • AA Contrast Standards',
    icon: Layout,
    accentColor: 'amber',
    badge: 'Design System',
    modules: [
      { name: 'Bespoke Component Library', focus: 'Structured Tokens', tech: 'Figma to React', description: 'Zero off-the-shelf templates. Thoughtful typography scales, color tokens, and responsive component libraries.', connectedSlugs: ['real-estate-lead-platform', 'luxury-jewelry', 'stayora'] },
      { name: 'Arabic RTL & GCC Localization', focus: 'Bilingual Layouts', tech: 'Arabic RTL Support', description: 'Mirrored layout flows with balanced typography hierarchy for native Arabic and English presentation.', connectedSlugs: ['corporate-law-firm', 'accounting-tax-consultancy', 'business-center-serviced-offices'] },
      { name: 'Interactive UI Transitions', focus: 'Smooth Motion', tech: 'Framer Motion', description: 'Polished state transitions, modal drawers, and responsive touch/cursor feedback.', connectedSlugs: ['real-estate-lead-platform', 'car-rental', 'abaya-fashion'] },
      { name: 'Universal Device Ergonomics', focus: 'Cross-Device Layout', tech: 'CSS Grid & Flexbox', description: 'Mobile-first ergonomics, tablet adaptability, and high-resolution desktop presentation.', connectedSlugs: ['digital-marketing-agency', 'restaurant-cafe', 'coding-tech-academy'] }
    ],
    uaeIntegration: 'Designed for UAE and regional commercial brands requiring bilingual Arabic/English presentation.'
  },
  {
    id: 'frontend-engineering',
    tag: 'LAYER 02',
    title: 'Frontend Architecture & Next.js',
    category: 'Modern Web Engineering & React',
    summary: 'Component-driven frontend built with Next.js App Router, clean server-side rendering, and performance-first CSS architecture.',
    telemetry: 'Sub-50ms TTFB • Next.js 16 SSR',
    icon: Code2,
    accentColor: 'emerald',
    badge: 'Next.js App Router',
    modules: [
      { name: 'Server-Side Rendering & Prerendering', focus: 'Fast Page Delivery', tech: 'Next.js App Router', description: 'Static prerendering and server-rendered page trees for rapid initial paint and search visibility.', connectedSlugs: ['real-estate-lead-platform', 'corporate-law-firm', 'holiday-home-management'] },
      { name: 'Type-Safe Architecture', focus: 'Code Maintainability', tech: 'TypeScript 5', description: 'Clear type definitions across components, data models, and interactive interfaces.', connectedSlugs: ['fintech-payments', 'coding-tech-academy', 'artificial-intelligence'] },
      { name: 'Modern Responsive Styling', focus: 'Clean CSS', tech: 'Tailwind CSS', description: 'Utility-first CSS architecture with optimized production bundles and zero unused styles.', connectedSlugs: ['real-estate-lead-platform', 'luxury-jewelry', 'car-rental'] },
      { name: 'Media & Image Pipeline', focus: 'Asset Optimization', tech: 'Next.js Image Optimizer', description: 'Responsive next-gen format delivery (AVIF/WebP) with pre-computed aspect ratios to prevent layout shifts.', connectedSlugs: ['restaurant-cafe', 'perfume-fragrance', 'luxury-furniture'] }
    ],
    uaeIntegration: 'Optimized for fast mobile performance across UAE networks and international traffic.'
  },
  {
    id: 'enterprise-data',
    tag: 'LAYER 03',
    title: 'Content Architecture & Admin Systems',
    category: 'Structured Content & API Integrations',
    summary: 'Structured data schemas, modular content repositories, and admin control panels engineered for long-term client maintainability.',
    telemetry: 'ACID Compliant • Auto-Scaling APIs',
    icon: Database,
    accentColor: 'amber',
    badge: 'Content & APIs',
    modules: [
      { name: 'Structured Data Modeling', focus: 'Data Schemas', tech: 'Database & JSON Schemas', description: 'Relational models and clean data abstractions supporting catalogs, services, and dynamic content.', connectedSlugs: ['fintech-payments', 'money-exchange-remittance', 'real-estate-lead-platform'] },
      { name: 'API Routing & Server Endpoints', focus: 'Backend Communication', tech: 'Next.js API Routes', description: 'Secure server-side API handlers for form submissions, data fetching, and external service communication.', connectedSlugs: ['car-rental', 'flight-hotel-booking', 'logistics-delivery'] },
      { name: 'Content & Admin Management', focus: 'Platform Control', tech: 'Custom Admin Dashboards', description: 'Dedicated administrative interfaces allowing teams to manage leads, portfolio projects, and site settings.', connectedSlugs: ['real-estate-lead-platform', 'corporate-law-firm', 'private-school'] },
      { name: 'Search & Filtering Engines', focus: 'Catalog Navigation', tech: 'Client & Server Search', description: 'High-speed category filtering, multi-criteria exploration, and real-time query matching.', connectedSlugs: ['holiday-home-management', 'car-rental', 'luxury-jewelry'] }
    ],
    uaeIntegration: 'Engineered with clean separation of data layers for UAE regulatory and commercial privacy standards.'
  },
  {
    id: 'commerce-integrations',
    tag: 'LAYER 04',
    title: 'Commercial Workflows & Inquiries',
    category: 'E-Commerce & Communication Gateways',
    summary: 'Commercial lead funnels, localized AED pricing treatment, inquiry workflows, and messaging integrations designed for conversion.',
    telemetry: 'Native AED Rails • WhatsApp Hooks',
    icon: Workflow,
    accentColor: 'emerald',
    badge: 'Commercial Workflows',
    modules: [
      { name: 'UAE Currency & Pricing Engine', focus: 'Localized AED', tech: 'AED Pricing Architecture', description: 'Native UAE Dirham price displays, package tiers, and commercial checkout flows.', connectedSlugs: ['luxury-jewelry', 'abaya-fashion', 'car-rental'] },
      { name: 'Payment Gateway Integration Ready', focus: 'E-Commerce Rails', tech: 'Payment Gateway APIs', description: 'Modular architecture ready for secure online payment integration and merchant provider setup.', connectedSlugs: ['luxury-jewelry', 'holiday-home-management', 'cleaning-company'] },
      { name: 'WhatsApp & Lead Concierge Routing', focus: 'Direct Conversion', tech: 'WhatsApp Business Hooks', description: 'Instant routing from project inquiries directly into business consultation channels.', connectedSlugs: ['real-estate-lead-platform', 'corporate-law-firm', 'luxury-car-rental'] },
      { name: 'Interactive Inquiry Funnels', focus: 'Client Engagement', tech: 'Modal & Form Systems', description: 'Multi-step requirement gathering, project blueprint matching, and lead capture funnels.', connectedSlugs: ['accounting-tax-consultancy', 'business-center-serviced-offices', 'private-medical-clinic'] }
    ],
    uaeIntegration: 'Standardized around UAE commercial habits, direct WhatsApp inquiry culture, and regional currency standards.'
  }
];

const FLOW_NODES = [
  { id: 'experience-layer', label: 'UX & Design', icon: Layout, accent: 'amber' },
  { id: 'frontend-engineering', label: 'Next.js Frontend', icon: Code2, accent: 'emerald' },
  { id: 'enterprise-data', label: 'Data & APIs', icon: Database, accent: 'amber' },
  { id: 'commerce-integrations', label: 'Commercial AED', icon: Workflow, accent: 'emerald' },
];

// Architecture Layer Card with Real-time Cursor Spotlight (Identical to TechCard)
const ArchitectureCard: React.FC<{
  layer: SystemLayer;
  idx: number;
  isHighlighted: boolean;
  shouldReduceMotion: boolean | null;
  activeModuleName: string | null;
  onSelectModule: (mod: ArchitecturalModule, layer: SystemLayer) => void;
}> = ({ layer, idx, isHighlighted, shouldReduceMotion, activeModuleName, onSelectModule }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });
  const Icon = layer.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.015 }}
      className={`relative p-7 rounded-3xl transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden backdrop-blur-md cursor-default ${
        isHighlighted
          ? 'bg-[#18130E] border-2 border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.22),0_0_25px_rgba(245,158,11,0.12)] -translate-y-1'
          : 'bg-[#110E0C] border border-white/10 hover:border-amber-400/60 hover:shadow-[0_16px_40px_rgba(245,158,11,0.16)]'
      }`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered || isHighlighted ? 1 : 0.15,
            background: isHovered || isHighlighted
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.14), transparent 70%)`
              : `radial-gradient(180px circle at 50% 0%, rgba(245, 158, 11, 0.03), transparent 75%)`,
          }}
        />
      )}

      {/* Top Specular Accent Line */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
          isHighlighted
            ? 'opacity-100 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
            : isHovered
            ? 'opacity-100 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_10px_rgba(245,158,11,0.5)]'
            : 'opacity-0'
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500/20">
              <Icon className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block">
                {layer.category}
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                {layer.title}
              </h3>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded-xl bg-white/[0.04] text-gray-400 border border-white/10 font-bold hidden sm:inline-block">
            {layer.badge}
          </span>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed mb-5">
          {layer.summary}
        </p>

        {/* Modules Cloud with Interactive Inspection Trigger */}
        <div className="flex flex-wrap gap-2 mb-6">
          {layer.modules.map((mod) => {
            const isModActive = activeModuleName === mod.name;
            return (
              <button
                key={mod.name}
                type="button"
                onClick={() => onSelectModule(mod, layer)}
                className={`text-xs font-mono font-medium px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isModActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-white/[0.03] border border-white/[0.07] text-gray-300 hover:bg-amber-500/15 hover:border-amber-400/40 hover:text-amber-300 hover:scale-105'
                }`}
                title={`Inspect architectural module: ${mod.name}`}
              >
                <span>{mod.name}</span>
                {isModActive ? (
                  <CheckCircle2 className="w-3 h-3 text-slate-950" />
                ) : (
                  <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Telemetry Metric Footer */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>{layer.telemetry}</span>
        </div>
        <span className="text-gray-400 text-[10px] uppercase tracking-wider">SOVEREIGN STANDARD</span>
      </div>
    </motion.div>
  );
};

export const DigitalArchitectureMatrix: React.FC<DigitalArchitectureMatrixProps> = ({ onOpenOrderModal }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState<{ mod: ArchitecturalModule; layer: SystemLayer } | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Matched portfolio projects for the selected module
  const connectedProjects = useMemo(() => {
    if (!activeModule?.mod.connectedSlugs) return [];
    return SELECTED_WORK.filter((p) => activeModule.mod.connectedSlugs?.includes(p.slug || p.id));
  }, [activeModule]);

  return (
    <section id="architecture-matrix" className="py-28 bg-[#0B0907] relative z-10 overflow-hidden font-sans border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-emerald-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>DIGITAL ARCHITECTURE & ENGINEERING MATRIX</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              Anatomy of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Sovereign Platform</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              Click any architectural module below to instantly inspect its technical blueprint, implementation stack, and verified UAE production platforms.
            </p>
          </div>

          {activeModule && (
            <button
              type="button"
              onClick={() => setActiveModule(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors cursor-pointer self-start md:self-end"
            >
              <X className="w-4 h-4" />
              <span>Clear Filter ({activeModule.mod.name})</span>
            </button>
          )}
        </div>

        {/* Interactive Architecture Circuit Flow Strip (Identical to TechEcosystem Flow Strip) */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#120F0C] border border-white/10 max-w-5xl mx-auto hidden lg:flex items-center justify-between text-xs font-mono text-gray-300 relative shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Ambient Laser Sweep */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-50 pointer-events-none"
            />
          )}

          {FLOW_NODES.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;

            return (
              <React.Fragment key={node.id}>
                <button
                  type="button"
                  onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                  className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all cursor-pointer z-10 ${
                    isSelected
                      ? 'text-black font-extrabold shadow-md scale-105'
                      : node.accent === 'amber'
                      ? 'bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/20'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeArchitectureNodePill"
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-md shadow-amber-500/20 -z-10"
                    />
                  )}
                  <Icon className="w-4 h-4" />
                  <span>{node.label}</span>
                </button>

                {idx < FLOW_NODES.length - 1 && (
                  <div className="relative flex items-center">
                    <ArrowRight className="w-4 h-4 text-amber-500/40" />
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ x: [-4, 12], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut', delay: idx * 0.2 }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]"
                      />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 4-Layer Architecture Card Grid (2x2 Layout matching TechEcosystem) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {ARCHITECTURE_LAYERS.map((layer, idx) => (
            <ArchitectureCard
              key={layer.id}
              layer={layer}
              idx={idx}
              isHighlighted={selectedNode === layer.id || activeModule?.layer.id === layer.id}
              shouldReduceMotion={shouldReduceMotion}
              activeModuleName={activeModule?.mod.name || null}
              onSelectModule={(mod, l) => {
                if (activeModule?.mod.name === mod.name) {
                  setActiveModule(null);
                } else {
                  setActiveModule({ mod, layer: l });
                }
              }}
            />
          ))}
        </div>

        {/* Live Connected Architectural Showcase Drawer when a Module is Selected */}
        <AnimatePresence>
          {activeModule && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#120F0C] border border-amber-500/25 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl"
            >
              {/* Top ambient gold accent */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">
                      {activeModule.layer.tag} • {activeModule.mod.focus.toUpperCase()} SPECIFICATION
                    </span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{activeModule.mod.name}</span>
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenOrderModal(`Architecture Consultation: ${activeModule.layer.title} — ${activeModule.mod.name}`)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-mono font-bold hover:from-amber-400 hover:to-yellow-300 transition-colors cursor-pointer shadow-md shadow-amber-500/20"
                  >
                    Inquire Architecture
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModule(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close specification"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Module Description & Technical Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {activeModule.mod.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-gray-400 text-[10px] uppercase block">Implementation Core</span>
                      <span className="text-amber-300 font-bold">{activeModule.mod.tech}</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                      <span className="text-gray-400 text-[10px] uppercase block">Architectural Tier</span>
                      <span className="text-white font-bold">{activeModule.layer.category}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#14100D] border border-white/10 flex items-start gap-3 text-xs font-mono text-gray-300">
                    <span className="px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-300 font-bold text-[10px] uppercase shrink-0 border border-amber-500/20">
                      UAE LOCALIZATION
                    </span>
                    <p className="leading-relaxed text-gray-300">
                      {activeModule.layer.uaeIntegration}
                    </p>
                  </div>
                </div>

                {/* Connected UAE Platforms */}
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Verified Platforms Built with This Architecture:
                  </span>

                  <div className="space-y-2.5">
                    {connectedProjects.slice(0, 3).map((proj) => (
                      <Link
                        key={proj.id}
                        href={`/work/${proj.slug || proj.id}`}
                        className="p-3.5 rounded-2xl bg-black/40 border border-white/5 hover:border-amber-400/40 transition-all flex items-center justify-between group block"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-mono text-amber-400 font-bold">
                            #{String(proj.projectNumber || '01').padStart(2, '0')}
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                              {proj.title}
                            </h4>
                            <span className="text-[10px] text-gray-400 font-mono">
                              {proj.category}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default DigitalArchitectureMatrix;
