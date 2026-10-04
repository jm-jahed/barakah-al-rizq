import React from 'react';
import { Metadata } from 'next';
import { AurenShowcase } from '@/components/auren/AurenShowcase';

export const metadata: Metadata = {
  title: 'AUREN CAPITAL — UAE Private Wealth & Financial Advisory | Showcase #32',
  description: 'Premium UAE private wealth advisory firm offering wealth management, succession planning, and family office governance across Dubai (DIFC) and Abu Dhabi (ADGM).',
};

export default function FinancialAdvisoryProjectPage() {
  return <AurenShowcase standalone={true} />;
}
