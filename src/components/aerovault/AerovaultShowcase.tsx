'use client';

import React, { useState } from 'react';
import { AerovaultLanguageProvider, useAerovaultLanguage } from '@/context/AerovaultLanguageContext';
import { AerovaultNav } from './AerovaultNav';
import { AerovaultHero } from './AerovaultHero';
import { TrustStrip } from './TrustStrip';
import { FleetAccessShowcase } from './FleetAccessShowcase';
import { InstantQuoteTool } from './InstantQuoteTool';
import { HowWeWork } from './HowWeWork';
import { EmptyLegDeals } from './EmptyLegDeals';
import { JetCardMembership } from './JetCardMembership';
import { CaseStudySection } from './CaseStudySection';
import { WhyAerovault } from './WhyAerovault';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { FlightDesks } from './FlightDesks';
import { TestimonialsSection } from './TestimonialsSection';
import { QuoteModal } from './QuoteModal';
import { AerovaultFAQ } from './AerovaultFAQ';
import { AerovaultFinalCTA } from './AerovaultFinalCTA';
import { AerovaultFooter } from './AerovaultFooter';

interface AerovaultShowcaseProps {
  standalone?: boolean;
}

const AerovaultShowcaseContent: React.FC<AerovaultShowcaseProps> = ({ standalone = false }) => {
  const { lang, isRtl } = useAerovaultLanguage();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedJetId, setSelectedJetId] = useState<string | null>(null);

  const handleOpenModal = (jetId?: string) => {
    if (jetId) setSelectedJetId(jetId);
    else setSelectedJetId(null);
    setQuoteModalOpen(true);
  };

  const handleCloseModal = () => {
    setQuoteModalOpen(false);
    setSelectedJetId(null);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#07090E] text-white selection:bg-[#E5C378] selection:text-black ${
        isRtl ? 'font-sans text-right' : 'font-sans text-left'
      }`}
    >
      <AerovaultNav onOpenQuoteModal={handleOpenModal} />
      <AerovaultHero onOpenQuoteModal={handleOpenModal} />
      <TrustStrip />
      <FleetAccessShowcase onOpenQuoteModal={handleOpenModal} />
      <InstantQuoteTool onOpenQuoteModal={handleOpenModal} />
      <HowWeWork />
      <EmptyLegDeals onOpenQuoteModal={handleOpenModal} />
      <JetCardMembership onOpenQuoteModal={handleOpenModal} />
      <CaseStudySection onOpenQuoteModal={handleOpenModal} />
      <WhyAerovault />
      <LeadershipSection />
      <InsightsSection />
      <FlightDesks />
      <TestimonialsSection />
      <AerovaultFAQ />
      <AerovaultFinalCTA onOpenQuoteModal={handleOpenModal} />
      <AerovaultFooter />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseModal}
        selectedJetId={selectedJetId}
      />
    </div>
  );
};

export const AerovaultShowcase: React.FC<AerovaultShowcaseProps> = (props) => {
  return (
    <AerovaultLanguageProvider>
      <AerovaultShowcaseContent {...props} />
    </AerovaultLanguageProvider>
  );
};