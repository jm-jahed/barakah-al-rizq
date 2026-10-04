'use client';

import React, { useState } from 'react';
import { NexoraNav } from './NexoraNav';
import { NexoraHero } from './NexoraHero';
import { TrustStrip } from './TrustStrip';
import { BusinessSetupSection } from './BusinessSetupSection';
import { ServicesSection } from './ServicesSection';
import { SetupCalculator } from './SetupCalculator';
import { HowWeWork } from './HowWeWork';
import { IndustrySolutions } from './IndustrySolutions';
import { MarketEntrySection } from './MarketEntrySection';
import { GrowthSection } from './GrowthSection';
import { CaseStudySection } from './CaseStudySection';
import { ROICalculator } from './ROICalculator';
import { WhyNexora } from './WhyNexora';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { UaeLocations } from './UaeLocations';
import { Testimonials } from './Testimonials';
import { ConsultationForm } from './ConsultationForm';
import { NexoraFAQ } from './NexoraFAQ';
import { NexoraFinalCTA } from './NexoraFinalCTA';
import { NexoraFooter } from './NexoraFooter';
import { NexoraService, NexoraSetupOption } from '@/data/nexoraData';

interface NexoraShowcaseProps {
  standalone?: boolean;
}

export const NexoraShowcase: React.FC<NexoraShowcaseProps> = ({ standalone = true }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [initialServiceText, setInitialServiceText] = useState<string>('Business Setup & Licensing');
  const [initialQuoteAmount, setInitialQuoteAmount] = useState<number | undefined>(undefined);

  const handleOpenConsultation = (serviceText?: string, quoteAmount?: number) => {
    if (serviceText) setInitialServiceText(serviceText);
    if (quoteAmount) setInitialQuoteAmount(quoteAmount);
    setIsConsultationModalOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121417] text-[#F7F6F2] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navbar */}
      <NexoraNav
        onOpenConsultationModal={() => handleOpenConsultation()}
      />

      <main id="top">
        
        {/* Executive Hero */}
        <NexoraHero
          onOpenConsultationModal={() => handleOpenConsultation()}
          onExploreServices={scrollToServices}
        />

        {/* Client Logos Strip */}
        <TrustStrip />

        {/* UAE Company Incorporation */}
        <BusinessSetupSection
          onSelectOption={(opt: NexoraSetupOption) => handleOpenConsultation(`UAE Business Setup — ${opt.name}`, opt.startingFeeAED)}
        />

        {/* 8 Core Advisory Services */}
        <ServicesSection
          onOpenConsultationWithService={(srv: NexoraService) => handleOpenConsultation(srv.title)}
        />

        {/* Interactive Professional Fee Calculator */}
        <SetupCalculator
          onOpenConsultationWithQuote={(quoteAmount: number, detailsText: string) =>
            handleOpenConsultation(`Setup Fee Quote: ${detailsText}`, quoteAmount)
          }
        />

        {/* 5-Step Process Timeline */}
        <HowWeWork />

        {/* 8 Industry Sectors */}
        <IndustrySolutions />

        {/* GCC Market Entry Framework */}
        <MarketEntrySection
          onOpenConsultation={() => handleOpenConsultation('UAE Market Entry Package', 18500)}
        />

        {/* Business Revenue Scaling Matrix */}
        <GrowthSection />

        {/* VANTA Retail Case Study */}
        <CaseStudySection
          onOpenConsultation={() => handleOpenConsultation('VANTA Case Study Consultation')}
        />

        {/* Revenue ROI Calculator */}
        <ROICalculator
          onOpenConsultationWithNumbers={(rev: number, growth: number, savings: number) =>
            handleOpenConsultation(`Commercial Opportunity Audit: Projected Rev AED ${rev.toLocaleString()}`)
          }
        />

        {/* 6 Core Pillars */}
        <WhyNexora />

        {/* Leadership Partners */}
        <LeadershipSection />

        {/* Regulatory Insights */}
        <InsightsSection />

        {/* 4 UAE Offices */}
        <UaeLocations
          onOpenConsultation={() => handleOpenConsultation('Office Meeting Booking')}
        />

        {/* Verified Reviews */}
        <Testimonials />

        {/* Inline Lead Form */}
        <ConsultationForm
          isOpen={false}
          initialServiceText={initialServiceText}
          initialQuoteAmount={initialQuoteAmount}
        />

        {/* Accordion FAQ */}
        <NexoraFAQ />

        {/* Final Executive CTA */}
        <NexoraFinalCTA
          onOpenConsultationModal={() => handleOpenConsultation()}
        />

      </main>

      {/* Footer */}
      <NexoraFooter />

      {/* Modal Consultation Form */}
      {isConsultationModalOpen && (
        <ConsultationForm
          isOpen={true}
          onClose={() => setIsConsultationModalOpen(false)}
          initialServiceText={initialServiceText}
          initialQuoteAmount={initialQuoteAmount}
        />
      )}

    </div>
  );
};
