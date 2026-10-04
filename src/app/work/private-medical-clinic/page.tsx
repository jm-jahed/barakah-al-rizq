import React from 'react';
import { ClinicShowcase } from '@/components/clinic/ClinicShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NOVA PRIVATE CLINIC — Premium Private Healthcare Dubai',
  description: 'A modern private medical clinic digital experience in Jumeirah, Dubai offering General Medicine, Dermatology, Dental Care, Women’s Health, Pediatrics, Orthopedics, Physiotherapy, and Teleconsultation.',
};

export default function PrivateMedicalClinicPage() {
  return <ClinicShowcase />;
}
