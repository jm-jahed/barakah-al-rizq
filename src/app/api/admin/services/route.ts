import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const services = db.services.findMany();
  return NextResponse.json({ services });
}
