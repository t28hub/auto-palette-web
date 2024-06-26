import type { FC } from 'react';

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
        <p className='font-medium text-sm tracking-normal leading-normal text-muted-foreground'>
          Released under the {license} License.
        </p>
        <p className='font-medium text-sm tracking-normal leading-normal text-muted-foreground'>
          &copy; {year} {copyrightHolder}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';

export { Footer };
