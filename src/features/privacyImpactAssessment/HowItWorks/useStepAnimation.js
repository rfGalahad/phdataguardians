import { useCallback, useRef, useState } from 'react';

export const useStepAnimation = (total) => {
  
  const visibleCount = useRef(0);
  const [allComplete, setAllComplete] = useState(false);

  const onStepVisible = useCallback(() => {
    visibleCount.current += 1;
    if (visibleCount.current >= total) {
      setAllComplete(true);
    }
  }, [total]);

  return { allComplete, onStepVisible };
};