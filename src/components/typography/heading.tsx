import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type PropsWithChildren } from 'react';
import { cn } from '@/utils';

const HeadingVariants = cva('py-2 font-bold leading-normal tracking-normal', {
  variants: {
    size: {
      xl: 'text-2xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';

const HeadingTags: Record<HeadingSize, HeadingTag> = {
  xl: 'h1',
  lg: 'h2',
  md: 'h3',
  sm: 'h4',
};

/**
 * The properties of the heading component.
 */
interface HeadingProps extends VariantProps<typeof HeadingVariants>, PropsWithChildren {
  /**
   * The tag to render the heading as.
   */
  readonly as?: HeadingTag;

  /**
   * The class name to apply to the heading.
   */
  readonly className?: string;
}

/**
 * The heading component.
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ as, size, className, children, ...props }, ref) => {
  const Component = as || HeadingTags[size || 'md'];
  return (
    <Component ref={ref} className={cn(HeadingVariants({ size, className }))} {...props}>
      {children}
    </Component>
  );
});
Heading.displayName = 'Heading';

export { Heading };
