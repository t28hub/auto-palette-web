import { LucideCode } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The code icon component.
 */
const CodeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucideCode ref={ref} {...props} />;
});
CodeIcon.displayName = 'CodeIcon';

export { CodeIcon };
