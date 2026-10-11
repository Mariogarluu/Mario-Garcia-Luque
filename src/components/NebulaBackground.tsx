import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './NebulaBackground.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  hue: 'purple' | 'green' | 'cyan' | 'white';
}

interface NebulaCloud {
  baseXRatio: number;
  baseYRatio: number;
  radius: number;
  speedX: number;
  speedY: number;
  phaseX: number;
  phaseY: number;
  coreDark: string;
  midDark: string;
  coreLight: string;
  midLight: string;
  parallaxFactor: number;
}

export const NebulaBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Smoothed mouse coordinates with spring-like easing
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      speed: 0,
      radius: 280,
      active: false,
    };

    let prevMouseX = mouse.x;
    let prevMouseY = mouse.y;

    // Volumetric nebula clouds with authentic cosmic blending
    const nebulaClouds: NebulaCloud[] = [
      {
        baseXRatio: 0.18,
        baseYRatio: 0.22,
        radius: 460,
        speedX: 0.00035,
        speedY: 0.00028,
        phaseX: 0.2,
        phaseY: 1.1,
        coreDark: 'rgba(139, 92, 246, 0.26)', // Deep Royal Violet
        midDark: 'rgba(139, 92, 246, 0.12)',
        coreLight: 'rgba(167, 139, 250, 0.14)',
        midLight: 'rgba(167, 139, 250, 0.06)',
        parallaxFactor: 0.05,
      },
      {
        baseXRatio: 0.82,
        baseYRatio: 0.3,
        radius: 480,
        speedX: 0.0003,
        speedY: 0.00042,
        phaseX: 2.1,
        phaseY: 0.7,
        coreDark: 'rgba(16, 185, 129, 0.22)', // Radiant Emerald
        midDark: 'rgba(16, 185, 129, 0.09)',
        coreLight: 'rgba(52, 211, 153, 0.12)',
        midLight: 'rgba(52, 211, 153, 0.05)',
        parallaxFactor: -0.045,
      },
      {
        baseXRatio: 0.5,
        baseYRatio: 0.65,
        radius: 540,
        speedX: 0.00028,
        speedY: 0.00034,
        phaseX: 4.2,
        phaseY: 2.3,
        coreDark: 'rgba(99, 102, 241, 0.24)', // Electric Indigo
        midDark: 'rgba(99, 102, 241, 0.10)',
        coreLight: 'rgba(129, 140, 248, 0.12)',
        midLight: 'rgba(129, 140, 248, 0.05)',
        parallaxFactor: 0.038,
      },
      {
        baseXRatio: 0.12,
        baseYRatio: 0.78,
        radius: 440,
        speedX: 0.0004,
        speedY: 0.00032,
        phaseX: 1.5,
        phaseY: 3.8,
        coreDark: 'rgba(52, 211, 153, 0.20)', // Vibrant Mint
        midDark: 'rgba(52, 211, 153, 0.08)',
        coreLight: 'rgba(110, 231, 183, 0.10)',
        midLight: 'rgba(110, 231, 183, 0.04)',
        parallaxFactor: -0.035,
      },
      {
        baseXRatio: 0.88,
        baseYRatio: 0.82,
        radius: 470,
        speedX: 0.00032,
        speedY: 0.00038,
        phaseX: 3.4,
        phaseY: 4.5,
        coreDark: 'rgba(168, 85, 247, 0.22)', // Magenta Violet
        midDark: 'rgba(168, 85, 247, 0.09)',
        coreLight: 'rgba(192, 132, 252, 0.11)',
        midLight: 'rgba(192, 132, 252, 0.05)',
        parallaxFactor: 0.042,
      },
    ];

    // Subtle twinkling stardust particles
    const particleCount = 48;
    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const rand = Math.random();
        let hue: Particle['hue'] = 'white';
        if (rand < 0.38) hue = 'purple';
        else if (rand < 0.72) hue = 'green';
        else if (rand < 0.88) hue = 'cyan';

        const baseAlpha = 0.25 + Math.random() * 0.55;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          size: 0.8 + Math.random() * 1.5,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: 0.012 + Math.random() * 0.024,
          hue,
        });
      }
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const render = (currentTime: number) => {
      // Calculate mouse velocity for interactive energy pulse
      const dx = mouse.targetX - prevMouseX;
      const dy = mouse.targetY - prevMouseY;
      prevMouseX = mouse.targetX;
      prevMouseY = mouse.targetY;
      const currentSpeed = Math.sqrt(dx * dx + dy * dy);
      mouse.speed += (currentSpeed - mouse.speed) * 0.1;

      // Smooth mouse coordinate interpolation (inertia)
      const lerp = 0.065;
      mouse.x += (mouse.targetX - mouse.x) * lerp;
      mouse.y += (mouse.targetY - mouse.y) * lerp;

      // Expand mouse aura slightly with movement speed
      const targetRadius = 260 + Math.min(mouse.speed * 2.5, 90);
      mouse.radius += (targetRadius - mouse.radius) * 0.08;

      ctx.clearRect(0, 0, width, height);

      ctx.save();

      // 1. Render Atmospheric Nebula Clouds
      nebulaClouds.forEach((cloud) => {
        const driftX = Math.sin(currentTime * cloud.speedX + cloud.phaseX) * 125;
        const driftY = Math.cos(currentTime * cloud.speedY + cloud.phaseY) * 105;

        // Interactive mouse parallax
        const mouseOffsetX = (mouse.x - width / 2) * cloud.parallaxFactor;
        const mouseOffsetY = (mouse.y - height / 2) * cloud.parallaxFactor;

        const posX = width * cloud.baseXRatio + driftX + mouseOffsetX;
        const posY = height * cloud.baseYRatio + driftY + mouseOffsetY;

        const core = theme === 'dark' ? cloud.coreDark : cloud.coreLight;
        const mid = theme === 'dark' ? cloud.midDark : cloud.midLight;

        const gradient = ctx.createRadialGradient(posX, posY, 0, posX, posY, cloud.radius);
        gradient.addColorStop(0, core);
        gradient.addColorStop(0.38, mid);
        gradient.addColorStop(0.72, mid.replace(/[\d.]+\)$/, (v) => `${parseFloat(v) * 0.35})`));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(posX, posY, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Render Interactive Cursor Cosmic Spotlight
      const mouseCore = theme === 'dark'
        ? `rgba(167, 139, 250, ${0.22 + Math.min(mouse.speed * 0.003, 0.12)})`
        : `rgba(139, 92, 246, ${0.11 + Math.min(mouse.speed * 0.002, 0.06)})`;

      const mouseMid = theme === 'dark'
        ? `rgba(52, 211, 153, ${0.16 + Math.min(mouse.speed * 0.002, 0.08)})`
        : `rgba(16, 185, 129, ${0.08 + Math.min(mouse.speed * 0.001, 0.04)})`;

      const mouseGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      mouseGrad.addColorStop(0, mouseCore);
      mouseGrad.addColorStop(0.42, mouseMid);
      mouseGrad.addColorStop(0.8, mouseMid.replace(/[\d.]+\)$/, (v) => `${parseFloat(v) * 0.25})`));
      mouseGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Render Crisp Twinkling Stardust Particles with Mouse Deflection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Linear drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle interactive breeze from mouse
        const pDx = p.x - mouse.x;
        const pDy = p.y - mouse.y;
        const pDist = Math.sqrt(pDx * pDx + pDy * pDy);

        if (pDist < 160 && pDist > 1) {
          const force = (1 - pDist / 160) * 0.45;
          p.x += (pDx / pDist) * force;
          p.y += (pDy / pDist) * force;
        }

        // Twinkle calculation
        p.alpha = p.baseAlpha + Math.sin(currentTime * p.pulseSpeed + i) * 0.3;
        const alpha = Math.max(0.08, Math.min(p.alpha, 0.9));

        let starColor = `rgba(255, 255, 255, ${alpha})`;
        if (p.hue === 'purple') {
          starColor = theme === 'dark' ? `rgba(192, 132, 252, ${alpha})` : `rgba(124, 58, 237, ${alpha * 0.8})`;
        } else if (p.hue === 'green') {
          starColor = theme === 'dark' ? `rgba(52, 211, 153, ${alpha})` : `rgba(5, 150, 105, ${alpha * 0.8})`;
        } else if (p.hue === 'cyan') {
          starColor = theme === 'dark' ? `rgba(103, 232, 249, ${alpha})` : `rgba(14, 165, 233, ${alpha * 0.8})`;
        }

        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [theme]);

  return (
    <div className="nebula-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="nebula-canvas" />
      <div className="nebula-grain-overlay" />
    </div>
  );
};
