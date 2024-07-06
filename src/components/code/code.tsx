'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import React, { type FC, useMemo } from 'react';
import { CopyButton } from '@/components/buttons';
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

  const code = useMemo(() => {
    return Array.isArray(children) ? children.join('\n') : children;
  }, [children]);

  const html = useMemo(() => {
    return highlight(code, language);
  }, [highlight, language, code]);

  return (
    <div className='relative p-4 overflow-x-auto'>
      <CopyButton className='absolute top-2 right-2 z-10' text={code} duration={1000} />
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
