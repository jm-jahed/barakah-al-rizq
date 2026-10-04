'use strict';
import React from 'react';
import { ArrowRight, Crown, Award, TrendingUp, BarChart3, Layers, Zap } from 'lucide-react';

interface GrowthDisciplineExplorerProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'performance-ppc',
    name: 'Performance PPC & Media',
    subtitle: 'Google PMax, Meta & TikTok GCC',
    description: 'Hyper-segmented account structures and programmatic bidding targeting high-net-worth investors across UAE & Saudi Arabia.',
    startingPriceAED: 8500,
    expectedRoas: '4.5x - 8.2x',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'bilingual-seo',
    name: 'Bilingual SEO & GCC PR',
    subtitle: 'Arabic & English Top-1 Dominance',
    description: 'Semantic entity optimization, Arabic dialect indexing, and Tier-1 Gulf News / Khaleej Times authority media placements.',
    startingPriceAED: 7500,
    expectedRoas: '6.0x - 12.0x',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'cro-funnel',
    name: 'Neuro-Funnel CRO Architecture',
    subtitle: '40%+ Conversion Rate Lift Protocols',
    description: 'High-ticket qualification funnels, biometric heatmaps, and psychological value anchoring that eradicate bounce rates.',
    startingPriceAED: 6500,
    expectedRoas: '3.8x - 7.5x',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'luxury-influencer',
    name: 'GCC Influencer Matrix',
    subtitle: 'Dubai VIP Ambassadors & Seeding',
    description: 'Curated rosters of vetted Emirati, Saudi, and international tastemakers with airtight contract escrow and ROI tracking.',
    startingPriceAED: 12000,
    expectedRoas: '5.0x - 10.5x',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'crm-automation',
    name: 'WhatsApp Enterprise & CRM',
    subtitle: 'Sub-60s Instant Lead Router',
    description: 'Official Meta Cloud API integrations, custom HubSpot pipelines, and predictive WhatsApp routing for luxury brokerages.',
    startingPriceAED: 5500,
    expectedRoas: '7.0x - 15.0x',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'creative-video-production',
    name: 'Cinematic 4K Commercials & 3D',
    subtitle: 'RED 8K, Drone & CGI Motion',
    description: 'High-production visual storytelling, architectural 3D rendering, and viral UGC video labs filmed in downtown Dubai studios.',
    startingPriceAED: 15000,
    expectedRoas: '4.0x - 9.0x',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'ai-growth-intelligence',
    name: 'AI Lead Scoring & Attribution',
    subtitle: 'GPT-4o Custom ML Models',
    description: 'Predictive customer lifetime value (pLTV) algorithms, real-time competitor ad radars, and automated creative variance testing.',
    startingPriceAED: 11000,
    expectedRoas: '5.5x - 11.0x',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'brand-identity-launch',
    name: 'Brand Identity & GCC Market Launch',
    subtitle: 'Sovereign Brand Books & Systems',
    description: 'End-to-end luxury identity design, bilingual Arabic typography, packaging engineering, and Dubai launch event visual collateral.',
    startingPriceAED: 18000,
    expectedRoas: 'Tier-1 Authority',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    count: 20
  }
];

export const GrowthDisciplineExplorer: React.FC<GrowthDisciplineExplorerProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section id="disciplines" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold tracking-widest text-amber-400 uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Full-Stack Enterprise Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Eight Pillars of <span className="text-amber-400 italic font-normal">Market Dominance</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Each discipline is spearheaded by a dedicated Senior Growth Director and specialized technical execution squad.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              160 Enterprise Sprints & Retainers
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINES.map((disc) => {
            const isSelected = activeCategory === disc.id;

            return (
              <div
                key={disc.id}
                onClick={() => onSelectCategory(disc.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-2xl shadow-amber-500/10 -translate-y-1'
                    : 'border-neutral-800/90 hover:border-amber-500/50 hover:-translate-y-1'
                } bg-neutral-900/60`}
              >
                {/* Background Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={disc.image}
                    alt={disc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Starting Price Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-semibold text-amber-300">
                    From AED {disc.startingPriceAED.toLocaleString()}
                  </div>

                  {/* Protocols Count */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[10px] font-medium text-neutral-300">
                    {disc.count} Protocols
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-amber-300 transition-colors mb-1 line-clamp-1">
                    {disc.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-2 line-clamp-1">
                    {disc.subtitle}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {disc.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-400 truncate font-mono">
                      ROAS: {disc.expectedRoas}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
                      View Sprints <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
