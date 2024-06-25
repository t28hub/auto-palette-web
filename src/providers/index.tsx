import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from './theme-provider';
import { ShikiProvider } from './shiki-provider';
import { WasmProvider } from '@/providers/wasm-provider';

/**
 * The composite providers component.
 */
const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <ShikiProvider light='github-light' dark='github-dark'>
        <WasmProvider>{children}</WasmProvider>
      </ShikiProvider>
    </ThemeProvider>
  );
};

export { Providers };
