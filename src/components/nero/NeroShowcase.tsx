'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Compass, Phone, MessageSquare, Sliders, Layers, Sparkles, MapPin, Award, ArrowRight } from 'lucide-react';
import { NERO_BRAND, YACHT_FLEET_DATA, YachtVessel } from '@/data/neroData';
import { NeroHero } from './NeroHero';
import { NeroTrustBar } from './NeroTrustBar';
import { NeroLiveSeaState } from './NeroLiveSeaState';
import { NeroFleetMatrix } from './NeroFleetMatrix';
import { NeroDeckTourModal } from './NeroDeckTourModal';
import { NeroCalculator } from './NeroCalculator';
import { NeroItineraryExplorer } from './NeroItineraryExplorer';
import { NeroServices } from './NeroServices';
import { NeroCaseStudy } from './NeroCaseStudy';
import { NeroFaq } from './NeroFaq';
import { NeroContact } from './NeroContact';
import { NeroCharterModal } from './NeroCharterModal';
import { NeroFooter } from './NeroFooter';

interface NeroShowcaseProps {
  standalone?: boolean;
}

export const NeroShowcase: React.FC<NeroShowcaseProps> = ({ standalone = true }) => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingYachtId, setBookingYachtId] = useState<string>('nero-sovereign');
  const [activeTourYacht, setActiveTourYacht] = useState<YachtVessel | null>(null);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  const [calcSelectedYachtId, setCalcSelectedYachtId] = useState<string>('nero-sovereign');

  const handleOpenBooking = (yachtId?: string) => {
    if (yachtId) setBookingYachtId(yachtId);
    setIsBookingOpen(true);
  };

  const handleOpenDeckTour = (yacht: YachtVessel) => {
    setActiveTourYacht(yacht);
    setIsTourOpen(true);
  };

  const handleSelectForCalc = (yachtId: string) => {
    setCalcSelectedYachtId(yachtId);
    const element = document.getElementById('charter-calc');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ── STICKY TOP NAVIGATION BAR ── */}
      <header className="sticky top-0 z-40 bg-[#030712]/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.35)]">
              <div className="w-full h-full bg-[#04080F] rounded-[10px] flex items-center justify-center">
                <Anchor className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                NERO <span className="text-cyan-400">MARINE</span>
              </span>
              <span className="block text-[10px] font-mono text-cyan-300 tracking-widest uppercase">
                Dubai Harbour • Berth A-14
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-gray-300">
            <a href="#fleet-matrix" className="hover:text-cyan-400 transition-colors">FLEET MATRIX</a>
            <a href="#charter-calc" className="hover:text-cyan-400 transition-colors">APA CALCULATOR</a>
            <a href="#itineraries" className="hover:text-cyan-400 transition-colors">ITINERARIES</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">MARINA DESKS</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971508821122"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#081528] border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold hover:bg-[#0E2038] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP</span>
            </a>

            <button
              type="button"
              onClick={() => handleOpenBooking()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer flex items-center gap-2"
            >
              <Anchor className="w-3.5 h-3.5" />
              <span>RESERVE CHARTER</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <NeroHero
        onOpenBooking={() => handleOpenBooking()}
        onSelectVessel={(vId) => {
          handleSelectForCalc(vId);
        }}
      />

      {/* ── TRUST & ACCREDITATIONS BAR ── */}
      <NeroTrustBar />

      {/* ── LIVE TELEMETRY & SEA STATE ── */}
      <NeroLiveSeaState />

      {/* ── INTERACTIVE FLEET MATRIX & TECH SPECS ── */}
      <NeroFleetMatrix
        onOpenBooking={(vId) => handleOpenBooking(vId)}
        onOpenDeckTour={(yacht) => handleOpenDeckTour(yacht)}
        onSelectForCalculator={(vId) => handleSelectForCalc(vId)}
      />

      {/* ── INTERACTIVE APA & CHARTER COST CALCULATOR (AED) ── */}
      <NeroCalculator
        initialYachtId={calcSelectedYachtId}
        onOpenBooking={() => handleOpenBooking(calcSelectedYachtId)}
      />

      {/* ── SIGNATURE MARINE ITINERARY EXPLORER ── */}
      <NeroItineraryExplorer onOpenBooking={() => handleOpenBooking()} />

      {/* ── FULL SPECTRUM SERVICES ── */}
      <NeroServices onOpenBooking={() => handleOpenBooking()} />

      {/* ── CASE STUDY: SIR BANI YAS & F1 ── */}
      <NeroCaseStudy onOpenBooking={() => handleOpenBooking()} />

      {/* ── FAQ ACCORDION ── */}
      <NeroFaq />

      {/* ── 24/7 CONTACT & MARINA DESKS ── */}
      <NeroContact />

      {/* ── FOOTER ── */}
      <NeroFooter />

      {/* ── INTERACTIVE 360 DECK TOUR MODAL ── */}
      <NeroDeckTourModal
        yacht={activeTourYacht}
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onBookVessel={(vId) => {
          setIsTourOpen(false);
          handleOpenBooking(vId);
        }}
      />

      {/* ── HIGH-TRUST VIP CHARTER BOOKING MODAL ── */}
      <NeroCharterModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedYachtId={bookingYachtId}
      />

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/971508821122?text=Hello%20NERO%20MARINE,%20I%20would%20like%20to%20inquire%20about%20a%20superyacht%20charter%20in%20Dubai."
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

export default NeroShowcase;
