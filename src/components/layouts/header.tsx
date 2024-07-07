import Link from 'next/link';
import type { FC } from 'react';
import { ButtonLink } from '@/components/navigation';
import { GitHubIcon } from '@/components/icons';
import { ThemeButton } from '@/components/buttons';
import { Heading } from '@/components/typography';

/**
 * The header component that displays the site title and navigation links.
 */
const Header: FC = () => {
  return (
    <header className='container sticky top-0 left-0 right-0 z-50 bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-2xl border-b border-border/80'>
      <div className='flex flex-row items-center max-w-screen-lg mx-auto py-2'>
        <Link href='/'>
          <Heading as='h1' className='flex-none font-extrabold leading-none uppercase'>
            Auto Palette
          </Heading>
        </Link>

        <div className='flex flex-row justify-end flex-1'>
          <ButtonLink href={'https://github.com/t28hub/auto-palette'} external>
            <GitHubIcon className='w-5 h-5' />
            <span className='sr-only'>GitHub</span>
          </ButtonLink>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
Header.displayName = 'Header';

export { Header };
