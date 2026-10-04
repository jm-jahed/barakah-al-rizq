import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { db } from '@/lib/db';

export async function GET() {
  const content = db.homepage.get();
  return NextResponse.json({ homepage: content });
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json();
  const updated = db.homepage.update(body);
  return NextResponse.json({ success: true, homepage: updated });
}
