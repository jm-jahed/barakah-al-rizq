'use client';

import React, { useState } from 'react';
import { RoadforgeLanguageProvider, useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';
import { RoadforgeNav } from './RoadforgeNav';
import { RoadforgeHero } from './RoadforgeHero';
import { TrustStrip } from './TrustStrip';
import { ServicesSection } from './ServicesSection';
import { CoverageMap } from './CoverageMap';
import { QuickRequestTool } from './QuickRequestTool';
import { HowWeWork } from './HowWeWork';
import { FleetInsurancePartners } from './FleetInsurancePartners';
import { CaseStudySection } from './CaseStudySection';
import { WhyRoadforge } from './WhyRoadforge';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { DispatchBases } from './DispatchBases';
import { TestimonialsSection } from './TestimonialsSection';
import { RequestFormModal } from './RequestFormModal';
import { RoadforgeFAQ } from './RoadforgeFAQ';
import { RoadforgeFinalCTA } from './RoadforgeFinalCTA';
import { RoadforgeFooter } from './RoadforgeFooter';

interface RoadforgeShowcaseProps {
  standalone?: boolean;
}

const RoadforgeShowcaseContent: React.FC<RoadforgeShowcaseProps> = ({ standalone = false }) => {
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const { isRtl } = useRoadforgeLanguage();

  const handleOpenModal = (issue?: string) => {
    if (issue) setSelectedIssue(issue);
    else setSelectedIssue(null);
    setRequestModalOpen(true);
  };

  const handleCloseModal = () => {
    setRequestModalOpen(false);
    setSelectedIssue(null);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0F172A] text-white selection:bg-[#EF4444] selection:text-white font-sans"
    >
      <RoadforgeNav onOpenRequestModal={handleOpenModal} />
      <RoadforgeHero onOpenRequestModal={handleOpenModal} />
      <TrustStrip />
      <ServicesSection onOpenRequestModal={handleOpenModal} />
      <CoverageMap />
      <QuickRequestTool onOpenRequestModal={handleOpenModal} />
      <HowWeWork />
      <FleetInsurancePartners onOpenRequestModal={handleOpenModal} />
      <CaseStudySection onOpenRequestModal={handleOpenModal} />
      <WhyRoadforge />
      <LeadershipSection />
      <InsightsSection />
      <DispatchBases />
      <TestimonialsSection />
      <RoadforgeFAQ />
      <RoadforgeFinalCTA onOpenRequestModal={handleOpenModal} />
      <RoadforgeFooter />

      <RequestFormModal
        isOpen={requestModalOpen}
        onClose={handleCloseModal}
        initialIssue={selectedIssue}
      />
    </div>
  );
};

export const RoadforgeShowcase: React.FC<RoadforgeShowcaseProps> = (props) => {
  return (
    <RoadforgeLanguageProvider>
      <RoadforgeShowcaseContent {...props} />
    </RoadforgeLanguageProvider>
  );
};