import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils';

/**
 * The card content component.
 */
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('px-4 pb-4 space-y-2')} {...props} />;
});
CardContent.displayName = 'CardContent';

export { CardContent };
