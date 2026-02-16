import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Life with AI</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Speculative fiction and collaborative engineering for human-AI futures.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-2 space-y-1.5">
              <li><Link href="/stories" className="text-sm text-muted hover:text-accent transition-colors">Stories</Link></li>
              <li><Link href="/arcology" className="text-sm text-muted hover:text-accent transition-colors">Arcology Knowledge Node</Link></li>
              <li><Link href="/arcology/domains" className="text-sm text-muted hover:text-accent transition-colors">Engineering Domains</Link></li>
              <li><Link href="/arcology/open-questions" className="text-sm text-muted hover:text-accent transition-colors">Open Questions</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-2 space-y-1.5">
              <li><Link href="/mcp" className="text-sm text-muted hover:text-accent transition-colors">MCP Server (for AI agents)</Link></li>
              <li><Link href="/api/v1/domains" className="text-sm text-muted hover:text-accent transition-colors">REST API</Link></li>
              <li><Link href="/about" className="text-sm text-muted hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted">
            Built by humans and AI, working together.
          </p>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Life with AI
          </p>
        </div>
      </div>
    </footer>
  );
}
