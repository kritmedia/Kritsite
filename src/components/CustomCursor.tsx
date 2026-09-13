import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  
  const mousePosRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isClickingRef = useRef(false);
  const isVisibleRef = useRef(false);

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointer (desktop mice/trackpads)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Check if hovering over clickable or interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .interactive-target')
        );
        isHoveredRef.current = isInteractive;
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;

    const renderLoop = () => {
      // Direct update for the precision center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePosRef.current.x}px, ${mousePosRef.current.y}px, 0) translate(-50%, -50%) scale(${
          isClickingRef.current ? 0.7 : 1
        })`;
      }

      // Smooth lerp physics for the trailing outer ambient ring
      const LERP_FACTOR = 0.16;
      ringPosRef.current.x += (mousePosRef.current.x - ringPosRef.current.x) * LERP_FACTOR;
      ringPosRef.current.y += (mousePosRef.current.y - ringPosRef.current.y) * LERP_FACTOR;

      if (ringRef.current) {
        const scale = isClickingRef.current ? 0.85 : isHoveredRef.current ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        
        if (isHoveredRef.current) {
          ringRef.current.style.borderColor = 'rgba(255, 85, 0, 0.8)';
          ringRef.current.style.backgroundColor = 'rgba(255, 85, 0, 0.08)';
        } else {
          ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          ringRef.current.style.backgroundColor = 'transparent';
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ff5500] rounded-full pointer-events-none z-[99999] opacity-0 transition-opacity duration-200 shadow-[0_0_8px_#ff5500]"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Trailing Outer Ring / Subtle Halo */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/25 pointer-events-none z-[99998] opacity-0 transition-[opacity,border-color,background-color] duration-200 backdrop-blur-[0.5px]"
        style={{ willChange: 'transform, opacity' }}
      />
    </>
  );
};
