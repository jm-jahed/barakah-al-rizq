'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Server, 
  Database, 
  Cloud, 
  Layers, 
  ArrowRight, 
  Activity, 
  CheckCircle2,
  ExternalLink,
  X,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import { SELECTED_WORK, ProjectItem } from '@/data/siteData';
import { SectionHeader } from './ui/SectionHeader';
import { TechOrbit3D } from './TechOrbit3D';

interface TechCategory {
  id: string;
  category: string;
  telemetry: string;
  accent: 'amber' | 'emerald';
  icon: React.ReactNode;
  skills: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    category: 'Modern Web & Frontend',
    telemetry: 'Sub-50ms TTFB • 0.00 CLS',
    accent: 'amber',
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    skills: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML5 / CSS3'],
  },
  {
    id: 'backend',
    category: 'Backend, APIs & Node.js',
    telemetry: 'Zero-Downtime Microservices',
    accent: 'emerald',
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: ['Node.js', 'Express', 'FastAPI / Python', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Serverless'],
  },
  {
    id: 'ai',
    category: 'AI & Intelligent Automation',
    telemetry: 'RAG Vector Search < 120ms',
    accent: 'amber',
    icon: <Cpu className="w-5 h-5 text-amber-400" />,
    skills: ['OpenAI GPT-4o', 'LangChain', 'RAG Architecture', 'Vector Embeddings', 'Autonomous Agents', 'Llama 3'],
  },
  {
    id: 'cloud',
    category: 'Cloud & Infrastructure',
    telemetry: 'Multi-AZ UAE Edge Nodes',
    accent: 'emerald',
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    skills: ['Vercel Edge', 'AWS Lambda', 'Cloudflare CDN', 'Docker', 'CI/CD Pipelines', 'GitHub Actions'],
  },
  {
    id: 'database',
    category: 'Databases & Data Layer',
    telemetry: 'ACID Compliant • Auto-Scaling',
    accent: 'amber',
    icon: <Database className="w-5 h-5 text-amber-400" />,
    skills: ['PostgreSQL', 'Supabase', 'Redis Cache', 'Prisma ORM', 'Pinecone Vector DB', 'MongoDB'],
  },
  {
    id: 'commerce',
    category: 'E-Commerce & CMS Systems',
    telemetry: 'GraphQL Headless • AED Engine',
    accent: 'emerald',
    icon: <Layers className="w-5 h-5 text-emerald-400" />,
    skills: ['Shopify Plus', 'GraphQL Storefront', 'Stripe AED Checkout', 'Sanity CMS', 'Strapi', 'Custom CMS'],
  },
];

const FLOW_NODES = [
  { id: 'frontend', label: 'Frontend UI', icon: Code2, accent: 'amber' },
  { id: 'backend', label: 'Backend APIs', icon: Server, accent: 'emerald' },
  { id: 'ai', label: 'AI RAG Engine', icon: Cpu, accent: 'amber' },
  { id: 'cloud', label: 'Edge Cloud', icon: Cloud, accent: 'emerald' },
  { id: 'database', label: 'Data & Vectors', icon: Database, accent: 'amber' },
];

