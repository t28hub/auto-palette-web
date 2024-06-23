import Link from 'next/link';
import type { FC } from 'react';
import { ButtonLink } from '@/components/navigation';
import { GitHubIcon } from '@/components/icons';

/**
 * The header component that displays the site title and navigation links.
 */
const Header: FC = () => {
  return (
    <header className='container sticky top-0 left-0 right-0 z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-2xl border-b border-border/80'>
      <div className='flex flex-row items-center max-w-screen-lg mx-auto py-2'>
        <Link href='/'>
          <h1 className='flex-none text-base font-extrabold tracking-normal leading-none uppercase'>Auto Palette</h1>
        </Link>

        <div className='flex flex-row justify-end flex-1'>
          <ButtonLink href={'https://github.com/t28hub/auto-palette'} external>
            <GitHubIcon className='w-5 h-5' />
            <span className='sr-only'>GitHub</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
Header.displayName = 'Header';

export { Header };
