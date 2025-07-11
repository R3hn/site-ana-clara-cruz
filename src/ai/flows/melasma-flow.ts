'use server';
/**
 * @fileOverview Flow de IA para análise de melasma.
 *
 * - diagnoseMelasma: Uma função que analisa uma foto de pele para detectar sinais de melasma.
 * - DiagnoseMelasmaInput: O tipo de entrada para a função diagnoseMelasma.
 * - DiagnoseMelasmaOutput: O tipo de retorno para a função diagnoseMelasma.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DiagnoseMelasmaInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "Uma foto da pele de um paciente, como um data URI que deve incluir um tipo MIME e usar codificação Base64. Formato esperado: 'data:<mimetype>;base64,<dados_codificados>'."
    ),
});
export type DiagnoseMelasmaInput = z.infer<typeof DiagnoseMelasmaInputSchema>;

const DiagnoseMelasmaOutputSchema = z.object({
  melasma: z.object({
    isMelasma: z.boolean().describe('Verdadeiro se a imagem provavelmente contém melasma, falso caso contrário.'),
    diagnosis: z.string().describe('Uma breve explicação do diagnóstico (por exemplo, "Provável presença de Melasma" ou "Sinais de Melasma não detectados").'),
    confidence: z.number().describe('Um score de confiança (0-1) na detecção de melasma.'),
  }),
  treatments: z.array(z.string()).describe('Uma lista de 3 a 4 sugestões de tratamentos comuns para melasma, se detectado. Se não for detectado, retorne uma lista vazia.'),
  disclaimer: z.string().describe('Um aviso legal declarando que a análise de IA não substitui uma consulta médica profissional com um dermatologista.'),
});
export type DiagnoseMelasmaOutput = z.infer<typeof DiagnoseMelasmaOutputSchema>;

const melasmaPrompt = ai.definePrompt({
    name: 'melasmaDiagnosisPrompt',
    input: { schema: DiagnoseMelasmaInputSchema },
    output: { schema: DiagnoseMelasmaOutputSchema },
    prompt: `Você é um assistente dermatológico especialista em analisar imagens de pele para detectar sinais de melasma. Sua função é fornecer uma análise preliminar, NUNCA um diagnóstico definitivo.

    Analise a imagem a seguir e determine a probabilidade de ser melasma.

    Foto da pele: {{media url=photoDataUri}}

    Regras para a sua resposta:
    1.  **Análise de Melasma**: Avalie se a imagem contém manchas hiperpigmentadas, irregulares, geralmente simétricas, típicas do melasma. Defina 'isMelasma' como verdadeiro ou falso.
    2.  **Diagnóstico Curto**: Com base em 'isMelasma', forneça uma frase de diagnóstico curta.
        *   Se verdadeiro: "Provável presença de Melasma"
        *   Se falso: "Sinais de Melasma não detectados"
    3.  **Confiança**: Forneça um score de confiança de 0 a 1 para a sua avaliação sobre a presença de melasma.
    4.  **Sugestões de Tratamento**: Se 'isMelasma' for verdadeiro, liste 3-4 sugestões de tratamentos comuns (ex: "Uso rigoroso de protetor solar de amplo espectro", "Cremes clareadores com prescrição", "Procedimentos como peelings químicos", "Microagulhamento com drug delivery"). Se for falso, retorne um array vazio.
    5.  **Disclaimer Obrigatório**: SEMPRE inclua o seguinte texto no campo 'disclaimer': "Esta é uma análise gerada por inteligência artificial e não substitui um diagnóstico médico. Para uma avaliação precisa e um plano de tratamento adequado, é essencial agendar uma consulta com um dermatologista."

    Se a imagem não for uma foto de pele humana, defina 'isMelasma' como falso, a confiança como 0, e o diagnóstico como "Imagem inválida".`,
});


const diagnoseMelasmaFlow = ai.defineFlow(
  {
    name: 'diagnoseMelasmaFlow',
    inputSchema: DiagnoseMelasmaInputSchema,
    outputSchema: DiagnoseMelasmaOutputSchema,
  },
  async (input) => {
    const { output } = await melasmaPrompt(input);
    if (!output) {
      throw new Error("A análise da IA não retornou uma resposta válida.");
    }
    return output;
  }
);


export async function diagnoseMelasma(input: DiagnoseMelasmaInput): Promise<DiagnoseMelasmaOutput> {
  return diagnoseMelasmaFlow(input);
}