// Tech Stack Card with Real-time Cursor Spotlight
const TechCard: React.FC<{
  cat: TechCategory;
  idx: number;
  isHighlighted: boolean;
  shouldReduceMotion: boolean | null;
  activeTech: string | null;
  onSelectTech: (tech: string) => void;
}> = ({ cat, idx, isHighlighted, shouldReduceMotion, activeTech, onSelectTech }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.015 }}
      className={`relative p-7 rounded-3xl transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden backdrop-blur-md cursor-default ${
        isHighlighted
          ? 'bg-[#18130E] border-2 border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.22)] -translate-y-2'
          : 'bg-[#13100D] border border-amber-500/15 hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(245,158,11,0.15)]'
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

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
              {cat.icon}
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
              {cat.category}
            </h3>
          </div>
        </div>

        {/* Skills Cloud with Interactive Project Connection Trigger */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cat.skills.map((skill) => {
            const isSkillActive = activeTech === skill;
            return (
              <button
                key={skill}
                type="button"
                onClick={() => onSelectTech(skill)}
                className={`text-xs font-mono font-medium px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isSkillActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105'
                    : 'bg-white/[0.03] border border-white/[0.07] text-gray-300 hover:bg-amber-500/15 hover:border-amber-400/40 hover:text-amber-300 hover:scale-105'
                }`}
                title={`Explore platforms built with ${skill}`}
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
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>{cat.telemetry}</span>
        </div>
        <span className="text-gray-400 text-[10px] uppercase tracking-wider">VERIFIED STACK</span>
      </div>
    </motion.div>
  );
};

// Explicit verified portfolio mapping for technologies across WebStudio AE platforms
const SOVEREIGN_TECH_MAPPING: Record<string, string[]> = {
  // Frontend
  'Next.js 16': ['real-estate-lead-platform', 'corporate-law-firm', 'business-center-serviced-offices', 'holiday-home-management', 'luxury-jewelry', 'abaya-fashion'],
  'React 19': ['real-estate-lead-platform', 'corporate-law-firm', 'digital-marketing-agency', 'fintech-payments', 'luxury-jewelry', 'stayora'],
  'TypeScript 5': ['real-estate-lead-platform', 'coding-tech-academy', 'fintech-payments', 'artificial-intelligence', 'cloud-computing'],
  'Tailwind CSS': ['real-estate-lead-platform', 'corporate-law-firm', 'luxury-jewelry', 'holiday-home-management', 'car-rental'],
  'Framer Motion': ['real-estate-lead-platform', 'luxury-jewelry', 'abaya-fashion', 'perfume-fragrance', 'luxury-furniture'],
  'Vite': ['coding-tech-academy', 'gaming', 'consumer-electronics'],
  'HTML5 / CSS3': ['corporate-law-firm', 'business-center-serviced-offices', 'accounting-tax-consultancy'],

  // Backend
  'Node.js': ['fintech-payments', 'money-exchange-remittance', 'car-rental', 'flight-hotel-booking', 'logistics-delivery'],
  'Express': ['fintech-payments', 'car-rental', 'cleaning-company', 'auto-service-repair'],
  'FastAPI / Python': ['artificial-intelligence', 'medical-diagnostics', 'medicine-supply', 'water-supply'],
  'RESTful APIs': ['fintech-payments', 'money-exchange-remittance', 'flight-hotel-booking', 'logistics-delivery', 'car-rental'],
  'GraphQL': ['luxury-jewelry', 'abaya-fashion', 'perfume-fragrance', 'sneaker-streetwear'],
  'WebSockets': ['fintech-payments', 'money-exchange-remittance', 'gaming', 'artificial-intelligence'],
  'Serverless': ['cloud-computing', 'holiday-home-management', 'real-estate-lead-platform'],

  // AI & Intelligent Automation
  'OpenAI GPT-4o': ['artificial-intelligence', 'coding-tech-academy', 'digital-marketing-agency', 'private-medical-clinic'],
  'LangChain': ['artificial-intelligence', 'coding-tech-academy'],
  'RAG Architecture': ['artificial-intelligence', 'corporate-law-firm', 'private-medical-clinic'],
  'Vector Embeddings': ['artificial-intelligence', 'medical-diagnostics'],
  'Autonomous Agents': ['artificial-intelligence', 'cloud-computing'],
  'Llama 3': ['artificial-intelligence', 'coding-tech-academy'],

  // Cloud & Infrastructure
  'Vercel Edge': ['real-estate-lead-platform', 'luxury-jewelry', 'holiday-home-management', 'fintech-payments'],
  'AWS Lambda': ['cloud-computing', 'fintech-payments', 'cold-storage-warehousing'],
  'Cloudflare CDN': ['real-estate-lead-platform', 'corporate-law-firm', 'cloud-computing'],
  'Docker': ['cloud-computing', 'artificial-intelligence', 'fintech-payments'],
  'CI/CD Pipelines': ['cloud-computing', 'coding-tech-academy', 'fintech-payments'],
  'GitHub Actions': ['cloud-computing', 'coding-tech-academy'],

  // Databases & Data Layer
  'PostgreSQL': ['fintech-payments', 'real-estate-lead-platform', 'car-rental', 'money-exchange-remittance'],
  'Supabase': ['holiday-home-management', 'salon-beauty-studio', 'restaurant-cafe'],
  'Redis Cache': ['fintech-payments', 'flight-hotel-booking', 'car-rental'],
  'Prisma ORM': ['real-estate-lead-platform', 'holiday-home-management', 'fintech-payments'],
  'Pinecone Vector DB': ['artificial-intelligence', 'digital-marketing-agency'],
  'MongoDB': ['gaming', 'cold-storage-warehousing', 'pet-care-veterinary'],

  // E-Commerce & CMS Systems
  'Shopify Plus': ['luxury-jewelry', 'abaya-fashion', 'perfume-fragrance', 'sneaker-streetwear', 'luxury-furniture'],
  'GraphQL Storefront': ['luxury-jewelry', 'abaya-fashion', 'perfume-fragrance', 'sneaker-streetwear'],
  'Stripe AED Checkout': ['luxury-jewelry', 'abaya-fashion', 'car-rental', 'holiday-home-management', 'cleaning-company'],
  'Sanity CMS': ['corporate-law-firm', 'business-center-serviced-offices', 'private-school'],
  'Strapi': ['training-education-institute', 'photography-creative-studio'],
  'Custom CMS': ['real-estate-lead-platform', 'car-rental', 'bakery-cake-studio']
};

export const TechEcosystem: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Robust normalized technology matching engine
  const connectedProjects = React.useMemo(() => {
    if (!activeTech) return [];

    // 1. Check direct verified mapping
    const directMappedIds = SOVEREIGN_TECH_MAPPING[activeTech];
    if (directMappedIds && directMappedIds.length > 0) {
      return SELECTED_WORK.filter((p) => directMappedIds.includes(p.id));
    }

    // 2. Normalized fallback matching against project data fields
    const qClean = activeTech.toLowerCase().replace(/[^a-z0-9]/g, '');
    return SELECTED_WORK.filter((p) => {
      const hasDirectTag = (p.technologies || []).some((t) => {
        const tClean = t.toLowerCase().replace(/[^a-z0-9]/g, '');
        return tClean === qClean || (qClean.length > 3 && tClean.includes(qClean));
      });
      return hasDirectTag;
    });
  }, [activeTech]);

  return (
    <section id="tech" className="py-28 bg-[#0B0907] relative z-10 overflow-hidden font-sans border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header with Motion #28 Testing Marker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>INTERACTIVE TECHNOLOGY STACK</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              Technology That{' '}
              <span className="italic font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Powers the Work.
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              Click any technology below to instantly inspect which live UAE platforms, booking engines, and AI systems are engineered with that exact stack.
            </p>
          </div>

          {activeTech && (
            <button
              type="button"
              onClick={() => setActiveTech(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors cursor-pointer self-start md:self-end"
            >
              <X className="w-4 h-4" />
              <span>Clear Filter ({activeTech})</span>
            </button>
          )}
        </div>

        {/* 04 — 3D Central Technology Orbit Engine */}
        <TechOrbit3D onSelectTech={setActiveTech} activeTech={activeTech} />

        {/* Interactive Architecture Circuit Flow Strip */}
        <div className="p-4 sm:p-5 rounded-3xl bg-[#14100C] border border-amber-500/25 max-w-4xl mx-auto hidden lg:flex items-center justify-between text-xs font-mono text-gray-300 relative shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Motion #28 Ambient Laser Sweep */}
          {!shouldReduceMotion && (
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
              className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 pointer-events-none"
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
                      ? 'text-black font-extrabold shadow-lg shadow-amber-500/30 scale-105'
                      : node.accent === 'amber'
                      ? 'bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/20'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFlowNodePill"
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/30 -z-10"
                    />
                  )}
                  <Icon className="w-4 h-4" />
                  <span>{node.label}</span>
                </button>

                {idx < FLOW_NODES.length - 1 && (
                  <div className="relative flex items-center">
                    <ArrowRight className="w-4 h-4 text-amber-500/60" />
                    {!shouldReduceMotion && (
                      <motion.div
                        animate={{ x: [-4, 12], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut', delay: idx * 0.2 }}
                        className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B]"
                      />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Grid of Tech Stack Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TECH_CATEGORIES.map((cat, idx) => (
            <TechCard
              key={cat.id}
              cat={cat}
              idx={idx}
              isHighlighted={selectedNode === cat.id}
              shouldReduceMotion={shouldReduceMotion}
              activeTech={activeTech}
              onSelectTech={(tech) => setActiveTech(activeTech === tech ? null : tech)}
            />
          ))}
        </div>

        {/* Live Connected Projects Drawer / Showcase when a Tech is Selected */}
        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#110D09] border border-amber-500/40 shadow-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-mono font-bold text-sm">
                    {connectedProjects.length}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">
                      TECHNOLOGY CONNECTION MATRIX
                    </span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>Platforms Powered by {activeTech}</span>
                      <Cpu className="w-4 h-4 text-amber-400" />
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href="/projects"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Browse All 84+ Platforms</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActiveTech(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close connected platforms"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {connectedProjects.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm font-mono">
                  No direct platform tags match "{activeTech}". Explore all 84+ platforms in our archive.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {connectedProjects.slice(0, 6).map((proj) => (
                    <Link
                      key={proj.id}
                      href={`/work/${proj.slug || proj.id}`}
                      className="group p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-400/50 transition-all space-y-3 block"
                    >
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 border border-white/5">
                        <img
                          src={proj.image || proj.thumbnail}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[9px] font-mono font-bold">
                          #{String(proj.projectNumber || '01').padStart(2, '0')}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                          {proj.category}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {proj.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-amber-300 transition-colors">
                        <span>Inspect Architecture</span>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default TechEcosystem;

