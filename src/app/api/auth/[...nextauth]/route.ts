// ============================================================
// Arcology Knowledge Node — NextAuth.js Route Handler
// ============================================================
// This file will handle all /api/auth/* routes when NextAuth.js
// is installed and configured.
//
// ACTIVATION:
//   1. npm install next-auth@latest
//   2. Set environment variables (see auth-config.ts)
//   3. Uncomment the handler below
//   4. Delete or comment out the placeholder handler

// --- PLACEHOLDER (active until NextAuth.js is installed) ---

import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);

  // Provide helpful responses for auth endpoints
  if (pathname.includes('/signin')) {
    return Response.json({
      message: 'OAuth authentication is not yet configured.',
      setup_steps: [
        '1. Run: npm install next-auth@latest',
        '2. Create GitHub OAuth App at https://github.com/settings/developers',
        '3. Add AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET to .env.local',
        '4. Uncomment the NextAuth handler in src/app/api/auth/[...nextauth]/route.ts',
      ],
      docs: 'https://next-auth.js.org/getting-started/example',
    }, { status: 501 });
  }

  return Response.json({
    status: 'auth_not_configured',
    message: 'NextAuth.js is installed but not yet configured. See auth-config.ts for setup instructions.',
  }, { status: 501 });
}

export async function POST(request: NextRequest) {
  return Response.json({
    status: 'auth_not_configured',
    message: 'NextAuth.js is not yet configured. See auth-config.ts for setup instructions.',
  }, { status: 501 });
}

// --- REAL HANDLER (uncomment after installing next-auth) ---
// import NextAuth from 'next-auth';
// import GitHub from 'next-auth/providers/github';
// import { authOptions } from '@/lib/auth-config';
//
// const handler = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
//   ...authOptions,
// });
//
// export { handler as GET, handler as POST };
