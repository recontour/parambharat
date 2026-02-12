import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { AppHeader } from '@/components/header';
import { AppFooter } from '@/components/footer';
import { Configurator } from '@/components/configurator';

function HeroSection() {
  return (
    <section className="w-full py-10 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Image
          src="/logo.png"
          alt="Param Bharat Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tighter mb-4 flex flex-col items-center">
          <span className="font-param text-black">PARAM</span>
          <span className="font-bharat text-black">Bharat</span>
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl lg:text-2xl mb-8 font-body">
          Where your vision of luxury becomes a reality. Craft a handbag that is exclusively yours, from silhouette to the finest stitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#designer">
                <Button size="lg">Start Designing</Button>
            </a>
            <a href="#portfolio">
                <Button size="lg" variant="outline">
                    Explore The Gallery
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const portfolioImages = [
    { id: 'bag1', imageUrl: '/bag1.jpg', description: 'Yellow Messenger Bag' },
    { id: 'bag2', imageUrl: '/bag2.jpg', description: 'Close up of bag texture' },
    { id: 'bag3', imageUrl: '/bag3.jpg', description: 'Bag with strap detail' },
  ];

  return (
    <section id="portfolio" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Inspirations</h2>
          <p className="text-muted-foreground mt-2 md:text-lg">A curated gallery of our finest creations.</p>
        </div>
        <div className="masonry">
          {portfolioImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="masonry-item relative group overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-headline text-3xl">{image.description}</DialogTitle>
                  <DialogDescription className="font-body pt-2">
                    This design features a unique blend of classic form and modern materials, showcasing the potential of our customization options.
                  </DialogDescription>
                </DialogHeader>
                <div className="relative mt-4 aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                    />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignSection() {
    return (
        <section id="designer" className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">The Designer's Table</h2>
                    <p className="text-muted-foreground mt-2 md:text-lg">Your personal journey in bag creation begins here.</p>
                </div>
                <Card className="shadow-xl">
                    <CardContent className="p-4 md:p-8 lg:p-12">
                        <Configurator />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <Separator />
        <PortfolioSection />
        {/* <Separator /> */}
        {/* <DesignSection /> */}
      </main>
      <AppFooter />
    </div>
  );
}
