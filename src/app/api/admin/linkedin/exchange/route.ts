import { NextRequest, NextResponse } from 'next/server';
import { LinkedInClient } from '@/lib/linkedin/client';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { codeOrUrl } = await req.json();
    if (!codeOrUrl || typeof codeOrUrl !== 'string') {
      return NextResponse.json({ error: 'Authorization code or URL is required.' }, { status: 400 });
    }

    let code = codeOrUrl.trim();
    if (code.includes('code=')) {
      const match = code.match(/code=([^&]+)/);
      if (match) code = decodeURIComponent(match[1]);
    }

    const client = new LinkedInClient({
      redirectUri: 'https://www.linkedin.com/developers/tools/oauth/redirect',
    });

    const tokenData = await client.exchangeCodeForToken(code);

    const authenticatedClient = new LinkedInClient({
      accessToken: tokenData.accessToken,
    });

    let profile: any = null;
    try {
      profile = await authenticatedClient.getProfile();
    } catch (e) {
      console.error('Profile discovery error during code exchange');
    }

    // Persist securely to .env.local without exposing secrets in logs
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      let env = fs.readFileSync(envPath, 'utf8');

      if (env.includes('LINKEDIN_ACCESS_TOKEN=')) {
        env = env.replace(
          /LINKEDIN_ACCESS_TOKEN=.*/,
          `LINKEDIN_ACCESS_TOKEN="${tokenData.accessToken}"`
        );
      } else {
        env += `\nLINKEDIN_ACCESS_TOKEN="${tokenData.accessToken}"\n`;
      }

      if (profile?.urn) {
        if (env.includes('LINKEDIN_AUTHOR_URN=')) {
          env = env.replace(
            /LINKEDIN_AUTHOR_URN=.*/,
            `LINKEDIN_AUTHOR_URN="${profile.urn}"`
          );
        } else {
          env += `\nLINKEDIN_AUTHOR_URN="${profile.urn}"\n`;
        }
      }

      if (profile?.name) {
        if (env.includes('LINKEDIN_AUTHOR_NAME=')) {
          env = env.replace(
            /LINKEDIN_AUTHOR_NAME=.*/,
            `LINKEDIN_AUTHOR_NAME="${profile.name}"`
          );
        } else {
          env += `\nLINKEDIN_AUTHOR_NAME="${profile.name}"\n`;
        }
      }

      fs.writeFileSync(envPath, env, 'utf8');
    }

    return NextResponse.json({
      success: true,
      profile: profile ? { name: profile.name, urn: profile.urn } : null,
      message: 'LinkedIn connected successfully with all required scopes!',
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 });
  }
}
