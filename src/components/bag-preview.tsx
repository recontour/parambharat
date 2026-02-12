'use client';

import { cn } from "@/lib/utils";
import type { DesignState, SilhouetteOption } from "@/lib/data";
import { Icon } from "./icons";
import { useId } from "react";

interface BagPreviewProps {
  design: DesignState;
  className?: string;
}

export function BagPreview({ design, className }: BagPreviewProps) {
  const { silhouette, material, hardware, hardwareColor, stitching, stitchingColor } = design;
  const clipId = useId();
  const patternId = useId();

  if (!silhouette) {
    return (
      <div className={cn("aspect-square w-full bg-secondary rounded-lg flex items-center justify-center", className)}>
        <p className="text-muted-foreground font-body">Select a silhouette to begin</p>
      </div>
    );
  }

  const SilhouettePath = silhouette.path;
  const hardwarePosition = hardware ? silhouette.hardwarePositions[hardware.id] : null;

  return (
    <div className={cn("relative aspect-square w-full", className)}>
        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg">
            <defs>
                {material && (
                    <pattern id={patternId} patternUnits="userSpaceOnUse" width="24" height="24">
                        <image href={material.imageUrl} x="0" y="0" width="24" height="24" preserveAspectRatio="xMidYMid slice" />
                    </pattern>
                )}
                <clipPath id={clipId}>
                    <SilhouettePath />
                </clipPath>
            </defs>

            {/* Base layer */}
            <SilhouettePath fill="hsl(var(--muted))" />

            {/* Material Texture */}
            {material && (
                <rect x="0" y="0" width="24" height="24" fill={`url(#${patternId})`} clipPath={`url(#${clipId})`} />
            )}
            
            {/* Stitching */}
            {stitchingColor && (
                <path
                  d={silhouette.stitchingPath}
                  fill="none"
                  stroke={stitchingColor.value}
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{transition: 'stroke 0.3s, stroke-dasharray 0.3s'}}
                  strokeDasharray={stitching?.id === 'straight' ? '0.5 0.5' : 'none'}
                />
            )}

        </svg>

        {/* Hardware Layer (HTML for easier positioning and animation) */}
        {hardware && hardwarePosition && hardwareColor && hardware.icon && (
            <div
                className="absolute transition-all duration-300"
                style={{
                    top: hardwarePosition.top,
                    left: hardwarePosition.left,
                    transform: hardwarePosition.transform,
                }}
            >
                <Icon
                    name={hardware.icon}
                    className="h-auto transition-all duration-300"
                    style={{
                        width: `${hardwarePosition.scale * 2}rem`,
                        color: hardwareColor.value
                    }}
                />
            </div>
        )}
    </div>
  );
}
