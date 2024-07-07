import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { Footer, Header } from '@/components/layouts';
import { CodeIcon, CogIcon, PaletteIcon, PipetteIcon, SwatchIcon, WandIcon } from '@/components/icons';
import { Code } from '@/components/code';
import { DemoLayout } from '@/layouts';
import { Heading } from '@/components/typography';

export default function Home() {
  return (
    <>
      <Header />

      <main className='container flex min-h-screen flex-col items-center justify-between gap-4 py-24'>
        <DemoLayout />

        <section className='w-full min-w-screen-sm  max-w-screen-lg flex flex-col items-start justify-start mt-4'>
          <Heading as='h2' size='xl'>
            Example
          </Heading>
          <div className='w-full rounded-lg border-foreground bg-accent'>
            <Code language='rust'>
              {'use auto_palette::{ImageData, Palette};'}
              {''}
              {'fn main() {'}
              {'  // Load an image from the file.'}
              {'  let image_data = ImageData::from_path("path/to/image.png").unwrap();'}
              {''}
              {'  // Extract a palette from the image.'}
              {'  let palette = Palette::extract(&image).unwrap();'}
              {'  println!("Extracted {} swatches", palette.len();'}
              {''}
              {'  // Find the 6 most prominent colors in the palette.'}
              {'  let swatches = palette.find_swatches(6, );'}
              {'  for swatch in swatches {'}
              {'    println!("Color: {}", swatch.color().to_hex_string());'}
              {'    println!("Position: {:?}", swatch.position());'}
              {'    println!("Population: {}", swatch.population());'}
              {'    println!("Ratio: {}", swatch.ratio());'}
              {'  }'}
              {'}'}
            </Code>
          </div>
        </section>

        <section className='w-full min-w-screen-sm max-w-screen-lg flex flex-col items-start justify-start mt-4'>
          <Heading as='h2' size='xl'>
            Installation
          </Heading>
          <div className='w-full rounded-lg border-foreground bg-accent'>
            <Code language='toml'>
              {'[dependencies]'}
              {'auto-palette = "0.4.0"'}
            </Code>
          </div>
        </section>

        <section className='w-full min-w-screen-sm max-w-screen-lg flex flex-col items-start justify-start mt-4'>
          <Heading as='h2' size='xl'>
            Features
          </Heading>
          <div className='w-full h-fit grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-4 items-stretch'>
            <Card className='flex-grow'>
              <CardHeader>
                <WandIcon className='w-5 h-5 stroke-foreground' strokeWidth={1.5} />
                <CardTitle>Automatic Palette Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-balance text-sm text-muted-foreground'>
                  Automatically extract prominent color palettes from images to streamline your design process with
                  ease.
                </p>
              </CardContent>
            </Card>
            <Card className='flex-grow'>
              <CardHeader>
                <PipetteIcon className='w-5 h-5 stroke-foreground' strokeWidth={1.5} />
                <CardTitle>Detailed Color Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-balance text-sm text-foreground'>
                  Provide detailed color data including color code, position, population, and ratio of each swatch.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CogIcon className='w-5 h-5 stroke-foreground' strokeWidth={1.5} />
                <CardTitle>Multiple Algorithms Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-balance text-sm text-foreground'>
                  Support multiple color extraction algorithms including DBSCAN, DBSCAN++, and K-means++.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PaletteIcon className='w-5 h-5 stroke-foreground' strokeWidth={1.5} />
                <CardTitle>Theme-Based Color Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-balance text-sm text-foreground'>
                  Automatically select colors based on the specified theme including colorful, vivid, light and dark,
                  and more.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <SwatchIcon className='w-5 h-5 stroke-foreground' strokeWidth={1.5} />
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
                <CodeIcon className='w-5 h-5 stroke-foreground' strokeWidth={1.5} />
                <CardTitle>Multiple Languages Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-balance text-sm text-muted-foreground'>
                  Available as a Rust library, WebAssembly, and CLI. Use it in your favorite programming language.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer license='MIT' copyrightHolder='Tatsuya Maki' />
    </>
  );
}
