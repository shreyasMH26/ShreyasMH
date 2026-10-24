import { useRef } from 'react';
import { useVideoScrub } from '../hooks/useVideoScrub';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoScrub(videoRef);

  return (
    <video
      ref={videoRef}
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '70% center',
      }}
    />
  );
}
