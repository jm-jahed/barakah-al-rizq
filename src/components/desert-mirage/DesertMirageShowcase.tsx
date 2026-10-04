'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, ArrowRight, ShieldCheck, Moon, Clock, MapPin, Phone, Mail, Share2 } from 'lucide-react';
import { DESERT_MIRAGE_BRAND } from '@/data/desertMirageData';
import { DesertMirageHero } from './DesertMirageHero';
import { ExpeditionSelector } from './ExpeditionSelector';
import { ExperienceTimeline } from './ExperienceTimeline';
import { DuneExperience } from './DuneExperience';
import { PrivateSafari } from './PrivateSafari';
import { DesertCamp } from './DesertCamp';
import { DesertDining } from './DesertDining';
import { NightSky } from './NightSky';
import { ExpeditionBooking } from './ExpeditionBooking';
import { Availability } from './Availability';
import { DesertMap } from './DesertMap';
import { DesertStories } from './DesertStories';
import { DesertGallery } from './DesertGallery';
import { Safety } from './Safety';
import { CorporateExperience } from './CorporateExperience';
import { Concierge } from './Concierge';
import { Testimonials } from './Testimonials';
import { DesertMirageModal } from './DesertMirageModal';

interface DesertMirageShowcaseProps {
  standalone?: boolean;
}

