'use client';

import React, { useState } from 'react';
import { MovingNav } from './MovingNav';
import { MovingHero } from './MovingHero';
import { TrustSection } from './TrustSection';
import { MoveTypeSelector } from './MoveTypeSelector';
import { MovingServices } from './MovingServices';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { MovingProcess } from './MovingProcess';
import { MoveDashboard } from './MoveDashboard';
import { PackingSection } from './PackingSection';
import { CareGuarantee } from './CareGuarantee';
import { QuoteEstimator } from './QuoteEstimator';
import { MovingChecklist } from './MovingChecklist';
import { LocationsSection } from './LocationsSection';
import { InternationalMoving } from './InternationalMoving';
import { WhyNestMove } from './WhyNestMove';
import { Testimonials } from './Testimonials';
import { MovingCaseStudy } from './MovingCaseStudy';
import { MovingGuide } from './MovingGuide';
import { MovingFAQ } from './MovingFAQ';
import { MovingFinalCTA } from './MovingFinalCTA';
import { MovingFooter } from './MovingFooter';
import { QuoteModal } from './QuoteModal';

interface MovingShowcaseProps {
  standalone?: boolean;
}

export const MovingShowcase: React.FC<MovingShowcaseProps> = ({ standalone = true }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefillData, setQuotePrefillData] = useState<any>(null);

  const handleOpenQuoteModal = (moveTypeOrService?: string) => {
    setQuotePrefillData(moveTypeOrService ? { propertyType: moveTypeOrService } : null);
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteModalWithData = (data: any) => {
    setQuotePrefillData(data);
    setIsQuoteModalOpen(true);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPropertyTypes = () => {
    const el = document.getElementById('property-types');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090807] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Global Sticky Navigation */}
      <MovingNav
        onOpenQuoteModal={handleOpenQuoteModal}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* Main Content Flow */}
      <main id="top">
        
        {/* Cinematic Hero */}
        <MovingHero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToCalculator={scrollToCalculator}
          onScrollToPropertyTypes={scrollToPropertyTypes}
        />

        {/* Client Trust Verification Logos */}
        <TrustSection />

        {/* 5 Tailored Property Move Types */}
        <MoveTypeSelector
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 8 Specialized Relocation Services */}
        <MovingServices
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Interactive Relocation Volume & Rate Calculator in AED */}
        <QuoteEstimator
          onOpenQuoteModalWithData={handleOpenQuoteModalWithData}
        />

        {/* Live Moving Day Tracking Command HUD */}
        <MoveDashboard />

        {/* Before / After Moving Transformation Slider */}
        <BeforeAfterSlider />

        {/* 4-Step Moving Process Timeline */}
        <MovingProcess />

        {/* Protective Packing Standards */}
        <PackingSection />

        {/* Zero Damage Care Guarantee */}
        <CareGuarantee />

        {/* 30-Day Relocation Checklist Planner */}
        <MovingChecklist />

        {/* UAE Communities & Developer Permits Guide */}
        <LocationsSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* International Cross-Border Relocation Corridors */}
        <InternationalMoving
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Editorial Value Matrix */}
        <WhyNestMove />

        {/* Verified UAE Client Reviews */}
        <Testimonials />

        {/* Featured Royal Mansion Relocation Case Study */}
        <MovingCaseStudy
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Moving Advice & Community Guides */}
        <MovingGuide />

        {/* Interactive FAQ Accordion */}
        <MovingFAQ />

        {/* Final Conversion CTA */}
        <MovingFinalCTA
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

      </main>

      {/* Enterprise Footer */}
      <MovingFooter />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillData={quotePrefillData}
      />

    </div>
  );
};
