// ============================================================
// Arcology Knowledge Node — Build-Time Index Generator
// ============================================================
// Runs as `npm run prebuild` before Next.js build.
// Reads all content files and generates public/content-index.json
// This index is consumed by:
//   - REST API routes (at request time)
//   - MCP server on Fly.io (fetched over HTTP)
//   - Client-side search (loaded in browser)

import fs from 'fs';
import path from 'path';
import {
  getAllKnowledgeEntries,
  getAllDomainMeta,
  getAllStories,
  getAllBlogPosts,
  getAllPages,
} from './content';
import { computeDomainStats, computeAggregateStats } from './stats';
import type { ContentIndex } from './types';

function buildIndex(): void {
  console.log('[index-builder] Starting content index generation...');

  const entries = getAllKnowledgeEntries();
  const domains = getAllDomainMeta();
  const stories = getAllStories();
  const blogPosts = getAllBlogPosts();
  const pages = getAllPages();

  console.log(`[index-builder] Found ${entries.length} knowledge entries`);
  console.log(`[index-builder] Found ${domains.length} domain metadata files`);
  console.log(`[index-builder] Found ${stories.length} stories`);
  console.log(`[index-builder] Found ${blogPosts.length} blog posts`);
  console.log(`[index-builder] Found ${pages.length} pages`);

  const domainStats = computeDomainStats(entries, domains);
  const aggregateStats = computeAggregateStats(entries, domains);

  const index: ContentIndex = {
    generated_at: new Date().toISOString(),
    entries,
    domains,
    domain_stats: domainStats,
    stories,
    blog_posts: blogPosts,
    pages,
    aggregate_stats: aggregateStats,
  };

  const outputPath = path.join(process.cwd(), 'public', 'content-index.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2), 'utf-8');

  console.log(`[index-builder] Index written to ${outputPath}`);
  console.log(`[index-builder] Total entries: ${aggregateStats.total_entries}`);
  console.log(`[index-builder] Schema completeness: ${aggregateStats.schema_completeness}%`);
  console.log(`[index-builder] Domain balance index: ${aggregateStats.domain_balance_index}`);
  console.log('[index-builder] Done.');
}

buildIndex();
