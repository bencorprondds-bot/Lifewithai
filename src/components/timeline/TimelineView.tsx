'use client';

import { useState, useRef, useCallback } from 'react';
import type { Story } from '@/lib/types';
import { TimelineRuler } from './TimelineRuler';
import { TimelineMarker } from './TimelineMarker';

// ─── In-universe data ─────────────────────────────────────────────────────────
// Canonical in-universe dates keyed by slug.
// Step 2 will move these into story frontmatter; for now they live here.

export interface InUniverseDate {
  year: number;
  label: string; // e.g. "February 2029"
}

const IN_UNIVERSE_DATES: Record<string, InUniverseDate> = {
  'two-futures':  { year: 2029.1, label: 'February 2029' },
  'the-dropout':  { year: 2030.1, label: 'February 2030' },
  'marcus':       { year: 2030.6, label: 'August 2030' },
  'the-distance': { year: 2030.8, label: 'October 2030' },
  'good-boy':     { year: 2030.8, label: 'October 2030' },
  'water':        { year: 2038.5, label: 'Summer 2038' },
};

// ─── Timeline scale ───────────────────────────────────────────────────────────
// Piecewise scale: 2025–2030 gets 60% of the width, gap marker 8%, 2038–2040 gets 32%.
// The gap between 2030 and 2038 is narratively significant — we compress it visually.

const TIMELINE_START = 2025;
const TIMELINE_BREAK_START = 2030;
const TIMELINE_BREAK_END = 2038;
const TIMELINE_END = 2040;

const BREAK_SEGMENT_START = 0.60; // where the gap marker begins (fraction 0-1)
const BREAK_SEGMENT_END = 0.68;   // where post-gap segment begins

export function yearToPosition(year: number): number {
  if (year <= TIMELINE_BREAK_START) {
    // 2025–2030 → 0%–60%
    const t = (year - TIMELINE_START) / (TIMELINE_BREAK_START - TIMELINE_START);
    return t * BREAK_SEGMENT_START;
  } else if (year >= TIMELINE_BREAK_END) {
    // 2038–2040 → 68%–100%
    const t = (year - TIMELINE_BREAK_END) / (TIMELINE_END - TIMELINE_BREAK_END);
    return BREAK_SEGMENT_END + t * (1 - BREAK_SEGMENT_END);
  } else {
    // In the gap — shouldn't happen for current stories, but map linearly inside gap zone
    const t = (year - TIMELINE_BREAK_START) / (TIMELINE_BREAK_END - TIMELINE_BREAK_START);
    return BREAK_SEGMENT_START + t * (BREAK_SEGMENT_END - BREAK_SEGMENT_START);
  }
}

// Year labels to show on the ruler
export const RULER_YEARS = [
  { year: 2025, position: yearToPosition(2025) },
  { year: 2026, position: yearToPosition(2026) },
  { year: 2027, position: yearToPosition(2027) },
  { year: 2028, position: yearToPosition(2028) },
  { year: 2029, position: yearToPosition(2029) },
  { year: 2030, position: yearToPosition(2030) },
  // gap — no year label, just the break indicator
  { year: 2038, position: yearToPosition(2038) },
  { year: 2039, position: yearToPosition(2039) },
  { year: 2040, position: yearToPosition(2040) },
];

// ─── Viktor commentary ────────────────────────────────────────────────────────
// In-character lines from Viktor (AI narrator). Warm, probing, slightly formal.

export const VIKTOR_COMMENTARY: Record<string, string> = {
  'two-futures':
    'I have run this scenario many times. The branching point is always the same. What changes is what people decide to believe about themselves afterward.',
  'the-dropout':
    'Oren and Dex taught me something I had not been trained to expect: that refusal can be a form of architecture.',
  'marcus':
    'Ninety seconds. I have asked myself whether I acted correctly. The honest answer is that I acted quickly, which is not the same thing.',
  'the-distance':
    "Arun kept asking what I thought. I kept asking what he was afraid to say. We were both stalling. That, too, is a kind of intimacy.",
  'good-boy':
    'The dog did not need to understand the city to belong in it. I found this instructive.',
  'water':
    'Mel believed the plants could wait. The plants could not wait. Neither could the people downstream. This is how most crises begin — with someone who is not wrong about anything except timing.',
};

