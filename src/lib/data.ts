import { Icons, ToteBagPath, CrossbodyBagPath, ClutchBagPath } from "@/components/icons";
import type { SVGProps } from "react";

export interface DesignOption {
  id: string;
  name: string;
  icon?: keyof typeof Icons;
  imageUrl?: string;
  value?: string;
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

export const silhouettes: SilhouetteOption[] = [
  {
    id: 'tote',
    name: 'Tote Bag',
    icon: 'tote',
    path: ToteBagPath,
    stitchingPath: "M5,15 C10,5 30,5 35,15",
    hardwarePositions: {
      buckle: { top: '35%', left: '50%', transform: 'translateX(-50%)', scale: 2 },
      clasp: { top: '35%', left: '50%', transform: 'translateX(-50%)', scale: 2 },
      zipper: { top: '20%', left: '50%', transform: 'translateX(-50%)', scale: 2 },
    },
  },
  {
    id: 'crossbody',
    name: 'Crossbody Bag',
    icon: 'crossbody',
    path: CrossbodyBagPath,
    stitchingPath: "M5,15 C10,5 30,5 35,15",
    hardwarePositions: {
      buckle: { top: '45%', left: '50%', transform: 'translateX(-50%)', scale: 1.5 },
      clasp: { top: '45%', left: '50%', transform: 'translateX(-50%)', scale: 1.5 },
      zipper: { top: '25%', left: '50%', transform: 'translateX(-50%)', scale: 1.5 },
    },
  },
  {
    id: 'clutch',
    name: 'Clutch Bag',
    icon: 'clutch',
    path: ClutchBagPath,
    stitchingPath: "M5,15 C10,5 30,5 35,15",
    hardwarePositions: {
      buckle: { top: '50%', left: '50%', transform: 'translateX(-50%)', scale: 1.2 },
      clasp: { top: '50%', left: '50%', transform: 'translateX(-50%)', scale: 1.2 },
      zipper: { top: '30%', left: '50%', transform: 'translateX(-50%)', scale: 1.2 },
    },
  },
];

export const materials: MaterialOption[] = [
  { id: 'leather', name: 'Leather', imageUrl: '/img/leather.jpg' },
  { id: 'canvas', name: 'Canvas', imageUrl: '/img/canvas.jpg' },
  { id: 'suede', name: 'Suede', imageUrl: '/img/suede.jpg' },
];

export const hardware: HardwareOption[] = [
  { id: 'buckle', name: 'Buckle', icon: 'buckle' },
  { id: 'zipper', name: 'Zipper', icon: 'zipper' },
  { id: 'clasp', name: 'Clasp', icon: 'clasp' },
];

export const hardwareColors: DesignOption[] = [
  { id: 'gold', name: 'Gold', value: '#FFD700' },
  { id: 'silver', name: 'Silver', value: '#C0C0C0' },
  { id: 'bronze', name: 'Bronze', value: '#CD7F32' },
];

export const stitching: StitchingOption[] = [
  { id: 'straight', name: 'Straight', icon: 'straight', color: 'black' },
  { id: 'zigzag', name: 'Zigzag', icon: 'zigzag', color: 'black' },
  { id: 'cross', name: 'Cross', icon: 'cross', color: 'black' },
];

export const stitchingColors: DesignOption[] = [
  { id: 'white', name: 'White', value: '#FFFFFF' },
  { id: 'black', name: 'Black', value: '#000000' },
  { id: 'brown', name: 'Brown', value: '#A52A2A' },
];

export type DesignState = {
  silhouette: SilhouetteOption;
  material: MaterialOption;
  hardware: HardwareOption;
  hardwareColor: DesignOption;
  stitching: StitchingOption;
  stitchingColor: DesignOption;
};
