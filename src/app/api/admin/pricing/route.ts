import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const pricing = db.pricing.findMany();
  return NextResponse.json({ pricing });
}
