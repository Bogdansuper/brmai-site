"use client";
import React from 'react';
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Mercury liquid effect - exactly like Vercel Ship
const MercuryLiquidEffect = () => {
  const { viewport, mouse } = useThree();
  const meshRef = useRef<THREE.Mesh>(null!);
  const matcapTexture = useLoader(THREE.TextureLoader, '/textures/matcap-9.jpg');
  
  // Create smooth plane
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(viewport.width * 1.2, viewport.height * 1.2, 128, 128);
  }, [viewport]);
  
  // Store mouse trail for smooth liquid flow
  const mouseTrail = useRef<Array<{x: number, y: number, strength: number}>>([]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    const geo = meshRef.current.geometry as THREE.PlaneGeometry;
    const positions = geo.attributes.position;
    
    // Add current mouse position to trail
    const mouseX = mouse.x * viewport.width / 2;
    const mouseY = mouse.y * viewport.height / 2;
    
    mouseTrail.current.push({ x: mouseX, y: mouseY, strength: 1 });
    
    // Keep trail limited and fade old positions
    if (mouseTrail.current.length > 30) {
      mouseTrail.current.shift();
    }
    mouseTrail.current.forEach(point => {
      point.strength *= 0.95;
    });
    
    // Create smooth liquid deformation
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      let z = 0;
      
      // Apply influence from mouse trail
      mouseTrail.current.forEach((point, index) => {
        const dist = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
        
        if (dist < 4) {
          const influence = (1 - dist / 4) * point.strength;
          // Smooth wave - уменьшаем интенсивность
          z += Math.sin(dist * 2 - time * 3) * influence * 0.05; // было 0.15
          // Height displacement - уменьшаем интенсивность
          z += influence * 0.03 * (1 - index / mouseTrail.current.length); // было 0.1
        }
      });
      
      // Very subtle ambient waves - делаем еще тоньше
      z += Math.sin(x * 0.3 + time * 0.5) * 0.005; // было 0.02
      z += Math.cos(y * 0.3 + time * 0.3) * 0.005; // было 0.02
      
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    geo.computeVertexNormals();
  });
  
  return (
    <mesh ref={meshRef} rotation={[-0.1, 0, 0]} position={[0, 0, -0.5]}>
      <primitive object={geometry} />
      <meshMatcapMaterial 
        matcap={matcapTexture}
        side={THREE.DoubleSide}
        opacity={0.2} // уменьшаем прозрачность с 0.9 до 0.2
        transparent
      />
    </mesh>
  );
};

// Main animated scene component
const AnimatedScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <MercuryLiquidEffect />
    </Canvas>
  );
};

export default AnimatedScene; 