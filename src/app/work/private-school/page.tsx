'use client';

import React from 'react';
import { AltairLanguageProvider } from '@/context/AltairLanguageContext';
import { AltairNav } from '@/components/altairAcademy/AltairNav';
import { AltairHero } from '@/components/altairAcademy/AltairHero';
import { TrustStrip } from '@/components/altairAcademy/TrustStrip';
import { AcademicStages } from '@/components/altairAcademy/AcademicStages';
import { AcademicsSection } from '@/components/altairAcademy/AcademicsSection';
import { TuitionEstimator } from '@/components/altairAcademy/TuitionEstimator';
import { AdmissionsJourney } from '@/components/altairAcademy/AdmissionsJourney';
import { CampusLife } from '@/components/altairAcademy/CampusLife';
import { CaseStudySection } from '@/components/altairAcademy/CaseStudySection';
import { WhyAltair } from '@/components/altairAcademy/WhyAltair';
import { LeadershipSection } from '@/components/altairAcademy/LeadershipSection';
import { InsightsSection } from '@/components/altairAcademy/InsightsSection';
import { CampusLocations } from '@/components/altairAcademy/CampusLocations';
import { Testimonials } from '@/components/altairAcademy/Testimonials';
import { AdmissionsForm } from '@/components/altairAcademy/AdmissionsForm';
import { AltairFAQ } from '@/components/altairAcademy/AltairFAQ';
import { AltairFinalCTA } from '@/components/altairAcademy/AltairFinalCTA';
import { AltairFooter } from '@/components/altairAcademy/AltairFooter';

export default function PrivateSchoolPage() {
  return (
    <AltairLanguageProvider>
      <div className="min-h-screen bg-[#070D1E] text-slate-100 font-sans selection:bg-amber-400 selection:text-[#070D1E]">
        <AltairNav />
        <main>
          <AltairHero />
          <TrustStrip />
          <AcademicStages />
          <AcademicsSection />
          <TuitionEstimator />
          <AdmissionsJourney />
          <CampusLife />
          <CaseStudySection />
          <WhyAltair />
          <LeadershipSection />
          <InsightsSection />
          <CampusLocations />
          <Testimonials />
          <AdmissionsForm />
          <AltairFAQ />
          <AltairFinalCTA />
        </main>
        <AltairFooter />
      </div>
    </AltairLanguageProvider>
  );
}