export const DesertMirageShowcase: React.FC<DesertMirageShowcaseProps> = ({ standalone = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalExpeditionId, setModalExpeditionId] = useState<string | undefined>(undefined);
  const [modalIntent, setModalIntent] = useState<string | undefined>(undefined);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenBooking = (expeditionId?: string, intent?: string) => {
    setModalExpeditionId(expeditionId);
    setModalIntent(intent || 'Reserve Luxury Desert Expedition');
    setIsModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Expeditions', id: 'expeditions' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Dunes', id: 'dune-experience' },
    { label: 'Sanctuary Camp', id: 'camp' },
    { label: 'Dining', id: 'dining' },
    { label: 'Night Sky', id: 'night-sky' },
    { label: 'Book Expedition', id: 'booking' },
    { label: 'Stories', id: 'stories' },
    { label: 'Corporate', id: 'corporate' },
    { label: 'Concierge', id: 'concierge' }
  ];

  return (
    <div className="min-h-screen bg-[#090706] text-[#F3EFEA] font-sans selection:bg-[#C9A265]/30 selection:text-[#E8D7B8]">
      {/* Top Banner: WebStudio AE Showcase Navigation */}
      <div className="bg-[#050403] border-b border-[#C9A265]/15 text-xs font-mono py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-stone-400">
            <span className="text-stone-300 font-semibold">Project #69</span>
            <span className="text-stone-700">/</span>
            <span className="hidden sm:inline text-stone-400">Luxury Desert Tourism & Safaris</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[11px] text-[#C9A265] bg-[#1A1410] border border-[#C9A265]/30 px-2 py-0.5 rounded">
              Top 20 Flagship Ready
            </span>
            <button
              onClick={() => handleOpenBooking(undefined, 'Studio Direct Consultation for Desert Mirage')}
              className="text-[#E8D7B8] hover:text-[#C9A265] font-bold"
            >
              Consult Studio →
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Editorial Header */}
      <header className="sticky top-0 z-40 bg-[#090706]/90 backdrop-blur-xl border-b border-[#C9A265]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Brand Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C9A265] to-[#8C6228] p-0.5 shadow-lg shadow-[#C9A265]/20">
                <div className="w-full h-full bg-[#090706] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#C9A265]" />
                </div>
              </div>
              <div>
                <span className="text-lg font-serif tracking-tight text-white">
                  {DESERT_MIRAGE_BRAND.name}
                </span>
                <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-[#C9A265] px-1.5 py-0.5 rounded bg-[#1A1410] border border-[#C9A265]/30">
                  DUBAI SAFARIS
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-mono tracking-wider text-stone-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-[#E8D7B8] transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A265] via-[#D8B478] to-[#A87B38] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C9A265]/20 hover:scale-[1.02] transition-all"
              >
                <span>Book Expedition</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-xl bg-[#140F0C] border border-stone-800 text-stone-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden border-b border-stone-800 bg-[#0C0907] px-4 pt-2 pb-6 space-y-3"
            >
              <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="p-2.5 rounded-lg bg-[#140F0C] text-stone-300 hover:text-[#C9A265] text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#C9A265] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Book Expedition</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Experience */}
      <DesertMirageHero
        onOpenBooking={handleOpenBooking}
        onScrollToSection={scrollToSection}
      />

      {/* Expedition Selector */}
      <ExpeditionSelector onOpenBooking={handleOpenBooking} />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Dune Experience & Route Control */}
      <DuneExperience />

      {/* Private Safari */}
      <PrivateSafari onOpenBooking={handleOpenBooking} />

      {/* Luxury Desert Camp Sanctuary */}
      <DesertCamp />

      {/* Desert Dining */}
      <DesertDining />

      {/* Night Sky & Stargazing */}
      <NightSky />

      {/* Smart Expedition Booking Configurator */}
      <ExpeditionBooking onOpenModal={handleOpenBooking} />

      {/* Live Availability Status */}
      <Availability />

      {/* UAE Destination Geography Map */}
      <DesertMap />

      {/* Stories From The Sand */}
      <DesertStories />

      {/* Photo Gallery Archive */}
      <DesertGallery />

      {/* Engineered Safety & Technical Standards */}
      <Safety />

      {/* Corporate & VIP Privatization */}
      <CorporateExperience onOpenModal={handleOpenBooking} />

      {/* Dedicated Desert Concierge */}
      <Concierge onOpenModal={handleOpenBooking} />

      {/* Guest Reflections & Testimonials */}
      <Testimonials />

      {/* Final Cinematic Ending Section */}
      <section className="relative py-28 bg-gradient-to-b from-[#0B0907] via-[#090706] to-[#050403] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C9A265]/10 blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE HORIZON AWAITS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight">
            The Desert is Waiting.
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto leading-relaxed font-light">
            One evening. One horizon. An experience that stays with you forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A265] via-[#D8B478] to-[#A87B38] text-[#090706] font-mono font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#C9A265]/20 hover:scale-[1.02] transition-all"
            >
              <span>Begin Your Expedition</span>
            </button>

            <button
              onClick={() => handleOpenBooking(undefined, 'VIP Concierge Direct Inquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#140F0C] hover:bg-[#1C1612] text-stone-300 hover:text-white font-mono text-xs uppercase tracking-wider border border-stone-800 transition-all"
            >
              <span>Contact Concierge</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040302] border-t border-stone-900 text-stone-400 text-xs py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#C9A265] flex items-center justify-center text-[#090706] font-bold font-mono text-xs">
                  M
                </div>
                <span className="text-base font-serif text-white">{DESERT_MIRAGE_BRAND.name}</span>
              </div>
              <p className="text-stone-400 leading-relaxed font-light">
                {DESERT_MIRAGE_BRAND.legalName}
              </p>
              <p className="text-stone-500 text-[11px] font-mono">
                {DESERT_MIRAGE_BRAND.tagline}
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <div className="font-mono text-white font-bold uppercase tracking-wider text-xs">Sanctuary Gate</div>
              <p className="text-stone-400 font-light">{DESERT_MIRAGE_BRAND.location}</p>
              <p className="text-[#C9A265] font-mono mt-1">Tel: {DESERT_MIRAGE_BRAND.conciergePhone}</p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2">
              <div className="font-mono text-white font-bold uppercase tracking-wider text-xs">Expedition Index</div>
              <ul className="space-y-1.5 text-stone-400 font-light">
                <li><button onClick={() => scrollToSection('expeditions')} className="hover:text-[#C9A265]">01 Dune Ascent 4x4</button></li>
                <li><button onClick={() => scrollToSection('expeditions')} className="hover:text-[#C9A265]">02 Golden Hour Sunset</button></li>
                <li><button onClick={() => scrollToSection('expeditions')} className="hover:text-[#C9A265]">03 Nomad Night Overnight</button></li>
                <li><button onClick={() => scrollToSection('expeditions')} className="hover:text-[#C9A265]">04 Royal Oasis Safari</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-[#C9A265]">Bespoke Configurator</button></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <div className="font-mono text-white font-bold uppercase tracking-wider text-xs">Private Dispatch</div>
              <p className="text-stone-400 text-[11px] leading-relaxed font-light">
                Chauffeured departures daily from all Dubai & Abu Dhabi luxury residences, hotels, and private aviation FBOs.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => handleOpenBooking(undefined, 'Concierge Inquiry')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#140F0C] border border-[#C9A265]/30 text-[#E8D7B8] hover:text-white font-mono text-[11px]"
                >
                  Request Dispatch Call
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px] font-mono">
            <div>
              © {new Date().getFullYear()} {DESERT_MIRAGE_BRAND.legalName}. Engineered by <Link href="/" className="text-[#C9A265] hover:underline">WebStudio AE</Link>.
            </div>
            <div className="flex items-center gap-4">
              <span>Conservation Ethics</span>
              <span>•</span>
              <span>Terms of Expedition</span>
              <span>•</span>
              <span>DTCM License</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Reservation Modal */}
      <DesertMirageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultExpeditionId={modalExpeditionId}
        defaultIntent={modalIntent}
      />
    </div>
  );
};
