import { useEffect, useRef,useState } from 'react';

import { fadeUp } from '@/styles/animation';

export const useAnimation = (options = {}) => {
  
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px',
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {

    const currentRef = sectionRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {

        requestAnimationFrame(() => { setIsVisible(true) });

        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }}, { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold, triggerOnce, rootMargin]);

  const animate = (delayMs, durationMs = 1200) => ({
    opacity: 0,
    animation: isVisible
      ? `${fadeUp} ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms forwards`
      : 'none'
  });

  return {
    isVisible,
    sectionRef,
    animate
  };
};