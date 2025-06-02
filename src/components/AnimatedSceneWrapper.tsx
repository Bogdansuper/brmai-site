"use client";
import React, { useState, useEffect } from 'react';
import AnimatedSceneFallback from './AnimatedSceneFallback';

const AnimatedSceneWrapper = () => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log('[AnimatedSceneWrapper] Starting to load AnimatedScene...');
    // Only import on client side after mount
    import('./AnimatedScene')
      .then((mod) => {
        console.log('[AnimatedSceneWrapper] AnimatedScene loaded successfully');
        setComponent(() => mod.default);
      })
      .catch((err) => {
        console.error('[AnimatedSceneWrapper] Failed to load 3D scene:', err);
        setError(true);
      });
  }, []);

  if (error) {
    console.log('[AnimatedSceneWrapper] Rendering fallback due to error');
    return <AnimatedSceneFallback />;
  }

  if (!Component) {
    console.log('[AnimatedSceneWrapper] Component not loaded yet, showing placeholder');
    return <AnimatedSceneFallback />;
  }

  console.log('[AnimatedSceneWrapper] Rendering AnimatedScene component');
  return <Component />;
};

export default AnimatedSceneWrapper; 