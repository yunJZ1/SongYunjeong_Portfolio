import { useRef } from "react";

export function useGradientSurface() {
  const ref = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingPos = useRef({ x: 0, y: 0 });

  const style = {
    "--mouse-x": "50%",
    "--mouse-y": "50%",
    "--glow-opacity": "0",
  } as React.CSSProperties;

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    pendingPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      const target = ref.current;
      if (target) {
        target.style.setProperty("--mouse-x", `${pendingPos.current.x}px`);
        target.style.setProperty("--mouse-y", `${pendingPos.current.y}px`);
      }
      rafRef.current = null;
    });
  }

  function onMouseEnter() {
    ref.current?.style.setProperty("--glow-opacity", "1");
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--mouse-x", "50%");
    el.style.setProperty("--mouse-y", "50%");
    el.style.setProperty("--glow-opacity", "0");
  }

  return { ref, style, onMouseMove, onMouseEnter, onMouseLeave };
}
