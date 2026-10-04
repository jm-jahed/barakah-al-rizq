import React from 'react';
import { PetCareShowcase } from '@/components/pet-care/PetCareShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAWS & VITALS — Premium Veterinary & Pet Wellness Club Dubai',
  description: 'A modern veterinary hospital and pet wellness club in Dubai Marina, Jumeirah, and Downtown Dubai offering 24/7 emergency care, clinical vet consultations, pet spa grooming, boarding, and nutrition.',
};

export default function PetCareVeterinaryPage() {
  return <PetCareShowcase />;
}
