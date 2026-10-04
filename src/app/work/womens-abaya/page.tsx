import React from 'react';
import { Metadata } from 'next';
import { NouraAbayaShowcase } from '@/components/noura-abaya/NouraAbayaShowcase';

export const metadata: Metadata = {
  title: 'نورة عباية دبي | أزياء راقية وعبايات إماراتية فاخرة — NOURA ABAYA',
  description: 'دار نورة للعبايات الفاخرة في دبي. تشكيلة حصرية تضم أكثر من 248+ تصميماً من عبايات النيدو الياباني والكريب الحريري وقفاطين الأعياد والمناسبات مع خدمة التوصيل السريع لكافة الإمارات والتفصيل الخاص.',
};

export default function WomensAbayaProjectPage() {
  return <NouraAbayaShowcase standalone={true} />;
}
