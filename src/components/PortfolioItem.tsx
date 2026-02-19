'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi
} from '@/components/ui/carousel';

interface PortfolioItemProps {
  image: {
    id: string;
    imageUrls: string[];
    description: string;
    title: string;
  };
}

export function PortfolioItem({ image }: PortfolioItemProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="masonry-item w-full">
      <Card className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm">
        <CardContent className="p-0">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {image.imageUrls.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
                    <Image
                      src={url}
                      alt={`${image.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>
      
      {/* Pagination Indicator */}
      {image.imageUrls.length > 1 && (
        <div className="flex justify-center mt-3 gap-2">
          {image.imageUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === selectedIndex ? 'w-6 bg-yellow-400' : 'w-2 bg-white/30'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-4 px-2">
        <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">{image.title}</h3>
        <p className="text-2xl font-allura bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500/80">{image.description}</p>
      </div>
    </div>
  )
}