import { useState, useRef, useCallback } from 'react';

export interface TrailItem {
  id: number;
  x: number;
  y: number;
  rotation: number;
  image: string;
}

export function useMouseTrail(images: string[], minInterval = 80) {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const imageIndex = useRef<number>(0);
  const nextId = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Only on desktop / pointer devices
    if (window.innerWidth < 768) return;

    const now = performance.now();
    if (now - lastSpawnTime.current < minInterval) return;
    lastSpawnTime.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = (Math.random() - 0.5) * 20; // -10 to +10 deg
    const image = images[imageIndex.current % images.length];
    imageIndex.current += 1;

    const newItem: TrailItem = {
      id: nextId.current++,
      x,
      y,
      rotation,
      image,
    };

    setTrail((prev) => [...prev.slice(-8), newItem]);

    // Remove after 1000ms
    setTimeout(() => {
      setTrail((prev) => prev.filter((item) => item.id !== newItem.id));
    }, 1000);
  }, [images, minInterval]);

  return { trail, handleMouseMove };
}
