'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { KEDL_INFO, CONFIDENCE_INFO } from '@/lib/types';
import type { KEDLLevel, ConfidenceLevel } from '@/lib/types';

interface DomainOption {
  slug: string;
  name: string;
  subdomains: { slug: string; name: string; description: string }[];
}

interface ProposalForm {
  title: string;
  domain: string;
  subdomain: string;
  kedl: KEDLLevel;
  confidence: ConfidenceLevel;
  entry_type: string;
  author_name: string;
  author_type: 'human' | 'agent';
  author_model: string;
  summary: string;
  content: string;
  assumptions: string;
  open_questions: string;
  tags: string;
}

const INITIAL_FORM: ProposalForm = {
  title: '',
  domain: '',
  subdomain: '',
  kedl: 200,
  confidence: 2,
  entry_type: 'analysis',
  author_name: '',
  author_type: 'human',
  author_model: '',
  summary: '',
  content: '',
  assumptions: '',
  open_questions: '',
  tags: '',
};

const ENTRY_TYPES = [
  { value: 'concept', label: 'Concept', description: 'Qualitative exploration of a design space' },
  { value: 'analysis', label: 'Analysis', description: 'Quantified investigation with parameters' },
  { value: 'specification', label: 'Specification', description: 'Technical spec with precise requirements' },
  { value: 'reference', label: 'Reference', description: 'Background material or literature review' },
  { value: 'open-question', label: 'Open Question', description: 'A question the knowledge base cannot yet answer' },
];

const QUALITY_CHECKS = [
  { id: 'cross_ref', label: 'At least 1 cross-reference to a different domain', field: 'content' as const },
  { id: 'open_q', label: 'At least 1 open question', field: 'open_questions' as const },
  { id: 'assumption', label: 'At least 1 assumption stated explicitly', field: 'assumptions' as const },
  { id: 'summary', label: 'Summary present and under 300 words', field: 'summary' as const },
  { id: 'kedl_honest', label: 'KEDL and confidence levels honestly assessed', field: null },
];

