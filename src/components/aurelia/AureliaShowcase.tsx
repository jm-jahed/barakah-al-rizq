'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Key, MessageSquare, Sliders, Layers, Sparkles, MapPin, Award, ArrowRight } from 'lucide-react';
import { AURELIA_BRAND, AURELIA_RESIDENCES_DATA, AureliaResidence } from '@/data/aureliaData';
import { AureliaHero } from './AureliaHero';
import { AureliaTrustBar } from './AureliaTrustBar';
import { AureliaResidenceMatrix } from './AureliaResidenceMatrix';
import { AureliaResidenceModal } from './AureliaResidenceModal';
import { AureliaCalculator } from './AureliaCalculator';
import { AureliaConfigurator } from './AureliaConfigurator';
import { AureliaMaterialExplorer } from './AureliaMaterialExplorer';
import { AureliaDistrictExplorer } from './AureliaDistrictExplorer';
import { AureliaServices } from './AureliaServices';
import { AureliaCaseStudy } from './AureliaCaseStudy';
import { AureliaFaq } from './AureliaFaq';
import { AureliaContact } from './AureliaContact';
import { AureliaViewingModal } from './AureliaViewingModal';
import { AureliaFooter } from './AureliaFooter';

interface AureliaShowcaseProps {
  standalone?: boolean;
}

export const AureliaShowcase: React.FC<AureliaShowcaseProps> = ({ standalone = true }) => {
  const [isViewingOpen, setIsViewingOpen] = useState<boolean>(false);
  const [viewingEstateName, setViewingEstateName] = useState<string>('Aurelia Palm Waterfront Estate');
  const [activeResidence, setActiveResidence] = useState<AureliaResidence | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenViewing = (estateName?: string) => {
    if (estateName) setViewingEstateName(estateName);
    setIsViewingOpen(true);
  };

  const handleSelectResidence = (residence: AureliaResidence) => {
    setActiveResidence(residence);
    setIsModalOpen(true);
  };

  const scrollToResidences = () => {
    const el = document.getElementById('residences-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090C0E] text-gray-100 font-sans selection:bg-stone-500/30 selection:text-stone-200">
      
      {/* ── STICKY TOP NAVIGATION BAR ── */}
      <header className="sticky top-0 z-40 bg-[#090C0E]/90 backdrop-blur-xl border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-stone-400 via-stone-600 to-stone-900 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(214,211,209,0.2)]">
              <div className="w-full h-full bg-[#090C0E] rounded-[10px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-stone-300 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                  AURELIA <span className="text-stone-400">ESTATES</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold border border-amber-500/40">
                  ANIMATION #12 — AURELIA ESTATES — TESTING
                </span>
              </div>
              <span className="block text-[10px] font-mono text-stone-400/80 tracking-widest uppercase">
                DIFC Gate Village 3 • Level 7 Gallery
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-gray-300">
            <a href="#residences-section" className="hover:text-stone-300 transition-colors">12 ESTATES</a>
            <a href="#calc-section" className="hover:text-stone-300 transition-colors">CAPITAL CALCULATOR</a>
            <a href="#configurator" className="hover:text-stone-300 transition-colors">CONFIGURATOR</a>
            <a href="#services-20" className="hover:text-stone-300 transition-colors">20 SERVICES</a>
            <a href="#contact" className="hover:text-stone-300 transition-colors">DIFC GALLERY</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971508821122"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#13191D] border border-stone-700 text-stone-300 font-mono text-xs font-bold hover:bg-[#1A2228] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP</span>
            </a>

            <button
              type="button"
              onClick={() => handleOpenViewing()}
              className="px-5 py-2.5 rounded-xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <Key className="w-3.5 h-3.5" />
              <span>REQUEST VIEWING</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <AureliaHero
        onOpenViewing={() => handleOpenViewing()}
        onExploreResidences={scrollToResidences}
      />

      {/* ── TRUST & REGULATORY BAR ── */}
      <AureliaTrustBar />

      {/* ── RESIDENCE MATRIX (12 SIGNATURE ESTATES) ── */}
      <AureliaResidenceMatrix
        onSelectResidence={(res) => handleSelectResidence(res)}
        onRequestViewing={(name) => handleOpenViewing(name)}
      />

      {/* ── CAPITAL INVESTMENT CALCULATOR (AED) ── */}
      <AureliaCalculator onOpenViewing={() => handleOpenViewing()} />

      {/* ── BESPOKE MANSION CONFIGURATOR ── */}
      <AureliaConfigurator onOpenViewing={() => handleOpenViewing()} />

      {/* ── ARCHITECTURAL MATERIALS ATELIER ── */}
      <AureliaMaterialExplorer />

      {/* ── PRIME UAE DISTRICTS ── */}
      <AureliaDistrictExplorer />

      {/* ── 20 SOVEREIGN SERVICES ── */}
      <AureliaServices onOpenViewing={() => handleOpenViewing()} />

      {/* ── ROYAL COMPOUND CASE STUDY ── */}
      <AureliaCaseStudy onOpenViewing={() => handleOpenViewing()} />

      {/* ── UAE REAL ESTATE FAQ ── */}
      <AureliaFaq />

      {/* ── CONTACT & GALLERIES ── */}
      <AureliaContact />

      {/* ── FOOTER ── */}
      <AureliaFooter />

      {/* ── RESIDENCE SPECS & FLOOR PLAN MODAL ── */}
      <AureliaResidenceModal
        residence={activeResidence}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestViewing={(name) => {
          setIsModalOpen(false);
          handleOpenViewing(name);
        }}
      />

      {/* ── PRIVATE VIEWING MODAL ── */}
      <AureliaViewingModal
        isOpen={isViewingOpen}
        onClose={() => setIsViewingOpen(false)}
        preselectedResidence={viewingEstateName}
      />

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/971508821122?text=Hello%20Aurelia%20Estates,%20I%20would%20like%20to%20inquire%20about%20a%20private%20residence%20viewing."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Direct WhatsApp Concierge"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

    </div>
  );
};

export default AureliaShowcase;
