'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SpinningBox = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'green'} /> {/* Different color for easy ID */}
    </mesh>
  );
};

const TestR3FCanvas: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '500px', background: '#222' }}>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <SpinningBox />
      </Canvas>
    </div>
  );
};

export default TestR3FCanvas; 