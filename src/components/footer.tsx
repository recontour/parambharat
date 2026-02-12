import { Separator } from "@/components/ui/separator";

export function AppFooter() {
    return (
        <footer className="bg-background">
            <Separator />
            <div className="container mx-auto py-6 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-sm text-muted-foreground font-body">
                        &copy; {new Date().getFullYear()} <span className="font-param text-black">PARAM</span> <span className="font-bharat text-black">Bharat</span>. All rights reserved.
                    </p>
                    <p className="font-headline text-lg mt-1">
                        Crafted with Passion
                    </p>
                </div>
            </div>
        </footer>
    );
}
