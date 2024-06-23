import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Footer, Header } from '@/components/layouts';
import { CodeIcon, CogIcon, PaletteIcon, PipetteIcon, SwatchIcon, WandIcon } from '@/components/icons';
import { CodeBlock } from '@/components/code';

export default function Home() {
  return (
    <>
      <Header />

      <main className='container flex min-h-screen flex-col items-center justify-between gap-4 py-24'>
        <section className='w-full min-w-screen-sm  max-w-screen-lg flex items-center justify-start'>
          <div className='w-full rounded-lg border-foreground bg-accent'>
            <CodeBlock language={'toml'}>
              {'[dependencies]'}
              {'auto-palette = "0.4.0"'}
            </CodeBlock>
          </div>
        </section>

        <section className='w-full max-w-screen-lg grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 items-stretch'>
          <Card className='flex-grow'>
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
          <Card className='flex-grow'>
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
