'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Code2, 
  Bot, 
  ShoppingBag, 
  Layers, 
  Palette, 
  TrendingUp,
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  X, 
  Cpu, 
  Clock, 
  ShieldCheck,
  Terminal,
  Activity,
  Globe2,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { SELECTED_WORK, ProjectItem } from '@/data/siteData';

interface ServicesSectionProps {
  onOpenOrderModal: (serviceId?: string) => void;
}

interface CapabilityItem {
  id: string;
  category: string;
  tag: string;
  tierTag: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
  telemetry: string;
  skills: string[];
  deliverables: string[];
  startingQuote: string;
  deliveryTimeline: string;
  uaeLocalization: string;
  connectedSlugs: string[];
}

const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'web-platforms',
    category: 'Modern Web & Frontend',
    tag: '01',
    tierTag: 'TIER 01',
    title: 'Digital Products & Web Platforms',
    shortDesc: 'Bespoke web platforms and enterprise digital products engineered on Next.js 16 and TypeScript for sub-second speed and conversion.',
    fullDesc: 'End-to-end bespoke web architectures engineered for UAE market leaders with sub-second page loads, zero hydration errors, and custom design systems.',
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    telemetry: 'Sub-50ms TTFB • 0.00 CLS',
    skills: ['Next.js 16 App Router', 'TypeScript 5', 'Tailwind CSS', 'Edge SSR & ISR', '98+ Lighthouse', 'Framer Motion'],
    deliverables: ['Custom Next.js 16 App Router', 'Sub-second Edge SSR & ISR', '98+ Lighthouse Benchmark', 'Bespoke Content Management'],
    startingQuote: 'Starting from AED 799',
    deliveryTimeline: '10 – 14 Business Days',
    uaeLocalization: 'Optimized for UAE corporate entities, DIFC fintechs, and high-converting Dubai/Abu Dhabi commercial portals.',
    connectedSlugs: ['real-estate-lead-platform', 'corporate-law-firm', 'stayora', 'luxury-jewelry']
  },
  {
    id: 'ai-engines',
    category: 'AI & Intelligent Automation',
    tag: '02',
    tierTag: 'TIER 02',
    title: 'Autonomous AI & RAG Engines',
    shortDesc: 'Custom OpenAI RAG search pipelines, autonomous multi-lingual LLM agents, and intelligent enterprise workflow automation.',
    fullDesc: 'Intelligent automation systems and custom-trained RAG models that interface directly with your company data, CRM, and customer operations.',
    icon: <Bot className="w-5 h-5 text-amber-400" />,
    telemetry: 'RAG Vector Search < 120ms',
    skills: ['OpenAI GPT-4o', 'LangChain', 'RAG Architecture', 'Vector DB Embeddings', 'Autonomous Agents', 'FastAPI / Python'],
    deliverables: ['Custom OpenAI RAG Pipelines', '24/7 Multi-Language Agents', 'CRM & ERP Automation Hooks', 'Automated Lead Qualification'],
    startingQuote: 'Custom Enterprise Tier',
    deliveryTimeline: '2 – 3 Weeks',
    uaeLocalization: 'Multi-lingual Arabic & English RAG models trained on UAE commercial frameworks, tariffs, and regulatory policies.',
    connectedSlugs: ['artificial-intelligence', 'coding-tech-academy', 'fintech-payments']
  },
  {
    id: 'commerce',
    category: 'E-Commerce & Headless Storefronts',
    tag: '03',
    tierTag: 'TIER 03',
    title: 'High-Volume Headless Commerce',
    shortDesc: 'Ultra-fast headless online stores powered by Shopify Plus, GraphQL Storefront API, and native AED multi-currency checkout.',
    fullDesc: 'High-volume luxury e-commerce platforms engineered with headless frontend architectures, sub-second checkout, and localized UAE payment gateways.',
    icon: <ShoppingBag className="w-5 h-5 text-amber-400" />,
    telemetry: 'GraphQL Headless • AED Rails',
    skills: ['Shopify Plus', 'GraphQL Storefront', 'Stripe AED Checkout', 'Apple Pay Native', 'Sub-second Checkout', 'Inventory Sync'],
    deliverables: ['Shopify Plus GraphQL Headless', 'Stripe & Apple Pay Native AED', 'Sub-second Mobile Checkout', 'Inventory & ERP Integration'],
    startingQuote: 'Starting from AED 2,499',
    deliveryTimeline: '2 – 4 Weeks',
    uaeLocalization: 'Integrated with UAE payment rails (Stripe AED, Apple Pay, Tabby, Tamara) and GCC-wide delivery logistics.',
    connectedSlugs: ['luxury-jewelry', 'abaya-fashion', 'perfume-fragrance', 'luxury-furniture']
  },
  {
    id: 'saas-cloud',
    category: 'SaaS & Multi-Tenant Architecture',
    tag: '04',
    tierTag: 'TIER 04',
    title: 'SaaS & Multi-Tenant Platforms',
    shortDesc: 'Multi-tenant cloud applications, role-based dashboards, and scalable database backends built for high concurrency.',
    fullDesc: 'Resilient web application engineering from prototype validation to scalable multi-tenant architectures built on PostgreSQL and AWS.',
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    telemetry: 'Multi-AZ Cloud • ACID Schema',
    skills: ['PostgreSQL', 'Supabase / Prisma', 'AWS Lambda', 'RBAC Security', 'Real-Time Telemetry', 'Docker CI/CD'],
    deliverables: ['Multi-Tenant Isolation Architecture', 'Role-Based Access Control (RBAC)', 'Real-Time Telemetry & Dashboards', 'Serverless AWS / Edge Compute'],
    startingQuote: 'Custom Enterprise Tier',
    deliveryTimeline: '3 – 6 Weeks',
    uaeLocalization: 'UAE data-residency compliance and low-latency cloud hosting across regional AWS Middle East nodes.',
    connectedSlugs: ['business-center-serviced-offices', 'holiday-home-management', 'car-rental']
  },
  {
    id: 'brand-ux',
    category: 'Design Systems & GCC Ergonomics',
    tag: '05',
    tierTag: 'TIER 05',
    title: 'UX/UI & Luxury Brand Design',
    shortDesc: 'Human-centered digital design systems, Figma token libraries, and luxury conversion UX crafted with GCC precision.',
    fullDesc: 'Bespoke design systems, micro-interactions, editorial typography, and interactive prototypes engineered to establish brand authority.',
    icon: <Palette className="w-5 h-5 text-amber-400" />,
    telemetry: 'Zero Templates • AA Contrast',
    skills: ['Figma Design Tokens', 'Framer Motion Prototypes', 'Arabic RTL Typography', 'WCAG AA Standards', 'Luxury Brand Guidelines', 'Mobile Ergonomics'],
    deliverables: ['Figma Design Tokens & Atoms', 'Interactive Motion Prototypes', 'Accessibility (WCAG AA) Standards', 'Luxury Brand Styling Guidelines'],
    startingQuote: 'Starting from AED 599',
    deliveryTimeline: '7 – 10 Business Days',
    uaeLocalization: 'Bespoke bilingual luxury styling with Arabic RTL typography tailored for premium Middle East clientele.',
    connectedSlugs: ['restaurant-cafe', 'digital-marketing-agency', 'stayora']
  },
  {
    id: 'growth-seo',
    category: 'Growth Engineering & Technical SEO',
    tag: '06',
    tierTag: 'TIER 06',
    title: 'Growth Engineering & Technical SEO',
    shortDesc: 'Technical SEO architectures, structured JSON-LD data, performance funnels, and executive revenue dashboards.',
    fullDesc: 'Data-driven growth engineering combining technical search engine optimization, semantic schemas, and conversion rate optimization (CRO).',
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    telemetry: '100% Schema • GA4 Funnels',
    skills: ['JSON-LD Schema', 'Core Web Vitals Tuning', 'Google Analytics 4', 'Conversion Rate CRO', 'PostHog Telemetry', 'Search Console Indexing'],
    deliverables: ['Semantic JSON-LD Structured Data', 'Core Web Vitals Optimization', 'Conversion Rate Funnel Tuning', 'Executive Analytics Dashboards'],
    startingQuote: 'Starting from AED 899',
    deliveryTimeline: 'Ongoing / Sprints',
    uaeLocalization: 'High-intent search rankings across Dubai, Abu Dhabi, and GCC regional queries.',
    connectedSlugs: ['accounting-tax-consultancy', 'corporate-law-firm', 'real-estate-lead-platform']
  }
];

