'use client';

import React, { useState } from 'react';
import { CorporateNav } from './CorporateNav';
import { CorporateHero } from './CorporateHero';
import { CorporateStats } from './CorporateStats';
import { CorporateDivisions } from './CorporateDivisions';
import { CorporateMandateCalculator } from './CorporateMandateCalculator';
import { CorporateCaseStudies } from './CorporateCaseStudies';
import { CorporateLeadership } from './CorporateLeadership';
import { CorporateGovernance } from './CorporateGovernance';
import { CorporateGlobalFootprint } from './CorporateGlobalFootprint';
import { CorporateInsights } from './CorporateInsights';
import { CorporateCaseModal } from './CorporateCaseModal';
import { CorporateMandateModal } from './CorporateMandateModal';
import { CorporateFooter } from './CorporateFooter';
import { CorporateCaseStudy } from '@/data/corporateEnterpriseData';

export const CorporateShowcase: React.FC = () => {
  const [isMandateModalOpen, setIsMandateModalOpen] = useState<boolean>(false);
  const [mandateContext, setMandateContext] = useState<string>('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CorporateCaseStudy | null>(null);

  const handleOpenMandateModal = (context: string = '') => {
    setMandateContext(context);
    setIsMandateModalOpen(true);
  };

  const handleCloseMandateModal = () => {
    setIsMandateModalOpen(false);
    setMandateContext('');
  };

  const handleSelectCaseStudy = (caseStudy: CorporateCaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleCloseCaseModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Executive Sticky Navbar */}
      <CorporateNav onOpenMandateModal={handleOpenMandateModal} />

      {/* 2. Cinematic Hero with Live Capital Telemetry Ticker */}
      <CorporateHero onOpenMandateModal={handleOpenMandateModal} />

      {/* 3. Audited Proof HUD & Statistics */}
      <CorporateStats />

      {/* 4. Multi-Sector Enterprise Divisions & Solutions */}
      <CorporateDivisions onOpenMandateModal={handleOpenMandateModal} />

      {/* 5. Interactive Mandate & Capital Allocation Simulator */}
      <CorporateMandateCalculator onOpenMandateModal={handleOpenMandateModal} />

      {/* 6. Flagship Enterprise Case Studies & Track Record */}
      <CorporateCaseStudies 
        onSelectCase={handleSelectCaseStudy}
        onOpenMandateModal={handleOpenMandateModal}
      />

      {/* 7. Executive Board & Senior Partners */}
      <CorporateLeadership onOpenMandateModal={handleOpenMandateModal} />

      {/* 8. Sovereign Compliance, Tax & ESG Net-Zero 2050 */}
      <CorporateGovernance />

      {/* 9. Global Footprint & Office Nodes */}
      <CorporateGlobalFootprint />

      {/* 10. Institutional Publications & Research Whitepapers */}
      <CorporateInsights />

      {/* 11. Regulatory & Compliance Footer */}
      <CorporateFooter />

      {/* Modal 1: Case Study Inspection Drawer */}
      <CorporateCaseModal
        caseStudy={selectedCaseStudy}
        onClose={handleCloseCaseModal}
        onOpenMandateModal={handleOpenMandateModal}
      />

      {/* Modal 2: Institutional Mandate RFP & NDA Submission Modal */}
      <CorporateMandateModal
        isOpen={isMandateModalOpen}
        onClose={handleCloseMandateModal}
        initialContext={mandateContext}
      />

    </div>
  );
};
