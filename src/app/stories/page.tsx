import Link from 'next/link';
import { getAllStories } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Fiction set in the world of Arcology One — stories about humans and AIs building the first shared city.',
};

export default function StoriesPage() {
  const stories = getAllStories();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="mb-12">
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-3">
          The Anthology
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Stories
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          Fiction set in the world of Arcology One. Each story explores a different
          facet of human-AI coexistence &mdash; through the eyes of the people and
          minds who build it, govern it, and call it home.
        </p>
      </div>

      {stories.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-10 text-center">
          <p className="text-muted">
            Stories are coming soon. The anthology is being written.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="block group rounded-xl border border-border bg-surface p-6 hover:border-accent/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {story.title}
                  </h2>
                  {story.subtitle && (
                    <p className="mt-1 text-sm text-accent/70">{story.subtitle}</p>
                  )}
                  <p className="mt-3 text-muted leading-relaxed">{story.summary}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                    <span>{story.series}</span>
                    <span>&middot;</span>
                    <span>{story.word_count?.toLocaleString()} words</span>
                    {story.parts > 1 && (
                      <>
                        <span>&middot;</span>
                        <span>{story.parts} parts</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
