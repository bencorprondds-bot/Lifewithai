import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import CopyFeedButton from './CopyFeedButton';

export const metadata: Metadata = {
  title: 'Podcast',
  description: 'Daily audio digests of AI and arcology research from the Life with AI project.',
};

interface Episode {
  date: string;
  filename: string;
  fileSize: number;
  durationEstimate: string;
}

function getEpisodes(): Episode[] {
  const podcastDir = path.join(process.cwd(), 'public', 'podcast');

  if (!fs.existsSync(podcastDir)) {
    return [];
  }

  return fs.readdirSync(podcastDir)
    .filter(f => f.endsWith('.mp3'))
    .sort()
    .reverse()
    .map(filename => {
      const filePath = path.join(podcastDir, filename);
      const stats = fs.statSync(filePath);
      const date = filename.replace('.mp3', '');
      const minutes = Math.max(1, Math.round(stats.size / (960 * 1024)));

      return {
        date,
        filename,
        fileSize: stats.size,
        durationEstimate: `${minutes} min`,
      };
    });
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00Z');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export default function PodcastPage() {
  const episodes = getEpisodes();
  const feedUrl = `${SITE_URL}/api/v1/podcast/feed`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-3">
          Audio Briefings
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Research Podcast
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          Daily audio digests of our research sessions. Each episode summarizes
          the day&apos;s completed research across arcology engineering, AI
          systems, and the cross-domain interfaces that make it all work.
        </p>
      </div>

      {/* Subscribe section */}
      <div className="mb-10 rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-white mb-3">Subscribe</h2>
        <p className="text-sm text-muted mb-4">
          Add this RSS feed to your podcast app to get new episodes automatically.
        </p>
        <div className="flex items-center gap-3">
          <code className="flex-1 rounded-lg bg-surface-2 px-4 py-2.5 text-sm text-foreground font-mono truncate border border-border">
            {feedUrl}
          </code>
          <CopyFeedButton url={feedUrl} />
        </div>
        <p className="mt-4 text-xs text-muted">
          Coming soon to Spotify and Apple Podcasts.
        </p>
      </div>

      {/* Episodes */}
      {episodes.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-10 text-center">
          <p className="text-muted">
            No episodes yet. The first digest will appear after research sessions
            generate enough data for an audio briefing.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {episodes.map((ep) => (
            <div
              key={ep.date}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Research Briefing
                  </h2>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted">
                    <span>{formatDate(ep.date)}</span>
                    <span>&middot;</span>
                    <span>{ep.durationEstimate}</span>
                    <span>&middot;</span>
                    <span>{formatFileSize(ep.fileSize)}</span>
                  </div>
                </div>
              </div>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio
                controls
                preload="none"
                className="w-full"
              >
                <source src={`/podcast/${ep.filename}`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href={`/podcast/${ep.filename}`}
                  download
                  className="text-xs text-accent hover:text-accent/80 transition-colors"
                >
                  Download MP3
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
