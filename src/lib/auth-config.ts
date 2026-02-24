// ============================================================
// Arcology Knowledge Node — NextAuth.js Configuration
// ============================================================
// Central auth config. Used by the [...nextauth] route handler
// and by any server component that needs session data.
//
// ACTIVATION CHECKLIST:
//   1. npm install next-auth@latest
//   2. Create GitHub OAuth App:
//      - Go to: https://github.com/settings/developers
//      - App name: "Arcology Knowledge Node"
//      - Homepage URL: https://lifewithai.ai
//      - Callback URL: https://lifewithai.ai/api/auth/callback/github
//      - (For local dev: http://localhost:3000/api/auth/callback/github)
//   3. Add to .env.local:
//      AUTH_SECRET=<run: openssl rand -base64 32>
//      GITHUB_CLIENT_ID=<from GitHub>
//      GITHUB_CLIENT_SECRET=<from GitHub>
//   4. Uncomment the import in [...nextauth]/route.ts
//
// Once these steps are complete, users can sign in at /api/auth/signin
// and the session will be available via getServerSession(authOptions).

// NOTE: This file is a skeleton. The actual NextAuth.js handlers
// will be activated when next-auth is installed and configured.
// Until then, the propose form continues to work in "local mode"
// (generates frontmatter for copy-paste, no server submission).

export interface AuthOptions {
  providers: AuthProvider[];
  callbacks: {
    signIn?: (params: { user: unknown; account: unknown }) => boolean | string;
    session?: (params: { session: unknown; token: unknown }) => unknown;
    jwt?: (params: { token: unknown; user: unknown }) => unknown;
  };
  pages: {
    signIn: string;
    error: string;
  };
}

interface AuthProvider {
  id: string;
  name: string;
  type: 'oauth';
  clientId?: string;
  clientSecret?: string;
}

/**
 * NextAuth.js configuration.
 * Will be passed to NextAuth() when the package is installed.
 */
export const authOptions: AuthOptions = {
  providers: [
    // GitHub OAuth — primary provider
    {
      id: 'github',
      name: 'GitHub',
      type: 'oauth',
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    // Google OAuth — secondary provider (optional)
    // Uncomment when ready:
    // {
    //   id: 'google',
    //   name: 'Google',
    //   type: 'oauth',
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // },
  ],
  callbacks: {
    // Extend session with user role and trust score
    session: ({ session, token }) => {
      // TODO: Look up user in our database, attach role and trust score
      return {
        ...session,
        user: {
          ...(session as Record<string, unknown>).user,
          id: (token as Record<string, unknown>).sub,
          role: 'contributor', // Default role for new users
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        // First sign-in: check if user exists in our database
        // If not, create them with default trust score
        // TODO: Database lookup
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',  // Custom sign-in page (to be built)
    error: '/auth/error',    // Custom error page (to be built)
  },
};

/**
 * Environment variable check.
 * Call this at server startup to verify auth is configured.
 */
export function isAuthConfigured(): boolean {
  return !!(
    process.env.AUTH_SECRET &&
    process.env.GITHUB_CLIENT_ID &&
    process.env.GITHUB_CLIENT_SECRET
  );
}

/**
 * Auth status for the client.
 * Returns a safe subset of auth config for the UI to check.
 */
export function getAuthStatus() {
  return {
    configured: isAuthConfigured(),
    providers: authOptions.providers
      .filter(p => p.clientId) // Only show configured providers
      .map(p => ({ id: p.id, name: p.name })),
  };
}
