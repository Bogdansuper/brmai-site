"use client";
import React from 'react';

const SimpleBackground = () => {
  return (
    <div className="absolute inset-0 bg-black">
      {/* Simple gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20"
      />
    </div>
  );
};

export default SimpleBackground; 