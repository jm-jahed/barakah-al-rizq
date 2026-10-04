import React from 'react';
import { Metadata } from 'next';
import { OasiraShowcase } from '@/components/oasira/OasiraShowcase';

export const metadata: Metadata = {
  title: 'OASIRA — UAE Luxury Resorts & Staycations | Showcase #28',
  description: 'Discover luxury UAE resorts, staycations, beach escapes, desert retreats and unforgettable holiday experiences across Dubai, Abu Dhabi, Ras Al Khaimah and Fujairah.',
};

export default function ResortHolidayBookingProjectPage() {
  return <OasiraShowcase standalone={true} />;
}
