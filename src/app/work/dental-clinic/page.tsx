import React from 'react';
import { DentalShowcase } from '@/components/dental/DentalShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LUMINA DENTAL — Advanced Dental & Smile Clinic Dubai',
  description: 'A modern digital dental clinic experience in City Walk, Jumeirah, Dubai offering Teeth Whitening, Porcelain Veneers, Clear Aligners, Dental Implants, Root Canals, and Cosmetic Smile Design.',
};

export default function DentalClinicPage() {
  return <DentalShowcase />;
}
