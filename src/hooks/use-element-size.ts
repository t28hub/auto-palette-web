'use client';

import { type RefObject, useCallback, useLayoutEffect, useState } from 'react';

/**
 * The size of an element.
 */
interface Size {
  /**
   * The width of the element.
   */
  readonly width: number;

  /**
   * The height of the element.
   */
  readonly height: number;
}

/**
 * Get the size of an element.
 *
 * @param ref - The reference to the element.
 * @returns The size of the element.
 */
const useElementSize = <T extends HTMLElement = HTMLDivElement>(ref: RefObject<T | null>): Size => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const onResize = useCallback(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const { width, height } = element.getBoundingClientRect();
    setSize({ width, height });
  }, [ref]);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    onResize();

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, onResize]);

  return size;
};

export { type Size, useElementSize };
