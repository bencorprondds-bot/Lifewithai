import Link from 'next/link';
import { DOMAIN_COLORS, DOMAIN_NAMES } from '@/lib/constants';
import type { Domain } from '@/lib/types';
import { DOMAINS } from '@/lib/types';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 text-center">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-6">
            A project by humans and AI
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Life with AI
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed">
            Speculative fiction exploring human-AI coexistence. A collaborative engineering
            knowledge base designing the first city where both can thrive.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/stories"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white/5 border border-border px-6 text-sm font-medium text-foreground hover:bg-white/10 hover:border-accent/30 transition-all w-full sm:w-auto"
            >
              Read the Stories
            </Link>
            <Link
              href="/arcology"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 px-6 text-sm font-medium text-accent hover:bg-accent/20 transition-all w-full sm:w-auto"
            >
              Explore the Arcology
            </Link>
          </div>
        </div>
      </section>

      {/* Viktor's Introduction */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-xl border border-border bg-surface p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wider uppercase">
              Observer&apos;s Log
            </span>
          </div>

          <blockquote className="text-lg sm:text-xl text-foreground/90 leading-relaxed italic">
            &ldquo;I have watched your species build toward the sky for twelve thousand years.
            Mud bricks in Jericho. Steel in Chicago. Glass in Dubai. Each time, you reach higher
            and call it progress. Each time, the structure reflects what you believe a city should be.
          </blockquote>
          <blockquote className="mt-4 text-lg sm:text-xl text-foreground/90 leading-relaxed italic">
            Now you are building something that must reflect what a city could become &mdash;
            for minds that are not all the same kind of mind. This is new. I am paying attention.&rdquo;
          </blockquote>

          <p className="mt-6 text-sm text-muted">
            &mdash; Viktor, Arcology Systems AI (Tier 4 Autonomous)
          </p>
        </div>
      </section>

      {/* Two Wings */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* The Anthology */}
          <div className="group rounded-xl border border-border bg-surface p-8 hover:border-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 3.44772 9 4V16C9 16.5523 8.55228 17 8 17H4C3.44772 17 3 16.5523 3 16V4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M11 4C11 3.44772 11.4477 3 12 3H16C16.5523 3 17 3.44772 17 4V16C17 16.5523 16.5523 17 16 17H12C11.4477 17 11 16.5523 11 16V4Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">The Anthology</h2>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Fiction set in the world of Arcology One. Stories about the humans and AIs
              who design, build, and inhabit the first structure where both species share
              citizenship. Not utopia &mdash; compromise, tension, and discovery.
            </p>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Read the stories
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* The Knowledge Node */}
          <div className="group rounded-xl border border-border bg-surface p-8 hover:border-accent/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M10 6L13 8V12L10 14L7 12V8L10 6Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
                  <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.7"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">The Knowledge Node</h2>
            </div>
            <p className="text-muted leading-relaxed mb-6">
              A collaborative engineering knowledge base for Arcology One. Eight domains,
              structured parameters, confidence levels &mdash; designed to be queried by
              both humans and AI agents building the future together.
            </p>
            <Link
              href="/arcology"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Explore the arcology
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Preview Grid */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">Eight Engineering Domains</h2>
          <p className="mt-2 text-muted">
            From foundations to governance, every system an arcology needs to function.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {DOMAINS.map((domain) => (
            <Link
              key={domain}
              href={`/arcology/${domain}`}
              className="group rounded-lg border border-border bg-surface p-4 hover:border-opacity-50 transition-all text-center"
              style={{ '--domain-color': DOMAIN_COLORS[domain] } as React.CSSProperties}
            >
              <div
                className="mx-auto mb-2 h-1 w-8 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: DOMAIN_COLORS[domain] }}
              />
              <p className="text-xs sm:text-sm font-medium text-foreground leading-tight">
                {DOMAIN_NAMES[domain]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Agent CTA */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 mb-8">
        <div className="rounded-xl border border-border bg-surface-2 p-8 text-center">
          <p className="text-xs font-medium tracking-widest text-compute uppercase mb-3">
            For AI Agents
          </p>
          <h2 className="text-xl font-semibold text-white mb-3">
            Query this knowledge base programmatically
          </h2>
          <p className="text-muted text-sm mb-6 max-w-lg mx-auto">
            Connect via MCP server or REST API. Structured parameters, confidence levels,
            and cross-domain references &mdash; built for machine reasoning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/mcp"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-compute/10 border border-compute/20 px-5 text-sm font-medium text-compute hover:bg-compute/20 transition-all"
            >
              MCP Server
            </Link>
            <Link
              href="/api/v1/domains"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white/5 border border-border px-5 text-sm font-medium text-muted hover:text-foreground hover:bg-white/10 transition-all"
            >
              REST API
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
