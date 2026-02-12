import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Param Bharat | Custom Luxury Handbags",
  description: "Where your vision of luxury becomes a reality. Craft a handbag that is exclusively yours, from silhouette to the finest stitch.",
  openGraph: {
    title: "Param Bharat | Custom Luxury Handbags",
    description: "Where your vision of luxury becomes a reality. Craft a handbag that is exclusively yours, from silhouette to the finest stitch.",
    siteName: 'Param Bharat',
    images: [
      {
        url: '/logo (2).png',
        width: 200,
        height: 200,
        alt: 'Param Bharat Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Param Bharat | Custom Luxury Handbags",
    description: "Where your vision of luxury becomes a reality. Craft a handbag that is exclusively yours, from silhouette to the finest stitch.",
    images: ['/logo (2).png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Allura&family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&family=Monoton&family=Satisfy&family=Pinyon+Script&family=Quintessential&family=Alumni+Sans+Pinstripe&family=Roboto+Flex:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
