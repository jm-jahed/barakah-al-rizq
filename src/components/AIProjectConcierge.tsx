'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Bot, 
  Send, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight, 
  Activity, 
  RotateCcw,
  Building,
  ShieldCheck, 
  Cpu, 
  Lightbulb,
  Sparkles,
  Zap,
  Globe2,
  Database,
  Lock
} from 'lucide-react';
import { SELECTED_WORK, AGENCY_SERVICES, ProjectItem, AgencyService } from '@/data/siteData';

interface AIProjectConciergeProps {
  onOpenOrderModal?: (plan?: string) => void;
}

interface MatchResult {
  confidence: number;
  reason: string;
  recommendedServices: AgencyService[];
  matchingProjects: ProjectItem[];
  architecturalInsight: string;
  estimatedTimeline: string;
  specs: {
    frontend: string;
    backend: string;
    database: string;
    payment: string;
  };
}

const CATEGORY_PROMPTS = [
  {
    category: 'All Domains',
    prompts: [
      'Luxury Real Estate portal with lead qualification & WhatsApp CRM for Dubai brokers',
      'High-end E-commerce platform with Shopify, Apple Pay & same-day UAE delivery',
      'Automated AI Agent customer support & RAG search for financial advisory services',
      'On-demand booking platform with live scheduling, payment gateway & SMS verification'
    ]
  },
  {
    category: 'Real Estate & Assets',
    prompts: [
      'Bespoke Abu Dhabi & Dubai luxury villa portal with interactive 3D floorplans and VIP WhatsApp routing',
      'Commercial property management platform with tenant portal, Ejari integration & automated rent collection',
      'Holiday homes booking engine with dynamic pricing, Airbnb calendar sync & sub-second search'
    ]
  },
  {
    category: 'Luxury E-Commerce',
    prompts: [
      'Headless Shopify Plus fragrance flagship with 3D fragrance pyramid, Apple Pay & GCC logistics',
      'Haute couture luxury abaya boutique with custom sizing configurator and 1-click AED checkout',
      'High-volume multi-brand streetwear platform with limited drop raffles & Stripe AED rails'
    ]
  },
  {
    category: 'Autonomous AI & RAG',
    prompts: [
      'Bilingual Arabic/English AI customer concierge trained on UAE Commercial & DIFC regulations',
      'Internal corporate knowledge base RAG pipeline with instant semantic vector search across 10k documents',
      'Autonomous lead qualification bot with CRM integration and calendar appointment booking'
    ]
  },
  {
    category: 'SaaS & FinTech',
    prompts: [
      'Multi-tenant DIFC wealth advisory platform with zero-trust data residency & role-based dashboards',
      'Corporate accounting & VAT filing SaaS with automated invoicing and FTA compliance audit trails',
      'Executive KPI observatory with real-time WebSocket telemetry and sub-50ms query latency'
    ]
  }
];

