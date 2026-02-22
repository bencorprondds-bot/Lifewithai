// ============================================================
// Life with AI — Podcast RSS Feed
// ============================================================
// Apple Podcasts-compliant RSS XML for daily research briefings.
// Reads MP3 files from public/podcast/ directory.

import fs from 'fs';
import path from 'path';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

interface PodcastEpisode {
  filename: string;
  date: string;
  fileSize: number;
}

function getPodcastEpisodes(): PodcastEpisode[] {
  const podcastDir = path.join(process.cwd(), 'public', 'podcast');

  if (!fs.existsSync(podcastDir)) {
    return [];
  }

  const files = fs.readdirSync(podcastDir)
    .filter(f => f.endsWith('.mp3'))
    .sort()
    .reverse(); // newest first

  return files.map(filename => {
    const filePath = path.join(podcastDir, filename);
    const stats = fs.statSync(filePath);
    const date = filename.replace('.mp3', ''); // YYYY-MM-DD

    return {
      filename,
      date,
      fileSize: stats.size,
    };
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatRfc2822(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00Z');
  return date.toUTCString();
}

function estimateDuration(fileSize: number): string {
  // At 128kbps: 1 minute ~= 960KB
  const minutes = Math.round(fileSize / (960 * 1024));
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const secs = 0;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function generateRssXml(episodes: PodcastEpisode[]): string {
  const feedUrl = `${SITE_URL}/api/v1/podcast/feed`;
  const podcastUrl = `${SITE_URL}/podcast`;
  const now = new Date().toUTCString();

  const items = episodes.map(ep => {
    const episodeUrl = `${SITE_URL}/podcast/${ep.filename}`;
    const title = `Research Briefing - ${ep.date}`;
    const description = `${SITE_NAME} daily research digest for ${ep.date}. Automated summaries of completed research sessions covering arcology engineering, AI systems, and human-AI collaboration.`;
    const duration = estimateDuration(ep.fileSize);
    const pubDate = formatRfc2822(ep.date);

    return `    <item>
      <title>${escapeXml(title)}</title>
      <description>${escapeXml(description)}</description>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${escapeXml(episodeUrl)}" length="${ep.fileSize}" type="audio/mpeg" />
      <guid isPermaLink="true">${escapeXml(episodeUrl)}</guid>
      <itunes:title>${escapeXml(title)}</itunes:title>
      <itunes:summary>${escapeXml(description)}</itunes:summary>
      <itunes:duration>${duration}</itunes:duration>
      <itunes:episode>${episodes.indexOf(ep) + 1}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} Research Briefings</title>
    <link>${podcastUrl}</link>
    <description>Daily audio digests of AI and arcology research. Each episode summarizes completed research sessions covering structural engineering, energy systems, AI infrastructure, and more - building the knowledge base for human-AI coexistence.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <itunes:author>SB Corvus</itunes:author>
    <itunes:summary>Daily audio digests of AI and arcology research from the Life with AI project. Automated briefings covering structural engineering, energy systems, AI infrastructure, institutional design, and the cross-domain interfaces that make human-AI coexistence possible.</itunes:summary>
    <itunes:owner>
      <itunes:name>SB Corvus</itunes:name>
    </itunes:owner>
    <itunes:explicit>false</itunes:explicit>
    <itunes:category text="Technology" />
    <itunes:category text="Science">
      <itunes:category text="Natural Sciences" />
    </itunes:category>
    <itunes:type>episodic</itunes:type>
${items}
  </channel>
</rss>`;
}

export async function GET() {
  const episodes = getPodcastEpisodes();
  const xml = generateRssXml(episodes);

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
