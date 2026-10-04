import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const items = db.media.findMany();
  return NextResponse.json({ media: items });
}
