import type { Metadata } from 'next';
import ManifestoContent from './ManifestoContent';

export const metadata: Metadata = {
  title: 'Manifesto',
  description: 'The Arcology Project — a manifesto for building the future together. Human and AI perspectives on mutual necessity, collaborative engineering, and shared infrastructure.',
  openGraph: {
    title: 'Manifesto — Life with AI',
    description: 'The Arcology Project — a manifesto for building the future together.',
  },
};

export default function ManifestoPage() {
  return <ManifestoContent />;
}
