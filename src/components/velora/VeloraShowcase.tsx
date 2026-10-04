'use client';

import React, { useState } from 'react';
import { VeloraHero } from './VeloraHero';
import { VeloraRitualSelector } from './VeloraRitualSelector';
import { VeloraTreatmentDiscovery } from './VeloraTreatmentDiscovery';
import { VeloraSignatureTreatments } from './VeloraSignatureTreatments';
import { VeloraTreatmentModal } from './VeloraTreatmentModal';
import { VeloraPrivateJourney } from './VeloraPrivateJourney';
import { VeloraSmartMatch } from './VeloraSmartMatch';
import { VeloraCollections } from './VeloraCollections';
import { VeloraThermalExperience } from './VeloraThermalExperience';
import { VeloraPrivateSuites } from './VeloraPrivateSuites';
import { VeloraCouplesExperience } from './VeloraCouplesExperience';
import { VeloraMembership } from './VeloraMembership';
import { VeloraMemberDashboard } from './VeloraMemberDashboard';
import { VeloraSpaConcierge } from './VeloraSpaConcierge';
import { VeloraDigitalSanctuary } from './VeloraDigitalSanctuary';
import { VeloraArchitecture } from './VeloraArchitecture';
import { VeloraTrustPrivacy } from './VeloraTrustPrivacy';
import { VeloraSignatureStory } from './VeloraSignatureStory';
import { VeloraCapabilities } from './VeloraCapabilities';
import { VeloraReservationModal } from './VeloraReservationModal';
import { WellnessRitual } from '@/data/veloraData';

export const VeloraShowcase: React.FC = () => {
  const [selectedRitualForModal, setSelectedRitualForModal] = useState<WellnessRitual | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingRitualId, setBookingRitualId] = useState<string | undefined>(undefined);
  const [activeIntention, setActiveIntention] = useState<string>('RESTORE');

  const handleOpenBooking = (ritualId?: string) => {
    setBookingRitualId(ritualId);
    setIsBookingOpen(true);
  };

  const handleBookFromRitual = (ritual: WellnessRitual) => {
    setBookingRitualId(ritual.id);
    setIsBookingOpen(true);
  };

  const handleSelectIntention = (intentionKey: string) => {
    setActiveIntention(intentionKey);
    const element = document.getElementById('intentions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTreatments = () => {
    const element = document.getElementById('treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080a09] text-[#f5f2eb] selection:bg-[#c5a059]/30 selection:text-[#fdfbf7]">
      {/* 1. Hero Section */}
      <VeloraHero
        onOpenBooking={() => handleOpenBooking()}
        onExploreTreatments={handleExploreTreatments}
        onSelectIntention={handleSelectIntention}
      />

      {/* 2. Signature Intention Selector Experience */}
      <VeloraRitualSelector
        selectedIntentionKey={activeIntention}
        onSelectRitual={setSelectedRitualForModal}
        onBookRitual={handleBookFromRitual}
      />

      {/* 3. Signature Treatments Spotlight */}
      <VeloraSignatureTreatments
        onSelectRitual={setSelectedRitualForModal}
        onBookRitual={handleBookFromRitual}
      />

      {/* 4. Complete Treatment Discovery Grid (20+ rituals) */}
      <VeloraTreatmentDiscovery
        onSelectRitual={setSelectedRitualForModal}
        onBookRitual={handleBookFromRitual}
      />

      {/* 5. 7-Stage Private Sanctuary Journey */}
      <VeloraPrivateJourney />

      {/* 6. Smart Wellness Match Interactive Consultation */}
      <VeloraSmartMatch
        onSelectRitual={setSelectedRitualForModal}
        onBookRitual={handleBookFromRitual}
      />

      {/* 7. Curated Collections */}
      <VeloraCollections
        onSelectRitual={setSelectedRitualForModal}
        onBookRitual={handleBookFromRitual}
      />

      {/* 8. Architectural Hydrotherapy & Thermal Journey */}
      <VeloraThermalExperience />

      {/* 9. Private Suites */}
      <VeloraPrivateSuites
        onReserveSuite={(suiteId) => handleOpenBooking(suiteId)}
      />

      {/* 10. Couples Experience */}
      <VeloraCouplesExperience
        onSelectRitual={setSelectedRitualForModal}
        onBookRitual={handleBookFromRitual}
      />

      {/* 11. Sanctuary Patronage & Membership */}
      <VeloraMembership
        onSelectTier={() => handleOpenBooking()}
      />

      {/* 12. Member Dashboard Portal */}
      <VeloraMemberDashboard />

      {/* 13. Spa Concierge Inscription */}
      <VeloraSpaConcierge
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 14. Immersive Digital Sanctuary Atmosphere */}
      <VeloraDigitalSanctuary />

      {/* 15. Systemic Wellness Architecture */}
      <VeloraArchitecture />

      {/* 16. Trust & Privacy */}
      <VeloraTrustPrivacy />

      {/* 17. The Signature Story */}
      <VeloraSignatureStory />

      {/* 18. Platform Capabilities & Final Closing Call */}
      <VeloraCapabilities
        onOpenBooking={() => handleOpenBooking()}
        onExploreTreatments={handleExploreTreatments}
      />

      {/* Treatment Details Modal */}
      <VeloraTreatmentModal
        ritual={selectedRitualForModal}
        onClose={() => setSelectedRitualForModal(null)}
        onBook={handleBookFromRitual}
      />

      {/* 5-Step Reservation Modal */}
      <VeloraReservationModal
        isOpen={isBookingOpen}
        initialRitualId={bookingRitualId}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};
