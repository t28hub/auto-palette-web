'use client';

import { useCallback, useEffect, useState } from 'react';
import { extract as extractPalette, type Palette } from '@/wasm/auto-palette';
import { useWasm } from '@/providers/wasm-provider';

/**
 * The result of the usePalette hook.
 */
interface UsePaletteResult {
  /**
   * The extracted palette.
   */
  readonly palette: Palette | null;

  /**
   * The error that occurred while extracting the palette.
   */
  readonly error: Error | null;
}

/**
 * Extract the palette from the given image bitmap using the specified algorithm.
 *
 * @param imageData - The image data to extract the palette from.
 * @param algorithm - The algorithm to use for extracting the palette.
 * @returns The result of the usePalette hook.
 */
const usePalette = (imageData: ImageData | null, algorithm: string): UsePaletteResult => {
  const { module } = useWasm();
  const [palette, setPalette] = useState<Palette | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const extract = useCallback(
    (imageData: ImageData, algorithm: string) => {
      if (!module) {
        throw new Error('Wasm module not initialized yet');
      }

      const { width, height, data } = imageData;
      return extractPalette(width, height, data, algorithm);
    },
    [module],
  );

  useEffect(() => {
    if (!module) {
      return;
    }

    if (!imageData) {
      setPalette(null);
      setError(null);
      return;
    }

    try {
      const palette = extract(imageData, algorithm);
      setPalette(palette);
    } catch (error) {
      setError(new Error(`Failed to extract the palette: ${error}`));
    }
  }, [module, extract, imageData, algorithm]);

  return { palette, error };
};

export { usePalette };
