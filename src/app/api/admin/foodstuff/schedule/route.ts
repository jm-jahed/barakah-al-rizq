import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAdminSession } from '@/lib/auth/session';

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { morningTime, middayTime, eveningTime, staleThresholdHours } = body;

    const updates: Record<string, string | number> = {};
    if (morningTime) updates.morningTime = morningTime;
    if (middayTime) updates.middayTime = middayTime;
    if (eveningTime) updates.eveningTime = eveningTime;
    if (staleThresholdHours !== undefined) {
      const parsedHours = parseInt(staleThresholdHours, 10);
      if (!isNaN(parsedHours) && parsedHours > 0) {
        updates.staleThresholdHours = parsedHours;
      }
    }

    const updated = db.foodstuff.updateSchedule(updates);
    return NextResponse.json({ success: true, schedule: updated });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update schedule';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
