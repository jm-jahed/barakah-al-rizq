import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { eventName, path, metadata } = await req.json();
    db.analytics.log(eventName || 'page_view', path || '/', metadata ? JSON.stringify(metadata) : undefined);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}
