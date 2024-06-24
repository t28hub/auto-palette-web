'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { type FC, useMemo } from 'react';
import { type Language, useShiki } from '@/providers/shiki-provider';
import { cn } from '@/utils';

const Variants = cva('font-mono', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

/**
 * The code component props.
 */
interface CodeProps extends VariantProps<typeof Variants> {
  /**
   * The language of the code block.
   */
  readonly language: Language;

  /**
   * The content of the code block.
   */
  readonly children: string | string[];
}

/**
 * The code component.
 *
 * @param props The code component props.
 */
const Code: FC<CodeProps> = ({ size, language, children }) => {
  const { highlight } = useShiki();

  const html = useMemo(() => {
    const code = Array.isArray(children) ? children.join('\n') : children;
    return highlight(code, language);
  }, [highlight, language, children]);

  return (
    <div className='relative p-4 overflow-x-auto'>
      <div className={cn(Variants({ size }))}>
        <div
          className='bg-green5'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is a code snippet and should be rendered as HTML.
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};
Code.displayName = 'CodeBlock';

export { Code };
