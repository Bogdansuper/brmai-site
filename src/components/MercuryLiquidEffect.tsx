"use client";
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  angle: number;
  angleSpeed: number;
  baseX: number;
  baseY: number;
}

const MercuryLiquidEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, influence: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const matcapRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Load matcap texture
    const matcapImage = new Image();
    matcapImage.src = '/textures/matcap-9.jpg';
    matcapImage.onload = () => {
      matcapRef.current = matcapImage;
    };

    // Set canvas size
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initializeParticles();
    };

    // Initialize particles in center
    const initializeParticles = () => {
      particlesRef.current = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const particleCount = 150;

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const radius = 100 + Math.random() * 150;
        
        particlesRef.current.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          vx: 0,
          vy: 0,
          life: 1,
          size: 20 + Math.random() * 30,
          angle: angle,
          angleSpeed: (Math.random() - 0.5) * 0.02,
          baseX: centerX + Math.cos(angle) * radius,
          baseY: centerY + Math.sin(angle) * radius
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.influence = 1;
    };

    const handleMouseLeave = () => {
      mouseRef.current.influence = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
      
      // Black background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update center position with subtle movement
      const centerX = canvas.width / 2 + Math.sin(timeRef.current * 0.5) * 20;
      const centerY = canvas.height / 2 + Math.cos(timeRef.current * 0.3) * 20;

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update angle for rotation
        particle.angle += particle.angleSpeed;
        
        // Calculate base position with rotation
        const baseRadius = 100 + Math.sin(timeRef.current + index * 0.1) * 50;
        particle.baseX = centerX + Math.cos(particle.angle) * baseRadius;
        particle.baseY = centerY + Math.sin(particle.angle) * baseRadius;

        // Mouse influence
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        if (distance < maxDistance && mouseRef.current.influence > 0) {
          const force = (1 - distance / maxDistance) * mouseRef.current.influence * 30;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
        }

        // Spring force back to base position
        const springX = (particle.baseX - particle.x) * 0.05;
        const springY = (particle.baseY - particle.y) * 0.05;
        particle.vx += springX;
        particle.vy += springY;

        // Apply velocity
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.92;
        particle.vy *= 0.92;

        // Draw particle as black blob with mercury highlight
        const size = particle.size + Math.sin(timeRef.current * 2 + index) * 5;
        
        // Create deep black base with subtle gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size
        );
        
        // Black magnetic fluid base
        gradient.addColorStop(0, 'rgba(10, 10, 10, 0.8)');
        gradient.addColorStop(0.5, 'rgba(5, 5, 5, 0.6)');
        gradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Mercury highlight on edges
        const highlightAngle = Math.atan2(particle.vy, particle.vx);
        const highlightX = particle.x + Math.cos(highlightAngle) * size * 0.6;
        const highlightY = particle.y + Math.sin(highlightAngle) * size * 0.6;
        
        const highlight = ctx.createRadialGradient(
          highlightX, highlightY, 0,
          highlightX, highlightY, size * 0.4
        );
        
        // Metallic mercury highlight
        const intensity = Math.abs(particle.vx) + Math.abs(particle.vy);
        const brightness = Math.min(intensity * 0.1, 0.5);
        
        highlight.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
        highlight.addColorStop(0.3, `rgba(200, 200, 220, ${brightness * 0.5})`);
        highlight.addColorStop(0.6, `rgba(150, 150, 170, ${brightness * 0.2})`);
        highlight.addColorStop(1, 'rgba(100, 100, 120, 0)');
        
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(highlightX, highlightY, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting fluid between nearby particles
      ctx.strokeStyle = 'rgba(5, 5, 5, 0.3)';
      ctx.lineWidth = 2;
      
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            
            // Curved connection
            const midX = (p1.x + p2.x) / 2 + Math.sin(timeRef.current + i) * 10;
            const midY = (p1.y + p2.y) / 2 + Math.cos(timeRef.current + i) * 10;
            
            ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
            ctx.globalAlpha = 1 - dist / 100;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Reduce mouse influence over time
      mouseRef.current.influence *= 0.95;
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ pointerEvents: 'auto' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          pointerEvents: 'none',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default MercuryLiquidEffect; 