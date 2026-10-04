'use client';

import React, { useState } from 'react';
import { DunecraftNav } from './DunecraftNav';
import { DunecraftHero } from './DunecraftHero';
import { TrustStrip } from './TrustStrip';
import { ExperiencesShowcase } from './ExperiencesShowcase';
import { SafariPlanner } from './SafariPlanner';
import { HowWeWork } from './HowWeWork';
import { CorporateEvents } from './CorporateEvents';
import { CaseStudySection } from './CaseStudySection';
import { WhyDunecraft } from './WhyDunecraft';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { DepartureLocations } from './DepartureLocations';
import { TestimonialsSection } from './TestimonialsSection';
import { BookingModal } from './BookingModal';
import { DunecraftFAQ } from './DunecraftFAQ';
import { DunecraftFinalCTA } from './DunecraftFinalCTA';
import { DunecraftFooter } from './DunecraftFooter';

interface DunecraftShowcaseProps {
  standalone?: boolean;
}

export const DunecraftShowcase: React.FC<DunecraftShowcaseProps> = ({ standalone = false }) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedExpId, setSelectedExpId] = useState<string | null>(null);

  const handleOpenModal = (expId?: string) => {
    if (expId) setSelectedExpId(expId);
    else setSelectedExpId(null);
    setBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setBookingModalOpen(false);
    setSelectedExpId(null);
  };

  return (
    <div className="min-h-screen bg-[#1C0D02] text-white selection:bg-amber-500 selection:text-black font-sans">
      <DunecraftNav onOpenBookingModal={handleOpenModal} />
      <DunecraftHero onOpenBookingModal={handleOpenModal} />
      <TrustStrip />
      <ExperiencesShowcase onOpenBookingModal={handleOpenModal} />
      <SafariPlanner onOpenBookingModal={handleOpenModal} />
      <HowWeWork />
      <CorporateEvents onOpenBookingModal={handleOpenModal} />
      <CaseStudySection onOpenBookingModal={handleOpenModal} />
      <WhyDunecraft />
      <LeadershipSection />
      <InsightsSection />
      <DepartureLocations />
      <TestimonialsSection />
      <DunecraftFAQ />
      <DunecraftFinalCTA onOpenBookingModal={handleOpenModal} />
      <DunecraftFooter />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseModal}
        selectedExpId={selectedExpId}
      />
    </div>
  );
};