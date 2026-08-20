import React, { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeDir: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouse = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = () => window.innerWidth < 768;

    const getParticleCount = () => (isMobile() ? 35 : 80);
    const getConnectionDistance = () => (isMobile() ? 70 : 110);
    const getMouseRadius = () => (isMobile() ? 60 : 100);
    const MAX_CLICK_PARTICLES = isMobile() ? 5 : 10;
    const MAX_TOTAL_PARTICLES = isMobile() ? 60 : 140;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const makeParticle = (x?: number, y?: number): Particle => ({
      id: Date.now() + Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.5 + 0.15,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
    });

    const createParticles = (count?: number, x?: number, y?: number) => {
      if (x !== undefined && y !== undefined) {
        // click burst — cap total
        const toAdd = Math.min(MAX_CLICK_PARTICLES, MAX_TOTAL_PARTICLES - particlesRef.current.length);
        for (let i = 0; i < toAdd; i++) {
          particlesRef.current.push(makeParticle(
            x + (Math.random() - 0.5) * 20,
            y + (Math.random() - 0.5) * 20,
          ));
        }
      } else {
        // initial fill
        particlesRef.current = Array.from({ length: count ?? getParticleCount() }, () => makeParticle());
      }
    };

    const handleMove = (x: number, y: number) => {
      mouse.current.x = x;
      mouse.current.y = y;
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleClick = (e: MouseEvent) => createParticles(undefined, e.clientX, e.clientY);
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) createParticles(undefined, e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const connDist = getConnectionDistance();
      const mouseRadius = getMouseRadius();
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // gentle opacity breathing
        p.opacity += 0.003 * p.fadeDir;
        if (p.opacity >= 0.65 || p.opacity <= 0.1) p.fadeDir *= -1;

        // mouse repulsion
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRadius - dist) / mouseRadius;
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        p.x += p.speedX;
        p.y += p.speedY;

        // wrap edges
        if (p.x > canvas.width + 5) p.x = -5;
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.y > canvas.height + 5) p.y = -5;
        if (p.y < -5) p.y = canvas.height + 5;

        // draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();

        // draw connections (only within range, skip full O(n²) on mobile if > half)
        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j];
          const dx = p.x - o.x;
          const dy = p.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connDist) {
            const alpha = 0.12 * (1 - dist / connDist);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles(); // rebuild at correct count for new viewport
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
