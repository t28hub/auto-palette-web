import { forwardRef } from 'react';
import { cn } from '@/utils';

/**
 * The properties of the swatch content component.
 */
interface SwatchContentProps {
  /**
   * The class name of the swatch content.
   */
  readonly className?: string;

  /**
   * The color of the swatch.
   */
  readonly color: string;

  /**
   * The position of the swatch.
   */
  readonly position: {
    /**
     * The x-coordinate of the swatch.
     */
    readonly x: number;

    /**
     * The y-coordinate of the swatch.
     */
    readonly y: number;
  };

  /**
   * The population of the swatch.
   */
  readonly population: number;

  /**
   * The ratio of the swatch.
   */
  readonly ratio: number;
}

/**
 * The swatch content component displays the color and information of a swatch.
 */
const SwatchContent = forwardRef<HTMLDivElement, SwatchContentProps>(
  ({ className, color, position, population, ratio, ...props }, ref) => {
    return (
      <div
        className={cn(className, 'flex flex-col w-fit h-fit min-w-48 p-0 rounded-md bg-background shadow-md')}
        ref={ref}
        {...props}
      >
        <div className='flex flex-row justify-start items-center p-4'>
          <div className='w-8 h-8 inline-block rounded-full border border-muted' style={{ backgroundColor: color }}>
            <span className='sr-only'>Color swatch</span>
          </div>
          <p className='ml-2 text-foreground text-sm font-mono font-bold leading-tight uppercase'>{color}</p>
        </div>
        <dl className='px-4 py-2 border-t border-muted text-sm font-mono'>
          <div className='grid grid-cols-3 gap-2 py-2'>
            <dt className='font-bold'>Color</dt>
            <dd className='font-normal col-span-2 uppercase'>{color}</dd>
          </div>
          <div className='grid grid-cols-3 gap-2 py-2'>
            <dt className='font-bold'>Position</dt>
            <dd className='font-normal col-span-2'>
              ({position.x}, {position.y})
            </dd>
          </div>
          <div className='grid grid-cols-3 gap-2 py-2'>
            <dt className='font-bold'>Population</dt>
            <dd className='font-normal col-span-2'>{population}</dd>
          </div>
          <div className='grid grid-cols-3 gap-2 py-2'>
            <dt className='font-bold'>Ratio</dt>
            <dd className='font-normal col-span-2'>{ratio}</dd>
          </div>
        </dl>
      </div>
    );
  },
);
SwatchContent.displayName = 'SwatchContent';

export { SwatchContent };
