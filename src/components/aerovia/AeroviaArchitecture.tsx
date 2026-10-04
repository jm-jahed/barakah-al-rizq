'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Database, 
  Server, 
  Code2, 
  Radio, 
  CheckCircle2, 
  Plane,
  Building2,
  Shield
} from 'lucide-react';

const ARCH_TIERS = [
  {
    tier: 'TIER 01',
    name: 'Traveler Experience & Interface',
    role: 'Next.js 16 App Router, WebGL Interactive Globe, Native Mobile Views',
    desc: 'Ultra-fast sub-second search panels, drag-and-drop journey timelines, and responsive mobile booking drawers.'
  },
  {
    tier: 'TIER 02',
    name: 'Multi-GDS Flight Aggregation',
    role: 'Amadeus Direct, Sabre GDS, NDC XML Pipeline, Seat Map Parser',
    desc: 'Aggregates 500+ commercial carriers and private jet operators with live seat availability and lie-flat angles.'
  },
  {
    tier: 'TIER 03',
    name: 'Hospitality Engine & Palace Inventory',
    role: 'Direct Luxury API Connector, Rate Parity Engine, Room Upgrade Logic',
    desc: 'Direct hotel reservation feeds with guaranteed VIP benefits, breakfast inclusions, and USD 100 hotel credits.'
  },
  {
    tier: 'TIER 04',
    name: 'Synchronized Journey Orchestrator',
    role: 'Temporal Graph Engine, Layover Buffer Validator, Dynamic Pricing Matrix',
    desc: 'Links flight arrival times with private chauffeur transfers and hotel check-in buffers into a cohesive digital itinerary.'
  },
  {
    tier: 'TIER 05',
    name: 'Sovereign Payments & Vault Security',
    role: 'PCI-DSS Tier 1 Gateway, Hardware HSM Encryption, Redis Rate Locks',
    desc: 'Zero-surcharge AED transactions, 72-hour fare locks, and sovereign traveler data enclave privacy.'
  }
];

const ECOSYSTEM_TECH = [
  { name: 'Next.js 16 & Turbopack', category: 'Frontend Platform' },
  { name: 'React 19 & TypeScript', category: 'Type Safety & UI Engine' },
  { name: 'Tailwind CSS & Framer Motion', category: 'Luxury Editorial Styling' },
  { name: 'PostgreSQL & Prisma', category: 'Relational Booking DB' },
  { name: 'Redis Micro-Cluster', category: '72-Hour Fare Locks' },
  { name: 'Multi-GDS NDC APIs', category: 'Live Flight Streams' },
  { name: 'WebGL Globe Canvas', category: 'Global Route Visualization' },
  { name: 'FIPS 140-3 Hardware HSM', category: 'Sovereign Cryptography' }
];

export const AeroviaArchitecture: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-950/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            DIGITAL TRAVEL ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            One Platform. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Every Journey Layer.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From consumer search and multi-GDS flight routing down to automated hotel rate parity engines and offline digital itineraries.
          </p>
        </div>

        {/* 5 Architecture Tiers */}
        <div className="space-y-4 mb-16 max-w-4xl mx-auto">
          {ARCH_TIERS.map((tier) => (
            <div
              key={tier.tier}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-amber-950 border border-amber-500/30 text-amber-300 shrink-0">
                  {tier.tier}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{tier.name}</h3>
                  <p className="text-xs font-mono text-amber-300/90 mb-1">{tier.role}</p>
                  <p className="text-xs text-slate-400">{tier.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Ecosystem Grid */}
        <div className="p-8 rounded-3xl bg-[#060c14] border border-slate-800">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-amber-400" />
              Technology Stack Ecosystem
            </h3>
            <span className="text-xs font-mono text-amber-300">Modern High-Throughput Architecture</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ECOSYSTEM_TECH.map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                  {tech.category}
                </span>
                <div className="text-xs font-bold text-white font-mono">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
