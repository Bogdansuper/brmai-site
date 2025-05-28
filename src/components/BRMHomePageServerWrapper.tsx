"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the client component with SSR disabled
const BRMHomePageClient = dynamic(() => import('@/components/BRMHomePageClient'), {
  ssr: false,
  // You can add a loading component here if needed
  // loading: () => <p>Loading...</p>,
});

// This is a client component that wraps the dynamically imported client component
export default function BRMHomePageServerWrapper(props: any) {
  // You might want to pass specific props to BRMHomePageClient
  // For now, we'll just spread the received props
  return <BRMHomePageClient {...props} />;
} 