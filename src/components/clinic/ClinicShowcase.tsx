'use client';
import React, { useState } from 'react';
import { ClinicNav } from './ClinicNav';
import { ClinicHero } from './ClinicHero';
import { ClinicMetrics } from './ClinicMetrics';
import { AppointmentFinder } from './AppointmentFinder';
import { CareNavigator } from './CareNavigator';
import { ClinicServices } from './ClinicServices';
import { ClinicDiscovery } from './ClinicDiscovery';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ClinicDoctors } from './ClinicDoctors';
import { DoctorProfileModal } from './DoctorProfileModal';
import { ClinicBookingModal } from './ClinicBookingModal';
import { TelehealthSection } from './TelehealthSection';
import { PatientJourney } from './PatientJourney';
import { PatientPortalPreview } from './PatientPortalPreview';
import { HealthPlanner } from './HealthPlanner';
import { WellnessCalculator } from './WellnessCalculator';
import { WomensHealthSection } from './WomensHealthSection';
import { PediatricSection } from './PediatricSection';
import { DermatologySection } from './DermatologySection';
import { DentalSection } from './DentalSection';
import { PhysiotherapySection } from './PhysiotherapySection';
import { NutritionSection } from './NutritionSection';
import { ClinicFacilities } from './ClinicFacilities';
import { ClinicTour } from './ClinicTour';
import { ClinicGallery } from './ClinicGallery';
import { PatientGuide } from './PatientGuide';
import { InsuranceSection } from './InsuranceSection';
import { CorporateHealthcare } from './CorporateHealthcare';
import { ClinicJournal } from './ClinicJournal';
import { ClinicFAQ } from './ClinicFAQ';
import { ClinicTestimonials } from './ClinicTestimonials';
import { ClinicLocation } from './ClinicLocation';
import { ClinicContact } from './ClinicContact';
import { ClinicFinalCTA } from './ClinicFinalCTA';
import { ClinicFooter } from './ClinicFooter';
import { MedicalService, Doctor } from '@/data/clinicData';

export const ClinicShowcase: React.FC<any> = () => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<MedicalService | null>(null);
  const [selectedDoctorModal, setSelectedDoctorModal] = useState<Doctor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialDoctor, setBookingInitialDoctor] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenBooking = (doctorId?: string) => {
    setBookingInitialDoctor(doctorId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-white font-sans selection:bg-sky-400 selection:text-slate-950 overflow-x-clip max-w-full">
      <ClinicNav onOpenBooking={() => handleOpenBooking()} onSearch={(q: string) => setSearchQuery(q)} />
      <ClinicHero onOpenBooking={() => handleOpenBooking()} />
      <ClinicMetrics />
      <AppointmentFinder onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <CareNavigator onSelectService={(s: MedicalService) => setSelectedServiceModal(s)} onOpenBooking={() => handleOpenBooking()} />
      <ClinicDiscovery
        initialSearchQuery={searchQuery}
        onBookAppointment={(serviceTitle) => handleOpenBooking()}
      />
      <ClinicDoctors onSelectDoctor={(d: Doctor) => setSelectedDoctorModal(d)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <TelehealthSection onOpenBooking={() => handleOpenBooking()} />
      <PatientJourney />
      <PatientPortalPreview />
      <HealthPlanner />
      <WellnessCalculator />
      <WomensHealthSection onOpenBooking={() => handleOpenBooking()} />
      <PediatricSection onOpenBooking={() => handleOpenBooking()} />
      <DermatologySection onOpenBooking={() => handleOpenBooking()} />
      <DentalSection onOpenBooking={() => handleOpenBooking()} />
      <PhysiotherapySection onOpenBooking={() => handleOpenBooking()} />
      <NutritionSection onOpenBooking={() => handleOpenBooking()} />
      <ClinicFacilities />
      <ClinicTour />
      <ClinicGallery />
      <PatientGuide />
      <InsuranceSection />
      <CorporateHealthcare />
      <ClinicJournal />
      <ClinicFAQ />
      <ClinicTestimonials />
      <ClinicLocation />
      <ClinicContact />
      <ClinicFinalCTA onOpenBooking={() => handleOpenBooking()} />
      <ClinicFooter />

      {/* Modals */}
      <ServiceDetailModal item={selectedServiceModal} onClose={() => setSelectedServiceModal(null)} onOpenBooking={() => handleOpenBooking()} />
      <DoctorProfileModal doctor={selectedDoctorModal} onClose={() => setSelectedDoctorModal(null)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <ClinicBookingModal isOpen={isBookingOpen} initialDoctorId={bookingInitialDoctor} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};
