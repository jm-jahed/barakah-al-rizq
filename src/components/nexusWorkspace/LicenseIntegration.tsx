'use client';

import React from 'react';

export default function LicenseIntegration() {
  return (
    <section id="licensing" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Business Setup Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              DED & Freezone Trade License Ready Offices
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Establishing a corporate presence in Dubai or Abu Dhabi requires physical workspace compliance. NEXUS WORKSPACE suites are designed to support UAE business setup workflows.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Ejari & Commercial Inspection Ready</h4>
                  <p className="text-xs text-slate-400 mt-1">Instant Ejari document issuance upon lease execution for DED trade license processing.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Corporate Bank Account Support</h4>
                  <p className="text-xs text-slate-400 mt-1">Physical office suites equipped for bank compliance site visits and verification checks.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Bilingual PRO & Admin Desk</h4>
                  <p className="text-xs text-slate-400 mt-1">On-site administrative team handling government mail, courier packages, and guest management.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
              alt="DED Trade License Ready Office"
              className="rounded-2xl border border-slate-800 shadow-2xl object-cover w-full h-[400px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-amber-500/30 p-4 rounded-xl shadow-xl max-w-xs">
              <span className="text-xs text-amber-400 font-bold block">100% Ejari Approval</span>
              <p className="text-[11px] text-slate-300 mt-1">Compliant physical space for Dubai DED & Abu Dhabi DED license applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
