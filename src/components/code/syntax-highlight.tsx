import 'server-only';
import type { FC } from 'react';
import { type BundledLanguage, type BundledTheme, createHighlighter } from 'shiki';

/**
 * The supported themes for syntax highlighting.
 */
type Theme = BundledTheme;

/**
 * The supported languages for syntax highlighting.
 */
type Language = BundledLanguage;

/**
 * The syntax highlight component props.
 */
interface SyntaxHighlightProps {
  /**
   * The language to highlight.
   */
  readonly language: Language;

  /**
   * The light theme for syntax highlighting.
   */
  readonly light: Theme;

  /**
   * The dark theme for syntax highlighting.
   */
  readonly dark: Theme;

  /**
   * The content to highlight.
   */
  readonly children: string;
}

/**
 * The syntax highlight component.
 *
 * @param props The syntax highlight component props.
 */
const SyntaxHighlight: FC<SyntaxHighlightProps> = async ({ language, light, dark, children }) => {
  const highlighter = await createHighlighter({
    themes: [light, dark],
    langs: [language],
  });

  const html = highlighter.codeToHtml(children, {
    lang: language,
    themes: {
      light,
      dark,
    },
  });

  // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a code snippet and should be rendered as HTML.
  return <div className='bg-transparent' dangerouslySetInnerHTML={{ __html: html }} />;
};
SyntaxHighlight.displayName = 'SyntaxHighlight';

export { type Language, SyntaxHighlight, type Theme };
