import React from 'react';
import { Metadata } from 'next';
import { LedgeraShowcase } from '@/components/ledgera/LedgeraShowcase';

export const metadata: Metadata = {
  title: 'LEDGERA — UAE Accounting, Tax & Compliance Advisory | Showcase #31',
  description: 'Premium UAE accounting and tax consultancy helping businesses with bookkeeping, corporate tax (9%), VAT and compliance across Dubai and Abu Dhabi.',
};

export default function AccountingTaxConsultancyProjectPage() {
  return <LedgeraShowcase standalone={true} />;
}
