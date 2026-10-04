import React from 'react';
import { Metadata } from 'next';
import { CorporateShowcase } from '@/components/corporate/CorporateShowcase';

export const metadata: Metadata = {
  title: 'VANGUARD HOLDINGS — Sovereign-Grade Enterprise Holding & Capital Advisory | Project #22',
  description: 'Operating under DIFC Dubai & ADGM Abu Dhabi governance, Vanguard Holdings orchestrates cross-border M&A mandates, sovereign AI infrastructure, clean energy assets, and global trade corridors.',
};

export default function CorporateEnterprisePage() {
  return <CorporateShowcase />;
}
