"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseSize: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  hidden: boolean;
  color: { r: number; g: number; b: number };
  bright: boolean;
}

// Star color palette - warm to cool, weighted towards warm
const STAR_COLORS = [
  { r: 255, g: 244, b: 230 }, // Warm white (common)
  { r: 255, g: 241, b: 220 }, // Cream
  { r: 251, g: 191, b: 36 },  // Gold/amber (accent color)
  { r: 255, g: 180, b: 107 }, // Soft orange
  { r: 255, g: 210, b: 160 }, // Peach
  { r: 220, g: 220, b: 255 }, // Cool blue-white (rare, hot stars)
  { r: 200, g: 210, b: 255 }, // Soft blue (rare)
];

// Seeded random for consistent star patterns
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const isRunningRef = useRef(true);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Config
    const TELESCOPE_RADIUS = 120;
    const VISIBLE_STAR_COUNT = 280;
    const HIDDEN_STAR_COUNT = 180;
    const BRIGHT_STAR_CHANCE = 0.04; // 4% of stars are bright
    const TARGET_FPS = 24;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    // Generate stars with random positions
    const generateStars = () => {
      const stars: Star[] = [];
      const totalStars = VISIBLE_STAR_COUNT + HIDDEN_STAR_COUNT;

      for (let i = 0; i < totalStars; i++) {
        const isHidden = i >= VISIBLE_STAR_COUNT;
        const seed = i * 9973; // Prime for better distribution

        // Determine if this is a bright star
        const isBright = !isHidden && seededRandom(seed + 7) < BRIGHT_STAR_CHANCE;

        // Weight color selection towards warmer colors (first 5 in palette)
        // Bright stars are pure white
        let color: { r: number; g: number; b: number };
        if (isBright) {
          color = { r: 255, g: 255, b: 255 };
        } else {
          const colorRand = seededRandom(seed + 6);
          const colorIndex = colorRand < 0.85
            ? Math.floor(colorRand / 0.85 * 5) // 85% chance of warm colors (0-4)
            : 5 + Math.floor((colorRand - 0.85) / 0.15 * 2); // 15% chance of cool colors (5-6)
          color = STAR_COLORS[colorIndex];
        }

        stars.push({
          x: seededRandom(seed) * width,
          y: seededRandom(seed + 1) * height,
          baseSize: isHidden
            ? 0.5 + seededRandom(seed + 2) * 1.0
            : isBright
              ? 1.8 + seededRandom(seed + 2) * 1.2  // Bright stars are larger
              : 0.8 + seededRandom(seed + 2) * 1.8,
          baseOpacity: isHidden
            ? 0.03 + seededRandom(seed + 3) * 0.08
            : isBright
              ? 0.6 + seededRandom(seed + 3) * 0.3  // Bright stars are more visible
              : 0.15 + seededRandom(seed + 3) * 0.25,
          twinkleSpeed: isBright
            ? 0.3 + seededRandom(seed + 4) * 0.5  // Bright stars twinkle slower
            : 0.5 + seededRandom(seed + 4) * 1.5,
          twinkleOffset: seededRandom(seed + 5) * Math.PI * 2,
          hidden: isHidden,
          color,
          bright: isBright,
        });
      }

      starsRef.current = stars;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      generateStars();

      if (!isRunningRef.current) {
        drawStatic();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunningRef.current = false;
        cancelAnimationFrame(animationRef.current);
      } else {
        isRunningRef.current = true;
        lastFrameTimeRef.current = 0;
        draw(0);
      }
    };

    // Smooth easing function for telescope falloff
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    // Draw static stars (no mouse interaction)
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      const time = performance.now() * 0.001;

      for (const star of starsRef.current) {
        if (star.hidden) continue;

        // Subtle twinkle
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5;
        const opacity = star.baseOpacity * (0.7 + twinkle * 0.3);

        const { r, g, b } = star.color;

        // Draw glow for bright stars
        if (star.bright) {
          const glowSize = star.baseSize * 3;
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, glowSize
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.4})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.1})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.baseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }
    };

    const draw = (timestamp: number) => {
      if (!isRunningRef.current) return;

      // Throttle to target FPS
      const elapsed = timestamp - lastFrameTimeRef.current;
      if (elapsed < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameTimeRef.current = timestamp - (elapsed % FRAME_INTERVAL);

      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const time = timestamp * 0.001;

      // Pre-calculate telescope bounds for quick rejection
      const telescopeLeft = mouseX - TELESCOPE_RADIUS;
      const telescopeRight = mouseX + TELESCOPE_RADIUS;
      const telescopeTop = mouseY - TELESCOPE_RADIUS;
      const telescopeBottom = mouseY + TELESCOPE_RADIUS;
      const radiusSquared = TELESCOPE_RADIUS * TELESCOPE_RADIUS;

      for (const star of starsRef.current) {
        // Subtle twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.5 + 0.5;

        let opacity = star.baseOpacity * (0.7 + twinkle * 0.3);
        let size = star.baseSize;

        // Quick bounds check before expensive distance calc
        const inBounds =
          star.x >= telescopeLeft &&
          star.x <= telescopeRight &&
          star.y >= telescopeTop &&
          star.y <= telescopeBottom;

        if (inBounds) {
          const dx = mouseX - star.x;
          const dy = mouseY - star.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < radiusSquared) {
            const distance = Math.sqrt(distanceSquared);
            const proximity = 1 - distance / TELESCOPE_RADIUS;
            const easedProximity = easeOutCubic(proximity);

            if (star.hidden) {
              // Hidden stars fade in within telescope
              opacity = easedProximity * 0.5;
              size = star.baseSize * (0.8 + easedProximity * 0.6);
            } else {
              // Visible stars brighten and grow slightly
              opacity = star.baseOpacity + easedProximity * 0.35;
              size = star.baseSize * (1 + easedProximity * 0.5);
            }
          } else if (star.hidden) {
            continue; // Don't draw hidden stars outside telescope
          }
        } else if (star.hidden) {
          continue; // Don't draw hidden stars outside telescope
        }

        const { r, g, b } = star.color;

        // Draw glow for bright stars
        if (star.bright) {
          const glowSize = size * 3;
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, glowSize
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.4})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.1})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    draw(0);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.85, maxWidth: "100vw" }}
    />
  );
}
