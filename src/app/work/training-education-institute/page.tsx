'use client';

import React from 'react';
import { EduvantaLanguageProvider } from '@/context/EduvantaLanguageContext';
import { EduvantaNav } from '@/components/eduvanta/EduvantaNav';
import { EduvantaHero } from '@/components/eduvanta/EduvantaHero';
import { TrustStrip } from '@/components/eduvanta/TrustStrip';
import { CourseCatalog } from '@/components/eduvanta/CourseCatalog';
import { CourseFinderTool } from '@/components/eduvanta/CourseFinderTool';
import { CareerPathway } from '@/components/eduvanta/CareerPathway';
import { LearningFormats } from '@/components/eduvanta/LearningFormats';
import { HowWeWork } from '@/components/eduvanta/HowWeWork';
import { CorporateTraining } from '@/components/eduvanta/CorporateTraining';
import { CaseStudySection } from '@/components/eduvanta/CaseStudySection';
import { CareerIntelligence } from '@/components/eduvanta/CareerIntelligence';
import { WhyEduvanta } from '@/components/eduvanta/WhyEduvanta';
import { LeadershipSection } from '@/components/eduvanta/LeadershipSection';
import { InsightsSection } from '@/components/eduvanta/InsightsSection';
import { CampusLocations } from '@/components/eduvanta/CampusLocations';
import { Testimonials } from '@/components/eduvanta/Testimonials';
import { EnrollmentForm } from '@/components/eduvanta/EnrollmentForm';
import { EduvantaFAQ } from '@/components/eduvanta/EduvantaFAQ';
import { EduvantaFinalCTA } from '@/components/eduvanta/EduvantaFinalCTA';
import { EduvantaFooter } from '@/components/eduvanta/EduvantaFooter';

export default function TrainingInstitutePage() {
  return (
    <EduvantaLanguageProvider>
      <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-[#E5C378] selection:text-[#07090E]">
        <EduvantaNav />
        <main>
          <EduvantaHero />
          <TrustStrip />
          <CourseCatalog />
          <CourseFinderTool />
          <CareerPathway />
          <LearningFormats />
          <HowWeWork />
          <CorporateTraining />
          <CaseStudySection />
          <CareerIntelligence />
          <WhyEduvanta />
          <LeadershipSection />
          <InsightsSection />
          <CampusLocations />
          <Testimonials />
          <EnrollmentForm />
          <EduvantaFAQ />
          <EduvantaFinalCTA />
        </main>
        <EduvantaFooter />
      </div>
    </EduvantaLanguageProvider>
  );
}
