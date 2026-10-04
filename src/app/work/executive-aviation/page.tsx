import React from 'react';
import { Metadata } from 'next';
import { SkyvaultShowcase } from '@/components/skyvault/SkyvaultShowcase';

export const metadata: Metadata = {
  title: 'SKYVAULT UAE — Executive Aviation Management & GCAA CAMO | Showcase #44',
  description: 'Turnkey private aircraft management, GCAA / EASA CAMO airworthiness oversight, climate-controlled DWC hangarage, and charter revenue offset programs in Dubai & Abu Dhabi.',
};

export default function ExecutiveAviationPage() {
  return <SkyvaultShowcase standalone={true} />;
}