
"use client";

import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Lightbulb, UploadCloud, Wand2, X } from 'lucide-react';
import { AnimatedDiv } from "./animated-div";
import { useToast } from '@/hooks/use-toast';
import { diagnoseMelasma, DiagnoseMelasmaOutput } from '@/ai/flows/melasma-flow';
import Image from 'next/image';

const ResultCard = ({ result }: { result: DiagnoseMelasmaOutput }) => (
    <Card className="bg-white rounded-3xl p-8 shadow-lg border-primary/10 w-full animate-fade-in-up">
        <CardHeader className="p-0 mb-6 text-center">
            <Wand2 className="h-12 w-12 mx-auto text-primary animate-gentle-float mb-4" />
            <CardTitle className="text-3xl font-bold text-accent font-headline">Resultado da Análise</CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
                Esta é uma análise preliminar.
            </CardDescription>
        </CardHeader>
        <CardContent className="p-0 space-y-6">
            <div className={`rounded-xl p-6 text-center ${result.melasma.isMelasma ? 'bg-primary/10' : 'bg-green-100'}`}>
                <h3 className="font-semibold text-xl text-accent mb-2">Diagnóstico Preliminar</h3>
                <p className="text-3xl font-bold font-headline" style={{ color: result.melasma.isMelasma ? 'hsl(var(--primary))' : '#28a745' }}>
                    {result.melasma.diagnosis}
                </p>
            </div>

            {result.melasma.isMelasma && (
                <div className="rounded-xl p-6 bg-secondary/70">
                    <h3 className="font-semibold text-xl text-accent mb-3">Sugestões de Tratamento</h3>
                    <ul className="list-disc list-inside text-foreground space-y-2">
                        {result.treatments.map((treatment, index) => (
                            <li key={index}>{treatment}</li>
                        ))}
                    </ul>
                </div>
            )}

            <Alert variant="destructive" className="bg-red-50 border-red-200">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-bold text-destructive">Atenção: Análise Não-Médica</AlertTitle>
                <AlertDescription className="text-destructive/90">
                    {result.disclaimer}
                </AlertDescription>
            </Alert>
        </CardContent>
    </Card>
);

export function MelasmaDetector() {
    const { toast } = useToast();
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<DiagnoseMelasmaOutput | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            setAnalysisResult(null); // Reset previous result
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        setImageFile(null);
        setAnalysisResult(null);
    };

    const handleAnalyzeClick = async () => {
        if (!imageFile) {
            toast({
                variant: "destructive",
                title: "Nenhuma imagem selecionada",
                description: "Por favor, envie uma foto para análise.",
            });
            return;
        }

        setIsLoading(true);
        setAnalysisResult(null);

        try {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = async (event) => {
                const photoDataUri = event.target?.result as string;
                const result = await diagnoseMelasma({ photoDataUri });
                setAnalysisResult(result);
            };
            reader.onerror = (error) => {
                console.error("Error reading file:", error);
                toast({
                    variant: "destructive",
                    title: "Erro ao carregar imagem",
                    description: "Não foi possível processar o arquivo. Tente novamente.",
                });
            };
        } catch (error) {
            console.error("Analysis error:", error);
            toast({
                variant: "destructive",
                title: "Erro na Análise",
                description: "Ocorreu um problema ao analisar sua foto. Por favor, tente novamente.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="analisador-ia" className="section-padding bg-white relative overflow-hidden">
            <div className="absolute inset-0 texture-diamond"></div>
            <div className="container relative">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Analisador de Melasma com IA</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Envie uma foto da sua pele e receba uma análise preliminar sobre a possibilidade de melasma.
                    </p>
                </AnimatedDiv>
                
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
                    <AnimatedDiv animationClass="animate-fade-in-up" delay={200} className="w-full">
                        <Card className="w-full shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden border-primary/10">
                            <CardContent className="p-0">
                                {!analysisResult ? (
                                    <div className="flex flex-col items-center gap-8">
                                        {!imagePreview ? (
                                            <label htmlFor="image-upload" className="w-full max-w-lg cursor-pointer flex flex-col items-center justify-center p-8 border-2 border-dashed border-primary/30 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors">
                                                <UploadCloud className="h-16 w-16 text-primary mb-4" />
                                                <h3 className="text-xl font-semibold text-accent">Clique para enviar uma foto</h3>
                                                <p className="text-muted-foreground mt-1">PNG, JPG ou WEBP (máx. 5MB)</p>
                                                <Input id="image-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleImageChange} />
                                            </label>
                                        ) : (
                                            <div className="relative w-full max-w-sm animate-scale-in">
                                                <Image src={imagePreview} alt="Pré-visualização da pele" width={400} height={400} className="rounded-2xl shadow-lg w-full h-auto object-cover" />
                                                <Button variant="destructive" size="icon" className="absolute -top-4 -right-4 rounded-full h-10 w-10 shadow-lg" onClick={handleRemoveImage}>
                                                    <X className="h-5 w-5" />
                                                </Button>
                                            </div>
                                        )}

                                        {imagePreview && (
                                            <Button size="lg" onClick={handleAnalyzeClick} disabled={isLoading} className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                {isLoading ? (
                                                    <>
                                                        <span className="animate-spin h-5 w-5 mr-3 border-b-2 border-white rounded-full"></span>
                                                        Analisando...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Wand2 className="h-5 w-5 mr-3" />
                                                        Analisar Minha Pele
                                                    </>
                                                )}
                                            </Button>
                                        )}
                                    </div>
                                ) : (
                                    <ResultCard result={analysisResult} />
                                )}
                            </CardContent>
                        </Card>
                    </AnimatedDiv>
                </div>
            </div>
        </section>
    );
}

