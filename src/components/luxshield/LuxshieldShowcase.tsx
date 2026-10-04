'use client';

import React, { useState } from 'react';
import { LuxshieldNav } from './LuxshieldNav';
import { LuxshieldHero } from './LuxshieldHero';
import { TrustStrip } from './TrustStrip';
import { ServicesSection } from './ServicesSection';
import { BeforeAfterGallery } from './BeforeAfterGallery';
import { PackageCalculator } from './PackageCalculator';
import { HowWeWork } from './HowWeWork';
import { CaseStudySection } from './CaseStudySection';
import { WhyLuxshield } from './WhyLuxshield';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { StudioLocations } from './StudioLocations';
import { TestimonialsSection } from './TestimonialsSection';
import { BookingModal } from './BookingModal';
import { LuxshieldFAQ } from './LuxshieldFAQ';
import { LuxshieldFinalCTA } from './LuxshieldFinalCTA';
import { LuxshieldFooter } from './LuxshieldFooter';

interface LuxshieldShowcaseProps {
  standalone?: boolean;
}

export const LuxshieldShowcase: React.FC<LuxshieldShowcaseProps> = ({ standalone = false }) => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  const handleOpenModal = (pkgId?: string) => {
    if (pkgId) setSelectedPackageId(pkgId);
    else setSelectedPackageId(null);
    setBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setBookingModalOpen(false);
    setSelectedPackageId(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white selection:bg-blue-600 selection:text-white font-sans">
      <LuxshieldNav onOpenBookingModal={handleOpenModal} />
      <LuxshieldHero onOpenBookingModal={handleOpenModal} />
      <TrustStrip />
      <ServicesSection onOpenBookingModal={handleOpenModal} />
      <BeforeAfterGallery />
      <PackageCalculator onOpenBookingModal={handleOpenModal} />
      <HowWeWork />
      <CaseStudySection onOpenBookingModal={handleOpenModal} />
      <WhyLuxshield />
      <LeadershipSection />
      <InsightsSection />
      <StudioLocations />
      <TestimonialsSection />
      <LuxshieldFAQ />
      <LuxshieldFinalCTA onOpenBookingModal={handleOpenModal} />
      <LuxshieldFooter />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseModal}
        selectedPackageId={selectedPackageId}
      />
    </div>
  );
};