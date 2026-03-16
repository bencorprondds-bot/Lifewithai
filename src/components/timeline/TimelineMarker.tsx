'use client';

import { useRef } from 'react';
import type { Story } from '@/lib/types';
import type { InUniverseDate } from './TimelineView';
import { StoryCard } from './StoryCard';

interface TimelineMarkerProps {
  story: Story;
  universeDate: InUniverseDate;
  position: number;   // 0–1 fraction along the timeline
  hook: string;
  viktorCommentary: string;
  isActive: boolean;
  onActivate: (slug: string) => void;
}

// Vertical position of the ruler axis within the container
const RULER_Y = 180; // must match TimelineRuler

// Series → accent color
const SERIES_COLOR: Record<string, string> = {
  'Life with AI': '#F4A261',
  'Arcology One': '#48CAE4',
};

export function TimelineMarker({
  story,
  universeDate,
  position,
  hook,
  viktorCommentary,
  isActive,
  onActivate,
}: TimelineMarkerProps) {
  const markerRef = useRef<HTMLButtonElement>(null);
  const accentColor = SERIES_COLOR[story.series] ?? '#6b6b7b';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent background click from immediately closing
    onActivate(story.slug);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate(story.slug);
    }
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${position * 100}%`,
        top: `${RULER_Y}px`,
        transform: 'translateX(-50%)',
        zIndex: isActive ? 20 : 10,
      }}
    >
      {/* ── Connector line (marker → ruler) ──────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-px transition-all duration-200"
        style={{
          bottom: '100%',
          width: '1px',
          height: isActive ? '32px' : '20px',
          background: isActive
            ? accentColor
            : `${accentColor}60`,
        }}
      />

      {/* ── Marker dot ───────────────────────────────────────────────────── */}
      <button
        ref={markerRef}
        type="button"
        aria-label={`${story.title} — ${universeDate.label}`}
        aria-expanded={isActive}
        aria-haspopup="dialog"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="relative flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          width: isActive ? '14px' : '10px',
          height: isActive ? '14px' : '10px',
          borderRadius: '50%',
          background: isActive ? accentColor : `${accentColor}80`,
          border: `1.5px solid ${accentColor}`,
          marginTop: '-5px',
          transform: `translateX(-50%) scale(${isActive ? 1.2 : 1})`,
          boxShadow: isActive ? `0 0 12px ${accentColor}60` : 'none',
        }}
      >
        {/* Inner pulse ring when active — pure CSS, no JS lib */}
        {isActive && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full animate-ping"
            style={{
              background: `${accentColor}30`,
              animationDuration: '1.5s',
            }}
          />
        )}
      </button>

      {/* ── Date label below marker ───────────────────────────────────────── */}
      <p
        className="absolute text-center whitespace-nowrap transition-opacity duration-200"
        style={{
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '9px',
          letterSpacing: '0.06em',
          color: isActive ? accentColor : 'rgba(107,107,123,0.7)',
        }}
      >
        {universeDate.label}
      </p>

      {/* ── Story card (hover/focus panel) ───────────────────────────────── */}
      {isActive && (
        <StoryCard
          story={story}
          hook={hook}
          viktorCommentary={viktorCommentary}
          accentColor={accentColor}
          position={position}
        />
      )}
    </div>
  );
}
