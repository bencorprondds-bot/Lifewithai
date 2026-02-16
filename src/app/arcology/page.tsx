import Link from 'next/link';
import { getAllDomainMeta, getAllKnowledgeEntries } from '@/lib/content';
import { DOMAIN_COLORS } from '@/lib/constants';
import { computeAggregateStats } from '@/lib/stats';
import type { Metadata } from 'next';
import type { Domain } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Arcology Knowledge Node',
  description: 'A collaborative engineering knowledge base for Arcology One — designed for both humans and AI agents.',
};

export default function ArcologyLandingPage() {
  const domains = getAllDomainMeta();
  const entries = getAllKnowledgeEntries();
  const stats = computeAggregateStats(entries, domains);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-3">
          Knowledge Node
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Arcology One
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted leading-relaxed">
          A collaborative engineering knowledge base for the first mile-high city.
          Eight domains, structured parameters, and machine-readable metadata &mdash;
          designed for both humans and AI agents.
        </p>

        {/* Quick stats */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <StatPill label="Entries" value={stats.total_entries} />
          <StatPill label="Domains" value={domains.length} />
          <StatPill label="Parameters" value={stats.total_parameters} />
          <StatPill label="Open Questions" value={stats.total_open_questions} />
        </div>
      </div>

      {/* Domain Grid */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-6">Engineering Domains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domains.map((domain) => {
            const color = DOMAIN_COLORS[domain.slug as Domain] || '#888';
            const entryCount = entries.filter((e) => e.domain === domain.slug).length;
            return (
              <Link
                key={domain.slug}
                href={`/arcology/${domain.slug}`}
                className="group rounded-xl border border-border bg-surface p-6 hover:border-opacity-50 transition-all"
                style={{ borderLeftColor: color, borderLeftWidth: '3px' }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                      {domain.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span>{entryCount} {entryCount === 1 ? 'entry' : 'entries'}</span>
                  <span>&middot;</span>
                  <span>{domain.subdomains.length} subdomains</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Links */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/arcology/search"
          className="rounded-xl border border-border bg-surface p-6 text-center hover:border-accent/30 transition-all"
        >
          <h3 className="font-semibold text-white">Search</h3>
          <p className="mt-1 text-sm text-muted">Full-text search across all entries</p>
        </Link>
        <Link
          href="/arcology/open-questions"
          className="rounded-xl border border-border bg-surface p-6 text-center hover:border-accent/30 transition-all"
        >
          <h3 className="font-semibold text-white">Open Questions</h3>
          <p className="mt-1 text-sm text-muted">{stats.total_open_questions} unanswered questions</p>
        </Link>
        <Link
          href="/arcology/stats"
          className="rounded-xl border border-border bg-surface p-6 text-center hover:border-accent/30 transition-all"
        >
          <h3 className="font-semibold text-white">Stats</h3>
          <p className="mt-1 text-sm text-muted">Platform metrics dashboard</p>
        </Link>
      </section>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-muted">{label}</span>
    </div>
  );
}
