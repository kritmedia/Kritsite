import React, { useRef, useEffect } from 'react';

interface ParticleRibbonBackgroundProps {
  className?: string;
}

interface RibbonPoint {
  u: number;
  v: number;
  dispX: number;
  dispY: number;
  vx: number;
  vy: number;
}

interface RibbonLayer {
  points: RibbonPoint[][];
  cols: number;
  rows: number;
  baseStart: { x: number; y: number };
  baseCtrl1: { x: number; y: number };
  baseCtrl2: { x: number; y: number };
  baseEnd: { x: number; y: number };
  width: number;
  speed: number;
  freqU: number;
  freqV: number;
  amplitude: number;
  twistFreq: number;
  phase: number;
  baseAlpha: number;
}

export const ParticleRibbonBackground: React.FC<ParticleRibbonBackgroundProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);

  // Mouse & touch interaction state
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isActive: false,
    prevX: -1000,
    prevY: -1000,
    pulseTime: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const createLayer = (
      cols: number,
      rows: number,
      widthScale: number,
      speed: number,
      freqU: number,
      freqV: number,
      amplitude: number,
      twistFreq: number,
      phase: number,
      baseAlpha: number
    ): RibbonLayer => {
      const points: RibbonPoint[][] = [];
      for (let r = 0; r < rows; r++) {
        const rowPoints: RibbonPoint[] = [];
        const v = rows > 1 ? r / (rows - 1) - 0.5 : 0;
        for (let c = 0; c < cols; c++) {
          const u = c / (cols - 1);
          rowPoints.push({
            u,
            v,
            dispX: 0,
            dispY: 0,
            vx: 0,
            vy: 0,
          });
        }
        points.push(rowPoints);
      }

      return {
        points,
        cols,
        rows,
        baseStart: { x: 0, y: 0 },
        baseCtrl1: { x: 0, y: 0 },
        baseCtrl2: { x: 0, y: 0 },
        baseEnd: { x: 0, y: 0 },
        width: widthScale,
        speed,
        freqU,
        freqV,
        amplitude,
        twistFreq,
        phase,
        baseAlpha,
      };
    };

    let ribbons: RibbonLayer[] = [];

    const initRibbons = (w: number, h: number) => {
      // 1. Dominant Upper Curling Silk Ribbon (Directly matches reference upper-right twisting crests)
      const r1 = createLayer(140, 36, 360, 0.00068, 3.4, 3.0, 110, 2.7, 0.4, 0.95);
      r1.baseStart = { x: -w * 0.12, y: h * 0.82 };
      r1.baseCtrl1 = { x: w * 0.28, y: h * 0.48 };
      r1.baseCtrl2 = { x: w * 0.68, y: h * 0.18 };
      r1.baseEnd = { x: w * 1.18, y: -h * 0.12 };

      // 2. Secondary Billowing Veil (Sweeping mid-depth with wide gossamer cloth texture)
      const r2 = createLayer(120, 28, 280, 0.00082, 2.7, 2.4, 80, 2.2, 1.9, 0.7);
      r2.baseStart = { x: -w * 0.22, y: h * 0.96 };
      r2.baseCtrl1 = { x: w * 0.35, y: h * 0.68 };
      r2.baseCtrl2 = { x: w * 0.72, y: h * 0.34 };
      r2.baseEnd = { x: w * 1.22, y: h * 0.02 };

      // 3. Ambient Atmospheric Under-Ribbon (Soft violet & deep amber luminescence in depth)
      const r3 = createLayer(85, 18, 220, 0.00048, 1.9, 1.8, 50, 1.7, 3.6, 0.45);
      r3.baseStart = { x: -w * 0.1, y: h * 0.65 };
      r3.baseCtrl1 = { x: w * 0.22, y: h * 0.35 };
      r3.baseCtrl2 = { x: w * 0.52, y: h * 0.12 };
      r3.baseEnd = { x: w * 1.05, y: -h * 0.25 };

      ribbons = [r3, r2, r1];
    };

    const handleResize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initRibbons(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;
      mouseRef.current.prevX = mouseRef.current.targetX;
      mouseRef.current.prevY = mouseRef.current.targetY;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
      mouseRef.current.isActive = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.isActive = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    const handleClick = () => {
      mouseRef.current.pulseTime = 1.0;
    };

    container.addEventListener('mousemove', handlePointerMove, { passive: true });
    container.addEventListener('mouseleave', handlePointerLeave, { passive: true });
    container.addEventListener('click', handleClick, { passive: true });

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        mouseRef.current.targetX = e.touches[0].clientX - rect.left;
        mouseRef.current.targetY = e.touches[0].clientY - rect.top;
        mouseRef.current.isActive = true;
      }
    };
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handlePointerLeave, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    function getBezierPoint(
      p0: { x: number; y: number },
      p1: { x: number; y: number },
      p2: { x: number; y: number },
      p3: { x: number; y: number },
      t: number
    ) {
      const it = 1 - t;
      const it2 = it * it;
      const it3 = it2 * it;
      const t2 = t * t;
      const t3 = t2 * t;

      const x = it3 * p0.x + 3 * it2 * t * p1.x + 3 * it * t2 * p2.x + t3 * p3.x;
      const y = it3 * p0.y + 3 * it2 * t * p1.y + 3 * it * t2 * p2.y + t3 * p3.y;

      const dx =
        3 * it2 * (p1.x - p0.x) +
        6 * it * t * (p2.x - p1.x) +
        3 * t2 * (p3.x - p2.x);
      const dy =
        3 * it2 * (p1.y - p0.y) +
        6 * it * t * (p2.y - p1.y) +
        3 * t2 * (p3.y - p2.y);

      const len = Math.hypot(dx, dy) || 1;
      return { x, y, nx: -dy / len, ny: dx / len };
    }

    let startTime = performance.now();

    const render = (now: number) => {
      if (!isVisibleRef.current) {
        animFrameIdRef.current = requestAnimationFrame(render);
        return;
      }

      const elapsed = now - startTime;

      // Cursor smoothing
      if (mouseRef.current.isActive) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      } else {
        mouseRef.current.x += (-1000 - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (-1000 - mouseRef.current.y) * 0.05;
      }

      if (mouseRef.current.pulseTime > 0.001) {
        mouseRef.current.pulseTime *= 0.94;
      }

      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric backdrop: subtle midnight slate/navy gradient with warm amber/violet ambient center
      const bgGrad = ctx.createRadialGradient(
        width * 0.74,
        height * 0.26,
        40,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.92
      );
      bgGrad.addColorStop(0, 'rgba(26, 16, 28, 0.6)'); // glowing warm core
      bgGrad.addColorStop(0.3, 'rgba(12, 12, 22, 0.5)'); // midnight slate transition
      bgGrad.addColorStop(0.7, 'rgba(5, 6, 10, 0.88)');
      bgGrad.addColorStop(1, 'rgba(2, 2, 4, 0.99)');

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Interactive cursor glow field
      if (mouseRef.current.isActive) {
        const cursorGlow = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          340
        );
        cursorGlow.addColorStop(0, 'rgba(255, 85, 0, 0.18)');
        cursorGlow.addColorStop(0.45, 'rgba(255, 140, 40, 0.06)');
        cursorGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pulse = mouseRef.current.pulseTime;

      ribbons.forEach((ribbon, rIndex) => {
        const time = elapsed * ribbon.speed + ribbon.phase;
        const rows = ribbon.rows;
        const cols = ribbon.cols;

        const screenCoords: {
          x: number;
          y: number;
          z: number;
          alpha: number;
          foldSlope: number;
        }[][] = [];

        for (let r = 0; r < rows; r++) {
          const rowCoords: {
            x: number;
            y: number;
            z: number;
            alpha: number;
            foldSlope: number;
          }[] = [];

          for (let c = 0; c < cols; c++) {
            const pt = ribbon.points[r][c];
            const u = pt.u;
            const v = pt.v;

            const bezier = getBezierPoint(
              ribbon.baseStart,
              ribbon.baseCtrl1,
              ribbon.baseCtrl2,
              ribbon.baseEnd,
              u
            );

            // Realistic multi-frequency 3D folding cloth simulation
            const w1 = Math.sin(u * Math.PI * ribbon.freqU - time * 1.6) * Math.cos(v * Math.PI * ribbon.freqV + time * 0.9);
            const w2 = Math.sin(u * Math.PI * (ribbon.freqU * 1.8) + time * 2.1 + v * 3.6) * 0.52;
            const w3 = Math.cos(u * Math.PI * 0.9 - time * 0.7) * 0.38;
            // Enhanced 3D twist that curls the upper right corner like the reference
            const twist = Math.sin(u * Math.PI * ribbon.twistFreq + time * 1.1) * ribbon.amplitude;

            const z = (w1 + w2 + w3) * ribbon.amplitude + twist * v * 1.8;

            // Across-ribbon width expansion with natural tapering
            const taper = Math.sin(u * Math.PI);
            const currentWidth = ribbon.width * (0.55 + 0.45 * taper);
            const acrossOffset = v * currentWidth + twist * 0.4;

            let px = bezier.x + bezier.nx * acrossOffset;
            let py = bezier.y + bezier.ny * acrossOffset + z * 0.52;

            // Mouse displacement physics (ripples away from cursor)
            if (mouseRef.current.isActive) {
              const dx = px - mx;
              const dy = py - my;
              const dist = Math.hypot(dx, dy);
              const maxDist = 280;

              if (dist < maxDist && dist > 0) {
                const force = ((1 - dist / maxDist) ** 2) * 60;
                pt.vx += (dx / dist) * force * 0.09;
                pt.vy += (dy / dist) * force * 0.09;
              }
            }

            // Click shockwave pulse
            if (pulse > 0.01) {
              const dx = px - mx;
              const dy = py - my;
              const dist = Math.hypot(dx, dy);
              const shockR = (1 - pulse) * 500;
              const diff = Math.abs(dist - shockR);
              if (diff < 80) {
                const sForce = (1 - diff / 80) * pulse * 40;
                pt.vx += (dx / (dist || 1)) * sForce * 0.14;
                pt.vy += (dy / (dist || 1)) * sForce * 0.14;
              }
            }

            // Spring return & velocity damping
            pt.dispX = (pt.dispX + pt.vx) * 0.89;
            pt.dispY = (pt.dispY + pt.vy) * 0.89;
            pt.vx *= 0.82;
            pt.vy *= 0.82;

            px += pt.dispX;
            py += pt.dispY;

            // Curvature / fold illumination factor
            const foldSlope = Math.abs(Math.cos(u * Math.PI * ribbon.freqU - time * 1.6));
            const crestFactor = Math.max(0, z / (ribbon.amplitude || 1));
            const edgeFactor = Math.abs(v * 2);

            const tipFade = Math.sin(u * Math.PI);
            const alpha = Math.max(
              0.04,
              Math.min(0.98, (0.24 + crestFactor * 0.62 + edgeFactor * 0.3 + foldSlope * 0.22) * tipFade * ribbon.baseAlpha)
            );

            rowCoords.push({ x: px, y: py, z, alpha, foldSlope });
          }
          screenCoords.push(rowCoords);
        }

        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // --- RENDER PASS 1: Translucent Gossamer Veil Quads ---
        if (rIndex >= 1) {
          for (let r = 0; r < rows - 2; r += 2) {
            for (let c = 0; c < cols - 2; c += 2) {
              const p0 = screenCoords[r][c];
              const p1 = screenCoords[r][c + 2];
              const p2 = screenCoords[r + 2][c + 2];
              const p3 = screenCoords[r + 2][c];

              const avgZ = (p0.z + p1.z + p2.z + p3.z) * 0.25;
              const avgAlpha = (p0.alpha + p1.alpha + p2.alpha + p3.alpha) * 0.25;

              if (avgAlpha > 0.14) {
                ctx.beginPath();
                ctx.moveTo(p0.x, p0.y);
                ctx.lineTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y);
                ctx.closePath();

                if (avgZ > 25) {
                  // High crest sheen (soft ivory/amber glow)
                  ctx.fillStyle = `rgba(255, 235, 210, ${avgAlpha * 0.14})`;
                } else if (avgZ > -8) {
                  // Body (KritSite electric orange sheer veil)
                  ctx.fillStyle = `rgba(255, 85, 0, ${avgAlpha * 0.09})`;
                } else {
                  // Underside (velvet purple/crimson undertone)
                  ctx.fillStyle = `rgba(168, 85, 247, ${avgAlpha * 0.06})`;
                }
                ctx.fill();
              }
            }
          }
        }

        // --- RENDER PASS 2: Iconic 3D Dot Matrix Points (Fine glowing particle grid) ---
        for (let r = 0; r < rows; r++) {
          const isEdgeRow = r === 0 || r === rows - 1;

          for (let c = 0; c < cols; c++) {
            const p = screenCoords[r][c];

            let colorStr = '';
            let pointSize = 1.0;

            if (p.z > 35) {
              // High bright crest: hot specular white-amber apex
              colorStr = `rgba(255, 248, 240, ${p.alpha * 0.98})`;
              pointSize = isEdgeRow ? 1.8 : 1.45;
            } else if (p.z > 12) {
              // Upper wave body: vibrant electric orange (#ff5500)
              colorStr = `rgba(255, 85, 0, ${p.alpha * 0.92})`;
              pointSize = isEdgeRow ? 1.55 : 1.25;
            } else if (p.z > -15) {
              // Mid wave body: radiant gold/amber (#ff9922)
              colorStr = `rgba(255, 153, 34, ${p.alpha * 0.78})`;
              pointSize = 1.1;
            } else {
              // Underside depth: velvet purple/crimson (#a855f7)
              colorStr = `rgba(168, 85, 247, ${p.alpha * 0.55})`;
              pointSize = 0.95;
            }

            ctx.fillStyle = colorStr;
            ctx.fillRect(p.x, p.y, pointSize, pointSize);
          }
        }

        // --- RENDER PASS 3: Razor-Sharp Luminous Crest Lines (Glowing contour filaments) ---
        const crestRows = [0, 1, Math.floor(rows * 0.28), Math.floor(rows * 0.5), Math.floor(rows * 0.72), rows - 2, rows - 1];

        crestRows.forEach((rIdx) => {
          if (rIdx < 0 || rIdx >= rows) return;
          const isOuterEdge = rIdx === 0 || rIdx === rows - 1;

          ctx.beginPath();
          const firstPt = screenCoords[rIdx][0];
          ctx.moveTo(firstPt.x, firstPt.y);

          for (let c = 1; c < cols - 1; c++) {
            const pCurrent = screenCoords[rIdx][c];
            const pNext = screenCoords[rIdx][c + 1];
            const midX = (pCurrent.x + pNext.x) * 0.5;
            const midY = (pCurrent.y + pNext.y) * 0.5;
            ctx.quadraticCurveTo(pCurrent.x, pCurrent.y, midX, midY);
          }

          const lastPt = screenCoords[rIdx][cols - 1];
          ctx.lineTo(lastPt.x, lastPt.y);

          if (isOuterEdge) {
            ctx.lineWidth = 1.5;
            const crestGrad = ctx.createLinearGradient(
              ribbon.baseStart.x,
              ribbon.baseStart.y,
              ribbon.baseEnd.x,
              ribbon.baseEnd.y
            );
            crestGrad.addColorStop(0, 'rgba(255, 85, 0, 0)');
            crestGrad.addColorStop(0.2, 'rgba(255, 120, 30, 0.75)');
            crestGrad.addColorStop(0.65, 'rgba(255, 250, 242, 1)'); // intense white-amber apex
            crestGrad.addColorStop(0.85, 'rgba(255, 120, 30, 0.85)');
            crestGrad.addColorStop(1, 'rgba(255, 85, 0, 0)');

            ctx.strokeStyle = crestGrad;
            ctx.shadowColor = 'rgba(255, 85, 0, 0.9)';
            ctx.shadowBlur = 14;
            ctx.stroke();
            ctx.shadowBlur = 0;
          } else {
            ctx.lineWidth = 0.65;
            ctx.strokeStyle = `rgba(255, 120, 30, ${0.24 + (rIdx % 2) * 0.12})`;
            ctx.stroke();
          }
        });

        // --- RENDER PASS 4: Transverse Weft Threads (Subtle cross filaments) ---
        ctx.lineWidth = 0.45;
        for (let c = 5; c < cols - 5; c += 5) {
          ctx.beginPath();
          ctx.moveTo(screenCoords[0][c].x, screenCoords[0][c].y);
          for (let r = 1; r < rows; r++) {
            ctx.lineTo(screenCoords[r][c].x, screenCoords[r][c].y);
          }
          ctx.strokeStyle = `rgba(255, 150, 60, ${0.12 * Math.sin((c / cols) * Math.PI)})`;
          ctx.stroke();
        }

        ctx.restore();
      });

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('click', handleClick);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handlePointerLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-auto overflow-hidden select-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Atmospheric perimeter vignette blending into pure black borders */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

      {/* Architectural subtle top/bottom borders matching KritSite aesthetic */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff5500]/30 to-transparent pointer-events-none" />
    </div>
  );
};
