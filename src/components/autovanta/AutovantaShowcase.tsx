'use client';

import React, { useState } from 'react';
import { AutovantaLanguageProvider, useAutovantaLanguage } from '@/context/AutovantaLanguageContext';
import { AutovantaNav } from './AutovantaNav';
import { AutovantaHero } from './AutovantaHero';
import { TrustStrip } from './TrustStrip';
import { ServicesSection } from './ServicesSection';
import { InstantQuoteTool } from './InstantQuoteTool';
import { HowWeWork } from './HowWeWork';
import { FleetServices } from './FleetServices';
import { CaseStudySection } from './CaseStudySection';
import { WhyAutovanta } from './WhyAutovanta';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { LocationsSection } from './LocationsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BookingModal } from './BookingModal';
import { AutovantaFAQ } from './AutovantaFAQ';
import { AutovantaFinalCTA } from './AutovantaFinalCTA';
import { AutovantaFooter } from './AutovantaFooter';

interface AutovantaShowcaseProps {
  standalone?: boolean;
}

const AutovantaShowcaseContent: React.FC<AutovantaShowcaseProps> = ({ standalone = false }) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const { isRtl } = useAutovantaLanguage();

  const handleOpenModal = () => setBookingModalOpen(true);
  const handleCloseModal = () => setBookingModalOpen(false);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0F1012] text-white selection:bg-[#FF5722] selection:text-white font-sans"
    >
      <AutovantaNav onOpenBookingModal={handleOpenModal} />
      <AutovantaHero onOpenBookingModal={handleOpenModal} />
      <TrustStrip />
      <ServicesSection onOpenBookingModal={handleOpenModal} />
      <InstantQuoteTool onOpenBookingModal={handleOpenModal} />
      <HowWeWork />
      <FleetServices onOpenBookingModal={handleOpenModal} />
      <CaseStudySection onOpenBookingModal={handleOpenModal} />
      <WhyAutovanta />
      <LeadershipSection />
      <InsightsSection />
      <LocationsSection />
      <TestimonialsSection />
      <AutovantaFAQ />
      <AutovantaFinalCTA onOpenBookingModal={handleOpenModal} />
      <AutovantaFooter />

      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export const AutovantaShowcase: React.FC<AutovantaShowcaseProps> = (props) => {
  return (
    <AutovantaLanguageProvider>
      <AutovantaShowcaseContent {...props} />
    </AutovantaLanguageProvider>
  );
};