'use client';

import { type FC, useEffect, useRef, useState } from 'react';
import { logger } from '@/utils';

/**
 * The properties of the bitmap image component.
 */
interface BitmapImageProps {
  /**
   * The image bitmap to display.
   */
  readonly bitmap: ImageBitmap | null;

  /**
   * The width of the image.
   */
  readonly width: number;

  /**
   * The height of the image.
   */
  readonly height: number;

  /**
   * The object fit style of the image.
   */
  readonly objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

  /**
   * The render callback for the image bitmap.
   */
  readonly onRender?: (image: ImageData) => void;
}

const BitmapImage: FC<BitmapImageProps> = ({ bitmap, width, height, objectFit = 'none', onRender }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scaledBitmap, setScaledBitmap] = useState<ImageBitmap | null>(null);

  // Effect for resizing the image bitmap
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    if (!bitmap) {
      setScaledBitmap(null);
      return;
    }

    const { width: bitmapWidth, height: bitmapHeight } = bitmap;
    const { width: canvasWidth, height: canvasHeight } = canvas;
    let scaleX = canvasWidth / bitmapWidth;
    let scaleY = canvasHeight / bitmapHeight;
    switch (objectFit) {
      case 'contain': {
        const scale = Math.min(scaleX, scaleY);
        scaleX = scale;
        scaleY = scale;
        break;
      }
      case 'cover': {
        const scale = Math.max(scaleX, scaleY);
        scaleX = scale;
        scaleY = scale;
        break;
      }
      case 'fill': {
        // Use the default scale values
        break;
      }
      case 'scale-down': {
        const scale = Math.min(Math.min(scaleX, scaleY), 1.0);
        scaleX = scale;
        scaleY = scale;
        break;
      }
      case 'none': {
        scaleX = 1.0;
        scaleY = 1.0;
        break;
      }
      default: {
        scaleX = 1.0;
        scaleY = 1.0;
        break;
      }
    }

    createImageBitmap(bitmap, {
      resizeHeight: bitmapHeight * scaleY,
      resizeWidth: bitmapWidth * scaleX,
      resizeQuality: 'medium',
    })
      .then((imageBitmap) => {
        setScaledBitmap(imageBitmap);
      })
      .catch((error) => {
        logger.error(`Failed to resize image bitmap: ${error.message}`);
      });
  }, [bitmap, objectFit]);

  // Effect for drawing the scaled image bitmap
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d', { alpha: true, willReadFrequently: true });
    if (!context) {
      logger.warn('The 2d context is not available on the canvas');
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!scaledBitmap) {
      return;
    }

    const { width: bitmapWidth, height: bitmapHeight } = scaledBitmap;
    const dx = (width - bitmapWidth) / 2;
    const dy = (height - bitmapHeight) / 2;
    context.drawImage(scaledBitmap, dx, dy);

    if (onRender) {
      const imageData = context.getImageData(0, 0, width, height);
      onRender(imageData);
    }
  }, [width, height, onRender, scaledBitmap]);

  return <canvas className='block' ref={canvasRef} height={height} width={width} />;
};
BitmapImage.displayName = 'BitmapImage';

export { BitmapImage };
