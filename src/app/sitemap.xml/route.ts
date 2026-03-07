// ============================================================
// sitemap.xml — Dynamic XML Sitemap
// ============================================================
// Lists all stories, knowledge entries, blog posts, and static pages.

import { getAllStories, getAllKnowledgeEntries, getAllBlogPosts } from '@/lib/content';

const BASE = 'https://lifewithai.ai';

const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/brief', changefreq: 'monthly', priority: '0.6' },
  { path: '/stories', changefreq: 'weekly', priority: '0.9' },
  { path: '/arcology', changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/mcp', changefreq: 'monthly', priority: '0.7' },
];

export async function GET() {
  const stories = getAllStories();
  const entries = getAllKnowledgeEntries();
  const posts = getAllBlogPosts();

  const urls: string[] = [];

  // Static pages
  for (const page of STATIC_PAGES) {
    urls.push(`  <url>
    <loc>${BASE}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }

  // Stories
  for (const story of stories) {
    urls.push(`  <url>
    <loc>${BASE}/stories/${story.slug}</loc>
    <lastmod>${story.published}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  // Knowledge entries
  for (const entry of entries) {
    urls.push(`  <url>
    <loc>${BASE}/arcology/${entry.domain}/${entry.slug}</loc>
    <lastmod>${entry.updated}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  // Blog posts
  for (const post of posts) {
    urls.push(`  <url>
    <loc>${BASE}/blog/${post.slug}</loc>
    <lastmod>${post.published}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
