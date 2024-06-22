import { type FC, useMemo } from 'react';
import { type Language, SyntaxHighlight } from './syntax-highlight';
import { cva, type VariantProps } from 'class-variance-authority';
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
 * The code block component props.
 */
interface CodeBlockProps extends VariantProps<typeof Variants> {
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
 * The code block component.
 *
 * @param props The code block component props.
 */
const CodeBlock: FC<CodeBlockProps> = ({ size, language, children }) => {
  const code = useMemo(() => {
    return Array.isArray(children) ? children.join('\n') : children;
  }, [children]);

  return (
    <div className='relative p-4 overflow-x-auto'>
      <div className={cn(Variants({ size }))}>
        <SyntaxHighlight language={language} light='github-light-default' dark='github-dark-default'>
          {code}
        </SyntaxHighlight>
      </div>
    </div>
  );
};
CodeBlock.displayName = 'CodeBlock';

export { CodeBlock };
