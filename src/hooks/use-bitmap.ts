'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The result of the useBitmap hook.
 */
interface UseBitmapResult {
  /**
   * The loaded image bitmap.
   */
  readonly bitmap: ImageBitmap | null;

  /**
   * The error that occurred while loading the image bitmap.
   */
  readonly error: Error | null;
}

/**
 * An error that occurred while loading an image bitmap.
 */
class NetworkError extends Error {
  /**
   * Create a new network error.
   *
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

/**
 * Load an image bitmap from the given URL.
 *
 * @param url - The URL of the image to load.
 * @returns The result of the useBitmap hook.
 */
const useBitmap = (url: string | undefined): UseBitmapResult => {
  const abortControllerRef = useRef<AbortController | null>(null);
  const [bitmap, setBitmap] = useState<ImageBitmap | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    abortControllerRef.current?.abort();

    if (!url) {
      setBitmap(null);
      setError(null);
      return;
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    fetch(url, { mode: 'cors', signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new NetworkError(`Received ${response.status} ${response.statusText} for ${url}`);
        }
        return response.blob();
      })
      .then((blob) => createImageBitmap(blob))
      .then((imageBitmap) => {
        if (controller.signal.aborted) {
          return;
        }
        setBitmap(imageBitmap);
      })
      .catch((error) => {
        if (controller.signal.aborted) {
          return;
        }
        setError(error);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { bitmap, error };
};

export { useBitmap };
