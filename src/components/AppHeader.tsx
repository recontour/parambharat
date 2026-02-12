import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-transparent">
      
      <nav className="hidden md:flex items-center gap-4">
        <a href="#portfolio">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">Portfolio</Button>
        </a>
        <a href="#designer">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">Designer</Button>
        </a>
        <a href="#contact">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">Contact</Button>
        </a>
      </nav>
      <Button className="md:hidden" variant="ghost" size="icon">
        {/* You can add a menu icon here for mobile */}
      </Button>
    </header>
  );
}
