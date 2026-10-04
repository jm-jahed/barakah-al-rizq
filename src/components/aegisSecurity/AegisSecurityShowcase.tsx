'use client';

import React, { useState } from 'react';
import AegisNav from './AegisNav';
import AegisHero from './AegisHero';
import TrustStrip from './TrustStrip';
import CommandCenterExperience from './CommandCenterExperience';
import SecurityServicesSection from './SecurityServicesSection';
import InteractiveSecurityAssessment from './InteractiveSecurityAssessment';
import CoverageMapExperience from './CoverageMapExperience';
import WhySecurityMatters from './WhySecurityMatters';
import SecurityTechnologySection from './SecurityTechnologySection';
import SecurityPersonnelSection from './SecurityPersonnelSection';
import IndustriesProtected from './IndustriesProtected';
import DayToNightSecurityStory from './DayToNightSecurityStory';
import CaseStudiesSection from './CaseStudiesSection';
import SecurityProcessTimeline from './SecurityProcessTimeline';
import TrustAndStandards from './TrustAndStandards';
import TestimonialsSection from './TestimonialsSection';
import SecurityInsightsJournal from './SecurityInsightsJournal';
import SecurityAssessmentModal from './SecurityAssessmentModal';
import AegisFooter from './AegisFooter';

interface AegisSecurityShowcaseProps {
  standalone?: boolean;
}

export function AegisSecurityShowcase({ standalone = false }: AegisSecurityShowcaseProps) {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  const handleOpenAssessment = () => setAssessmentModalOpen(true);
  const handleCloseAssessment = () => setAssessmentModalOpen(false);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <AegisNav onOpenAssessment={handleOpenAssessment} />
      <AegisHero onOpenAssessment={handleOpenAssessment} />
      <TrustStrip />
      <CommandCenterExperience />
      <SecurityServicesSection onOpenAssessment={handleOpenAssessment} />
      <InteractiveSecurityAssessment />
      <CoverageMapExperience />
      <WhySecurityMatters />
      <SecurityTechnologySection />
      <SecurityPersonnelSection />
      <IndustriesProtected />
      <DayToNightSecurityStory />
      <CaseStudiesSection />
      <SecurityProcessTimeline />
      <TrustAndStandards />
      <TestimonialsSection />
      <SecurityInsightsJournal />
      <AegisFooter />

      <SecurityAssessmentModal isOpen={assessmentModalOpen} onClose={handleCloseAssessment} />
    </div>
  );
}

export default AegisSecurityShowcase;
