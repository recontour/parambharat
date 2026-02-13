import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b border-white/20 bg-black/30 px-4 md:px-6 z-50 backdrop-blur-sm">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="font-roboto-flex font-normal text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500"
        >
          <span className="font-param">PARAM</span> <span className="font-bharat">Bharat</span>
        </Link>
        <Link
          href="#portfolio"
          className="font-roboto-flex rounded-md bg-white/10 backdrop-blur-lg px-4 py-2"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Portfolio
          </span>
        </Link>
        <Link
          href="#designer"
          className="font-roboto-flex rounded-md bg-white/10 backdrop-blur-lg px-4 py-2"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
            Designer
          </span>
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
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500"><span className="font-param">PARAM</span> <span className="font-bharat">Bharat</span></span>
            </Link>
            <Link href="#portfolio" className="font-roboto-flex bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
              Portfolio
            </Link>
            <Link href="#designer" className="font-roboto-flex bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
              Designer
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <a href="#designer">
            <Button size="lg" className="font-roboto-flex bg-white/10 backdrop-blur-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                    Start Designing
                </span>
            </Button>
        </a>
      </div>
    </header>
  );
}
