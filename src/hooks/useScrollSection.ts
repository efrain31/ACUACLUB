import { useEffect, useState } from 'react';

/**
 * Custom hook for detecting active section on scroll
 * @param sectionIds - Array of section IDs to track
 * @returns ID of currently active section
 */
export const useScrollSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        const sectionStart = offsetTop;
        const sectionEnd = offsetTop + offsetHeight;

        if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};
