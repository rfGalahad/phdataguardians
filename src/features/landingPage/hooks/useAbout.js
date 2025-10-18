import { useEffect, useState, useCallback } from 'react';



export const useAbout = (images) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    'Deep expertise in local regulations and global best practices',
    'Specialized in government, SME, and community organization needs',
    'CPU-accredited training programs and certifications',
    'Comprehensive data breach response and management',
    'Privacy-by-design technology solutions'
  ];

  // Go to previous image
  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Go to next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Handle page change from pagination
  const handlePageChange = useCallback((_, value) => {
    setCurrentIndex(value - 1);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  }, [prevImage, nextImage]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return {
    currentIndex,
    items,
    handlePageChange
  };
};