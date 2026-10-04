import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    const sub = db.newsletter.subscribe(email);
    return NextResponse.json({ success: true, subscriber: sub });
  } catch (err: any) {
    console.error('Newsletter error:', err);
    return NextResponse.json({ error: 'Failed to subscribe', details: err?.message || String(err) }, { status: 500 });
  }
}
