import { LucidePipette } from 'lucide-react';
import { forwardRef } from 'react';
import type { IconProps } from './types';

/**
 * The pipette icon component.
 */
const PipetteIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <LucidePipette ref={ref} {...props} />;
});
PipetteIcon.displayName = 'PipetteIcon';

export { PipetteIcon };
