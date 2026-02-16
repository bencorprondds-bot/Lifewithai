import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDomainMeta, getEntriesByDomain, getAllDomainMeta } from '@/lib/content';
import { DOMAIN_COLORS } from '@/lib/constants';
import { KEDL_INFO, CONFIDENCE_INFO } from '@/lib/types';
import type { Domain, KEDLLevel, ConfidenceLevel } from '@/lib/types';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ domain: string }>;
}

export async function generateStaticParams() {
  const domains = getAllDomainMeta();
  return domains.map((d) => ({ domain: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { domain } = await params;
  const meta = getDomainMeta(domain as Domain);
  if (!meta) return { title: 'Domain Not Found' };

  return {
    title: meta.name,
    description: meta.description,
  };
}

export default async function DomainPage({ params }: PageProps) {
  const { domain } = await params;
  const meta = getDomainMeta(domain as Domain);

  if (!meta) notFound();

  const entries = getEntriesByDomain(domain as Domain);
  const color = DOMAIN_COLORS[domain as Domain] || '#888';

  // Group entries by subdomain
  const bySubdomain = new Map<string, typeof entries>();
  for (const entry of entries) {
    const group = bySubdomain.get(entry.subdomain) || [];
    group.push(entry);
    bySubdomain.set(entry.subdomain, group);
  }

  // Collect open questions
  const openQuestions = entries.flatMap((e) =>
    e.open_questions.map((q) => ({ question: q, entry: e }))
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted">
        <Link href="/arcology" className="hover:text-accent transition-colors">Arcology</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{meta.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-12" style={{ borderLeftColor: color, borderLeftWidth: '3px', paddingLeft: '1rem' }}>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">{meta.name}</h1>
        <p className="mt-3 text-lg text-muted leading-relaxed">{meta.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span>{entries.length} {entries.length === 1 ? 'entry' : 'entries'}</span>
          <span>&middot;</span>
          <span>{meta.subdomains.length} subdomains</span>
          <span>&middot;</span>
          <span>{openQuestions.length} open questions</span>
        </div>
      </div>

      {/* Subdomains */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-white mb-4">Subdomains</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {meta.subdomains.map((sub) => {
            const subEntries = bySubdomain.get(sub.slug) || [];
            return (
              <div
                key={sub.slug}
                className="rounded-lg border border-border bg-surface p-4"
              >
                <h3 className="font-medium text-foreground">{sub.name}</h3>
                <p className="mt-1 text-xs text-muted">{sub.description}</p>
                <p className="mt-2 text-xs text-muted">
                  {subEntries.length} {subEntries.length === 1 ? 'entry' : 'entries'}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Entries */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-white mb-4">Knowledge Entries</h2>
        {entries.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface p-8 text-center">
            <p className="text-muted">No entries yet in this domain.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/arcology/${domain}/${entry.slug}`}
                className="block group rounded-lg border border-border bg-surface p-5 hover:border-accent/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted line-clamp-2">{entry.summary}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className="kedl-badge"
                      style={{
                        background: `${color}15`,
                        color: color,
                      }}
                    >
                      KEDL {entry.kedl}
                    </span>
                    <ConfidenceDots level={entry.confidence} />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                  <span className="capitalize">{entry.entry_type}</span>
                  <span>&middot;</span>
                  <span>{entry.subdomain}</span>
                  {entry.parameters.length > 0 && (
                    <>
                      <span>&middot;</span>
                      <span>{entry.parameters.length} parameters</span>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Open Questions */}
      {openQuestions.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Open Questions</h2>
          <div className="space-y-3">
            {openQuestions.map((oq, i) => (
              <div key={i} className="rounded-lg border border-border bg-surface p-4">
                <p className="text-foreground">{oq.question}</p>
                <p className="mt-2 text-xs text-muted">
                  From: <Link href={`/arcology/${domain}/${oq.entry.slug}`} className="text-accent hover:underline">{oq.entry.title}</Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ConfidenceDots({ level }: { level: ConfidenceLevel }) {
  return (
    <div className="confidence-dots" title={`CL ${level}: ${CONFIDENCE_INFO[level].name}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className={`confidence-dot ${n <= level ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
