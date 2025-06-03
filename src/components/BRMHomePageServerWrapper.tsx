'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the client component with SSR disabled
const BRMHomePageClient = dynamic(() => import('@/components/BRMHomePageClient'), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'black',
    color: 'white'
  }}>Loading...</div>
});

// This is a client component that wraps the dynamically imported client component
export default function BRMHomePageServerWrapper(props: any) {
  // You might want to pass specific props to BRMHomePageClient
  // For now, we'll just spread the received props
  return <BRMHomePageClient {...props} />;
} 