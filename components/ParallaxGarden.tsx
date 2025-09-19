"use client";

import { useEffect, useRef } from "react";

type Layer = {
  src: string;
  speed: number; // smaller = slower
  blur?: string;
  opacity?: number;
};

const layers: Layer[] = [
  { src: "/images/background.jpg", speed: 0.15, blur: "blur-sm", opacity: 0.9 },
  { src: "/images/background.jpg", speed: 0.3, blur: "", opacity: 1 },
  { src: "/images/background.jpg", speed: 0.6, blur: "", opacity: 1 },
];

export default function ParallaxGarden() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;
    let mouseX = 0, mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x; mouseY = y;
    };

    const onScroll = () => {
      // no-op, but keep hook for future scroll parallax tweaks
    };

    const animate = () => {
      const layerEls = container.querySelectorAll<HTMLDivElement>("[data-layer]");
      layerEls.forEach((el) => {
        const speed = Number(el.dataset.speed || 0.2);
        const tx = -mouseX * 30 * speed;
        const ty = -mouseY * 20 * speed;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
      rafId = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {layers.map((l, i) => (
        <div
          key={i}
          data-layer
          data-speed={l.speed}
          className={`absolute inset-0 bg-cover bg-center ${l.blur || ""}`}
          style={{
            backgroundImage: `url('${l.src}')`,
            opacity: l.opacity ?? 1,
            filter: l.blur ? undefined : undefined,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
    </div>
  );
}


