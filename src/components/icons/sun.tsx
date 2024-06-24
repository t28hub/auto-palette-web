import { LucideSun } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from '@/components/icons/types';

/**
 * The sun icon component.
 */
const SunIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideSun ref={ref} {...props} />;
});
SunIcon.displayName = 'SunIcon';

export { SunIcon };
