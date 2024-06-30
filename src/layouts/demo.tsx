'use client';

import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { BitmapImage } from '@/components/image';
import { Marker } from '@/components/swatch';
import { AspectRatio } from '@/components/ui';
import { useBitmap, useElementSize, usePalette } from '@/hooks';
import { logger } from '@/utils';
import type { Swatch } from '@/wasm/auto-palette';

/**
 * The demo layout component.
 *
 * @constructor
 */
const DemoLayout: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerSize = useElementSize(containerRef);
  const { imageBitmap, error } = useBitmap(
    'https://images.unsplash.com/photo-1718775971170-bab41e147a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTc4MjR8MHwxfGFsbHw3fHx8fHx8Mnx8MTcxOTU2NzAwM3w&ixlib=rb-4.0.3&q=80&w=400',
  );
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const { palette, error: paletteError } = usePalette(imageData, 'dbscan++');
  const [swatches, setSwatches] = useState<Swatch[]>([]);

  const onRender = useCallback((rendered: ImageData) => {
    setImageData(rendered);
  }, []);

  useEffect(() => {
    if (!palette && !paletteError) {
      return;
    }

    if (paletteError) {
      logger.error(`Failed to extract palette: ${paletteError.message}`);
      return;
    }

    if (palette) {
      logger.debug(`Extracted ${palette.length} swatches`);
      const swatches = palette.findSwatches(5, 'basic');
      setSwatches(swatches);
    }
  }, [palette, paletteError]);

  return (
    <section className='w-full min-w-screen-sm  max-w-screen-lg flex items-center justify-start'>
      <AspectRatio ref={containerRef} ratio={16 / 9} className='flex items-center justify-center relative'>
        <div className='h-full w-full -z-10 overflow-hidden rounded-lg bg-image-placeholder bg-4'>
          {imageBitmap && (
            <BitmapImage
              bitmap={imageBitmap}
              height={containerSize.height}
              width={containerSize.width}
              objectFit='cover'
              onRender={onRender}
            />
          )}
        </div>

        {swatches.map((swatch) => {
          const { color, position } = swatch;
          const key = `${color}-${position.x}-${position.y}`;
          return <Marker className='cursor-pointer' key={key} x={position.x} y={position.y} color={color} />;
        })}
      </AspectRatio>
    </section>
  );
};

export { DemoLayout };
