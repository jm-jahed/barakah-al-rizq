'use client';

import React, { useState } from 'react';
import { Language, ServiceItem, TYPING_SERVICES_DATA } from '@/data/typingCenterData';
import TypingNav from './TypingNav';
import TypingHero from './TypingHero';
import TrustStrip from './TrustStrip';
import LiveServiceStatusDesk from './LiveServiceStatusDesk';
import ServicePriceCalculator from './ServicePriceCalculator';
import FeeTransparencyMatrix from './FeeTransparencyMatrix';
import ServiceDirectory from './ServiceDirectory';
import ServiceWizard from './ServiceWizard';
import DocumentChecker from './DocumentChecker';
import EmiratesIdSection from './EmiratesIdSection';
import TasheelMohreSection from './TasheelMohreSection';
import CorporateProDashboard from './CorporateProDashboard';
import RenewalReminderSystem from './RenewalReminderSystem';
import GoldenGreenVisaHub from './GoldenGreenVisaHub';
import TranslationAttestationJourney from './TranslationAttestationJourney';
import FamilyResidencyJourney from './FamilyResidencyJourney';
import EmirateServiceSelector from './EmirateServiceSelector';
import AuthorityDirectory from './AuthorityDirectory';
import ServiceProcessTimeline from './ServiceProcessTimeline';
import WhyTrustUs from './WhyTrustUs';
import FaqSection from './FaqSection';
import ServiceAppointmentModal from './ServiceAppointmentModal';
import ServiceDetailDrawer from './ServiceDetailDrawer';
import FloatingWhatsAppConcierge from './FloatingWhatsAppConcierge';
import TypingFooter from './TypingFooter';

interface TypingCenterShowcaseProps {
  standalone?: boolean;
}

export function TypingCenterShowcase({ standalone = false }: TypingCenterShowcaseProps) {
  const [lang, setLang] = useState<Language>('en');
  const [appointmentModalOpen, setAppointmentModalOpen] = useState<boolean>(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [activeDrawerService, setActiveDrawerService] = useState<ServiceItem | null>(null);
  const [initialCategory, setInitialCategory] = useState<string>('all');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleOpenAppointment = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setAppointmentModalOpen(true);
  };

  const handleSelectCategoryFromHero = (category: string) => {
    setInitialCategory(category);
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForDrawer = (service: ServiceItem) => {
    setActiveDrawerService(service);
  };

  const isRtl = lang === 'ar';

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`min-h-screen bg-[#02130B] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 ${
        isRtl ? 'font-arabic' : ''
      }`}
    >
      {/* Navigation Header */}
      <TypingNav
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenSearch={() => {
          const elem = document.getElementById('services');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Cinematic Hero Section */}
      <TypingHero
        lang={lang}
        onOpenAppointment={() => handleOpenAppointment()}
        onSelectCategory={handleSelectCategoryFromHero}
      />

      {/* Verified Government & Ministry Compliance Strip */}
      <TrustStrip lang={lang} />

      {/* Live Application Status Tracking Desk (Interactive Demo) */}
      <LiveServiceStatusDesk lang={lang} />

      {/* Interactive Fee Calculator Engine */}
      <ServicePriceCalculator
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Fee Transparency & Statutory Separation Matrix */}
      <FeeTransparencyMatrix lang={lang} />

      {/* Complete Searchable & Filterable UAE Service Directory */}
      <ServiceDirectory
        lang={lang}
        initialCategory={initialCategory}
        onSelectService={handleSelectServiceForDrawer}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* 4-Step Interactive Service Finder Wizard */}
      <ServiceWizard
        lang={lang}
        onSelectService={handleSelectServiceForDrawer}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Interactive Document Requirements Checker */}
      <DocumentChecker lang={lang} />

      {/* Dedicated Emirates ID Hub */}
      <EmiratesIdSection
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Corporate Tasheel & MOHRE Labour Section */}
      <TasheelMohreSection
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* B2B Corporate PRO & Visa Operations Dashboard */}
      <CorporateProDashboard
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Early Expiry Renewal Countdown Radar */}
      <RenewalReminderSystem
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Golden Visa & Green Visa Section */}
      <GoldenGreenVisaHub
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Translation & MOFA Attestation "Documents That Cross Borders" */}
      <TranslationAttestationJourney
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Family & Dependent Residency Journey */}
      <FamilyResidencyJourney
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Interactive UAE Emirate Switcher */}
      <EmirateServiceSelector
        lang={lang}
        onSelectService={handleSelectServiceForDrawer}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Governing UAE Authority Directory */}
      <AuthorityDirectory lang={lang} />

      {/* 6-Step Service Lifecycle Process */}
      <ServiceProcessTimeline lang={lang} />

      {/* Why Trust Sanad 4-Pillars */}
      <WhyTrustUs lang={lang} />

      {/* Interactive FAQ Accordion */}
      <FaqSection lang={lang} />

      {/* High-Trust Footer */}
      <TypingFooter
        lang={lang}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Interactive Appointment & Application Booking Modal */}
      <ServiceAppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        lang={lang}
        preselectedServiceId={preselectedServiceId}
      />

      {/* Detailed Service Inspection Drawer */}
      <ServiceDetailDrawer
        service={activeDrawerService}
        onClose={() => setActiveDrawerService(null)}
        lang={lang}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* Contextual WhatsApp Concierge Widget */}
      <FloatingWhatsAppConcierge lang={lang} />
    </div>
  );
}

export default TypingCenterShowcase;
