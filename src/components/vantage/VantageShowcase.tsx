'use client';

import React, { useState } from 'react';
import { VantageNav } from './VantageNav';
import { VantageHero } from './VantageHero';
import { TrustStrip } from './TrustStrip';
import { VantageCatalogExplorer } from './VantageCatalogExplorer';
import { VantageFinancialSuite } from './VantageFinancialSuite';
import { BuyerJourney } from './BuyerJourney';
import { MasterplanCommunities } from './MasterplanCommunities';
import { CaseStudySection } from './CaseStudySection';
import { WhyVantage } from './WhyVantage';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { SalesOffices } from './SalesOffices';
import { Testimonials } from './Testimonials';
import { RegisterInterestForm } from './RegisterInterestForm';
import { VantageFAQ } from './VantageFAQ';
import { VantageFinalCTA } from './VantageFinalCTA';
import { VantageFooter } from './VantageFooter';
import { VantageUnitDrawer } from './VantageUnitDrawer';
import { VipLaunchModal } from './VipLaunchModal';
import { VantageDevelopment, VantageProject, VANTAGE_CATALOG } from '@/data/vantageData';

interface VantageShowcaseProps {
  standalone?: boolean;
}

export const VantageShowcase: React.FC<VantageShowcaseProps> = ({ standalone = true }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [selectedDevelopment, setSelectedDevelopment] = useState<VantageDevelopment | null>(null);
  const [activeDrawerDevelopment, setActiveDrawerDevelopment] = useState<VantageDevelopment | null>(null);

  const handleOpenRegister = (dev?: VantageDevelopment) => {
    if (dev) {
      setSelectedDevelopment(dev);
    }
    setIsRegisterModalOpen(true);
  };

  const handleOpenVip = (dev?: VantageDevelopment) => {
    if (dev) {
      setSelectedDevelopment(dev);
    }
    setIsVipModalOpen(true);
  };

  const handleSelectForDrawer = (dev: VantageDevelopment) => {
    setActiveDrawerDevelopment(dev);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('payment-calc');
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06101E] text-[#FAFAFA] font-sans selection:bg-[#C5A059] selection:text-black overflow-x-clip max-w-full">
      
      {/* Navbar */}
      <VantageNav
        onOpenRegisterModal={() => handleOpenRegister()}
        onOpenVipModal={() => handleOpenVip()}
      />

      <main id="top">
        
        {/* Architectural Hero */}
        <VantageHero
          onOpenRegisterModal={() => handleOpenRegister()}
          onExploreProjects={scrollToProjects}
          onOpenVipModal={() => handleOpenVip()}
          onOpenCalculator={scrollToCalculator}
        />

        {/* Contractor / Masterplan Logos */}
        <TrustStrip />

        {/* Master 216+ Releases Catalog Explorer */}
        <VantageCatalogExplorer
          onSelectDevelopment={handleSelectForDrawer}
          onOpenVipModal={handleOpenVip}
          onOpenRegister={handleOpenRegister}
          onCalculateMilestones={(dev) => {
            scrollToCalculator();
          }}
        />

        {/* Advanced Financial Suite & ROI Simulator */}
        <VantageFinancialSuite
          onOpenRegisterModalWithPlan={(price, plan, downPayment) => {
            handleOpenRegister();
          }}
          onOpenVipModal={() => handleOpenVip()}
        />

        {/* 5-Step Buyer Journey */}
        <BuyerJourney />

        {/* Masterplan Communities */}
        <MasterplanCommunities
          onExploreCommunityReleases={(cat) => {
            scrollToProjects();
          }}
          onOpenVipModal={() => handleOpenVip()}
        />

        {/* Vantage Bay Case Study */}
        <CaseStudySection
          onOpenRegisterModal={() => handleOpenRegister()}
        />

        {/* Why Vantage Pillars */}
        <WhyVantage />

        {/* Developer Leadership Directors */}
        <LeadershipSection />

        {/* Real Estate Journal */}
        <InsightsSection />

        {/* 2 Sales Offices & Galleries */}
        <SalesOffices
          onOpenRegisterModal={() => handleOpenRegister()}
        />

        {/* Buyer Testimonials */}
        <Testimonials />

        {/* Inline Register Form */}
        <RegisterInterestForm
          isOpen={false}
          selectedProject={selectedDevelopment ? {
            id: selectedDevelopment.id,
            name: selectedDevelopment.name,
            location: selectedDevelopment.location,
            city: selectedDevelopment.city === 'Abu Dhabi' ? 'Abu Dhabi' : 'Dubai',
            status: selectedDevelopment.status,
            type: selectedDevelopment.propertyType === 'Villas' ? 'Villas' : (selectedDevelopment.propertyType === 'Commercial' ? 'Mixed-Use' : 'Apartments'),
            startingPriceAED: selectedDevelopment.startingPriceAed,
            handover: selectedDevelopment.handover,
            unitTypes: selectedDevelopment.unitTypes,
            heroImage: selectedDevelopment.image,
            galleryImages: [selectedDevelopment.image],
            description: selectedDevelopment.name,
            amenities: selectedDevelopment.amenities,
            paymentPlan: selectedDevelopment.paymentPlan,
            positioning: selectedDevelopment.sector,
            constructionProgress: selectedDevelopment.completionPct
          } : null}
        />

        {/* Accordion FAQ */}
        <VantageFAQ />

        {/* Final Closing CTA */}
        <VantageFinalCTA
          onOpenRegisterModal={() => handleOpenRegister()}
        />

      </main>

      {/* Footer */}
      <VantageFooter />

      {/* Project Unit / Floorplan CAD Drawer */}
      <VantageUnitDrawer
        development={activeDrawerDevelopment}
        onClose={() => setActiveDrawerDevelopment(null)}
        onOpenRegister={(dev) => handleOpenRegister(dev)}
        onOpenCalculator={(dev) => {
          setActiveDrawerDevelopment(null);
          scrollToCalculator();
        }}
      />

      {/* VIP Early-Bird Launch Allocation Modal */}
      <VipLaunchModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        development={selectedDevelopment}
      />

      {/* Standard Registration Modal */}
      {isRegisterModalOpen && (
        <RegisterInterestForm
          isOpen={true}
          onClose={() => setIsRegisterModalOpen(false)}
          selectedProject={selectedDevelopment ? {
            id: selectedDevelopment.id,
            name: selectedDevelopment.name,
            location: selectedDevelopment.location,
            city: selectedDevelopment.city === 'Abu Dhabi' ? 'Abu Dhabi' : 'Dubai',
            status: selectedDevelopment.status,
            type: selectedDevelopment.propertyType === 'Villas' ? 'Villas' : (selectedDevelopment.propertyType === 'Commercial' ? 'Mixed-Use' : 'Apartments'),
            startingPriceAED: selectedDevelopment.startingPriceAed,
            handover: selectedDevelopment.handover,
            unitTypes: selectedDevelopment.unitTypes,
            heroImage: selectedDevelopment.image,
            galleryImages: [selectedDevelopment.image],
            description: selectedDevelopment.name,
            amenities: selectedDevelopment.amenities,
            paymentPlan: selectedDevelopment.paymentPlan,
            positioning: selectedDevelopment.sector,
            constructionProgress: selectedDevelopment.completionPct
          } : null}
        />
      )}

    </div>
  );
};
