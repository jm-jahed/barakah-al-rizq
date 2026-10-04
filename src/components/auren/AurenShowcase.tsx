'use client';

import React, { useState } from 'react';
import { AurenNav } from './AurenNav';
import { AurenHero } from './AurenHero';
import { TrustStrip } from './TrustStrip';
import { AurenCatalogExplorer } from './AurenCatalogExplorer';
import { PortfolioAllocationSimulator } from './PortfolioAllocationSimulator';
import { FamilyOfficeFoundationBuilder } from './FamilyOfficeFoundationBuilder';
import { AdvisoryServices } from './AdvisoryServices';
import { WealthDiscoveryTool } from './WealthDiscoveryTool';
import { HowWeWork } from './HowWeWork';
import { ClientProfiles } from './ClientProfiles';
import { CaseStudySection } from './CaseStudySection';
import { WhyAuren } from './WhyAuren';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { UaeLocations } from './UaeLocations';
import { Testimonials } from './Testimonials';
import { ConsultationForm } from './ConsultationForm';
import { PrivateWealthAuditModal } from './PrivateWealthAuditModal';
import { AurenFAQ } from './AurenFAQ';
import { AurenFinalCTA } from './AurenFinalCTA';
import { AurenFooter } from './AurenFooter';
import { AurenService } from '@/data/aurenData';

interface AurenShowcaseProps {
  standalone?: boolean;
}

export const AurenShowcase: React.FC<AurenShowcaseProps> = ({ standalone = true }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [initialGoalText, setInitialGoalText] = useState<string>('Wealth Management Advisory');
  const [initialTopicText, setInitialTopicText] = useState<string>('Global Multi-Asset Allocation');

  const handleOpenConsultation = (goalText?: string, topicText?: string) => {
    if (goalText) setInitialGoalText(goalText);
    if (topicText) setInitialTopicText(topicText);
    setIsConsultationModalOpen(true);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060A0E] text-[#F8F6F0] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-clip max-w-full">
      
      {/* Navbar with Audit Check Trigger */}
      <AurenNav
        onOpenConsultationModal={() => handleOpenConsultation()}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      <main id="top">
        
        {/* Cinematic Executive Hero */}
        <AurenHero
          onOpenConsultationModal={() => handleOpenConsultation()}
          onExploreApproach={scrollToCatalog}
        />

        {/* Institutional Logos Strip */}
        <TrustStrip />

        {/* 200+ Granular Private Wealth & PE Catalog */}
        <AurenCatalogExplorer
          onOpenConsultationWithService={(serviceName: string) =>
            handleOpenConsultation(serviceName, 'Private Advisory Mandate')
          }
        />

        {/* Interactive Multi-Asset Allocation & 20-Year Growth Simulator */}
        <PortfolioAllocationSimulator
          onOpenConsultation={(mandate?: string) =>
            handleOpenConsultation(mandate || 'Discretionary Portfolio Mandate', 'Asset Allocation Modeling')
          }
        />

        {/* Interactive DIFC & ADGM Foundation Structuring Engine */}
        <FamilyOfficeFoundationBuilder
          onOpenConsultation={(mandate?: string) =>
            handleOpenConsultation(mandate || 'DIFC/ADGM Foundation Structuring', 'Generational Ring-Fencing')
          }
        />

        {/* 8 Core Advisory Disciplines */}
        <AdvisoryServices
          onOpenConsultationWithService={(srv: AurenService) => handleOpenConsultation(srv.title, srv.subtitle)}
        />

        {/* Interactive Wealth Discovery Priorities Tool */}
        <WealthDiscoveryTool
          onOpenConsultationWithGoal={(goal: string, topic: string) =>
            handleOpenConsultation(`${goal} Mandate (${topic})`, topic)
          }
        />

        {/* 5-Stage Timeline */}
        <HowWeWork />

        {/* 5 Client Profile Segments */}
        <ClientProfiles />

        {/* Confidential Family Office Case Study */}
        <CaseStudySection
          onOpenConsultation={() => handleOpenConsultation('Family Office Governance Mandate', 'Case Study Inquiry')}
        />

        {/* 6 Philosophy Pillars */}
        <WhyAuren />

        {/* Senior Managing Partners */}
        <LeadershipSection />

        {/* Wealth Insights Editorial Journal */}
        <InsightsSection />

        {/* DIFC & ADGM Office Chambers */}
        <UaeLocations
          onOpenConsultation={() => handleOpenConsultation('Private Chamber Meeting', 'DIFC / ADGM Desk')}
        />

        {/* Private Client Testimonials */}
        <Testimonials />

        {/* Inline Lead Form */}
        <ConsultationForm
          isOpen={false}
          initialGoalText={initialGoalText}
          initialTopicText={initialTopicText}
        />

        {/* Accordion FAQ */}
        <AurenFAQ />

        {/* Final Executive Closing CTA */}
        <AurenFinalCTA
          onOpenConsultationModal={() => handleOpenConsultation()}
        />

      </main>

      {/* Footer */}
      <AurenFooter />

      {/* Modal Consultation Form */}
      {isConsultationModalOpen && (
        <ConsultationForm
          isOpen={true}
          onClose={() => setIsConsultationModalOpen(false)}
          initialGoalText={initialGoalText}
          initialTopicText={initialTopicText}
        />
      )}

      {/* 5-Step Fiduciary Wealth Diagnostic Modal */}
      <PrivateWealthAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onOpenConsultation={(serviceName?: string) =>
          handleOpenConsultation(serviceName || 'Private Wealth Health Assessment', 'Fiduciary Audit')
        }
      />

    </div>
  );
};
