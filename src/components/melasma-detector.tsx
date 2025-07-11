"use client";

import { useState } from "react";
import Image from "next/image";
import { melasmaPhotoAnalysis, type MelasmaPhotoAnalysisOutput } from "@/ai/flows/melasma-photo-analysis";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Bot, CheckCircle, Loader2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedDiv } from "./animated-div";

export function MelasmaDetector() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<MelasmaPhotoAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAnalysis(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!photoFile || !photoPreview) {
      toast({
        title: "Nenhuma foto selecionada",
        description: "Por favor, escolha uma foto para analisar.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAnalysis(null);

    try {
      const result = await melasmaPhotoAnalysis({ photoDataUri: photoPreview });
      setAnalysis(result);
    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        title: "Erro na Análise",
        description: "Não foi possível analisar a foto. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="detector" className="section-padding bg-white">
      <div className="container">
        <AnimatedDiv animationClass="animate-in fade-in-down" className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Analisador de Pele com IA</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Receba uma análise preliminar da sua pele. Envie uma foto e nossa IA ajudará a identificar sinais de melasma.
          </p>
        </AnimatedDiv>

        <AnimatedDiv animationClass="animate-in zoom-in-95" delay={200}>
            <Card className="max-w-4xl mx-auto shadow-2xl rounded-3xl overflow-hidden border-primary/10">
                <div className="grid md:grid-cols-2">
                    <div className="p-8">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="font-headline text-2xl text-accent flex items-center gap-2">
                                <Bot className="text-primary"/> Análise com Inteligência Artificial
                            </CardTitle>
                            <CardDescription>
                                Envie uma foto nítida e de perto da sua pele para uma análise inicial.
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="p-0 space-y-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="picture">Sua Foto</Label>
                                    <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} disabled={isLoading} />
                                </div>
                                {photoPreview && (
                                    <div className="mt-4">
                                    <Image
                                        src={photoPreview}
                                        alt="Pré-visualização da foto"
                                        width={150}
                                        height={150}
                                        className="rounded-lg object-cover"
                                    />
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="p-0 mt-6">
                                <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-primary to-primary-light text-white" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Analisando...
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="mr-2 h-4 w-4" />
                                            Analisar Foto
                                        </>
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </div>

                    <div className="bg-primary/5 p-8 flex flex-col justify-center">
                        {analysis ? (
                        <div className="space-y-4 animate-in fade-in">
                            <h3 className="font-headline text-xl text-accent">Resultado da Análise</h3>
                            <div className={`flex items-center gap-2 font-semibold ${analysis.melasmaDetected ? 'text-orange-600' : 'text-green-600'}`}>
                                {analysis.melasmaDetected ? <AlertCircle /> : <CheckCircle />}
                                <span>{analysis.melasmaDetected ? 'Sinais de melasma possivelmente detectados' : 'Sinais de melasma não aparentes'}</span>
                            </div>
                            {analysis.melasmaDetected && analysis.potentialTreatments && (
                                <div>
                                    <h4 className="font-semibold text-foreground">Tratamentos potenciais sugeridos:</h4>
                                    <p className="text-muted-foreground">{analysis.potentialTreatments}</p>
                                </div>
                            )}
                            <div className="p-4 bg-amber-100 border-l-4 border-amber-500 text-amber-800 rounded-r-lg">
                                <h4 className="font-bold">Aviso Importante</h4>
                                <p className="text-sm">{analysis.disclaimer}</p>
                            </div>
                        </div>
                        ) : (
                        <div className="text-center text-muted-foreground">
                            <Bot size={48} className="mx-auto mb-4 text-primary/50" />
                            <p>O resultado da sua análise aparecerá aqui.</p>
                        </div>
                        )}
                    </div>
                </div>
            </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
}
