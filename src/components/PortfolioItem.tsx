'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';

interface PortfolioItemProps {
  image: {
    id: string;
    imageUrls: string[];
    description: string;
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
    <div className="masonry-item">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {image.imageUrls.map((url, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={url}
                    alt={image.description}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {image.imageUrls.length > 1 && (
              <>
                <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10" />
              </>
            )}
          </Carousel>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-2">
        {image.imageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full mx-1 ${index === selectedIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
      <p className="text-sm text-white/80 mt-2 text-center">{image.description}</p>
    </div>
  )
}