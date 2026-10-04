import React from 'react';
import { Metadata } from 'next';
import { ConstructionShowcase } from '@/components/construction/ConstructionShowcase';

export const metadata: Metadata = {
  title: 'VERTEX CONTRACTING UAE | Palatial Villa Construction & Turnkey Interiors',
  description: 'Dubai Municipality Grade-1 licensed contractor. 160+ ground-up villa builds, DIFC corporate fit-outs, super-prime penthouses, Italian joinery, and BUA cost estimation.',
};

export default function ConstructionInteriorPage() {
  return <ConstructionShowcase standalone={true} />;
}
