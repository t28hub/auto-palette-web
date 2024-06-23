import { LucideLaptop2, LucideMoon } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from '@/components/icons/types';

/**
 * The laptop icon component.
 */
const LaptopIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideLaptop2 ref={ref} {...props} />;
});
LaptopIcon.displayName = 'LaptopIcon';

export { LaptopIcon };
