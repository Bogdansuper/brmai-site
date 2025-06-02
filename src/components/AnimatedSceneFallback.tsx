"use client";
import React from 'react';

const AnimatedSceneFallback = () => {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(-45deg, #000000, #1a1a1a, #0a0a0a, #2a2a2a)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        {/* Add CSS animation via a style tag */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes gradientShift {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `
        }} />
        {/* Optional: Add some floating orbs for visual interest */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 blur-3xl"
              style={{
                width: '40%',
                height: '40%',
                top: `${20 + i * 30}%`,
                left: `${10 + i * 30}%`,
                animation: `float ${10 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0%, 100% {
                transform: translate(0, 0) scale(1);
              }
              50% {
                transform: translate(30px, -30px) scale(1.1);
              }
            }
          `
        }} />
      </div>
    </div>
  );
};

export default AnimatedSceneFallback; 