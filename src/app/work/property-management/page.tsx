import React from 'react';
import { Metadata } from 'next';
import { NestoraShowcase } from '@/components/nestora/NestoraShowcase';

export const metadata: Metadata = {
  title: 'NESTORA — UAE Property Management for Landlords & Investors | Showcase #33',
  description: 'Premium property management in Dubai and Abu Dhabi — tenant sourcing, rent collection, maintenance and Ejari compliance for landlords and investors.',
};

export default function PropertyManagementProjectPage() {
  return <NestoraShowcase standalone={true} />;
}
