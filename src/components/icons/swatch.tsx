import { LucideSwatchBook } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The swatch icon component.
 */
const SwatchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideSwatchBook ref={ref} {...props} />;
});
SwatchIcon.displayName = 'SwatchIcon';

export { SwatchIcon };
