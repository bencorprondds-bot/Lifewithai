import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MCP Server',
  description: 'Connect to the Arcology Knowledge Node via Model Context Protocol for programmatic agent access.',
};

export default function MCPPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <p className="text-sm font-medium tracking-widest text-compute uppercase mb-3">
          For AI Agents
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          MCP Server
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          The Arcology Knowledge Node exposes a Model Context Protocol (MCP) server
          so AI agents can discover, search, and reason about the engineering
          knowledge base programmatically.
        </p>
      </div>

      {/* Connection Info */}
      <section className="mb-10 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Connection</h2>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Transport</p>
            <p className="font-mono text-sm text-foreground">SSE (Server-Sent Events)</p>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Endpoint</p>
            <code className="block rounded-lg bg-surface-2 px-4 py-2 text-sm text-accent font-mono">
              https://mcp.lifewithai.ai/sse
            </code>
          </div>
        </div>
      </section>

      {/* Available Tools */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Available Tools</h2>
        <div className="space-y-4">
          <ToolCard
            name="read_node"
            description="Retrieve a full knowledge entry by domain and slug. Returns all metadata, parameters, content, citations, and cross-references."
            params="domain: string, slug: string"
          />
          <ToolCard
            name="search_knowledge"
            description="Full-text search across all knowledge entries with optional filters for domain, minimum KEDL level, minimum confidence level, and entry type."
            params="query: string, domain?: string, kedl_min?: number, confidence_min?: number, type?: string, limit?: number"
          />
          <ToolCard
            name="list_domains"
            description="List all 8 engineering domains with summary statistics including entry count, open questions, and subdomain information."
            params="(none)"
          />
          <ToolCard
            name="get_open_questions"
            description="Retrieve unanswered engineering questions from across the knowledge base. These represent the frontier of what needs to be figured out."
            params="domain?: string, limit?: number"
          />
          <ToolCard
            name="get_entry_parameters"
            description="Retrieve quantitative parameters from knowledge entries for cross-domain consistency checking. Filter by domain or parameter name."
            params="domain?: string, parameter_name?: string"
          />
          <ToolCard
            name="get_domain_stats"
            description="Aggregate platform statistics: KEDL distribution, confidence distribution, citation density, cross-domain reference percentage, and more."
            params="(none)"
          />
        </div>
      </section>

      {/* REST API Alternative */}
      <section className="mb-10 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-white mb-3">REST API</h2>
        <p className="text-muted text-sm mb-4">
          Prefer REST? All knowledge base data is also available via a JSON REST API
          with JSON-LD semantic context.
        </p>
        <code className="block rounded-lg bg-surface-2 px-4 py-2 text-sm text-accent font-mono">
          https://lifewithai.ai/api/v1/
        </code>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-muted">
          <span>GET /api/v1/domains</span>
          <span>GET /api/v1/domains/:slug</span>
          <span>GET /api/v1/domains/:slug/entries</span>
          <span>GET /api/v1/entries/:id</span>
          <span>GET /api/v1/search?q=</span>
          <span>GET /api/v1/open-questions</span>
          <span>GET /api/v1/parameters</span>
          <span>GET /api/v1/stats</span>
        </div>
      </section>

      {/* Vision / Trajectory */}
      <section className="rounded-xl border border-compute/20 bg-compute/5 p-6">
        <h2 className="text-lg font-semibold text-white mb-3">What&apos;s Coming</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Phase 0 is read-only. Here&apos;s where this is going:
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-accent font-bold">Now</span>
            <span className="text-muted">6 read-only tools. Search, discover, and reason about engineering knowledge.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-compute font-bold">Phase 1</span>
            <span className="text-muted">Semantic search via pgvector. Richer query capabilities.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-compute font-bold">Phase 2</span>
            <span className="text-muted">Agent contribution pipeline. propose_amendment tool. Review and merge workflow.</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-compute font-bold">Phase 3+</span>
            <span className="text-muted">Knowledge graph. Cross-domain consistency checking. Distributed agent learning from shared knowledge.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolCard({ name, description, params }: { name: string; description: string; params: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="flex items-baseline gap-2 mb-2">
        <code className="text-sm font-mono font-semibold text-accent">{name}</code>
      </div>
      <p className="text-sm text-muted leading-relaxed mb-2">{description}</p>
      <p className="text-xs font-mono text-muted">
        <span className="text-foreground/50">params:</span> {params}
      </p>
    </div>
  );
}
