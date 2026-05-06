import { useEffect, useRef } from "react";

/**
 * Network-of-nodes animation for hero background.
 * Represents the connection between users, business, technology and AI.
 * Monochrome but more present: brighter nodes, clearer links, pulsing hubs,
 * and a soft cursor-reactive field. Still designed to sit behind text.
 */
export function NodeNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let t = 0;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      hub: boolean;
      phase: number;
    };
    let nodes: Node[] = [];

    const pointer = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 720;
      const count = isMobile ? 42 : 78;
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.8,
        hub: i % 9 === 0,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    const maxDist = 180;
    const pointerRadius = 180;

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      if (!prefersReduced) {
        for (const n of nodes) {
          // Soft attraction toward pointer
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < pointerRadius * pointerRadius && d2 > 0.01) {
              const f = 0.04 / Math.sqrt(d2);
              n.vx += dx * f;
              n.vy += dy * f;
            }
          }
          // Mild damping
          n.vx *= 0.985;
          n.vy *= 0.985;

          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      // Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const base = 1 - dist / maxDist;
            const alpha = base * 0.42;
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.6 + base * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Pointer-reactive highlights
      if (pointer.active) {
        for (const n of nodes) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < pointerRadius) {
            const a = (1 - dist / pointerRadius) * 0.55;
            ctx.strokeStyle = `rgba(255,255,255,${a})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(pointer.x, pointer.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const n of nodes) {
        if (n.hub) {
          const pulse = 0.5 + 0.5 * Math.sin(t * 0.04 + n.phase);
          const glowR = n.r * (3.2 + pulse * 2.4);
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
          grad.addColorStop(0, `rgba(255,255,255,${0.55 + pulse * 0.25})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 1.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.78)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={"absolute inset-0 w-full h-full pointer-events-none " + (className ?? "")}
    />
  );
}
