import { notFound } from 'next/navigation';
import { getAllStories, getStory } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const stories = getAllStories();
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: 'Story Not Found' };

  return {
    title: story.title,
    description: story.summary,
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) notFound();

  const html = await renderMarkdown(story.content);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      {/* Header */}
      <header className="mb-10">
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-3">
          {story.series}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          {story.title}
        </h1>
        {story.subtitle && (
          <p className="mt-2 text-xl text-muted">{story.subtitle}</p>
        )}
        <div className="mt-4 flex items-center gap-4 text-sm text-muted">
          <span>{new Date(story.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>&middot;</span>
          <span>{story.word_count?.toLocaleString()} words</span>
          {story.parts > 1 && (
            <>
              <span>&middot;</span>
              <span>{story.parts} parts</span>
            </>
          )}
        </div>
        {story.themes && story.themes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {story.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full bg-surface-2 px-3 py-0.5 text-xs text-muted"
              >
                {theme}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Viktor intro if applicable */}
      {story.viktor_intro && (
        <div className="mb-10 rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent tracking-wider uppercase">
              Viktor&apos;s Introduction
            </span>
          </div>
        </div>
      )}

      {/* Story content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
