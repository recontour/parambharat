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
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PortfolioItemProps {
  image: {
    id: string;
    imageUrls: string[];
    description: string;
    title: string;
    price: number;
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
    display: 'inline-block',
    paddingBottom: '0.2em', 
    marginBottom: '-0.2em'
  };

  // Base UPI parameters
  const pa = "indnaturals@okaxis";
  const pn = "ParamBharat";
  const am = image.price.toString();
  const cu = "INR";
  const tn = `Order_${image.id}`;

  // Standard UPI Intent (Most reliable for GPay on Android)
  const upiIntent = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}`;
  
  // Specific app package intents for Android/iOS deep linking
  const gpayLink = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}&mode=02&purpose=00&orgid=159761`;
  const phonepeLink = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}`;
  const paytmLink = `upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}`;

  return (
    <div className="masonry-item w-full">
      <Card className="rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm group">
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

            <div className="hidden md:block">
              <CarouselPrevious className="left-2 bg-black/50 border-none text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="right-2 bg-black/50 border-none text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Carousel>
        </CardContent>
      </Card>
      
      <div className="mt-4 px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-headline font-bold">
            <span style={texturedTextStyle}>{image.title}</span>
          </h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline" className="rounded-full border-yellow-400/50 bg-transparent active:scale-90 transition-transform">
                <Icons.indianRupee className="w-5 h-5 text-yellow-400" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[92vw] max-w-[360px] rounded-[2.5rem] border-white/10 bg-zinc-900/95 backdrop-blur-2xl text-white p-8 outline-none shadow-2xl">
              <DialogHeader className="mb-8">
                <DialogTitle className="text-3xl font-headline text-center">
                  <span style={texturedTextStyle}>Checkout</span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Choose your preferred payment method to complete the purchase of {image.title} for ₹{image.price}.
                </DialogDescription>
                <div className="flex flex-col items-center mt-4">
                  <span className="text-zinc-500 font-body text-xs uppercase tracking-[0.2em]">Payable Amount</span>
                  <span className="text-4xl font-headline font-bold text-yellow-400 mt-1">₹{image.price}</span>
                </div>
              </DialogHeader>
              
              <div className="grid grid-cols-1 gap-4">
                <Button 
                  asChild
                  className="h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-body text-lg flex items-center justify-between px-6 active:scale-[0.98] transition-all"
                >
                  <a href={gpayLink}>
                    <span>Google Pay</span>
                    <Icons.gpay className="w-8 h-8" />
                  </a>
                </Button>

                <Button 
                   asChild
                   className="h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-body text-lg flex items-center justify-between px-6 active:scale-[0.98] transition-all"
                >
                  <a href={phonepeLink}>
                    <span>PhonePe</span>
                    <Icons.phonepe className="w-8 h-8" />
                  </a>
                </Button>

                <Button 
                  asChild
                   className="h-16 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-body text-lg flex items-center justify-between px-6 active:scale-[0.98] transition-all"
                >
                  <a href={paytmLink}>
                    <span>Paytm</span>
                    <Icons.paytm className="w-8 h-8" />
                  </a>
                </Button>
                
                <div className="relative my-4 flex items-center">
                  <div className="flex-grow border-t border-white/5"></div>
                  <span className="mx-4 text-[10px] text-zinc-600 uppercase tracking-widest font-body">Other UPI</span>
                  <div className="flex-grow border-t border-white/5"></div>
                </div>

                <Button 
                  asChild
                  variant="outline"
                  className="h-14 rounded-2xl border-white/5 bg-transparent text-zinc-400 font-body text-sm active:scale-[0.98] transition-all"
                >
                  <a href={upiIntent}>
                    Choose other UPI app
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
                <div className="h-[1px] w-4 bg-zinc-500" />
                <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-body">Premium Secure Checkout</span>
                <div className="h-[1px] w-4 bg-zinc-500" />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex items-stretch gap-3">
          <div className="w-0.5 rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 shrink-0" />
          <p className="text-2xl md:text-3xl font-allura text-left leading-normal">
            <span style={texturedTextStyle}>{image.description}</span>
          </p>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
            <span className="text-zinc-500 text-sm uppercase tracking-widest font-body">Price</span>
            <span className="text-2xl font-headline font-bold text-yellow-400">₹{image.price}</span>
        </div>
      </div>
    </div>
  )
}