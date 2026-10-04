'use client';

import React, { useState } from 'react';
import { SkyvaultLanguageProvider, useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';
import { SkyvaultNav } from './SkyvaultNav';
import { SkyvaultHero } from './SkyvaultHero';
import { TrustStrip } from './TrustStrip';
import { ServicesSection } from './ServicesSection';
import { AircraftManagementProgram } from './AircraftManagementProgram';
import { HowWeWork } from './HowWeWork';
import { VipGroundServices } from './VipGroundServices';
import { CaseStudySection } from './CaseStudySection';
import { WhySkyvault } from './WhySkyvault';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { OperationalBases } from './OperationalBases';
import { TestimonialsSection } from './TestimonialsSection';
import { ContactModal } from './ContactModal';
import { SkyvaultFAQ } from './SkyvaultFAQ';
import { SkyvaultFinalCTA } from './SkyvaultFinalCTA';
import { SkyvaultFooter } from './SkyvaultFooter';

interface SkyvaultShowcaseProps {
  standalone?: boolean;
}

const SkyvaultShowcaseContent: React.FC<SkyvaultShowcaseProps> = ({ standalone = false }) => {
  const { isRtl } = useSkyvaultLanguage();
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | null>(null);

  const handleOpenModal = (title?: string) => {
    if (title) setSelectedServiceTitle(title);
    else setSelectedServiceTitle(null);
    setContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setContactModalOpen(false);
    setSelectedServiceTitle(null);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#07090E] text-white selection:bg-[#E5C378] selection:text-black font-sans ${
        isRtl ? 'text-right' : 'text-left'
      }`}
    >
      <SkyvaultNav onOpenContactModal={handleOpenModal} />
      <SkyvaultHero onOpenContactModal={handleOpenModal} />
      <TrustStrip />
      <ServicesSection onOpenContactModal={handleOpenModal} />
      <AircraftManagementProgram onOpenContactModal={handleOpenModal} />
      <HowWeWork />
      <VipGroundServices onOpenContactModal={handleOpenModal} />
      <CaseStudySection onOpenContactModal={handleOpenModal} />
      <WhySkyvault />
      <LeadershipSection />
      <InsightsSection />
      <OperationalBases />
      <TestimonialsSection />
      <SkyvaultFAQ />
      <SkyvaultFinalCTA onOpenContactModal={handleOpenModal} />
      <SkyvaultFooter />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={handleCloseModal}
        serviceTitle={selectedServiceTitle}
      />
    </div>
  );
};

export const SkyvaultShowcase: React.FC<SkyvaultShowcaseProps> = (props) => {
  return (
    <SkyvaultLanguageProvider>
      <SkyvaultShowcaseContent {...props} />
    </SkyvaultLanguageProvider>
  );
};