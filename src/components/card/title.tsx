import type { FC, ReactNode } from 'react';
import { cn } from '@/utils';
import { Heading } from '@/components/typography';

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
  return (
    <Heading as='h3' size='lg' className={className}>
      {children}
    </Heading>
  );
};
CardTitle.displayName = 'CardTitle';

export { CardTitle, type CardTitleProps };
