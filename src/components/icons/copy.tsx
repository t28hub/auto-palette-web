import { LucideCode, LucideCopy } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The copy icon component.
 */
const CopyIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideCopy ref={ref} {...props} />;
});
CopyIcon.displayName = 'CopyIcon';

export { CopyIcon };
