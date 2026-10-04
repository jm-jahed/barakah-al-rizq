'use client';

import React, { useState } from 'react';
import { NEXUS_OFFICES, OfficeOption } from '@/data/nexusWorkspaceData';
import SuiteInspectionModal from './SuiteInspectionModal';

export default function ServicedOffices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [inspectingOffice, setInspectingOffice] = useState<OfficeOption | null>(null);

  const categories = ['All', 'Private Suite', 'Executive Office', 'License Ready', 'Flexi Desk', 'Boardroom', 'Enterprise Floorplate'];

  const filteredOffices = selectedCategory === 'All'
    ? NEXUS_OFFICES
    : NEXUS_OFFICES.filter((o) => o.category === selectedCategory);

  const handleBookTourFromModal = (officeTitle: string) => {
    const tourSection = document.getElementById('tour');
    if (tourSection) {
      tourSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offices" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>Sovereign Workspace Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Fully Fitted Serviced Suites & HQ Plates
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Every suite is engineered with acoustic sound isolation, Herman Miller seating, electrified sit-stand desks, enterprise fiber VLAN, and instant DED Ejari approval.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-center gap-6">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Available Units</span>
              <span className="text-2xl font-black text-amber-400">18 Suites</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-mono block">Pricing Currency</span>
              <span className="text-2xl font-black text-emerald-400">100% AED</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffices.map((office) => (
            <div
              key={office.id}
              className="bg-slate-900/70 border border-slate-800/90 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur text-amber-400 text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-amber-500/30">
                    {office.category}
                  </span>

                  {/* Ejari Badge */}
                  <span className="absolute top-4 right-4 bg-emerald-950/85 backdrop-blur text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ejari Certified
                  </span>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md">
                      👥 {office.capacity}
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md">
                      📐 {office.areaSqFt} sq.ft
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                    {office.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
                    {office.description}
                  </p>

                  {/* Telemetry Chips */}
                  <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono">
                    <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800 text-slate-300 truncate">
                      <span className="text-slate-500 block text-[9px] uppercase">Acoustics</span>
                      {office.acousticRating.split(' ')[0]} {office.acousticRating.split(' ')[1]}
                    </div>
                    <div className="p-2 bg-slate-950/60 rounded-xl border border-slate-800 text-slate-300 truncate">
                      <span className="text-slate-500 block text-[9px] uppercase">Visa Quota</span>
                      {office.ejariQuota.split(' ')[0]} {office.ejariQuota.split(' ')[1]} {office.ejariQuota.split(' ')[2]}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-300">
                    {office.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-4 border-t border-slate-800/70 bg-slate-950/40 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">All-Inclusive Rate</span>
                  <span className="text-lg font-black text-amber-400">{office.priceFormatted}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setInspectingOffice(office)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold rounded-xl transition shadow-md"
                  >
                    Inspect Suite
                  </button>
                  <a
                    href={`https://wa.me/971508821122?text=${encodeURIComponent(
                      `Hello, I would like to check immediate availability for ${office.title} (${office.priceFormatted}) at NEXUS Workspace.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl flex items-center justify-center text-sm transition"
                    title="Direct WhatsApp Quote"
                  >
                    💬
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 360 Inspection Modal */}
      {inspectingOffice && (
        <SuiteInspectionModal
          office={inspectingOffice}
          onClose={() => setInspectingOffice(null)}
          onBookTour={handleBookTourFromModal}
        />
      )}
    </section>
  );
}
