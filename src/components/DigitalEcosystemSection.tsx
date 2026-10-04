'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { 
  Compass, 
  Palette, 
  Code2, 
  Bot, 
  Database, 
  Cloud, 
  Workflow, 
  Layers, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  layer: string;
  layerIndex: string;
  icon: React.ElementType;
  technologies: string[];
  capabilities: string[];
  position: { x: number; y: number };
}

const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'strategy',
    index: '01',
    name: 'STRATEGY',
    tagline: 'Technical Architecture & Product Vision',
    description: 'Translating business objectives into resilient technical architecture, system blueprints, and high-conversion user journey models.',
    layer: 'STRATEGY & DISCOVERY',
    layerIndex: 'LAYER 01',
    icon: Compass,
    technologies: ['Technical Feasibility', 'System Architecture', 'Market Opportunity', 'User Flow Maps'],
    capabilities: ['Architecture Blueprints', 'Tech Stack Selection', 'ROI Modeling', 'Roadmap Planning'],
    position: { x: 20, y: 15 }
  },
  {
    id: 'design',
    index: '02',
    name: 'DESIGN',
    tagline: 'Design Systems & High-Fidelity UI/UX',
    description: 'Crafting luxury-grade digital interfaces, tokenized design systems in Figma, and micro-animated interactions that elevate brand equity.',
    layer: 'EXPERIENCE & INTERFACE',
    layerIndex: 'LAYER 02',
    icon: Palette,
    technologies: ['Figma Tokens', 'Tailwind CSS', 'Framer Motion', 'WCAG AA Accessibility'],
    capabilities: ['Interactive Prototypes', 'Component Design Systems', 'Editorial Typography', 'Micro-Interactions'],
    position: { x: 50, y: 10 }
  },
  {
    id: 'engineering',
    index: '03',
    name: 'ENGINEERING',
    tagline: 'Full-Stack Next.js & Turbopack Core',
    description: 'High-performance web applications built on Next.js 16, React 19, and TypeScript with sub-second SSR and static edge delivery.',
    layer: 'CORE ENGINEERING',
    layerIndex: 'LAYER 03',
    icon: Code2,
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Turbopack Engine'],
    capabilities: ['Sub-50ms SSR', 'Zero-Bloat Hydration', 'API Routes', 'Strict Type Safety'],
    position: { x: 80, y: 15 }
  },
  {
    id: 'ai-systems',
    index: '04',
    name: 'AI SYSTEMS',
    tagline: 'Autonomous Agents & Custom Neural Workflows',
    description: 'Deploying custom OpenAI and LLM agents with Retrieval-Augmented Generation (RAG) and intelligent telemetry parsing.',
    layer: 'COGNITIVE INTELLIGENCE',
    layerIndex: 'LAYER 04',
    icon: Bot,
    technologies: ['OpenAI API', 'RAG Pipelines', 'Vector Embeddings', 'Python SDK'],
    capabilities: ['Conversational Agents', 'Semantic Search', 'Automated Intent Classification', 'Tool Calling'],
    position: { x: 85, y: 55 }
  },
  {
    id: 'data',
    index: '05',
    name: 'DATA',
    tagline: 'Resilient Relational Storage & Telemetry',
    description: 'PostgreSQL relational schemas, high-speed Redis caching layers, and real-time business intelligence telemetry pipelines.',
    layer: 'DATA & TELEMETRY',
    layerIndex: 'LAYER 05',
    icon: Database,
    technologies: ['PostgreSQL', 'Redis Cache', 'Prisma ORM', 'Real-Time Telemetry'],
    capabilities: ['Schema Optimization', 'Session Caching', 'Event Ingestion', 'Audit Trails'],
    position: { x: 75, y: 85 }
  },
  {
    id: 'cloud',
    index: '06',
    name: 'CLOUD',
    tagline: 'Global CDN & Sovereign UAE Hosting',
    description: 'Vercel global edge network, AWS infrastructure, and sovereign UAE cloud deployments with automated SSL and DDoS shielding.',
    layer: 'INFRASTRUCTURE & HOSTING',
    layerIndex: 'LAYER 06',
    icon: Cloud,
    technologies: ['Vercel Edge', 'AWS Cloud', 'Global CDN', 'DDoS Protection'],
    capabilities: ['Sub-Second Global TTFB', 'Automated CI/CD', 'Zero-Downtime Rollouts', 'Edge SSL'],
    position: { x: 45, y: 90 }
  },
  {
    id: 'automation',
    index: '07',
    name: 'AUTOMATION',
    tagline: 'B2B Integrations & Payment Gateways',
    description: 'Seamless integration with Stripe payments, UAE Central Bank licensed gateways, WhatsApp notifications, and webhook orchestration.',
    layer: 'OPERATIONS & INTEGRATION',
    layerIndex: 'LAYER 07',
    icon: Workflow,
    technologies: ['Stripe Payments', 'AED Currency Engine', 'WhatsApp Webhooks', 'REST / GraphQL'],
    capabilities: ['Payment Workflows', 'Automated Billing', 'CRM Sync', 'Instant Dispatch Alerts'],
    position: { x: 15, y: 80 }
  },
  {
    id: 'digital-products',
    index: '08',
    name: 'DIGITAL PRODUCTS',
    tagline: 'SaaS Platforms & Commercial E-Commerce',
    description: 'Engineering revenue-generating digital products, headless e-commerce storefronts, and bespoke enterprise operating portals.',
    layer: 'COMMERCIAL PRODUCTS',
    layerIndex: 'LAYER 08',
    icon: Layers,
    technologies: ['Headless E-Commerce', 'B2B SaaS Portals', 'Booking Engines', 'Client Dashboards'],
    capabilities: ['Multi-Tenant Architecture', 'Interactive Calculators', 'Cart Drawers', 'Product Catalogs'],
    position: { x: 10, y: 45 }
  },
];

