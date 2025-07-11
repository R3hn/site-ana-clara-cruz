// 'use server';
/**
 * @fileOverview Analyzes a photo of skin to detect melasma and suggest potential treatment options.
 *
 * - melasmaDetection - A function that handles the photo analysis process.
 * - MelasmaDetectionInput - The input type for the melasmaDetection function.
 * - MelasmaDetectionOutput - The return type for the melasmaDetection function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MelasmaDetectionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's skin, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type MelasmaDetectionInput = z.infer<typeof MelasmaDetectionInputSchema>;

const MelasmaDetectionOutputSchema = z.object({
  melasmaDetected:
    z
      .boolean()
      .describe('Whether or not melasma is likely present in the photo.'),
  potentialTreatments:
    z
      .string()
      .describe(
        'A comma-separated list of potential melasma treatments.  If melasmaDetected is false, return an empty string.'
      ),
  disclaimer:
    z
      .string()
      .describe(
        'A disclaimer that this analysis is not a substitute for professional medical advice.'
      ),
});
export type MelasmaDetectionOutput = z.infer<typeof MelasmaDetectionOutputSchema>;

export async function melasmaDetection(
  input: MelasmaDetectionInput
): Promise<MelasmaDetectionOutput> {
  return melasmaDetectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'melasmaDetectionPrompt',
  input: {schema: MelasmaDetectionInputSchema},
  output: {schema: MelasmaDetectionOutputSchema},
  prompt: `You are an AI assistant that analyzes photos of skin to detect melasma and suggest potential treatment options.

Analyze the following photo and determine if melasma is likely present. If it is, suggest potential treatments.  Your analysis should be brief, and only include the melasmaDetected and potentialTreatments output fields if melasma is detected.

Include the disclaimer in all responses.  It is very important.

Photo: {{media url=photoDataUri}}

Disclaimer: This analysis is not a substitute for professional medical advice. Consult with a dermatologist for a proper diagnosis and treatment plan.

Output in JSON format.
`,
});

const melasmaDetectionFlow = ai.defineFlow(
  {
    name: 'melasmaDetectionFlow',
    inputSchema: MelasmaDetectionInputSchema,
    outputSchema: MelasmaDetectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
