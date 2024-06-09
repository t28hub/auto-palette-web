import Link, { type LinkProps } from 'next/link';
import type { FC, ReactNode } from 'react';
import { Button } from '@/components/ui';

/**
 * The props for the `ButtonLink` component.
 */
interface ButtonLinkProps extends Omit<LinkProps, 'as'> {
  /**
   * The children of the component.
   */
  readonly children?: ReactNode;
  /**
   * Whether the link should open in a new tab.
   */
  readonly external?: boolean;
}

/**
 * The button link component that wraps a `Link` component in a `Button`.
 */
const ButtonLink: FC<ButtonLinkProps> = ({ external, href, ...rest }) => {
  return (
    <Button variant='ghost' asChild>
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      />
    </Button>
  );
};
ButtonLink.displayName = 'ButtonLink';

export { ButtonLink, type ButtonLinkProps };
