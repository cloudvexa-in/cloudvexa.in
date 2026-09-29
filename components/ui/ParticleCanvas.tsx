'use client';

import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseVx: number;
  baseVy: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize, { passive: true });

    // --- PARTICLE SETUP ---
    const COUNT = 140;
    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const vx = (Math.random() - 0.5) * 0.7;
      const vy = (Math.random() - 0.5) * 0.7;
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        radius: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.6 + 0.3,
      };
    });

    // --- MOUSE TRACKING ---
    const mouse = { x: -9999, y: -9999, radius: 150 };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    // --- RENDER LOOP ---
    const CONN_DIST = 110;
    const REPEL_STRENGTH = 5;

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];

        // Cursor repulsion with damping
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const angle = Math.atan2(dy, dx);
          const force = ((mouse.radius - dist) / mouse.radius) * REPEL_STRENGTH;
          p.vx += Math.cos(angle) * force * 0.15;
          p.vy += Math.sin(angle) * force * 0.15;
        }

        // Dampen back to base velocity
        p.vx += (p.baseVx - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce
        if (p.x < 0 || p.x > W) { p.vx *= -1; p.baseVx *= -1; }
        if (p.y < 0 || p.y > H) { p.vy *= -1; p.baseVy *= -1; }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00F0FF';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Constellation connections
        for (let j = i + 1; j < COUNT; j++) {
          const p2 = particles[j];
          const d2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d2 < CONN_DIST) {
            const opacity = (1 - d2 / CONN_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 112, 243, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
