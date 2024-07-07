import type { FC } from 'react';
import { Text } from '@/components/typography';

/**
 * The footer component props.
 */
interface FooterProps {
  /**
   * The license text.
   */
  readonly license: string;

  /**
   * The copyright holder.
   */
  readonly copyrightHolder: string;
}

/**
 * The footer component that displays the site footer.
 *
 * @param props The footer component props.
 */
const Footer: FC<FooterProps> = ({ license, copyrightHolder }) => {
  const year = new Date().getFullYear();

  return (
    <footer className='container border-t border-border/80'>
      <div className='flex flex-col items-center justify-center sm:flex-row sm:items-stretch sm:justify-between gap-4 max-w-screen-lg mx-auto py-10'>
        <Text size='sm' className='text-muted-foreground'>
          Released under the {license} License.
        </Text>
        <Text size='sm' className='text-muted-foreground'>
          &copy; {year} {copyrightHolder}. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';

export { Footer };
