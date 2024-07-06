'use client';

import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { LaptopIcon, MoonIcon, SunIcon } from '@/components/icons';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui';

const ThemeButton: FC = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='focus-visible:ring-0'>
          <SunIcon
            className='w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
            strokeWidth={1.5}
          />
          <MoonIcon
            className='absolute w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            strokeWidth={1.5}
          />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-background/80 backdrop-blur-2xl'>
        <DropdownMenuItem className='p-2' onClick={() => setTheme('light')}>
          <SunIcon className='w-5 h-5 mr-2' strokeWidth={1.5} />
          <span className='font-normal'>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='p-2' onClick={() => setTheme('dark')}>
          <MoonIcon className='w-5 h-5 mr-2' strokeWidth={1.5} />
          <span className='font-normal'>Dark</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='p-2' onClick={() => setTheme('system')}>
          <LaptopIcon className='w-5 h-5 mr-2' strokeWidth={1.5} />
          <span className='font-normal'>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
ThemeButton.displayName = 'ThemeButton';

export { ThemeButton };
