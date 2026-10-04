'use client';

import React, { useState } from 'react';
import { StayoraLanguageProvider, useStayoraLanguage } from '@/context/StayoraLanguageContext';
import { StayoraNav } from './StayoraNav';
import { StayoraHero } from './StayoraHero';
import { TrustStrip } from './TrustStrip';
import { ServicesSection } from './ServicesSection';
import { IncomeEstimator } from './IncomeEstimator';
import { HowWeWork } from './HowWeWork';
import { PropertiesShowcase } from './PropertiesShowcase';
import { CaseStudySection } from './CaseStudySection';
import { WhyStayora } from './WhyStayora';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { UaeLocations } from './UaeLocations';
import { TestimonialsSection } from './TestimonialsSection';
import { ConsultationModal } from './ConsultationModal';
import { StayoraFAQ } from './StayoraFAQ';
import { StayoraFinalCTA } from './StayoraFinalCTA';
import { StayoraFooter } from './StayoraFooter';

interface StayoraShowcaseProps {
  standalone?: boolean;
}

const StayoraShowcaseContent: React.FC<StayoraShowcaseProps> = ({ standalone = false }) => {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const { isRtl, language } = useStayoraLanguage();

  const handleOpenModal = () => setEstimateModalOpen(true);
  const handleCloseModal = () => setEstimateModalOpen(false);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#133C3E] text-white selection:bg-[#C85A32] selection:text-white ${
        language === 'ar' ? 'font-sans' : 'font-sans'
      }`}
    >
      <StayoraNav onOpenEstimateModal={handleOpenModal} />
      <StayoraHero onOpenEstimateModal={handleOpenModal} />
      <TrustStrip />
      <ServicesSection onOpenEstimateModal={handleOpenModal} />
      <IncomeEstimator onOpenEstimateModal={handleOpenModal} />
      <HowWeWork />
      <PropertiesShowcase onOpenEstimateModal={handleOpenModal} />
      <CaseStudySection onOpenEstimateModal={handleOpenModal} />
      <WhyStayora />
      <LeadershipSection />
      <InsightsSection />
      <UaeLocations />
      <TestimonialsSection />
      <StayoraFAQ />
      <StayoraFinalCTA onOpenEstimateModal={handleOpenModal} />
      <StayoraFooter />

      <ConsultationModal isOpen={estimateModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export const StayoraShowcase: React.FC<StayoraShowcaseProps> = (props) => {
  return (
    <StayoraLanguageProvider>
      <StayoraShowcaseContent {...props} />
    </StayoraLanguageProvider>
  );
};