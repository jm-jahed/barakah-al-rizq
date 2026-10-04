import React from 'react';
import { Metadata } from 'next';
import { LogisticsShowcase } from '@/components/logistics/LogisticsShowcase';

export const metadata: Metadata = {
  title: 'VELOX LOGISTICS — Express Delivery & Global Cargo Platform | Showcase #23',
  description: 'Enterprise logistics, express same-day courier dispatch, real-time GPS telemetry, and GCC cross-border freight platform.',
};

export default function LogisticsProjectPage() {
  return <LogisticsShowcase standalone={true} />;
}
