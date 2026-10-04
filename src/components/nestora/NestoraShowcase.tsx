'use client';

import React, { useState } from 'react';
import { NestoraNav } from './NestoraNav';
import { NestoraHero } from './NestoraHero';
import { TrustStrip } from './TrustStrip';
import { NestoraCatalogExplorer } from './NestoraCatalogExplorer';
import { LandlordRentalYieldSimulator } from './LandlordRentalYieldSimulator';
import { ReraRentIncreaseCalculator } from './ReraRentIncreaseCalculator';
import { ServicesSection } from './ServicesSection';
import { RentalYieldEstimator } from './RentalYieldEstimator';
import { HowWeWork } from './HowWeWork';
import { CommunitiesSection } from './CommunitiesSection';
import { CaseStudySection } from './CaseStudySection';
import { WhyNestora } from './WhyNestora';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { UaeLocations } from './UaeLocations';
import { Testimonials } from './Testimonials';
import { ConsultationForm } from './ConsultationForm';
import { MaintenanceTicketPortalModal } from './MaintenanceTicketPortalModal';
import { NestoraFAQ } from './NestoraFAQ';
import { NestoraFinalCTA } from './NestoraFinalCTA';
import { NestoraFooter } from './NestoraFooter';
import { NestoraService } from '@/data/nestoraData';

interface NestoraShowcaseProps {
  standalone?: boolean;
}

export const NestoraShowcase: React.FC<NestoraShowcaseProps> = ({ standalone = true }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [initialServiceText, setInitialServiceText] = useState<string>('Full Landlord Property Management');
  const [initialYieldText, setInitialYieldText] = useState<string>('');

  const handleOpenConsultation = (serviceText?: string, yieldText?: string) => {
    if (serviceText) setInitialServiceText(serviceText);
    if (yieldText) setInitialYieldText(yieldText);
    setIsConsultationModalOpen(true);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#082023] text-[#F4EFE6] font-sans selection:bg-[#C5A059] selection:text-black overflow-x-clip max-w-full">
      
      {/* Navbar with 24/7 Helpdesk & Assessment Triggers */}
      <NestoraNav
        onOpenConsultationModal={() => handleOpenConsultation()}
        onOpenMaintenanceModal={() => setIsMaintenanceModalOpen(true)}
      />

      <main id="top">
        
        {/* Executive Real Estate Hero */}
        <NestoraHero
          onOpenConsultationModal={() => handleOpenConsultation()}
          onExploreServices={scrollToCatalog}
        />

        {/* Developer Partners Logos Strip */}
        <TrustStrip />

        {/* 200+ Granular Property Management & AMC Catalog */}
        <NestoraCatalogExplorer
          onOpenConsultationWithService={(serviceName: string) =>
            handleOpenConsultation(serviceName, 'Catalog Mandate Inquiry')
          }
        />

        {/* Interactive Rental Yield & 5-Year ROI Simulator */}
        <LandlordRentalYieldSimulator
          onOpenConsultation={(mandateText?: string) =>
            handleOpenConsultation(mandateText || 'Rental Yield Optimization', 'Cashflow Modeling')
          }
        />

        {/* Official RERA Decree No. 43/2013 Rent Increase Engine */}
        <ReraRentIncreaseCalculator
          onOpenConsultation={(mandateText?: string) =>
            handleOpenConsultation(mandateText || 'RERA Legal Rent Increase Notice', 'Statutory Increase')
          }
        />

        {/* 8 Core Landlord Practices */}
        <ServicesSection
          onOpenConsultationWithService={(srv: NestoraService) => handleOpenConsultation(srv.title)}
        />

        {/* Quick Yield Estimator Strip */}
        <RentalYieldEstimator
          onOpenConsultationWithYield={(price: number, rent: number, netYield: number) =>
            handleOpenConsultation(`Property Management Audit (Est. Net Yield: ${netYield}%)`)
          }
        />

        {/* 5-Stage Landlord Process */}
        <HowWeWork />

        {/* 6 Prime Residential Communities */}
        <CommunitiesSection
          onSelectCommunityForYield={(communityName) => {
            const el = document.getElementById('rental-yield-simulator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreCatalogForCommunity={(communityName) => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Serenity Tower Case Study */}
        <CaseStudySection
          onOpenConsultation={() => handleOpenConsultation('Multi-Unit Portfolio Management')}
        />

        {/* 6 Core Landlord Pillars */}
        <WhyNestora />

        {/* Senior Asset Directors */}
        <LeadershipSection />

        {/* Landlord Advisory Journal */}
        <InsightsSection />

        {/* 2 UAE Office Chambers */}
        <UaeLocations
          onOpenConsultation={() => handleOpenConsultation('In-Person Portfolio Meeting')}
        />

        {/* Verified Landlord Testimonials */}
        <Testimonials />

        {/* Inline Lead Form */}
        <ConsultationForm
          isOpen={false}
          initialServiceText={initialServiceText}
          initialYieldText={initialYieldText}
        />

        {/* Accordion FAQ */}
        <NestoraFAQ />

        {/* Final Closing CTA */}
        <NestoraFinalCTA
          onOpenConsultationModal={() => handleOpenConsultation()}
        />

      </main>

      {/* Footer */}
      <NestoraFooter />

      {/* Modal Consultation Form */}
      {isConsultationModalOpen && (
        <ConsultationForm
          isOpen={true}
          onClose={() => setIsConsultationModalOpen(false)}
          initialServiceText={initialServiceText}
          initialYieldText={initialYieldText}
        />
      )}

      {/* 24/7 Rapid Maintenance Helpdesk Portal Modal */}
      <MaintenanceTicketPortalModal
        isOpen={isMaintenanceModalOpen}
        onClose={() => setIsMaintenanceModalOpen(false)}
      />

    </div>
  );
};
