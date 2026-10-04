import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getActivityLogs } from '@/lib/mongodb';

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const logs = await getActivityLogs();
    return NextResponse.json({ activity: logs });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch activity logs';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
