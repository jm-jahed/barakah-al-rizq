import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const items = db.faq.findMany();
  return NextResponse.json({ faq: items });
}
