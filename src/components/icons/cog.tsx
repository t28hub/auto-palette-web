import { LucideCog } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The cog icon component.
 */
const CogIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideCog ref={ref} {...props} />;
});
CogIcon.displayName = 'CogIcon';

export { CogIcon };
