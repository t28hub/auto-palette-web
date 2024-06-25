'use client';

import {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import init, { extract as extractPalette, type InitOutput, type PaletteBinding } from '@/wasm/auto-palette';
import { logger } from '@/utils';

/**
 * The Context for the Wasm module.
 */
interface WasmContext {
  /**
   * Extract a palette from the given image.
   *
   * @param image - The image to extract the palette from.
   * @returns The extracted palette.
   */
  extract: (image: ImageBitmap) => PaletteBinding;
}

const Context = createContext<WasmContext>({
  extract: () => {
    throw new Error('Wasm module not initialized yet');
  },
});

const WasmProvider: FC<PropsWithChildren> = ({ children }) => {
  const module = useWasmModule();

  const extract = useCallback(
    (image: ImageBitmap) => {
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
      return extractPalette(width, height, imageData.data, 'dbscan++');
    },
    [module],
  );

  const value = useMemo(() => {
    return { extract };
  }, [extract]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useWasmModule = (): InitOutput | null => {
  const [output, setOutput] = useState<InitOutput | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const abortListener = () => {
      controller.signal.removeEventListener('abort', abortListener);
    };
    controller.signal.addEventListener('abort', abortListener);

    init()
      .then((initialized) => {
        logger.info('Wasm module initialized', initialized);
        if (controller.signal.aborted) {
          return;
        }
        setOutput(initialized);
      })
      .catch((error) => {
        logger.warn('Failed to initialize Wasm module', error);
        setOutput(null);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return output;
};

/**
 * The hook that uses the Wasm context.
 *
 * @returns The Wasm context.
 */
const useWasm = () => useContext(Context);

export { WasmProvider, useWasm };
