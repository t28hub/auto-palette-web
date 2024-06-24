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
import type { BundledLanguage, BundledTheme, Highlighter } from 'shiki';
import { logger } from '@/utils';

type Theme = BundledTheme;

type Language = BundledLanguage;

interface ShikiContext {
  highlight: (code: string, language: Language) => string;
}

const Context = createContext<ShikiContext>({
  highlight: (code: string) => `<pre><code>${code}</code></pre>`,
});

interface ShikiProviderProps extends PropsWithChildren {
  readonly light: Theme;
  readonly dark: Theme;
}

const ShikiProvider: FC<ShikiProviderProps> = ({ light, dark, children }) => {
  const highlighter = useHighlighter(light, dark);

  const highlight = useCallback(
    (code: string, language: Language) => {
      if (!highlighter) {
        return `<pre><code>${code}</code></pre>`;
      }

      return highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          light,
          dark,
        },
      });
    },
    [highlighter, light, dark],
  );

  const value = useMemo(() => {
    return { highlight };
  }, [highlight]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const loadHighlighter = async (light: Theme, dark: Theme) => {
  const { bundledLanguages, createHighlighter } = await import('shiki');
  return createHighlighter({
    themes: [light, dark],
    langs: Object.keys(bundledLanguages),
  });
};

const useHighlighter = (light: Theme, dark: Theme): Highlighter | null => {
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const abortListener = () => {
      controller.signal.removeEventListener('abort', abortListener);
    };
    controller.signal.addEventListener('abort', abortListener);

    loadHighlighter(light, dark)
      .then((highlighter) => {
        logger.debug('Shiki highlighter loaded', highlighter);
        setHighlighter(highlighter);
      })
      .catch((cause) => {
        logger.warn('Failed to load Shiki highlighter', cause);
        setHighlighter(null);
      });

    return () => {
      controller.abort();
    };
  }, [light, dark]);

  return highlighter;
};

/**
 * The hook that uses the Shiki context.
 *
 * @returns The Shiki context.
 */
const useShiki = () => useContext(Context);

export { type Language, type Theme, ShikiProvider, useShiki };
