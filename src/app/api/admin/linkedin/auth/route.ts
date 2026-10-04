import { NextRequest, NextResponse } from 'next/server';
import { LinkedInClient } from '@/lib/linkedin/client';

export async function GET(req: NextRequest) {
  try {
    const redirectUri = process.env.LINKEDIN_REDIRECT_URI || `${req.nextUrl.origin}/api/admin/linkedin/callback`;
    const client = new LinkedInClient({
      redirectUri,
    });
    const state = `webstudio_auth_${Date.now()}`;
    const requestedScope = req.nextUrl.searchParams.get('scope');
    
    let customScopes: string[] | undefined = undefined;
    if (requestedScope === 'org' || requestedScope === 'all') {
      customScopes = ['openid', 'profile', 'email', 'w_member_social', 'w_organization_social', 'r_organization_social'];
    }

    const authUrl = client.getAuthUrl(state, customScopes);
    return NextResponse.redirect(authUrl);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
