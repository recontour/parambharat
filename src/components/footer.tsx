import { Separator } from "@/components/ui/separator";

export function AppFooter() {
    const texturedTextStyle = {
        backgroundImage: 'url(/texture.webp)',
        backgroundSize: 'cover',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <footer className="bg-black/30 backdrop-blur-sm">
            <Separator className="bg-white/20"/>
            <div className="container mx-auto py-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Branding: PARAM Bharat in Cursive/Branding Style */}
                    <div className="text-2xl md:text-3xl font-medium mb-2">
                        <span className="font-param" style={texturedTextStyle}>PARAM</span>{" "}
                        <span className="font-bharat" style={texturedTextStyle}>Bharat</span>
                    </div>

                    {/* Tagline: Crafted with Passion in Hero Style */}
                    <p className="text-lg md:text-xl font-bold mb-6">
                        <span style={texturedTextStyle}>Crafted with Passion</span>
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
