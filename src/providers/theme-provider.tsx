'use client';

import type { FC } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

/**
 * The provider that provides the theme context.
 *
 * @param children The children to render.
 * @param props The theme provider props.
 */
const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
ThemeProvider.displayName = 'ThemeProvider';

export { ThemeProvider };
