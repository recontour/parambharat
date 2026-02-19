import { Separator } from "@/components/ui/separator";

export function AppFooter() {
    return (
        <footer className="bg-black/30 backdrop-blur-sm">
            <Separator className="bg-white/20"/>
            <div className="container mx-auto py-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Branding: PARAM Bharat in Cursive/Branding Style */}
                    <div className="text-2xl md:text-3xl font-medium mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 font-param">PARAM</span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 font-bharat">Bharat</span>
                    </div>

                    {/* Tagline: Crafted with Passion in Hero Style */}
                    <p className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 mb-6">
                        Crafted with Passion
                    </p>

                    {/* Copyright and small text */}
                    <p className="text-xs text-white/40 font-body">
                        &copy; {new Date().getFullYear()} PARAM Bharat. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
