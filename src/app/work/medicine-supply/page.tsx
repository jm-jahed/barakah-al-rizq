import React from 'react';
import { Metadata } from 'next';
import { MedivantaShowcase } from '@/components/medivanta/MedivantaShowcase';

export const metadata: Metadata = {
  title: 'MEDIVANTA — Intelligent Medicine Delivery Network & Healthcare Logistics | Showcase #73',
  description: 'Connected medicine supply and door-to-door healthcare logistics platform engineered for digital prescriptions, robotic micro-fulfillment, cold-chain telemetry, and sub-30 minute metro dispatch.',
  openGraph: {
    title: 'MEDIVANTA — Intelligent Medicine Delivery Network',
    description: 'Healthcare, Delivered With Precision. From verified prescriptions to your doorstep across UAE metropolitan hubs.',
    type: 'website',
  }
};

export default function MedicineSupplyPage() {
  return <MedivantaShowcase />;
}
