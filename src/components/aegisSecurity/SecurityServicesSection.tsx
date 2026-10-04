'use client';

import React, { useState } from 'react';
import { Shield, UserCheck, Users, Building2, Home, ShoppingBag, HardHat, FileSearch, Video, Key, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { AEGIS_SERVICES, SecurityService } from '@/data/aegisSecurityData';

const ICON_MAP: Record<string, any> = {
  Shield,
  UserCheck,
  Users,
  Building2,
  Home,
  ShoppingBag,
  HardHat,
  FileSearch,
  Video,
  Key
};

interface SecurityServicesSectionProps {
  onOpenAssessment: () => void;
}

export default function SecurityServicesSection({ onOpenAssessment }: SecurityServicesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeServiceModal, setActiveServiceModal] = useState<SecurityService | null>(null);

  const categories = ['All', 'Personnel', 'Executive', 'Physical', 'Technology', 'Advisory'];

  const filteredServices = selectedCategory === 'All'
    ? AEGIS_SERVICES
    : AEGIS_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-[#050811] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>Sovereign Security Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Comprehensive Protection Ecosystem
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Ten integrated security disciplines engineered around high-value assets, diplomatic delegations, corporate facilities, and luxury residential environments.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => {
            const IconComp = ICON_MAP[srv.iconName] || Shield;

            return (
              <div
                key={srv.id}
                className="p-7 rounded-3xl bg-[#090D18] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      SERVICE {srv.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400/90 block mt-1">
                    {srv.tagline}
                  </span>

                  <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed line-clamp-3">
                    {srv.shortDescription}
                  </p>

                  {/* Key Applications Pill */}
                  <div className="space-y-1.5 mt-5 pt-4 border-t border-slate-800/80">
                    {srv.keyApplications.slice(0, 3).map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                    {srv.complianceStandard.split(' ')[0]} {srv.complianceStandard.split(' ')[1]}
                  </span>

                  <button
                    onClick={() => setActiveServiceModal(srv)}
                    className="px-4 py-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white text-xs font-mono font-bold rounded-xl transition flex items-center gap-1.5"
                  >
                    <span>Inspect Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Drawer Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#090E1A] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl my-auto max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setActiveServiceModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full text-xs font-mono font-bold">
                SERVICE {activeServiceModal.number} &bull; {activeServiceModal.category}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeServiceModal.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                {activeServiceModal.tagline}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeServiceModal.fullDescription}
            </p>

            {/* Applications List */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                Operational Applications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeServiceModal.keyApplications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] block uppercase">Deployment Velocity</span>
                <span className="text-emerald-400 font-bold">{activeServiceModal.deploymentSpeed}</span>
              </div>
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 text-[10px] block uppercase">Compliance Benchmark</span>
                <span className="text-cyan-400 font-bold">{activeServiceModal.complianceStandard}</span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">
                Ready to deploy this discipline?
              </span>
              <button
                onClick={() => {
                  setActiveServiceModal(null);
                  onOpenAssessment();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition font-mono"
              >
                Include in Risk Assessment
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
