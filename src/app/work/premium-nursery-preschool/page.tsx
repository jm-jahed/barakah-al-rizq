'use client';

import React from 'react';
import { LittleHorizonLanguageProvider } from '@/context/LittleHorizonLanguageContext';
import { LHNav } from '@/components/littleHorizon/LHNav';
import { LHHero } from '@/components/littleHorizon/LHHero';
import { TrustStrip } from '@/components/littleHorizon/TrustStrip';
import { ProgramsSection } from '@/components/littleHorizon/ProgramsSection';
import { CurriculumApproach } from '@/components/littleHorizon/CurriculumApproach';
import { ProgramFinderTool } from '@/components/littleHorizon/ProgramFinderTool';
import { DayTimeline } from '@/components/littleHorizon/DayTimeline';
import { CaseStudySection } from '@/components/littleHorizon/CaseStudySection';
import { WhyLittleHorizon } from '@/components/littleHorizon/WhyLittleHorizon';
import { LeadershipSection } from '@/components/littleHorizon/LeadershipSection';
import { InsightsSection } from '@/components/littleHorizon/InsightsSection';
import { CampusLocations } from '@/components/littleHorizon/CampusLocations';
import { Testimonials } from '@/components/littleHorizon/Testimonials';
import { AdmissionsForm } from '@/components/littleHorizon/AdmissionsForm';
import { LHFAQ } from '@/components/littleHorizon/LHFAQ';
import { LHFinalCTA } from '@/components/littleHorizon/LHFinalCTA';
import { LHFooter } from '@/components/littleHorizon/LHFooter';

export default function NurseryPreschoolPage() {
  return (
    <LittleHorizonLanguageProvider>
      <div className="min-h-screen bg-[#0A120D] text-emerald-100 font-sans selection:bg-amber-400 selection:text-[#0A120D]">
        <LHNav />
        <main>
          <LHHero />
          <TrustStrip />
          <ProgramsSection />
          <CurriculumApproach />
          <ProgramFinderTool />
          <DayTimeline />
          <CaseStudySection />
          <WhyLittleHorizon />
          <LeadershipSection />
          <InsightsSection />
          <CampusLocations />
          <Testimonials />
          <AdmissionsForm />
          <LHFAQ />
          <LHFinalCTA />
        </main>
        <LHFooter />
      </div>
    </LittleHorizonLanguageProvider>
  );
}
