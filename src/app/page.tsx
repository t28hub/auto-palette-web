import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Footer, Header } from '@/components/layouts';
import { CodeIcon, CogIcon, PaletteIcon, PipetteIcon, SwatchIcon, WandIcon } from '@/components/icons';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
          <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            Get started by editing&nbsp;
            <code className='font-mono font-bold'>src/app/page.tsx</code>
          </p>
          <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
            <a
              className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              By <Image src='/vercel.svg' alt='Vercel Logo' className='dark:invert' width={100} height={24} priority />
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </div>

        <section className='w-full max-w-screen-lg grid items-start grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
          <Card>
            <CardHeader>
              <WandIcon className='w-5 h-5 stroke-muted-foreground' strokeWidth={1.5} />
              <CardTitle>Automatic Palette Extraction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-balance text-sm text-muted-foreground'>
                Automatically extract prominent color palettes from images to streamline your design process with ease.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <PipetteIcon className='w-5 h-5 stroke-muted-foreground' strokeWidth={1.5} />
              <CardTitle>Detailed Color Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-balance text-sm text-muted-foreground'>
                Provide detailed color data including color code, position, population, and ratio of each swatch.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CogIcon className='w-5 h-5 stroke-muted-foreground' strokeWidth={1.5} />
              <CardTitle>Multiple Algorithms Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-balance text-sm text-muted-foreground'>
                Support multiple color extraction algorithms including DBSCAN, DBSCAN++, and K-means++.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <PaletteIcon className='w-5 h-5 stroke-muted-foreground' strokeWidth={1.5} />
              <CardTitle>Theme-Based Color Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-balance text-sm text-muted-foreground'>
                Automatically select colors based on the specified theme including colorful, vivid, light and dark, and
                more.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <SwatchIcon className='w-5 h-5 stroke-muted-foreground' strokeWidth={1.5} />
              <CardTitle>Multiple Color Spaces Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-balance text-sm text-muted-foreground'>
                Support multiple color space conversion including RGB, HSL, CIE L*a*b* and more. Enable you to use the
                color data in your favorite color space.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CodeIcon className='w-5 h-5 stroke-muted-foreground' strokeWidth={1.5} />
              <CardTitle>Multiple Languages Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-balance text-sm text-muted-foreground'>
                Available as a Rust library, WebAssembly, and CLI. Use it in your favorite programming language.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer license='MIT' copyrightHolder='Tatsuya Maki' />
    </>
  );
}
