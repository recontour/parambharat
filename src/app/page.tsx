
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import { PortfolioItem } from "@/components/PortfolioItem";
import { portfolio } from "@/lib/data";
import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh]">
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-10">
        <Image
          src="/logo (2).png"
          alt="Param Bharat Logo"
          width={200}
          height={200}
          priority
          className="rounded-xl"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 z-10 text-center" style={{ top: 'calc(7rem + 200px + 2.5rem)' }}>
        <h2 className="text-xl font-roboto-flex bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">Crafted with Passion</h2>
      </div>
      <div className="absolute inset-x-0 flex items-center justify-center" style={{ top: 'calc(7rem + 200px + 5.5rem)', bottom: 0 }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="max-w-3xl mx-auto text-2xl mb-8 font-allura bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                Where your vision of luxury becomes a reality. Craft a handbag that is exclusively yours, from silhouette to the finest stitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#designer">
                    <Button size="lg" className="font-roboto-flex bg-white/10 backdrop-blur-lg">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                            Start Designing
                        </span>
                    </Button>
                </a>
                <a href="#portfolio">
                    <Button size="lg" className="font-roboto-flex bg-white/10 backdrop-blur-lg">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                            Explore The Gallery
                        </span>
                    </Button>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-2 font-headline text-white">Our Masterpieces</h2>
        <p className="text-center text-white/80 mb-8">Each handbag in our portfolio is a testament to our commitment to quality and craftsmanship.</p>
        <div className="masonry">
          {portfolio.map((item) => (
            <PortfolioItem key={item.id} image={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignerSection() {
  return (
    <section id="designer" className="py-12 md:py-24 bg-black/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline text-white">Design Your Dream Handbag</h2>
        <EmblaCarousel />
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline text-white">Get in Touch</h2>
        <p className="text-lg text-white/80 mb-8">Have a question or want to start a custom design? Contact us!</p>
        <div className="flex justify-center gap-8">
          <a href="tel:+919876543210" className="flex flex-col items-center gap-2 text-white hover:text-yellow-400">
            <Phone size={24} />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@parambharat.com" className="flex flex-col items-center gap-2 text-white hover:text-yellow-400">
            <Mail size={24} />
            <span>info@parambharat.com</span>
          </a>
          <a href="https://instagram.com/parambharat" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white hover:text-yellow-400">
            <Instagram size={24} />
            <span>@parambharat</span>
          </a>
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <AppHeader />
      <main className="flex-1 bg-transparent">
        <HeroSection />
        <Separator className="bg-white/20" />
        <PortfolioSection />
        {/* <Separator className="bg-white/20" /> */}
        {/* <DesignerSection /> */}
        {/* <Separator className="bg-white/20" /> */}
        {/* <ContactSection /> */}
      </main>
      <AppFooter />
      <a
        href="https://wa.me/917249337622"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-20"
      >
        <Button
          size="icon"
          className="bg-transparent text-yellow-400 hover:bg-transparent"
        >
          <FaWhatsapp size={40} />
        </Button>
      </a>
    </div>
  );
}
