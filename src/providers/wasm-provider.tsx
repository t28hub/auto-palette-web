'use client';

import { createContext, type FC, type PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import init, { type InitOutput } from '@/wasm/auto-palette';
import { logger } from '@/utils';

/**
 * The Context for the Wasm module.
 */
interface WasmContext {
  /**
   * The loaded Wasm module.
   * If the module is not loaded yet, it will be `null`.
   */
  readonly module: InitOutput | null;
}

const Context = createContext<WasmContext>({
  module: null,
});

const WasmProvider: FC<PropsWithChildren> = ({ children }) => {
  const module = useWasmModule();

  const value = useMemo<WasmContext>(() => {
    return { module };
  }, [module]);

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
