'use client';

import React from 'react';
import { CodeforgeLanguageProvider } from '@/context/CodeforgeLanguageContext';
import { CodeforgeNav } from '@/components/codeforge/CodeforgeNav';
import { CodeforgeHero } from '@/components/codeforge/CodeforgeHero';
import { TrustStrip } from '@/components/codeforge/TrustStrip';
import { ProgramsSection } from '@/components/codeforge/ProgramsSection';
import { ProgramMatchTool } from '@/components/codeforge/ProgramMatchTool';
import { HowWeWork } from '@/components/codeforge/HowWeWork';
import { CareerOutcomes } from '@/components/codeforge/CareerOutcomes';
import { CaseStudySection } from '@/components/codeforge/CaseStudySection';
import { WhyCodeforge } from '@/components/codeforge/WhyCodeforge';
import { LeadershipSection } from '@/components/codeforge/LeadershipSection';
import { InsightsSection } from '@/components/codeforge/InsightsSection';
import { CampusLocations } from '@/components/codeforge/CampusLocations';
import { Testimonials } from '@/components/codeforge/Testimonials';
import { ApplicationForm } from '@/components/codeforge/ApplicationForm';
import { CodeforgeFAQ } from '@/components/codeforge/CodeforgeFAQ';
import { CodeforgeFinalCTA } from '@/components/codeforge/CodeforgeFinalCTA';
import { CodeforgeFooter } from '@/components/codeforge/CodeforgeFooter';

export default function TechAcademyPage() {
  return (
    <CodeforgeLanguageProvider>
      <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans selection:bg-[#38BDF8] selection:text-[#070A12]">
        <CodeforgeNav />
        <main>
          <CodeforgeHero />
          <TrustStrip />
          <ProgramsSection />
          <ProgramMatchTool />
          <HowWeWork />
          <CareerOutcomes />
          <CaseStudySection />
          <WhyCodeforge />
          <LeadershipSection />
          <InsightsSection />
          <CampusLocations />
          <Testimonials />
          <ApplicationForm />
          <CodeforgeFAQ />
          <CodeforgeFinalCTA />
        </main>
        <CodeforgeFooter />
      </div>
    </CodeforgeLanguageProvider>
  );
}
