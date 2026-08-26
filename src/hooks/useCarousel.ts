import { useState } from 'react';
import { CarouselState } from '@types/index';

/**
 * Custom hook for managing carousel state
 * @param totalItems - Total number of items in carousel
 * @param autoPlay - Optional: auto-play interval in ms
 * @returns CarouselState with navigation methods
 */
export const useCarousel = (
  totalItems: number,
  autoPlay?: number,
): CarouselState => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (): void => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = (): void => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goTo = (index: number): void => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  };

  // Auto-play functionality (optional)
  if (autoPlay) {
    // Note: For production use, consider using useEffect with cleanup
    // to manage the interval properly and avoid memory leaks
  }

  return {
    currentIndex,
    next,
    prev,
    goTo,
  };
};
