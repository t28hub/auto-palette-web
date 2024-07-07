import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type PropsWithChildren } from 'react';
import { cn } from '@/utils';

const TextVariants = cva('font-normal leading-normal tracking-normal', {
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      none: 'normal-case',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'left',
    transform: 'none',
  },
});

/**
 * The properties of the text component.
 */
interface TextProps extends VariantProps<typeof TextVariants>, PropsWithChildren {
  /**
   * The class name to apply to the text.
   */
  readonly className?: string;
}

/**
 * The text component.
 */
const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size, align, transform, className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(TextVariants({ size, align, transform, className }))} {...props}>
        {children}
      </p>
    );
  },
);
Text.displayName = 'Text';

export { Text };
