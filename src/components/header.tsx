import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Package2 } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b border-white/20 bg-black/30 px-4 md:px-6 z-50 backdrop-blur-sm">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base font-headline"
        >
          <Package2 className="h-6 w-6 text-white" />
          <span className="sr-only">PARAM Bharat</span>
        </Link>
        <Link
          href="#"
          className="text-white transition-colors hover:text-white font-normal text-lg"
        >
          <span className="font-param">PARAM</span> <span className="font-bharat">Bharat</span>
        </Link>
        <Link
          href="#portfolio"
          className="text-gray-300 transition-colors hover:text-white"
        >
          Portfolio
        </Link>
        <Link
          href="#designer"
          className="text-gray-300 transition-colors hover:text-white"
        >
          Designer
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden bg-transparent border-gray-400 text-gray-400 hover:bg-white/10 hover:text-white">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black/80 backdrop-blur-lg border-r-white/20">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold text-white"
            >
              <Package2 className="h-6 w-6" />
              <span><span className="font-param">PARAM</span> <span className="font-bharat">Bharat</span></span>
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white">
              Portfolio
            </Link>
            <Link href="#designer" className="text-gray-300 hover:text-white">
              Designer
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button className="bg-white text-black hover:bg-gray-200">Start Designing</Button>
      </div>
    </header>
  );
}
