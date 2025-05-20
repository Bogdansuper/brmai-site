"use client";
import dynamic from 'next/dynamic';

// Dynamically import the client component, disabling SSR
const BRMHomePageClient = dynamic(() => import('@/components/BRMHomePageClient'), {
  ssr: false,
  // Optional: loading component
  // loading: () => <p>Loading...</p>, 
});

export default function BRMHomePageServer() {
  return <BRMHomePageClient />;
} 