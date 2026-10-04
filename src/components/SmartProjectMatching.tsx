'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Crown, 
  Building2, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Activity,
  Boxes
} from 'lucide-react';
import { SELECTED_WORK, ProjectItem, AGENCY_SERVICES } from '@/data/siteData';

interface SmartProjectMatchingProps {
  onOpenOrderModal?: (plan?: string) => void;
}

interface IndustryProfile {
  id: string;
  name: string;
  uaeMarketShare: string;
  iconName: string;
  primaryChallenge: string;
  recommendedStack: string[];
  benchmarks: string;
  categoryFilter: string[];
}

const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & Luxury PropTech',
    uaeMarketShare: 'AED 400B+ Dubai Market',
    iconName: 'Building2',
    primaryChallenge: 'High-bounce rates from untargeted traffic; lack of immediate WhatsApp CRM routing for HNWI brokers.',
    recommendedStack: ['Next.js 16 App Router', 'WhatsApp Business API', 'Dynamic 3D Floorplans', 'Automated Lead Qualification'],
    benchmarks: '3.8x higher broker inquiries, sub-second photo gallery load',
    categoryFilter: ['Real Estate & PropTech', 'Holiday Home Management', 'Property Management']
  },
  {
    id: 'luxury-retail',
    name: 'Luxury E-Commerce & Haute Couture',
    uaeMarketShare: 'Highest GCC ARPU',
    iconName: 'Crown',
    primaryChallenge: 'Generic checkout funnels with checkout abandonment; poor localization for GCC multi-currency and Arabic typography.',
    recommendedStack: ['Shopify Storefront GraphQL', 'Apple Pay / Tabby', 'Sub-800ms Mobile Checkout', 'Bilingual Typography Engine'],
    benchmarks: '42% cart conversion increase, 0-latency SKU filtering',
    categoryFilter: ['Luxury & Fashion', 'Fragrance & Cosmetics', 'E-Commerce & Retail']
  },
  {
    id: 'hospitality-tourism',
    name: 'Hospitality, Aviation & Tourism',
    uaeMarketShare: 'Global Destination Hub',
    iconName: 'Compass',
    primaryChallenge: 'Third-party OTA commission drain (15-25%); lack of direct luxury booking engines and instant confirmation.',
    recommendedStack: ['Custom Booking Engine', 'Real-Time Availability Calendar', 'Multi-Tier VIP Add-ons', 'SMS & WhatsApp Passes'],
    benchmarks: '65% direct booking share, zero OTA revenue leakage',
    categoryFilter: ['Travel & Tourism', 'Hospitality & Luxury Hotels', 'Automotive & Luxury Rentals']
  },
  {
    id: 'medical-wellness',
    name: 'Private Healthcare & Aesthetics',
    uaeMarketShare: 'Premium Medical Tourism',
    iconName: 'ShieldCheck',
    primaryChallenge: 'Complex appointment booking and patient hesitation; lack of doctor credential transparency and treatment outcome showcases.',
    recommendedStack: ['Doctor Slot Scheduling', 'HIPAA/DHA-Compliant Forms', 'Interactive Procedure Estimator', 'Virtual Consultation Funnel'],
    benchmarks: '4.2x booked patient consultations, 99.4% booking fidelity',
    categoryFilter: ['Healthcare & Medical Diagnostics', 'Beauty & Personal Care', 'Wellness & Fitness']
  },
  {
    id: 'enterprise-corporate',
    name: 'Corporate, Legal & Capital Advisory',
    uaeMarketShare: 'DIFC & ADGM Financial Hub',
    iconName: 'Target',
    primaryChallenge: 'Outdated legacy websites conveying low enterprise trust; absence of automated RFP intake and secure client portals.',
    recommendedStack: ['Static Edge Generation (SSG)', 'Encrypted Client Portals', 'Multi-Jurisdiction Disclaimers', 'Dynamic Service Calculators'],
    benchmarks: '95+ Lighthouse Performance, Institutional Trust Rating',
    categoryFilter: ['Corporate Services & Law', 'Financial Services & Investment', 'Business Consultancy & Setup']
  },
  {
    id: 'tech-ai-saas',
    name: 'AI, Web3 & Tech SaaS Platforms',
    uaeMarketShare: 'National AI Strategy 2031',
    iconName: 'Cpu',
    primaryChallenge: 'Technical complexity confusing prospective investors and enterprise buyers; weak product demo storytelling.',
    recommendedStack: ['Interactive Product Sandboxes', 'Real-time WebSocket Dashboards', 'Stripe Billing & Tier Metering', 'LLM Agent Embeddings'],
    benchmarks: '85% trial-to-paid conversion lift, sub-100ms API telemetry',
    categoryFilter: ['Technology & Software', 'Education & Tech Academy', 'Marketing & Advertising Services']
  }
];

const BUSINESS_STAGES = [
  { id: 'startup', label: 'Startup / Market Entry', desc: 'Speed to market & MVP validation in UAE' },
  { id: 'scaleup', label: 'High-Growth Scaleup', desc: 'Conversion optimization & API automation' },
  { id: 'enterprise', label: 'Established Enterprise', desc: 'Bespoke architecture & legacy modernization' }
];

