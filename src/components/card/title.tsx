import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';

/**
 * The card title component props.
 */
interface CardTitleProps {
  /**
   * The additional class name.
   */
  readonly className?: string;

  /**
   * The children nodes.
   */
  readonly children: ReactNode;
}

/**
 * The CardTitle component that displays the card title.
 *
 * @param props The card title component props.
 */
const CardTitle: FC<CardTitleProps> = ({ className, children }) => {
  return <h3 className={cn('text-lg font-bold tracking-normal', className)}>{children}</h3>;
};
CardTitle.displayName = 'CardTitle';

export { CardTitle, type CardTitleProps };
