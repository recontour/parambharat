import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Package2 } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base font-headline"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Atelier Luxe</span>
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground font-bold text-lg font-headline"
        >
          Atelier Luxe
        </Link>
        <Link
          href="#portfolio"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Portfolio
        </Link>
        <Link
          href="#designer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Designer
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold font-headline"
            >
              <Package2 className="h-6 w-6" />
              <span >Atelier Luxe</span>
            </Link>
            <Link href="#portfolio" className="text-muted-foreground hover:text-foreground">
              Portfolio
            </Link>
            <Link href="#designer" className="text-muted-foreground hover:text-foreground">
              Designer
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button>Start Designing</Button>
      </div>
    </header>
  );
}
