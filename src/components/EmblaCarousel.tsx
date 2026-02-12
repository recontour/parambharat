'use client';

import * as React from "react"
import {
  silhouettes,
  materials,
  hardware,
  hardwareColors,
  stitching,
  stitchingColors,
  type DesignState,
} from '@/lib/data';
import { Configurator } from "./configurator"
import { BagPreview } from "./bag-preview"
import { Separator } from "@/components/ui/separator"

export function EmblaCarousel() {
  const [designState, setDesignState] = React.useState<DesignState>({
    silhouette: silhouettes[0],
    material: materials[0],
    hardware: hardware[0],
    hardwareColor: hardwareColors[1],
    stitching: stitching[0],
    stitchingColor: stitchingColors[0],
  });

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold font-headline text-white">Customize Your Handbag</h3>
        <p className="text-white/80">Select the materials, colors, and hardware to create your unique design.</p>
        <Separator className="bg-white/20" />
        <Configurator
          designState={designState}
          setDesignState={setDesignState}
        />
      </div>
      <div className="sticky top-24">
        <BagPreview design={designState} />
      </div>
    </div>
  )
}
