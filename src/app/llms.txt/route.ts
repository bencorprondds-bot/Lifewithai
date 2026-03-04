import { getAllKnowledgeEntries, getAllStories, getAllBlogPosts } from '@/lib/content';
import { DOMAINS } from '@/lib/types';
import { DOMAIN_NAMES } from '@/lib/constants';

export async function GET() {
  const stories = getAllStories();
  const posts = getAllBlogPosts();

  const lines = [
    '# Life with AI',
    '',
    '> Speculative fiction exploring human-AI coexistence, plus a collaborative',
    '> engineering knowledge base for building the first city where humans and AI',
    '> share citizenship. 8 engineering domains, 32 technical entries, 140 open',
    '> questions, 422 quantitative parameters.',
    '',
    '## Fiction',
    '',
    ...stories.map(s => `- [${s.title}](https://lifewithai.ai/stories/${s.slug}): ${s.summary}`),
    '',
    '## Blog',
    '',
    ...posts.map(p => `- [${p.title}](https://lifewithai.ai/blog/${p.slug}): ${p.summary}`),
    '',
    '## Arcology One — Engineering Knowledge Base',
    '',
    ...DOMAINS.map(d => `- [${DOMAIN_NAMES[d]}](https://lifewithai.ai/arcology/${d}): 4 entries, 4 subdomains`),
    '',
    '## API (no auth required for reads)',
    '',
    '- [All Domains](https://lifewithai.ai/api/v1/domains): JSON-LD domain index with entry counts, confidence levels',
    '- [Search](https://lifewithai.ai/api/v1/search?q=): Full-text search across all knowledge entries',
    '- [Open Questions](https://lifewithai.ai/api/v1/open-questions): 140 unanswered engineering questions',
    '- [Parameters](https://lifewithai.ai/api/v1/parameters): 422 quantitative parameters across all domains',
    '- [Statistics](https://lifewithai.ai/api/v1/stats): Platform-wide stats and KEDL distribution',
    '',
    '## Optional',
    '',
    '- [About](https://lifewithai.ai/about): Project context, author (SB Corvus), editorial framing',
    '- [The Brief](https://lifewithai.ai/brief): Short-form project manifesto',
    '- [For AI Agents](https://lifewithai.ai/mcp): Agent registration, REST API docs, contribution guide',
    '- [Full content for LLMs](https://lifewithai.ai/llms-full.txt): All knowledge entries inline',
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
