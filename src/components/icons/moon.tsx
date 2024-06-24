import { LucideMoon } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from '@/components/icons/types';

/**
 * The moon icon component.
 */
const MoonIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideMoon ref={ref} {...props} />;
});
MoonIcon.displayName = 'MoonIcon';

export { MoonIcon };
