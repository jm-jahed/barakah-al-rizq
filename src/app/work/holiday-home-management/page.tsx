import React from 'react';
import { Metadata } from 'next';
import { StayoraShowcase } from '@/components/stayora/StayoraShowcase';

export const metadata: Metadata = {
  title: 'STAYORA — UAE Holiday Home & Short-Term Rental Management | Showcase #37',
  description: 'Premium Airbnb and holiday home management in Dubai, Abu Dhabi, and Ras Al Khaimah — dynamic pricing, guest concierge, housekeeping, and DTCM permits fully managed.',
};

export default function HolidayHomeManagementPage() {
  return <StayoraShowcase standalone={true} />;
}