export const DigitalEcosystemSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('ai-systems');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const shouldReduceMotion = useReducedMotion();

  // ─── Editorial Scroll Motion Hook ──────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const xStream1 = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const xStream2 = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  const activeNode = ECOSYSTEM_NODES.find(n => n.id === selectedId) || ECOSYSTEM_NODES[3];
  const ActiveIcon = activeNode.icon;

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative bg-[#070609] py-20 lg:py-28 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.04] blur-[160px] rounded-full" />
      </div>

      {/* ── Sleek Monochrome Tech Architecture Marquee (Exact Minimalist Logo Stream) ─────────── */}
      <div className="w-full overflow-hidden select-none pointer-events-none mb-10 py-4 border-y border-white/[0.06] relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          animate={shouldReduceMotion ? { x: 0 } : { x: ['-50%', '0%'] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { repeat: Infinity, ease: 'linear', duration: 32 }
          }
          className="whitespace-nowrap flex items-center gap-12 sm:gap-16 w-max"
        >
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex items-center gap-12 sm:gap-16 shrink-0">
              
              {/* RAYCAST */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm12.5 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">RAYCAST</span>
              </div>

              {/* FRAMER */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">FRAMER</span>
              </div>

              {/* VERCEL */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M12 1L24 22H0L12 1Z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">VERCEL</span>
              </div>

              {/* STRIPE */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">STRIPE</span>
              </div>

              {/* LINEAR */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zm8.5-7a7 7 0 00-6.16 3.68l9.84 9.84A7 7 0 0012 5zm-7 7a7 7 0 0010.48 6.16L5.64 8.32A6.97 6.97 0 005 12z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">LINEAR</span>
              </div>

              {/* NEXT.JS */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.568l-6.195-7.98v7.98H10.1V6.432h1.599l6.195 7.98V6.432h1.599v11.136h-1.599z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">NEXT.JS</span>
              </div>

              {/* OPENAI */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.98 4.181a5.984 5.984 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.771-4.204 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.746-7.075z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">OPENAI</span>
              </div>

              {/* SUPABASE */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M21.362 9.354H12V.3a.3.3 0 00-.516-.207L.6 12.354a.3.3 0 00.216.507H12v9.054a.3.3 0 00.516.207l10.884-12.261a.3.3 0 00-.216-.507z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">SUPABASE</span>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-500/25 backdrop-blur-md"
            >
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-amber-300 uppercase">
                SYSTEM ARCHITECTURE · CONNECTED CAPABILITIES
              </span>
            </motion.div>
          </div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4"
          >
            One Engineering Studio.{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              A Complete Digital Ecosystem.
            </span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal"
          >
            We engineer end-to-end digital infrastructure where strategy, bespoke interface design, full-stack Next.js code, autonomous AI, and sovereign cloud converge into unified revenue engines.
          </motion.p>
        </div>

        {/* Ecosystem Interactive Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── LEFT/CENTER: Interactive Node Matrix (8 Cols on Desktop) ────────── */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Desktop / Tablet: Architectural Interactive Grid */}
            <div className="relative rounded-3xl bg-[#0E0C11]/90 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden">
              
              {/* Top Panel Status Bar with Motion #22 Testing Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-gray-300 tracking-wider uppercase">
                    ECOSYSTEM NODE MATRIX
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>8 NODES ACTIVE • FULL CONVERGENCE</span>
                </div>
              </div>

              {/* Central WebStudio AE Hub Anchor */}
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white/[0.03] to-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-extrabold flex items-center justify-center font-mono shadow-md shadow-amber-500/20 text-sm">
                    WS
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-white font-mono tracking-wider">
                      WEBSTUDIO AE
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Digital Engineering Studio · Dubai &amp; Abu Dhabi
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-300 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                  STUDIO CORE
                </span>
              </div>

              {/* 8-Node Interactive Bento Grid with Staggered Kinetic Blur & Specular Depth */}
              <motion.div 
                initial={shouldReduceMotion ? {} : 'hidden'}
                whileInView={shouldReduceMotion ? {} : 'visible'}
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  hidden: {}
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
              >
                {ECOSYSTEM_NODES.map((node) => {
                  const Icon = node.icon;
                  const isSelected = node.id === selectedId;

                  return (
                    <motion.button
                      key={node.id}
                      type="button"
                      variants={{
                        hidden: { opacity: 0, y: 16, scale: 0.96, filter: 'blur(4px)' },
                        visible: { 
                          opacity: 1, 
                          y: 0, 
                          scale: 1, 
                          filter: 'blur(0px)',
                          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
                        }
                      }}
                      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      onClick={() => setSelectedId(node.id)}
                      onMouseEnter={() => setSelectedId(node.id)}
                      className={`group relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[140px] sm:min-h-[155px] z-10 overflow-hidden ${
                        isSelected
                          ? 'bg-[#181410] border-amber-400/90 shadow-[0_16px_36px_rgba(245,158,11,0.25),0_0_25px_rgba(245,158,11,0.15)]'
                          : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-amber-500/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.7)]'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="ecosystemActiveNodeHighlight"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                          className="absolute inset-0 rounded-2xl bg-amber-500/[0.12] border border-amber-500/50 -z-10"
                        />
                      )}

                      {/* Top Specular Accent Line on Hover / Active */}
                      <div className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
                        isSelected 
                          ? 'opacity-100 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.7)]' 
                          : 'opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent via-amber-400 to-transparent'
                      }`} />

                      {/* Top micro-bar: Index + Status Dot + Frosted Icon */}
                      <div className="flex items-center justify-between w-full mb-2.5 relative z-10">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isSelected ? 'bg-amber-400 scale-125 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse' : 'bg-white/20 group-hover:bg-amber-400/80'
                          }`} />
                          <span className="text-[10px] font-mono font-bold text-neutral-400 group-hover:text-amber-300">
                            {node.index}
                          </span>
                        </div>
                        <div className={`p-2 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                          isSelected ? 'bg-amber-500/20 text-amber-300 shadow-md shadow-amber-500/30' : 'bg-white/[0.04] text-neutral-400 group-hover:text-white group-hover:bg-white/10'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Node Name & Layer Title */}
                      <div className="relative z-10 mb-2">
                        <h4 className={`text-sm font-black tracking-tight mb-0.5 transition-colors font-mono ${
                          isSelected ? 'text-amber-300' : 'text-white group-hover:text-amber-200'
                        }`}>
                          {node.name}
                        </h4>
                        <p className="text-[11px] text-neutral-400 line-clamp-1 font-sans font-medium">
                          {node.tagline.split('&')[0].trim()}
                        </p>
                      </div>

                      {/* Bottom Key Tech Badges */}
                      <div className="relative z-10 pt-2 border-t border-white/[0.06] flex items-center justify-between gap-1 text-[10px] font-mono">
                        <span className="text-neutral-400 truncate max-w-[95px]">
                          {node.technologies[0]}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition-colors ${
                          isSelected ? 'bg-amber-400 text-black' : 'bg-white/5 text-neutral-400 group-hover:text-neutral-200'
                        }`}>
                          {isSelected ? 'ACTIVE' : 'INSPECT'}
                        </span>
                      </div>

                      {/* Active indicator bar */}
                      {isSelected && (
                        <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Bottom Instruction Hint */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>Select any node to inspect system architecture</span>
                </span>
                <span className="text-gray-400 hidden sm:inline">
                  Interactive Telemetry
                </span>
              </div>

            </div>
          </div>

          {/* ── RIGHT: System Architecture Inspector Panel (5 Cols on Desktop) ── */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl bg-[#0F0D12]/95 border border-amber-500/25 p-6 sm:p-7 backdrop-blur-2xl shadow-2xl shadow-black/90 overflow-hidden">
              
              {/* Top ambient gold accent & Motion #22 Laser Trace */}
              {!shouldReduceMotion && (
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                  className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 pointer-events-none z-20"
                />
              )}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

              {/* Inspector Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-200 tracking-wider uppercase">
                    NODE INSPECTOR
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 uppercase">
                  {activeNode.layer}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Title & Tagline */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
                        <ActiveIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-amber-400 font-bold tracking-wider uppercase">
                          CAPABILITY: {activeNode.layer}
                        </div>
                        <h3 className="text-xl font-extrabold text-white tracking-tight">
                          {activeNode.name}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-xs font-semibold text-gray-300 mb-2">
                      {activeNode.tagline}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {activeNode.description}
                    </p>
                  </div>

                  {/* System Capabilities Matrix */}
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>ENGINEERED DELIVERABLES</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeNode.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-medium text-gray-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Technologies */}
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-wider mb-2.5">
                      TECH STACK &amp; PROTOCOLS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeNode.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Verification Guarantee */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-gray-400">LAYER STATUS</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">100% PRODUCTION READY</span>
                    </div>
                    <a
                      href="#work"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors group"
                    >
                      <span>View Live Builds</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

      {/* ── Sleek Monochrome Tech Architecture Marquee (Bottom Counter-Stream) ── */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-14 py-4 border-y border-white/[0.06] relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          animate={shouldReduceMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { repeat: Infinity, ease: 'linear', duration: 36 }
          }
          className="whitespace-nowrap flex items-center gap-12 sm:gap-16 w-max"
        >
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex items-center gap-12 sm:gap-16 shrink-0">
              
              {/* TYPESCRIPT */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM12 18.062c0 .668-.456 1.096-1.144 1.096-.688 0-1.144-.428-1.144-1.096V10.2h2.288v7.862zm7.625-.794c0 1.166-.888 1.954-2.188 1.954-1.22 0-2.094-.74-2.094-1.848 0-.97.688-1.558 1.77-1.78l.582-.12c.57-.12.822-.32.822-.64 0-.41-.36-.67-.93-.67-.58 0-.96.28-1.04.75h-1.63c.1-.1.17-.2.24-.31.33-.51.87-.82 1.6-.82 1.25 0 2.07.69 2.07 1.74v.11c0 .85-.56 1.39-1.58 1.63l-.68.16c-.52.12-.76.3-.76.6 0 .41.35.67.93.67.62 0 1.05-.33 1.11-.86h1.66z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">TYPESCRIPT</span>
              </div>

              {/* POSTGRESQL */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-1.8-.32-3.13-1.65-3.45-3.45H9c.3 1.15 1.15 2 2 2.3v-4.6c-1.72-.45-3-2-3-3.88 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.88-1.28 3.43-3 3.88v4.6c.85-.3 1.7-1.15 2-2.3h1.45c-.32 1.8-1.65 3.13-3.45 3.45z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">POSTGRESQL</span>
              </div>

              {/* AWS */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">AWS EDGE</span>
              </div>

              {/* TAILWIND CSS */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">TAILWIND</span>
              </div>

              {/* REDIS */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <path d="M12 2l9 4.9v10.2L12 22l-9-4.9V6.9L12 2zm0 2.2L5 8.1v7.8l7 3.9 7-3.9V8.1L12 4.2z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">REDIS</span>
              </div>

              {/* REACT 19 */}
              <div className="flex items-center gap-2.5 text-gray-400/80 hover:text-white transition-colors">
                <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L3.5 19.5l1.89-1.47C6.93 19.26 8.88 20 11 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.2em] uppercase">REACT 19</span>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
