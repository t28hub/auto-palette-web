import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils';

/**
 * The card component.
 */
const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col justify-start items-start p-4 rounded-lg border border-muted hover:border-muted/60 hover:shadow-lg',
        className,
      )}
      {...props}
    />
  );
});
Card.displayName = 'Card';

export { Card };
