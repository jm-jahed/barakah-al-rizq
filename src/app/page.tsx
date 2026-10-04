'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { DigitalEcosystemSection } from '@/components/DigitalEcosystemSection';
import { AIProjectConcierge } from '@/components/AIProjectConcierge';
import { SmartProjectMatching } from '@/components/SmartProjectMatching';
import { ProjectDNA } from '@/components/ProjectDNA';
import { CinematicProjectPreview } from '@/components/CinematicProjectPreview';
import { InteractiveUAEMap } from '@/components/InteractiveUAEMap';
import { SelectedWork } from '@/components/SelectedWork';
import { ServicesSection } from '@/components/ServicesSection';
import { DigitalArchitectureMatrix } from '@/components/DigitalArchitectureMatrix';
import { WhyUs } from '@/components/WhyUs';
import { DeliverySection } from '@/components/DeliverySection';
import { TechEcosystem } from '@/components/TechEcosystem';
import { PerformanceObservatory } from '@/components/PerformanceObservatory';
import { Testimonials } from '@/components/Testimonials';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';
import { Footer } from '@/components/Footer';
import { OrderModal } from '@/components/OrderModal';
import { CustomCursor } from '@/components/CustomCursor';
import { BackgroundMotion } from '@/components/BackgroundMotion';
import { SectionNavFloating } from '@/components/SectionNavFloating';
import { ScopeQuotePayload } from '@/data/estimatorPricing';
import { ExecutiveAdvisoryCallout } from '@/components/ui/ExecutiveAdvisoryCallout';

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | ScopeQuotePayload>('');

  const handleOpenOrderModal = (plan?: string | ScopeQuotePayload) => {
    if (plan) setSelectedPlan(plan);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
      <BackgroundMotion />
      <CustomCursor />
      <SectionNavFloating />
      
      {/* 00 — Global Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Hero */}
      <Hero onOpenOrderModal={handleOpenOrderModal} />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Digital Ecosystem Architecture Section (Design #03) */}
      <DigitalEcosystemSection />

      {/* 01 — Selected Work (#work) */}
      <SelectedWork onOpenOrderModal={handleOpenOrderModal} />

      {/* 01.5 — AI Project Concierge (#ai-concierge) */}
      <AIProjectConcierge onOpenOrderModal={handleOpenOrderModal} />

      {/* 01.6 — Smart Project Matching (#smart-match) */}
      <SmartProjectMatching onOpenOrderModal={handleOpenOrderModal} />

      {/* 01.7 — Project DNA Breakdown (#project-dna) */}
      <ProjectDNA onOpenOrderModal={handleOpenOrderModal} />

      {/* 01.8 — Cinematic Project Preview (#cinematic-preview) */}
      <CinematicProjectPreview onOpenOrderModal={handleOpenOrderModal} />

      {/* 01.9 — Interactive UAE Market Map (#uae-market-map) */}
      <InteractiveUAEMap onOpenOrderModal={handleOpenOrderModal} />

      {/* 02 — What Our UAE + GLOBAL Clients Say (#reviews) */}
      <Testimonials />

      {/* 03 — Why Work With Us? / The Agency Advantage (#why / #about) */}
      <WhyUs />

      {/* Design #16 — High-Trust Executive Advisory Callout */}
      <ExecutiveAdvisoryCallout onOpenOrderModal={handleOpenOrderModal} />

      {/* Services Section — What We Build (#services) */}
      <ServicesSection onOpenOrderModal={handleOpenOrderModal} />

      {/* Feature #10 — Digital Architecture & Engineering Matrix (#architecture-matrix) */}
      <DigitalArchitectureMatrix onOpenOrderModal={handleOpenOrderModal} />

      {/* Process Section — 4-Stage Delivery Pipeline (#process) */}
      <DeliverySection />

      {/* 04 — Technology That Powers the Work (#tech) */}
      <TechEcosystem />

      {/* Feature #09 — Sub-50ms Engineering & Lighthouse Benchmarks Observatory (#observatory) */}
      <PerformanceObservatory onOpenOrderModal={handleOpenOrderModal} />

      {/* Pricing Section — Transparent Agency Rates (#pricing) */}
      <PricingSection onOpenOrderModal={handleOpenOrderModal} />

      {/* FAQ Section — Frequently Asked Questions (#faq) */}
      <FaqSection />

      {/* 05 — Have a Project in Mind? Let's Build It. (#contact) */}
      <FinalCtaSection onOpenOrderModal={handleOpenOrderModal} />

      {/* Global Footer */}
      <Footer />

      {/* Interactive Global Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialServiceId={selectedPlan}
      />
    </div>
  );
}
