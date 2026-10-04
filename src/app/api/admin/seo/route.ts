import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { db } from '@/lib/db';

export async function GET() {
  const seo = db.seo.get();
  return NextResponse.json({ seo });
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const updated = db.seo.update(body);
  return NextResponse.json({ success: true, seo: updated });
}
