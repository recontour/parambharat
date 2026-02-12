"use server";

import { z } from "zod";

const designSchema = z.object({
  silhouette: z.string().min(1, 'Silhouette is required'),
  material: z.string().optional(),
  hardware: z.string().optional(),
  hardwareColor: z.string().optional(),
  stitching: z.string().optional(),
  stitchingColor: z.string().optional(),
});

export async function saveDesign(designData: unknown) {
  try {
    const validatedData = designSchema.parse(designData);
    console.log("Saving design:", validatedData);

    // In a real application, you would save this data to a database like Firestore.
    // For example:
    // await db.collection('designs').add(validatedData);

    // Simulate network latency for a more realistic feel.
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Design saved successfully.");
    return { success: true, message: "Design saved successfully!" };

  } catch (error) {
    console.error("Failed to save design:", error);
    if (error instanceof z.ZodError) {
        return { success: false, message: "Invalid design data.", errors: error.errors };
    }
    return { success: false, message: "An unexpected error occurred." };
  }
}
