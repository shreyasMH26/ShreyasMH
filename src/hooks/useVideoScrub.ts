import { useEffect, useRef } from 'react';

const SENSITIVITY = 0.8;

export function useVideoScrub(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const seekingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeeked = () => {
      if (!video) return;
      seekingRef.current = false;
      // If target has moved since last seek, seek again
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        seekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!video || !video.duration) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      targetTimeRef.current = Math.min(
        Math.max(targetTimeRef.current + timeOffset, 0),
        video.duration
      );

      if (!seekingRef.current) {
        seekingRef.current = true;
        video.currentTime = targetTimeRef.current;
      }
    };

    video.addEventListener('seeked', handleSeeked);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      video.removeEventListener('seeked', handleSeeked);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [videoRef]);
}
