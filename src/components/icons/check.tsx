import { LucideCheck, LucideCode, LucideCopy } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The check icon component.
 */
const CheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideCheck ref={ref} {...props} />;
});
CheckIcon.displayName = 'CheckIcon';

export { CheckIcon };
