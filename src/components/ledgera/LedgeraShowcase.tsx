'use client';

import React, { useState } from 'react';
import { LedgeraNav } from './LedgeraNav';
import { LedgeraHero } from './LedgeraHero';
import { TrustStrip } from './TrustStrip';
import { LedgeraCatalogExplorer } from './LedgeraCatalogExplorer';
import { CorporateTaxSimulator } from './CorporateTaxSimulator';
import { UaeGratuityCalculator } from './UaeGratuityCalculator';
import { CorporateTaxSection } from './CorporateTaxSection';
import { TaxReadinessChecker } from './TaxReadinessChecker';
import { ServicesSection } from './ServicesSection';
import { VatCalculator } from './VatCalculator';
import { HowWeWork } from './HowWeWork';
import { IndustrySolutions } from './IndustrySolutions';
import { CaseStudySection } from './CaseStudySection';
import { WhyLedgera } from './WhyLedgera';
import { LeadershipSection } from './LeadershipSection';
import { InsightsSection } from './InsightsSection';
import { UaeLocations } from './UaeLocations';
import { Testimonials } from './Testimonials';
import { ConsultationForm } from './ConsultationForm';
import { FtaComplianceAuditModal } from './FtaComplianceAuditModal';
import { LedgeraFAQ } from './LedgeraFAQ';
import { LedgeraFinalCTA } from './LedgeraFinalCTA';
import { LedgeraFooter } from './LedgeraFooter';
import { LedgeraService } from '@/data/ledgeraData';

interface LedgeraShowcaseProps {
  standalone?: boolean;
}

export const LedgeraShowcase: React.FC<LedgeraShowcaseProps> = ({ standalone = true }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [initialServiceText, setInitialServiceText] = useState<string>('Bookkeeping & Accounting');
  const [initialRiskLevel, setInitialRiskLevel] = useState<string>('MEDIUM');

  const handleOpenConsultation = (serviceText?: string, riskLevel?: string) => {
    if (serviceText) setInitialServiceText(serviceText);
    if (riskLevel) setInitialRiskLevel(riskLevel);
    setIsConsultationModalOpen(true);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070A10] text-[#F7F6F2] font-sans selection:bg-emerald-400 selection:text-black">
      
      {/* Navbar with Audit Check trigger */}
      <LedgeraNav
        onOpenConsultationModal={() => handleOpenConsultation()}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      <main id="top">
        
        {/* Finance Executive Hero */}
        <LedgeraHero
          onOpenConsultationModal={() => handleOpenConsultation()}
          onExploreServices={scrollToCatalog}
        />

        {/* Client Logos Strip */}
        <TrustStrip />

        {/* 200+ Granular UAE Tax, Accounting, VAT & Audit Services Catalog */}
        <LedgeraCatalogExplorer
          onOpenConsultationWithService={(serviceName: string) => handleOpenConsultation(serviceName)}
        />

        {/* Interactive UAE Corporate Tax (9%) & Small Business Relief Engine */}
        <CorporateTaxSimulator
          onOpenConsultation={(srv?: string) => handleOpenConsultation(srv || 'UAE Corporate Tax (9%) Advisory')}
        />

        {/* Interactive UAE Labor Law End of Service Gratuity (EOSG) Calculator */}
        <UaeGratuityCalculator
          onOpenConsultation={(srv?: string) => handleOpenConsultation(srv || 'Payroll & WPS Labor Compliance')}
        />

        {/* 9% Corporate Tax Overview */}
        <CorporateTaxSection
          onOpenConsultation={() => handleOpenConsultation('UAE Corporate Tax (9%) Compliance Audit')}
        />

        {/* Interactive Tax Readiness Assessment Tool */}
        <TaxReadinessChecker
          onOpenConsultationWithRisk={(risk: string, details: string) =>
            handleOpenConsultation(`Tax Readiness Audit (${risk} Risk)`, risk)
          }
        />

        {/* Core Flagship Practice Disciplines */}
        <ServicesSection
          onOpenConsultationWithService={(srv: LedgeraService) => handleOpenConsultation(srv.title)}
        />

        {/* Illustrative VAT Estimator */}
        <VatCalculator
          onOpenConsultationWithVat={(rev: number, exp: number, net: number) =>
            handleOpenConsultation(`VAT Position Audit (Est. Net: AED ${net.toLocaleString()})`)
          }
        />

        {/* 5-Step Process Timeline */}
        <HowWeWork />

        {/* 7 Industry Sectors */}
        <IndustrySolutions />

        {/* Orbit Tech FZ Case Study */}
        <CaseStudySection
          onOpenConsultation={() => handleOpenConsultation('Catch-Up Bookkeeping Consultation')}
        />

        {/* 6 Core Pillars */}
        <WhyLedgera />

        {/* Executive Partners & Tax Directors */}
        <LeadershipSection />

        {/* Financial Insights Journal */}
        <InsightsSection />

        {/* 3 UAE Office Chambers */}
        <UaeLocations
          onOpenConsultation={() => handleOpenConsultation('Office Meeting Booking')}
        />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Inline Lead Form */}
        <ConsultationForm
          isOpen={false}
          initialServiceText={initialServiceText}
          initialRiskLevel={initialRiskLevel}
        />

        {/* Accordion FAQ */}
        <LedgeraFAQ />

        {/* Final Executive CTA */}
        <LedgeraFinalCTA
          onOpenConsultationModal={() => handleOpenConsultation()}
        />

      </main>

      {/* Footer */}
      <LedgeraFooter />

      {/* Modal Consultation Form */}
      {isConsultationModalOpen && (
        <ConsultationForm
          isOpen={true}
          onClose={() => setIsConsultationModalOpen(false)}
          initialServiceText={initialServiceText}
          initialRiskLevel={initialRiskLevel}
        />
      )}

      {/* FTA Compliance Audit 5-Step Modal */}
      <FtaComplianceAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onOpenConsultation={(srv?: string) => handleOpenConsultation(srv || 'FTA Tax Audit Readiness & Representation')}
      />

    </div>
  );
};
