import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './NeuralBackground.css';

interface Node {
  x: number;
  y: number;
  baseVx: number;
  baseVy: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  colorType: 'purple' | 'green' | 'cyan' | 'white';
  isHub: boolean;
  pulsePhase: number;
  pulseSpeed: number;
}

export const NeuralBackground: React.FC = () => {
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

    // Smoothed mouse position
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 175,
      active: false,
    };

    const maxConnectionDist = 125;
    const maxMouseDist = 165;
    const nodes: Node[] = [];

    const initNodes = () => {
      nodes.length = 0;
      // Responsive node count based on screen width
      const nodeCount = Math.floor(Math.min(width, 1600) / 22);

      for (let i = 0; i < nodeCount; i++) {
        const rand = Math.random();
        let colorType: Node['colorType'] = 'purple';
        if (rand < 0.42) colorType = 'purple';
        else if (rand < 0.8) colorType = 'green';
        else if (rand < 0.94) colorType = 'cyan';
        else colorType = 'white';

        const isHub = Math.random() < 0.16; // Major neural hubs
        const baseRadius = isHub ? 2.8 + Math.random() * 1.6 : 1.2 + Math.random() * 1.3;

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseVx: (Math.random() - 0.5) * 0.45,
          baseVy: (Math.random() - 0.5) * 0.45,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          colorType,
          isHub,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
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
      initNodes();
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
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const render = (currentTime: number) => {
      // Smooth mouse easing
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.save();

      // 1. Mouse Ambient Energy Halo
      if (mouse.active) {
        const auraColor1 = theme === 'dark' 
          ? 'rgba(139, 92, 246, 0.18)' 
          : 'rgba(124, 58, 237, 0.09)';
        const auraColor2 = theme === 'dark' 
          ? 'rgba(16, 185, 129, 0.12)' 
          : 'rgba(5, 150, 105, 0.06)';

        const mouseAura = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        mouseAura.addColorStop(0, auraColor1);
        mouseAura.addColorStop(0.5, auraColor2);
        mouseAura.addColorStop(1, 'transparent');

        ctx.fillStyle = mouseAura;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Node Position Updates & Physics
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Smooth physics reset towards base velocity
        node.vx += (node.baseVx - node.vx) * 0.05;
        node.vy += (node.baseVy - node.vy) * 0.05;

        // Interaction with mouse cursor
        if (mouse.active) {
          const mDx = mouse.x - node.x;
          const mDy = mouse.y - node.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

          if (mDist < maxMouseDist && mDist > 5) {
            // Gentle gravitational pull towards the mouse, with gentle repulsion if too close
            const force = (1 - mDist / maxMouseDist) * 0.6;
            if (mDist > 45) {
              node.vx += (mDx / mDist) * force * 0.4;
              node.vy += (mDy / mDist) * force * 0.4;
            } else {
              node.vx -= (mDx / mDist) * force * 0.8;
              node.vy -= (mDy / mDist) * force * 0.8;
            }
          }
        }

        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bounce / wrap
        if (node.x < 0) {
          node.x = 0;
          node.baseVx *= -1;
          node.vx *= -1;
        } else if (node.x > width) {
          node.x = width;
          node.baseVx *= -1;
          node.vx *= -1;
        }

        if (node.y < 0) {
          node.y = 0;
          node.baseVy *= -1;
          node.vy *= -1;
        } else if (node.y > height) {
          node.y = height;
          node.baseVy *= -1;
          node.vy *= -1;
        }

        // Pulse radius on hubs
        if (node.isHub) {
          node.radius = node.baseRadius + Math.sin(currentTime * node.pulseSpeed + node.pulsePhase) * 0.7;
        }
      }

      // 3. Draw Synaptic Connections (Lines & Facets)
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Connect to mouse cursor
        if (mouse.active) {
          const mDx = mouse.x - nodeA.x;
          const mDy = mouse.y - nodeA.y;
          if (Math.abs(mDx) < maxMouseDist && Math.abs(mDy) < maxMouseDist) {
            const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
            if (mDist < maxMouseDist) {
              const alpha = (1 - mDist / maxMouseDist) * (theme === 'dark' ? 0.48 : 0.35);
              ctx.strokeStyle = theme === 'dark' 
                ? `rgba(167, 139, 250, ${alpha})` 
                : `rgba(124, 58, 237, ${alpha})`;
              ctx.lineWidth = nodeA.isHub ? 1.5 : 1.1;
              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }

        // Connect to other nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;

          // Quick bounding box check
          if (Math.abs(dx) > maxConnectionDist || Math.abs(dy) > maxConnectionDist) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxConnectionDist) {
            const alphaFactor = 1 - dist / maxConnectionDist;
            const lineAlpha = alphaFactor * (theme === 'dark' ? 0.32 : 0.22);

            let strokeColor = `rgba(139, 92, 246, ${lineAlpha})`;
            if (nodeA.colorType === 'green' || nodeB.colorType === 'green') {
              strokeColor = theme === 'dark' 
                ? `rgba(52, 211, 153, ${lineAlpha})` 
                : `rgba(16, 185, 129, ${lineAlpha})`;
            }

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = nodeA.isHub && nodeB.isHub ? 1.3 : 0.75;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();

            // Optional delicate triangle fill when 3 nodes are very close
            if (dist < 65 && j + 1 < nodes.length) {
              const nodeC = nodes[j + 1];
              const dCA = Math.sqrt((nodeC.x - nodeA.x) ** 2 + (nodeC.y - nodeA.y) ** 2);
              const dCB = Math.sqrt((nodeC.x - nodeB.x) ** 2 + (nodeC.y - nodeB.y) ** 2);
              if (dCA < 65 && dCB < 65) {
                ctx.fillStyle = theme === 'dark'
                  ? `rgba(139, 92, 246, ${lineAlpha * 0.22})`
                  : `rgba(124, 58, 237, ${lineAlpha * 0.15})`;
                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.lineTo(nodeC.x, nodeC.y);
                ctx.closePath();
                ctx.fill();
              }
            }
          }
        }
      }

      // 4. Draw Individual Nodes & Halos
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        let fillColor = '#8B5CF6';
        let glowColor = 'rgba(139, 92, 246, 0.4)';

        if (node.colorType === 'green') {
          fillColor = theme === 'dark' ? '#34D399' : '#059669';
          glowColor = 'rgba(52, 211, 153, 0.4)';
        } else if (node.colorType === 'cyan') {
          fillColor = theme === 'dark' ? '#38BDF8' : '#0284C7';
          glowColor = 'rgba(56, 189, 248, 0.4)';
        } else if (node.colorType === 'white') {
          fillColor = theme === 'dark' ? '#FFFFFF' : '#475569';
          glowColor = 'rgba(255, 255, 255, 0.3)';
        } else {
          fillColor = theme === 'dark' ? '#A78BFA' : '#7C3AED';
          glowColor = 'rgba(167, 139, 250, 0.4)';
        }

        // Draw hub outer aura
        if (node.isHub) {
          ctx.fillStyle = glowColor;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
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
    <div className="neural-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="neural-canvas" />
      <div className="neural-grid-overlay" />
    </div>
  );
};