export const SmartProjectMatching: React.FC<SmartProjectMatchingProps> = ({ onOpenOrderModal }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('real-estate');
  const [selectedStage, setSelectedStage] = useState<string>('scaleup');

  // Active industry profile
  const activeIndustry = useMemo(() => {
    return INDUSTRY_PROFILES.find((ind) => ind.id === selectedIndustryId) || INDUSTRY_PROFILES[0];
  }, [selectedIndustryId]);

  // Dynamically surface matching projects based on category filters
  const matchedProjects = useMemo(() => {
    const list = SELECTED_WORK.filter((p) => 
      activeIndustry.categoryFilter.some((cat) => p.category.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(p.category.toLowerCase()))
    );

    // Fallback if strict match is fewer than 3
    if (list.length < 3) {
      const fallback = SELECTED_WORK.slice(0, 3);
      return fallback;
    }

    return list.slice(0, 3);
  }, [activeIndustry]);

  return (
    <section id="smart-match" className="py-20 sm:py-28 bg-[#07090E] relative overflow-hidden font-sans border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>SMART PROJECT MATCHING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tailored Engineering for Your Sector. <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Select Your Industry & Growth Stage.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every UAE market demands a bespoke technical playbook. Select your domain to inspect the recommended architecture, verified benchmarks, and corresponding sovereign platforms.
          </p>
        </div>

        {/* Step 1: Industry Selector Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Boxes className="w-4 h-4 text-amber-400" />
              1. Choose Your Industry Sector:
            </span>
            <span className="text-[11px] font-mono text-amber-400/80">
              6 Core UAE Growth Sectors
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDUSTRY_PROFILES.map((ind) => {
              const isSelected = selectedIndustryId === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustryId(ind.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 relative overflow-hidden group hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-amber-500/15 border-2 border-amber-400 shadow-[0_12px_30px_rgba(245,158,11,0.22)]'
                      : 'bg-[#0D0F14] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.05] hover:shadow-[0_8px_20px_rgba(245,158,11,0.1)]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono uppercase font-bold transition-colors ${isSelected ? 'text-amber-400' : 'text-slate-500 group-hover:text-amber-400/80'}`}>
                      SECTOR
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    )}
                  </div>
                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold leading-snug line-clamp-2 transition-colors ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {ind.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 block truncate">
                      {ind.uaeMarketShare}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Growth Stage Selector */}
        <div className="p-4 rounded-2xl bg-[#0B0D13]/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2 shrink-0">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            2. Current Business Scale:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full sm:w-auto flex-1 sm:max-w-2xl">
            {BUSINESS_STAGES.map((stage) => {
              const isSelected = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStage(stage.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-black/40 hover:bg-white/5 border border-white/10 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold leading-none">{stage.label}</div>
                  <div className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                    {stage.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Matched Sector Blueprint & Precedent Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Sector Strategic Blueprint */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-[#0D1017] border border-amber-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 tracking-wider">
                  STRATEGIC PLAYBOOK
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{activeIndustry.name}</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                UAE VERIFIED
              </span>
            </div>

            {/* Core Bottleneck */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                Primary Market Bottleneck:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5">
                {activeIndustry.primaryChallenge}
              </p>
            </div>

            {/* Recommended Technical Stack */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono uppercase text-amber-400 tracking-wider block">
                Recommended Architectural Stack:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeIndustry.recommendedStack.map((tech) => (
                  <div
                    key={tech}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Benchmark */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Expected Performance Lift</span>
                <span className="text-xs sm:text-sm font-bold text-amber-300">{activeIndustry.benchmarks}</span>
              </div>
              <Activity className="w-5 h-5 text-amber-400" />
            </div>

            {/* Direct CTA */}
            <button
              type="button"
              onClick={() => onOpenOrderModal?.(`${activeIndustry.name} (${selectedStage})`)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Build For This Sector</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Right Column (7 cols): Top 3 Precedent Case Studies */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                Matching Precedent Platforms in Our Portfolio:
              </span>
              <Link
                href="/projects"
                className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>View Full 84+ Archive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {matchedProjects.map((proj, idx) => (
                <article
                  key={proj.id}
                  className="group p-4 sm:p-5 rounded-2xl bg-[#0D0F14] border border-white/10 hover:border-amber-400/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 relative bg-slate-900 border border-white/10">
                      <img
                        src={proj.image || proj.thumbnail}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[9px] font-mono font-bold">
                        #{String(proj.projectNumber || idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase truncate">
                          {proj.category}
                        </span>
                        {proj.client && (
                          <span className="text-[10px] font-mono text-slate-400 truncate">
                            {proj.client}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug line-clamp-1">
                        {proj.title}
                      </h4>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>

                      {proj.metrics && (
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-400 pt-0.5">
                          <TrendingUp className="w-3 h-3 text-emerald-400" />
                          <span>{proj.metrics}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5 flex items-center justify-end">
                    <Link
                      href={`/work/${proj.slug || proj.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-mono font-bold transition-all duration-200 group-hover:border-amber-400/40"
                    >
                      <span>Examine Case</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
