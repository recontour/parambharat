import { PlaceHolderImages } from "./placeholder-images";
import { Icons, ToteBagPath, CrossbodyBagPath, ClutchBagPath } from "@/components/icons";
import type { SVGProps } from "react";

export interface DesignOption {
  id: string;
  name: string;
  icon?: keyof typeof Icons;
  imageUrl?: string;
}

export interface SilhouetteOption extends DesignOption {
  path: (props: SVGProps<SVGPathElement>) => JSX.Element;
  stitchingPath: string;
  hardwarePositions: {
    [key: string]: {
      top: string;
      left: string;
      transform: string;
      scale: number;
    }
  }
}

export interface MaterialOption extends DesignOption {}
export interface HardwareOption extends DesignOption {}
export interface StitchingOption extends DesignOption {
  color: string;
}

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const silhouettes: SilhouetteOption[] = [
  { 
    id: 'tote', 
    name: 'Tote Bag', 
    icon: 'ToteBag',
    path: ToteBagPath,
    stitchingPath: 'M5 9C5 5.5 5.5 3 9.5 3C13.5 3 14 5.5 14 9M18.5 21H2.5L4 9H17L18.5 21Z',
    hardwarePositions: {
      buckle: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', scale: 1.5 },
      clasp: { top: '39%', left: '50%', transform: 'translate(-50%, -50%)', scale: 1.2 },
    }
  },
  { 
    id: 'crossbody', 
    name: 'Crossbody', 
    icon: 'CrossbodyBag',
    path: CrossbodyBagPath,
    stitchingPath: 'M19.48 13.0333L21 8L3 8L4.44444 13.0333C4.77317 14.0531 5.67932 14.75 6.7451 14.75H17.2549C18.3207 14.75 19.2268 14.0531 19.5556 13.0333H19.48ZM18.5 21H5.5L6.7451 14.75H17.2549L18.5 21Z',
    hardwarePositions: {
      buckle: { top: '65%', left: '50%', transform: 'translate(-50%, -50%)', scale: 1.2 },
      clasp: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', scale: 1 },
    }
  },
  { 
    id: 'clutch', 
    name: 'Clutch', 
    icon: 'ClutchBag',
    path: ClutchBagPath,
    stitchingPath: 'M2 17.5V7.43362C2 6.84506 2.45524 6.36869 3.03398 6.27926L20.034 3.42211C20.654 3.32559 21.25 3.84473 21.25 4.47647V17.5C21.25 18.3284 20.5784 19 19.75 19H3.5C2.67157 19 2 18.3284 2 17.5Z',
    hardwarePositions: {
      buckle: { top: '50%', left: '80%', transform: 'translate(-50%, -50%)', scale: 0.8 },
      clasp: { top: '25%', left: '50%', transform: 'translate(-50%, -50%)', scale: 0.9 },
    }
  },
];

export const materials: MaterialOption[] = [
  { id: 'black-leather', name: 'Black Leather', imageUrl: findImage('material-leather-black') },
  { id: 'brown-leather', name: 'Brown Leather', imageUrl: findImage('material-leather-brown') },
  { id: 'blue-suede', name: 'Blue Suede', imageUrl: findImage('material-suede-blue') },
  { id: 'pattern-fabric', name: 'Patterned Fabric', imageUrl: findImage('material-fabric-pattern') },
];

export const hardware: HardwareOption[] = [
  { id: 'buckle', name: 'Buckle', icon: 'HardwareBuckle' },
  { id: 'clasp', name: 'Clasp', icon: 'HardwareClasp' },
];

export const hardwareColors = [
    { name: 'Gold', value: '#FFD700' },
    { name: 'Silver', value: '#C0C0C0' },
    { name: 'Gunmetal', value: '#536267' },
];

export const stitching: StitchingOption[] = [
  { id: 'straight', name: 'Straight Stitch', icon: 'StitchStraight', color: 'hsl(0, 0%, 98%)' },
  { id: 'cross', name: 'Cross Stitch', icon: 'StitchCross', color: 'hsl(0, 0%, 98%)' },
];

export const stitchingColors = [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Black', value: '#000000' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Beige', value: '#F5F5DC' },
];

export type DesignState = {
    silhouette: SilhouetteOption | null;
    material: MaterialOption | null;
    hardware: HardwareOption | null;
    hardwareColor: typeof hardwareColors[0] | null;
    stitching: StitchingOption | null;
    stitchingColor: typeof stitchingColors[0] | null;
}
