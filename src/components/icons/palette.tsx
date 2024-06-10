import { LucidePalette } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The palette icon component.
 */
const PaletteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucidePalette ref={ref} {...props} />;
});
PaletteIcon.displayName = 'PaletteIcon';

export { PaletteIcon };
