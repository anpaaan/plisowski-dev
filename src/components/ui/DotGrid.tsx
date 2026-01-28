"use client";

import { useEffect, useRef } from "react";

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const isRunningRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const DOT_SPACING = 45;
    const DOT_SIZE = 1.2;
    const MOUSE_RADIUS = 150;
    const MAX_DISPLACEMENT = 20;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      // Redraw static grid on resize even if paused
      if (!isRunningRef.current) {
        drawStatic();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Handle tab visibility - pause animation when hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunningRef.current = false;
        cancelAnimationFrame(animationRef.current);
      } else {
        isRunningRef.current = true;
        draw();
      }
    };

    // Draw static grid (no mouse interaction) - used when paused
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * DOT_SPACING;
          const baseY = j * DOT_SPACING;

          const edgeX = Math.min(baseX, width - baseX) / (width * 0.3);
          const edgeY = Math.min(baseY, height - baseY) / (height * 0.3);
          const edgeFade = Math.min(1, Math.min(edgeX, edgeY));
          const opacity = 0.25 * edgeFade;

          ctx.beginPath();
          ctx.arc(baseX, baseY, DOT_SIZE, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 255, 218, ${opacity})`;
          ctx.fill();
        }
      }
    };

    const draw = () => {
      if (!isRunningRef.current) return;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * DOT_SPACING;
          const baseY = j * DOT_SPACING;

          const dx = mouseX - baseX;
          const dy = mouseY - baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let x = baseX;
          let y = baseY;

          const edgeX = Math.min(baseX, width - baseX) / (width * 0.3);
          const edgeY = Math.min(baseY, height - baseY) / (height * 0.3);
          const edgeFade = Math.min(1, Math.min(edgeX, edgeY));

          let opacity = 0.25 * edgeFade;
          let size = DOT_SIZE;

          if (distance < MOUSE_RADIUS) {
            const force = (1 - distance / MOUSE_RADIUS) * MAX_DISPLACEMENT;
            const angle = Math.atan2(dy, dx);
            x -= Math.cos(angle) * force;
            y -= Math.sin(angle) * force;

            opacity = (0.25 + (1 - distance / MOUSE_RADIUS) * 0.45) * Math.max(edgeFade, 0.5);
            size = DOT_SIZE + (1 - distance / MOUSE_RADIUS) * 1.8;
          }

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 255, 218, ${opacity})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
