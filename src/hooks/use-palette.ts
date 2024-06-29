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
 * @param bitmap - The image bitmap to extract the palette from.
 * @param algorithm - The algorithm to use for extracting the palette.
 * @returns The result of the usePalette hook.
 */
const usePalette = (bitmap: ImageBitmap | null, algorithm: string): UsePaletteResult => {
  const { module } = useWasm();
  const [palette, setPalette] = useState<Palette | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const extract = useCallback(
    (image: ImageBitmap, algorithm: string) => {
      if (!module) {
        throw new Error('Wasm module not initialized yet');
      }

      const { width, height } = image;
      const canvas = new OffscreenCanvas(width, height);
      const context = canvas.getContext('2d', { alpha: true });
      if (!context) {
        throw new Error('The 2D context is not available on the canvas');
      }

      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, width, height);
      return extractPalette(width, height, imageData.data, algorithm);
    },
    [module],
  );

  useEffect(() => {
    if (!module) {
      return;
    }

    if (!bitmap) {
      setPalette(null);
      setError(null);
      return;
    }

    try {
      const palette = extract(bitmap, algorithm);
      setPalette(palette);
    } catch (error) {
      setError(new Error(`Failed to extract the palette: ${error}`));
    }
  }, [module, extract, bitmap, algorithm]);

  return { palette, error };
};
