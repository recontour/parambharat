"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AppFooter } from "@/components/footer";
import { AppHeader } from "@/components/header";
import { EmblaCarousel } from "@/components/EmblaCarousel";
import { PortfolioItem } from "@/components/PortfolioItem";
import { portfolio } from "@/lib/data";
import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center p-4 md:p-8 overflow-hidden">
      {/* Top Section: Logo centered */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ y: y1, opacity }}
        className="mt-4 md:mt-8 mb-6 md:mb-8 z-10"
      >
        <Image
          src="/logo (2).png"
          alt="Param Bharat Logo"
          width={130}
          height={130}
          priority
          className="rounded-xl shadow-2xl w-auto h-auto"
        />
      </motion.div>

      {/* Buttons Row centered */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-row gap-4 w-full md:w-auto mb-6 md:mb-8 justify-center z-10"
      >
        <a href="#portfolio" className="flex-1 sm:flex-none">
          <Button size="sm" className="bg-white/10 backdrop-blur-lg w-full h-12 md:h-14 px-4 md:px-8 border border-white/20">
            <span className="font-allura text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 whitespace-nowrap">
              Explore Gallery
            </span>
          </Button>
        </a>
        <a href="#designer" className="flex-1 sm:flex-none">
          <Button size="sm" className="bg-white/10 backdrop-blur-lg w-full h-12 md:h-14 px-4 md:px-8 border border-white/20">
            <span className="font-allura text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 whitespace-nowrap">
              Start Designing
            </span>
          </Button>
        </a>
      </motion.div>

      {/* Text Section: Tagline and Description */}
      <motion.div 
        style={{ y: y2 }}
        className="w-full max-w-4xl flex flex-col items-center gap-6 md:gap-8 mb-12 z-10"
      >
        {/* Tagline centered */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 text-center"
        >
          Crafted with Passion
        </motion.h2>
        
        {/* Description with vertical line next to it only */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-stretch gap-4 md:gap-8 max-w-4xl"
        >
          <div className="w-1 md:w-2 rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 shrink-0" />
          <p className="text-4xl md:text-7xl font-allura bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500/80 leading-tight text-left py-4">
            Where your vision of luxury becomes a reality. Craft a handbag that is exclusively yours, from silhouette to the finest stitch.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 md:py-24 bg-white/10 backdrop-blur-lg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-8 font-headline bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500"
        >
          Our Masterpieces
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-stretch gap-4 md:gap-6 max-w-3xl mx-auto mb-12"
        >
          <div className="w-1 rounded-full bg-gradient-to-b from-yellow-400 to-amber-500 shrink-0" />
          <p className="text-left text-2xl font-allura bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Each handbag in our portfolio is a testament to our commitment to quality and craftsmanship.
          </p>
        </motion.div>

        <div className="masonry">
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <PortfolioItem image={item} />
            </motion.div>
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
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ y: yBg, scale: scaleBg }}
          className="absolute inset-0"
        >
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </motion.div>
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
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
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
      </motion.a>
    </div>
  );
}