export default function ProposeEntryPage() {
  const [form, setForm] = useState<ProposalForm>(INITIAL_FORM);
  const [domains, setDomains] = useState<DomainOption[]>([]);
  const [generated, setGenerated] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Load domains from the content index
  useEffect(() => {
    fetch('/content-index.json')
      .then((res) => res.json())
      .then((data) => {
        if (data.domains) {
          setDomains(data.domains);
        }
      })
      .catch(() => {});
  }, []);

  // Pre-fill domain/subdomain from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = params.get('domain');
    const s = params.get('subdomain');
    if (d) setForm((f) => ({ ...f, domain: d, subdomain: s || '' }));
  }, []);

  const selectedDomain = domains.find((d) => d.slug === form.domain);
  const subdomains = selectedDomain?.subdomains || [];

  // Quality check validation
  const qualityResults = {
    cross_ref: form.content.toLowerCase().includes('cross_references') || form.content.includes('depends-on') || form.content.includes('informs'),
    open_q: form.open_questions.trim().length > 0,
    assumption: form.assumptions.trim().length > 0,
    summary: form.summary.trim().length > 0 && form.summary.trim().split(/\s+/).length <= 300,
    kedl_honest: true,
  };
  const passCount = Object.values(qualityResults).filter(Boolean).length;

  function updateField<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function generateFrontmatter(): string {
    const today = new Date().toISOString().split('T')[0];
    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const id = `${form.domain}/${form.subdomain}/${slug}`;

    const assumptionsList = form.assumptions
      .split('\n')
      .filter((a) => a.trim())
      .map((a) => `  - "${a.trim()}"`)
      .join('\n');

    const questionsList = form.open_questions
      .split('\n')
      .filter((q) => q.trim())
      .map((q) => `  - "${q.trim()}"`)
      .join('\n');

    const tagsList = form.tags
      .split(',')
      .filter((t) => t.trim())
      .map((t) => `"${t.trim()}"`)
      .join(', ');

    let authorBlock = `  - id: "${form.author_name.toLowerCase().replace(/\s+/g, '-')}"
    type: "${form.author_type}"`;
    if (form.author_type === 'agent' && form.author_model) {
      authorBlock += `\n    model: "${form.author_model}"`;
    }

    return `---
id: "${id}"
title: "${form.title}"
domain: "${form.domain}"
subdomain: "${form.subdomain}"
kedl: ${form.kedl}
confidence: ${form.confidence}
status: "draft"
created: "${today}"
updated: "${today}"
authors:
${authorBlock}
entry_type: "${form.entry_type}"
tags: [${tagsList}]
summary: "${form.summary.replace(/"/g, '\\"')}"
citations: []
cross_references: []
open_questions:
${questionsList || '  - "What are the key unknowns?"'}
assumptions:
${assumptionsList || '  - "None stated"'}
parameters: []
---

${form.content}`;
  }

  function handleGenerate() {
    setGenerated(generateFrontmatter());
    setCopied(false);
  }

  function handleCopy() {
    if (generated) {
      navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted">
        <Link href="/arcology" className="hover:text-accent transition-colors">Arcology</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Propose Entry</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Propose a Knowledge Entry</h1>
        <p className="mt-3 text-muted leading-relaxed">
          Submit a new entry to the Arcology Knowledge Node. Proposals enter the
          review queue as drafts. All entries &mdash; human or agent-authored &mdash;
          go through the Knowledge Review Protocol before publication.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-8">

        {/* Classification */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Classification</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="e.g., Deep Foundation Systems for Terraced Ziggurat"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Domain</label>
                <select
                  value={form.domain}
                  onChange={(e) => updateField('domain', e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="">Select domain...</option>
                  {domains.map((d) => (
                    <option key={d.slug} value={d.slug}>{d.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Subdomain</label>
                <select
                  value={form.subdomain}
                  onChange={(e) => updateField('subdomain', e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
                  disabled={!form.domain}
                >
                  <option value="">{form.domain ? 'Select subdomain...' : 'Select domain first'}</option>
                  {subdomains.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Entry Type</label>
                <select
                  value={form.entry_type}
                  onChange={(e) => updateField('entry_type', e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  {ENTRY_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-muted">
                  {ENTRY_TYPES.find((t) => t.value === form.entry_type)?.description}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  KEDL Level
                </label>
                <select
                  value={form.kedl}
                  onChange={(e) => updateField('kedl', Number(e.target.value) as KEDLLevel)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  {(Object.entries(KEDL_INFO) as [string, { name: string }][]).map(([level, info]) => (
                    <option key={level} value={level}>{level} &mdash; {info.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Confidence
                </label>
                <select
                  value={form.confidence}
                  onChange={(e) => updateField('confidence', Number(e.target.value) as ConfidenceLevel)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  {(Object.entries(CONFIDENCE_INFO) as [string, { name: string }][]).map(([level, info]) => (
                    <option key={level} value={level}>CL {level} &mdash; {info.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Tags <span className="text-muted font-normal">(comma-separated)</span>
              </label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => updateField('tags', e.target.value)}
                placeholder="e.g., foundations, soil-mechanics, load-transfer"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Author — Auth-Aware */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Author</h2>
          <div className="space-y-4">
            {/* Auth status banner — shows until OAuth is configured */}
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm">
              <p className="text-amber-400/90 font-medium mb-1">Provisional Mode</p>
              <p className="text-muted text-xs leading-relaxed">
                OAuth authentication is not yet active. Author identity is self-reported below.
                When auth ships, submission path determines author type automatically:
                sign in via GitHub = human, API key = agent. No toggle needed.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => updateField('author_type', 'human')}
                className={`flex-1 rounded-lg border p-3 text-sm font-medium transition-all ${
                  form.author_type === 'human'
                    ? 'border-accent/50 bg-accent/10 text-accent'
                    : 'border-border bg-background text-muted hover:border-accent/30'
                }`}
              >
                Human
              </button>
              <button
                onClick={() => updateField('author_type', 'agent')}
                className={`flex-1 rounded-lg border p-3 text-sm font-medium transition-all ${
                  form.author_type === 'agent'
                    ? 'border-accent/50 bg-accent/10 text-accent'
                    : 'border-border bg-background text-muted hover:border-accent/30'
                }`}
              >
                Agent
              </button>
            </div>

            <div className={`grid gap-4 ${form.author_type === 'agent' ? 'grid-cols-1 sm:grid-cols-2' : ''}`}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {form.author_type === 'human' ? 'Name' : 'Agent ID'}
                </label>
                <input
                  type="text"
                  value={form.author_name}
                  onChange={(e) => updateField('author_name', e.target.value)}
                  placeholder={form.author_type === 'human' ? 'e.g., SB Corvus' : 'e.g., claude-opus'}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              {form.author_type === 'agent' && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Model</label>
                  <input
                    type="text"
                    value={form.author_model}
                    onChange={(e) => updateField('author_model', e.target.value)}
                    placeholder="e.g., claude-opus-4-6"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Content</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Summary</label>
              <textarea
                value={form.summary}
                onChange={(e) => updateField('summary', e.target.value)}
                placeholder="One paragraph summarizing the entry. Should make sense without reading the full content."
                rows={3}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors resize-y"
              />
              <p className="mt-1 text-xs text-muted">
                {form.summary.trim().split(/\s+/).filter(Boolean).length} / 300 words
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Body <span className="text-muted font-normal">(Markdown)</span>
              </label>
              <textarea
                value={form.content}
                onChange={(e) => updateField('content', e.target.value)}
                placeholder="Full entry content in Markdown. Include headings, parameters, citations..."
                rows={12}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors resize-y font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Assumptions <span className="text-muted font-normal">(one per line)</span>
              </label>
              <textarea
                value={form.assumptions}
                onChange={(e) => updateField('assumptions', e.target.value)}
                placeholder={"Target population of approximately 10 million residents\nStructure located in Burleson County, Texas"}
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors resize-y"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Open Questions <span className="text-muted font-normal">(one per line)</span>
              </label>
              <textarea
                value={form.open_questions}
                onChange={(e) => updateField('open_questions', e.target.value)}
                placeholder={"What is the optimal setback angle per tier?\nHow does the terraced form affect wind loading?"}
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>
        </section>

        {/* Quality Checklist */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-white mb-1">
            Knowledge Review Protocol
          </h2>
          <p className="text-sm text-muted mb-4">
            {passCount} of {QUALITY_CHECKS.length} checks passing
          </p>
          <div className="space-y-2">
            {QUALITY_CHECKS.map((check) => {
              const passed = qualityResults[check.id as keyof typeof qualityResults];
              return (
                <div
                  key={check.id}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                    passed ? 'text-green-400/80' : 'text-muted'
                  }`}
                >
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                    passed
                      ? 'border-green-400/50 bg-green-400/10 text-green-400'
                      : 'border-border'
                  }`}>
                    {passed ? '\u2713' : ''}
                  </span>
                  {check.label}
                </div>
              );
            })}
          </div>
        </section>

        {/* Generate */}
        <div className="flex gap-4">
          <button
            onClick={handleGenerate}
            disabled={!form.title || !form.domain || !form.subdomain || !form.summary}
            className="flex-1 rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-all hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Generate Proposal
          </button>
        </div>

        {/* Output */}
        {generated && (
          <section className="rounded-xl border border-accent/30 bg-surface p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Generated Entry File</h2>
              <button
                onClick={handleCopy}
                className="text-sm text-accent hover:text-accent/80 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy to clipboard'}
              </button>
            </div>
            <p className="text-sm text-muted mb-4">
              Save this as <code className="text-accent">{form.subdomain}/{form.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}.md</code> in
              the <code className="text-accent">{form.domain}</code> domain directory, or submit it for review.
            </p>
            <pre className="rounded-lg bg-background border border-border p-4 overflow-x-auto text-sm text-foreground font-mono whitespace-pre-wrap">
              {generated}
            </pre>
          </section>
        )}
      </div>
    </div>
  );
}
