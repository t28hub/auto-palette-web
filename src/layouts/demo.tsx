'use client';

import { type FC, useEffect, useRef } from 'react';
import { BitmapImage } from '@/components/image';
import { useBitmap, useElementSize, usePalette } from '@/hooks';
import { logger } from '@/utils';
import { AspectRatio } from '@/components/ui';

/**
 *
 * @constructor
 */
const DemoLayout: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerSize = useElementSize(containerRef);
  const { bitmap, error } = useBitmap(
    'https://images.unsplash.com/photo-1718775971170-bab41e147a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTc4MjR8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxOTU2NzAwM3w&ixlib=rb-4.0.3&q=80&w=400',
  );
  const { palette, error: paletteError } = usePalette(bitmap, 'dbscan++');

  useEffect(() => {
    if (!palette && !paletteError) {
      return;
    }

    if (paletteError) {
      logger.error(`Failed to extract palette: ${paletteError.message}`);
      return;
    }

    if (palette) {
      logger.info(`Extracted ${palette.length} swatches`);
      const swatches = palette.findSwatches(5, 'basic');
      for (const swatch of swatches) {
        logger.info(`Color: ${swatch.color}`);
        logger.info(`Population: ${swatch.population}`);
        logger.info(`Ratio: ${swatch.ratio}`);
      }
    }
  }, [palette, paletteError]);

  return (
    <section className='w-full min-w-screen-sm  max-w-screen-lg flex items-center justify-start'>
      <AspectRatio ref={containerRef} ratio={16 / 9} asChild className='flex items-center justify-center relative'>
        <div className='h-full w-full overflow-hidden rounded-lg bg-image-placeholder bg-4'>
          {bitmap && (
            <BitmapImage bitmap={bitmap} height={containerSize.height} width={containerSize.width} objectFit='cover' />
          )}
        </div>
      </AspectRatio>
    </section>
  );
};

export { DemoLayout };
