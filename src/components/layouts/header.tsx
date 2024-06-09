import Link from 'next/link';
import type { FC } from 'react';
import { ButtonLink } from '@/components/navigation';
import { GitHub } from '@/components/icons';

/**
 * The header component that displays the site title and navigation links.
 */
const Header: FC = () => {
  return (
    <header className='sticky top-0 left-0 right-0 w-full z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-2xl border-b border-border'>
      <div className='flex flex-row items-center min-w-screen-sm max-w-screen-lg mx-auto py-2'>
        <Link href='/'>
          <h1 className='flex-none text-base font-bold tracking-normal'>Auto Palette</h1>
        </Link>

        <div className='flex flex-row justify-end flex-1'>
          <ButtonLink href={'https://github.com/t28hub/auto-palette'} external>
            <GitHub className='w-5 h-5' />
            <span className='sr-only'>GitHub</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
Header.displayName = 'Header';

export { Header };
