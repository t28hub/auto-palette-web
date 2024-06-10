import { forwardRef } from 'react';
import { LucideWandSparkles } from 'lucide-react';
import type { IconProps } from './types';

/**
 * The wand icon component.
 */
const WandIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideWandSparkles ref={ref} {...props} />;
});
WandIcon.displayName = 'WandIcon';

export { WandIcon };
