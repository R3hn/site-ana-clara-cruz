import { Syringe, Bot, Droplets, Wand2, Dna, Microscope, Scissors, Stethoscope, HeartPulse, UserCheck, CheckCircle2, ShieldCheck, Waves, Sun, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AnimatedDiv } from "./animated-div";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-26.7l-7-4.1-72.5 19.1 19.4-70.5-4.5-7.3c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const aestheticTreatments = [
    { title: "Aplicação Estética de Toxina", description: "Suavização de rugas e tratamento de condições como hiperidrose e bruxismo.", icon: <Bot className="h-6 w-6"/> },
    { title: "Preenchimento com Ácido Hialurônico", description: "Restauração de volume, contorno facial e hidratação profunda da pele.", icon: <Syringe className="h-6 w-6"/> },
    { title: "Bioestimuladores de Colágeno", description: "Estímulo da produção natural de colágeno para uma pele mais firme e rejuvenescida.", icon: <Sparkles className="h-6 w-6"/> },
    { title: "Fios de PDO (lisos)", description: "Melhora da textura e firmeza da pele em áreas delicadas como pálpebras e glabela.", icon: <Dna className="h-6 w-6"/> },
    { title: "Microagulhamento", description: "Técnica para tratar melasma, cicatrizes e melhorar a textura geral da pele.", icon: <Wand2 className="h-6 w-6"/> },
    { title: "Peelings Químicos", description: "Renovação celular controlada para uma pele mais uniforme, lisa e luminosa.", icon: <Droplets className="h-6 w-6"/> },
    { title: "Ultraformer", description: "Tecnologia de ultrassom para lifting facial não invasivo e contorno corporal.", icon: <Bot className="h-6 w-6"/> },
    { title: "Tecnologias a Laser – Plataforma Etherea", description: "Tratamentos avançados para manchas, vasos, melasma e rejuvenescimento.", icon: <Dna className="h-6 w-6"/> },
    { title: "Tratamentos Capilares", description: "Protocolos para fortalecer os fios, estimular o crescimento e tratar alopécias.", icon: <HeartPulse className="h-6 w-6"/> },
];

const surgicalTreatments = [
    { title: "Cirurgias de Câncer de Pele", description: "Remoção segura e especializada de lesões malignas com foco na saúde e estética.", icon: <Scissors className="h-6 w-6"/> },
    { title: "Pequenas Cirurgias", description: "Extração de cistos, lipomas e outras lesões benignas com técnica apurada.", icon: <Scissors className="h-6 w-6"/> },
    { title: "Biópsias de Pele", description: "Coleta de amostras para análise patológica, essencial para um diagnóstico preciso.", icon: <Microscope className="h-6 w-6"/> },
];

const clinicalTreatments = [
    { title: "Detecção Precoce de Câncer de Pele", description: "Avaliação minuciosa de pintas e lesões para diagnóstico precoce e prevenção.", icon: <UserCheck/> },
    { title: "Tratamento de Acne", description: "Abordagens personalizadas para controle da acne, prevenção de cicatrizes e cuidados com a pele.", icon: <CheckCircle2/> },
    { title: "Controle da Rosácea", description: "Planos de tratamento para minimizar a vermelhidão e controlar os sintomas da rosácea.", icon: <Sun/> },
    { title: "Manejo da Psoríase", description: "Cuidados para controlar as lesões, aliviar o desconforto e melhorar a qualidade de vida.", icon: <ShieldCheck/> },
    { title: "Tratamento de Dermatites", description: "Diagnóstico e tratamento de diversos tipos de dermatites, como atópica e de contato.", icon: <Waves/> },
    { title: "Cuidado com Vitiligo", description: "Opções de tratamento para estabilização e repigmentação das áreas afetadas pela condição.", icon: <Sparkles/> },
    { title: "Gestão do Melasma", description: "Protocolos avançados e personalizados para clarear e controlar as manchas de melasma.", icon: <Sun/> },
    { title: "Tratamento de Alopécias", description: "Diagnóstico preciso das causas da queda de cabelo e tratamentos para a saúde capilar.", icon: <HeartPulse/> },
    { title: "Doenças da Pele em Geral", description: "Diagnóstico e tratamento de uma vasta gama de outras condições dermatológicas.", icon: <Stethoscope/> },
    { title: "Terapias com Imunobiológicos", description: "Uso de medicamentos modernos e de alta tecnologia para doenças inflamatórias crônicas.", icon: <ShieldCheck/> },
];

const TreatmentGroup = ({ title, treatments, animationDelay }: { title: string, treatments: { title: string; description: string; icon: React.ReactNode }[], animationDelay: number }) => (
    <AnimatedDiv animationClass="animate-fade-in-up" delay={animationDelay}>
        <div className="mb-16">
            <h3 className="text-3xl font-bold text-accent mb-12 text-center font-headline">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {treatments.map((treatment, index) => (
                    <div key={index} className="flex items-start space-x-5">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1">
                            {treatment.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground text-lg mb-1">{treatment.title}</h4>
                            <p className="text-muted-foreground text-base leading-relaxed">{treatment.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedDiv>
);

export function Treatments() {
    return (
        <section id="servicos" className="section-padding bg-cream relative overflow-hidden">
            <div className="absolute inset-0 texture-diamond"></div>
            <div className="container relative">
                <AnimatedDiv animationClass="animate-fade-in-down" className="text-center mb-20">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-4">Tratamentos Oferecidos</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Soluções completas e personalizadas para a saúde e beleza da sua pele.
                    </p>
                </AnimatedDiv>

                <div className="space-y-16">
                    <TreatmentGroup title="Dermatologia Estética" treatments={aestheticTreatments} animationDelay={200} />
                    <TreatmentGroup title="Dermatologia Clínica" treatments={clinicalTreatments} animationDelay={400} />
                    <TreatmentGroup title="Dermatologia Cirúrgica" treatments={surgicalTreatments} animationDelay={600} />
                </div>
                
                <AnimatedDiv animationClass="animate-fade-in-up" delay={800} className="text-center mt-24">
                    <Card className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl shadow-lg bg-white relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
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
