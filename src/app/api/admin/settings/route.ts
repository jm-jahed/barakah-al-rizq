import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { db } from '@/lib/db';

export async function GET() {
  const settings = db.settings.findMany();
  return NextResponse.json({ settings });
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { key, value } = await req.json();
  db.settings.update(key, value);
  return NextResponse.json({ success: true });
}
