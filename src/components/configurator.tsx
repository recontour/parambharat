'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AnimatePresence, motion } from 'framer-motion';

import {
  silhouettes,
  materials,
  hardware,
  hardwareColors,
  stitching,
  stitchingColors,
  type DesignState,
  type SilhouetteOption,
  type MaterialOption,
  type HardwareOption,
  type StitchingOption,
} from '@/lib/data';
import { BagPreview } from '@/components/bag-preview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CheckCircle, Loader2 } from 'lucide-react';
import { saveDesign } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Icon } from './icons';
import { ScrollArea } from './ui/scroll-area';
import { Card, CardContent } from './ui/card';

const designSchema = z.object({
  silhouette: z.string().min(1, 'Silhouette is required'),
  material: z.string().optional(),
  hardware: z.string().optional(),
  hardwareColor: z.string().optional(),
  stitching: z.string().optional(),
  stitchingColor: z.string().optional(),
});

type DesignFormData = z.infer<typeof designSchema>;

export function Configurator() {
  const [designState, setDesignState] = useState<DesignState>({
    silhouette: silhouettes[0],
    material: materials[0],
    hardware: hardware[0],
    hardwareColor: hardwareColors[1],
    stitching: stitching[0],
    stitchingColor: stitchingColors[0],
  });

  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const methods = useForm<DesignFormData>({
    resolver: zodResolver(designSchema),
    defaultValues: {
      silhouette: designState.silhouette?.id,
      material: designState.material?.id,
      hardware: designState.hardware?.id,
      hardwareColor: designState.hardwareColor?.name,
      stitching: designState.stitching?.id,
      stitchingColor: designState.stitchingColor?.name,
    },
  });

  const handleSave = async (data: DesignFormData) => {
    setIsSaving(true);
    const result = await saveDesign(data);
    setIsSaving(false);

    if (result.success) {
      toast({
        title: 'Design Saved!',
        description: 'Your masterpiece has been stored in your collection.',
        action: <CheckCircle className="text-green-500" />,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem saving your design.',
      });
    }
  };

  const updateDesign = (updates: Partial<DesignState>) => {
    setDesignState(prev => ({ ...prev, ...updates }));
    if (updates.silhouette) methods.setValue('silhouette', updates.silhouette.id);
    if (updates.material) methods.setValue('material', updates.material.id);
    if (updates.hardware) methods.setValue('hardware', updates.hardware.id);
    if (updates.hardwareColor) methods.setValue('hardwareColor', updates.hardwareColor.name);
    if (updates.stitching) methods.setValue('stitching', updates.stitching.id);
    if (updates.stitchingColor) methods.setValue('stitchingColor', updates.stitchingColor.name);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSave)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16">
          <div className="relative flex items-center justify-center p-4 rounded-lg">
            <AnimatePresence>
                <motion.div
                    key={designState.silhouette?.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-md mx-auto"
                >
                    <BagPreview design={designState} />
                </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col">
            <Tabs defaultValue="silhouette" className="w-full">
              <ScrollArea className="w-full">
                <TabsList className="mb-4 whitespace-nowrap">
                    <TabsTrigger value="silhouette">Silhouette</TabsTrigger>
                    <TabsTrigger value="material">Material</TabsTrigger>
                    <TabsTrigger value="hardware">Hardware</TabsTrigger>
                    <TabsTrigger value="stitching">Stitching</TabsTrigger>
                </TabsList>
              </ScrollArea>
              
              <AnimatePresence mode="wait">
                <TabsContent value="silhouette" asChild>
                    <motion.div key="silhouette" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <h3 className="text-xl font-headline mb-4">Choose Your Base</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {silhouettes.map((s) => (
                                <button type="button" key={s.id} onClick={() => updateDesign({ silhouette: s })} className={cn('p-2 border-2 rounded-lg flex flex-col items-center gap-2 transition-all', designState.silhouette?.id === s.id ? 'border-primary shadow-md' : 'border-transparent hover:border-primary/50')}>
                                    {s.icon && <Icon name={s.icon} className="w-16 h-16" />}
                                    <span className="text-sm font-body">{s.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </TabsContent>

                <TabsContent value="material" asChild>
                    <motion.div key="material" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <h3 className="text-xl font-headline mb-4">Select Material</h3>
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {materials.map((m) => (
                                <button type="button" key={m.id} onClick={() => updateDesign({ material: m })} className={cn('flex flex-col items-center gap-2 group', designState.material?.id === m.id ? 'text-primary' : '')}>
                                    <div className={cn('w-20 h-20 rounded-full overflow-hidden border-2 transition-all', designState.material?.id === m.id ? 'border-primary' : 'border-border group-hover:border-primary/50')}>
                                        <Image src={m.imageUrl!} alt={m.name} width={80} height={80} className="object-cover w-full h-full" />
                                    </div>
                                    <span className="text-sm font-body">{m.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </TabsContent>

                <TabsContent value="hardware" asChild>
                    <motion.div key="hardware" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <h3 className="text-xl font-headline mb-4">Customize Hardware</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-body font-semibold mb-2">Style</h4>
                                <div className="grid grid-cols-3 gap-4">
                                {hardware.map((h) => (
                                    <button type="button" key={h.id} onClick={() => updateDesign({ hardware: h })} className={cn('p-2 border-2 rounded-lg flex flex-col items-center gap-2 transition-all', designState.hardware?.id === h.id ? 'border-primary shadow-md' : 'border-transparent hover:border-primary/50')}>
                                        {h.icon && <Icon name={h.icon} className="w-12 h-12" />}
                                        <span className="text-sm font-body">{h.name}</span>
                                    </button>
                                ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-body font-semibold mb-2">Color</h4>
                                <div className="flex gap-2">
                                    {hardwareColors.map((c) => (
                                        <button type="button" key={c.name} onClick={() => updateDesign({ hardwareColor: c })} className={cn('w-10 h-10 rounded-full border-2 transition-all', designState.hardwareColor?.name === c.name ? 'border-primary' : 'border-border')} style={{backgroundColor: c.value}} aria-label={c.name} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </TabsContent>

                <TabsContent value="stitching" asChild>
                  <motion.div key="stitching" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                      <h3 className="text-xl font-headline mb-4">Refine The Stitching</h3>
                      <div className="space-y-6">
                          <div>
                              <h4 className="font-body font-semibold mb-2">Style</h4>
                              <div className="grid grid-cols-3 gap-4">
                                  {stitching.map((s) => (
                                      <button type="button" key={s.id} onClick={() => updateDesign({ stitching: s })} className={cn('p-2 border-2 rounded-lg flex flex-col items-center gap-2 transition-all', designState.stitching?.id === s.id ? 'border-primary shadow-md' : 'border-transparent hover:border-primary/50')}>
                                          {s.icon && <Icon name={s.icon} className="w-12 h-12" />}
                                          <span className="text-sm font-body">{s.name}</span>
                                      </button>
                                  ))}
                              </div>
                          </div>
                          <div>
                              <h4 className="font-body font-semibold mb-2">Color</h4>
                              <div className="flex flex-wrap gap-2">
                                  {stitchingColors.map((c) => (
                                      <button type="button" key={c.name} onClick={() => updateDesign({ stitchingColor: c })} className={cn('w-10 h-10 rounded-full border-2 transition-all', designState.stitchingColor?.name === c.name ? 'border-primary' : 'border-border')} style={{backgroundColor: c.value}} aria-label={c.name} />
                                  ))}
                              </div>
                          </div>
                      </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
            
            <div className="mt-auto pt-8">
              <Button type="submit" size="lg" className="w-full" disabled={isSaving}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Save Design
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
