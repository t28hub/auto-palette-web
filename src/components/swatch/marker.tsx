import { cva, type VariantProps } from 'class-variance-authority';
import { type CSSProperties, type FC, useMemo } from 'react';
import { cn } from '@/utils';

const markerVariants = cva(
  'absolute -translate-x-1/2 -translate-y-1/2 z-10 rounded-full border-2 border-accent shadow-lg',
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
interface MarkerProps extends VariantProps<typeof markerVariants> {
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
const Marker: FC<MarkerProps> = ({ className, x, y, color, size }) => {
  const positionStyle = useMemo<CSSProperties>(
    () => ({
      left: x,
      top: y,
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
    <div className={cn(markerVariants({ size, className }))} style={positionStyle}>
      <div className='w-full h-full rounded-full' style={backgroundStyle} />
    </div>
  );
};
Marker.displayName = 'Marker';

export { Marker };
