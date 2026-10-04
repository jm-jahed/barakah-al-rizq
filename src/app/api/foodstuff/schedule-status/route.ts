import { NextResponse } from 'next/server';
import { getFoodstuffSchedule } from '@/lib/mongodb';
import { getDynamicUAESession, formatUAEDateTime } from '@/lib/foodstuff/utils';

export async function GET() {
  try {
    const schedule = await getFoodstuffSchedule();
    const dynamicSessionInfo = getDynamicUAESession(schedule);

    const isUpdateDue = !schedule.lastSyncAt || (Date.now() - Date.parse(schedule.lastSyncAt)) / (1000 * 60 * 60) > schedule.staleThresholdHours;

    return NextResponse.json({
      success: true,
      activeSession: dynamicSessionInfo.session,
      currentTimeUAE: dynamicSessionInfo.currentTimeUAE,
      sessions: {
        morning: schedule.morningTime,
        midday: schedule.middayTime,
        evening: schedule.eveningTime,
      },
      timezone: schedule.timezone,
      staleThresholdHours: schedule.staleThresholdHours,
      lastSyncUAE: formatUAEDateTime(schedule.lastSyncAt),
      isUpdateDue,
      autoFeedConnected: false,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch schedule status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
