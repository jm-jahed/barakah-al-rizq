import React from 'react';
import { Metadata } from 'next';
import AegisSecurityShowcase from '@/components/aegisSecurity/AegisSecurityShowcase';

export const metadata: Metadata = {
  title: 'AEGIS SOVEREIGN — Premium UAE Security & Guard Services | Executive Protection & SOC',
  description: 'Sovereign security services, executive close protection (CPO), AI surveillance, and manned guarding across Dubai, Abu Dhabi, and the UAE. SIRA & MOI certified.',
};

export default function SecurityGuardServicesPage() {
  return <AegisSecurityShowcase standalone={true} />;
}
