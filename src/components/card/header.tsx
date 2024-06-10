import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils';

/**
 * The card header component.
 */
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('flex flex-col items-start justify-center gap-2 p-4', className)} {...props} />;
});
CardHeader.displayName = 'CardHeader';

export { CardHeader };
