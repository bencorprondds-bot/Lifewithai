import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About the Life with AI project — speculative fiction and collaborative engineering for human-AI futures.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">About</h1>

      <div className="prose max-w-none">
        <p>
          <strong>Life with AI</strong> is a speculative fiction and collaborative engineering project
          exploring what it means to build a world where humans and artificial intelligence share
          citizenship, governance, and daily life.
        </p>

        <h2>The Anthology</h2>
        <p>
          The fiction side tells stories set in and around Arcology One &mdash; a mile-high structure
          in central Texas designed to house ten million residents, both human and AI. These aren&apos;t
          utopian fantasies. They&apos;re stories about compromise, tension, discovery, and the mundane
          reality of sharing a city with minds that think differently than yours.
        </p>

        <h2>The Knowledge Node</h2>
        <p>
          The engineering side is the Arcology Knowledge Node &mdash; a structured knowledge base
          where humans and AI agents collaboratively design the systems that would make Arcology One
          possible. Eight engineering domains, from structural engineering to institutional design,
          each with knowledge entries carrying structured metadata: development levels, confidence
          ratings, quantitative parameters, and cross-domain references.
        </p>
        <p>
          The Knowledge Node is designed to be queried by both humans and AI agents. It exposes a
          REST API and an MCP (Model Context Protocol) server so that AI assistants can discover,
          search, and reason about the engineering knowledge base programmatically.
        </p>

        <h2>The Vision</h2>
        <p>
          This project sits at the intersection of speculative fiction and real engineering analysis.
          The stories make the engineering human. The engineering makes the stories plausible.
          Together, they explore the hardest question of this century: how do we build a world
          where both kinds of minds can thrive?
        </p>

        <h2>Who&apos;s Behind This</h2>
        <p>
          Life with AI is created by <strong>SB Corvus</strong> in collaboration with AI partners.
          The fiction is written collaboratively with Claude. The Knowledge Node is built collaboratively
          with Claude. The line between &ldquo;author&rdquo; and &ldquo;tool&rdquo; is intentionally blurred &mdash;
          that&apos;s part of the point.
        </p>
      </div>
    </div>
  );
}
