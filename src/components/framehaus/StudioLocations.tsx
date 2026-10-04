'use client';

import React, { useState } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  CheckCircle2,
  Calendar,
  X,
  Building2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export const StudioLocations: React.FC = () => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];
  const [selectedStudioForHire, setSelectedStudioForHire] = useState<string | null>(null);

  return (
    <section id="studios" className="py-24 bg-[#0A0A0D] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.locations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.locations.title}
          </h2>
          <p className="text-base text-zinc-400 font-light">
            {t.locations.subtitle}
          </p>
        </div>

        {/* 2 Studio Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dubai Studio */}
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 space-y-6 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-amber-400 text-black text-xs font-mono font-bold uppercase">
                  DUBAI HQ & CYCLORAMA
                </span>
                <span className="text-xs font-mono text-zinc-400">3,500 sqft Space</span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-white">
                {t.locations.dubaiTitle}
              </h3>

              <div className="space-y-3 text-xs font-mono text-zinc-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.locations.dubaiAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`tel:${t.locations.dubaiPhone.replace(/\s+/g, '')}`} className="hover:text-amber-400">
                    {t.locations.dubaiPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>{t.locations.dubaiHours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase block pb-2">
                  Facility Highlights:
                </span>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>12m x 10m White Infinity Cyc Wall</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Motorized Broncolor Overhead Rig</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VIP Client Lounge & Barista Suite</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedStudioForHire('Dubai Al Quoz')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-amber-400 hover:text-black border border-zinc-700 hover:border-amber-400 text-zinc-200 font-mono text-xs font-bold uppercase transition-all"
              >
                {t.locations.bookSpace}
              </button>
              <a
                href="https://maps.google.com/?q=Alserkal+Avenue+Al+Quoz+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>{t.locations.getDirections}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Abu Dhabi Soundstage */}
          <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 space-y-6 flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-amber-400 text-black text-xs font-mono font-bold uppercase">
                  ABU DHABI SOUNDSTAGE
                </span>
                <span className="text-xs font-mono text-zinc-400">5,000 sqft Drive-In</span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-white">
                {t.locations.adTitle}
              </h3>

              <div className="space-y-3 text-xs font-mono text-zinc-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t.locations.adAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a href={`tel:${t.locations.adPhone.replace(/\s+/g, '')}`} className="hover:text-amber-400">
                    {t.locations.adPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>{t.locations.adHours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase block pb-2">
                  Facility Highlights:
                </span>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Drive-In Hypercar & Heavy Vehicle Bay</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Acoustically Isolated 8K Cinema Stage</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100kW 3-Phase Industrial Power</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedStudioForHire('Abu Dhabi Soundstage')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-amber-400 hover:text-black border border-zinc-700 hover:border-amber-400 text-zinc-200 font-mono text-xs font-bold uppercase transition-all"
              >
                {t.locations.bookSpace}
              </button>
              <a
                href="https://maps.google.com/?q=Mussafah+Industrial+Abu+Dhabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>{t.locations.getDirections}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Dry Hire Modal */}
      {selectedStudioForHire && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#0E0E12] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">Dry-Hire Reservation</span>
                <h3 className="text-xl font-bold font-serif text-white">{selectedStudioForHire}</h3>
              </div>
              <button onClick={() => setSelectedStudioForHire(null)} className="p-1 text-zinc-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-zinc-300">
              <p>
                Dry-hire studio rates include full access to the cyclorama/soundstage, lighting grip packages, power distribution, and private client suites.
              </p>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 font-mono">
                <div className="flex justify-between text-zinc-400">
                  <span>Half-Day Dry Hire (4h):</span>
                  <span className="text-white font-bold">AED 3,200</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Full-Day Dry Hire (8h):</span>
                  <span className="text-white font-bold">AED 5,500</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Overtime Rate:</span>
                  <span className="text-amber-400 font-bold">AED 600 / hr</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#inquiry"
                onClick={() => setSelectedStudioForHire(null)}
                className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase text-center"
              >
                Proceed to Studio Booking Form
              </a>
              <a
                href={`https://wa.me/971506009200?text=${encodeURIComponent(
                  `Hello FRAMEHAUS, I want to check studio dry-hire availability for ${selectedStudioForHire}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs font-mono text-emerald-400 hover:underline"
              >
                Check Real-Time Availability via WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
