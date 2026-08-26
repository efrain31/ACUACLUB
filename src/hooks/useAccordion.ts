import { useState } from 'react';
import { AccordionState } from '@types/index';

/**
 * Custom hook for managing accordion state
 * @param initialId - Optional ID of initially open item
 * @returns AccordionState with methods to manage accordion
 */
export const useAccordion = (initialId?: string): AccordionState => {
  const [openId, setOpenId] = useState<string | null>(initialId || null);

  const toggle = (id: string): void => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const open = (id: string): void => {
    setOpenId(id);
  };

  const close = (id: string): void => {
    if (openId === id) {
      setOpenId(null);
    }
  };

  return {
    openId,
    toggle,
    open,
    close,
  };
};