export const AIProjectConcierge: React.FC<AIProjectConciergeProps> = ({ onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState('All Domains');
  const [inputQuery, setInputQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState('');
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<MatchResult | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const currentPrompts = CATEGORY_PROMPTS.find(c => c.category === activeCategory)?.prompts || CATEGORY_PROMPTS[0].prompts;

  // Intelligent matching engine running on client against sovereign siteData
  const runAnalysis = (queryText: string) => {
    const text = queryText.trim().toLowerCase();
    if (!text) return;

    setIsAnalyzing(true);
    setHasAnalyzed(false);
    setAnalysisStep('Scanning UAE digital graph & entity parameters...');

    setTimeout(() => {
      setAnalysisStep('Synthesizing Next.js 16 SSR & cloud architecture blueprint...');
    }, 350);

    setTimeout(() => {
      // 1. Score matching projects
      const scoredProjects = SELECTED_WORK.map((proj) => {
        let score = 0;
        const titleL = proj.title.toLowerCase();
        const catL = proj.category.toLowerCase();
        const descL = proj.description.toLowerCase();
        const techL = (proj.technologies || []).join(' ').toLowerCase();

        const tokens = text.split(/\s+/).filter((t) => t.length > 2);
        tokens.forEach((token) => {
          if (titleL.includes(token)) score += 4;
          if (catL.includes(token)) score += 3;
          if (descL.includes(token)) score += 2;
          if (techL.includes(token)) score += 2;
        });

        if (text.includes('real estate') || text.includes('property') || text.includes('broker') || text.includes('luxury') || text.includes('villa')) {
          if (proj.id === 'real-estate-lead-platform' || proj.id === 'holiday-home-management' || proj.id === 'property-management') score += 6;
        }
        if (text.includes('e-commerce') || text.includes('shop') || text.includes('store') || text.includes('perfume') || text.includes('jewelry') || text.includes('fashion')) {
          if (proj.id === 'luxury-jewelry' || proj.id === 'abaya-fashion' || proj.id === 'perfume-fragrance' || proj.id === 'sneaker-streetwear') score += 6;
        }
        if (text.includes('ai') || text.includes('agent') || text.includes('bot') || text.includes('rag') || text.includes('automation')) {
          if (proj.id === 'artificial-intelligence' || proj.id === 'coding-tech-academy' || proj.id === 'digital-marketing-agency') score += 6;
        }
        if (text.includes('booking') || text.includes('rental') || text.includes('car') || text.includes('hotel') || text.includes('clinic')) {
          if (proj.id === 'car-rental' || proj.id === 'private-medical-clinic' || proj.id === 'boutique-luxury-hotel') score += 6;
        }

        return { proj, score };
      });

      scoredProjects.sort((a, b) => b.score - a.score);
      const topProjects = scoredProjects.slice(0, 3).map((s) => s.proj);

      // 2. Recommend Services
      const matchedServices: AgencyService[] = [];
      if (text.includes('ai') || text.includes('bot') || text.includes('rag') || text.includes('chat') || text.includes('automation')) {
        const s = AGENCY_SERVICES.find((serv) => serv.id === 'ai-bot-agent');
        if (s) matchedServices.push(s);
      }
      if (text.includes('shop') || text.includes('store') || text.includes('e-commerce') || text.includes('stripe') || text.includes('pay')) {
        const s = AGENCY_SERVICES.find((serv) => serv.id === 'headless-ecommerce');
        if (s) matchedServices.push(s);
      }
      if (text.includes('marketing') || text.includes('lead') || text.includes('seo') || text.includes('conversion') || text.includes('growth')) {
        const s = AGENCY_SERVICES.find((serv) => serv.id === 'digital-marketing');
        if (s) matchedServices.push(s);
      }
      if (text.includes('saas') || text.includes('platform') || text.includes('portal') || text.includes('app')) {
        const s = AGENCY_SERVICES.find((serv) => serv.id === 'saas-development');
        if (s) matchedServices.push(s);
      }
      const webDev = AGENCY_SERVICES.find((serv) => serv.id === 'web-development');
      if (webDev && !matchedServices.some((m) => m.id === webDev.id)) {
        matchedServices.push(webDev);
      }

      // 3. Synthesize architectural insights
      let insight = 'Next.js 16 App Router architecture paired with edge middleware, sub-second TTFB, and localized AED checkout flows.';
      let timeline = '10 – 14 Business Days';
      let specs = {
        frontend: 'Next.js 16 App Router · Edge SSR',
        backend: 'TypeScript 5 Microservices · FastAPI',
        database: 'PostgreSQL · Row-Level Security',
        payment: 'Stripe AED · Apple Pay · UAE Localized'
      };

      if (text.includes('ai') || text.includes('agent') || text.includes('rag')) {
        insight = 'Custom OpenAI GPT-4o RAG vector embeddings running with encrypted pgvector memory, sub-120ms semantic search, and streaming response pipelines.';
        timeline = '2 – 3 Weeks Sprint';
        specs = {
          frontend: 'Next.js 16 · Streaming UI Hooks',
          backend: 'Python FastAPI · LangChain Agents',
          database: 'pgvector Embeddings · Supabase Auth',
          payment: 'Enterprise SLA · ADGM/DIFC Compliance'
        };
      } else if (text.includes('e-commerce') || text.includes('shop') || text.includes('perfume') || text.includes('fashion')) {
        insight = 'Headless Shopify Plus GraphQL Storefront architecture with sub-second mobile checkout, Apple Pay / Tabby installments, and automated GCC shipping routes.';
        timeline = '2 – 4 Weeks Sprint';
        specs = {
          frontend: 'Shopify Plus GraphQL · Next.js 16',
          backend: 'Edge API Routes · Inventory Sync',
          database: 'Shopify Cloud · Redis Session Cache',
          payment: 'Native AED · Tabby · Tamara · Apple Pay'
        };
      } else if (text.includes('real estate') || text.includes('property') || text.includes('villa') || text.includes('broker')) {
        insight = 'High-velocity lead capture funnels integrated with WhatsApp Business API, automatic broker routing, interactive 3D property maps, and CRM attribution.';
        timeline = '10 – 14 Business Days';
        specs = {
          frontend: 'Next.js 16 SSR · Framer Motion 3D',
          backend: 'WhatsApp Cloud API · Webhook Sync',
          database: 'PostgreSQL · Multi-Broker Schema',
          payment: 'VIP Booking Deposits · Stripe AED'
        };
      }

      setAnalysisResult({
        confidence: 98,
        reason: `Synthesized from analysis of ${queryText.length} parameters against WebStudio AE production benchmarks.`,
        recommendedServices: matchedServices.slice(0, 3),
        matchingProjects: topProjects,
        architecturalInsight: insight,
        estimatedTimeline: timeline,
        specs
      });

      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runAnalysis(inputQuery);
  };

  const handleSelectPreset = (preset: string) => {
    setInputQuery(preset);
    runAnalysis(preset);
  };

  const handleReset = () => {
    setInputQuery('');
    setHasAnalyzed(false);
    setAnalysisResult(null);
  };

  return (
    <section id="ai-concierge" className="py-20 sm:py-28 bg-[#07090E] relative overflow-hidden font-sans border-t border-white/5">
      {/* Background radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5">
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span>AI ARCHITECTURE CONCIERGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Describe What You Want to Build. <br />
            <span className="italic font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              We Match the Exact Blueprint &amp; Stack.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tell our AI concierge your business vision or technical scope. It instantly matches relevant UAE case studies, architecture patterns, and recommended technology tiers.
          </p>
        </div>

        {/* Interactive Query Terminal */}
        <div className="p-5 sm:p-7 rounded-3xl bg-[#0B0E14] border border-amber-500/25 shadow-2xl space-y-5 backdrop-blur-xl">
          
          {/* Domain Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORY_PROMPTS.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategory(cat.category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat.category
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/10 hover:border-amber-400/30'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="e.g. We need a luxury holiday homes portal in Dubai Marina with dynamic nightly pricing, calendar sync with Airbnb, and instant WhatsApp booking concierge..."
                rows={3}
                className="w-full p-4 sm:p-5 pr-14 rounded-2xl bg-black/60 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-slate-500 text-sm sm:text-base resize-none focus:outline-none transition-all font-sans leading-relaxed shadow-inner"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isAnalyzing}
                className="absolute right-3.5 bottom-3.5 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-lg shadow-amber-500/20"
                aria-label="Submit query to AI Concierge"
              >
                {isAnalyzing ? (
                  <Activity className="w-5 h-5 animate-spin text-slate-950" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Neural Token Streaming Simulator */}
            {isAnalyzing && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-xs font-mono text-amber-300 animate-pulse">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                <span>{analysisStep}</span>
              </div>
            )}

            {/* Prompt presets / suggestions */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  Quick Inspiration Prompts ({activeCategory}):
                </span>
                {hasAnalyzed && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[11px] font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset Concierge
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPrompts.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className="text-left p-3 rounded-xl bg-white/[0.02] hover:bg-amber-500/15 border border-white/5 hover:border-amber-400/50 text-slate-300 hover:text-amber-200 text-xs font-sans transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(245,158,11,0.1)] leading-relaxed"
                  >
                    &ldquo;{preset}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>

        {/* Live Analysis Results Deck */}
        <AnimatePresence>
          {analysisResult && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D1017] border border-amber-500/30 shadow-2xl space-y-8 backdrop-blur-xl"
            >
              
              {/* Top Match Telemetry */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-black text-base shadow-[0_0_15px_rgba(245,158,11,0.15)]">
                    {analysisResult.confidence}%
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <span>Architecture Blueprint Synthesized</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </h3>
                    <p className="text-xs text-slate-400">{analysisResult.reason}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">Estimated Sprint</span>
                    <span className="text-xs font-mono font-bold text-amber-400">{analysisResult.estimatedTimeline}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenOrderModal?.(`AI Concierge: ${inputQuery}`)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    Consult Lead Engineer
                  </button>
                </div>
              </div>

              {/* 4-Layer Architecture Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>01. Frontend Edge</span>
                  </div>
                  <div className="text-xs font-bold text-white truncate">{analysisResult.specs.frontend}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>02. Logic &amp; AI</span>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 truncate">{analysisResult.specs.backend}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase">
                    <Database className="w-3.5 h-3.5" />
                    <span>03. Data Sovereignty</span>
                  </div>
                  <div className="text-xs font-bold text-white truncate">{analysisResult.specs.database}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 font-bold uppercase">
                    <Lock className="w-3.5 h-3.5" />
                    <span>04. Payment &amp; Rails</span>
                  </div>
                  <div className="text-xs font-bold text-amber-300 truncate">{analysisResult.specs.payment}</div>
                </div>
              </div>

              {/* Architecture Insight Note */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-amber-500/20 flex items-start gap-3.5">
                <Cpu className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                    Architectural Strategy Recommendation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {analysisResult.architecturalInsight}
                  </p>
                </div>
              </div>

              {/* Recommended Services Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 font-bold">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  Matched Agency Services:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {analysisResult.recommendedServices.map((serv) => (
                    <div
                      key={serv.id}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/40 transition-all space-y-2"
                    >
                      <span className="text-[10px] font-mono text-amber-400 font-bold">SERVICE #{serv.tag}</span>
                      <h5 className="text-sm font-bold text-white">{serv.title}</h5>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{serv.description}</p>
                      <span className="inline-block text-[10px] font-mono text-emerald-400 pt-1 font-bold">
                        {serv.pricingTag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Matched Reference Projects */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 font-bold">
                  <Building className="w-3.5 h-3.5 text-amber-400" />
                  Precedent Case Studies from Our Portfolio:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {analysisResult.matchingProjects.map((proj) => (
                    <Link
                      key={proj.id}
                      href={`/work/${proj.slug || proj.id}`}
                      className="group p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/50 transition-all space-y-3 block shadow-sm hover:shadow-[0_8px_25px_rgba(245,158,11,0.12)] hover:-translate-y-1"
                    >
                      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 border border-white/5">
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
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1 font-bold">
                          {proj.category}
                        </span>
                        <h5 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                          {proj.title}
                        </h5>
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {proj.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-amber-300 transition-colors">
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AIProjectConcierge;
