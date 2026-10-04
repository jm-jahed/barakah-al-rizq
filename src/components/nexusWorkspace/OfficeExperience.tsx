'use client';

import React from 'react';

export default function OfficeExperience() {
  const experiences = [
    {
      title: 'Acoustic Soundproofing & Privacy',
      description: 'Double-glazed acoustic partitions rated at STC 48-52 dB with sound-dampening ceiling baffles, white-noise masking, and soundproof phone booths for confidential deals.',
      tag: 'STC 52 RATED',
      icon: '🎙️'
    },
    {
      title: 'Dual Dark Fiber & Tier III Server Room',
      description: 'Ultra-redundant symmetric 1Gbps / 10Gbps enterprise connectivity powered by Cisco Meraki, isolated private VLANs per company, and on-premises server racks.',
      tag: 'CISCO MERAKI 6E',
      icon: '⚡'
    },
    {
      title: 'Herman Miller & Steelcase Ergonomics',
      description: 'Fully furnished with Herman Miller Aeron / Cosm ergonomic chairs, electrified height-adjustable sit-stand desks, and integrated cable management channels.',
      tag: 'LUXURY ERGONOMICS',
      icon: '🪑'
    },
    {
      title: 'White-Glove Hospitality & Artisan Barista',
      description: 'Full-time bilingual front desk concierges, personalized guest reception, executive mail handling, and unlimited freshly brewed specialty coffee & organic teas.',
      tag: '5-STAR SERVICE',
      icon: '☕'
    },
    {
      title: 'Biometric 24/7/365 Sovereign Access',
      description: 'High-security multi-factor biometric iris and encrypted smartphone Bluetooth mobile keycards for unconstrained round-the-clock office access.',
      tag: '24/7/365 UNRESTRICTED',
      icon: '🔐'
    },
    {
      title: 'Polycom AI 4K Boardrooms',
      description: 'State-of-the-art boardroom suites featuring dual 85-inch 4K HDR displays, Polycom AI auto-tracking cameras, and Biamp ceiling microphone arrays.',
      tag: 'POLYCOM AI 4K',
      icon: '🖥️'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Engineering Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Sovereign Executive Workspace Standard
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Every millimeter of NEXUS facilities is purpose-built for global leadership teams, family offices, and high-performance financial and technology organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{exp.icon}</span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-amber-400 group-hover:border-amber-500/30 transition">
                    {exp.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition">
                  {exp.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>✓</span>
                <span>Included in all monthly leases</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
