import React from 'react';
import { Metadata } from 'next';
import { MaintenanceShowcase } from '@/components/maintenance/MaintenanceShowcase';

export const metadata: Metadata = {
  title: 'AURA FACILITY MANAGEMENT UAE | MEP Engineering Care & Rapid Dispatch',
  description: 'DEWA licensed & Dubai Municipality approved. 160+ HVAC chiller overhauls, FLIR thermal electrical diagnostics, water tank sterilization, and 365-day villa AMC contracts.',
};

export default function HomeMaintenancePage() {
  return <MaintenanceShowcase standalone={true} />;
}
