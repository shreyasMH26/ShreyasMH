import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once visible, we can unobserve if we want a permanent reveal
        observer.unobserve(currentRef);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isInView] as const;
}