const FLOW_NODES = [
  { id: 'web-platforms', label: 'Web Platforms', icon: Code2, accent: 'amber' },
  { id: 'ai-engines', label: 'AI Engines', icon: Bot, accent: 'emerald' },
  { id: 'commerce', label: 'Commerce', icon: ShoppingBag, accent: 'amber' },
  { id: 'saas-cloud', label: 'SaaS Cloud', icon: Layers, accent: 'emerald' },
  { id: 'brand-ux', label: 'Brand & UX', icon: Palette, accent: 'amber' },
  { id: 'growth-seo', label: 'Growth SEO', icon: TrendingUp, accent: 'emerald' },
];

// Interactive Capability Card Component with 3D Perspective & Depth
const CapabilityCard: React.FC<{
  cap: CapabilityItem;
  idx: number;
  isHighlighted: boolean;
  activeSkill: string | null;
  onSelectCap: (cap: CapabilityItem) => void;
  onSelectSkill: (skill: string, cap: CapabilityItem) => void;
  shouldReduceMotion: boolean | null;
}> = ({ cap, idx, isHighlighted, activeSkill, onSelectCap, onSelectSkill, shouldReduceMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Restrained max 4-degree 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setCardTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCardTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
        whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.015 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: shouldReduceMotion
            ? 'none'
            : `rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg) translateZ(${isHighlighted ? 16 : isHovered ? 8 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
        onClick={() => onSelectCap(cap)}
        data-cursor-text="INSPECT"
        className={`relative p-7 rounded-3xl transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden backdrop-blur-md cursor-pointer h-full ${
          isHighlighted
            ? 'bg-[#18130E] border-2 border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.22),0_0_25px_rgba(245,158,11,0.12)] -translate-y-1'
            : 'bg-[#13100D] border border-amber-500/15 hover:border-amber-400/60 hover:shadow-[0_16px_40px_rgba(245,158,11,0.18)]'
        }`}
      >
        {/* Dynamic Cursor Spotlight Radial Glow */}
        {!shouldReduceMotion && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
            style={{
              opacity: isHovered || isHighlighted ? 1 : 0.15,
              background: isHovered || isHighlighted
                ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.16), transparent 70%)`
                : `radial-gradient(180px circle at 50% 0%, rgba(245, 158, 11, 0.04), transparent 75%)`,
            }}
          />
        )}

        {/* Top Accent Line */}
        <div
          className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
            isHighlighted
              ? 'opacity-100 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
              : isHovered
              ? 'opacity-100 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent'
              : 'opacity-0'
          }`}
        />

        {/* Header Info */}
        <div className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                {cap.icon}
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                {cap.category}
              </h3>
            </div>
          </div>

          {/* Skills / Modules Cloud */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cap.skills.map((skill) => {
              const isSkillActive = activeSkill === skill && isHighlighted;
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSkill(skill, cap);
                  }}
                  data-cursor-text="INSPECT"
                  className={`text-xs font-mono font-medium px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isSkillActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105'
                      : 'bg-white/[0.03] border border-white/[0.07] text-gray-300 hover:bg-amber-500/15 hover:border-amber-400/40 hover:text-amber-300 hover:scale-105'
                  }`}
                >
                  <span>{skill}</span>
                  {isSkillActive ? (
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
        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono" style={{ transform: 'translateZ(8px)' }}>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>{cap.telemetry}</span>
          </div>
          <span className="text-amber-400/80 text-[10px] uppercase tracking-wider flex items-center gap-1 font-bold group-hover:text-amber-300">
            <span>{isHighlighted ? 'Scope Active' : 'Inspect Scope'}</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenOrderModal }) => {
  const [selectedCap, setSelectedCap] = useState<CapabilityItem | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleSelectCap = (cap: CapabilityItem) => {
    if (selectedCap?.id === cap.id && !activeSkill) {
      setSelectedCap(null);
    } else {
      setSelectedCap(cap);
      setActiveSkill(null);
    }
  };

  const handleSelectSkill = (skill: string, cap: CapabilityItem) => {
    setSelectedCap(cap);
    setActiveSkill(skill);
  };

  // Connected Projects from siteData
  const connectedProjects: ProjectItem[] = useMemo(() => {
    if (!selectedCap?.connectedSlugs) return [];
    return SELECTED_WORK.filter((p) => p.slug && selectedCap.connectedSlugs.includes(p.slug)).slice(0, 3);
  }, [selectedCap]);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B0907] relative overflow-hidden font-sans border-t border-white/5">
      {/* Ambient Radial Glows matching TechEcosystem */}
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.08, 1],
          opacity: [0.03, 0.07, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500 blur-[180px] pointer-events-none rounded-full" 
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.12, 1],
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-emerald-500 blur-[180px] pointer-events-none rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5"
            >
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>CORE CAPABILITIES</span>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              What We <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Build.</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              Six core engineering capabilities designed for ambitious UAE enterprises, SaaS platforms, and high-growth commercial operations.
            </p>
          </div>

          {/* System Scope Badge */}
          <div className="flex items-center gap-4 self-start md:self-end shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-[#14100C] border border-amber-500/25 text-right relative overflow-hidden shadow-xl">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">SYSTEM SCOPE</span>
              <span className="text-xs font-bold font-mono text-amber-400 flex items-center gap-1.5 justify-end mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                6-Tier Assembly
              </span>
            </div>
          </div>
        </div>

        {/* 1. Connected Orbital Radial Node Hub (Design #10) */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#120F0C]/95 border border-amber-500/25 max-w-5xl mx-auto flex items-center justify-between text-xs font-mono text-gray-300 relative shadow-2xl backdrop-blur-xl overflow-x-auto scrollbar-none">
          {!shouldReduceMotion && (
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 pointer-events-none"
            />
          )}

          <div className="flex items-center justify-between w-full min-w-[620px] gap-2 relative z-10">
            {FLOW_NODES.map((node, idx) => {
              const isSelected = selectedCap?.id === node.id;
              const NodeIcon = node.icon;

              return (
                <React.Fragment key={node.id}>
                  <button
                    type="button"
                    onClick={() => {
                      const matched = CORE_CAPABILITIES.find((c) => c.id === node.id);
                      if (matched) handleSelectCap(matched);
                    }}
                    className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                      isSelected
                        ? 'text-black font-extrabold shadow-md scale-105'
                        : 'bg-white/[0.03] text-gray-300 hover:bg-white/[0.06] border border-white/10 hover:border-amber-500/30'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCapabilityFlowPill"
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-md shadow-amber-500/30 -z-10"
                      />
                    )}
                    <NodeIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                    <span className="tracking-wider uppercase text-[11px]">{node.label}</span>
                  </button>

                  {idx < FLOW_NODES.length - 1 && (
                    <div className="relative flex items-center justify-center flex-1 px-1">
                      {/* Dotted Electrical Connector Line */}
                      <div className="w-full h-px border-t border-dashed border-amber-500/30 relative" />
                      {!shouldReduceMotion && (
                        <motion.div
                          animate={{ x: [-15, 15], opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut', delay: idx * 0.25 }}
                          className="absolute w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                        />
                      )}
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500/60 shrink-0 ml-1" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive 6-Card Grid (3x2 on Large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap, idx) => (
            <CapabilityCard
              key={cap.id}
              cap={cap}
              idx={idx}
              isHighlighted={selectedCap?.id === cap.id}
              activeSkill={activeSkill}
              onSelectCap={handleSelectCap}
              onSelectSkill={handleSelectSkill}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* 3. Live Connected Specification & 3D Layered Blueprint Drawer */}
        <AnimatePresence mode="wait">
          {selectedCap && (
            <div style={{ perspective: 1200 }}>
              <motion.div
                key={selectedCap.id}
                initial={{ opacity: 0, y: 25, rotateX: 6 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="p-6 sm:p-9 rounded-3xl bg-[#120F0C] border border-amber-500/30 relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.08)] space-y-8"
              >
                {/* 3D Blueprint Depth Ambient Beam */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.8)]" />

                {/* Drawer Top Row: Capability Header, 3D Blueprint Tag & Close */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5" style={{ transform: 'translateZ(15px)' }}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-mono font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                        {selectedCap.tierTag}
                      </span>
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        {selectedCap.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                        3D BLUEPRINT ACTIVE
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {selectedCap.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="text-xs font-mono text-emerald-400 font-bold px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-sm">
                      {selectedCap.startingQuote}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCap(null);
                        setActiveSkill(null);
                      }}
                      aria-label="Close drawer"
                      data-cursor-text="CLOSE"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Drawer Middle Row: Technical Description + Layered 3D Deliverables */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" style={{ transform: 'translateZ(20px)' }}>
                  <div className="lg:col-span-7 space-y-5">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {selectedCap.fullDesc}
                    </p>

                    <div className="p-4 rounded-2xl bg-[#14100D] border border-amber-500/20 shadow-inner flex items-start gap-3 text-xs font-mono text-gray-300">
                      <span className="px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-300 font-bold text-[10px] uppercase shrink-0 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                        UAE LOCALIZATION
                      </span>
                      <p className="leading-relaxed text-gray-300">
                        {selectedCap.uaeLocalization}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Layered Scope Deliverables</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedCap.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 text-xs text-gray-200 transition-all hover:translate-x-1 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Specs Column + CTA */}
                  <div className="lg:col-span-5 space-y-5" style={{ transform: 'translateZ(25px)' }}>
                    <div className="p-5 rounded-2xl bg-[#14100D] border border-amber-500/20 shadow-lg space-y-3 text-xs font-mono">
                      <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                        <span className="text-gray-400">Implementation Core:</span>
                        <span className="text-amber-300 font-bold">{selectedCap.skills[0]}</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                        <span className="text-gray-400">Turnaround Timeline:</span>
                        <span className="text-white font-bold">{selectedCap.deliveryTimeline}</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                        <span className="text-gray-400">Architecture Standard:</span>
                        <span className="text-white font-semibold">Strict TypeScript + Verified SLA</span>
                      </div>
                      <div className="flex justify-between items-center py-1.5">
                        <span className="text-gray-400">Supported Rails:</span>
                        <span className="text-amber-400 font-bold">AED / Stripe / GCC Fast CDN</span>
                      </div>
                    </div>

                    {/* Interactive Architecture Stack Layer Visualizer */}
                    <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/20 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                          <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                          ARCHITECTURAL FLOW
                        </span>
                        <span className="text-emerald-400 text-[10px]">60 FPS · SYNCHRONIZED</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] font-mono">
                        <div className="p-2 rounded-xl bg-white/[0.03] border border-amber-500/20 flex items-center justify-between">
                          <span className="text-gray-300">01. Client Edge SSR</span>
                          <span className="text-amber-400 font-bold">&lt; 50ms TTFB</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.03] border border-amber-500/20 flex items-center justify-between">
                          <span className="text-gray-300">02. API &amp; Intelligence</span>
                          <span className="text-emerald-400 font-bold">OpenAI / RAG</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.03] border border-amber-500/20 flex items-center justify-between">
                          <span className="text-gray-300">03. Data Sovereignty</span>
                          <span className="text-amber-300 font-bold">UAE Local Node</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.015, y: -2 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      data-cursor-text="START"
                      onClick={() => onOpenOrderModal ? onOpenOrderModal(`Scope Consultation: ${selectedCap.title}`) : window.location.assign('/#contact')}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all cursor-pointer font-mono group"
                    >
                      <span>Build This Infrastructure</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

              {/* Connected UAE Production Platforms */}
              {connectedProjects.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono uppercase text-gray-300 tracking-wider font-bold">
                        Verified UAE Platforms Built on this Capability:
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400">
                      {connectedProjects.length} Active UAE Platforms
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {connectedProjects.map((proj) => (
                      <div
                        key={proj.slug}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-3 group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-mono text-amber-400 font-bold">
                              {proj.category}
                            </span>
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400">
                              {proj.meta?.market || 'UAE Market'}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                            {proj.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                          <Link
                            href={`/projects/${proj.slug}`}
                            className="text-xs font-mono text-amber-400 flex items-center gap-1 hover:underline"
                          >
                            <span>Inspect Project</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                          {proj.liveUrl && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white"
                              aria-label={`Visit live site for ${proj.title}`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* 4. 8-Grid Micro-Service Category Quick Tiles (Design #15) */}
        <div className="pt-6 border-t border-white/[0.06]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                SPECIALIZED ENGINEERING TIERS &amp; CAPABILITY ROUTING
              </span>
            </div>
            <span className="text-[10px] font-mono text-amber-400">8 SPECIALIZATIONS · CLICK TO FOCUS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Code2, title: 'Next.js 16 App Router', desc: 'Turbopack Edge SSR', tag: 'CORE', targetId: 'web-platforms' },
              { icon: Bot, title: 'Autonomous RAG Agents', desc: 'OpenAI Embeddings', tag: 'AI', targetId: 'ai-engines' },
              { icon: ShoppingBag, title: 'Headless Shopify POS', desc: 'AED Checkout Engine', tag: 'COMMERCE', targetId: 'commerce' },
              { icon: Palette, title: 'Bespoke Figma Tokens', desc: 'Zero Templates', tag: 'UI/UX', targetId: 'brand-ux' },
              { icon: ShieldCheck, title: 'DIFC & ADGM Compliance', desc: 'FinTech Security SLA', tag: 'TRUST', targetId: 'saas-cloud' },
              { icon: Activity, title: 'Sub-50ms Global Edge', desc: 'Anycast CDN & ISR', tag: 'SPEED', targetId: 'web-platforms' },
              { icon: Globe2, title: 'Arabic RTL & GCC UX', desc: 'Bilingual Platforms', tag: 'LOCAL', targetId: 'brand-ux' },
              { icon: Terminal, title: 'Algolia Search & AEO', desc: 'AI Engine Visibility', tag: 'SEARCH', targetId: 'growth-seo' },
            ].map((tile) => {
              const TileIcon = tile.icon;
              const isTileActive = selectedCap?.id === tile.targetId;
              return (
                <button
                  type="button"
                  key={tile.title}
                  onClick={() => {
                    const matched = CORE_CAPABILITIES.find((c) => c.id === tile.targetId);
                    if (matched) {
                      handleSelectCap(matched);
                    }
                  }}
                  className={`p-3.5 rounded-2xl transition-all duration-300 text-left group cursor-pointer shadow-sm ${
                    isTileActive
                      ? 'bg-amber-500/15 border-2 border-amber-400 shadow-[0_8px_25px_rgba(245,158,11,0.25)] -translate-y-1'
                      : 'bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/50 hover:bg-white/[0.05] hover:shadow-[0_8px_20px_rgba(245,158,11,0.15)] hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-1.5 rounded-lg transition-all ${
                      isTileActive
                        ? 'bg-amber-500 text-slate-950 font-bold scale-110 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                        : 'bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20'
                    }`}>
                      <TileIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isTileActive
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-white/[0.04] text-gray-400 group-hover:text-amber-300'
                    }`}>
                      {tile.tag}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {tile.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5 truncate font-mono">
                    {tile.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
