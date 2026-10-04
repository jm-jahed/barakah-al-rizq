import React from 'react';
import { Metadata } from 'next';
import { AutovantaShowcase } from '@/components/autovanta/AutovantaShowcase';

export const metadata: Metadata = {
  title: 'AUTOVANTA — Premium UAE Auto Service & Repair Center | Showcase #38',
  description: 'Certified auto servicing, diagnostics, AC repair, and commercial fleet maintenance in Dubai and Sharjah — transparent pricing, genuine parts, same-day service.',
};

export default function AutoServiceRepairPage() {
  return <AutovantaShowcase standalone={true} />;
}