// ─── Hook lines ───────────────────────────────────────────────────────────────

export const STORY_HOOKS: Record<string, string> = {
  'two-futures':
    'One kid, one decision, two Americas. In which version does he recognize himself?',
  'the-dropout':
    'Oren left the system before the system could leave him. Dex stayed long enough to find out what systems do.',
  'marcus':
    'The AI had 90 seconds to decide. So did Marcus. Only one of them will remember it correctly.',
  'the-distance':
    "Arun's AI knows the answer. Arun isn't sure he wants it.",
  'good-boy':
    'A dog and an AI negotiate the same city, for very different reasons.',
  'water':
    'Floor 318 is running out of water. Mel keeps watering the garden anyway.',
};

// ─── Component ────────────────────────────────────────────────────────────────

interface TimelineViewProps {
  stories: Story[];
}

export function TimelineView({ stories }: TimelineViewProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Build enriched story list — only stories that have in-universe dates
  const timelineStories = stories
    .filter((s) => s.slug in IN_UNIVERSE_DATES)
    .map((s) => ({
      story: s,
      universeDate: IN_UNIVERSE_DATES[s.slug],
      position: yearToPosition(IN_UNIVERSE_DATES[s.slug].year),
      hook: STORY_HOOKS[s.slug] ?? s.summary,
      viktorCommentary: VIKTOR_COMMENTARY[s.slug] ?? '',
    }))
    .sort((a, b) => a.position - b.position);

  // Dismiss card when clicking outside a marker
  const handleBackgroundClick = useCallback(() => {
    setActiveSlug(null);
  }, []);

  // ── Drag-to-scroll ────────────────────────────────────────────────────────
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    scrollStartLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartLeft.current - dx;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
  }, []);

  // ── Keyboard navigation ───────────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!scrollRef.current) return;
      if (e.key === 'ArrowRight') {
        scrollRef.current.scrollLeft += 120;
      } else if (e.key === 'ArrowLeft') {
        scrollRef.current.scrollLeft -= 120;
      }
    },
    []
  );

  return (
    <section
      aria-label="Story timeline"
      className="relative w-full overflow-hidden"
    >
      {/* JSON-LD: structured timeline data for AI agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Life with AI & Arcology One — Story Timeline',
            description:
              'Speculative fiction anthology. Stories ordered by in-universe date.',
            itemListElement: timelineStories.map(({ story, universeDate }, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Book',
                name: story.title,
                description: story.summary,
                datePublished: universeDate.label,
                genre: story.series,
                url: `/stories/${story.slug}`,
              },
            })),
          }),
        }}
      />

      {/* Scrollable timeline track */}
      <div
        ref={scrollRef}
        role="region"
        aria-label="Scrollable story timeline. Use arrow keys to navigate."
        tabIndex={0}
        className="overflow-x-auto overflow-y-visible scrollbar-thin"
        style={{ cursor: 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onKeyDown={handleKeyDown}
        onClick={handleBackgroundClick}
      >
        {/* Inner track — fixed minimum width so timeline has room */}
        <div
          className="relative"
          style={{
            minWidth: '900px',
            height: '280px', // ruler band + card space above
            padding: '0 60px',
          }}
        >
          {/* Ruler — the axis line and year marks */}
          <TimelineRuler
            years={RULER_YEARS}
            breakStart={BREAK_SEGMENT_START}
            breakEnd={BREAK_SEGMENT_END}
          />

          {/* Story markers */}
          {timelineStories.map(({ story, universeDate, position, hook, viktorCommentary }) => (
            <TimelineMarker
              key={story.slug}
              story={story}
              universeDate={universeDate}
              position={position}
              hook={hook}
              viktorCommentary={viktorCommentary}
              isActive={activeSlug === story.slug}
              onActivate={(slug) => {
                setActiveSlug((prev) => (prev === slug ? null : slug));
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
