import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import {
  getInboxMessages,
  getInboxMessageById,
  updateInboxMessageStatus,
  getInboxStats,
  getEmailMailboxes,
} from '@/lib/mongodb';
import { InboxMessageStatus } from '@/lib/db/types';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const mailbox = searchParams.get('mailbox') || 'ALL';
    const status = searchParams.get('status') || 'ALL';
    const search = searchParams.get('search') || searchParams.get('q') || '';

    // If single message requested
    if (id) {
      const msg = await getInboxMessageById(id);
      if (!msg) {
        return NextResponse.json({ error: 'Message not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, message: msg });
    }

    // List messages with filters & stats
    const [messages, stats, mailboxes] = await Promise.all([
      getInboxMessages({ mailbox, status, search }),
      getInboxStats(),
      getEmailMailboxes(),
    ]);

    return NextResponse.json({
      success: true,
      count: messages.length,
      messages,
      stats,
      mailboxes,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch inbox messages';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const { id, status } = body;
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }

    let targetStatus: InboxMessageStatus;
    if (status === 'RESTORE') {
      targetStatus = 'READ';
    } else if (['UNREAD', 'READ', 'REPLIED', 'TRASH'].includes(status)) {
      targetStatus = status as InboxMessageStatus;
    } else {
      return NextResponse.json({ error: 'Invalid status. Must be UNREAD, READ, REPLIED, TRASH, or RESTORE' }, { status: 400 });
    }

    const updated = await updateInboxMessageStatus(id, targetStatus);
    if (!updated) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 });
    }

    const stats = await getInboxStats();

    return NextResponse.json({
      success: true,
      message: updated,
      stats,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update message status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
