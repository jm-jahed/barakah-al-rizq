'use client';

import React, { useState } from 'react';
import { AzureLanguageProvider, useAzureLanguage } from '@/context/AzureLanguageContext';
import { AzureNav } from './AzureNav';
import { AzureHero } from './AzureHero';
import { TrustStrip } from './TrustStrip';
import { FleetShowcase } from './FleetShowcase';
import { CharterPlanner } from './CharterPlanner';
import { HowWeWork } from './HowWeWork';
import { ExperiencesSection } from './ExperiencesSection';
import { CaseStudySection } from './CaseStudySection';
import { WhyAzure } from './WhyAzure';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { MarinaLocations } from './MarinaLocations';
import { TestimonialsSection } from './TestimonialsSection';
import { BookingModal } from './BookingModal';
import { AzureFAQ } from './AzureFAQ';
import { AzureFinalCTA } from './AzureFinalCTA';
import { AzureFooter } from './AzureFooter';

interface AzureShowcaseProps {
  standalone?: boolean;
}

const AzureShowcaseContent: React.FC<AzureShowcaseProps> = ({ standalone = false }) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedYachtId, setSelectedYachtId] = useState<string | null>(null);
  const { isRtl } = useAzureLanguage();

  const handleOpenModal = (yachtId?: string) => {
    if (yachtId) setSelectedYachtId(yachtId);
    else setSelectedYachtId(null);
    setBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setBookingModalOpen(false);
    setSelectedYachtId(null);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#040B16] text-white selection:bg-amber-500 selection:text-black font-sans"
    >
      <AzureNav onOpenBookingModal={handleOpenModal} />
      <AzureHero onOpenBookingModal={handleOpenModal} />
      <TrustStrip />
      <FleetShowcase onOpenBookingModal={handleOpenModal} />
      <CharterPlanner onOpenBookingModal={handleOpenModal} />
      <HowWeWork />
      <ExperiencesSection onOpenBookingModal={handleOpenModal} />
      <CaseStudySection onOpenBookingModal={handleOpenModal} />
      <WhyAzure />
      <LeadershipSection />
      <InsightsSection />
      <MarinaLocations />
      <TestimonialsSection />
      <AzureFAQ />
      <AzureFinalCTA onOpenBookingModal={handleOpenModal} />
      <AzureFooter />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseModal}
        selectedYachtId={selectedYachtId}
      />
    </div>
  );
};

export const AzureShowcase: React.FC<AzureShowcaseProps> = (props) => {
  return (
    <AzureLanguageProvider>
      <AzureShowcaseContent {...props} />
    </AzureLanguageProvider>
  );
};