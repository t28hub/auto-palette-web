import { cva, type VariantProps } from 'class-variance-authority';
import { type CSSProperties, forwardRef, useMemo } from 'react';
import { cn } from '@/utils';

const MarkerVariants = cva(
  'absolute -translate-x-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-accent shadow-md',
  {
    variants: {
      size: {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

/**
 * The properties of the marker component.
 */
interface SwatchMarkerProps extends VariantProps<typeof MarkerVariants> {
  /**
   * The class name of the marker.
   */
  readonly className?: string;

  /**
   * The x-coordinate of the marker.
   */
  readonly x: number;

  /**
   * The y-coordinate of the marker.
   */
  readonly y: number;

  /**
   * The color of the marker.
   */
  readonly color: string;
}

/**
 * The marker component displays a swath of color at a specific location.
 */
const SwatchMarker = forwardRef<HTMLDivElement, SwatchMarkerProps>(
  ({ className, x, y, color, size, ...props }, ref) => {
    const positionStyle = useMemo<CSSProperties>(
      () => ({
        top: y,
        left: x,
      }),
      [x, y],
    );

    const backgroundStyle = useMemo<CSSProperties>(
      () => ({
        backgroundColor: color,
      }),
      [color],
    );

    return (
      <div className={cn(MarkerVariants({ size, className }))} style={positionStyle} ref={ref} {...props}>
        <div className='w-full h-full rounded-full' style={backgroundStyle}>
          <span className='sr-only'>Color marker</span>
        </div>
      </div>
    );
  },
);
SwatchMarker.displayName = 'SwatchMarker';

export { SwatchMarker };
