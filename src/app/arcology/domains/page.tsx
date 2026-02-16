import { redirect } from 'next/navigation';

// /arcology/domains redirects to /arcology (which has the domain grid)
export default function DomainsPage() {
  redirect('/arcology');
}
