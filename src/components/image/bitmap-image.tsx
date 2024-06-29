'use client';

import { type FC, useEffect, useRef, useState } from 'react';
import { logger } from '@/utils';

interface BitmapImageProps {
  readonly bitmap: ImageBitmap | null;
  readonly height: number;
  readonly width: number;
  readonly objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const BitmapImage: FC<BitmapImageProps> = ({ bitmap, height, width, objectFit = 'none' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scaledBitmap, setScaledBitmap] = useState<ImageBitmap | null>(null);

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

    console.info(scaleX, scaleY);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      logger.warn('The 2d context is not available on the canvas');
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!scaledBitmap) {
      return;
    }

    const { width, height } = scaledBitmap;
    const dx = (canvas.width - width) / 2;
    const dy = (canvas.height - height) / 2;
    context.drawImage(scaledBitmap, dx, dy);
  }, [scaledBitmap]);

  return <canvas className='block' ref={canvasRef} height={height} width={width} />;
};
BitmapImage.displayName = 'BitmapImage';

export { BitmapImage };
