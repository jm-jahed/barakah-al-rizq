'use client';

import React from 'react';
import { FramehausLanguageProvider } from '@/context/FramehausLanguageContext';
import { FramehausNav } from '@/components/framehaus/FramehausNav';
import { FramehausHero } from '@/components/framehaus/FramehausHero';
import { TrustStrip } from '@/components/framehaus/TrustStrip';
import { IntroSection } from '@/components/framehaus/IntroSection';
import { PortfolioGallery } from '@/components/framehaus/PortfolioGallery';
import { ServicesSection } from '@/components/framehaus/ServicesSection';
import { PackageBuilder } from '@/components/framehaus/PackageBuilder';
import { CreativeProcess } from '@/components/framehaus/CreativeProcess';
import { StudioFacilities } from '@/components/framehaus/StudioFacilities';
import { CaseStudySection } from '@/components/framehaus/CaseStudySection';
import { WhyFramehaus } from '@/components/framehaus/WhyFramehaus';
import { LeadershipSection } from '@/components/framehaus/LeadershipSection';
import { InsightsSection } from '@/components/framehaus/InsightsSection';
import { StudioLocations } from '@/components/framehaus/StudioLocations';
import { Testimonials } from '@/components/framehaus/Testimonials';
import { ProjectInquiryForm } from '@/components/framehaus/ProjectInquiryForm';
import { FramehausFAQ } from '@/components/framehaus/FramehausFAQ';
import { FramehausFinalCTA } from '@/components/framehaus/FramehausFinalCTA';
import { FramehausFooter } from '@/components/framehaus/FramehausFooter';

export default function PhotographyCreativeStudioPage() {
  return (
    <FramehausLanguageProvider>
      <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-amber-400 selection:text-black">
        <FramehausNav />
        <main>
          <FramehausHero />
          <TrustStrip />
          <IntroSection />
          <PortfolioGallery />
          <ServicesSection />
          <PackageBuilder />
          <CreativeProcess />
          <StudioFacilities />
          <CaseStudySection />
          <WhyFramehaus />
          <LeadershipSection />
          <InsightsSection />
          <StudioLocations />
          <Testimonials />
          <ProjectInquiryForm />
          <FramehausFAQ />
          <FramehausFinalCTA />
        </main>
        <FramehausFooter />
      </div>
    </FramehausLanguageProvider>
  );
}
