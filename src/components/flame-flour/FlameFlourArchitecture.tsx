'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, Database, Server, Smartphone, Globe, ArrowDown } from 'lucide-react';

const ARCHITECTURE_FLOW = [
  { step: '01', title: 'Customer Experience', desc: 'Next.js App Router, Framer Motion, accessible interactive configurators, and instant live bake basket state.' },
  { step: '02', title: 'Product Discovery Engine', desc: 'Categorized catalog with dietary filtering, sourdough profiles, allergen tracking, and instant search index.' },
  { step: '03', title: 'Interactive Atelier Studios', desc: '6-step Custom Box Builder, live Cake Studio preview, and AI craving matchmaker.' },
  { step: '04', title: 'Bake Queue & Hearth Telemetry', desc: 'Real-time simulated oven monitoring tracking batch temperatures, steam pressures, and cooling times.' },
  { step: '05', title: 'Fulfillment & Dispatch Engine', desc: 'Morning courier time-slot scheduling, pickup slot allocation, and live order status tracker (FF-2084).' }
];

const TECH_STACK = [
  { name: 'Next.js (App Router)', role: 'High Performance Server & Client Rendering' },
  { name: 'TypeScript & React', role: 'Type-Safe Modular UI Architecture' },
  { name: 'Tailwind CSS', role: 'Tailored Luxury Culinary Dark Palette' },
  { name: 'Framer Motion', role: 'Restrained Cinematic Flour Dust & Hearth Animations' },
  { name: 'PostgreSQL & Prisma', role: 'Relational Bake Inventory & Order Management Schema' },
  { name: 'Node.js Microservices', role: 'Telemetry Sync & Dispatch Notifications' }
];

export const FlameFlourArchitecture: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0908] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Layers className="w-3.5 h-3.5" />
            <span>DIGITAL COMMERCE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Digital Bakery Architecture
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Bridging centuries-old woodfire craftsmanship with modern cloud commerce engineering.
          </p>
        </div>

        {/* Architecture Flow */}
        <div className="bg-[#120f0d] p-6 sm:p-10 rounded-3xl border border-stone-800/80 shadow-2xl mb-12">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-6">
            End-to-End Digital Bakery Ecosystem
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {ARCHITECTURE_FLOW.map((f, idx) => (
              <div
                key={f.step}
                className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-amber-500 mb-1">STAGE {f.step}</div>
                  <h4 className="text-sm font-serif font-medium text-stone-100 mb-2">{f.title}</h4>
                  <p className="text-[11px] text-stone-400 font-light leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Ecosystem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-stone-900/40 border border-stone-800/80 flex items-start gap-3.5"
            >
              <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-stone-200">{tech.name}</h4>
                <p className="text-xs text-stone-400 mt-0.5 font-light">{tech.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
