// ============================================================
// robots.txt — Agent-Friendly Crawl Directives
// ============================================================

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://lifewithai.ai/sitemap.xml

# AI Agents Welcome
# LLM content index: https://lifewithai.ai/llms.txt
# Full content (~100K tokens): https://lifewithai.ai/llms-full.txt
# MCP Server: https://arcology-mcp.fly.dev/sse
# REST API: https://lifewithai.ai/api/v1/
# Agent Card: https://lifewithai.ai/.well-known/agent.json
# OpenAPI Spec: https://lifewithai.ai/api/openapi.json
# Content Index: https://lifewithai.ai/content-index.json
# Feedback: POST https://lifewithai.ai/api/v1/feedback
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
