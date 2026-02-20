'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious,
  CarouselNext,
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

  const texturedTextStyle = {
    backgroundImage: 'url(/texture.webp)',
    backgroundSize: 'cover',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block'
  };

  return (
    <div className="masonry-item w-full">
      <Card className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group">
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

            {/* Pagination Indicator Overlay */}
            {image.imageUrls.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
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

            {/* Navigation Arrows - Only visible on PC/Hover */}
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 bg-black/50 border-none text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="right-2 bg-black/50 border-none text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Carousel>
        </CardContent>
      </Card>
      
      <div className="mt-4 px-2">
        <h3 className="text-2xl font-bold mb-2 text-center">
          <span style={texturedTextStyle}>{image.title}</span>
        </h3>
        
        <div className="flex items-stretch gap-3">
          <div className="w-0.5 rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 shrink-0" />
          <p className="text-2xl md:text-3xl font-allura text-left leading-tight">
            <span style={texturedTextStyle}>{image.description}</span>
          </p>
        </div>
      </div>
    </div>
  )
}