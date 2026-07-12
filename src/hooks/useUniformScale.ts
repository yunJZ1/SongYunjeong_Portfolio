import { useLayoutEffect, useRef, useState } from "react";

export function useUniformScale(baseWidth: number) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateScale = () => {
      setScale(wrapper.clientWidth / baseWidth);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [baseWidth]);

  return { wrapperRef, scale };
}
