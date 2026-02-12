import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const Icons = {
    ToteBag: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9C5 5.5 5.5 3 9.5 3C13.5 3 14 5.5 14 9M18.5 21H2.5L4 9H17L18.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    ),
    CrossbodyBag: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.48 13.0333L21 8L3 8L4.44444 13.0333C4.77317 14.0531 5.67932 14.75 6.7451 14.75H17.2549C18.3207 14.75 19.2268 14.0531 19.5556 13.0333H19.48Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M21 8H3C3 8 3.5 6.5 4 5C4.5 3.5 6.5 2 8.5 2C10.5 2 11 3.5 11.5 5C12 6.5 12 8 12 8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 8C12 8 12 6.5 12.5 5C13 3.5 15 2 17 2C19 2 19.5 3.5 20 5C20.5 6.5 21 8 21 8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18.5 21H5.5L6.7451 14.75H17.2549L18.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    ),
    ClutchBag: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 17.5V7.43362C2 6.84506 2.45524 6.36869 3.03398 6.27926L20.034 3.42211C20.654 3.32559 21.25 3.84473 21.25 4.47647V17.5C21.25 18.3284 20.5784 19 19.75 19H3.5C2.67157 19 2 18.3284 2 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M21.25 8.5L2 12.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    ),
    HardwareBuckle: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="10" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 10V8M12 16V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    ),
    HardwareClasp: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 9V4M12 20V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    ),
    StitchStraight: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
        </svg>
    ),
    StitchCross: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
};

export const ToteBagPath = (props: SVGProps<SVGPathElement>) => (
    <path {...props} d="M5 9C5 5.5 5.5 3 9.5 3C13.5 3 14 5.5 14 9M18.5 21H2.5L4 9H17L18.5 21Z" />
);

export const CrossbodyBagPath = (props: SVGProps<SVGPathElement>) => (
    <path {...props} d="M19.48 13.0333L21 8L3 8L4.44444 13.0333C4.77317 14.0531 5.67932 14.75 6.7451 14.75H17.2549C18.3207 14.75 19.2268 14.0531 19.5556 13.0333H19.48ZM18.5 21H5.5L6.7451 14.75H17.2549L18.5 21Z" />
);

export const ClutchBagPath = (props: SVGProps<SVGPathElement>) => (
    <path {...props} d="M2 17.5V7.43362C2 6.84506 2.45524 6.36869 3.03398 6.27926L20.034 3.42211C20.654 3.32559 21.25 3.84473 21.25 4.47647V17.5C21.25 18.3284 20.5784 19 19.75 19H3.5C2.67157 19 2 18.3284 2 17.5Z" />
);

export function Icon({ name, ...props }: { name: keyof typeof Icons } & SVGProps<SVGSVGElement>) {
    const IconComponent = Icons[name];
    return <IconComponent {...props} />;
}
