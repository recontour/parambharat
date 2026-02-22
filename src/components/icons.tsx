import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export const Icons = {
    tote: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9C5 5.5 5.5 3 9.5 3C13.5 3 14 5.5 14 9M18.5 21H2.5L4 9H17L18.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    ),
    crossbody: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.48 13.0333L21 8L3 8L4.44444 13.0333C4.77317 14.0531 5.67932 14.75 6.7451 14.75H17.2549C18.3207 14.75 19.2268 14.0531 19.5556 13.0333H19.48Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M21 8H3C3 8 3.5 6.5 4 5C4.5 3.5 6.5 2 8.5 2C10.5 2 11 3.5 11.5 5C12 6.5 12 8 12 8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 8C12 8 12 6.5 12.5 5C13 3.5 15 2 17 2C19 2 19.5 3.5 20 5C20.5 6.5 21 8 21 8" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M18.5 21H5.5L6.7451 14.75H17.2549L18.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    ),
    clutch: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 17.5V7.43362C2 6.84506 2.45524 6.36869 3.03398 6.27926L20.034 3.42211C20.654 3.32559 21.25 3.84473 21.25 4.47647V17.5C21.25 18.3284 20.5784 19 19.75 19H3.5C2.67157 19 2 18.3284 2 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M21.25 8.5L2 12.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    ),
    buckle: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="10" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 10V8M12 16V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    ),
    clasp: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 9V4M12 20V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    ),
    zipper: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.5L14 4.5M10 7.5L14 7.5M10 10.5L14 10.5M10 13.5L14 13.5M10 16.5L14 16.5M10 19.5L14 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9 3H15C15.5523 3 16 3.44772 16 4V20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20V4C8 3.44772 8.44772 3 9 3Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    ),
    straight: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
        </svg>
    ),
    cross: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    zigzag: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L8 8L12 12L16 8L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    indianRupee: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4H18M6 8H18M14.5 12C14.5 12 13 16 10 16H6M6 12C9 12 12.5 12 14.5 12ZM14.5 12C17.5 12 19 10 19 8C19 6 17.5 4 14.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16L18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    gpay: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.14 20.35c0-.85-.07-1.68-.2-2.48H20v4.69h6.25c-.27 1.45-1.08 2.68-2.31 3.51v2.91h3.74c2.19-2.01 3.46-4.97 3.46-8.63z" fill="#4285F4"/>
            <path d="M20 31.7c3.16 0 5.81-1.05 7.74-2.83l-3.74-2.91c-1.04.7-2.37 1.11-4 1.11-3.08 0-5.69-2.08-6.62-4.88H9.52v3.01c1.94 3.86 5.92 6.5 10.48 6.5z" fill="#34A853"/>
            <path d="M13.38 22.19c-.24-.7-.38-1.45-.38-2.23s.14-1.53.38-2.23v-3.01H9.52C8.68 16.48 8.2 18.19 8.2 20s.48 3.52 1.32 5.27l3.86-3.08z" fill="#FBBC05"/>
            <path d="M20 12.02c1.72 0 3.26.59 4.47 1.76l3.35-3.35C25.79 8.63 23.14 7.4 20 7.4c-4.56 0-8.54 2.64-10.48 6.5l3.86 3.01c.93-2.8 3.54-4.89 6.62-4.89z" fill="#EA4335"/>
        </svg>
    ),
    phonepe: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="#5f259f"/>
            <path d="M14.5 8.5C14.5 7.67157 13.8284 7 13 7H9V17H11V14H13C13.8284 14 14.5 13.3284 14.5 12.5V8.5ZM12.5 12H11V9H12.5V12Z" fill="white"/>
        </svg>
    ),
    paytm: (props: SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#00baf2"/>
            <path d="M5 7H8.5C9.32843 7 10 7.67157 10 8.5V10.5C10 11.3284 9.32843 12 8.5 12H7V17H5V7ZM8 10V9H7V10H8Z" fill="white"/>
            <path d="M11 7H13L15 12L17 7H19L16 17H14L11 7Z" fill="white"/>
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
    if (!IconComponent) {
        return null;
    }
    return <IconComponent {...props} />;
}
