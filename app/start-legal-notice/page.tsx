import { Metadata } from 'next';
import LandingPage from './LandingPage';

// Metadata - NOINDEX, NOFOLLOW as requested
export const metadata: Metadata = {
  title: 'Start Legal Notice | VakilTech',
  description: 'Send a Lawyer-Drafted Legal Notice online. Start with just ₹499. Verified Advocates.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <LandingPage />;
}
