import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const testimonials = db.testimonials.findMany();
  return NextResponse.json({ testimonials });
}
