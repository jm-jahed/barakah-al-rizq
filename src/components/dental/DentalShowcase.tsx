'use client';
import React, { useState } from 'react';
import { DentalNav } from './DentalNav';
import { DentalHero } from './DentalHero';
import { DentalMetrics } from './DentalMetrics';
import { TreatmentFinder } from './TreatmentFinder';
import { DentalServices } from './DentalServices';
import { DentalDiscovery } from './DentalDiscovery';
import { TreatmentDetailModal } from './TreatmentDetailModal';
import { CosmeticDentistry } from './CosmeticDentistry';
import { OrthodonticsSection } from './OrthodonticsSection';
import { DentalImplants } from './DentalImplants';
import { SmileAssessment } from './SmileAssessment';
import { SmileQuiz } from './SmileQuiz';
import { DentistDirectory } from './DentistDirectory';
import { DentistProfileModal } from './DentistProfileModal';
import { AppointmentBookingModal } from './AppointmentBookingModal';
import { DentalBeforeAfter } from './DentalBeforeAfter';
import { SmileTransformations } from './SmileTransformations';
import { DentalTechnology } from './DentalTechnology';
import { ClinicFacilities } from './ClinicFacilities';
import { PatientJourney } from './PatientJourney';
import { TreatmentPlanner } from './TreatmentPlanner';
import { DentalCalculator } from './DentalCalculator';
import { EmergencyDental } from './EmergencyDental';
import { FamilyDentistry } from './FamilyDentistry';
import { OralHealthTips } from './OralHealthTips';
import { DentalGallery } from './DentalGallery';
import { DentalReviews } from './DentalReviews';
import { DentalJournal } from './DentalJournal';
import { DentalLocation } from './DentalLocation';
import { DentalFAQ } from './DentalFAQ';
import { DentalFinalCTA } from './DentalFinalCTA';
import { DentalContact } from './DentalContact';
import { DentalFooter } from './DentalFooter';
import { Treatment, Dentist } from '@/data/dentalData';

export const DentalShowcase: React.FC<any> = () => {
  const [selectedTreatmentModal, setSelectedTreatmentModal] = useState<Treatment | null>(null);
  const [selectedDentistModal, setSelectedDentistModal] = useState<Dentist | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialDentist, setBookingInitialDentist] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenBooking = (dentistId?: string) => {
    setBookingInitialDentist(dentistId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06101E] text-white font-sans selection:bg-cyan-400 selection:text-slate-950">
      <DentalNav onOpenBooking={() => handleOpenBooking()} onSearch={(q: string) => setSearchQuery(q)} />
      <DentalHero onOpenBooking={() => handleOpenBooking()} />
      <DentalMetrics />
      <TreatmentFinder onSelectTreatment={(t: Treatment) => setSelectedTreatmentModal(t)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <DentalDiscovery
        initialSearchQuery={searchQuery}
        onBookAppointment={() => handleOpenBooking()}
      />
      <CosmeticDentistry onOpenBooking={() => handleOpenBooking()} />
      <OrthodonticsSection onOpenBooking={() => handleOpenBooking()} />
      <DentalImplants />
      <SmileAssessment onOpenBooking={() => handleOpenBooking()} />
      <SmileQuiz onOpenBooking={() => handleOpenBooking()} />
      <DentistDirectory onSelectDentist={(d: Dentist) => setSelectedDentistModal(d)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <DentalBeforeAfter />
      <SmileTransformations />
      <DentalTechnology />
      <ClinicFacilities />
      <PatientJourney />
      <TreatmentPlanner />
      <DentalCalculator />
      <EmergencyDental />
      <FamilyDentistry />
      <OralHealthTips />
      <DentalGallery />
      <DentalReviews />
      <DentalJournal />
      <DentalLocation />
      <DentalFAQ />
      <DentalFinalCTA onOpenBooking={() => handleOpenBooking()} />
      <DentalContact />
      <DentalFooter />

      {/* Modals */}
      <TreatmentDetailModal item={selectedTreatmentModal} onClose={() => setSelectedTreatmentModal(null)} onOpenBooking={() => handleOpenBooking()} />
      <DentistProfileModal dentist={selectedDentistModal} onClose={() => setSelectedDentistModal(null)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <AppointmentBookingModal isOpen={isBookingOpen} initialDentistId={bookingInitialDentist} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};
