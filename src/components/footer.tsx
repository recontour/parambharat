import { Separator } from "@/components/ui/separator";

export function AppFooter() {
    return (
        <footer className="bg-black/30 backdrop-blur-sm">
            <Separator className="bg-white/20"/>
            <div className="container mx-auto py-6 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-gray-300 font-body">
                        &copy; {new Date().getFullYear()} <span className="font-param">PARAM</span> <span className="font-bharat">Bharat</span>. All rights reserved.
                    </p>
                    <p className="font-headline text-lg mt-1 text-white">
                        Crafted with Passion
                    </p>
                </div>
            </div>
        </footer>
    );
}
