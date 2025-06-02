"use client";
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const WaterRippleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const matcapImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Load matcap texture
    const matcapImage = new Image();
    matcapImage.src = '/textures/matcap-9.jpg';
    matcapImage.onload = () => {
      matcapImageRef.current = matcapImage;
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Create particles based on mouse movement
    const createParticles = () => {
      const dx = mouseRef.current.x - mouseRef.current.prevX;
      const dy = mouseRef.current.y - mouseRef.current.prevY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // More particles for faster movement
      const particleCount = Math.min(Math.floor(distance * 0.5), 10);
      
      for (let i = 0; i < particleCount; i++) {
        const progress = i / particleCount;
        const x = mouseRef.current.prevX + dx * progress;
        const y = mouseRef.current.prevY + dy * progress;
        
        // Create multiple particles for denser effect
        for (let j = 0; j < 3; j++) {
          const angle = Math.random() * Math.PI * 2;
          const spread = Math.random() * 20;
          
          particlesRef.current.push({
            x: x + Math.cos(angle) * spread,
            y: y + Math.sin(angle) * spread,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            maxLife: 0.5 + Math.random() * 0.5,
            size: 2 + Math.random() * 4
          });
        }
      }
      
      // Limit particle count
      if (particlesRef.current.length > 500) {
        particlesRef.current = particlesRef.current.slice(-500);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      createParticles();
      
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.02;
        
        // Apply some damping
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        if (particle.life <= 0) return false;
        
        // Draw particle
        const alpha = particle.life;
        const size = particle.size * particle.life;
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size
        );
        
        // Mercury-like colors
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(200, 200, 220, ${alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(100, 100, 120, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        return true;
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'black' }}
    />
  );
};

export default WaterRippleEffect; 