import { Syringe, Bot, Droplets, Wand2, Dna, Microscope, Scissors, Stethoscope, HeartPulse, UserCheck, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const aestheticTreatments = [
    { title: "Aplicação Estética de Toxina", items: ["Aplicação facial completa", "Tratamento da hiperidrose axilar", "Tratamento do bruxismo", "Hiperidrose palmar e plantar"], icon: <Bot/> },
    { title: "Preenchimento com Ácido Hialurônico", items: ["Face", "Preenchimentos híbridos com bioestimulador", "Glúteos", "Skinbooster"], icon: <Syringe/> },
    { title: "Bioestimuladores de Colágeno", items: ["Face, pescoço, colo e corpo"], icon: <Droplets/> },
    { title: "Fios de PDO (lisos)", items: ["Indicação para pálpebras e glabela"], icon: <Dna/> },
    { title: "Microagulhamento", items: ["Melasma, cicatrizes de acne, cicatrizes pós-cirúrgicas, melhora da textura da pele", "Frequentemente associado a peelings"], icon: <Wand2/> },
    { title: "Peelings Químicos", items: ["Peelings superficiais", "Peelings médios"], icon: <Droplets/> },
    { title: "Ultraformer", items: ["Tratamento facial completo", "Tratamentos corporais", "Protocolo específico para papada"], icon: <Bot/> },
    { title: "Tecnologias a Laser – Plataforma Etherea", items: ["Luz Pulsada", "Nd:YAG 1064 nm (manchas, melasma)", "Nd:YAG Long Pulse (vasinhos e vermelhidão)", "Laser Ablativo Erbium"], icon: <Dna/> },
    { title: "Tratamentos Capilares", items: ["MMP Capilar", "Mesoterapia Capilar"], icon: <HeartPulse/> },
];

const surgicalTreatments = [
    { title: "Cirurgias", items: ["Retirada de câncer de pele"], icon: <Scissors/> },
    { title: "Pequenas Cirurgias", items: ["Cistos, pequenos lipomas, queratoses seborreicas"], icon: <Scissors/> },
    { title: "Biópsias de pele", items: [], icon: <Microscope/> },
];

const clinicalTreatments = [
    { title: "Detecção de câncer de pele", icon: <UserCheck/> },
    { title: "Acne", icon: <CheckCircle2/> },
    { title: "Rosácea", icon: <CheckCircle2/> },
    { title: "Psoríase", icon: <CheckCircle2/> },
    { title: "Dermatites", icon: <CheckCircle2/> },
    { title: "Vitiligo", icon: <CheckCircle2/> },
    { title: "Melasma", icon: <CheckCircle2/> },
    { title: "Alopécias", icon: <CheckCircle2/> },
    { title: "Demais doenças da pele", icon: <Stethoscope/> },
    { title: "Tratamentos com imunobiológicos", icon: <HeartPulse/> },
];

const TreatmentList = ({ treatments }: { treatments: { title: string; items?: string[]; icon: React.ReactNode }[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {treatments.map((treatment, index) => (
            <AnimatedDiv key={index} animationClass="animate-fade-in-up" delay={index * 100}>
                <div className="flex items-start space-x-4 h-full">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mt-1">
                        {treatment.icon}
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground text-lg mb-1">{treatment.title}</h4>
                        {treatment.items && treatment.items.length > 0 && (
                             <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                {treatment.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        )}
                    </div>
                </div>
            </AnimatedDiv>
        ))}
    </div>
);

const SimpleTreatmentList = ({ treatments }: { treatments: { title: string; icon: React.ReactNode }[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {treatments.map((treatment, index) => (
            <AnimatedDiv key={index} animationClass="animate-fade-in-up" delay={index * 50}>
                <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 text-primary">
                        {treatment.icon}
                    </div>
                    <p className="text-foreground text-base">{treatment.title}</p>
                </div>
            </AnimatedDiv>
        ))}
    </div>
);


export function Treatments() {
    return (
        <section id="servicos" className="section-padding bg-cream relative overflow-hidden">
            <div className="absolute inset-0 texture-diamond"></div>
            <div className="container relative">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-16">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Tratamentos Oferecidos</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Soluções completas e personalizadas para a saúde e beleza da sua pele.
                    </p>
                </AnimatedDiv>

                <Tabs defaultValue="estetica" className="w-full">
                    <AnimatedDiv animationClass="animate-fade-in-up" delay={200}>
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12 mb-12 bg-primary/5 p-2 rounded-xl">
                            <TabsTrigger value="estetica" className="py-2.5 rounded-lg">Dermatologia Estética</TabsTrigger>
                            <TabsTrigger value="clinica" className="py-2.5 rounded-lg">Dermatologia Clínica</TabsTrigger>
                            <TabsTrigger value="cirurgica" className="py-2.5 rounded-lg">Dermatologia Cirúrgica</TabsTrigger>
                        </TabsList>
                    </AnimatedDiv>
                    
                    <Card className="rounded-3xl shadow-2xl border-primary/10 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <TabsContent value="estetica">
                                <TreatmentList treatments={aestheticTreatments} />
                            </TabsContent>
                            <TabsContent value="clinica">
                                <SimpleTreatmentList treatments={clinicalTreatments} />
                            </TabsContent>
                            <TabsContent value="cirurgica">
                                <TreatmentList treatments={surgicalTreatments} />
                            </TabsContent>
                        </CardContent>
                    </Card>
                </Tabs>
                
                <AnimatedDiv animationClass="animate-fade-in-up" delay={400} className="text-center mt-16">
                    <Card className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl shadow-lg bg-white relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                        <CardContent className="p-0 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 font-headline">
                                Pronta para começar sua jornada de cuidados?
                            </h3>
                             <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Cada tratamento é cuidadosamente planejado para atender suas necessidades e realçar sua beleza natural. Agende sua consulta e vamos criar juntas o plano ideal para você.
                            </p>
                            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <a href="https://wa.link/qu3dwh" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon className="h-5 w-5 mr-3" />
                                    Agendar uma avaliação completa
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </AnimatedDiv>
            </div>
        </section>
    );
}
