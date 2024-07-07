import { forwardRef, type PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const AnchorVariants = cva('', {
  variants: {
    underline: {
      always: 'underline',
      hover: 'hover:underline',
      never: 'no-underline',
    },
  },
  defaultVariants: {
    underline: 'hover',
  },
});

/**
 * The properties of the anchor component.
 */
interface AnchorProps extends VariantProps<typeof AnchorVariants>, PropsWithChildren {
  /**
   * The slug to link to.
   */
  readonly slug: string;

  /**
   * The class name to apply to the anchor.
   */
  readonly className?: string;

  /**
   * The aria label for the anchor.
   */
  readonly ariaLabel: string;
}

/**
 * The anchor component.
 */
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ underline, slug, ariaLabel, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(AnchorVariants({ underline, className }))}
        id={slug}
        href={`#${slug}`}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  },
);
Anchor.displayName = 'Anchor';

export { Anchor };
