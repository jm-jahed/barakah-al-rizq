'use client';

import React, { useState } from 'react';
import { VeritasNav } from './VeritasNav';
import { VeritasHero } from './VeritasHero';
import { TrustStrip } from './TrustStrip';
import { PracticeAreas } from './PracticeAreas';
import { MatterAssessmentTool } from './MatterAssessmentTool';
import { HowWeWork } from './HowWeWork';
import { IndustrySolutions } from './IndustrySolutions';
import { JurisdictionComparison } from './JurisdictionComparison';
import { CaseStudySection } from './CaseStudySection';
import { WhyVeritas } from './WhyVeritas';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { UaeLocations } from './UaeLocations';
import { Testimonials } from './Testimonials';
import { ConsultationForm } from './ConsultationForm';
import { VeritasFAQ } from './VeritasFAQ';
import { VeritasFinalCTA } from './VeritasFinalCTA';
import { VeritasFooter } from './VeritasFooter';
import { VeritasPracticeArea } from '@/data/veritasData';

interface VeritasShowcaseProps {
  standalone?: boolean;
}

export const VeritasShowcase: React.FC<VeritasShowcaseProps> = ({ standalone = true }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [initialMatterType, setInitialMatterType] = useState<string>('Corporate & Commercial');
  const [initialEngagementMode, setInitialEngagementMode] = useState<string>('Bespoke Fixed Fee');

  const handleOpenConsultation = (matterType?: string, engagementMode?: string) => {
    if (matterType) setInitialMatterType(matterType);
    if (engagementMode) setInitialEngagementMode(engagementMode);
    setIsConsultationModalOpen(true);
  };

  const scrollToPractices = () => {
    const el = document.getElementById('practices');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#FAF8F5] font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* Navbar */}
      <VeritasNav
        onOpenConsultationModal={() => handleOpenConsultation()}
      />

      <main id="top">
        
        {/* Authoritative Hero */}
        <VeritasHero
          onOpenConsultationModal={() => handleOpenConsultation()}
          onExplorePractices={scrollToPractices}
        />

        {/* Client Logos Strip */}
        <TrustStrip />

        {/* 10 Practice Areas */}
        <PracticeAreas
          onOpenConsultationWithPractice={(area: VeritasPracticeArea) => handleOpenConsultation(area.title)}
        />

        {/* Interactive Matter Assessment Tool */}
        <MatterAssessmentTool
          onOpenConsultationWithAssessment={(matter: string, stage: string, mode: string) =>
            handleOpenConsultation(`Assessment Matter: ${matter} (${stage})`, mode)
          }
        />

        {/* 5-Step Process Timeline */}
        <HowWeWork />

        {/* 7 Industry Sectors */}
        <IndustrySolutions />

        {/* DIFC vs ADGM vs Onshore Comparison */}
        <JurisdictionComparison
          onOpenConsultation={() => handleOpenConsultation('UAE Jurisdiction Structuring Advisory')}
        />

        {/* Meridian Capital Case Study */}
        <CaseStudySection
          onOpenConsultation={() => handleOpenConsultation('DIFC Foundation & Restructuring Advisory')}
        />

        {/* 6 Legal Pillars */}
        <WhyVeritas />

        {/* Senior Partners & Counsel */}
        <LeadershipSection />

        {/* Editorial Insights Journal */}
        <InsightsSection />

        {/* 3 UAE Office Chambers */}
        <UaeLocations
          onOpenConsultation={() => handleOpenConsultation('Chambers Office Meeting')}
        />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Inline Lead Form */}
        <ConsultationForm
          isOpen={false}
          initialMatterType={initialMatterType}
          initialEngagementMode={initialEngagementMode}
        />

        {/* Accordion FAQ */}
        <VeritasFAQ />

        {/* Final Executive CTA */}
        <VeritasFinalCTA
          onOpenConsultationModal={() => handleOpenConsultation()}
        />

      </main>

      {/* Footer */}
      <VeritasFooter />

      {/* Modal Consultation Form */}
      {isConsultationModalOpen && (
        <ConsultationForm
          isOpen={true}
          onClose={() => setIsConsultationModalOpen(false)}
          initialMatterType={initialMatterType}
          initialEngagementMode={initialEngagementMode}
        />
      )}

    </div>
  );
};
