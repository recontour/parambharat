import { Separator } from "@/components/ui/separator";

export function AppFooter() {
  return (
    <footer className="bg-transparent">
      <Separator className="bg-white/20" />
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-white/60">&copy; 2024 Param Bharat. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-sm text-white/60 hover:text-white">Terms of Service</a>
          <a href="#" className="text-sm text-white/60 hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
