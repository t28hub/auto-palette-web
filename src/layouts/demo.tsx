'use client';

import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { BitmapImage } from '@/components/image';
import { SwatchContent, SwatchMarker } from '@/components/swatch';
import { AspectRatio, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
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
    // 'https://images.unsplash.com/photo-1719306563732-d96ebd9163e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTc4MjR8MHwxfGFsbHwyfHx8fHx8Mnx8MTcxOTgzODI4N3w&ixlib=rb-4.0.3&q=80&w=400'
    // 'https://images.unsplash.com/photo-1718964313564-a79ff1a60ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTc4MjR8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MTk4MzgyODd8&ixlib=rb-4.0.3&q=80&w=400'
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
    <section className='w-full min-w-screen-sm max-w-screen-lg flex flex-col items-start justify-start mt-4'>
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
          const { color, position, population, ratio } = swatch;
          const key = `${color}-${position.x}-${position.y}`;
          return (
            <Popover key={key}>
              <PopoverTrigger asChild>
                <SwatchMarker className='cursor-pointer' color={color} x={position.x} y={position.y} />
              </PopoverTrigger>
              <PopoverContent asChild align='center'>
                <SwatchContent
                  color={color}
                  position={position}
                  population={population}
                  ratio={Math.round(ratio * 10000) / 10000}
                />
              </PopoverContent>
            </Popover>
          );
        })}
      </AspectRatio>
    </section>
  );
};

export { DemoLayout };
