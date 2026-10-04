import React from 'react';
import { Metadata } from 'next';
import { VantageShowcase } from '@/components/vantage/VantageShowcase';

export const metadata: Metadata = {
  title: 'VANTAGE DEVELOPMENTS — UAE Real Estate Developer | Showcase #34',
  description: 'Premium UAE property developer offering off-plan and ready residential, villa and mixed-use developments across Dubai and Abu Dhabi.',
};

export default function PropertyDevelopmentProjectPage() {
  return <VantageShowcase standalone={true} />;
}
