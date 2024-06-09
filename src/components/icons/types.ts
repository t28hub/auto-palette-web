import type { SVGAttributes } from 'react';

/**
 * The props for the `Icon` component.
 */
export interface IconProps extends SVGAttributes<SVGElement> {
  /**
   * The children of the component.
   */
  readonly children?: never;

  /**
   * The color of the icon.
   */
  readonly color?: string;
}
